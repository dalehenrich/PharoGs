errorCount
output push classes.out only
errorCount
run
Smalltalk
	at: #Array put: (Globals at: #Array);
	at: #Behavior put: (Globals at: #Behavior);
	at: #BlockClosure put: (Globals at: #BlockClosure);
	at: #Boolean put: (Globals at: #Boolean);
	at: #ByteArray put: (Globals at: #ByteArray);
	at: #CannotReturn put: (Globals at: #CannotReturn);
	at: #Character put: (Globals at: #Character);
	at: #Class put: (Globals at: #Class);
	at: #Collection put: (Globals at: #Collection);
	at: #Error put: (Globals at: #Error);
	at: #Exception put: (Globals at: #Exception);
	at: #ExceptionSet put: (Globals at: #ExceptionSet);
	at: #Float put: (Globals at: #Float);
	at: #FloatingPointException put: (Globals at: #FloatingPointException);
	at: #Halt put: (Globals at: #Halt);
	at: #Integer put: (Globals at: #Integer);
	at: #LargeInteger put: (Globals at: #LargeInteger);
	at: #Magnitude put: (Globals at: #Magnitude);
	at: #Message put: (Globals at: #Message);
	at: #MessageNotUnderstood put: (Globals at: #MessageNotUnderstood);
	at: #Notification put: (Globals at: #Notification);
	at: #Number put: (Globals at: #Number);
	at: #Object put: (Globals at: #Object);
	at: #Pragma put: (Globals at: #Pragma);
	at: #ProcessorScheduler put: (Globals at: #ProcessorScheduler);
	at: #SequenceableCollection put: (Globals at: #SequenceableCollection);
	at: #SmallInteger put: (Globals at: #SmallInteger);
	at: #String put: (Globals at: #String);
	at: #Symbol put: (Globals at: #Symbol);
	at: #UndefinedObject put: (Globals at: #UndefinedObject);
	at: #Warning put: (Globals at: #Warning);
	at: #ZeroDivide put: (Globals at: #ZeroDivide);

	at: #ArithmeticError	put: (Globals at: #NumericError);
	at: #ClassDescription	put: (Globals at: #Module);
	at: #Metaclass 		put: (Globals at: #Metaclass3);
	at: #ScaledDecimal 	put: (Globals at: #FixedPoint);
	yourself.
%
errorCount
run
(Object subclass: 'NoSubclasses'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #NoSubclasses ifAbsent: [nil])
	description: '0'
	options: #()
	) category: 'GemStone'.
%
errorCount
run
(nil subclass: 'ProtoObject'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ProtoObject ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Kernel-Objects'.
%
errorCount
run
| names |
names := #( DependentsFields).
names do: [:each | 
	(Object classVarNames includes: each) ifFalse: [
		Object addClassVarName: each]].
%
errorCount
run
(ProtoObject subclass: 'MessageCatcher'
	instVarNames: #( accumulator)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MessageCatcher ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Methods'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(UndefinedObject classVarNames includes: each) ifFalse: [
		UndefinedObject addClassVarName: each]].
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(Boolean classVarNames includes: each) ifFalse: [
		Boolean addClassVarName: each]].
