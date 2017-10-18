| fileStream set |
fileStream := (FileStream forceNewFileNamed: 'pools.gs')
	text; yourself.
set := IdentitySet new.
ProtoObject withAllSubclasses do: [:eachClass | 
	set addAll: eachClass sharedPools.
].
fileStream 
	nextPutAll: 'output push pools.out only'; lf;
	nextPutAll: 'errorCount'; lf.
set do: [:eachSharedPool | 
	fileStream 
		nextPutAll: 'run'; lf;
		nextPutAll: '(PharoPools at: #';
		nextPutAll: eachSharedPool name;
		nextPutAll: ' ifAbsentPut: [SymbolDictionary new name: #';
		nextPutAll: eachSharedPool name;
		nextPutAll: '])'; 
		lf.
	eachSharedPool classPool keys asSortedCollection do: [:eachKey | 
		fileStream
			tab; nextPutAll: 'at: #'; 
			nextPutAll: eachKey; 
			nextPutAll: ' ifAbsentPut: [nil];'; lf.
	].
	fileStream tab; nextPutAll: 'yourself.'; lf; nextPut: $%; lf.
].
fileStream 
	nextPutAll: 'errorCount'; lf;
	nextPutAll: 'output pop'; lf;
	nextPutAll: 'errorCount'; lf;
	close.

Transcript show: 'pools count = ' , set size printString; cr.
SmalltalkImage current snapshot: false andQuit: true.
