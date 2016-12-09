bootstrapping
bootstrapSmallIntegerClassStructure
  self
    createClassNamed: 'Magnitude' superclassName: 'Object';
    createClassNamed: 'Number' superclassName: 'Magnitude';
    createClassNamed: 'Integer' superclassName: 'Number';
    createClassNamed: 'SmallInteger' superclassName: 'Integer';
    yourself