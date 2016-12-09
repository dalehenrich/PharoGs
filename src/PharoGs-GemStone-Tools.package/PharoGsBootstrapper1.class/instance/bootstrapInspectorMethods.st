bootstrapping
bootstrapInspectorMethods
  self bootstrapGemStoneMethods.
  #(#'asString' #'asTDCommandResult' #'asTDObjectNode:topez:aspect:' #'classForEditorNodeLookup' #'displayOnPolicy:' #'displayWith:' #'editUsing:' #'isCommitted' #'isInvariant' #'printExceptionSet' #'printOn:' #'printString' #'printStringTodeLimitedTo:' #'respondsTo:')
    do: [ :selector | | sourceString |
      sourceString := (ProtoObject compiledMethodAt: selector) sourceString.
      self
        compileForClassNamed: 'ProtoObject'
        method: sourceString
        category: 'tode inspector support'
        symbolList: GsSession currentSession symbolList
        environmentId: 0 ]