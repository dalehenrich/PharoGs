thisContext hack - env 2
instVarAt: anIndex
"If the receiver has an instance variable at anIndex, returns
 its value.  Generates an error if anIndex is not a SmallInteger or
 is out of bounds, or if the receiver has no instance variables."

^self @env0: instVarAt: anIndex
