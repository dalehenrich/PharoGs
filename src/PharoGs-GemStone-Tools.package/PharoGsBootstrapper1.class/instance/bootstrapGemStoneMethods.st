bootstrapping
bootstrapGemStoneMethods
  #(#'class' #'error:' #'doesNotUnderstand:' #'isBehavior' #'isNil' #'_errorExpectedClass:' #'_validateClass:')
    do: [ :selector | | sourceString |
      sourceString := (ProtoObject compiledMethodAt: selector) sourceString.
      self
        compileForClassNamed: 'ProtoObject'
        method: sourceString
        category: 'gemstone system support'
        symbolList: GsSession currentSession symbolList
        environmentId: 0 ].
  #(#'_classOf:') do: [ :selector | | sourceString |
      sourceString := (Object class compiledMethodAt: selector) sourceString.
      self
        compileForMetaclassNamed: 'Object'
        method: sourceString
        category: 'gemstone system support'
        symbolList: GsSession currentSession symbolList
        environmentId: 0 ]