bootstrapping
bootstrapBasicClassStructure
  self
    createClassNamed: 'ProtoObject' superclassName: 'nil';
    createClassNamed: 'Object'
      superclassName: 'ProtoObject'
      instVarNames: #()
      classVars: #(#'DependentsFields');
    yourself