bootstrapping
bootstrapBehaviorClassStructure
  self
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
    yourself