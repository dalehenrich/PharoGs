bootstrapping
bootstrapGemStoneProtoObjectMethods
  "These methods are needed in envionment 0 for the time being"

  #(#'error:' #'doesNotUnderstand:' #'isBehavior' #'isNil' #'_errorExpectedClass:' #'_validateClass:')
    do: [ :selector | | sourceString |
      sourceString := (ProtoObject compiledMethodAt: selector) sourceString.
      self
        compileForClassNamed: 'ProtoObject'
        method: sourceString
        category: 'gemstone system support'
        symbolList: GsSession currentSession symbolList
        environmentId: self methodEnvironment ].
  self
    compileForClassNamed: 'ProtoObject'
    method: 'class ^Object @env0: _classOf: self'
    category: 'gemstone system support'
    symbolList: GsSession currentSession symbolList
    environmentId: self methodEnvironment.
  self halt