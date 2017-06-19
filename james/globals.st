
"
../MacOS/Pharo --headless Pharo-minimal.image globals.st
"

| fileStream dict |
fileStream := (FileStream forceNewFileNamed: 'globals.gs') text;
	nextPutAll: 'output push globals.out only'; lf;
	nextPutAll: 'errorCount'; lf;
	nextPutAll: 'run'; lf;
	nextPutAll: 'Smalltalk'; lf.
dict := Smalltalk globals reject: [ :each | each isBehavior or: [each == Smalltalk]].

dict keys asSortedCollection do: [:eachKey | 
	fileStream 
		tab; nextPutAll: 'at: #'; 
		nextPutAll: eachKey; 
		nextPutAll: ' put: nil;';
		lf.
].
fileStream 
	tab; nextPutAll: 'at: #superclass put: nil;'; lf;
	tab; nextPutAll: 'at: #thisContext put: nil;'; lf;
	tab; nextPutAll: 'at: #Color put: nil;'; lf;
	tab; nextPutAll: 'at: #ColorMap put: nil;'; lf;
	tab; nextPutAll: 'at: #ImageReadWriter put: nil;'; lf;
	tab; nextPutAll: 'at: #MailAddressParser put: nil;'; lf;
	tab; nextPutAll: 'at: #MailMessage put: nil;'; lf;
	tab; nextPutAll: 'at: #STON put: nil;'; lf;
	tab; nextPutAll: 'yourself.'; lf;
	nextPut: $%; lf;
	nextPutAll: 'errorCount'; lf;
	nextPutAll: 'output pop'; lf;
	nextPutAll: 'errorCount'; lf;
	close.

SmalltalkImage current snapshot: false andQuit: true.
