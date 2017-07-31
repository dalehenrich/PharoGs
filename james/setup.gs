! ifErr 1 stk
! ifErr 2 stack
! ifErr 3 abort
! ifErr 4 exit
run
| symbolList |
symbolList := (Globals at: #System) myUserProfile symbolList.
(symbolList objectNamed: #'Smalltalk') ifNil: [
	symbolList 
		createDictionaryNamed: #'Smalltalk' at: 0;
		createDictionaryNamed: #'PharoPools' at: 0;
		yourself.
].
%
errorCount
commit
logout
login
input globals.gs
input pools.gs
input classes.gs
input classVariables.tpz
input methods.gs
input compileErrors.tpz
! commit
! logout
! exit
