become support - env0
become: anObject

"Swaps the identities of the receiver and the argument.

 Intended only for experienced GemStone Smalltalk programmers who need to
 migrate instances of one class to another.

 The sender is responsible for checking the consistency of the class histories
 of the argument and the receiver.  This method makes no such checks.

 The argument, the receiver, or both are permitted to be invariant.

 Neither the argument nor the receiver may be special objects (instances of
 classes such as SmallInteger, Character, or Boolean).  Also, neither may be
 instances of a class that is a kind of 
   Behavior, BlockClosure, CByteArray, CFunction, CLibrary, CPointer,
   GsCompilerIRNode, GsFile, GsNMethod,, GsProcess, GsSocket, Regexp,
   VariableContext
 Neither the argument nor the receiver may be a kind of Bag that has indexes
 built on it.  If either the receiver or the argument (or both) participate in
 an index, then either both must be in byte format or neither must be in byte
 format.  That is, one cannot be in byte format if the other is not also.  To
 avoid the error conditions triggered by presence of indexes, remove the
 indexes from the relevant NSCs prior to invoking this method.

 Neither the argument nor the receiver may exist as self below the sender of a
 become: message on the active GemStone Smalltalk stack.

 Once the identities have been swapped, the argument and receiver may no longer
 satisfy the constraints of objects that reference them.  This condition can
 lead to the failure of subsequent index creation attempts.  The GemStone
 Smalltalk programmer is responsible for correcting broken constraints.

 Any clusterIds that belong to an object on disk remain with the object.
 That is, the clusterIds do not follow the identities when they are swapped.

 The ObjectSecurityPolicies of the objects do not follow the identities 
 when they are swapped.

 As of Gs64 v3.0 ,  tags are no longer swapped between the objects,
 they are treated same as instance variables. "

<primitive: 2001>  "enter protected mode"
| prot |
prot := System _protectedMode .
[
  | myCls argCls |
  self == anObject ifTrue: [ ^ self ].

  (self _onStackAsSelfBelow: 5) ifTrue:[ self _error: #rtErrCantBecomeSelfOnStack ].
  (anObject _onStackAsSelfBelow: 5) ifTrue:[ anObject _error: #rtErrCantBecomeSelfOnStack].

  (myCls := self class) _instancesNpDbtransient == 
  (argCls := anObject class) _instancesNpDbtransient ifFalse:[
    myCls instancesNonPersistent == argCls instancesNonPersistent ifFalse:[
      self _error: #rtErrCantBecomeGeneric args: { 'instancesNonPersistent' }.
    ].
    myCls instancesDbTransient == argCls instancesDbTransient ifFalse:[
      self _error: #rtErrCantBecomeGeneric args: { 'instancesDbTransient' }.
    ]
  ].

  self _primitiveBecome: anObject forDict: false .

] ensure:[
  prot _leaveProtectedMode
].