%
errorCount
run
(Object subclass: 'ConnectionQueue'
	instVarNames: #( portNumber maxQueueLength connections accessSema socket process)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ConnectionQueue ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
(Object subclass: 'ChangeRecord'
	instVarNames: #( file position type class category meta stamp)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ChangeRecord ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Changes'.
%
errorCount
run
(Object subclass: 'BitBlt'
	instVarNames: #( destForm sourceForm halftoneForm combinationRule destX destY width height sourceX sourceY clipX clipY clipWidth clipHeight colorMap)
	classVars: #( CachedFontColorMaps ColorConvertingMaps)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #BitBlt ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Graphics-Primitives'.
%
errorCount
run
(Object subclass: 'Random'
	instVarNames: #( seed a m q r)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Random ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Random-Core'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(Magnitude classVarNames includes: each) ifFalse: [
		Magnitude addClassVarName: each]].
%
errorCount
run
(Object subclass: 'LimitingLineStreamWrapper'
	instVarNames: #( stream line limitingBlock position)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LimitingLineStreamWrapper ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Streams'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(Message classVarNames includes: each) ifFalse: [
		Message addClassVarName: each]].
%
errorCount
run
(Object subclass: 'EllipseMidpointTracer'
	instVarNames: #( x y a b aSquared bSquared d1 d2 inFirstRegion)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #EllipseMidpointTracer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Graphics-Primitives'.
%
errorCount
run
(Object subclass: 'RemoteString'
	instVarNames: #( sourceFileNumber filePositionHi)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RemoteString ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Sources'.
%
errorCount
run
(Object subclass: 'Model'
	instVarNames: #( dependents announceur)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Model ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Model'.
%
errorCount
run
(Object subclass: 'AsyncFile'
	instVarNames: #( name writeable semaphore fileHandle)
	classVars: #( Busy ErrorCode)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AsyncFile ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Files-Core'.
%
errorCount
run
(Object subclass: 'Rectangle'
	instVarNames: #( origin corner)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Rectangle ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-BasicObjects'.
%
errorCount
run
(Object subclass: 'NetNameResolver'
	instVarNames: #()
	classVars: #( DefaultHostName HaveNetwork ResolverBusy ResolverError ResolverMutex ResolverReady ResolverSemaphore ResolverUninitialized)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #NetNameResolver ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
| names |
names := #( BackgroundProcess HighIOPriority LowIOPriority SystemBackgroundPriority SystemRockBottomPriority TimingPriority UserBackgroundPriority UserInterruptPriority UserSchedulingPriority).
names do: [:each | 
	(ProcessorScheduler classVarNames includes: each) ifFalse: [
		ProcessorScheduler addClassVarName: each]].
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(Collection classVarNames includes: each) ifFalse: [
		Collection addClassVarName: each]].
%
errorCount
run
(Object subclass: 'TextAttribute'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextAttribute ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(Object subclass: 'Stream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Stream ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Collections-Streams'.
%
errorCount
run
(Object subclass: 'Link'
	instVarNames: #( nextLink)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Link ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Support'.
%
errorCount
run
(Object subclass: 'Delay'
	instVarNames: #( delaySemaphore beingWaitedOn millisecondDelayDuration scheduler schedulerResumptionTime)
	classVars: #( Scheduler)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Delay ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(Object subclass: 'MimeConverter'
	instVarNames: #( dataStream mimeStream)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MimeConverter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-MIME'.
%
errorCount
run
(Object subclass: 'Point'
	instVarNames: #( x y)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Point ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-BasicObjects'.
%
errorCount
run
(Object subclass: 'DisplayObject'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DisplayObject ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Graphics-Display Objects'.
%
errorCount
run
(Object subclass: 'InstructionStream'
	instVarNames: #( sender pc)
	classVars: #( SpecialConstants)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InstructionStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Methods'.
%
errorCount
run
(Object subclass: 'DisplayTransform'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DisplayTransform ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Graphics-Transformations'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(ExceptionSet classVarNames includes: each) ifFalse: [
		ExceptionSet addClassVarName: each]].
%
errorCount
run
(Object subclass: 'DigitalSignatureAlgorithm'
	instVarNames: #( randKey randSeed)
	classVars: #( HighBitOfByte SmallPrimes)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DigitalSignatureAlgorithm ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Hashing-DSA'.
%
errorCount
run
(Object subclass: 'ThirtyTwoBitRegister'
	instVarNames: #( hi low)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ThirtyTwoBitRegister ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Hashing-Core'.
%
errorCount
run
(Object subclass: 'ZipEncoderNode'
	instVarNames: #( value frequency height bitLength code parent left right)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZipEncoderNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Streams'.
%
errorCount
run
(Object subclass: 'ZipEncoderTree'
	instVarNames: #( bitLengths codes maxCode)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZipEncoderTree ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Streams'.
%
errorCount
run
(Object subclass: 'MessageSend'
	instVarNames: #( receiver selector arguments)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MessageSend ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Messaging'.
%
errorCount
run
(Object subclass: 'MIMEHeaderValue'
	instVarNames: #( mainValue parameters)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MIMEHeaderValue ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-MIME'.
%
errorCount
run
(Object subclass: 'ExternalSemaphoreTable'
	instVarNames: #()
	classVars: #( ProtectAdd ProtectRemove)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ExternalSemaphoreTable ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Support'.
%
errorCount
run
(Object subclass: 'Archive'
	instVarNames: #( members)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Archive ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Archives'.
%
errorCount
run
(Object subclass: 'UUIDGenerator'
	instVarNames: #( node random counter lock)
	classVars: #( Default)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UUIDGenerator ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-UUID'.
%
errorCount
run
(Object subclass: 'EventManager'
	instVarNames: #( actionMap)
	classVars: #( ActionMaps)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #EventManager ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Object Events'.
%
errorCount
run
(Object indexableSubclass: 'WeakMessageSend'
	instVarNames: #( selector shouldBeNil arguments)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakMessageSend ifAbsent: [nil])
	description: '4'
	options: #()
) category: 'Kernel-Messaging'.
%
errorCount
run
(Object subclass: 'InstructionClient'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InstructionClient ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Kernel-Methods'.
%
errorCount
run
(Object subclass: 'SharedPool'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SharedPool ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Kernel-Classes'.
%
errorCount
run
(Object subclass: 'ProtocolClient'
	instVarNames: #( stream connectInfo lastResponse pendingResponses progressObservers)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ProtocolClient ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Protocols'.
%
errorCount
run
(Object subclass: 'Stopwatch'
	instVarNames: #( timespans state)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Stopwatch ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(Object subclass: 'ArchiveMember'
	instVarNames: #( fileName isCorrupt)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ArchiveMember ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Archives'.
%
errorCount
run
(Object subclass: 'Categorizer'
	instVarNames: #( categoryArray categoryStops elementArray)
	classVars: #( Default NullCategory)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Categorizer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Classes'.
%
errorCount
run
(Object subclass: 'Monitor'
	instVarNames: #( mutex ownerProcess nestingLevel defaultQueue queueDict queuesMutex)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Monitor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(Object subclass: 'EncodedCharSet'
	instVarNames: #()
	classVars: #( EncodedCharSets)
	classInstVars: #( compoundTextSequence UcsTable)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #EncodedCharSet ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Multilingual-Encodings'.
%
errorCount
run
(Object subclass: 'CompoundTextConverterState'
	instVarNames: #( g0Size g1Size g0Leading g1Leading charSize streamPosition)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CompoundTextConverterState ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-TextConversion'.
%
errorCount
run
(Object subclass: 'CombinedChar'
	instVarNames: #( codes combined)
	classVars: #( Compositions Decompositions Diacriticals)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CombinedChar ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-BasicObjects'.
%
errorCount
run
(Object subclass: 'X11Encoding'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #X11Encoding ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Multilingual-Encodings'.
%
errorCount
run
(Object subclass: 'ISOLanguageDefinition'
	instVarNames: #( iso3 iso2 iso3Alternate language)
	classVars: #( ISO2Countries ISO2Table ISO3Countries ISO3Table)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ISOLanguageDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Localization-Utilities'.
%
errorCount
run
(Object subclass: 'Locale'
	instVarNames: #( id shortDate longDate time decimalSymbol digitGrouping currencySymbol currencyNotation measurement offsetLocalToUTC offsetVMToUTC dstActive)
	classVars: #( Activated Current CurrentPlatform KnownLocales LanguageSymbols LocaleChangeListeners PlatformEncodings)
	classInstVars: #( localeAnnouncer)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Locale ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Localization-Locales'.
%
errorCount
run
(Object subclass: 'LocaleID'
	instVarNames: #( isoLanguage isoCountry)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LocaleID ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Localization-Locales'.
%
errorCount
run
(Object subclass: 'InternetConfiguration'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InternetConfiguration ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
(Object subclass: 'MCAncestry'
	instVarNames: #( ancestors stepChildren)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCAncestry ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(Object subclass: 'MCDefinition'
	instVarNames: #()
	classVars: #( Instances InstancesWriteLock)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCDefinition ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Monticello-Base'.
%
errorCount
run
(Object subclass: 'MCDefinitionIndex'
	instVarNames: #( definitions)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCDefinitionIndex ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Patching'.
%
errorCount
run
(Object subclass: 'MCDependencySorter'
	instVarNames: #( required provided orderedItems)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCDependencySorter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Loading'.
%
errorCount
run
(Object subclass: 'MCDoItParser'
	instVarNames: #( source)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCDoItParser ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Chunk Format'.
%
errorCount
run
(Object subclass: 'MCMergeRecord'
	instVarNames: #( version packageSnapshot ancestorInfo ancestorSnapshot imagePatch mergePatch)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMergeRecord ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(Object subclass: 'MCMock'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMock ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Monticello-Mocks'.
%
errorCount
run
(Object subclass: 'MCMockClassD'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMockClassD ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'MonticelloMocks'.
%
errorCount
run
(Object indexableSubclass: 'MCMockClassE'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMockClassE ifAbsent: [nil])
	description: '2'
	options: #()
) category: 'MonticelloMocks'.
%
errorCount
run
(Object subclass: 'MCMockClassF'
	instVarNames: #()
	classVars: #( Foo)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMockClassF ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'MonticelloMocks'.
%
errorCount
run
(Object subclass: 'MCMockClassG'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMockClassG ifAbsent: [nil])
	description: '10'
	options: #()
) category: 'MonticelloMocks'.
%
errorCount
run
(Object byteSubclass: 'MCMockClassH'
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMockClassH ifAbsent: [nil])
	description: '16'
	options: #()
) category: 'MonticelloMocks'.
%
errorCount
run
(Object indexableSubclass: 'MCMockClassI'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMockClassI ifAbsent: [nil])
	description: '4'
	options: #()
) category: 'MonticelloMocks'.
%
errorCount
run
(Object subclass: 'MCPackage'
	instVarNames: #( name)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCPackage ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Base'.
%
errorCount
run
(Object subclass: 'MCPackageCache'
	instVarNames: #( sorter fileNames)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCPackageCache ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Repositories'.
%
errorCount
run
(Object subclass: 'MCPatch'
	instVarNames: #( operations)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCPatch ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Patching'.
%
errorCount
run
(Object subclass: 'MCPatcher'
	instVarNames: #( definitions)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCPatcher ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Patching'.
%
errorCount
run
(Object subclass: 'MCReader'
	instVarNames: #( stream)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCReader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Storing'.
%
errorCount
run
(Object subclass: 'MCRepository'
	instVarNames: #( creationTemplate)
	classVars: #( Settings)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCRepository ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Repositories'.
%
errorCount
run
(Object subclass: 'MCScanner'
	instVarNames: #( stream)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCScanner ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Chunk Format'.
%
errorCount
run
(Object subclass: 'MCSnapshot'
	instVarNames: #( definitions)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCSnapshot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Base'.
%
errorCount
run
(Object subclass: 'MCVariableDefinition'
	instVarNames: #( name)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCVariableDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Modeling'.
%
errorCount
run
(Object subclass: 'MCVersionDependency'
	instVarNames: #( package versionInfo)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCVersionDependency ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(Object subclass: 'MCVersionLoader'
	instVarNames: #( versions)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCVersionLoader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Loading'.
%
errorCount
run
(Object subclass: 'MCVersionMerger'
	instVarNames: #( records merger)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCVersionMerger ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(Object subclass: 'MCVersionSorter'
	instVarNames: #( layers depthIndex depths stepparents roots)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCVersionSorter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(Object subclass: 'MCWriter'
	instVarNames: #( stream)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCWriter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Storing'.
%
errorCount
run
(Object subclass: 'MCConfiguration'
	instVarNames: #( name dependencies repositories log)
	classVars: #( DefaultLog UpgradeIsMerge)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCConfiguration ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloConfigurations'.
%
errorCount
run
(Object subclass: 'SocketStream'
	instVarNames: #( recentlyRead socket inBuffer outBuffer inNextToWrite outNextToWrite lastRead timeout autoFlush bufferSize binary shouldSignal)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SocketStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
(Object subclass: 'UIManager'
	instVarNames: #()
	classVars: #( Default)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UIManager ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'UIManager'.
%
errorCount
run
(Object subclass: 'MCFrontier'
	instVarNames: #( frontier bag)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFrontier ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(Object subclass: 'FileServices'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileServices ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-FileRegistry'.
%
errorCount
run
(Object subclass: 'TraitBehavior'
	instVarNames: #( methodDict traitComposition localSelectors users)
	classVars: #( TraitProperties)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TraitBehavior ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Traits-Kernel'.
%
errorCount
run
(Object subclass: 'TraitComposition'
	instVarNames: #( transformations)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TraitComposition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Traits-Composition'.
%
errorCount
run
(Object subclass: 'TraitMethodDescription'
	instVarNames: #( selector locatedMethods)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TraitMethodDescription ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Traits-Composition'.
%
errorCount
run
(Object subclass: 'TraitTransformation'
	instVarNames: #( subject)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TraitTransformation ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Traits-Composition'.
%
errorCount
run
(Object subclass: 'Mutex'
	instVarNames: #( semaphore owner)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Mutex ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(Object subclass: 'MutexSet'
	instVarNames: #( array)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MutexSet ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(Pragma classVarNames includes: each) ifFalse: [
		Pragma addClassVarName: each]].
%
errorCount
run
(Object subclass: 'LanguageEnvironment'
	instVarNames: #( id)
	classVars: #( ClipboardInterpreterClass Current FileNameConverter InputInterpreterClass KnownEnvironments SystemConverter)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LanguageEnvironment ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-Languages'.
%
errorCount
run
(Object subclass: 'MCRepositoryGroup'
	instVarNames: #( repositories useCache)
	classVars: #()
	classInstVars: #( default)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCRepositoryGroup ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(Object subclass: 'DeepCopier'
	instVarNames: #( references)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DeepCopier ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Copying'.
%
errorCount
run
(Object subclass: 'RxCharSetParser'
	instVarNames: #( source lookahead elements)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxCharSetParser ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(Object subclass: 'RxMatchOptimizer'
	instVarNames: #( ignoreCase prefixes nonPrefixes conditions testBlock methodPredicates nonMethodPredicates predicates nonPredicates lookarounds)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxMatchOptimizer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(Object subclass: 'RxParser'
	instVarNames: #( input lookahead)
	classVars: #( BackslashConstants BackslashSpecials)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxParser ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(Object subclass: 'RxmLink'
	instVarNames: #( next)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxmLink ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(Object subclass: 'RxmTerminator'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxmTerminator ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(Object subclass: 'RxsNode'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxsNode ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(Object subclass: 'MIMEDocument'
	instVarNames: #( type contents contentStream uri)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MIMEDocument ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-MIME'.
%
errorCount
run
(Object subclass: 'Announcement'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Announcement ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Announcements-Core'.
%
errorCount
run
(Object subclass: 'Clipboard'
	instVarNames: #( contents recent)
	classVars: #( Default)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Clipboard ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Clipboard'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(BlockClosure classVarNames includes: each) ifFalse: [
		BlockClosure addClassVarName: each]].
%
errorCount
run
(Object subclass: 'InputEventFetcher'
	instVarNames: #( eventHandlers fetcherProcess inputSemaphore)
	classVars: #( Default)
	classInstVars: #()
	poolDictionaries: { EventSensorConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InputEventFetcher ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-VMEvents'.
%
errorCount
run
(Object subclass: 'InputEventHandler'
	instVarNames: #( eventFetcher)
	classVars: #()
	classInstVars: #()
	poolDictionaries: { EventSensorConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InputEventHandler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-VMEvents'.
%
errorCount
run
(Object subclass: 'HMAC'
	instVarNames: #( hash key ipad epad)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #HMAC ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Hashing-Core'.
%
errorCount
run
(Object subclass: 'HashFunction'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #HashFunction ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Hashing-Core'.
%
errorCount
run
(Object subclass: 'Author'
	instVarNames: #( fullName)
	classVars: #()
	classInstVars: #( uniqueInstance)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Author ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Support'.
%
errorCount
run
(Object subclass: 'MCPackageLoader'
	instVarNames: #( requirements unloadableDefinitions obsoletions additions removals errorDefinitions provisions methodAdditions)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCPackageLoader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Loading'.
%
errorCount
run
(Object indexableSubclass: 'AdditionalMethodState'
	instVarNames: #( method selector)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AdditionalMethodState ifAbsent: [nil])
	description: '3'
	options: #()
) category: 'Kernel-Methods'.
%
errorCount
run
(Object subclass: 'GoferOperation'
	instVarNames: #( gofer model)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferOperation ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(Object subclass: 'TextConverter'
	instVarNames: #( latin1Map latin1Encodings)
	classVars: #()
	classInstVars: #( latin1Map latin1Encodings)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextConverter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-TextConversion'.
%
errorCount
run
(Object subclass: 'NetworkSystemSettings'
	instVarNames: #()
	classVars: #( BlabEmail HTTPProxyExceptions HTTPProxyPort HTTPProxyServer LastHTTPProxyExceptions LastHTTPProxyPort LastHTTPProxyServer ProxyPassword ProxyUser UseHTTPProxy UseNetworkAuthentification)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #NetworkSystemSettings ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
(Object subclass: 'SystemVersion'
	instVarNames: #( version date highestUpdate updates type major minor suffix)
	classVars: #( Current)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SystemVersion ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Support'.
%
errorCount
run
(Object subclass: 'Gofer'
	instVarNames: #( references repositories errorBlock packageCacheRepository resolvedReferencesCache)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Gofer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(Object subclass: 'GoferReference'
	instVarNames: #( name)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferReference ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(Object subclass: 'CompiledMethodTrailer'
	instVarNames: #( data encodedData kind size method)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CompiledMethodTrailer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Methods'.
%
errorCount
run
(Object subclass: 'RxMatcher'
	instVarNames: #( matcher ignoreCase startOptimizer stream markerPositions markerCount lastResult)
	classVars: #( Cr Lf)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxMatcher ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(Object subclass: 'NumberParser'
	instVarNames: #( sourceStream base neg integerPart fractionPart exponent scale nDigits lastNonZero requestor failBlock)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #NumberParser ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Parser'.
%
errorCount
run
(Object subclass: 'HashTableSizes'
	instVarNames: #( candidate goodPrimes primesToAvoid valuesNotToDivide)
	classVars: #()
	classInstVars: #( sizes smallSizesLookupTable)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #HashTableSizes ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Unordered'.
%
errorCount
run
(Object subclass: 'NaturalLanguageTranslator'
	instVarNames: #()
	classVars: #( Current)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #NaturalLanguageTranslator ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Localization-Translations'.
%
errorCount
run
(Object subclass: 'ChangeSet'
	instVarNames: #( name preamble postscript changeRecords)
	classVars: #( AllChangeSets DefaultChangeSetDirectoryName MustCheckForSlips)
	classInstVars: #( current)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ChangeSet ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Changes'.
%
errorCount
run
(Object subclass: 'ClassChangeRecord'
	instVarNames: #( changeTypes priorDefinition thisName priorName methodChanges)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassChangeRecord ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Changes'.
%
errorCount
run
(Object subclass: 'WeakFinalizationList'
	instVarNames: #( first)
	classVars: #( HasNewFinalization)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakFinalizationList ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Finalization'.
%
errorCount
run
(Object indexableSubclass: 'WeakFinalizerItem'
	instVarNames: #( list next executor)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakFinalizerItem ifAbsent: [nil])
	description: '4'
	options: #()
) category: 'System-Finalization'.
%
errorCount
run
(Object subclass: 'AnnouncementSubscription'
	instVarNames: #( announcer announcementClass subscriber action)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AnnouncementSubscription ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Announcements-Core'.
%
errorCount
run
(Object subclass: 'Announcer'
	instVarNames: #( registry)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Announcer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Announcements-Core'.
%
errorCount
run
(Object subclass: 'SubscriptionRegistry'
	instVarNames: #( subscriptions monitor)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SubscriptionRegistry ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Announcements-Core'.
%
errorCount
run
(Object indexableSubclass: 'WeakAnnouncementSubscription'
	instVarNames: #( list next announcer announcementClass action)
	classVars: #( FinalizationList)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakAnnouncementSubscription ifAbsent: [nil])
	description: '4'
	options: #()
) category: 'Announcements-Core'.
%
errorCount
run
(Object subclass: 'WeakSubscriptionBuilder'
	instVarNames: #( announcer)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakSubscriptionBuilder ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Announcements-Core'.
%
errorCount
run
(Object subclass: 'AtomicCollection'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AtomicCollection ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Collections-Atomic'.
%
errorCount
run
(Object subclass: 'AtomicQueueItem'
	instVarNames: #( next object)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AtomicQueueItem ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Atomic'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(Exception classVarNames includes: each) ifFalse: [
		Exception addClassVarName: each]].
%
errorCount
run
(Object subclass: 'Socket'
	instVarNames: #( semaphore socketHandle readSemaphore writeSemaphore)
	classVars: #( Connected DeadServer InvalidSocket OtherEndClosed Registry RegistryThreshold TCPSocketType ThisEndClosed UDPSocketType Unconnected WaitingForConnection)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Socket ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
(Object subclass: 'TextStyle'
	instVarNames: #( fontArray lineGrid baseline alignment firstIndent restIndent rightIndent tabsArray marginTabsArray leading defaultFontIndex)
	classVars: #()
	classInstVars: #( notifier)
	poolDictionaries: { TextConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextStyle ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(Object subclass: 'ZnBasicAuthenticator'
	instVarNames: #( credentials realm)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnBasicAuthenticator ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Support'.
%
errorCount
run
(Object subclass: 'ZnCharacterEncoder'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnCharacterEncoder ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(Object subclass: 'ZnConstants'
	instVarNames: #()
	classVars: #( DefaultMaximumEntitySize HTTPStatusCodes)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnConstants ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Zinc-HTTP-Support'.
%
errorCount
run
(Object subclass: 'ZnCookie'
	instVarNames: #( attributes)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnCookie ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Support'.
%
errorCount
run
(Object subclass: 'ZnCookieJar'
	instVarNames: #( cookies)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnCookieJar ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Support'.
%
errorCount
run
(Object subclass: 'ZnCredential'
	instVarNames: #( domain realm)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnCredential ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Support'.
%
errorCount
run
(Object subclass: 'ZnDefaultServerDelegate'
	instVarNames: #( prefixMap byteArray)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnDefaultServerDelegate ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Client-Server'.
%
errorCount
run
(Object subclass: 'ZnEntity'
	instVarNames: #( contentType contentLength)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnEntity ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Core'.
%
errorCount
run
(Object subclass: 'ZnHeaders'
	instVarNames: #( headers)
	classVars: #( CommonHeaders)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnHeaders ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Core'.
%
errorCount
run
(Object subclass: 'ZnLineReader'
	instVarNames: #( stream buffer position limit)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnLineReader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Streaming'.
%
errorCount
run
(Object subclass: 'ZnMessage'
	instVarNames: #( headers entity)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnMessage ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Core'.
%
errorCount
run
(Object subclass: 'ZnMimePart'
	instVarNames: #( headers entity)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnMimePart ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Core'.
%
errorCount
run
(Object subclass: 'ZnMimeType'
	instVarNames: #( main sub parameters)
	classVars: #( ExtensionsMap TextSubTypeFragments)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnMimeType ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Resource-Meta-Core'.
%
errorCount
run
(Object subclass: 'ZnRequestLine'
	instVarNames: #( method uri version)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnRequestLine ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Core'.
%
errorCount
run
(Object subclass: 'ZnStatusLine'
	instVarNames: #( version code reason)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnStatusLine ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Core'.
%
errorCount
run
(Object subclass: 'ZnUserAgentSession'
	instVarNames: #( cookiejar credentials currentRealm)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnUserAgentSession ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Support'.
%
errorCount
run
(Object subclass: 'ZnUtils'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnUtils ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Zinc-HTTP-Support'.
%
errorCount
run
(Object subclass: 'ZnValueDelegate'
	instVarNames: #( object)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnValueDelegate ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Client-Server'.
%
errorCount
run
(Object subclass: 'ZnDispatcherDelegate'
	instVarNames: #( dispatcherDictionary)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnDispatcherDelegate ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Client-Server'.
%
errorCount
run
(Object subclass: 'SetElement'
	instVarNames: #( enclosedElement)
	classVars: #( NilElement)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SetElement ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Support'.
%
errorCount
run
(Object subclass: 'MCMerger'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMerger ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Monticello-Merging'.
%
errorCount
run
(Object subclass: 'MCPatchOperation'
	instVarNames: #( isApplicable isConflict)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCPatchOperation ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Patching'.
%
errorCount
run
(Object subclass: 'VirtualMachine'
	instVarNames: #()
	classVars: #( LastStats WordSize)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #VirtualMachine ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Support'.
%
errorCount
run
(Object subclass: 'AnnouncementLogger'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AnnouncementLogger ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Announcements-Logging'.
%
errorCount
run
(Object subclass: 'MCVersion'
	instVarNames: #( package info snapshot dependencies completeSnapshot)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCVersion ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(Object subclass: 'ZnEasy'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnEasy ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Zinc-HTTP-Client-Server'.
%
errorCount
run
(Object subclass: 'ProcessSpecificVariable'
	instVarNames: #( index)
	classVars: #()
	classInstVars: #( soleInstance)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ProcessSpecificVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(Object subclass: 'ZnNetworkingUtils'
	instVarNames: #( socketStreamClass secureSocketStreamClass)
	classVars: #( Default DefaultSocketStreamTimeout)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnNetworkingUtils ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Support'.
%
errorCount
run
(Object subclass: 'NonInteractiveTranscript'
	instVarNames: #( stream fileName accessSemaphore)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #NonInteractiveTranscript ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'NonInteractiveTranscript'.
%
errorCount
run
(Object subclass: 'StartupAction'
	instVarNames: #( code hasBeenExecuted runOnce nameOfItem name)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #StartupAction ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'StartupPreferences'.
%
errorCount
run
(Object subclass: 'FilePluginPrims'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FilePluginPrims ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'FileSystem-Disk'.
%
errorCount
run
(Object subclass: 'FileSystem'
	instVarNames: #( store)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileSystem ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Public'.
%
errorCount
run
(Object subclass: 'FileSystemHandle'
	instVarNames: #( reference writable)
	classVars: #( Primitives)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileSystemHandle ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Kernel'.
%
errorCount
run
(Object subclass: 'FileSystemResolver'
	instVarNames: #( next)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileSystemResolver ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(Object subclass: 'FileSystemStore'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileSystemStore ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'FileSystem-Core-Kernel'.
%
errorCount
run
(Object subclass: 'FileSystemVisitor'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileSystemVisitor ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(Object indexableSubclass: 'Path'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Path ifAbsent: [nil])
	description: '2'
	options: #()
) category: 'FileSystem-Core-Kernel'.
%
errorCount
run
| names |
names := #( ClassProperties ObsoleteSubclasses).
names do: [:each | 
	(Behavior classVarNames includes: each) ifFalse: [
		Behavior addClassVarName: each]].
%
errorCount
run
(Object subclass: 'RBParseTreeRule'
	instVarNames: #( searchTree owner)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBParseTreeRule ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Matching'.
%
errorCount
run
(Object subclass: 'RBParser'
	instVarNames: #( scanner currentToken nextToken errorBlock source comments pragmas)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBParser ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Parser'.
%
errorCount
run
(Object subclass: 'RBProgramNode'
	instVarNames: #( parent properties)
	classVars: #( FormatterClass)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBProgramNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(Object subclass: 'RBProgramNodeVisitor'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBProgramNodeVisitor ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'AST-Core-Visitors'.
%
errorCount
run
(Object subclass: 'RBScanner'
	instVarNames: #( stream buffer tokenStart currentCharacter characterType classificationTable comments errorBlock)
	classVars: #( CascadePatternCharacter KeywordPatternCharacter PatternVariableCharacter)
	classInstVars: #( classificationTable)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBScanner ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Parser'.
%
errorCount
run
(Object subclass: 'RBStringReplacement'
	instVarNames: #( startPosition stopPosition string)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBStringReplacement ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(Object subclass: 'RBToken'
	instVarNames: #( sourcePointer comments)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBToken ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Tokens'.
%
errorCount
run
(Object subclass: 'RPackage'
	instVarNames: #( classDefinedSelectors metaclassDefinedSelectors classExtensionSelectors metaclassExtensionSelectors classes name classTags)
	classVars: #( PackageGlobalOrganizer Properties)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RPackage ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'RPackage-Core'.
%
errorCount
run
(Object subclass: 'RPackageOrganizer'
	instVarNames: #( classPackageMapping packages classExtendingPackagesMapping debuggingName)
	classVars: #()
	classInstVars: #( default)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RPackageOrganizer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'RPackage-Core'.
%
errorCount
run
(Object subclass: 'CommandLineArguments'
	instVarNames: #( arguments)
	classVars: #()
	classInstVars: #( singleton)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CommandLineArguments ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-BasicCommandLineHandler'.
%
errorCount
run
(Object subclass: 'CodeImporter'
	instVarNames: #( readStream codeDeclarations parserClass requestor)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CodeImporter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'CodeImport'.
%
errorCount
run
(Object subclass: 'ChunkFileFormatParser'
	instVarNames: #( readStream parsedDeclarations nextChar classSelector classTraitSelector commentStampSelector methodsForSelector reorganizeSelector)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ChunkFileFormatParser ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'CodeImport'.
%
errorCount
run
(Object subclass: 'DosTimestamp'
	instVarNames: #( value)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DosTimestamp ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(Object subclass: 'DummySystemProgressItem'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DummySystemProgressItem ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'UIManager-Support'.
%
errorCount
run
(Object subclass: 'ZdcAbstractSSLSession'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZdcAbstractSSLSession ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Zodiac-Core'.
%
errorCount
run
(Object subclass: 'ZdcIOBuffer'
	instVarNames: #( buffer readPointer writePointer)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZdcIOBuffer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zodiac-Core'.
%
errorCount
run
(Object subclass: 'ChangesLog'
	instVarNames: #( startupStamp)
	classVars: #( DefaultInstance)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ChangesLog ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Sources'.
%
errorCount
run
(Object subclass: 'FileSystemPermission'
	instVarNames: #( posixPermission)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileSystemPermission ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Public'.
%
errorCount
run
(Object subclass: 'ZnEntityReader'
	instVarNames: #( headers stream streaming binary allowReadingUpToEnd)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnEntityReader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Streaming'.
%
errorCount
run
(Object subclass: 'ZnFileSystemUtils'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnFileSystemUtils ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Zinc-FileSystem'.
%
errorCount
run
(Object subclass: 'ZnStaticFileServerDelegate'
	instVarNames: #( prefix directory mimeTypeExpirations)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnStaticFileServerDelegate ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-FileSystem'.
%
errorCount
run
(Object subclass: 'AbstractFileReference'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AbstractFileReference ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'FileSystem-Core-Public'.
%
errorCount
run
(Object subclass: 'MemoryFileSystemEntry'
	instVarNames: #( creationTime modificationTime basename)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MemoryFileSystemEntry ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Memory'.
%
errorCount
run
(Object subclass: 'FileSystemDirectoryEntry'
	instVarNames: #( reference creation modification isDirectory isSymlink size posixPermissions)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileSystemDirectoryEntry ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Public'.
%
errorCount
run
(Object subclass: 'ClassOrganization'
	instVarNames: #( comment commentStamp protocolOrganizer organizedClass)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassOrganization ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Protocols'.
%
errorCount
run
(Object subclass: 'Protocol'
	instVarNames: #( methods name)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Protocol ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Protocols'.
%
errorCount
run
(Object subclass: 'ProtocolOrganizer'
	instVarNames: #( allProtocol protocols)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ProtocolOrganizer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Protocols'.
%
errorCount
run
(Object subclass: 'RPackageSet'
	instVarNames: #( packageName packages classes definedClasses extensionMethods methods classesAndMetaClasses extensionClasses systemCategories overriddenMethods)
	classVars: #()
	classInstVars: #( cacheActive cachePackages)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RPackageSet ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'RPackage-Core'.
%
errorCount
run
(Object subclass: 'ZdcAbstractSocketStream'
	instVarNames: #( socket readBuffer writeBuffer timeout debug)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZdcAbstractSocketStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zodiac-Core'.
%
errorCount
run
(Object subclass: 'Job'
	instVarNames: #( block currentValue min max title children isRunning parent process)
	classVars: #()
	classInstVars: #( jobAnnouncer)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Job ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Jobs-Base'.
%
errorCount
run
(Object subclass: 'MetacelloAbstractConstructor'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloAbstractConstructor ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Metacello-Core-Constructors'.
%
errorCount
run
(Object subclass: 'MetacelloMethodSection'
	instVarNames: #( attributes)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMethodSection ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Constructors'.
%
errorCount
run
(Object subclass: 'MetacelloMethodSpec'
	instVarNames: #( project selector category versionString methodSections)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMethodSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Constructors'.
%
errorCount
run
(Object subclass: 'MetacelloPlatform'
	instVarNames: #( bypassProgressBars bypassGoferLoadUpdateCategories)
	classVars: #( Current)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloPlatform ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Model'.
%
errorCount
run
(Object subclass: 'MetacelloProject'
	instVarNames: #( versionMap symbolicVersionMap errorMap loader loaderClass loadType configuration projectAttributes versionNumberClass)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloProject ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Model'.
%
errorCount
run
(Object subclass: 'MetacelloSpec'
	instVarNames: #( project loader mutable)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Specs'.
%
errorCount
run
(Object subclass: 'MetacelloSpecLoader'
	instVarNames: #( spec)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloSpecLoader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Loaders'.
%
errorCount
run
(Object subclass: 'MetacelloValidationIssue'
	instVarNames: #( configurationClass explanation reasonCode callSite)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloValidationIssue ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Validation'.
%
errorCount
run
(Object subclass: 'MetacelloConfigTemplate'
	instVarNames: #( project)
	classVars: #( LastVersionLoad)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloConfigTemplate ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Model'.
%
errorCount
run
(Object subclass: 'MetacelloDirective'
	instVarNames: #( spec loader)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloDirective ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Directives'.
%
errorCount
run
(Object subclass: 'MetacelloLoadData'
	instVarNames: #( dataMap versionInfoMap packageNameMap)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloLoadData ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Loaders'.
%
errorCount
run
(Object subclass: 'MetacelloLoaderPolicy'
	instVarNames: #( overrideRepositories repositoryMap ensuredMap cacheRepository cacheGofer ignoreImage loadData loadDirective silently)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloLoaderPolicy ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Loaders'.
%
errorCount
run
(Object subclass: 'MetacelloMCPartiallyLoadedStatus'
	instVarNames: #( hasNoPackage hasNoProject aProjectIsLoaded aPackageIsLoaded aLoadedProjectIsExact aLoadedPackageIsExact aLoadedProjectIsCurrent aLoadedPackageIsCurrent aLoadedProjectIsNotCurrent aLoadedPackageIsNotCurrent aProjectNotLoaded aPackageNotLoaded vrsnStatus abort)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMCPartiallyLoadedStatus ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Specs'.
%
errorCount
run
(Object subclass: 'MetacelloMCVersionSpecLoader'
	instVarNames: #( versionSpec required packages loader loaderPolicy)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMCVersionSpecLoader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Loaders'.
%
errorCount
run
(Object subclass: 'MetacelloVisitedPackages'
	instVarNames: #( groups packages projects)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloVisitedPackages ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Specs'.
%
errorCount
run
(Object subclass: 'Termcap'
	instVarNames: #( cache)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Termcap ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-CommandLine'.
%
errorCount
run
(Object subclass: 'VTermOutputDriver'
	instVarNames: #( termcap outStream currentBackground currentColor light blink)
	classVars: #()
	classInstVars: #( stdoutTerminalInstance stderrTerminalInstance)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #VTermOutputDriver ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-CommandLine'.
%
errorCount
run
(Object subclass: 'MetacelloToolBox'
	instVarNames: #( project methodSpec)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloToolBox ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-ToolBox'.
%
errorCount
run
(Object subclass: 'MethodChangeRecord'
	instVarNames: #( changeType infoFromRemoval)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MethodChangeRecord ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Changes'.
%
errorCount
run
(Object subclass: 'ZnBase64Encoder'
	instVarNames: #( alphabet inverse lineLength lineEnd)
	classVars: #( DefaultAlphabet DefaultInverse)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnBase64Encoder ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(Object subclass: 'ZnBufferedReadStream'
	instVarNames: #( stream buffer position limit)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnBufferedReadStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(Object subclass: 'ZnBufferedWriteStream'
	instVarNames: #( stream buffer position)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnBufferedWriteStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(Object subclass: 'ZnPercentEncoder'
	instVarNames: #( characterEncoder safeSet decodePlusAsSpace)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnPercentEncoder ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(Object subclass: 'ZnResourceMetaUtils'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnResourceMetaUtils ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Zinc-Resource-Meta-Core'.
%
errorCount
run
(Object subclass: 'ZnClient'
	instVarNames: #( request response connection lastUsed options session logLevel)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnClient ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Client-Server'.
%
errorCount
run
(Object subclass: 'ZnServer'
	instVarNames: #( options sessionManager)
	classVars: #( AlwaysRestart ManagedServers)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnServer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Client-Server'.
%
errorCount
run
(Object subclass: 'ZnServerSession'
	instVarNames: #( id attributes created modified)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnServerSession ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Support'.
%
errorCount
run
(Object subclass: 'ZnServerSessionManager'
	instVarNames: #( sessions)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnServerSessionManager ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Support'.
%
errorCount
run
(Object subclass: 'MCServerCredentials'
	instVarNames: #( username password)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCServerCredentials ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloRemoteRepositories'.
%
errorCount
run
(Object subclass: 'MCServerRegistry'
	instVarNames: #( registry)
	classVars: #()
	classInstVars: #( uniqueInstance)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCServerRegistry ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloRemoteRepositories'.
%
errorCount
run
(Object subclass: 'ZnUrl'
	instVarNames: #( scheme host port segments query fragment username password)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnUrl ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Resource-Meta-Core'.
%
errorCount
run
(Object subclass: 'ZnMonticelloServerDelegate'
	instVarNames: #( directory)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnMonticelloServerDelegate ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-FileSystem'.
%
errorCount
run
(Object subclass: 'ExactFloatPrintPolicy'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ExactFloatPrintPolicy ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Kernel-Numbers'.
%
errorCount
run
(Object subclass: 'InexactFloatPrintPolicy'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InexactFloatPrintPolicy ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Kernel-Numbers'.
%
errorCount
run
(Object subclass: 'Continuation'
	instVarNames: #( values)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Continuation ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Methods'.
%
errorCount
run
(Object subclass: 'FileSystemGuide'
	instVarNames: #( visitor work selectChildren)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileSystemGuide ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(Object subclass: 'SystemNavigation'
	instVarNames: #( environment)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SystemNavigation ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Support'.
%
errorCount
run
(Object subclass: 'DebuggerMethodMapOpal'
	instVarNames: #( methodNode)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DebuggerMethodMapOpal ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-FrontEnd'.
%
errorCount
run
(Object subclass: 'IRBuilder'
	instVarNames: #( ir currentScope jumpBackTargetStacks jumpAheadStacks currentSequence sourceMapNodes sourceMapByteIndex)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRBuilder ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Manipulation'.
%
errorCount
run
(Object subclass: 'IRBytecodeScope'
	instVarNames: #( temps numArgs ownTempVectors copiedValues)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRBytecodeScope ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Bytecode'.
%
errorCount
run
(Object subclass: 'IRInstruction'
	instVarNames: #( sourceNode bytecodeIndex sequence)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRInstruction ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(Object subclass: 'IRRemoteArray'
	instVarNames: #( size index)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRRemoteArray ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Bytecode'.
%
errorCount
run
(Object subclass: 'IRSequence'
	instVarNames: #( sequence orderNumber method)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRSequence ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(Object subclass: 'IRStackCount'
	instVarNames: #( start position length)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRStackCount ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Bytecode'.
%
errorCount
run
(Object subclass: 'OCAbstractScope'
	instVarNames: #( outerScope node children)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCAbstractScope ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(Object subclass: 'OCAbstractVariable'
	instVarNames: #( scope usage)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCAbstractVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(Object subclass: 'MethodAddition'
	instVarNames: #( text category changeStamp requestor logSource myClass selector compiledMethod priorMethodOrNil priorCategoryOrNil)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MethodAddition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Loading'.
%
errorCount
run
(Object subclass: 'OSPlatform'
	instVarNames: #()
	classVars: #( Current)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OSPlatform ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Platforms'.
%
errorCount
run
(Object subclass: 'SmalltalkImage'
	instVarNames: #( globals deferredStartupActions specialObjectsArray session vm)
	classVars: #( CompilerClass LastImagePath LastQuitLogPosition LogFileName LowSpaceProcess LowSpaceSemaphore MemoryHogs SourceFileVersionString SpecialSelectors Tools)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SmalltalkImage ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Support'.
%
errorCount
run
(Object subclass: 'IRMethod'
	instVarNames: #( sourceNode startSequence numArgs properties tempMap pragmas additionalLiterals compiledMethod compilationContext irPrimitive)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRMethod ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(Object subclass: 'IRPrimitive'
	instVarNames: #( primitiveNum spec)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPrimitive ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Bytecode'.
%
errorCount
run
(Object subclass: 'CommandLineHandler'
	instVarNames: #( commandLine session stdout stderr)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CommandLineHandler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-BasicCommandLineHandler'.
%
errorCount
run
(Object subclass: 'CCompilationContext'
	instVarNames: #( astTranslatorClass bytecodeGeneratorClass class compiledMethodTrailer encoderClass environment failBlock interactive logged noPattern options parserClass requestor forSyntaxHighlighting semanticAnalyzerClass astTransformPlugins usesFullBlockClosure requestorScopeClass)
	classVars: #( BytecodeBackend UsesFullBlockClosure)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CCompilationContext ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-FrontEnd'.
%
errorCount
run
(Object subclass: 'CompilationContext'
	instVarNames: #( requestor failBlock noPattern class logged interactive options environment parserClass semanticAnalyzerClass astTranslatorClass bytecodeGeneratorClass compiledMethodTrailer forSyntaxHighlighting encoderClass astTransformPlugins usesFullBlockClosure requestorScopeClass)
	classVars: #( BytecodeBackend UsesFullBlockClosure)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CompilationContext ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-FrontEnd'.
%
errorCount
run
(Object subclass: 'ZnChunkedWriteStream'
	instVarNames: #( stream extraHeaders totalSize chunkCount)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnChunkedWriteStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Streaming'.
%
errorCount
run
(Object subclass: 'ZnEntityWriter'
	instVarNames: #( headers stream)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnEntityWriter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Streaming'.
%
errorCount
run
(Object subclass: 'ZnReadEvalPrintDelegate'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnReadEvalPrintDelegate ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Zinc-HTTP-Client-Server'.
%
errorCount
run
(Object subclass: 'ZnTestRunnerDelegate'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnTestRunnerDelegate ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Zinc-HTTP-Client-Server'.
%
errorCount
run
(Object subclass: 'AbstractClassInstaller'
	instVarNames: #( builder)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AbstractClassInstaller ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(Object subclass: 'AbstractClassModification'
	instVarNames: #( target layout propagations newClass)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AbstractClassModification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(Object subclass: 'AbstractFieldModification'
	instVarNames: #( fieldIndex)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AbstractFieldModification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(Object subclass: 'AbstractLayout'
	instVarNames: #( host)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AbstractLayout ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Layout'.
%
errorCount
run
(Object subclass: 'AbstractMethodUpdateStrategy'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AbstractMethodUpdateStrategy ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(Object subclass: 'AbstractModification'
	instVarNames: #( slotShift modificationMap)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AbstractModification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(Object subclass: 'LayoutAbstractScope'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LayoutAbstractScope ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Slot-Layout'.
%
errorCount
run
(Object subclass: 'Slot'
	instVarNames: #( index name)
	classVars: #( Properties)
	classInstVars: #( slotClassDefinition)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Slot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Variables'.
%
errorCount
run
(Object subclass: 'SlotClassBuilder'
	instVarNames: #( installer oldClasses newClasses classSlots category superclass name layoutClass slots traitComposition classTraitComposition result sharedPoolsString sharedVariables comment commentStamp)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SlotClassBuilder ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(Object subclass: 'ZnImageExampleDelegate'
	instVarNames: #( image)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnImageExampleDelegate ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Client-Server'.
%
errorCount
run
(Object subclass: 'Checksum'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Checksum ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Hashing-Checksums'.
%
errorCount
run
(Object subclass: 'FileCompilerRequestor'
	instVarNames: #( contents fileReference interactive)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileCompilerRequestor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'CodeImport'.
%
errorCount
run
(Object subclass: 'PharoFilesOpener'
	instVarNames: #( shouldInformAboutReadOnlyChanges)
	classVars: #( Default)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PharoFilesOpener ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Sources'.
%
errorCount
run
(Object subclass: 'Margin'
	instVarNames: #( right bottom left top)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Margin ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-BasicObjects'.
%
errorCount
run
(Object subclass: 'MCFileTreeFileUtils'
	instVarNames: #()
	classVars: #( Current)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFileTreeFileUtils ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'MonticelloFileTree-Core'.
%
errorCount
run
(Object subclass: 'AbstractCompiler'
	instVarNames: #()
	classVars: #()
	classInstVars: #( CompileWithErrors)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AbstractCompiler ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'OpalCompiler-Core-FrontEnd'.
%
errorCount
run
(Object subclass: 'FilePathEncoder'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FilePathEncoder ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Files-Directories'.
%
errorCount
run
(Object subclass: 'StartupPreferencesHandler'
	instVarNames: #( firstLink actions)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #StartupPreferencesHandler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'StartupPreferences'.
%
errorCount
run
(Object subclass: 'StartupPreferencesLoader'
	instVarNames: #( errors actions)
	classVars: #( AllowStartupScript UniqueInstance)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #StartupPreferencesLoader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'StartupPreferences'.
%
errorCount
run
(Object subclass: 'ConfigurationOf'
	instVarNames: #( project)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ConfigurationOf ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Base'.
%
errorCount
run
(Object subclass: 'Metacello'
	instVarNames: #( executorSpec statements)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Metacello ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Base'.
%
errorCount
run
(Object subclass: 'MetacelloProjectRegistration'
	instVarNames: #( projectName configurationProjectSpec baselineProjectSpec loadedInImage locked mutable versionInfo)
	classVars: #( Registry)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloProjectRegistration ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(Object subclass: 'MetacelloProjectRegistry'
	instVarNames: #( baselineRegistry configurationRegistry)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloProjectRegistry ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(Object subclass: 'MetacelloProjectSpecForLoad'
	instVarNames: #( projectSpec useDetermineVersionForLoad overrideProjectSpec)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloProjectSpecForLoad ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(Object subclass: 'MetacelloProjectSpecGenerator'
	instVarNames: #( target)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloProjectSpecGenerator ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(Object subclass: 'MetacelloScriptEngine'
	instVarNames: #( root projectSpec options)
	classVars: #( DefaultRepositoryDescription DefaultVersionString)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloScriptEngine ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(Object subclass: 'MetacelloScriptExecutor'
	instVarNames: #( options roots singleRoot projectSpecGenerator actionArg configurationArg baselineArg projectArg classNameArg versionArg repositoryArg)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloScriptExecutor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(Object subclass: 'MetacelloVersionDiffReport'
	instVarNames: #( additions configuration modifications removals from to)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloVersionDiffReport ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Model'.
%
errorCount
run
(Object subclass: 'RPackageTag'
	instVarNames: #( package name classNames)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RPackageTag ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'RPackage-Core'.
%
errorCount
run
(Object subclass: 'AbstractTimeZone'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: { ChronologyConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AbstractTimeZone ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(Object subclass: 'DateParser'
	instVarNames: #( inputStream pattern patternStream char year month day invalidPattern)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DateParser ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(Object subclass: 'ZnUrlOperation'
	instVarNames: #( url argument)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnUrlOperation ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Resource-Meta-Core'.
%
errorCount
run
(Object subclass: 'MetacelloConfigTemplateExample'
	instVarNames: #( project)
	classVars: #( LastVersionLoad)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloConfigTemplateExample ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Model'.
%
errorCount
run
(Object subclass: 'DangerousClassNotifier'
	instVarNames: #()
	classVars: #()
	classInstVars: #( enabled)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DangerousClassNotifier ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(Object subclass: 'PharoChangesCondenser'
	instVarNames: #( newChangesFile stream job remoteStringMap sourceStreams)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PharoChangesCondenser ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Sources'.
%
errorCount
run
(Object subclass: 'MetaLink'
	instVarNames: #( arguments condition conditionArguments control level metaObject nodes selector options)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetaLink ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(Object subclass: 'ZnServerTransactionTiming'
	instVarNames: #( requestDuration handlerDuration responseDuration)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnServerTransactionTiming ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(Object subclass: 'RGDefinition'
	instVarNames: #( annotations name)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(Object subclass: 'SymbolicBytecode'
	instVarNames: #( description method offset bytes)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SymbolicBytecode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Methods'.
%
errorCount
run
(Object subclass: 'IRVisitor'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRVisitor ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'OpalCompiler-Core-IR-Manipulation'.
%
errorCount
run
(Object subclass: 'Key'
	instVarNames: #( value name)
	classVars: #( KeyTable MacosVirtualKeyTable UnixVirtualKeyTable WindowsVirtualKeyTable)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Key ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Platforms'.
%
errorCount
run
(Object subclass: 'DelayScheduler'
	instVarNames: #( accessProtect activeDelay activeDelayStartTime delaySuspended finishedDelay runTimerEventLoop scheduledDelay suspendedDelays timerEventLoop timingSemaphore)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DelayScheduler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(Object subclass: 'PackageManifest'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PackageManifest ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Kernel'.
%
errorCount
run
(Object subclass: 'IRBytecodeGenerator'
	instVarNames: #( encoder seqOrder orderSeq seqBytes jumps literals lastLiteral currentSeqId currentSeqNum bytes lastSpecialReturn primitiveBytes instrMaps instrMap stacks stack numArgs properties numberOfTemps additionalLiterals forceLongForm primNumber encoderClass inBlock)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRBytecodeGenerator ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Bytecode'.
%
errorCount
run
(Object subclass: 'BenchmarkResult'
	instVarNames: #( iterations elapsedTime)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #BenchmarkResult ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(Object subclass: 'ZnFastLineReader'
	instVarNames: #( readStream cr lf bufferStream)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnFastLineReader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(Object indexableSubclass: 'ReflectiveMethod'
	instVarNames: #( ast class compiledMethod linkCount)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ReflectiveMethod ifAbsent: [nil])
	description: '3'
	options: #()
) category: 'Reflectivity-Core'.
%
errorCount
run
(Object subclass: 'RBComment'
	instVarNames: #( contents start)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBComment ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(Object subclass: 'OCCompilerASTPlugin'
	instVarNames: #( ast)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCCompilerASTPlugin ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Translator'.
%
errorCount
run
(Object subclass: 'RFMetaContext'
	instVarNames: #( level)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFMetaContext ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Contexts'.
%
errorCount
run
(Object subclass: 'RFReification'
	instVarNames: #( link entity)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFReification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(Object subclass: 'RFCondition'
	instVarNames: #( condition linkCondition)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFCondition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(Object subclass: 'CodeChunk'
	instVarNames: #( contents)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CodeChunk ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'CodeImport'.
%
errorCount
run
(Object subclass: 'EndianDetector'
	instVarNames: #()
	classVars: #( EndianCache)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #EndianDetector ifAbsent: [nil])
	description: '10'
	options: #()
) category: 'System-Support'.
%
errorCount
run
(Object subclass: 'RingChunkImporter'
	instVarNames: #( package doIts)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RingChunkImporter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'RingChunkImporter'.
%
errorCount
run
(Object subclass: 'File'
	instVarNames: #( name)
	classVars: #( Registry)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #File ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Files-Core'.
%
errorCount
run
(Object subclass: 'Stdio'
	instVarNames: #()
	classVars: #( Stderr Stdin Stdout)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Stdio ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Files-Core'.
%
errorCount
run
(Object subclass: 'SourceFileArray'
	instVarNames: #( files readOnlyQueue flushChanges)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SourceFileArray ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Sources'.
%
errorCount
run
(Object subclass: 'HookGenerator'
	instVarNames: #( entity node links plugins)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #HookGenerator ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Core'.
%
errorCount
run
(Object subclass: 'AssemblyManifest'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AssemblyManifest ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Kernel'.
%
errorCount
run
(Object subclass: 'OpalEncoder'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OpalEncoder ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'OpalCompiler-Core-Encoders'.
%
errorCount
run
(Object subclass: 'TemporaryVariable'
	instVarNames: #( name method startpc)
	classVars: #( PersistentTemps Properties)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TemporaryVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Variables'.
%
errorCount
run
(Object subclass: 'ZdcByteArrayManager'
	instVarNames: #( limit resources access)
	classVars: #( Current)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZdcByteArrayManager ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zodiac-Core'.
%
errorCount
run
(Object subclass: 'ZnCommonLogFormat'
	instVarNames: #( combined)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnCommonLogFormat ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(Object subclass: 'MetacelloProjectRegistrationVersionInfo'
	instVarNames: #( versionString projectVersion)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloProjectRegistrationVersionInfo ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(Object subclass: 'AbstractSessionHandler'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AbstractSessionHandler ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-SessionManager'.
%
errorCount
run
(Object subclass: 'SessionCategory'
	instVarNames: #( name priorityLists)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SessionCategory ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-SessionManager'.
%
errorCount
run
(Object subclass: 'SessionManager'
	instVarNames: #( currentSession categories guiCategory toolsCategory networkCategory systemCategory userCategory)
	classVars: #( Default)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SessionManager ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-SessionManager'.
%
errorCount
run
(Object subclass: 'WorkingSession'
	instVarNames: #( manager deferredStartupActions id creationTime)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WorkingSession ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-SessionManager'.
%
errorCount
run
(Object subclass: 'ZnEncodedStream'
	instVarNames: #( stream encoder)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnEncodedStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(Object subclass: 'ZnHtmlOutputStream'
	instVarNames: #( stream)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnHtmlOutputStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Streaming'.
%
errorCount
run
(Object subclass: 'MethodChunkCompilerRequestor'
	instVarNames: #( methodChunk fileCompileRequestor interactive)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MethodChunkCompilerRequestor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'CodeImport'.
%
errorCount
run
(Object subclass: 'AnnouncementDeliveryCondition'
	instVarNames: #( announcementClass conditionBlock)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AnnouncementDeliveryCondition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Announcements-Core'.
%
errorCount
run
(Object subclass: 'EphemeronRegistry'
	instVarNames: #( ephemeronCollection)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #EphemeronRegistry ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Finalization'.
%
errorCount
run
(Object subclass: 'RecursionStopper'
	instVarNames: #( activeMethods)
	classVars: #( Default)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RecursionStopper ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(Object subclass: 'ExecutionEnvironment'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ExecutionEnvironment ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(Object subclass: 'MonticelloBootstrap'
	instVarNames: #( directory localRepository)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MonticelloBootstrap ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Base'.
%
errorCount
run
(NoSubclasses subclass: 'True'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #True ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Kernel-Objects'.
%
errorCount
run
(NoSubclasses subclass: 'False'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #False ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Kernel-Objects'.
%
errorCount
run
(BitBlt subclass: 'WarpBlt'
	instVarNames: #( p1x p1y p1z p2x p2y p2z p3x p3y p3z p4x p4y p4z cellSize sourceRGBmap)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WarpBlt ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Graphics-Primitives'.
%
errorCount
run
(BitBlt subclass: 'GrafPort'
	instVarNames: #( alpha fillPattern lastFont lastFontForegroundColor lastFontBackgroundColor)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GrafPort ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Graphics-Primitives'.
%
errorCount
run
(Random subclass: 'SharedRandom'
	instVarNames: #( mutex)
	classVars: #()
	classInstVars: #( global)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SharedRandom ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Random-Core'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(Number classVarNames includes: each) ifFalse: [
		Number addClassVarName: each]].
%
errorCount
run
| names |
names := #( CharacterTable DigitValues).
names do: [:each | 
	(Character classVarNames includes: each) ifFalse: [
		Character addClassVarName: each]].
%
errorCount
run
(Magnitude subclass: 'LookupKey'
	instVarNames: #( key)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LookupKey ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Support'.
%
errorCount
run
(Magnitude subclass: 'DateAndTime'
	instVarNames: #( seconds offset julianDayNumber nanos)
	classVars: #( ClockProvider LocalTimeZone)
	classInstVars: #()
	poolDictionaries: { ChronologyConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DateAndTime ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(Magnitude subclass: 'Duration'
	instVarNames: #( nanos seconds)
	classVars: #()
	classInstVars: #()
	poolDictionaries: { ChronologyConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Duration ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(Magnitude subclass: 'Timespan'
	instVarNames: #( start duration)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Timespan ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(Magnitude subclass: 'Time'
	instVarNames: #( seconds nanos)
	classVars: #()
	classInstVars: #()
	poolDictionaries: { ChronologyConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Time ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(Magnitude indexableSubclass: 'WeakKeyAssociation'
	instVarNames: #( value)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakKeyAssociation ifAbsent: [nil])
	description: '4'
	options: #()
) category: 'Collections-Support'.
%
errorCount
run
(Magnitude subclass: 'MetacelloVersion'
	instVarNames: #( spec versionNumber importedVersions versionStatus)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloVersion ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Model'.
%
errorCount
run
(Magnitude indexableSubclass: 'MetacelloVersionNumber'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloVersionNumber ifAbsent: [nil])
	description: '2'
	options: #()
) category: 'Metacello-Core-Model'.
%
errorCount
run
(Magnitude subclass: 'MetacelloSemanticVersionNumber'
	instVarNames: #( normalVersion preReleaseVersion buildVersion)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloSemanticVersionNumber ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Model'.
%
errorCount
run
(Model subclass: 'SimpleServiceEntry'
	instVarNames: #( provider label selector usingLineAfter stateSelector description argumentGetter buttonLabel)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SimpleServiceEntry ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-FileRegistry'.
%
errorCount
run
(Model subclass: 'MCPackageManager'
	instVarNames: #( package modified)
	classVars: #( PrivateAnnouncer)
	classInstVars: #( registry)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCPackageManager ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(Model subclass: 'ThreadSafeTranscript'
	instVarNames: #( stream accessSemaphore deferredClear deferredEndEntry stepContents)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ThreadSafeTranscript ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Transcript'.
%
errorCount
run
(Model subclass: 'PragmaCollector'
	instVarNames: #( collected filter announcer announcing)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PragmaCollector ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'PragmaCollector'.
%
errorCount
run
(Collection subclass: 'CharacterSet'
	instVarNames: #( map)
	classVars: #( CrLf)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CharacterSet ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Support'.
%
errorCount
run
(Collection subclass: 'Bag'
	instVarNames: #( contents)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Bag ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Unordered'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(SequenceableCollection classVarNames includes: each) ifFalse: [
		SequenceableCollection addClassVarName: each]].
%
errorCount
run
(Collection subclass: 'WeakRegistry'
	instVarNames: #( list valueDictionary sema)
	classVars: #( Default)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakRegistry ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Weak'.
%
errorCount
run
(Collection subclass: 'Matrix'
	instVarNames: #( contents numberOfColumns numberOfRows)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Matrix ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Unordered'.
%
errorCount
run
(Collection subclass: 'CharacterSetComplement'
	instVarNames: #( absent byteArrayMapCache)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CharacterSetComplement ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Support'.
%
errorCount
run
(Collection subclass: 'SmallDictionary'
	instVarNames: #( keys values size)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SmallDictionary ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Unordered'.
%
errorCount
run
(Collection subclass: 'WideCharacterSet'
	instVarNames: #( map byteArrayMap)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WideCharacterSet ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Support'.
%
errorCount
run
(Collection indexableSubclass: 'DependentsArray'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DependentsArray ifAbsent: [nil])
	description: '4'
	options: #()
) category: 'Kernel-Models'.
%
errorCount
run
(Collection subclass: 'HashedCollection'
	instVarNames: #( tally array)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #HashedCollection ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Abstract'.
%
errorCount
run
(Collection subclass: 'Heap'
	instVarNames: #( array tally sortBlock indexUpdateBlock)
	classVars: #()
	classInstVars: #( sortBlock)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Heap ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Sequenceable'.
%
errorCount
run
(Collection subclass: 'OrderedDictionary'
	instVarNames: #( dictionary orderedKeys)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OrderedDictionary ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Sequenceable'.
%
errorCount
run
(Collection subclass: 'RelationSet'
	instVarNames: #( owner slot set)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RelationSet ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples-Associations'.
%
errorCount
run
(TextAttribute subclass: 'TextAction'
	instVarNames: #( actOnClickBlock)
	classVars: #( ActOnClickBlock)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextAction ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(TextAttribute subclass: 'TextKern'
	instVarNames: #( kern active)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextKern ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(TextAttribute subclass: 'TextEmphasis'
	instVarNames: #( emphasisCode setMode)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextEmphasis ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(TextAttribute subclass: 'TextIndent'
	instVarNames: #( amount)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextIndent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(TextAttribute subclass: 'TextColor'
	instVarNames: #( color)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextColor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(TextAttribute subclass: 'TextFontChange'
	instVarNames: #( fontNumber)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextFontChange ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(TextAttribute subclass: 'TextAlignment'
	instVarNames: #( alignment)
	classVars: #()
	classInstVars: #()
	poolDictionaries: { TextConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextAlignment ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(Stream subclass: 'PositionableStream'
	instVarNames: #( collection position readLimit)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PositionableStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Streams'.
%
errorCount
run
(Stream subclass: 'SharedQueue'
	instVarNames: #( monitor items)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SharedQueue ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Sequenceable'.
%
errorCount
run
(Stream subclass: 'NullStream'
	instVarNames: #( binary position lastElement)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #NullStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Streams'.
%
errorCount
run
(Stream subclass: 'ZnBivalentWriteStream'
	instVarNames: #( stream binary)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnBivalentWriteStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Streaming'.
%
errorCount
run
(Stream subclass: 'ZnLimitedReadStream'
	instVarNames: #( stream position limit binary)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnLimitedReadStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Streaming'.
%
errorCount
run
(Stream subclass: 'Generator'
	instVarNames: #( block next continue home)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Generator ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Streams'.
%
errorCount
run
(Stream subclass: 'MCDataStream'
	instVarNames: #( byteStream topCall basePos)
	classVars: #( ReadSelectors TypeMap WriteSelectors)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCDataStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Storing'.
%
errorCount
run
(Stream subclass: 'ZnChunkedReadStream'
	instVarNames: #( stream chunk position limit atEnd totalSize chunkCount extraHeaders)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnChunkedReadStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Streaming'.
%
errorCount
run
(Stream subclass: 'AbstractBinaryFileStream'
	instVarNames: #( file handle forWrite)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AbstractBinaryFileStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Files-Streams'.
%
errorCount
run
(Stream subclass: 'DecoratorStream'
	instVarNames: #( decoratedStream)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DecoratorStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Streams'.
%
errorCount
run
(Link subclass: 'ValueLink'
	instVarNames: #( value)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ValueLink ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Support'.
%
errorCount
run
(Link subclass: 'Process'
	instVarNames: #( suspendedContext priority myList name env effectiveProcess terminating)
	classVars: #( InheritablePSKeys PSKeys PSKeysSema)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Process ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(Delay subclass: 'MonitorDelay'
	instVarNames: #( monitor queue)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MonitorDelay ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(Delay subclass: 'DelayWaitTimeout'
	instVarNames: #( process expired)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DelayWaitTimeout ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(MimeConverter subclass: 'QuotedPrintableMimeConverter'
	instVarNames: #( newline)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #QuotedPrintableMimeConverter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-MIME'.
%
errorCount
run
(MimeConverter subclass: 'Base64MimeConverter'
	instVarNames: #( multiLine)
	classVars: #( FromCharTable ToCharTable)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Base64MimeConverter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-MIME'.
%
errorCount
run
(DisplayObject subclass: 'DisplayMedium'
	instVarNames: #()
	classVars: #( HighLightBitmaps)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DisplayMedium ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Graphics-Display Objects'.
%
errorCount
run
(DisplayObject subclass: 'InfiniteForm'
	instVarNames: #( patternForm)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InfiniteForm ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Graphics-Display Objects'.
%
errorCount
run
(InstructionStream indexableSubclass: 'Context'
	instVarNames: #( stackp method closureOrNil receiver)
	classVars: #( PrimitiveFailToken QuickStep SpecialPrimitiveSimulators TryNamedPrimitiveTemplateMethod)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Context ifAbsent: [nil])
	description: '3'
	options: #()
) category: 'Kernel-Methods'.
%
errorCount
run
(DisplayTransform subclass: 'MatrixTransform2x3'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MatrixTransform2x3 ifAbsent: [nil])
	description: '10'
	options: #()
) category: 'Graphics-Transformations'.
%
errorCount
run
(DisplayTransform subclass: 'CompositeTransform'
	instVarNames: #( globalTransform localTransform)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CompositeTransform ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Graphics-Transformations'.
%
errorCount
run
(DisplayTransform subclass: 'MorphicTransform'
	instVarNames: #( offset angle scale)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MorphicTransform ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Graphics-Transformations'.
%
errorCount
run
(DisplayTransform subclass: 'IdentityTransform'
	instVarNames: #()
	classVars: #( Default)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IdentityTransform ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Graphics-Transformations'.
%
errorCount
run
(NoSubclasses subclass: 'ExceptionSetWithExclusions'
	instVarNames: #( exclusions)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ExceptionSetWithExclusions ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(MessageSend subclass: 'ObjectFinalizer'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ObjectFinalizer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Finalization'.
%
errorCount
run
(Archive subclass: 'TarArchive'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TarArchive ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Archives'.
%
errorCount
run
(Archive subclass: 'ZipArchive'
	instVarNames: #( centralDirectorySize centralDirectoryOffsetWRTStartingDiskNumber zipFileComment writeCentralDirectoryOffset writeEOCDOffset)
	classVars: #()
	classInstVars: #()
	poolDictionaries: { ZipFileConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZipArchive ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Archives'.
%
errorCount
run
(InstructionClient subclass: 'InstVarRefLocator'
	instVarNames: #( bingo)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InstVarRefLocator ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Methods'.
%
errorCount
run
(InstructionClient subclass: 'BlockLocalTempCounter'
	instVarNames: #( stackPointer scanner blockEnd joinOffsets)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #BlockLocalTempCounter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Methods'.
%
errorCount
run
(InstructionClient subclass: 'IRBytecodeDecompiler'
	instVarNames: #( instructionStream irBuilder newTempVector scopeStack)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRBytecodeDecompiler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Bytecode'.
%
errorCount
run
(InstructionClient subclass: 'SymbolicBytecodeBuilder'
	instVarNames: #( method scanner oldPC symbolicBytecodes)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SymbolicBytecodeBuilder ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Methods'.
%
errorCount
run
(SharedPool subclass: 'EventSensorConstants'
	instVarNames: #()
	classVars: #( BlueButtonBit CommandKeyBit CtrlKeyBit EventKeyChar EventKeyDown EventKeyUp EventTypeDragDropFiles EventTypeKeyboard EventTypeMenu EventTypeMouse EventTypeNone EventTypeWindow OptionKeyBit RedButtonBit ShiftKeyBit WindowEventActivated WindowEventClose WindowEventIconise WindowEventMetricChange WindowEventPaint YellowButtonBit)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #EventSensorConstants ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-VMEvents'.
%
errorCount
run
(SharedPool subclass: 'ZipConstants'
	instVarNames: #()
	classVars: #( BaseDistance BaseLength BitLengthOrder DistanceCodes DynamicBlock EndBlock ExtraBitLengthBits ExtraDistanceBits ExtraLengthBits FixedBlock FixedDistanceTree FixedLiteralTree HashBits HashMask HashShift MatchLengthCodes MaxBitLengthBits MaxBitLengthCodes MaxBits MaxDistCodes MaxDistance MaxLengthCodes MaxLiteralCodes MaxMatch MinMatch NumLiterals Repeat11To138 Repeat3To10 Repeat3To6 StoredBlock WindowMask WindowSize)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZipConstants ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Compression-Streams'.
%
errorCount
run
(SharedPool subclass: 'GZipConstants'
	instVarNames: #()
	classVars: #( GZipAsciiFlag GZipCommentFlag GZipContinueFlag GZipDeflated GZipEncryptFlag GZipExtraField GZipMagic GZipNameFlag GZipReservedFlags)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GZipConstants ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Compression-Streams'.
%
errorCount
run
(SharedPool subclass: 'ZipFileConstants'
	instVarNames: #()
	classVars: #( CentralDirectoryFileHeaderSignature CompressionDeflated CompressionLevelDefault CompressionLevelNone CompressionStored DataDescriptorLength DefaultDirectoryPermissions DefaultFilePermissions DeflatingCompressionFast DeflatingCompressionMaximum DeflatingCompressionNormal DeflatingCompressionSuperFast DirectoryAttrib EndOfCentralDirectorySignature FaMsdos FaUnix FileAttrib IfaBinaryFile IfaTextFile LocalFileHeaderSignature)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZipFileConstants ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Compression-Archives'.
%
errorCount
run
(SharedPool subclass: 'MCMockAPoolDictionary'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMockAPoolDictionary ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Monticello-Mocks'.
%
errorCount
run
(SharedPool subclass: 'ChronologyConstants'
	instVarNames: #()
	classVars: #( DayNames DaysInMonth MicrosecondsInDay MonthNames NanosInMillisecond NanosInSecond SecondsInDay SecondsInHour SecondsInMinute SqueakEpoch)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ChronologyConstants ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(SharedPool subclass: 'TextConstants'
	instVarNames: #()
	classVars: #( BS BS2 Basal Bold CR Centered Clear CrossedX CtrlA CtrlB CtrlC CtrlD CtrlDigits CtrlE CtrlF CtrlG CtrlH CtrlI CtrlJ CtrlK CtrlL CtrlM CtrlN CtrlO CtrlOpenBrackets CtrlP CtrlQ CtrlR CtrlS CtrlT CtrlU CtrlV CtrlW CtrlX CtrlY CtrlZ Ctrla Ctrlb Ctrlc Ctrld Ctrle Ctrlf Ctrlg Ctrlh Ctrli Ctrlj Ctrlk Ctrll Ctrlm Ctrln Ctrlo Ctrlp Ctrlq Ctrlr Ctrls Ctrlt Ctrlu Ctrlv Ctrlw Ctrlx Ctrly Ctrlz DefaultBaseline DefaultFontFamilySize DefaultLineGrid DefaultMarginTabsArray DefaultMask DefaultRule DefaultSpace DefaultTab DefaultTabsArray ESC EndOfRun Enter Italic Justified LeftFlush LeftMarginTab RightFlush RightMarginTab Space Tab TextSharedInformation)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextConstants ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(ProtocolClient subclass: 'POP3Client'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #POP3Client ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Protocols'.
%
errorCount
run
(ProtocolClient subclass: 'TelnetProtocolClient'
	instVarNames: #( responseCode)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TelnetProtocolClient ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Protocols'.
%
errorCount
run
(ArchiveMember subclass: 'TarArchiveMember'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TarArchiveMember ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Archives'.
%
errorCount
run
(ArchiveMember subclass: 'ZipArchiveMember'
	instVarNames: #( lastModFileDateTime fileAttributeFormat versionMadeBy versionNeededToExtract bitFlag compressionMethod desiredCompressionMethod desiredCompressionLevel internalFileAttributes externalFileAttributes cdExtraField localExtraField fileComment crc32 compressedSize uncompressedSize writeLocalHeaderRelativeOffset readDataRemaining)
	classVars: #()
	classInstVars: #()
	poolDictionaries: { ZipFileConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZipArchiveMember ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Archives'.
%
errorCount
run
(Categorizer subclass: 'SystemOrganizer'
	instVarNames: #( environment)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SystemOrganizer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Support'.
%
errorCount
run
(EncodedCharSet subclass: 'Latin1'
	instVarNames: #()
	classVars: #()
	classInstVars: #( rightHalfSequence)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Latin1 ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Multilingual-Encodings'.
%
errorCount
run
(EncodedCharSet subclass: 'Unicode'
	instVarNames: #()
	classVars: #( Cc Cf Cn Co Cs DecimalProperty GeneralCategory Ll Lm Lo Lt Lu Mc Me Mn Nd Nl No Pc Pd Pe Pf Pi Po Ps Sc Sk Sm So ToCasefold ToLower ToUpper Zl Zp Zs)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Unicode ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Multilingual-Encodings'.
%
errorCount
run
(MCAncestry subclass: 'MCVersionInfo'
	instVarNames: #( id name message date time author)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCVersionInfo ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(MCAncestry subclass: 'MCWorkingAncestry'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCWorkingAncestry ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(MCDefinition subclass: 'MCClassDefinition'
	instVarNames: #( name superclassName variables category type comment commentStamp traitComposition classTraitComposition)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCClassDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Modeling'.
%
errorCount
run
(MCDefinition subclass: 'MCClassTraitDefinition'
	instVarNames: #( baseTrait classTraitComposition category)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCClassTraitDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Modeling'.
%
errorCount
run
(MCDefinition subclass: 'MCMethodDefinition'
	instVarNames: #( classIsMeta source category selector className timeStamp)
	classVars: #( Definitions InitializersEnabled)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMethodDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Modeling'.
%
errorCount
run
(MCDefinition subclass: 'MCMockDefinition'
	instVarNames: #( token)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMockDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Mocks'.
%
errorCount
run
(MCDefinition subclass: 'MCOrganizationDefinition'
	instVarNames: #( categories)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCOrganizationDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Modeling'.
%
errorCount
run
(MCDefinition subclass: 'MCScriptDefinition'
	instVarNames: #( script packageName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCScriptDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Modeling'.
%
errorCount
run
(MCDoItParser subclass: 'MCSystemCategoryParser'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCSystemCategoryParser ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Chunk Format'.
%
errorCount
run
(MCDoItParser subclass: 'MCClassTraitParser'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCClassTraitParser ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Chunk Format'.
%
errorCount
run
(MCDoItParser subclass: 'MCTraitParser'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCTraitParser ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Chunk Format'.
%
errorCount
run
(MCDoItParser subclass: 'MCScriptParser'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCScriptParser ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Chunk Format'.
%
errorCount
run
(MCMock subclass: 'MCMockClassA'
	instVarNames: #( ivar)
	classVars: #( CVar InitializationOrder)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMockClassA ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloMocks'.
%
errorCount
run
(MCMock subclass: 'MCMockDependentItem'
	instVarNames: #( name provides requires)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMockDependentItem ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Mocks'.
%
errorCount
run
(MCMock subclass: 'MCMockClassB'
	instVarNames: #( ivarb)
	classVars: #( CVar)
	classInstVars: #( ciVar)
	poolDictionaries: { MCMockAPoolDictionary. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMockClassB ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloMocks'.
%
errorCount
run
(MCReader subclass: 'MCSnapshotReader'
	instVarNames: #( definitions)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCSnapshotReader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Storing'.
%
errorCount
run
(MCReader subclass: 'MCVersionReader'
	instVarNames: #( package info definitions dependencies)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCVersionReader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Storing'.
%
errorCount
run
(MCRepository subclass: 'MCDictionaryRepository'
	instVarNames: #( description dict)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCDictionaryRepository ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Repositories'.
%
errorCount
run
(MCRepository subclass: 'MCFileBasedRepository'
	instVarNames: #( cache allFileNames cacheFileNames)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFileBasedRepository ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Repositories'.
%
errorCount
run
(MCVariableDefinition subclass: 'MCClassInstanceVariableDefinition'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCClassInstanceVariableDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Modeling'.
%
errorCount
run
(MCVariableDefinition subclass: 'MCClassVariableDefinition'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCClassVariableDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Modeling'.
%
errorCount
run
(MCVariableDefinition subclass: 'MCInstanceVariableDefinition'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCInstanceVariableDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Modeling'.
%
errorCount
run
(MCVariableDefinition subclass: 'MCPoolImportDefinition'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCPoolImportDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Modeling'.
%
errorCount
run
(MCVersionSorter subclass: 'MCFilteredVersionSorter'
	instVarNames: #( target)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFilteredVersionSorter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(MCWriter subclass: 'MCMczWriter'
	instVarNames: #( zip infoWriter)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMczWriter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Storing'.
%
errorCount
run
(MCWriter subclass: 'MCVersionInfoWriter'
	instVarNames: #( written)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCVersionInfoWriter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Storing'.
%
errorCount
run
(MCWriter subclass: 'MCMcmWriter'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMcmWriter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloConfigurations'.
%
errorCount
run
(MCWriter subclass: 'MCStWriter'
	instVarNames: #( initializers writeInitializers)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCStWriter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Storing'.
%
errorCount
run
(MCWriter subclass: 'MCFileTreeAbstractStWriter'
	instVarNames: #( stWriter initializers orderedClassNames orderedTraitNames)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFileTreeAbstractStWriter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloFileTree-Core'.
%
errorCount
run
(UIManager subclass: 'DummyUIManager'
	instVarNames: #()
	classVars: #( ProgressBarEnabled)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DummyUIManager ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'UIManager'.
%
errorCount
run
(UIManager subclass: 'CommandLineUIManager'
	instVarNames: #( doNotQuitOnRestart uiManager)
	classVars: #( SnapshotErrorImage)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CommandLineUIManager ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'UIManager'.
%
errorCount
run
(TraitBehavior subclass: 'TraitDescription'
	instVarNames: #( organization)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TraitDescription ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Traits-Kernel'.
%
errorCount
run
(TraitTransformation subclass: 'TraitAlias'
	instVarNames: #( aliases)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TraitAlias ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Traits-Composition'.
%
errorCount
run
(TraitTransformation subclass: 'TraitExclusion'
	instVarNames: #( exclusions)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TraitExclusion ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Traits-Composition'.
%
errorCount
run
(LanguageEnvironment subclass: 'Latin1Environment'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Latin1Environment ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-Languages'.
%
errorCount
run
(LanguageEnvironment subclass: 'Latin2Environment'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Latin2Environment ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-Languages'.
%
errorCount
run
(LanguageEnvironment subclass: 'Latin9Environment'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Latin9Environment ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-Languages'.
%
errorCount
run
(RxmLink subclass: 'RxmBranch'
	instVarNames: #( loopback alternative)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxmBranch ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(RxmLink subclass: 'RxmMarker'
	instVarNames: #( index)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxmMarker ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(RxmLink subclass: 'RxmPredicate'
	instVarNames: #( predicate)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxmPredicate ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(RxmLink subclass: 'RxmSpecial'
	instVarNames: #( matchSelector)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxmSpecial ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(RxmLink subclass: 'RxmSubstring'
	instVarNames: #( sample compare)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxmSubstring ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(RxmLink subclass: 'RxmLookahaed'
	instVarNames: #( lookahead positive)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxmLookahaed ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(RxsNode subclass: 'RxsBranch'
	instVarNames: #( piece branch)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxsBranch ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(RxsNode subclass: 'RxsCharSet'
	instVarNames: #( negated elements)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxsCharSet ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(RxsNode subclass: 'RxsCharacter'
	instVarNames: #( character)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxsCharacter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(RxsNode subclass: 'RxsContextCondition'
	instVarNames: #( kind)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxsContextCondition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(RxsNode subclass: 'RxsEpsilon'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxsEpsilon ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(RxsNode subclass: 'RxsMessagePredicate'
	instVarNames: #( selector negated)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxsMessagePredicate ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(RxsNode subclass: 'RxsPiece'
	instVarNames: #( atom min max)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxsPiece ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(RxsNode subclass: 'RxsPredicate'
	instVarNames: #( predicate negation)
	classVars: #( EscapedLetterSelectors NamedClassSelectors)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxsPredicate ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(RxsNode subclass: 'RxsRange'
	instVarNames: #( first last)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxsRange ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(RxsNode subclass: 'RxsRegex'
	instVarNames: #( branch regex)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxsRegex ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(RxsNode subclass: 'RxsLookaround'
	instVarNames: #( piece positive)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RxsLookaround ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(Announcement subclass: 'PragmaAnnouncement'
	instVarNames: #( pragma)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PragmaAnnouncement ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'PragmaCollector'.
%
errorCount
run
(Announcement subclass: 'PragmaCollectorReset'
	instVarNames: #( collector)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PragmaCollectorReset ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'PragmaCollector'.
%
errorCount
run
(Announcement subclass: 'ZnLogEvent'
	instVarNames: #( timestamp id)
	classVars: #( IdCounter LogEventAnnouncer)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnLogEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(Announcement subclass: 'MCPackageModified'
	instVarNames: #( package)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCPackageModified ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Announcements'.
%
errorCount
run
(Announcement subclass: 'MCWorkingCopyCreated'
	instVarNames: #( package workingCopy)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCWorkingCopyCreated ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Announcements'.
%
errorCount
run
(Announcement subclass: 'MCWorkingCopyDeleted'
	instVarNames: #( package workingCopy)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCWorkingCopyDeleted ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Announcements'.
%
errorCount
run
(Announcement subclass: 'SystemAnnouncement'
	instVarNames: #( timeStamp)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SystemAnnouncement ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Base'.
%
errorCount
run
(Announcement subclass: 'CurrentChangeSetChanged'
	instVarNames: #( new old)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CurrentChangeSetChanged ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Changes'.
%
errorCount
run
(Announcement subclass: 'LocaleChanged'
	instVarNames: #( newLocale oldLocale)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LocaleChanged ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Localization-Locales'.
%
errorCount
run
(Announcement subclass: 'MCVersionSaved'
	instVarNames: #( version repository)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCVersionSaved ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Announcements'.
%
errorCount
run
(Announcement subclass: 'JobAnnouncement'
	instVarNames: #( job)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #JobAnnouncement ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Jobs-Announcements'.
%
errorCount
run
(Announcement subclass: 'ASTCacheReset'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ASTCacheReset ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'AST-Core-Parser'.
%
errorCount
run
(Announcement subclass: 'MCRepositoryAdded'
	instVarNames: #( repository)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCRepositoryAdded ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Announcements'.
%
errorCount
run
(Announcement subclass: 'MCRepositoryRemoved'
	instVarNames: #( repository)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCRepositoryRemoved ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Announcements'.
%
errorCount
run
(Announcement subclass: 'MCVersionLoaderStarted'
	instVarNames: #( versionLoader label)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCVersionLoaderStarted ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Announcements'.
%
errorCount
run
(Announcement subclass: 'MCVersionLoaderStopped'
	instVarNames: #( versionLoader label)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCVersionLoaderStopped ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Announcements'.
%
errorCount
run
(Clipboard subclass: 'ExternalClipboard'
	instVarNames: #( clipboard)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ExternalClipboard ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Clipboard'.
%
errorCount
run
(Clipboard subclass: 'UnixClipboard'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UnixClipboard ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Clipboard'.
%
errorCount
run
(NoSubclasses subclass: 'FullBlockClosure'
	instVarNames: #( receiver)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FullBlockClosure ifAbsent: [nil])
	description: '3'
	options: #()
) category: 'Kernel-Methods'.
%
errorCount
run
(InputEventHandler subclass: 'InputEventSensor'
	instVarNames: #( eventQueue modifiers mouseButtons mousePosition)
	classVars: #( ButtonDecodeTable)
	classInstVars: #()
	poolDictionaries: { EventSensorConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InputEventSensor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-VMEvents'.
%
errorCount
run
(InputEventHandler subclass: 'UserInterruptHandler'
	instVarNames: #( interruptKey)
	classVars: #( CmdDotEnabled)
	classInstVars: #()
	poolDictionaries: { EventSensorConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UserInterruptHandler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-VMEvents'.
%
errorCount
run
(InputEventHandler subclass: 'InputEventLog'
	instVarNames: #( filterBlock)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InputEventLog ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-VMEvents'.
%
errorCount
run
(HashFunction subclass: 'MD5'
	instVarNames: #( state)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MD5 ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Hashing-MD5'.
%
errorCount
run
(HashFunction subclass: 'SHA1'
	instVarNames: #( totalA totalB totalC totalD totalE totals)
	classVars: #( K1 K2 K3 K4)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SHA1 ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Hashing-SHA1'.
%
errorCount
run
(HashFunction subclass: 'SHA256'
	instVarNames: #( totalA totalB totalC totalD totalE totalF totalG totalH totals)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SHA256 ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Hashing-SHA256'.
%
errorCount
run
(MCPackageLoader subclass: 'MCMultiPackageLoader'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMultiPackageLoader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Loading'.
%
errorCount
run
(GoferOperation subclass: 'GoferWorking'
	instVarNames: #( workingCopies)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferWorking ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferOperation subclass: 'GoferLoad'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferLoad ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferOperation subclass: 'GoferSynchronize'
	instVarNames: #( cacheReferences)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferSynchronize ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(TextConverter subclass: 'UTF16TextConverter'
	instVarNames: #( useLittleEndian useByteOrderMark byteOrderMarkDone)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UTF16TextConverter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-TextConversion'.
%
errorCount
run
(TextConverter subclass: 'ByteTextConverter'
	instVarNames: #()
	classVars: #()
	classInstVars: #( byteToUnicode unicodeToByte)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ByteTextConverter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-TextConversion'.
%
errorCount
run
(TextConverter subclass: 'UTF8TextConverter'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UTF8TextConverter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-TextConversion'.
%
errorCount
run
(Gofer subclass: 'MetacelloGofer'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloGofer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Gofer'.
%
errorCount
run
(GoferReference subclass: 'GoferVersionReference'
	instVarNames: #( package author branch versionNumber)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferVersionReference ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferReference subclass: 'GoferPackageReference'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferPackageReference ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(Announcer subclass: 'SystemAnnouncer'
	instVarNames: #( suspended private storedAnnouncements)
	classVars: #()
	classInstVars: #( announcer)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SystemAnnouncer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-Core'.
%
errorCount
run
(WeakAnnouncementSubscription subclass: 'LegacyWeakSubscription'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LegacyWeakSubscription ifAbsent: [nil])
	description: '4'
	options: #()
) category: 'Announcements-Core'.
%
errorCount
run
(AtomicCollection subclass: 'LIFOQueue'
	instVarNames: #( head)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LIFOQueue ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Atomic'.
%
errorCount
run
(AtomicCollection subclass: 'WaitfreeQueue'
	instVarNames: #( tail dummy)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WaitfreeQueue ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Atomic'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(Error classVarNames includes: each) ifFalse: [
		Error addClassVarName: each]].
%
errorCount
run
(Exception subclass: 'IllegalResumeAttempt'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IllegalResumeAttempt ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(Notification classVarNames includes: each) ifFalse: [
		Notification addClassVarName: each]].
%
errorCount
run
(Exception subclass: 'Abort'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Abort ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(Exception subclass: 'UnhandledError'
	instVarNames: #( exception)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UnhandledError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(Halt classVarNames includes: each) ifFalse: [
		Halt addClassVarName: each]].
%
errorCount
run
(Exception subclass: 'MCNoChangesException'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCNoChangesException ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(Exception subclass: 'SimulationExceptionWrapper'
	instVarNames: #( exception)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SimulationExceptionWrapper ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(Exception subclass: 'Exit'
	instVarNames: #( status)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Exit ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-CommandLine'.
%
errorCount
run
(ZnBasicAuthenticator subclass: 'ZnDigestAuthenticator'
	instVarNames: #( nonces)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnDigestAuthenticator ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Support'.
%
errorCount
run
(ZnCharacterEncoder subclass: 'ZnNullEncoder'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnNullEncoder ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(ZnCharacterEncoder subclass: 'ZnSimplifiedByteEncoder'
	instVarNames: #( identifier byteToUnicode unicodeToByte strict)
	classVars: #()
	classInstVars: #( ByteTextConverters)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnSimplifiedByteEncoder ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(ZnCharacterEncoder subclass: 'ZnUTFEncoder'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnUTFEncoder ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(ZnCredential subclass: 'ZnBasicCredential'
	instVarNames: #( username password)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnBasicCredential ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Support'.
%
errorCount
run
(ZnEntity subclass: 'ZnApplicationFormUrlEncodedEntity'
	instVarNames: #( fields representation)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnApplicationFormUrlEncodedEntity ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Core'.
%
errorCount
run
(ZnEntity subclass: 'ZnByteArrayEntity'
	instVarNames: #( bytes)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnByteArrayEntity ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Core'.
%
errorCount
run
(ZnEntity subclass: 'ZnMultiPartFormDataEntity'
	instVarNames: #( parts representation)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnMultiPartFormDataEntity ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Core'.
%
errorCount
run
(ZnEntity subclass: 'ZnStreamingEntity'
	instVarNames: #( stream)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnStreamingEntity ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Core'.
%
errorCount
run
(ZnEntity subclass: 'ZnStringEntity'
	instVarNames: #( string encoder)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnStringEntity ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Core'.
%
errorCount
run
(ZnMessage subclass: 'ZnRequest'
	instVarNames: #( requestLine)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnRequest ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Core'.
%
errorCount
run
(ZnMessage subclass: 'ZnResponse'
	instVarNames: #( statusLine)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnResponse ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Core'.
%
errorCount
run
(MCMerger subclass: 'MCThreeWayMerger'
	instVarNames: #( index operations provisions redundantAdds)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCThreeWayMerger ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Merging'.
%
errorCount
run
(MCPatchOperation subclass: 'MCAddition'
	instVarNames: #( definition)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCAddition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Patching'.
%
errorCount
run
(MCPatchOperation subclass: 'MCModification'
	instVarNames: #( obsoletion modification)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCModification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Patching'.
%
errorCount
run
(MCPatchOperation subclass: 'MCRemoval'
	instVarNames: #( definition)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCRemoval ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Patching'.
%
errorCount
run
(MCVersion subclass: 'MCDiffyVersion'
	instVarNames: #( base patch)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCDiffyVersion ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(ProcessSpecificVariable subclass: 'DynamicVariable'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DynamicVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(ProcessSpecificVariable subclass: 'ProcessLocalVariable'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ProcessLocalVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(NonInteractiveTranscript subclass: 'DailyNonInteractiveTranscript'
	instVarNames: #( date)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DailyNonInteractiveTranscript ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'NonInteractiveTranscript'.
%
errorCount
run
(FileSystemHandle subclass: 'FileHandle'
	instVarNames: #( id)
	classVars: #( Registry)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileHandle ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Disk'.
%
errorCount
run
(FileSystemHandle subclass: 'MemoryHandle'
	instVarNames: #( entry)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MemoryHandle ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Memory'.
%
errorCount
run
(FileSystemResolver subclass: 'InteractiveResolver'
	instVarNames: #( cache)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InteractiveResolver ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(FileSystemResolver subclass: 'PlatformResolver'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PlatformResolver ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(FileSystemResolver subclass: 'SystemResolver'
	instVarNames: #()
	classVars: #( UserLocalDirectory)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SystemResolver ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(FileSystemStore subclass: 'MemoryStore'
	instVarNames: #( root)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MemoryStore ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Memory'.
%
errorCount
run
(FileSystemStore subclass: 'DiskStore'
	instVarNames: #( maxFileNameLength)
	classVars: #( CurrentFS Primitives)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DiskStore ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Disk'.
%
errorCount
run
(FileSystemVisitor subclass: 'AbstractEnumerationVisitor'
	instVarNames: #( out block)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AbstractEnumerationVisitor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(FileSystemVisitor subclass: 'CopyVisitor'
	instVarNames: #( source dest)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CopyVisitor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(FileSystemVisitor subclass: 'DeleteVisitor'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DeleteVisitor ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(Path subclass: 'AbsolutePath'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AbsolutePath ifAbsent: [nil])
	description: '2'
	options: #()
) category: 'FileSystem-Core-Kernel'.
%
errorCount
run
(Path subclass: 'RelativePath'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RelativePath ifAbsent: [nil])
	description: '2'
	options: #()
) category: 'FileSystem-Core-Kernel'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(ClassDescription classVarNames includes: each) ifFalse: [
		ClassDescription addClassVarName: each]].
%
errorCount
run
(RBParseTreeRule subclass: 'RBReplaceRule'
	instVarNames: #( verificationBlock)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBReplaceRule ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Matching'.
%
errorCount
run
(RBParseTreeRule subclass: 'RBSearchRule'
	instVarNames: #( answerBlock)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBSearchRule ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Matching'.
%
errorCount
run
(RBParser subclass: 'RBPatternParser'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBPatternParser ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Parser'.
%
errorCount
run
(RBProgramNode subclass: 'RBPragmaNode'
	instVarNames: #( selector keywordsPositions arguments left right)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBPragmaNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBProgramNode subclass: 'RBReturnNode'
	instVarNames: #( return value)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBReturnNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBProgramNode subclass: 'RBSequenceNode'
	instVarNames: #( leftBar rightBar statements periods temporaries)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBSequenceNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBProgramNode subclass: 'RBValueNode'
	instVarNames: #( parentheses)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBValueNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBProgramNode subclass: 'RBMethodNode'
	instVarNames: #( scope selector keywordsPositions body source arguments pragmas replacements nodeReplacements compilationContext)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBMethodNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBProgramNode subclass: 'RFLiteralVariableNode'
	instVarNames: #( binding)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFLiteralVariableNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Compiler'.
%
errorCount
run
(RBProgramNodeVisitor subclass: 'RBParseTreeSearcher'
	instVarNames: #( searches answer argumentSearches context messages)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBParseTreeSearcher ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Matching'.
%
errorCount
run
(RBProgramNodeVisitor subclass: 'RBReadBeforeWrittenTester'
	instVarNames: #( read checkNewTemps scopeStack)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBReadBeforeWrittenTester ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Visitors'.
%
errorCount
run
(RBProgramNodeVisitor subclass: 'OCASTClosureAnalyzer'
	instVarNames: #( scope)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCASTClosureAnalyzer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(RBProgramNodeVisitor subclass: 'OCASTTranslator'
	instVarNames: #( methodBuilder effectTranslator valueTranslator)
	classVars: #( OptimizedMessages)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCASTTranslator ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Translator'.
%
errorCount
run
(RBProgramNodeVisitor subclass: 'OCASTSemanticAnalyzer'
	instVarNames: #( scope blockcounter compilationContext)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCASTSemanticAnalyzer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(RBProgramNodeVisitor subclass: 'RBFindBlockArgumentAssignment'
	instVarNames: #( arguments argumentAssignments)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBFindBlockArgumentAssignment ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Visitors'.
%
errorCount
run
(RBProgramNodeVisitor subclass: 'RBNullFormatter'
	instVarNames: #( codeStream)
	classVars: #( FormatAsYouReadPolicy)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBNullFormatter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Formatter'.
%
errorCount
run
(RBProgramNodeVisitor subclass: 'BISimpleFormatter'
	instVarNames: #( codeStream indent lookaheadCode originalSource lineStart)
	classVars: #( FormatAsYouReadPolicy)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #BISimpleFormatter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Formatter'.
%
errorCount
run
(RBProgramNodeVisitor subclass: 'OCASTSemanticCleaner'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCASTSemanticCleaner ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(RBScanner subclass: 'RBPatternScanner'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBPatternScanner ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Parser'.
%
errorCount
run
(RBToken subclass: 'RBAssignmentToken'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBAssignmentToken ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Tokens'.
%
errorCount
run
(RBToken subclass: 'RBValueToken'
	instVarNames: #( value)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBValueToken ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Tokens'.
%
errorCount
run
(ZdcAbstractSSLSession subclass: 'ZdcPluginSSLSession'
	instVarNames: #( handle)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZdcPluginSSLSession ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zodiac-Core'.
%
errorCount
run
(AbstractFileReference subclass: 'FileLocator'
	instVarNames: #( origin path)
	classVars: #( Resolver)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileLocator ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Public'.
%
errorCount
run
(AbstractFileReference subclass: 'FileReference'
	instVarNames: #( filesystem path)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileReference ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Public'.
%
errorCount
run
(MemoryFileSystemEntry subclass: 'MemoryFileSystemDirectory'
	instVarNames: #( entries)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MemoryFileSystemDirectory ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Memory'.
%
errorCount
run
(MemoryFileSystemEntry subclass: 'MemoryFileSystemFile'
	instVarNames: #( bytes size)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MemoryFileSystemFile ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Memory'.
%
errorCount
run
(Protocol subclass: 'AllProtocol'
	instVarNames: #( protocolOrganizer)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AllProtocol ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Protocols'.
%
errorCount
run
(ZdcAbstractSocketStream subclass: 'ZdcSimpleSocketStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZdcSimpleSocketStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zodiac-Core'.
%
errorCount
run
(MetacelloAbstractConstructor subclass: 'MetacelloAbstractVersionConstructor'
	instVarNames: #( root configuration project attributeMap attributeOrder symbolicVersion currentContext)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloAbstractVersionConstructor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Constructors'.
%
errorCount
run
(MetacelloAbstractConstructor subclass: 'MetacelloVersionValidator'
	instVarNames: #( configurationClass exludededValidations validationReport recurse debug visited)
	classVars: #()
	classInstVars: #( reasonCodeDescriptions)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloVersionValidator ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Validation'.
%
errorCount
run
(MetacelloMethodSection subclass: 'MetacelloSymbolicVersionSpec'
	instVarNames: #( versionString)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloSymbolicVersionSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Constructors'.
%
errorCount
run
(MetacelloMethodSection subclass: 'MetacelloVersionMethodSection'
	instVarNames: #( block versionSpec parent methodSections)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloVersionMethodSection ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Constructors'.
%
errorCount
run
(MetacelloMethodSpec subclass: 'MetacelloSymbolicVersionMethodSpec'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloSymbolicVersionMethodSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Constructors'.
%
errorCount
run
(MetacelloMethodSpec subclass: 'MetacelloVersionMethodSpec'
	instVarNames: #( imports)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloVersionMethodSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Constructors'.
%
errorCount
run
(MetacelloPlatform subclass: 'MetacelloPharoCommonPlatform'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloPharoCommonPlatform ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-PharoCommonPlatform'.
%
errorCount
run
(MetacelloProject subclass: 'MetacelloMCProject'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMCProject ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Model'.
%
errorCount
run
(MetacelloSpec subclass: 'MetacelloAbstractPackageSpec'
	instVarNames: #( name requires includes answers)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloAbstractPackageSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Specs'.
%
errorCount
run
(MetacelloSpec subclass: 'MetacelloMemberListSpec'
	instVarNames: #( list memberMap)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMemberListSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Members'.
%
errorCount
run
(MetacelloSpec subclass: 'MetacelloMemberSpec'
	instVarNames: #( name spec)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMemberSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Members'.
%
errorCount
run
(MetacelloSpec subclass: 'MetacelloProjectSpec'
	instVarNames: #( name className versionString operator loads preLoadDoIt postLoadDoIt)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloProjectSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Specs'.
%
errorCount
run
(MetacelloSpec subclass: 'MetacelloValueHolderSpec'
	instVarNames: #( value)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloValueHolderSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Specs'.
%
errorCount
run
(MetacelloSpec subclass: 'MetacelloVersionSpec'
	instVarNames: #( versionString blessing description author timestamp preLoadDoIt postLoadDoIt packageList importName importArray)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloVersionSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Specs'.
%
errorCount
run
(MetacelloSpec subclass: 'MetacelloRepositorySpec'
	instVarNames: #( description username password type)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloRepositorySpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Specs'.
%
errorCount
run
(MetacelloSpecLoader subclass: 'MetacelloCommonMCSpecLoader'
	instVarNames: #( operator loaderPolicy disablePackageCache)
	classVars: #( RetryPackageResolution)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloCommonMCSpecLoader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Loaders'.
%
errorCount
run
(MetacelloValidationIssue subclass: 'MetacelloValidationCriticalWarning'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloValidationCriticalWarning ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Validation'.
%
errorCount
run
(MetacelloValidationIssue subclass: 'MetacelloValidationError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloValidationError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Validation'.
%
errorCount
run
(MetacelloValidationIssue subclass: 'MetacelloValidationWarning'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloValidationWarning ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Validation'.
%
errorCount
run
(MetacelloDirective subclass: 'MetacelloPackageLoadDirective'
	instVarNames: #( resolvedReference externalReference)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloPackageLoadDirective ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Directives'.
%
errorCount
run
(MetacelloDirective subclass: 'MetacelloPrePostLoadDirective'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloPrePostLoadDirective ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Directives'.
%
errorCount
run
(MetacelloDirective subclass: 'MetacelloVersionLoadDirective'
	instVarNames: #( loadDirectives)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloVersionLoadDirective ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Directives'.
%
errorCount
run
(ZnServer subclass: 'ZnSingleThreadedServer'
	instVarNames: #( process serverSocket logLevel)
	classVars: #()
	classInstVars: #( Default)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnSingleThreadedServer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Client-Server'.
%
errorCount
run
(FileSystemGuide subclass: 'BreadthFirstGuide'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #BreadthFirstGuide ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(FileSystemGuide subclass: 'PostorderGuide'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PostorderGuide ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(FileSystemGuide subclass: 'PreorderGuide'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PreorderGuide ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(IRBuilder subclass: 'IRReconstructor'
	instVarNames: #( temps remoteTemps closureCopiedValues)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRReconstructor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Bytecode'.
%
errorCount
run
(IRInstruction subclass: 'IRAccess'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRAccess ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRInstruction subclass: 'IRJump'
	instVarNames: #( destination successor)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRJump ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRInstruction subclass: 'IRPop'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPop ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRInstruction subclass: 'IRPushArray'
	instVarNames: #( size cons)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPushArray ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRInstruction subclass: 'IRPushDup'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPushDup ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRInstruction subclass: 'IRPushLiteral'
	instVarNames: #( literal)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPushLiteral ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRInstruction subclass: 'IRReturn'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRReturn ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRInstruction subclass: 'IRSend'
	instVarNames: #( selector superOf)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRSend ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRInstruction subclass: 'IRTempVector'
	instVarNames: #( name vars)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRTempVector ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRInstruction subclass: 'IRPushFullClosure'
	instVarNames: #( compiledBlock copiedValues)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPushFullClosure ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRStackCount subclass: 'IRClosureStackCount'
	instVarNames: #( numMethodTempVars)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRClosureStackCount ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Bytecode'.
%
errorCount
run
(OCAbstractScope subclass: 'OCAbstractMethodScope'
	instVarNames: #( thisContextVar tempVars copiedVars tempVector id)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCAbstractMethodScope ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OCAbstractScope subclass: 'OCClassScope'
	instVarNames: #( class)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCClassScope ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OCAbstractScope subclass: 'OCInstanceScope'
	instVarNames: #( vars selfVar superVar)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCInstanceScope ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OCAbstractScope subclass: 'OCRequestorScope'
	instVarNames: #( requestor compilationContext)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCRequestorScope ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OCAbstractVariable subclass: 'OCAbstractLocalVariable'
	instVarNames: #( name)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCAbstractLocalVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OCAbstractVariable subclass: 'OCLiteralVariable'
	instVarNames: #( assoc)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCLiteralVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OCAbstractVariable subclass: 'OCUndeclaredVariable'
	instVarNames: #( name)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCUndeclaredVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OCAbstractVariable subclass: 'OCSlotVariable'
	instVarNames: #( slot)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCSlotVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OSPlatform subclass: 'UnixPlatform'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UnixPlatform ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Platforms'.
%
errorCount
run
(OSPlatform subclass: 'MacOSPlatform'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MacOSPlatform ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Platforms'.
%
errorCount
run
(OSPlatform subclass: 'WinPlatform'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WinPlatform ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Platforms'.
%
errorCount
run
(CommandLineHandler subclass: 'ConfigurationCommandLineHandler'
	instVarNames: #( version repositoryURL configurationName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ConfigurationCommandLineHandler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'ConfigurationCommandLineHandler-Core'.
%
errorCount
run
(CommandLineHandler subclass: 'SaveCommandLineHandler'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SaveCommandLineHandler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-BasicCommandLineHandler'.
%
errorCount
run
(CommandLineHandler subclass: 'PrintVersionCommandLineHandler'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PrintVersionCommandLineHandler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-BasicCommandLineHandler'.
%
errorCount
run
(CommandLineHandler subclass: 'BasicCommandLineHandler'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #BasicCommandLineHandler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-BasicCommandLineHandler'.
%
errorCount
run
(CommandLineHandler subclass: 'STCommandLineHandler'
	instVarNames: #( sourceFiles)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #STCommandLineHandler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'CodeImportCommandLineHandlers'.
%
errorCount
run
(AbstractClassInstaller subclass: 'AnonymousClassInstaller'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AnonymousClassInstaller ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(AbstractClassInstaller subclass: 'PharoClassInstaller'
	instVarNames: #( environment instanceModification methodUpdateStrategy)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PharoClassInstaller ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(AbstractClassModification subclass: 'ClassModification'
	instVarNames: #( superclass additions removals changes slotShift methodModification copies traitComposition classVariables sharedPools)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassModification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(AbstractClassModification subclass: 'ClassModificationPropagation'
	instVarNames: #( origin)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassModificationPropagation ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(AbstractFieldModification subclass: 'AddedField'
	instVarNames: #( newSlot)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AddedField ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(AbstractFieldModification subclass: 'ModifiedField'
	instVarNames: #( newSlot originalSlot)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ModifiedField ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(AbstractFieldModification subclass: 'RemovedField'
	instVarNames: #( originalSlot)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RemovedField ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(AbstractFieldModification subclass: 'ShiftedField'
	instVarNames: #( shift)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ShiftedField ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(AbstractFieldModification subclass: 'UnmodifiedField'
	instVarNames: #( slot)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UnmodifiedField ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(AbstractLayout subclass: 'EmptyLayout'
	instVarNames: #()
	classVars: #()
	classInstVars: #( instance)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #EmptyLayout ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Layout'.
%
errorCount
run
(AbstractLayout subclass: 'ObjectLayout'
	instVarNames: #( compactClassIndex)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ObjectLayout ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Layout'.
%
errorCount
run
(AbstractMethodUpdateStrategy subclass: 'MethodRecompileStrategy'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MethodRecompileStrategy ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(AbstractModification subclass: 'InstanceModification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InstanceModification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(AbstractModification subclass: 'MethodModification'
	instVarNames: #( addedSlots)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MethodModification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-ClassBuilder'.
%
errorCount
run
(LayoutAbstractScope indexableSubclass: 'LayoutClassScope'
	instVarNames: #( parentScope)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LayoutClassScope ifAbsent: [nil])
	description: '3'
	options: #()
) category: 'Slot-Layout'.
%
errorCount
run
(LayoutAbstractScope subclass: 'LayoutEmptyScope'
	instVarNames: #()
	classVars: #()
	classInstVars: #( instance)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LayoutEmptyScope ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Slot-Layout'.
%
errorCount
run
(Slot subclass: 'IndexedSlot'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IndexedSlot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Variables'.
%
errorCount
run
(Slot subclass: 'ExampleSlotWithState'
	instVarNames: #( value)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ExampleSlotWithState ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples'.
%
errorCount
run
(Slot subclass: 'PropertySlot'
	instVarNames: #( baseSlot)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PropertySlot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples'.
%
errorCount
run
(Slot subclass: 'BooleanSlot'
	instVarNames: #( baseSlot offset)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #BooleanSlot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples'.
%
errorCount
run
(Slot subclass: 'UnlimitedInstanceVariableSlot'
	instVarNames: #( baseSlot offset baseSlotSize)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UnlimitedInstanceVariableSlot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples'.
%
errorCount
run
(Slot subclass: 'ComputedSlot'
	instVarNames: #( block)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ComputedSlot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples'.
%
errorCount
run
(Checksum subclass: 'Adler32'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Adler32 ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Hashing-Checksums'.
%
errorCount
run
(Checksum subclass: 'CRC'
	instVarNames: #( width polynome registerFill finalXorBytes shouldReflectOutput lookupTable widthMask theRegister shouldReflectInput message runMethodSelector lowestByteShift)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CRC ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Hashing-Checksums'.
%
errorCount
run
(MCFileTreeFileUtils subclass: 'MCFileTreeFileSystemUtils'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFileTreeFileSystemUtils ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'MonticelloFileTree-FileSystem-Utilities'.
%
errorCount
run
(AbstractCompiler subclass: 'OpalCompiler'
	instVarNames: #( ast source context receiver compilationContext compilationContextClass)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OpalCompiler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-FrontEnd'.
%
errorCount
run
(ConfigurationOf subclass: 'BaselineOf'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #BaselineOf ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Base'.
%
errorCount
run
(ConfigurationOf subclass: 'MetacelloBaseConfiguration'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloBaseConfiguration ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Deprecated'.
%
errorCount
run
(MetacelloProjectSpecGenerator subclass: 'MetacelloBaselineSpecGenerator'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloBaselineSpecGenerator ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(MetacelloProjectSpecGenerator subclass: 'MetacelloConfigurationSpecGenerator'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloConfigurationSpecGenerator ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(MetacelloScriptExecutor subclass: 'MetacelloScriptApiExecutor'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloScriptApiExecutor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(MetacelloScriptExecutor subclass: 'MetacelloScriptImageExecutor'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloScriptImageExecutor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(MetacelloScriptExecutor subclass: 'MetacelloScriptRegistryExecutor'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloScriptRegistryExecutor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(AbstractTimeZone subclass: 'LocalTimeZone'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: { ChronologyConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LocalTimeZone ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(AbstractTimeZone subclass: 'TimeZone'
	instVarNames: #( offset abbreviation name)
	classVars: #()
	classInstVars: #()
	poolDictionaries: { ChronologyConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TimeZone ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(ZnUrlOperation subclass: 'ZnHttpRetrieveContents'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnHttpRetrieveContents ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Client-Server'.
%
errorCount
run
(ZnUrlOperation subclass: 'ZnHttpSaveContentsToFile'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnHttpSaveContentsToFile ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Client-Server'.
%
errorCount
run
(PharoChangesCondenser subclass: 'PharoSourcesCondenser'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PharoSourcesCondenser ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Sources'.
%
errorCount
run
(RGDefinition subclass: 'RGAbstractContainer'
	instVarNames: #( elements)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGAbstractContainer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Containers'.
%
errorCount
run
(RGDefinition subclass: 'RGElementDefinition'
	instVarNames: #( parent)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGElementDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(RGDefinition subclass: 'RGGlobalDefinition'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGGlobalDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(IRVisitor subclass: 'IRFix'
	instVarNames: #( prevInstr storePopToFix retToFix)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRFix ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Manipulation'.
%
errorCount
run
(IRVisitor subclass: 'IRPrinterV2'
	instVarNames: #( stream)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPrinterV2 ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Manipulation'.
%
errorCount
run
(IRVisitor subclass: 'IRTranslatorV2'
	instVarNames: #( gen currentScope trailer tempVectorStack compilationContext)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRTranslatorV2 ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Manipulation'.
%
errorCount
run
(DelayScheduler subclass: 'DelayMicrosecondScheduler'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DelayMicrosecondScheduler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(DelayScheduler subclass: 'DelayMillisecondScheduler'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DelayMillisecondScheduler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(DelayScheduler subclass: 'DelayNullScheduler'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DelayNullScheduler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(PackageManifest subclass: 'ManifestASTCore'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestASTCore ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'AST-Core'.
%
errorCount
run
(PackageManifest subclass: 'ManifestOpalCompilerCore'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestOpalCompilerCore ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'OpalCompiler-Core'.
%
errorCount
run
(PackageManifest subclass: 'ManifestKernel'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestKernel ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Kernel'.
%
errorCount
run
(PackageManifest subclass: 'ManifestReflectivity'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestReflectivity ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Reflectivity'.
%
errorCount
run
(PackageManifest subclass: 'ManifestCollectionsAbstract'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestCollectionsAbstract ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Collections-Abstract'.
%
errorCount
run
(PackageManifest subclass: 'ManifestCollectionsArithmetic'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestCollectionsArithmetic ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Collections-Arithmetic'.
%
errorCount
run
(PackageManifest subclass: 'ManifestCollectionsAtomic'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestCollectionsAtomic ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Collections-Atomic'.
%
errorCount
run
(PackageManifest subclass: 'ManifestCollectionsNative'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestCollectionsNative ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Collections-Native'.
%
errorCount
run
(PackageManifest subclass: 'ManifestCollectionsSequenceable'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestCollectionsSequenceable ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Collections-Sequenceable'.
%
errorCount
run
(PackageManifest subclass: 'ManifestCollectionsStack'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestCollectionsStack ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Collections-Stack'.
%
errorCount
run
(PackageManifest subclass: 'ManifestCollectionsStreams'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestCollectionsStreams ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Collections-Streams'.
%
errorCount
run
(PackageManifest subclass: 'ManifestCollectionsStrings'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestCollectionsStrings ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Collections-Strings'.
%
errorCount
run
(PackageManifest subclass: 'ManifestCollectionsSupport'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestCollectionsSupport ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Collections-Support'.
%
errorCount
run
(PackageManifest subclass: 'ManifestCollectionsUnordered'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestCollectionsUnordered ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Collections-Unordered'.
%
errorCount
run
(PackageManifest subclass: 'ManifestCollectionsWeak'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestCollectionsWeak ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Collections-Weak'.
%
errorCount
run
(PackageManifest subclass: 'ManifestAnnouncementsCore'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestAnnouncementsCore ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Announcements-Core'.
%
errorCount
run
(PackageManifest subclass: 'ManifestCompression'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestCompression ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Compression'.
%
errorCount
run
(PackageManifest subclass: 'ManifestFileSystemCore'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestFileSystemCore ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'FileSystem-Core'.
%
errorCount
run
(PackageManifest subclass: 'ManifestFiles'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestFiles ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Files'.
%
errorCount
run
(PackageManifest subclass: 'ManifestGraphicsPrimitives'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestGraphicsPrimitives ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Graphics-Primitives'.
%
errorCount
run
(PackageManifest subclass: 'ManifestJobs'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestJobs ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Jobs'.
%
errorCount
run
(PackageManifest subclass: 'ManifestMonticello'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestMonticello ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Monticello'.
%
errorCount
run
(PackageManifest subclass: 'ManifestMultilingualEncodings'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestMultilingualEncodings ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Multilingual-Encodings'.
%
errorCount
run
(PackageManifest subclass: 'ManifestMultilingualTextConversion'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestMultilingualTextConversion ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Multilingual-TextConversion'.
%
errorCount
run
(PackageManifest subclass: 'ManifestNetworkUUID'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestNetworkUUID ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Network-UUID'.
%
errorCount
run
(PackageManifest subclass: 'ManifestRPackageCore'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestRPackageCore ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'RPackage-Core'.
%
errorCount
run
(PackageManifest subclass: 'ManifestRegexCore'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestRegexCore ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Regex-Core'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSlot'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSlot ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Slot'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSystemAnnouncements'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSystemAnnouncements ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Announcements'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSystemChanges'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSystemChanges ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Changes'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSystemCommandLine'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSystemCommandLine ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-CommandLine'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSystemFileRegistry'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSystemFileRegistry ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-FileRegistry'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSystemFinalization'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSystemFinalization ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Finalization'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSystemLocalization'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSystemLocalization ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Localization'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSystemObjectEvents'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSystemObjectEvents ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Object Events'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSystemPlatforms'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSystemPlatforms ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Platforms'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSystemSources'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSystemSources ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Sources'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSystemSupport'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSystemSupport ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Support'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSystemVMEvents'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSystemVMEvents ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-VMEvents'.
%
errorCount
run
(PackageManifest subclass: 'ManifestTextCore'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestTextCore ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(PackageManifest subclass: 'ManifestTraits'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestTraits ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Traits'.
%
errorCount
run
(PackageManifest subclass: 'ManifestTranscript'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestTranscript ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Transcript'.
%
errorCount
run
(PackageManifest subclass: 'ManifestUIManager'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestUIManager ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'UIManager'.
%
errorCount
run
(PackageManifest subclass: 'ManifestFileSystemDisk'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestFileSystemDisk ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'FileSystem-Disk'.
%
errorCount
run
(PackageManifest subclass: 'ManifestGraphicsDisplayObjects'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestGraphicsDisplayObjects ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Graphics-Display Objects'.
%
errorCount
run
(PackageManifest subclass: 'ManifestMultilingualLanguages'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestMultilingualLanguages ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Multilingual-Languages'.
%
errorCount
run
(PackageManifest subclass: 'ManifestNonInteractiveTranscript'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestNonInteractiveTranscript ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'NonInteractiveTranscript'.
%
errorCount
run
(PackageManifest subclass: 'ManifestRingCoreKernel'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestRingCoreKernel ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(PackageManifest subclass: 'ManifestRingMonticello'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestRingMonticello ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Ring-Monticello'.
%
errorCount
run
(PackageManifest subclass: 'ManifestCodeImport'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestCodeImport ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'CodeImport'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSystemBasicCommandLineHandler'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSystemBasicCommandLineHandler ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-BasicCommandLineHandler'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSystemCommandLineHandler'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSystemCommandLineHandler ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-CommandLineHandler'.
%
errorCount
run
(PackageManifest subclass: 'ManifestCodeExport'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestCodeExport ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'CodeExport'.
%
errorCount
run
(PackageManifest subclass: 'ManifestCodeImportCommandLineHandlers'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestCodeImportCommandLineHandlers ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'CodeImportCommandLineHandlers'.
%
errorCount
run
(PackageManifest subclass: 'ManifestRingChunkImporter'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestRingChunkImporter ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'RingChunkImporter'.
%
errorCount
run
(PackageManifest subclass: 'ManifestRingCoreContainers'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestRingCoreContainers ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Ring-Core-Containers'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSystemHashing'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSystemHashing ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Hashing'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSystemModel'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSystemModel ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Model'.
%
errorCount
run
(PackageManifest subclass: 'ManifestSystemSessionManager'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestSystemSessionManager ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-SessionManager'.
%
errorCount
run
(PackageManifest subclass: 'ManifestRandomCore'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ManifestRandomCore ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Random-Core'.
%
errorCount
run
(RFReification subclass: 'RFObjectReification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFObjectReification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(RFReification subclass: 'RFLinkReification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFLinkReification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(RFReification subclass: 'RFNewValueReification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFNewValueReification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(RFReification subclass: 'RFNodeReification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFNodeReification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(RFReification subclass: 'RFSelectorReification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFSelectorReification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(RFReification subclass: 'RFThisContextReification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFThisContextReification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(RFReification subclass: 'RFValueReification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFValueReification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(RFReification subclass: 'RFArgumentsReification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFArgumentsReification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(RFReification subclass: 'RFSenderReification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFSenderReification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(RFReification subclass: 'RFNameReification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFNameReification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(RFReification subclass: 'RFEReceiverReification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFEReceiverReification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(RFReification subclass: 'RFVariableReification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFVariableReification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(RFReification subclass: 'RFClassReification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFClassReification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(RFReification subclass: 'RFEntityReification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFEntityReification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Links'.
%
errorCount
run
(CodeChunk subclass: 'BehaviorOwnedChunk'
	instVarNames: #( behaviorName isMeta)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #BehaviorOwnedChunk ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'CodeImport'.
%
errorCount
run
(CodeChunk subclass: 'DoItChunk'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DoItChunk ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'CodeImport'.
%
errorCount
run
(CodeChunk subclass: 'StyleChunk'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #StyleChunk ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'CodeImport'.
%
errorCount
run
(HookGenerator subclass: 'HookGeneratorForVariables'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #HookGeneratorForVariables ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Core'.
%
errorCount
run
(AssemblyManifest subclass: 'CollectionsAssembly'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CollectionsAssembly ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Collections-Abstract'.
%
errorCount
run
(AssemblyManifest subclass: 'PharoKernelAssembly'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PharoKernelAssembly ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Kernel'.
%
errorCount
run
(OpalEncoder subclass: 'OpalBytecodeEncoder'
	instVarNames: #( stream position rootNode blockExtentsToLocals)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OpalBytecodeEncoder ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Encoders'.
%
errorCount
run
(AbstractSessionHandler subclass: 'ClassSessionHandler'
	instVarNames: #( registeredClassName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassSessionHandler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-SessionManager'.
%
errorCount
run
(AbstractSessionHandler subclass: 'UIManagerSessionHandler'
	instVarNames: #()
	classVars: #( UniqueInstance)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UIManagerSessionHandler ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-SessionManager'.
%
errorCount
run
(ZnEncodedStream subclass: 'ZnEncodedReadStream'
	instVarNames: #( peeked)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnEncodedReadStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(ZnEncodedStream subclass: 'ZnEncodedWriteStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnEncodedWriteStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(ExecutionEnvironment subclass: 'DefaultExecutionEnvironment'
	instVarNames: #()
	classVars: #()
	classInstVars: #( instance)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DefaultExecutionEnvironment ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(Number subclass: 'Fraction'
	instVarNames: #( numerator denominator)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Fraction ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Numbers'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(Integer classVarNames includes: each) ifFalse: [
		Integer addClassVarName: each]].
%
errorCount
run
| names |
names := #( E Epsilon Halfpi Infinity Ln10 Ln2 MaxVal MaxValLn MinValLogBase2 NaN NegativeInfinity NegativeZero Pi RadiansPerDegree Sqrt2 ThreePi Twopi).
names do: [:each | 
	(Float classVarNames includes: each) ifFalse: [
		Float addClassVarName: each]].
%
errorCount
run
(LookupKey subclass: 'Association'
	instVarNames: #( value)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Association ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Support'.
%
errorCount
run
(LookupKey indexableSubclass: 'WeakValueAssociation'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakValueAssociation ifAbsent: [nil])
	description: '4'
	options: #()
) category: 'Collections-Support'.
%
errorCount
run
(Timespan subclass: 'Month'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: { ChronologyConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Month ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(Timespan subclass: 'Schedule'
	instVarNames: #( schedule)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Schedule ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(Timespan subclass: 'Week'
	instVarNames: #()
	classVars: #( StartDay)
	classInstVars: #()
	poolDictionaries: { ChronologyConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Week ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(Timespan subclass: 'Year'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Year ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(Timespan subclass: 'Date'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: { ChronologyConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Date ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(MetacelloVersion subclass: 'MetacelloMCVersion'
	instVarNames: #( loaderPolicy)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMCVersion ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Model'.
%
errorCount
run
(SimpleServiceEntry subclass: 'FileModifyingSimpleServiceEntry'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileModifyingSimpleServiceEntry ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-FileRegistry'.
%
errorCount
run
(MCPackageManager subclass: 'MCWorkingCopy'
	instVarNames: #( ancestry counter repositoryGroup requiredPackages)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCWorkingCopy ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(Bag subclass: 'IdentityBag'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IdentityBag ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Unordered'.
%
errorCount
run
(SequenceableCollection subclass: 'ArrayedCollection'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ArrayedCollection ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Collections-Abstract'.
%
errorCount
run
(SequenceableCollection subclass: 'LinkedList'
	instVarNames: #( firstLink lastLink)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LinkedList ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Sequenceable'.
%
errorCount
run
(SequenceableCollection subclass: 'OrderedCollection'
	instVarNames: #( array firstIndex lastIndex)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OrderedCollection ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Sequenceable'.
%
errorCount
run
(SequenceableCollection subclass: 'Interval'
	instVarNames: #( start stop step)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Interval ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Sequenceable'.
%
errorCount
run
(SequenceableCollection subclass: 'RunArray'
	instVarNames: #( runs values lastIndex lastRun lastOffset)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RunArray ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(SequenceableCollection subclass: 'ProcessList'
	instVarNames: #( firstLink lastLink)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ProcessList ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(SmallDictionary subclass: 'SmallIdentityDictionary'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SmallIdentityDictionary ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Unordered'.
%
errorCount
run
(HashedCollection subclass: 'Set'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Set ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Unordered'.
%
errorCount
run
(HashedCollection subclass: 'Dictionary'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Dictionary ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Unordered'.
%
errorCount
run
(OrderedDictionary subclass: 'OrderedIdentityDictionary'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OrderedIdentityDictionary ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Sequenceable'.
%
errorCount
run
(TextAction subclass: 'TextDoIt'
	instVarNames: #( evalString)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextDoIt ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(TextAction subclass: 'TextLink'
	instVarNames: #( classAndMethod)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextLink ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(TextAction subclass: 'TextURL'
	instVarNames: #( url)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextURL ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(TextAction subclass: 'PluggableTextAttribute'
	instVarNames: #( evalBlock)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PluggableTextAttribute ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(TextFontChange subclass: 'TextFontReference'
	instVarNames: #( font)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextFontReference ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(PositionableStream subclass: 'ReadStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ReadStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Streams'.
%
errorCount
run
(PositionableStream subclass: 'WriteStream'
	instVarNames: #( writeLimit)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WriteStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Streams'.
%
errorCount
run
(AbstractBinaryFileStream subclass: 'BinaryFileStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #BinaryFileStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Files-Streams'.
%
errorCount
run
(AbstractBinaryFileStream subclass: 'StdioStream'
	instVarNames: #( peekBuffer)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #StdioStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Files-Streams'.
%
errorCount
run
(DecoratorStream subclass: 'ChunkReadStream'
	instVarNames: #( nextChar)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ChunkReadStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'CodeImport'.
%
errorCount
run
(DecoratorStream subclass: 'ChunkWriteStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ChunkWriteStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'CodeExport'.
%
errorCount
run
(QuotedPrintableMimeConverter subclass: 'RFC2047MimeConverter'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFC2047MimeConverter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-MIME'.
%
errorCount
run
(DisplayMedium subclass: 'Form'
	instVarNames: #( bits width height depth offset)
	classVars: #( FloodFillTolerance)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Form ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Graphics-Display Objects'.
%
errorCount
run
(InfiniteForm subclass: 'AlphaInfiniteForm'
	instVarNames: #( origin extent)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AlphaInfiniteForm ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Graphics-Display Objects'.
%
errorCount
run
(TelnetProtocolClient subclass: 'FTPClient'
	instVarNames: #( dataSocket)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FTPClient ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Protocols'.
%
errorCount
run
(TelnetProtocolClient subclass: 'SMTPClient'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SMTPClient ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Protocols'.
%
errorCount
run
(ZipArchiveMember subclass: 'ZipFileMember'
	instVarNames: #( externalFileName stream localHeaderRelativeOffset dataOffset)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZipFileMember ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Archives'.
%
errorCount
run
(ZipArchiveMember subclass: 'ZipNewFileMember'
	instVarNames: #( externalFileName stream)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZipNewFileMember ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Archives'.
%
errorCount
run
(ZipArchiveMember subclass: 'ZipStringMember'
	instVarNames: #( contents stream)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZipStringMember ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Archives'.
%
errorCount
run
(MCVersionInfo subclass: 'MCLazyVersionInfo'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCLazyVersionInfo ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(MCClassDefinition subclass: 'MCTraitDefinition'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCTraitDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Modeling'.
%
errorCount
run
(MCScriptDefinition subclass: 'MCPostscriptDefinition'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCPostscriptDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Modeling'.
%
errorCount
run
(MCScriptDefinition subclass: 'MCPreambleDefinition'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCPreambleDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Modeling'.
%
errorCount
run
(MCScriptDefinition subclass: 'MCRemovalPostscriptDefinition'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCRemovalPostscriptDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Modeling'.
%
errorCount
run
(MCScriptDefinition subclass: 'MCRemovalPreambleDefinition'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCRemovalPreambleDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Modeling'.
%
errorCount
run
(MCMockClassA subclass: 'MCMockASubclass'
	instVarNames: #( x)
	classVars: #( Y)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMockASubclass ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloMocks'.
%
errorCount
run
(MCSnapshotReader subclass: 'MCStReader'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCStReader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Storing'.
%
errorCount
run
(MCVersionReader subclass: 'MCMczReader'
	instVarNames: #( zip infoCache)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMczReader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Storing'.
%
errorCount
run
(MCVersionReader subclass: 'MCMcmReader'
	instVarNames: #( fileName configuration)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMcmReader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloConfigurations'.
%
errorCount
run
(MCFileBasedRepository subclass: 'MCDirectoryRepository'
	instVarNames: #( directory)
	classVars: #( DefaultDirectoryName)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCDirectoryRepository ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Repositories'.
%
errorCount
run
(MCFileBasedRepository subclass: 'MCFtpRepository'
	instVarNames: #( host directory user password)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFtpRepository ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloRemoteRepositories'.
%
errorCount
run
(MCFileBasedRepository subclass: 'MCHttpRepository'
	instVarNames: #( location user password readerCache)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCHttpRepository ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloRemoteRepositories'.
%
errorCount
run
(MCMczWriter subclass: 'MCMcdWriter'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMcdWriter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Storing'.
%
errorCount
run
(MCMczWriter subclass: 'MCFileTreeWriter'
	instVarNames: #( directory packageFileDirectory cachedPackageFileDirectoryEntries)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFileTreeWriter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloFileTree-Core'.
%
errorCount
run
(MCVersionInfoWriter subclass: 'MCFileTreeVersionInfoWriter'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFileTreeVersionInfoWriter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloFileTree-Core'.
%
errorCount
run
(MCStWriter subclass: 'MCFileTreePackageStructureStWriter'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFileTreePackageStructureStWriter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloFileTree-Core'.
%
errorCount
run
(MCFileTreeAbstractStWriter subclass: 'MCFileTreeStSnapshotWriter'
	instVarNames: #( classDefinitions traitDefinitions classTraitDefinitions methodDefinitions)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFileTreeStSnapshotWriter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloFileTree-Core'.
%
errorCount
run
(MCFileTreeAbstractStWriter subclass: 'MCFileTreeStWriter'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFileTreeStWriter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloFileTree-Core'.
%
errorCount
run
(CommandLineUIManager subclass: 'NonInteractiveUIManager'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #NonInteractiveUIManager ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'UIManager'.
%
errorCount
run
(TraitDescription subclass: 'ClassTrait'
	instVarNames: #( baseTrait)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassTrait ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Traits-Kernel'.
%
errorCount
run
(TraitDescription subclass: 'Trait'
	instVarNames: #( name environment classTrait category)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Trait ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Traits-Kernel'.
%
errorCount
run
(PragmaAnnouncement subclass: 'PragmaAdded'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PragmaAdded ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'PragmaCollector'.
%
errorCount
run
(PragmaAnnouncement subclass: 'PragmaRemoved'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PragmaRemoved ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'PragmaCollector'.
%
errorCount
run
(PragmaAnnouncement subclass: 'PragmaUpdated'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PragmaUpdated ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'PragmaCollector'.
%
errorCount
run
(ZnLogEvent subclass: 'ZnClientLogEvent'
	instVarNames: #( clientId)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnClientLogEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnLogEvent subclass: 'ZnServerLogEvent'
	instVarNames: #( serverId processId)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnServerLogEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(SystemAnnouncement subclass: 'CategoryAdded'
	instVarNames: #( categoryName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CategoryAdded ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Categories'.
%
errorCount
run
(SystemAnnouncement subclass: 'CategoryRemoved'
	instVarNames: #( categoryName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CategoryRemoved ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Categories'.
%
errorCount
run
(SystemAnnouncement subclass: 'CategoryRenamed'
	instVarNames: #( from to newCategoryName oldCategoryName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CategoryRenamed ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Categories'.
%
errorCount
run
(SystemAnnouncement subclass: 'ExpressionEvaluated'
	instVarNames: #( context expressionEvaluated)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ExpressionEvaluated ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Base'.
%
errorCount
run
(SystemAnnouncement subclass: 'ProtocolAnnouncement'
	instVarNames: #( protocol classReorganized)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ProtocolAnnouncement ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Protocols'.
%
errorCount
run
(SystemAnnouncement subclass: 'SnapshotDone'
	instVarNames: #( isNewImage)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SnapshotDone ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Base'.
%
errorCount
run
(SystemAnnouncement subclass: 'ClassAnnouncement'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassAnnouncement ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Classes'.
%
errorCount
run
(SystemAnnouncement subclass: 'MethodAnnouncement'
	instVarNames: #( method methodPackage)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MethodAnnouncement ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Methods'.
%
errorCount
run
(SystemAnnouncement subclass: 'MetalinkChanged'
	instVarNames: #( link)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetalinkChanged ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Core'.
%
errorCount
run
(SystemAnnouncement subclass: 'ClassTagAnnouncement'
	instVarNames: #( package tag)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassTagAnnouncement ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Packages'.
%
errorCount
run
(SystemAnnouncement subclass: 'RPackageAnnouncement'
	instVarNames: #( package)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RPackageAnnouncement ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'RPackage-Core'.
%
errorCount
run
(JobAnnouncement subclass: 'JobChange'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #JobChange ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Jobs-Announcements'.
%
errorCount
run
(JobAnnouncement subclass: 'JobEnd'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #JobEnd ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Jobs-Announcements'.
%
errorCount
run
(JobAnnouncement subclass: 'JobStart'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #JobStart ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Jobs-Announcements'.
%
errorCount
run
(ExternalClipboard subclass: 'MacOSClipboard'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MacOSClipboard ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Clipboard'.
%
errorCount
run
(MD5 subclass: 'MD5NonPrimitive'
	instVarNames: #()
	classVars: #( ABCDTable IndexTable ShiftTable SinTable)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MD5NonPrimitive ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Hashing-MD5'.
%
errorCount
run
(GoferWorking subclass: 'GoferCleanup'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferCleanup ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferWorking subclass: 'GoferRecompile'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferRecompile ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferWorking subclass: 'GoferUnload'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferUnload ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferWorking subclass: 'GoferUpdate'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferUpdate ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferWorking subclass: 'GoferChanges'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferChanges ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferWorking subclass: 'GoferCommit'
	instVarNames: #( message)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferCommit ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferWorking subclass: 'GoferReinitialize'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferReinitialize ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferLoad subclass: 'GoferMetacelloLoad'
	instVarNames: #( version)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferMetacelloLoad ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferLoad subclass: 'MetacelloGoferLoad'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloGoferLoad ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Gofer'.
%
errorCount
run
(GoferSynchronize subclass: 'GoferPush'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferPush ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferSynchronize subclass: 'GoferFetch'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferFetch ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(ByteTextConverter subclass: 'CP1250TextConverter'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CP1250TextConverter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-TextConversion'.
%
errorCount
run
(ByteTextConverter subclass: 'ISO88592TextConverter'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ISO88592TextConverter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-TextConversion'.
%
errorCount
run
(ByteTextConverter subclass: 'Latin1TextConverter'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Latin1TextConverter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-TextConversion'.
%
errorCount
run
(ByteTextConverter subclass: 'MacRomanTextConverter'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MacRomanTextConverter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-TextConversion'.
%
errorCount
run
(ByteTextConverter subclass: 'CP1252TextConverter'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CP1252TextConverter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-TextConversion'.
%
errorCount
run
(ByteTextConverter subclass: 'ISO885915TextConverter'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ISO885915TextConverter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-TextConversion'.
%
errorCount
run
(UTF8TextConverter subclass: 'UTF8DecomposedTextConverter'
	instVarNames: #( combinedChar)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UTF8DecomposedTextConverter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-TextConversion'.
%
errorCount
run
(GoferVersionReference subclass: 'GoferResolvedReference'
	instVarNames: #( repository)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferResolvedReference ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferPackageReference subclass: 'GoferConstraintReference'
	instVarNames: #( constraintBlock)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferConstraintReference ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferPackageReference subclass: 'GoferConfigurationReference'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferConfigurationReference ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferPackageReference subclass: 'MetacelloGoferPackage'
	instVarNames: #( packageFilename version workingCopy)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloGoferPackage ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Gofer'.
%
errorCount
run
(WaitfreeQueue subclass: 'AtomicSharedQueue'
	instVarNames: #( availSema)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AtomicSharedQueue ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Atomic'.
%
errorCount
run
(Error subclass: 'NonBooleanReceiver'
	instVarNames: #( object)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #NonBooleanReceiver ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(Error subclass: 'InvalidSocketStatusException'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InvalidSocketStatusException ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
(Error subclass: 'NetworkError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #NetworkError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
(Error subclass: 'ProtocolClientError'
	instVarNames: #( protocolInstance)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ProtocolClientError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Protocols'.
%
errorCount
run
(Error subclass: 'CRCError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CRCError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Streams'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(ArithmeticError classVarNames includes: each) ifFalse: [
		ArithmeticError addClassVarName: each]].
%
errorCount
run
(Error subclass: 'TraitException'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TraitException ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Traits-Kernel'.
%
errorCount
run
(Error subclass: 'RegexError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RegexError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core-Exceptions'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(MessageNotUnderstood classVarNames includes: each) ifFalse: [
		MessageNotUnderstood addClassVarName: each]].
%
errorCount
run
(Error subclass: 'OutOfMemory'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OutOfMemory ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(Error subclass: 'GoferRepositoryError'
	instVarNames: #( repository)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferRepositoryError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(Error subclass: 'DuplicatedVariableError'
	instVarNames: #( superclass variable)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DuplicatedVariableError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(Error subclass: 'ErrorNonInteractive'
	instVarNames: #( exception)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ErrorNonInteractive ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'UIManager'.
%
errorCount
run
(Error subclass: 'CollectionIsEmpty'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CollectionIsEmpty ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Abstract'.
%
errorCount
run
(Error subclass: 'NotFound'
	instVarNames: #( object)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #NotFound ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Abstract'.
%
errorCount
run
(Error subclass: 'SizeMismatch'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SizeMismatch ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Abstract'.
%
errorCount
run
(Error subclass: 'SelectorException'
	instVarNames: #( selector)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SelectorException ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(Error subclass: 'SubscriptOutOfBounds'
	instVarNames: #( subscript lowerBound upperBound)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SubscriptOutOfBounds ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(Error subclass: 'ZnParseError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnParseError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Exceptions'.
%
errorCount
run
(Error subclass: 'ZnMissingHost'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnMissingHost ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Exceptions'.
%
errorCount
run
(Error subclass: 'ZnHttpUnsuccessful'
	instVarNames: #( response)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnHttpUnsuccessful ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Exceptions'.
%
errorCount
run
(Error subclass: 'ZnUnexpectedContentType'
	instVarNames: #( expectedContentType actualContentType)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnUnexpectedContentType ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Exceptions'.
%
errorCount
run
(Error subclass: 'ZnTooManyDictionaryEntries'
	instVarNames: #( limit)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnTooManyDictionaryEntries ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Resource-Meta-Core'.
%
errorCount
run
(Error subclass: 'ZnTooManyRedirects'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnTooManyRedirects ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Exceptions'.
%
errorCount
run
(Error subclass: 'ZnEntityTooLarge'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnEntityTooLarge ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Exceptions'.
%
errorCount
run
(Error subclass: 'FileSystemError'
	instVarNames: #( reference)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileSystemError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Kernel'.
%
errorCount
run
(Error subclass: 'ZdcPluginMissing'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZdcPluginMissing ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zodiac-Core'.
%
errorCount
run
(Error subclass: 'MCRepositoryError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCRepositoryError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Repositories'.
%
errorCount
run
(Error subclass: 'MetacelloCannotUpdateReleasedVersionError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloCannotUpdateReleasedVersionError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Errors'.
%
errorCount
run
(Error subclass: 'MetacelloProjectSpecLoadError'
	instVarNames: #( projectSpec versionDoesNotExistException)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloProjectSpecLoadError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Errors'.
%
errorCount
run
(Error subclass: 'MetacelloVersionDoesNotExistError'
	instVarNames: #( project versionString)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloVersionDoesNotExistError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Errors'.
%
errorCount
run
(Error subclass: 'MetacelloValidationFailure'
	instVarNames: #( issues)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloValidationFailure ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Errors'.
%
errorCount
run
(Error subclass: 'ZnCharacterEncodingError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnCharacterEncodingError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(Error subclass: 'ZnPortNotANumber'
	instVarNames: #( port)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnPortNotANumber ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Resource-Meta-Core'.
%
errorCount
run
(Error subclass: 'ZnUnknownScheme'
	instVarNames: #( scheme)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnUnknownScheme ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Resource-Meta-Core'.
%
errorCount
run
(Error subclass: 'MCPermissionDenied'
	instVarNames: #( repository)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCPermissionDenied ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloRemoteRepositories'.
%
errorCount
run
(Error subclass: 'OCSemanticError'
	instVarNames: #( compilationContext node)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCSemanticError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Exception'.
%
errorCount
run
(Error subclass: 'AssertionFailure'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AssertionFailure ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(Error subclass: 'ProtocolRemovalException'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ProtocolRemovalException ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(Error subclass: 'MetacelloPackageSpecResolutionError'
	instVarNames: #( packageSpec repositories repositoryError)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloPackageSpecResolutionError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Errors'.
%
errorCount
run
(Error subclass: 'MetacelloScriptingError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloScriptingError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(Error subclass: 'ZnByteStringBecameWideString'
	instVarNames: #( byteString wideString)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnByteStringBecameWideString ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(Error subclass: 'MissingClassError'
	instVarNames: #( resumable className superclassName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MissingClassError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'CodeImport'.
%
errorCount
run
(Error subclass: 'RPackageConflictError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RPackageConflictError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'RPackage-Core'.
%
errorCount
run
(Error subclass: 'DateError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DateError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Chronology'.
%
errorCount
run
(Error subclass: 'FileException'
	instVarNames: #( fileName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileException ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Files-Core'.
%
errorCount
run
(Error subclass: 'ClassBuilderError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassBuilderError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Exception'.
%
errorCount
run
(Error subclass: 'UTF8InvalidText'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UTF8InvalidText ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Multilingual-TextConversion'.
%
errorCount
run
(Error subclass: 'MetacelloNameNotDefinedError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloNameNotDefinedError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Errors'.
%
errorCount
run
(Error subclass: 'StartupPreferencesLoadingError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #StartupPreferencesLoadingError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'StartupPreferences'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(CannotReturn classVarNames includes: each) ifFalse: [
		CannotReturn addClassVarName: each]].
%
errorCount
run
(Error subclass: 'UnwindError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UnwindError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(Error subclass: 'ModificationForbidden'
	instVarNames: #( object fieldIndex newValue retrySelector)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ModificationForbidden ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(Error subclass: 'OCAbortCompilation'
	instVarNames: #( sourceCode)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCAbortCompilation ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Exception'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(Warning classVarNames includes: each) ifFalse: [
		Warning addClassVarName: each]].
%
errorCount
run
(Notification subclass: 'ReparseAfterSourceEditing'
	instVarNames: #( newSource)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ReparseAfterSourceEditing ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Exception'.
%
errorCount
run
(Notification subclass: 'ProgressNotification'
	instVarNames: #( amount done extra)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ProgressNotification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'UIManager-Support'.
%
errorCount
run
(Notification subclass: 'ProvideAnswerNotification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ProvideAnswerNotification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'UIManager-Support'.
%
errorCount
run
(Notification subclass: 'TimedOut'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TimedOut ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(Notification subclass: 'MCChangeSelectionRequest'
	instVarNames: #( patch label)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCChangeSelectionRequest ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(Notification subclass: 'MCMergeResolutionRequest'
	instVarNames: #( merger)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMergeResolutionRequest ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(Notification subclass: 'MCVersionNameAndMessageRequest'
	instVarNames: #( suggestion suggestedLogComment)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCVersionNameAndMessageRequest ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Versioning'.
%
errorCount
run
(Notification subclass: 'HTTPProgress'
	instVarNames: #( total amount)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #HTTPProgress ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
(Notification subclass: 'ResolutionRequest'
	instVarNames: #( origin)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ResolutionRequest ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(Notification subclass: 'MetacelloCleanNotification'
	instVarNames: #( version)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloCleanNotification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Notifications'.
%
errorCount
run
(Notification subclass: 'MetacelloClearStackCacheNotification'
	instVarNames: #( cacheNames)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloClearStackCacheNotification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Notifications'.
%
errorCount
run
(Notification subclass: 'MetacelloSkipDirtyPackageLoad'
	instVarNames: #( packageSpec)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloSkipDirtyPackageLoad ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Notifications'.
%
errorCount
run
(Notification subclass: 'MetacelloStackCacheNotification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloStackCacheNotification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Notifications'.
%
errorCount
run
(Notification subclass: 'MetacelloValidationNotification'
	instVarNames: #( issue)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloValidationNotification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Notifications'.
%
errorCount
run
(Notification subclass: 'AuthorNameRequest'
	instVarNames: #( initialAnswer)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AuthorNameRequest ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Support'.
%
errorCount
run
(Notification subclass: 'MCCredentialsRequest'
	instVarNames: #( username password url)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCCredentialsRequest ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloRemoteRepositories'.
%
errorCount
run
(Notification subclass: 'OCSemanticWarning'
	instVarNames: #( compilationContext node)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCSemanticWarning ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Exception'.
%
errorCount
run
(Notification subclass: 'MetacelloErrorInProjectConstructionNotification'
	instVarNames: #( versionString exception)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloErrorInProjectConstructionNotification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Notifications'.
%
errorCount
run
(Notification subclass: 'MetacelloScriptNotification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloScriptNotification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(Notification subclass: 'OCSourceCodeChanged'
	instVarNames: #( newSourceCode)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCSourceCodeChanged ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Exception'.
%
errorCount
run
(Notification subclass: 'ProcessAlreadyTerminating'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ProcessAlreadyTerminating ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(Notification subclass: 'ZnRespond'
	instVarNames: #( response)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnRespond ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Exceptions'.
%
errorCount
run
(Notification subclass: 'MetacelloIgnorePackageLoaded'
	instVarNames: #( packageSpec)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloIgnorePackageLoaded ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Notifications'.
%
errorCount
run
(Notification subclass: 'MetacelloScriptGitBasedDownloadNotification'
	instVarNames: #( projectPath versionString)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloScriptGitBasedDownloadNotification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(Notification subclass: 'SyntaxErrorNotification'
	instVarNames: #( inClass code doitFlag location)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SyntaxErrorNotification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Exception'.
%
errorCount
run
(ZnSimplifiedByteEncoder subclass: 'ZnByteEncoder'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnByteEncoder ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(ZnUTFEncoder subclass: 'ZnEndianSensitiveUTFEncoder'
	instVarNames: #( endianness)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnEndianSensitiveUTFEncoder ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(ZnUTFEncoder subclass: 'ZnUTF8Encoder'
	instVarNames: #()
	classVars: #( ByteASCIISet ByteUTF8Encoding)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnUTF8Encoder ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(ZnBasicCredential subclass: 'ZnDigestCredential'
	instVarNames: #( nonce opaque)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnDigestCredential ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Support'.
%
errorCount
run
(DynamicVariable subclass: 'ZnConnectionTimeout'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnConnectionTimeout ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Variables'.
%
errorCount
run
(DynamicVariable subclass: 'ZnSignalProgress'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnSignalProgress ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Variables'.
%
errorCount
run
(DynamicVariable subclass: 'ZnMaximumEntitySize'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnMaximumEntitySize ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Variables'.
%
errorCount
run
(DynamicVariable subclass: 'ZnCurrentServer'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnCurrentServer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Variables'.
%
errorCount
run
(DynamicVariable subclass: 'FloatPrintPolicy'
	instVarNames: #( default)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FloatPrintPolicy ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Numbers'.
%
errorCount
run
(DynamicVariable subclass: 'ZnDefaultCharacterEncoder'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnDefaultCharacterEncoder ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(DynamicVariable subclass: 'ZnMaximumNumberOfDictionaryEntries'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnMaximumNumberOfDictionaryEntries ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Resource-Meta-Core'.
%
errorCount
run
(DynamicVariable subclass: 'CurrentJob'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CurrentJob ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Jobs-Base'.
%
errorCount
run
(ProcessLocalVariable subclass: 'ZnCurrentServerSession'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnCurrentServerSession ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Variables'.
%
errorCount
run
(ProcessLocalVariable subclass: 'ActiveMetaContext'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ActiveMetaContext ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Contexts'.
%
errorCount
run
(ProcessLocalVariable subclass: 'CurrentExecutionEnvironment'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CurrentExecutionEnvironment ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(ProcessLocalVariable subclass: 'LocalRecursionStopper'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LocalRecursionStopper ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(PlatformResolver subclass: 'MacOSResolver'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MacOSResolver ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(PlatformResolver subclass: 'UnixResolver'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UnixResolver ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(PlatformResolver subclass: 'WindowsResolver'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WindowsResolver ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(DiskStore subclass: 'UnixStore'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UnixStore ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Disk'.
%
errorCount
run
(DiskStore subclass: 'WindowsStore'
	instVarNames: #( disk)
	classVars: #( Disks)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WindowsStore ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Disk'.
%
errorCount
run
(AbstractEnumerationVisitor subclass: 'CollectVisitor'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CollectVisitor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
(AbstractEnumerationVisitor subclass: 'SelectVisitor'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SelectVisitor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Implementation'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(Class classVarNames includes: each) ifFalse: [
		Class addClassVarName: each]].
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(Metaclass classVarNames includes: each) ifFalse: [
		Metaclass addClassVarName: each]].
%
errorCount
run
(RBReplaceRule subclass: 'RBBlockReplaceRule'
	instVarNames: #( replaceBlock)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBBlockReplaceRule ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Matching'.
%
errorCount
run
(RBReplaceRule subclass: 'RBStringReplaceRule'
	instVarNames: #( replaceTree)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBStringReplaceRule ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Matching'.
%
errorCount
run
(RBPragmaNode subclass: 'RBPatternPragmaNode'
	instVarNames: #( isList)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBPatternPragmaNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Pattern'.
%
errorCount
run
(RBValueNode subclass: 'RBArrayNode'
	instVarNames: #( left right statements periods)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBArrayNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBValueNode subclass: 'RBAssignmentNode'
	instVarNames: #( variable assignment value)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBAssignmentNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBValueNode subclass: 'RBCascadeNode'
	instVarNames: #( messages semicolons)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBCascadeNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBValueNode subclass: 'RBLiteralNode'
	instVarNames: #( start stop)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBLiteralNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBValueNode subclass: 'RBMessageNode'
	instVarNames: #( receiver selector keywordsPositions arguments)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBMessageNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBValueNode subclass: 'RBVariableNode'
	instVarNames: #( name start)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBVariableNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBValueNode subclass: 'RBBlockNode'
	instVarNames: #( left right colons arguments bar body scope)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBBlockNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBValueNode subclass: 'RBParseErrorNode'
	instVarNames: #( errorMessage value start)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBParseErrorNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBMethodNode subclass: 'RBPatternMethodNode'
	instVarNames: #( isList)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBPatternMethodNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Pattern'.
%
errorCount
run
(RBParseTreeSearcher subclass: 'RBParseTreeRewriter'
	instVarNames: #( tree)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBParseTreeRewriter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Matching'.
%
errorCount
run
(OCASTClosureAnalyzer subclass: 'RFASTClosureAnalyzer'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFASTClosureAnalyzer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Compiler'.
%
errorCount
run
(OCASTTranslator subclass: 'OCASTTranslatorForEffect'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCASTTranslatorForEffect ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Translator'.
%
errorCount
run
(OCASTTranslator subclass: 'OCASTTranslatorForValue'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCASTTranslatorForValue ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Translator'.
%
errorCount
run
(OCASTTranslator subclass: 'RFASTTranslator'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFASTTranslator ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Compiler'.
%
errorCount
run
(OCASTSemanticAnalyzer subclass: 'RFSemanticAnalyzer'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFSemanticAnalyzer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Compiler'.
%
errorCount
run
(RBAssignmentToken subclass: 'RBShortAssignmentToken'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBShortAssignmentToken ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Tokens'.
%
errorCount
run
(RBValueToken subclass: 'RBBinarySelectorToken'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBBinarySelectorToken ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Tokens'.
%
errorCount
run
(RBValueToken subclass: 'RBIdentifierToken'
	instVarNames: #( stopPosition)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBIdentifierToken ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Tokens'.
%
errorCount
run
(RBValueToken subclass: 'RBKeywordToken'
	instVarNames: #( stopPosition)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBKeywordToken ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Tokens'.
%
errorCount
run
(RBValueToken subclass: 'RBLiteralArrayToken'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBLiteralArrayToken ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Tokens'.
%
errorCount
run
(RBValueToken subclass: 'RBLiteralToken'
	instVarNames: #( stopPosition source)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBLiteralToken ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Tokens'.
%
errorCount
run
(RBValueToken subclass: 'RBPatternBlockToken'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBPatternBlockToken ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Tokens'.
%
errorCount
run
(RBValueToken subclass: 'RBSpecialCharacterToken'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBSpecialCharacterToken ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Tokens'.
%
errorCount
run
(RBValueToken subclass: 'RBErrorToken'
	instVarNames: #( cause location)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBErrorToken ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Tokens'.
%
errorCount
run
(ZdcSimpleSocketStream subclass: 'ZdcOptimizedSocketStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZdcOptimizedSocketStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zodiac-Core'.
%
errorCount
run
(MetacelloAbstractVersionConstructor subclass: 'MetacelloToolBoxConstructor'
	instVarNames: #( currentSection methodSections)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloToolBoxConstructor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Constructors'.
%
errorCount
run
(MetacelloAbstractVersionConstructor subclass: 'MetacelloVersionConstructor'
	instVarNames: #( errorMap)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloVersionConstructor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Constructors'.
%
errorCount
run
(MetacelloAbstractVersionConstructor subclass: 'MetacelloBaselineConstructor'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloBaselineConstructor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Constructors'.
%
errorCount
run
(MetacelloVersionValidator subclass: 'MetacelloMCVersionValidator'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMCVersionValidator ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Validation'.
%
errorCount
run
(MetacelloVersionMethodSpec subclass: 'MetacelloBaselineOfMethodSpec'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloBaselineOfMethodSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Constructors'.
%
errorCount
run
(MetacelloPharoCommonPlatform subclass: 'MetacelloPharo30Platform'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloPharo30Platform ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Platform'.
%
errorCount
run
(MetacelloMCProject subclass: 'MetacelloMCBaselineProject'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMCBaselineProject ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Model'.
%
errorCount
run
(MetacelloAbstractPackageSpec subclass: 'MetacelloGroupSpec'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloGroupSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Specs'.
%
errorCount
run
(MetacelloAbstractPackageSpec subclass: 'MetacelloProjectReferenceSpec'
	instVarNames: #( projectReference)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloProjectReferenceSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Specs'.
%
errorCount
run
(MetacelloAbstractPackageSpec subclass: 'MetacelloPackageSpec'
	instVarNames: #( file repositories goferPackage preLoadDoIt postLoadDoIt)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloPackageSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Specs'.
%
errorCount
run
(MetacelloMemberListSpec subclass: 'MetacelloPackagesSpec'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloPackagesSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Specs'.
%
errorCount
run
(MetacelloMemberListSpec subclass: 'MetacelloRepositoriesSpec'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloRepositoriesSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Specs'.
%
errorCount
run
(MetacelloMemberSpec subclass: 'MetacelloAddMemberSpec'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloAddMemberSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Members'.
%
errorCount
run
(MetacelloMemberSpec subclass: 'MetacelloCopyMemberSpec'
	instVarNames: #( sourceName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloCopyMemberSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Members'.
%
errorCount
run
(MetacelloMemberSpec subclass: 'MetacelloMergeMemberSpec'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMergeMemberSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Members'.
%
errorCount
run
(MetacelloMemberSpec subclass: 'MetacelloRemoveMemberSpec'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloRemoveMemberSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Members'.
%
errorCount
run
(MetacelloProjectSpec subclass: 'MetacelloGenericProjectSpec'
	instVarNames: #( projectPackage repositories)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloGenericProjectSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Specs'.
%
errorCount
run
(MetacelloVersionSpec subclass: 'MetacelloMCVersionSpec'
	instVarNames: #( repositories packages)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMCVersionSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Specs'.
%
errorCount
run
(MetacelloCommonMCSpecLoader subclass: 'MetacelloFetchingMCSpecLoader'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloFetchingMCSpecLoader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Loaders'.
%
errorCount
run
(MetacelloCommonMCSpecLoader subclass: 'MetacelloLoadingMCSpecLoader'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloLoadingMCSpecLoader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Loaders'.
%
errorCount
run
(MetacelloPrePostLoadDirective subclass: 'MetacelloPostLoadDirective'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloPostLoadDirective ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Directives'.
%
errorCount
run
(MetacelloPrePostLoadDirective subclass: 'MetacelloPreLoadDirective'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloPreLoadDirective ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Directives'.
%
errorCount
run
(MetacelloVersionLoadDirective subclass: 'MetacelloAtomicLoadDirective'
	instVarNames: #( packageloads preloads postloads)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloAtomicLoadDirective ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Directives'.
%
errorCount
run
(MetacelloVersionLoadDirective subclass: 'MetacelloExplicitLoadDirective'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloExplicitLoadDirective ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Directives'.
%
errorCount
run
(MetacelloVersionLoadDirective subclass: 'MetacelloLinearLoadDirective'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloLinearLoadDirective ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Directives'.
%
errorCount
run
(ZnSingleThreadedServer subclass: 'ZnMultiThreadedServer'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnMultiThreadedServer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Client-Server'.
%
errorCount
run
(IRAccess subclass: 'IRInstVarAccess'
	instVarNames: #( index)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRInstVarAccess ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRAccess subclass: 'IRLiteralVariableAccess'
	instVarNames: #( association)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRLiteralVariableAccess ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRAccess subclass: 'IRTempAccess'
	instVarNames: #( name)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRTempAccess ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRAccess subclass: 'IRPushReceiver'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPushReceiver ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRAccess subclass: 'IRPushThisContext'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPushThisContext ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRJump subclass: 'IRJumpIf'
	instVarNames: #( boolean otherwise)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRJumpIf ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRJump subclass: 'IRPushClosureCopy'
	instVarNames: #( numArgs blockSequence tempMap copiedValues lastBlockSequence arguments)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPushClosureCopy ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRReturn subclass: 'IRBlockReturnTop'
	instVarNames: #( successor)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRBlockReturnTop ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRReturn subclass: 'IRReturnInstVar'
	instVarNames: #( index)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRReturnInstVar ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRReturn subclass: 'IRReturnLiteral'
	instVarNames: #( literal)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRReturnLiteral ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRReturn subclass: 'IRReturnReceiver'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRReturnReceiver ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(OCAbstractMethodScope subclass: 'OCBlockScope'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCBlockScope ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OCAbstractMethodScope subclass: 'OCMethodScope'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCMethodScope ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OCAbstractLocalVariable subclass: 'OCSpecialVariable'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCSpecialVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OCAbstractLocalVariable subclass: 'OCTempVariable'
	instVarNames: #( escaping)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCTempVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(UnixPlatform subclass: 'Unix32Platform'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Unix32Platform ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Platforms'.
%
errorCount
run
(UnixPlatform subclass: 'Unix64Platform'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Unix64Platform ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Platforms'.
%
errorCount
run
(MacOSPlatform subclass: 'MacOSXPlatform'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MacOSXPlatform ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Platforms'.
%
errorCount
run
(WinPlatform subclass: 'Win32Platform'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Win32Platform ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Platforms'.
%
errorCount
run
(WinPlatform subclass: 'Win64Platform'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Win64Platform ifAbsent: [nil])
	description: '0'
	options: #()
) category: 'System-Platforms'.
%
errorCount
run
(BasicCommandLineHandler subclass: 'PharoCommandLineHandler'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PharoCommandLineHandler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-CommandLineHandler'.
%
errorCount
run
(STCommandLineHandler subclass: 'EvaluateCommandLineHandler'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #EvaluateCommandLineHandler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'CodeImportCommandLineHandlers'.
%
errorCount
run
(ObjectLayout subclass: 'BitsLayout'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #BitsLayout ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Layout'.
%
errorCount
run
(ObjectLayout subclass: 'CompiledMethodLayout'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CompiledMethodLayout ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Layout'.
%
errorCount
run
(ObjectLayout subclass: 'PointerLayout'
	instVarNames: #( slotScope)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PointerLayout ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Layout'.
%
errorCount
run
(ObjectLayout subclass: 'ImmediateLayout'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ImmediateLayout ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Layout'.
%
errorCount
run
(IndexedSlot subclass: 'InstanceVariableSlot'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InstanceVariableSlot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Variables'.
%
errorCount
run
(IndexedSlot subclass: 'WeakSlot'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakSlot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples'.
%
errorCount
run
(IndexedSlot subclass: 'ProcessLocalSlot'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ProcessLocalSlot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples'.
%
errorCount
run
(IndexedSlot subclass: 'MorphSlot'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MorphSlot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples'.
%
errorCount
run
(RGAbstractContainer subclass: 'RGContainer'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGContainer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Containers'.
%
errorCount
run
(RGAbstractContainer subclass: 'RGOrganization'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGOrganization ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Containers'.
%
errorCount
run
(RGElementDefinition subclass: 'RGCommentDefinition'
	instVarNames: #( content stamp)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGCommentDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(RGElementDefinition subclass: 'RGVariableDefinition'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGVariableDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(RGElementDefinition subclass: 'RGMethodDefinition'
	instVarNames: #( protocol sourceCode stamp package)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGMethodDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(RGGlobalDefinition subclass: 'RGBehaviorDefinition'
	instVarNames: #( superclass methods protocols)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGBehaviorDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(RGGlobalDefinition subclass: 'RGGlobalVariableDefinition'
	instVarNames: #( value)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGGlobalVariableDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(DelayMicrosecondScheduler subclass: 'DelayExperimentalCourageousScheduler'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DelayExperimentalCourageousScheduler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(DelayMicrosecondScheduler subclass: 'DelayExperimentalSemaphoreScheduler'
	instVarNames: #( scheduledDelayIsNil finishedDelayIsNil)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DelayExperimentalSemaphoreScheduler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(DelayMicrosecondScheduler subclass: 'DelayExperimentalSpinScheduler'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DelayExperimentalSpinScheduler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(DelayMicrosecondScheduler subclass: 'DelaySpinScheduler'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DelaySpinScheduler ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(BehaviorOwnedChunk subclass: 'ClassCommentChunk'
	instVarNames: #( stamp)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassCommentChunk ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'CodeImport'.
%
errorCount
run
(BehaviorOwnedChunk subclass: 'ClassOrganizationChunk'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassOrganizationChunk ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'CodeImport'.
%
errorCount
run
(BehaviorOwnedChunk subclass: 'MethodChunk'
	instVarNames: #( categoryName stamp)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MethodChunk ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'CodeImport'.
%
errorCount
run
(OpalBytecodeEncoder subclass: 'OpalEncoderForSistaV1'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OpalEncoderForSistaV1 ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Encoders'.
%
errorCount
run
(OpalBytecodeEncoder subclass: 'OpalEncoderForV3'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OpalEncoderForV3 ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Encoders'.
%
errorCount
run
(ZnEncodedReadStream subclass: 'ZnCharacterReadStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnCharacterReadStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(ZnEncodedReadStream subclass: 'ZnCodePointReadStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnCodePointReadStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(ZnEncodedWriteStream subclass: 'ZnCharacterWriteStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnCharacterWriteStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(ZnEncodedWriteStream subclass: 'ZnCodePointWriteStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnCodePointWriteStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(ScaledDecimal classVarNames includes: each) ifFalse: [
		ScaledDecimal addClassVarName: each]].
%
errorCount
run
| names |
names := #( minVal maxVal).
names do: [:each | 
	(SmallInteger classVarNames includes: each) ifFalse: [
		SmallInteger addClassVarName: each]].
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(LargeInteger classVarNames includes: each) ifFalse: [
		LargeInteger addClassVarName: each]].
%
errorCount
run
(NoSubclasses subclass: 'SmallFloat64'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SmallFloat64 ifAbsent: [nil])
	description: '7'
	options: #()
) category: 'Kernel-Numbers'.
%
errorCount
run
(NoSubclasses subclass: 'BoxedFloat64'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #BoxedFloat64 ifAbsent: [nil])
	description: '10'
	options: #()
) category: 'Kernel-Numbers'.
%
errorCount
run
(Association subclass: 'LiteralVariable'
	instVarNames: #()
	classVars: #( Properties)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LiteralVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Variables'.
%
errorCount
run
(Association subclass: 'Ephemeron'
	instVarNames: #( container)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Ephemeron ifAbsent: [nil])
	description: '5'
	options: #()
) category: 'System-Finalization'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(Array classVarNames includes: each) ifFalse: [
		Array addClassVarName: each]].
%
errorCount
run
(ArrayedCollection subclass: 'Bitmap'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Bitmap ifAbsent: [nil])
	description: '10'
	options: #()
) category: 'Graphics-Primitives'.
%
errorCount
run
(ArrayedCollection subclass: 'Text'
	instVarNames: #( string runs)
	classVars: #()
	classInstVars: #()
	poolDictionaries: { TextConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Text ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(ByteArray classVarNames includes: each) ifFalse: [
		ByteArray addClassVarName: each]].
%
errorCount
run
(ArrayedCollection subclass: 'ColorArray'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ColorArray ifAbsent: [nil])
	description: '10'
	options: #()
) category: 'Graphics-Display Objects'.
%
errorCount
run
| names |
names := #( AsciiOrder CSLineEnders CSNonSeparators CSSeparators CaseInsensitiveOrder CaseSensitiveOrder CrLfExchangeTable LowercasingTable Tokenish TypeTable UppercasingTable).
names do: [:each | 
	(String classVarNames includes: each) ifFalse: [
		String addClassVarName: each]].
%
errorCount
run
(ArrayedCollection indexableSubclass: 'SparseLargeTable'
	instVarNames: #( base size chunkSize defaultValue)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SparseLargeTable ifAbsent: [nil])
	description: '3'
	options: #()
) category: 'Collections-Sequenceable'.
%
errorCount
run
(ArrayedCollection subclass: 'FloatArray'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FloatArray ifAbsent: [nil])
	description: '10'
	options: #()
) category: 'Collections-Native'.
%
errorCount
run
(ArrayedCollection subclass: 'IntegerArray'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IntegerArray ifAbsent: [nil])
	description: '10'
	options: #()
) category: 'Collections-Native'.
%
errorCount
run
(ArrayedCollection subclass: 'WordArray'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WordArray ifAbsent: [nil])
	description: '10'
	options: #()
) category: 'Collections-Native'.
%
errorCount
run
(LinkedList subclass: 'Semaphore'
	instVarNames: #( excessSignals)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Semaphore ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Processes'.
%
errorCount
run
(LinkedList subclass: 'Stack'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Stack ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Stack'.
%
errorCount
run
(OrderedCollection subclass: 'SortedCollection'
	instVarNames: #( sortBlock)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SortedCollection ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Sequenceable'.
%
errorCount
run
(OrderedCollection subclass: 'ObjectFinalizerCollection'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ObjectFinalizerCollection ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Finalization'.
%
errorCount
run
(OrderedCollection subclass: 'WeakOrderedCollection'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakOrderedCollection ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Weak'.
%
errorCount
run
(OrderedCollection subclass: 'OCLiteralList'
	instVarNames: #( equalitySet)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCLiteralList ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Extras'.
%
errorCount
run
(Set subclass: 'IdentitySet'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IdentitySet ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Unordered'.
%
errorCount
run
(Set subclass: 'PluggableSet'
	instVarNames: #( hashBlock equalBlock)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PluggableSet ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Unordered'.
%
errorCount
run
(Set subclass: 'WeakSet'
	instVarNames: #( flag)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakSet ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Weak'.
%
errorCount
run
(Set subclass: 'AnnouncementSet'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AnnouncementSet ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Announcements-Core'.
%
errorCount
run
(Set subclass: 'OCKeyedSet'
	instVarNames: #( keyBlock)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCKeyedSet ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Extras'.
%
errorCount
run
(Set subclass: 'OCLiteralSet'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCLiteralSet ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Extras'.
%
errorCount
run
(Dictionary subclass: 'IdentityDictionary'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IdentityDictionary ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Unordered'.
%
errorCount
run
(Dictionary subclass: 'WeakValueDictionary'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakValueDictionary ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Weak'.
%
errorCount
run
(Dictionary subclass: 'PluggableDictionary'
	instVarNames: #( hashBlock equalBlock)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PluggableDictionary ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Unordered'.
%
errorCount
run
(Dictionary indexableSubclass: 'MethodDictionary'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MethodDictionary ifAbsent: [nil])
	description: '3'
	options: #()
) category: 'Kernel-Methods'.
%
errorCount
run
(Dictionary subclass: 'KeyedTree'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #KeyedTree ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Unordered'.
%
errorCount
run
(Dictionary subclass: 'WeakKeyDictionary'
	instVarNames: #( expired finalizer)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakKeyDictionary ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Weak'.
%
errorCount
run
(Dictionary subclass: 'ZnMultiValueDictionary'
	instVarNames: #( limit)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnMultiValueDictionary ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Resource-Meta-Core'.
%
errorCount
run
(TextDoIt subclass: 'TextPrintIt'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextPrintIt ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(TextLink subclass: 'TextClassLink'
	instVarNames: #( className)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextClassLink ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(TextLink subclass: 'TextVariableLink'
	instVarNames: #( variableName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextVariableLink ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(TextLink subclass: 'TextMethodLink'
	instVarNames: #( selector browseSenders sourceNode)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextMethodLink ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(ReadStream subclass: 'InflateStream'
	instVarNames: #( state bitBuf bitPos source sourcePos sourceLimit litTable distTable sourceStream crc)
	classVars: #( BlockProceedBit BlockTypes FixedDistCodes FixedLitCodes MaxBits StateNewBlock StateNoMoreData)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InflateStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Streams'.
%
errorCount
run
(WriteStream subclass: 'LimitedWriteStream'
	instVarNames: #( limit limitBlock)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LimitedWriteStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Streams'.
%
errorCount
run
(WriteStream subclass: 'ReadWriteStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ReadWriteStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Streams'.
%
errorCount
run
(WriteStream subclass: 'TextStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TextStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Text-Core'.
%
errorCount
run
(WriteStream subclass: 'DeflateStream'
	instVarNames: #( hashHead hashTail hashValue blockPosition blockStart)
	classVars: #()
	classInstVars: #()
	poolDictionaries: { ZipConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DeflateStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Streams'.
%
errorCount
run
(WriteStream subclass: 'ZipEncoder'
	instVarNames: #( bitBuffer bitPosition encodedStream)
	classVars: #()
	classInstVars: #()
	poolDictionaries: { ZipConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZipEncoder ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Streams'.
%
errorCount
run
(Form subclass: 'Cursor'
	instVarNames: #()
	classVars: #( BlankCursor BottomLeftCursor BottomRightCursor CornerCursor CrossHairCursor CurrentCursor DownCursor MarkerCursor MenuCursor MoveCursor NormalCursor OriginCursor OverEditableText ReadCursor ResizeLeftCursor ResizeTopCursor ResizeTopLeftCursor ResizeTopRightCursor RightArrowCursor SquareCursor TargetCursor TopLeftCursor TopRightCursor UpCursor WaitCursor WebLinkCursor WriteCursor XeqCursor)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Cursor ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Graphics-Display Objects'.
%
errorCount
run
(Form subclass: 'ColorForm'
	instVarNames: #( colors cachedDepth cachedColormap)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ColorForm ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Graphics-Display Objects'.
%
errorCount
run
(Form subclass: 'DisplayScreen'
	instVarNames: #( clippingBox extraRegions)
	classVars: #( DeferringUpdates DisplayChangeSignature LastScreenModeSelected ScreenSave)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DisplayScreen ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Graphics-Display Objects'.
%
errorCount
run
(ZipFileMember subclass: 'ZipDirectoryMember'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZipDirectoryMember ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Archives'.
%
errorCount
run
(MCMczReader subclass: 'MCMcdReader'
	instVarNames: #( baseInfo patch)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMcdReader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Storing'.
%
errorCount
run
(MCMczReader subclass: 'MCFileTreeAbstractReader'
	instVarNames: #( packageDirectory packageProperties)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFileTreeAbstractReader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloFileTree-Core'.
%
errorCount
run
(MCDirectoryRepository subclass: 'MCSubDirectoryRepository'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCSubDirectoryRepository ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Repositories'.
%
errorCount
run
(MCDirectoryRepository subclass: 'MCCacheRepository'
	instVarNames: #( packageCaches seenFiles cacheEnabled)
	classVars: #()
	classInstVars: #( default)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCCacheRepository ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Repositories'.
%
errorCount
run
(MCDirectoryRepository subclass: 'MCFileTreeRepository'
	instVarNames: #( readonly repositoryProperties)
	classVars: #()
	classInstVars: #( defaultPackageExtension defaultPropertyFileExtension)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFileTreeRepository ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloFileTree-Core'.
%
errorCount
run
(MCHttpRepository subclass: 'MCGemstoneRepository'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCGemstoneRepository ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloRemoteRepositories'.
%
errorCount
run
(MCHttpRepository subclass: 'MCSqueaksourceRepository'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCSqueaksourceRepository ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloRemoteRepositories'.
%
errorCount
run
(MCHttpRepository subclass: 'MCSmalltalkhubRepository'
	instVarNames: #( owner project)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCSmalltalkhubRepository ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloRemoteRepositories'.
%
errorCount
run
(MCFileTreeStSnapshotWriter subclass: 'MCFileTreeStCypressWriter'
	instVarNames: #( fileStream)
	classVars: #()
	classInstVars: #( specials)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFileTreeStCypressWriter ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloFileTree-Core'.
%
errorCount
run
(NonInteractiveUIManager subclass: 'StartupUIManager'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #StartupUIManager ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-SessionManager'.
%
errorCount
run
(ZnClientLogEvent subclass: 'ZnClientConnectionClosedEvent'
	instVarNames: #( address port)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnClientConnectionClosedEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnClientLogEvent subclass: 'ZnClientFollowingRedirectEvent'
	instVarNames: #( target)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnClientFollowingRedirectEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnClientLogEvent subclass: 'ZnClientIgnoringExceptionOnConnectionReuseEvent'
	instVarNames: #( exception)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnClientIgnoringExceptionOnConnectionReuseEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnClientLogEvent subclass: 'ZnClientRetryingEvent'
	instVarNames: #( exception)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnClientRetryingEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnClientLogEvent subclass: 'ZnClientTransactionEvent'
	instVarNames: #( request response requestDuration responseDuration)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnClientTransactionEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnClientLogEvent subclass: 'ZnConnectionEstablishedEvent'
	instVarNames: #( hostname port address duration proxy)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnConnectionEstablishedEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnClientLogEvent subclass: 'ZnRequestWrittenEvent'
	instVarNames: #( request duration)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnRequestWrittenEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnClientLogEvent subclass: 'ZnResponseReadEvent'
	instVarNames: #( response duration)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnResponseReadEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnClientLogEvent subclass: 'ZnSimplifiedClientTransactionEvent'
	instVarNames: #( method url response size duration)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnSimplifiedClientTransactionEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnServerLogEvent subclass: 'ZnConnectionAcceptedEvent'
	instVarNames: #( address)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnConnectionAcceptedEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnServerLogEvent subclass: 'ZnRequestReadEvent'
	instVarNames: #( request duration)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnRequestReadEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnServerLogEvent subclass: 'ZnRequestResponseHandledEvent'
	instVarNames: #( request response duration)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnRequestResponseHandledEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnServerLogEvent subclass: 'ZnResponseWrittenEvent'
	instVarNames: #( response duration)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnResponseWrittenEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnServerLogEvent subclass: 'ZnServerConnectionClosedEvent'
	instVarNames: #( address)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnServerConnectionClosedEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnServerLogEvent subclass: 'ZnServerErrorEvent'
	instVarNames: #( exception)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnServerErrorEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnServerLogEvent subclass: 'ZnServerGenericLogEvent'
	instVarNames: #( subject)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnServerGenericLogEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnServerLogEvent subclass: 'ZnServerSocketBoundEvent'
	instVarNames: #( address port)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnServerSocketBoundEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnServerLogEvent subclass: 'ZnServerSocketReleasedEvent'
	instVarNames: #( address port)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnServerSocketReleasedEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnServerLogEvent subclass: 'ZnServerStartedEvent'
	instVarNames: #( description)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnServerStartedEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnServerLogEvent subclass: 'ZnServerStoppedEvent'
	instVarNames: #( description)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnServerStoppedEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnServerLogEvent subclass: 'ZnServerTransactionEvent'
	instVarNames: #( request response timing)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnServerTransactionEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnServerLogEvent subclass: 'ZnSimplifiedServerTransactionEvent'
	instVarNames: #( method url response size duration)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnSimplifiedServerTransactionEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ProtocolAnnouncement subclass: 'ProtocolAdded'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ProtocolAdded ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Protocols'.
%
errorCount
run
(ProtocolAnnouncement subclass: 'ProtocolRemoved'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ProtocolRemoved ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Protocols'.
%
errorCount
run
(ProtocolAnnouncement subclass: 'ProtocolRenamed'
	instVarNames: #( newProtocolName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ProtocolRenamed ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Protocols'.
%
errorCount
run
(ClassAnnouncement subclass: 'ClassAdded'
	instVarNames: #( classAdded classCategory)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassAdded ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Classes'.
%
errorCount
run
(ClassAnnouncement subclass: 'ClassCommented'
	instVarNames: #( newStamp newComment classCommented oldComment oldStamp)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassCommented ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Classes'.
%
errorCount
run
(ClassAnnouncement subclass: 'ClassModifiedClassDefinition'
	instVarNames: #( newClassDefinition oldClassDefinition)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassModifiedClassDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Classes'.
%
errorCount
run
(ClassAnnouncement subclass: 'ClassRecategorized'
	instVarNames: #( newCategory oldCategory classRecategorized)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassRecategorized ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Classes'.
%
errorCount
run
(ClassAnnouncement subclass: 'ClassRemoved'
	instVarNames: #( categoryName classRemoved ownerPackage)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassRemoved ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Classes'.
%
errorCount
run
(ClassAnnouncement subclass: 'ClassRenamed'
	instVarNames: #( category classRenamed newName oldName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassRenamed ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Classes'.
%
errorCount
run
(ClassAnnouncement subclass: 'ClassReorganized'
	instVarNames: #( classReorganized)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassReorganized ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Classes'.
%
errorCount
run
(ClassAnnouncement subclass: 'ClassParentRenamed'
	instVarNames: #( classAffected parentOldName parentNewName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassParentRenamed ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Classes'.
%
errorCount
run
(ClassAnnouncement subclass: 'ClassModificationApplied'
	instVarNames: #( modifiedClass)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassModificationApplied ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Classes'.
%
errorCount
run
(ClassAnnouncement subclass: 'ClassRepackaged'
	instVarNames: #( classRepackaged newPackage oldPackage)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassRepackaged ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Packages'.
%
errorCount
run
(MethodAnnouncement subclass: 'MethodAdded'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MethodAdded ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Methods'.
%
errorCount
run
(MethodAnnouncement subclass: 'MethodModified'
	instVarNames: #( oldMethod oldProtocol)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MethodModified ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Methods'.
%
errorCount
run
(MethodAnnouncement subclass: 'MethodRecategorized'
	instVarNames: #( oldProtocol)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MethodRecategorized ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Methods'.
%
errorCount
run
(MethodAnnouncement subclass: 'MethodRemoved'
	instVarNames: #( protocol methodOrigin)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MethodRemoved ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Methods'.
%
errorCount
run
(MethodAnnouncement subclass: 'MethodRepackaged'
	instVarNames: #( newPackage oldPackage)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MethodRepackaged ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Packages'.
%
errorCount
run
(ClassTagAnnouncement subclass: 'ClassTagAdded'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassTagAdded ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Packages'.
%
errorCount
run
(ClassTagAnnouncement subclass: 'ClassTagRemoved'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassTagRemoved ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Packages'.
%
errorCount
run
(ClassTagAnnouncement subclass: 'ClassTagRenamed'
	instVarNames: #( newName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassTagRenamed ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Announcements-System-Packages'.
%
errorCount
run
(RPackageAnnouncement subclass: 'RPackageRenamed'
	instVarNames: #( oldName newName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RPackageRenamed ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'RPackage-Core'.
%
errorCount
run
(RPackageAnnouncement subclass: 'RPackageUnregistered'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RPackageUnregistered ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'RPackage-Core'.
%
errorCount
run
(RPackageAnnouncement subclass: 'RPackageRegistered'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RPackageRegistered ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'RPackage-Core'.
%
errorCount
run
(GoferUpdate subclass: 'GoferMerge'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferMerge ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferUpdate subclass: 'GoferRevert'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferRevert ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferChanges subclass: 'GoferLocalChanges'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferLocalChanges ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferChanges subclass: 'GoferRemoteChanges'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GoferRemoteChanges ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Gofer-Core'.
%
errorCount
run
(GoferCommit subclass: 'MetacelloGoferCommit'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloGoferCommit ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Gofer'.
%
errorCount
run
(GoferResolvedReference subclass: 'MetacelloCachingGoferResolvedReference'
	instVarNames: #( cachedVersion)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloCachingGoferResolvedReference ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Gofer'.
%
errorCount
run
(NetworkError subclass: 'ConnectionClosed'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ConnectionClosed ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
(NetworkError subclass: 'ConnectionRefused'
	instVarNames: #( host port)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ConnectionRefused ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
(NetworkError subclass: 'ConnectionTimedOut'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ConnectionTimedOut ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
(NetworkError subclass: 'NameLookupFailure'
	instVarNames: #( hostName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #NameLookupFailure ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
(NetworkError subclass: 'NoNetworkError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #NoNetworkError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
(NetworkError subclass: 'SocketPrimitiveFailed'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SocketPrimitiveFailed ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
(ProtocolClientError subclass: 'LoginFailedException'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LoginFailedException ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Protocols'.
%
errorCount
run
(ProtocolClientError subclass: 'POP3LoginError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #POP3LoginError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Protocols'.
%
errorCount
run
(ProtocolClientError subclass: 'TelnetProtocolError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TelnetProtocolError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Protocols'.
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(FloatingPointException classVarNames includes: each) ifFalse: [
		FloatingPointException addClassVarName: each]].
%
errorCount
run
| names |
names := #().
names do: [:each | 
	(ZeroDivide classVarNames includes: each) ifFalse: [
		ZeroDivide addClassVarName: each]].
%
errorCount
run
(ArithmeticError subclass: 'DomainError'
	instVarNames: #( from to)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DomainError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(ArithmeticError subclass: 'NaNException'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #NaNException ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(TraitException subclass: 'TraitCompositionException'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #TraitCompositionException ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Traits-Composition'.
%
errorCount
run
(RegexError subclass: 'RegexCompilationError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RegexCompilationError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core-Exceptions'.
%
errorCount
run
(RegexError subclass: 'RegexMatchingError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RegexMatchingError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core-Exceptions'.
%
errorCount
run
(RegexError subclass: 'RegexSyntaxError'
	instVarNames: #( position)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RegexSyntaxError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Regex-Core-Exceptions'.
%
errorCount
run
(NotFound subclass: 'KeyNotFound'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #KeyNotFound ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Unordered'.
%
errorCount
run
(NotFound subclass: 'ValueNotFound'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ValueNotFound ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Unordered'.
%
errorCount
run
(SelectorException subclass: 'PrimitiveFailed'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #PrimitiveFailed ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(SelectorException subclass: 'ShouldBeImplemented'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ShouldBeImplemented ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(SelectorException subclass: 'ShouldNotImplement'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ShouldNotImplement ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(SelectorException subclass: 'SubclassResponsibility'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SubclassResponsibility ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(SelectorException subclass: 'NotYetImplemented'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #NotYetImplemented ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(ZnParseError subclass: 'ZnLineTooLong'
	instVarNames: #( limit)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnLineTooLong ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Exceptions'.
%
errorCount
run
(ZnParseError subclass: 'ZnUnknownHttpMethod'
	instVarNames: #( method)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnUnknownHttpMethod ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Exceptions'.
%
errorCount
run
(ZnParseError subclass: 'ZnUnknownHttpStatusCode'
	instVarNames: #( code)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnUnknownHttpStatusCode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Exceptions'.
%
errorCount
run
(ZnParseError subclass: 'ZnUnknownHttpVersion'
	instVarNames: #( version)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnUnknownHttpVersion ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Exceptions'.
%
errorCount
run
(FileSystemError subclass: 'DirectoryDoesNotExist'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DirectoryDoesNotExist ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Kernel'.
%
errorCount
run
(FileSystemError subclass: 'DirectoryExists'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DirectoryExists ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Kernel'.
%
errorCount
run
(FileSystemError subclass: 'FileDoesNotExist'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileDoesNotExist ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Kernel'.
%
errorCount
run
(FileSystemError subclass: 'FileExists'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileExists ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Kernel'.
%
errorCount
run
(FileSystemError subclass: 'IllegalName'
	instVarNames: #( name)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IllegalName ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Core-Kernel'.
%
errorCount
run
(MetacelloProjectSpecLoadError subclass: 'MetacelloProjectSpecLoadConflict'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloProjectSpecLoadConflict ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Errors'.
%
errorCount
run
(MetacelloVersionDoesNotExistError subclass: 'MetacelloSymbolicVersionDoesNotExistError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloSymbolicVersionDoesNotExistError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Errors'.
%
errorCount
run
(MetacelloVersionDoesNotExistError subclass: 'MetacelloVersionDefinitionError'
	instVarNames: #( exception)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloVersionDefinitionError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Errors'.
%
errorCount
run
(ZnCharacterEncodingError subclass: 'ZnInvalidUTF8'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnInvalidUTF8 ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(OCSemanticError subclass: 'OCStoreIntoReadOnlyVariableError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCStoreIntoReadOnlyVariableError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Exception'.
%
errorCount
run
(OCSemanticError subclass: 'OCStoreIntoSpecialVariableError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCStoreIntoSpecialVariableError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Exception'.
%
errorCount
run
(MetacelloScriptingError subclass: 'MetacelloConflictingProjectError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloConflictingProjectError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(MetacelloScriptingError subclass: 'MetacelloUseUpgradeError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloUseUpgradeError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(FileException subclass: 'CannotDeleteFileException'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CannotDeleteFileException ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Files-Core'.
%
errorCount
run
(FileException subclass: 'FileDoesNotExistException'
	instVarNames: #( readOnly)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileDoesNotExistException ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Files-Core'.
%
errorCount
run
(FileException subclass: 'FileExistsException'
	instVarNames: #( fileClass)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileExistsException ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Files-Core'.
%
errorCount
run
(FileException subclass: 'FileWriteError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileWriteError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Files-Core'.
%
errorCount
run
(ClassBuilderError subclass: 'CircularHierarchyError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CircularHierarchyError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Exception'.
%
errorCount
run
(ClassBuilderError subclass: 'IncompatibleLayoutConflict'
	instVarNames: #( layout subType)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IncompatibleLayoutConflict ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Exception'.
%
errorCount
run
(ClassBuilderError subclass: 'SlotNotFound'
	instVarNames: #( name targetClass)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SlotNotFound ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Exception'.
%
errorCount
run
(CannotReturn subclass: 'BlockCannotReturn'
	instVarNames: #( home)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #BlockCannotReturn ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(CannotReturn subclass: 'ContextCannotReturn'
	instVarNames: #( target)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ContextCannotReturn ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(Warning subclass: 'Deprecation'
	instVarNames: #( context explanationString deprecationDate versionString rule)
	classVars: #( Log RaiseWarning ShowWarning)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #Deprecation ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Kernel-Exceptions'.
%
errorCount
run
(Warning subclass: 'MCMergeOrLoadWarning'
	instVarNames: #( versions)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCMergeOrLoadWarning ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Monticello-Loading'.
%
errorCount
run
(Warning subclass: 'ClassBuilderWarning'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassBuilderWarning ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Exception'.
%
errorCount
run
(MetacelloCleanNotification subclass: 'MetacelloCleanLoadAndTestsNotification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloCleanLoadAndTestsNotification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Notifications'.
%
errorCount
run
(MetacelloCleanNotification subclass: 'MetacelloCleanLoadNotification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloCleanLoadNotification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Notifications'.
%
errorCount
run
(OCSemanticWarning subclass: 'OCShadowVariableWarning'
	instVarNames: #( shadowedVar)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCShadowVariableWarning ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Exception'.
%
errorCount
run
(OCSemanticWarning subclass: 'OCUndeclaredVariableWarning'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCUndeclaredVariableWarning ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Exception'.
%
errorCount
run
(MetacelloScriptNotification subclass: 'MetacelloResolveProjectUpgrade'
	instVarNames: #( existingProjectRegistration newProjectRegistration)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloResolveProjectUpgrade ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(MetacelloScriptNotification subclass: 'MetacelloScriptEnsureProjectLoadedForDevelopment'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloScriptEnsureProjectLoadedForDevelopment ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(MetacelloScriptNotification subclass: 'MetacelloScriptProjectSpecNotification'
	instVarNames: #( projectSpec)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloScriptProjectSpecNotification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(ZnEndianSensitiveUTFEncoder subclass: 'ZnUTF16Encoder'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnUTF16Encoder ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(ZnEndianSensitiveUTFEncoder subclass: 'ZnUTF32Encoder'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnUTF32Encoder ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-Character-Encoding-Core'.
%
errorCount
run
(UnixStore subclass: 'MacStore'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MacStore ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'FileSystem-Disk'.
%
errorCount
run
(RBLiteralNode subclass: 'RBLiteralArrayNode'
	instVarNames: #( isByteArray contents)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBLiteralArrayNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBLiteralNode subclass: 'RBLiteralValueNode'
	instVarNames: #( value sourceText)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBLiteralValueNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBMessageNode subclass: 'RBPatternMessageNode'
	instVarNames: #( isList isCascadeList)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBPatternMessageNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Pattern'.
%
errorCount
run
(RBMessageNode subclass: 'RFMessageNode'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFMessageNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Compiler'.
%
errorCount
run
(RBVariableNode subclass: 'RBPatternVariableNode'
	instVarNames: #( recurseInto isList isLiteral isStatement isAnything)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBPatternVariableNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Pattern'.
%
errorCount
run
(RBVariableNode subclass: 'RBArgumentNode'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBArgumentNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBVariableNode subclass: 'RBSelfNode'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBSelfNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBVariableNode subclass: 'RBSuperNode'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBSuperNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBVariableNode subclass: 'RBTemporaryNode'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBTemporaryNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBVariableNode subclass: 'RBThisContextNode'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBThisContextNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBVariableNode subclass: 'RFStoreIntoTempNode'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFStoreIntoTempNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Compiler'.
%
errorCount
run
(RBVariableNode subclass: 'RFStorePopIntoTempNode'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFStorePopIntoTempNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Compiler'.
%
errorCount
run
(RBVariableNode subclass: 'RBGlobalNode'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBGlobalNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBVariableNode subclass: 'RBInstanceVariableNode'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBInstanceVariableNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Nodes'.
%
errorCount
run
(RBBlockNode subclass: 'RBPatternBlockNode'
	instVarNames: #( valueBlock)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBPatternBlockNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Pattern'.
%
errorCount
run
(RFASTTranslator subclass: 'RFASTTranslatorForEffect'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFASTTranslatorForEffect ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Compiler'.
%
errorCount
run
(RFASTTranslator subclass: 'RFASTTranslatorForValue'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RFASTTranslatorForValue ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Reflectivity-Compiler'.
%
errorCount
run
(RBLiteralToken subclass: 'RBMultiKeywordLiteralToken'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBMultiKeywordLiteralToken ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Tokens'.
%
errorCount
run
(RBLiteralToken subclass: 'RBNumberLiteralToken'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBNumberLiteralToken ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Tokens'.
%
errorCount
run
(ZdcOptimizedSocketStream subclass: 'ZdcSecureSocketStream'
	instVarNames: #( sslSession in out connecting)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZdcSecureSocketStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zodiac-Core'.
%
errorCount
run
(ZdcOptimizedSocketStream subclass: 'ZdcSocketStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZdcSocketStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zodiac-Core'.
%
errorCount
run
(MetacelloGenericProjectSpec subclass: 'MetacelloMCProjectSpec'
	instVarNames: #( file)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMCProjectSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Specs'.
%
errorCount
run
(MetacelloFetchingMCSpecLoader subclass: 'MetacelloNullRecordingMCSpecLoader'
	instVarNames: #( afterLoads beforeLoads evalDoits)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloNullRecordingMCSpecLoader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Loaders'.
%
errorCount
run
(MetacelloFetchingMCSpecLoader subclass: 'MetacelloEnsureFetchingMCSpecLoader'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloEnsureFetchingMCSpecLoader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Loaders'.
%
errorCount
run
(ZnMultiThreadedServer subclass: 'ZnManagingMultiThreadedServer'
	instVarNames: #( lock connections)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnManagingMultiThreadedServer ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Client-Server'.
%
errorCount
run
(IRInstVarAccess subclass: 'IRPopIntoInstVar'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPopIntoInstVar ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRInstVarAccess subclass: 'IRPushInstVar'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPushInstVar ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRInstVarAccess subclass: 'IRStoreInstVar'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRStoreInstVar ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRLiteralVariableAccess subclass: 'IRPopIntoLiteralVariable'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPopIntoLiteralVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRLiteralVariableAccess subclass: 'IRPushLiteralVariable'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPushLiteralVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRLiteralVariableAccess subclass: 'IRStoreLiteralVariable'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRStoreLiteralVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRTempAccess subclass: 'IRRemoteTempAccess'
	instVarNames: #( tempVectorName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRRemoteTempAccess ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRTempAccess subclass: 'IRPopIntoTemp'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPopIntoTemp ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRTempAccess subclass: 'IRPushTemp'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPushTemp ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRTempAccess subclass: 'IRStoreTemp'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRStoreTemp ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(OCBlockScope subclass: 'OCOptimizedBlockScope'
	instVarNames: #( isInlinedLoop)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCOptimizedBlockScope ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OCSpecialVariable subclass: 'OCSelfVariable'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCSelfVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OCSpecialVariable subclass: 'OCSuperVariable'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCSuperVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OCSpecialVariable subclass: 'OCThisContextVariable'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCThisContextVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OCTempVariable subclass: 'OCVectorTempVariable'
	instVarNames: #( vectorName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCVectorTempVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OCTempVariable subclass: 'OCCopyingTempVariable'
	instVarNames: #( originalVar)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCCopyingTempVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(OCTempVariable subclass: 'OCArgumentVariable'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OCArgumentVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Semantics'.
%
errorCount
run
(BitsLayout subclass: 'ByteLayout'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ByteLayout ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Layout'.
%
errorCount
run
(BitsLayout subclass: 'WordLayout'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WordLayout ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Layout'.
%
errorCount
run
(PointerLayout subclass: 'FixedLayout'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FixedLayout ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Layout'.
%
errorCount
run
(PointerLayout subclass: 'VariableLayout'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #VariableLayout ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Layout'.
%
errorCount
run
(PointerLayout subclass: 'WeakLayout'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakLayout ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Layout'.
%
errorCount
run
(PointerLayout subclass: 'EphemeronLayout'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #EphemeronLayout ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Layout'.
%
errorCount
run
(InstanceVariableSlot subclass: 'HiddenInstanceVariableSlot'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #HiddenInstanceVariableSlot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples'.
%
errorCount
run
(InstanceVariableSlot subclass: 'AccessorInstanceVariableSlot'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AccessorInstanceVariableSlot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples'.
%
errorCount
run
(InstanceVariableSlot subclass: 'ExampleSlotWithDefaultValue'
	instVarNames: #( default)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ExampleSlotWithDefaultValue ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples'.
%
errorCount
run
(InstanceVariableSlot subclass: 'RelationSlot'
	instVarNames: #( targetClass inverseName inverseSlot)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RelationSlot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples-Associations'.
%
errorCount
run
(InstanceVariableSlot subclass: 'BaseSlot'
	instVarNames: #( default)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #BaseSlot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples'.
%
errorCount
run
(RGContainer subclass: 'RGNamespace'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGNamespace ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Containers'.
%
errorCount
run
(RGContainer subclass: 'RGPackage'
	instVarNames: #( package)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGPackage ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Containers'.
%
errorCount
run
(RGContainer subclass: 'RGSlice'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGSlice ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Containers'.
%
errorCount
run
(RGVariableDefinition subclass: 'RGClassInstanceVariableDefinition'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGClassInstanceVariableDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(RGVariableDefinition subclass: 'RGClassVariableDefinition'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGClassVariableDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(RGVariableDefinition subclass: 'RGInstanceVariableDefinition'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGInstanceVariableDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(RGVariableDefinition subclass: 'RGPoolVariableDefinition'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGPoolVariableDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(RGBehaviorDefinition subclass: 'RGTraitDescriptionDefinition'
	instVarNames: #( users)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGTraitDescriptionDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(RGBehaviorDefinition subclass: 'RGClassDescriptionDefinition'
	instVarNames: #( instanceVariables organization)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGClassDescriptionDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(OpalEncoderForV3 subclass: 'OpalEncoderForV3PlusClosures'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #OpalEncoderForV3PlusClosures ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-Encoders'.
%
errorCount
run
(NoSubclasses subclass: 'LargeNegativeInteger'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LargeNegativeInteger ifAbsent: [nil])
	description: '16'
	options: #()
) category: 'Kernel-Numbers'.
%
errorCount
run
(NoSubclasses subclass: 'LargePositiveInteger'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #LargePositiveInteger ifAbsent: [nil])
	description: '16'
	options: #()
) category: 'Kernel-Numbers'.
%
errorCount
run
(LiteralVariable subclass: 'ClassVariable'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ClassVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Variables'.
%
errorCount
run
(LiteralVariable subclass: 'GlobalVariable'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GlobalVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Variables'.
%
errorCount
run
(LiteralVariable subclass: 'WorkspaceVariable'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WorkspaceVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Variables'.
%
errorCount
run
(LiteralVariable subclass: 'ExampleClassVariable'
	instVarNames: #( state)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ExampleClassVariable ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples'.
%
errorCount
run
(Array indexableSubclass: 'WeakArray'
	instVarNames: #()
	classVars: #( FinalizationDependents FinalizationLock FinalizationProcess FinalizationSemaphore)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakArray ifAbsent: [nil])
	description: '4'
	options: #()
) category: 'Collections-Weak'.
%
errorCount
run
(Array subclass: 'WeakActionSequence'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakActionSequence ifAbsent: [nil])
	description: '2'
	options: #()
) category: 'System-Object Events'.
%
errorCount
run
(Array subclass: 'MetacelloMethodSectionPath'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMethodSectionPath ifAbsent: [nil])
	description: '2'
	options: #()
) category: 'Metacello-Core-Constructors'.
%
errorCount
run
(ByteArray subclass: 'UUID'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #UUID ifAbsent: [nil])
	description: '16'
	options: #()
) category: 'Network-UUID'.
%
errorCount
run
(ByteArray subclass: 'SocketAddress'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SocketAddress ifAbsent: [nil])
	description: '16'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
(ByteArray subclass: 'CompiledCode'
	instVarNames: #()
	classVars: #( LargeFrame PrimaryBytecodeSetEncoderClass SecondaryBytecodeSetEncoderClass SmallFrame)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CompiledCode ifAbsent: [nil])
	description: '24'
	options: #()
) category: 'Kernel-Methods'.
%
errorCount
run
(String byteSubclass: 'ByteString'
	classVars: #( NonAsciiMap)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ByteString ifAbsent: [nil])
	description: '16'
	options: #()
) category: 'Collections-Strings'.
%
errorCount
run
(String subclass: 'WideString'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WideString ifAbsent: [nil])
	description: '10'
	options: #()
) category: 'Collections-Strings'.
%
errorCount
run
| names |
names := #( NewSymbols OneCharacterSymbols SelectorTable SymbolTable).
names do: [:each | 
	(Symbol classVarNames includes: each) ifFalse: [
		Symbol addClassVarName: each]].
%
errorCount
run
(SparseLargeTable subclass: 'SparseLargeArray'
	instVarNames: #( arrayClass)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SparseLargeArray ifAbsent: [nil])
	description: '3'
	options: #()
) category: 'Collections-Sequenceable'.
%
errorCount
run
(AnnouncementSet subclass: 'AnnouncementSetWithExclusions'
	instVarNames: #( exclusions)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #AnnouncementSetWithExclusions ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Announcements-Core'.
%
errorCount
run
(IdentityDictionary subclass: 'SystemDictionary'
	instVarNames: #( cachedClassNames cachedNonClassNames)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #SystemDictionary ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'System-Support'.
%
errorCount
run
(WeakKeyDictionary subclass: 'WeakIdentityKeyDictionary'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakIdentityKeyDictionary ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Weak'.
%
errorCount
run
(InflateStream subclass: 'FastInflateStream'
	instVarNames: #()
	classVars: #( DistanceMap FixedDistTable FixedLitTable LiteralLengthMap)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FastInflateStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Streams'.
%
errorCount
run
(ReadWriteStream subclass: 'RWBinaryOrTextStream'
	instVarNames: #( isBinary)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RWBinaryOrTextStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Streams'.
%
errorCount
run
(ReadWriteStream subclass: 'FileStream'
	instVarNames: #( rwmode)
	classVars: #( Stderr Stdin StdioFiles Stdout TheStdioHandles)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #FileStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Files-Deprecated'.
%
errorCount
run
(ReadWriteStream subclass: 'MultiByteBinaryOrTextStream'
	instVarNames: #( isBinary converter)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MultiByteBinaryOrTextStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Streams'.
%
errorCount
run
(DeflateStream subclass: 'ZipWriteStream'
	instVarNames: #( literals distances literalFreq distanceFreq litCount matchCount encoder crc crcPosition bytesWritten)
	classVars: #( VerboseLevel)
	classInstVars: #()
	poolDictionaries: { ZipConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZipWriteStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Streams'.
%
errorCount
run
(Cursor subclass: 'CursorWithMask'
	instVarNames: #( maskForm)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CursorWithMask ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Graphics-Display Objects'.
%
errorCount
run
(Cursor subclass: 'CursorWithAlpha'
	instVarNames: #( fallback)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CursorWithAlpha ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Graphics-Display Objects'.
%
errorCount
run
(MCFileTreeAbstractReader subclass: 'MCFileTreeStReader'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFileTreeStReader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloFileTree-Core'.
%
errorCount
run
(MCFileTreeAbstractReader subclass: 'MCFileTreeStSnapshotReader'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFileTreeStSnapshotReader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloFileTree-Core'.
%
errorCount
run
(ZnServerErrorEvent subclass: 'ZnServerHandlerErrorEvent'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnServerHandlerErrorEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnServerErrorEvent subclass: 'ZnServerReadErrorEvent'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnServerReadErrorEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(ZnServerErrorEvent subclass: 'ZnServerWriteErrorEvent'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZnServerWriteErrorEvent ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Zinc-HTTP-Logging'.
%
errorCount
run
(SocketPrimitiveFailed subclass: 'NoBroadcastAllowed'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #NoBroadcastAllowed ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Network-Kernel'.
%
errorCount
run
(MetacelloSymbolicVersionDoesNotExistError subclass: 'MetacelloSymbolicVersionNotDefinedError'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloSymbolicVersionNotDefinedError ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Exceptions-Errors'.
%
errorCount
run
(ClassBuilderWarning subclass: 'DuplicatedSlotName'
	instVarNames: #( newSlot oldSlot host)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #DuplicatedSlotName ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Exception'.
%
errorCount
run
(ClassBuilderWarning subclass: 'InvalidGlobalName'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InvalidGlobalName ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Exception'.
%
errorCount
run
(ClassBuilderWarning subclass: 'InvalidPackageName'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InvalidPackageName ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Exception'.
%
errorCount
run
(ClassBuilderWarning subclass: 'InvalidSlotName'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InvalidSlotName ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Exception'.
%
errorCount
run
(ClassBuilderWarning subclass: 'InvalidSuperclass'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #InvalidSuperclass ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Exception'.
%
errorCount
run
(MetacelloResolveProjectUpgrade subclass: 'MetacelloAllowConflictingProjectUpgrade'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloAllowConflictingProjectUpgrade ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(MetacelloResolveProjectUpgrade subclass: 'MetacelloAllowLockedProjectChange'
	instVarNames: #( operationString)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloAllowLockedProjectChange ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(MetacelloResolveProjectUpgrade subclass: 'MetacelloAllowProjectDowngrade'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloAllowProjectDowngrade ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(MetacelloResolveProjectUpgrade subclass: 'MetacelloAllowProjectUpgrade'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloAllowProjectUpgrade ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(MetacelloScriptProjectSpecNotification subclass: 'MetacelloLookupBaselineSpecForEnsureLoad'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloLookupBaselineSpecForEnsureLoad ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(MetacelloScriptProjectSpecNotification subclass: 'MetacelloLookupProjectSpec'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloLookupProjectSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(MetacelloScriptProjectSpecNotification subclass: 'MetacelloLookupProjectSpecForLoad'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloLookupProjectSpecForLoad ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(MetacelloScriptProjectSpecNotification subclass: 'MetacelloProjectSpecLoadedNotification'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloProjectSpecLoadedNotification ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-Core-Scripts'.
%
errorCount
run
(RBPatternBlockNode subclass: 'RBPatternWrapperBlockNode'
	instVarNames: #( wrappedNode)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RBPatternWrapperBlockNode ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Pattern'.
%
errorCount
run
(MetacelloMCProjectSpec subclass: 'MetacelloMCBaselineOfProjectSpec'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMCBaselineOfProjectSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Specs'.
%
errorCount
run
(MetacelloMCProjectSpec subclass: 'MetacelloMCConfigurationOfProjectSpec'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMCConfigurationOfProjectSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Specs'.
%
errorCount
run
(MetacelloMCProjectSpec subclass: 'MetacelloMCNamelessProjectSpec'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MetacelloMCNamelessProjectSpec ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Metacello-MC-Specs'.
%
errorCount
run
(IRRemoteTempAccess subclass: 'IRPopIntoRemoteTemp'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPopIntoRemoteTemp ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRRemoteTempAccess subclass: 'IRPushRemoteTemp'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRPushRemoteTemp ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(IRRemoteTempAccess subclass: 'IRStoreRemoteTemp'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #IRStoreRemoteTemp ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'OpalCompiler-Core-IR-Nodes'.
%
errorCount
run
(RelationSlot subclass: 'ToManyRelationSlot'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ToManyRelationSlot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples-Associations'.
%
errorCount
run
(RelationSlot subclass: 'ToOneRelationSlot'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ToOneRelationSlot ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Slot-Examples-Associations'.
%
errorCount
run
(RGTraitDescriptionDefinition subclass: 'RGMetatraitDefinition'
	instVarNames: #( baseClass)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGMetatraitDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(RGTraitDescriptionDefinition subclass: 'RGTraitDefinition'
	instVarNames: #( metaClass comment category package)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGTraitDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(RGClassDescriptionDefinition subclass: 'RGClassDefinition'
	instVarNames: #( metaClass comment classVariables category package sharedPools)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGClassDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(RGClassDescriptionDefinition subclass: 'RGMetaclassDefinition'
	instVarNames: #( baseClass)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #RGMetaclassDefinition ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Ring-Core-Kernel'.
%
errorCount
run
(CompiledCode subclass: 'CompiledMethod'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CompiledMethod ifAbsent: [nil])
	description: '24'
	options: #()
) category: 'Kernel-Methods'.
%
errorCount
run
(CompiledCode subclass: 'CompiledBlock'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #CompiledBlock ifAbsent: [nil])
	description: '24'
	options: #()
) category: 'Kernel-Methods'.
%
errorCount
run
(NoSubclasses byteSubclass: 'ByteSymbol'
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ByteSymbol ifAbsent: [nil])
	description: '16'
	options: #()
) category: 'Collections-Strings'.
%
errorCount
run
(NoSubclasses subclass: 'WideSymbol'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WideSymbol ifAbsent: [nil])
	description: '10'
	options: #()
) category: 'Collections-Strings'.
%
errorCount
run
(WeakIdentityKeyDictionary subclass: 'WeakKeyToCollectionDictionary'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #WeakKeyToCollectionDictionary ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Collections-Weak'.
%
errorCount
run
(WeakIdentityKeyDictionary subclass: 'ASTCache'
	instVarNames: #()
	classVars: #()
	classInstVars: #( default)
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ASTCache ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'AST-Core-Parser'.
%
errorCount
run
(FastInflateStream subclass: 'GZipReadStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: { GZipConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GZipReadStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Streams'.
%
errorCount
run
(FastInflateStream subclass: 'ZipReadStream'
	instVarNames: #( expectedCrc)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZipReadStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Streams'.
%
errorCount
run
(FastInflateStream subclass: 'ZLibReadStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZLibReadStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Streams'.
%
errorCount
run
(RWBinaryOrTextStream subclass: 'MCPseudoFileStream'
	instVarNames: #( localName)
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCPseudoFileStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloConfigurations'.
%
errorCount
run
(FileStream subclass: 'StandardFileStream'
	instVarNames: #( name fileID buffer1)
	classVars: #( Registry)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #StandardFileStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Files-Deprecated'.
%
errorCount
run
(ZipWriteStream subclass: 'ZLibWriteStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #ZLibWriteStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Streams'.
%
errorCount
run
(ZipWriteStream subclass: 'GZipWriteStream'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: { GZipConstants. }
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #GZipWriteStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Compression-Streams'.
%
errorCount
run
(MCFileTreeStSnapshotReader subclass: 'MCFileTreeStCypressReader'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MCFileTreeStCypressReader ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'MonticelloFileTree-Core'.
%
errorCount
run
(StandardFileStream subclass: 'MultiByteFileStream'
	instVarNames: #( converter lineEndConvention wantsLineEndConversion)
	classVars: #( Cr CrLf Lf LineEndDefault LineEndStrings LookAheadCount)
	classInstVars: #()
	poolDictionaries: {}
	inDictionary: Smalltalk
	newVersionOf: (Smalltalk at: #MultiByteFileStream ifAbsent: [nil])
	description: '1'
	options: #()
) category: 'Files-Deprecated'.
%
errorCount
output pop
errorCount
