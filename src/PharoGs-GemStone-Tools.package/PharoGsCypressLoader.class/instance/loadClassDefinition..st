operations
loadClassDefinition: aPatchOperation
  [ aPatchOperation
    loadClassDefinition: self defaultSymbolDictionaryName
    symbolList: self defaultSymbolList ]
    on: Error
    do: [ :ex | self handlePatchOperation: aPatchOperation failure: ex ]