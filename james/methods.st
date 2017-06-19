"
../MacOS/Pharo --headless Pharo-minimal.image methods.st
"
[
| cr lf tab block stream1 reservedSelectors list count compileErrors |
cr := Character cr.
lf := Character lf.
tab := Character tab.
count := 0.
block := [:aString | aString collect: [:each | each == cr ifTrue: [lf] ifFalse: [each]]].
reservedSelectors := #(
	__inProtectedMode _and: _downTo:by:do: _downTo:do: _gsReturnNothingEnableEvents
	_gsReturnNoResult _isArray _isExceptionClass _isExecBlock _isFloat _isInteger
	_isNumber _isOneByteString _isRange _isRegexp _isRubyHash _isScaledDecimal
	_isSmallInteger _isSymbol _leaveProtectedMode _or: _stringCharSize ~~
	and: == ifFalse: ifFalse:ifTrue: ifNil: ifNil:ifNotNil: ifNotNil: ifNotNil:ifNil: ifTrue:
	ifTrue:ifFalse: isKindOf: or: timesRepeat: to:by:do: to:do: untilFalse untilFalse: untilTrue
	untilTrue: whileFalse whileFalse: whileTrue whileTrue: repeat
).
compileErrors := 
#(
	#(#Object #mustBeBooleanInMagic:)
	#('MetaLink class' #defaultOptions)
	#('OpalCompiler class' #defaultOptions)
	#(#MCPatch #initializeWithBase:target:)
	#(#UIManager #spawnNewProcess)
	#(#MCVersion #withAllDependenciesDo:)
	#(#RBProgramNode #comments:)
	#(#Protocol #initialize)
	#('Job class' #exampleCurrentValue)
	#(#ZnImageExampleDelegate #html)
	#(#PharoChangesCondenser #reset)
	#(#SourceFileArray #readOnlyCopy)
	#(#TemporaryVariable #hash)
	#('TextFontChange class' #defaultFontChange)
	#('Context class' #runSimulated:)
	#(#IRBytecodeDecompiler #jump:)
	#(#TraitDescription fileOutLocalMethodsInCategory:on:)
	#(#UTF16TextConverter #nextFromStream:)
	#(#ZdcPluginSSLSession #serverName:)
	#(#IRReconstructor #createTempVectorNamed:withVars:)
	#(#ConfigurationCommandLineHandler #printConfigurations:)
	#(#IRPrinterV2 #visitPopIntoRemoteTemp:)
	#(#IRPrinterV2 #visitPushRemoteTemp:)
	#(#IRPrinterV2 #visitStoreRemoteTemp:)
	#(#StdioStream #next:)
	#(#ChunkReadStream #parseLangTagFor:)
	#(#Form #fillAlpha:)
	#(#MCMczReader #loadDefinitions)
	#(#Trait #category)
	#(#Class #category)
	#('Text class' #fromString:)
	#('Text class' #initialize)
	#(#String #withNoLineLongerThan:)
	#(#MCMcdReader #loadPatch)
	#(#MultiByteFileStream #nextChunk)
	#(#MultiByteFileStream #nextPreamble)
).
stream1 := (FileStream forceNewFileNamed: 'methods.gs') text
	nextPutAll: 'errorCount'; lf;
	nextPutAll: 'output push methods.out only'; lf;
	nextPutAll: 'run'; lf;
	nextPutAll: '| symbolList |'; lf;
	nextPutAll: 'symbolList := GsSession currentSession symbolList.'; lf;
	nextPutAll: 'symbolList add: (symbolList remove: PharoPools) after: Smalltalk.'; lf;
	nextPut: $%; lf.
list := true
	ifTrue: [ProtoObject withAllSubclasses]
	ifFalse: [Array with: Object].
list do: [ :eachClass | 
	eachClass isMeta ifFalse: [ | path stream2 |
		path := 'classes/' , eachClass name , '.gs'.
		stream1 
			nextPutAll: 'input '; nextPutAll: path; lf.
		stream2 := (FileStream forceNewFileNamed: path) 
			text; 
			nextPutAll: 'output push output/';
			nextPutAll: eachClass name;
			nextPutAll: '.out only'; lf;
			nextPutAll: 'errorCount'; lf.
		stream2 
			nextPutAll: 'removeAllMethods '; nextPutAll: eachClass name; lf;
			nextPutAll: 'removeAllClassMethods '; nextPutAll: eachClass name; lf;
			nextPutAll: 'run'; lf;
			nextPutAll: eachClass name;
			nextPutAll: ' comment: ';
			print: (block value: eachClass comment); lf;
			nextPut: $%; lf.
		(Array with: eachClass class with: eachClass) do: [ :eachBehavior |
			| methodDict organization  |
			methodDict := eachBehavior methodDict.
			organization := eachBehavior organization.
			methodDict keys asSortedCollection do: [ :eachSelector | | category source i |
				category := organization categoryOfElement: eachSelector.
				source := block value: (methodDict at: eachSelector) sourceCode.
				i := source findString: '<primitive:'.
				0 < i ifTrue: [ | string inComment inString |
					inComment := false.
					inString := false.
					(string := source copyFrom: 1 to: i - 1) do: [:char | 
						char == $" ifTrue: [inComment := inComment not].
						(inComment not and: [char == $']) ifTrue: [inString := inString not].
					].
					(inComment not and: [inString not]) ifTrue: [
						source := string , '<pharoPrimitive>' , lf asString , 
							'"' , tab asString , 
							((source copyFrom: i to: source size) copyReplaceAll: '"' with: '""') , 
							'"'.
					].
				].
				(reservedSelectors includes: eachSelector) ifTrue: [
					eachSelector == #~~ ifTrue: [
						source := '_reservedSelector_tilde_tilde_:' , (source copyFrom: 3 to: source size)
					] ifFalse: [eachSelector == #== ifTrue: [
						source := '_reservedSelector_equal_equal_:' , (source copyFrom: 3 to: source size)
					] ifFalse: [
						source := '_reservedSelector_' , source.
					]].
				].
				(compileErrors anySatisfy: [:pair | 
					pair first = eachBehavior name and: [pair last == eachSelector]]) ifTrue: [
						| i |
						i :=  source indexOf: lf.
						(source at: i - 1) == $. ifTrue: [i := i - 1].
						source := (source copyFrom: 1 to: i - 1) , lf asString , 
							'	<compileError>' , lf asString , '"' , 
							((source copyFrom: i to: source size) copyReplaceAll: '"' with: '""') , '"'.
					].
				stream2 lf;
					nextPutAll: 'category: '''; nextPutAll: category; nextPut: $'; lf;
					nextPutAll: (eachBehavior isMeta ifTrue: ['classMethod: '] ifFalse: ['method: ']); 
					nextPutAll: eachBehavior baseClass name; lf.
				(source substrings: (Array with: lf)) do: [:eachLine | 
					(eachLine notEmpty and: [eachLine first == $%]) ifTrue: [stream2 space].
					stream2 nextPutAll: eachLine; lf.
				].
				stream2 nextPut: $%; lf.
				count := count + 1.
			].
		].
		stream2 
			nextPutAll: 'errorCount'; lf;
			nextPutAll: 'output pop'; lf;
			nextPutAll: 'errorCount'; lf;
			close.
	].
].
stream1 
	nextPutAll: 'errorCount'; lf;
	nextPutAll: 'output pop'; lf;
	nextPutAll: 'errorCount'; lf;
	close.
Transcript show: 'method count = ' , count printString; cr.
] on: Error do: [:ex | 
	Transcript show: ex description; cr.
].
SmalltalkImage current snapshot: false andQuit: true.
