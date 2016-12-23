become support - env0
_primitiveBecome: anObject forDict: isDictBool

"This method should only be invoked by Object/become: , or 
 from a method such that neither receiver nor anObject are on stack as self.

 Returns anObject.
 
 This primitive will signal an error if either receiver or anObject are
   a special object, 
   or a kind of one of:
     ExecBlock, Symbol, Behavior, GsNMethod,   SymbolList, 
     GsSocket, Regexp, GsCompilerIRNode, CBuffer, CByteArray, 
     CFunction, CLibrary, CPointer, CZstream 
   or is AllSymbols and session not logged in as SystemUser ,
   or participates in an index.

 If isDictBool == false will signal an error if either receiver or anObject are a
   GsMethodDictionary or  SymbolDictionary .

 If either receiver or anObject is a GsFile with isClient==true, 
  signals an error .
 If either receiver or anObject is a RubySocket being polled by the
 ProcessorScheduler, signals an error .
 If receiver or anObject is one of GsFile or RubySocket, then
 anObject must also be a GsFile or RubySocket.

 Primitive fails if one of receiver or anObject are DbTransient
 and the other is not.
"
<protected primitive: 277>
| myCls argCls |
Object _checkKindForBecome: self .
Object _checkKindForBecome: anObject .
(myCls := self class) _instancesNpDbtransient == 
 (argCls := anObject class) _instancesNpDbtransient ifFalse:[
    myCls instancesNonPersistent == argCls instancesNonPersistent ifFalse:[
      self _error: #rtErrCantBecomeGeneric args: { 
         'classes of objects differ with respect to instancesNonPersistent' }.
    ].
    myCls instancesDbTransient == argCls instancesDbTransient ifFalse:[
      self _error: #rtErrCantBecomeGeneric args: { 
         'classes of objects differ with respect to instancesDbTransient' }.
    ].
].
self _hasDependencyList ifTrue:[
  self _error: #rtErrCantBecomeGeneric args: { 'participates in an index' }.
].
anObject _hasDependencyList ifTrue:[
  anObject _error: #rtErrCantBecomeGeneric args: { 'participates in an index' }.
].
self _primitiveFailed: #_primitiveBecome:forDict:
     args: { anObject . isDictBool } .
self _uncontinuableError

