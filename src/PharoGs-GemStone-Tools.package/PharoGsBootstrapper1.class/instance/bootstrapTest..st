bootstrapping
bootstrapTest: aBool
  self
    bootstrapBasicClassStructure;
    bootstrapArrayClassStructure;
    bootstrapInspectorMethods.
  aBool
    ifTrue: [ ^ self ].
  ^ self execute: 'ProtoObject new'