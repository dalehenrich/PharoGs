bootstrapping
bootstrap1
  self
    createClassNamed: 'ProtoObject' superclassName: 'nil';
    createClassNamed: 'Object'
      superclassName: 'ProtoObject'
      instVarNames: #()
      classVars: #(#'DependentsFields');
    createClassNamed: 'Magnitude' superclassName: 'Object';
    createClassNamed: 'Number' superclassName: 'Magnitude';
    createClassNamed: 'Integer' superclassName: 'Number';
    createClassNamed: 'SmallInteger' superclassName: 'Integer';
    createClassNamed: 'Exception'
      superclassName: 'Object'
      instVarNames:
        #(#'messageText' #'tag' #'signaler' #'signalContext' #'handlerContext' #'outerContext');
    createClassNamed: 'Error' superclassName: 'Exception';
    createClassNamed: 'Behavior'
      superclassName: 'Object'
      instVarNames: #(#'superclass' #'methodDict' #'format' #'layout')
      classVars: #(#'ClassProperties' #'ObsoleteSubclasses');
    createClassNamed: 'ClassDescription'
      superclassName: 'Behavior'
      instVarNames: #(#'instanceVariables' #'organization');
    createClassNamed: 'Class'
      superclassName: 'ClassDescription'
      instVarNames:
        #(#'subclasses' #'name' #'classPool' #'sharedPools' #'environment' #'category' #'traitComposition' #'localSelectors');
    createClassNamed: 'MetaClass'
      superclassName: 'ClassDescription'
      instVarNames: #(#'thisClass' #'traitComposition' #'localSelectors');
    createClassNamed: 'Collection' superclassName: 'Object';
    createClassNamed: 'SequenceableCollection' superclassName: 'Collection';
    createClassNamed: 'ArrayedCollection'
      superclassName: 'SequenceableCollection';
    createIndexableClassNamed: 'Array' superclassName: 'ArrayedCollection';
    compileForClassNamed: 'ProtoObject'
      method:
        'become: otherObject
  "Primitive. Swap the object pointers of the receiver and the argument.
	All variables in the entire system that used to point to the 
	receiver now point to the argument, and vice-versa.
	Fails if either object is a SmallInteger"

  (Array with: self) elementsExchangeIdentityWith: (Array with: otherObject)'
      category: 'updating';
    compileForClassNamed: 'ProtoObject'
      method:
        'cannotInterpret: aMessage
  "Handle the fact that there was an attempt to send the given message to the receiver but a null methodDictionary was encountered while looking up the message selector.  Hopefully this is the result of encountering a stub for a swapped out class which induces this exception on purpose."

  "If this is the result of encountering a swap-out stub, then simulating the lookup in Smalltalk should suffice to install the class properly, and the message may be resent."

  (self class lookupSelector: aMessage selector)
    ifNotNil: [ "Simulated lookup succeeded -- resend the message."
      ^ aMessage sentTo: self ].	"Could not recover by simulated lookup -- it''s an error"
  Error signal: ''MethodDictionary fault''.	"Try again in case an error handler fixed things"
  ^ aMessage sentTo: self'
      category: 'reflective operations';
    compileForClassNamed: 'Integer'
      method:
        '+ anInteger
  "Returns the sum of the receiver and anInteger."

  <primitive: 258>
  ^ self _retry: #''+'' coercing: anInteger'
      category: 'arithmetic';
    yourself