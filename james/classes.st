[
| count fileStream list |
fileStream := (FileStream forceNewFileNamed: 'classes.gs') text;
	nextPutAll: 'output push classes.out only'; lf;
	nextPutAll: 'run'; lf;
	nextPutAll: '| symbolList |'; lf;
	nextPutAll: 'symbolList := GsSession currentSession symbolList.'; lf;
	nextPutAll: 'symbolList add: (symbolList remove: Smalltalk) after: PharoPools.'; lf;
	nextPut: $%; lf;
	nextPutAll: 'errorCount'; lf.
list := OrderedCollection with: ProtoObject.
count := 0.
[ list notEmpty ] whileTrue: [ 
	| next |
	next := list removeFirst.
	next class == Metaclass ifFalse: [
		| instSpec superclass message isBytes |
		list addAll: next subclasses.
		instSpec := next instSpec.
		isBytes := false.
		((superclass := next superclass) notNil and: [superclass instSpec ~~ instSpec]) ifTrue: [
			(16 <= instSpec and: [instSpec <= 23]) ifTrue: [isBytes := true. message := ' byteSubclass: '''] ifFalse: [
			(2 <= instSpec and: [instSpec <= 4]) ifTrue: [message := ' indexableSubclass: '''] ifFalse: [
				message := ' subclass: '''.
			]].
		] ifFalse: [
			message := ' subclass: '''.
		].
		fileStream
			nextPutAll: 'run'; lf;
			nextPut: $(; nextPutAll: (superclass ifNil: ['nil'] ifNotNil: [:class | class name]);
			nextPutAll: message; nextPutAll: next name; nextPut: $'; 
			lf.
		isBytes ifFalse: [
			fileStream tab; nextPutAll: 'instVarNames: #('.
			next instVarNames do: [ :each | fileStream space; nextPutAll: each ].
			fileStream nextPut: $); lf.
		].
		fileStream tab; nextPutAll: 'classVars: #('.
		next classVarNames do: [ :each | fileStream space; nextPutAll: each ].
		fileStream nextPut: $); lf; tab; nextPutAll: 'classInstVars: #('.
		next class instVarNames do: [ :each | fileStream space; nextPutAll: each ].
		fileStream nextPut: $); lf; tab; nextPutAll: 'poolDictionaries: {'.
		next sharedPools do: [ :each | fileStream space; nextPutAll: each name; nextPutAll: '. ' ].
		fileStream 
			nextPut: $}; lf; 
			tab; nextPutAll: 'inDictionary: Smalltalk'; lf;
			tab; nextPutAll: 'newVersionOf: (Smalltalk at: #';
				nextPutAll: next name;
				nextPutAll: ' ifAbsent: [nil])'; lf;
			tab; nextPutAll: 'description: '''; print: instSpec; nextPut: $'; lf;
			tab; nextPutAll: 'options: #()'; lf;
			nextPutAll: ') category: '''; nextPutAll: next category; nextPutAll: '''.'; lf;
			nextPut: $%; lf;
			yourself.
		count := count + 1.
	].
].
fileStream 
	nextPutAll: 'errorCount'; lf;
	nextPutAll: 'output pop'; lf;
	nextPutAll: 'errorCount'; lf;
	close.
Transcript show: 'classes count = ' , count printString; cr.
] on: Error do: [:ex | 
	Transcript show: ex description; cr.
].
SmalltalkImage current snapshot: false andQuit: true.
