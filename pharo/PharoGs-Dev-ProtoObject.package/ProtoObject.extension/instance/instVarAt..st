thisContext hack - env 0
instVarAt: anIndex

"If the receiver has an instance variable at anIndex, returns
 its value.  Generates an error if anIndex is not a SmallInteger or
 is out of bounds, or if the receiver has no instance variables."

<primitive: 611 >

| numInstVars |
(anIndex _isInteger) ifTrue: [
   numInstVars:= self class instSize .
   (numInstVars == 0) ifTrue:[ ^ self _error: #rtErrNoInstVars].
   ((anIndex >= 1) and:[anIndex <= numInstVars]) ifFalse:[ 
        ^ self _errorIndexOutOfRange: anIndex "out of bounds"
   ]
] ifFalse: [ 
  ^ self _errorNonIntegerIndex: anIndex 
].
self _primitiveFailed: #instVarAt: args: { anIndex } .
self _uncontinuableError

