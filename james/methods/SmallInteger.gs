category: 'arithmetic'
set compile_env: 2
method: SmallInteger
- aNumber  
	"Primitive. Subtract the argument from the receiver and answer with the 
	result if it is a SmallInteger. Fail if the argument or the result is not a 
	SmallInteger. Essential. No Lookup. See Object documentation 
	whatIsAPrimitive." 

	<primitive: 259>
	<PharoGs> 
	^super - aNumber
%
set compile_env: 0
category: 'comparing'
set compile_env: 2
method: SmallInteger
< aNumber  
	"Primitive. Compare the receiver with the argument and answer with 
	true if the receiver is less than the argument. Otherwise answer false. 
	Fail if the argument is not a SmallInteger. Essential. No Lookup. See 
	Object documentation whatIsAPrimitive." 

	<primitive: 3> 
	<PharoGs>
	^super < aNumber
%
set compile_env: 0
category: 'comparing'
set compile_env: 2
method: SmallInteger
> aNumber  
	"Primitive. Compare the receiver with the argument and answer true if 
	the receiver is greater than the argument. Otherwise answer false. Fail if 
	the argument is not a SmallInteger. Essential. No Lookup. See Object 
	documentation whatIsAPrimitive." 

	<primitive: 4>
	<PharoGs> 
"	<primitive: 4> "
	^super > aNumber
%
set compile_env: 0
