bootstrapping
bootstrapArrayClassStructure
  self
    createClassNamed: 'Collection' superclassName: 'Object';
    createClassNamed: 'SequenceableCollection' superclassName: 'Collection';
    createClassNamed: 'ArrayedCollection'
      superclassName: 'SequenceableCollection';
    createIndexableClassNamed: 'Array' superclassName: 'ArrayedCollection';
    yourself