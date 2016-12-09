bootstrapping
bootstrapTest: aBool
  self
    bootstrapBasicClassStructure;
    bootstrapArrayClassStructure;
    bootstrapInspectorMethods.
  aBool
    ifTrue: [ ^ self ].
  ^ self execute: 'Array new: 10'