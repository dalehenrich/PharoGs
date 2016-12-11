operations
loadMethodDefinition: aPatchOperation
  [ [ aPatchOperation
    loadMethodDefinition: self defaultSymbolList
    environmentId: self defaultEnvironmentId ]
    on: CompileError
    do: [ :ex | self handleCompileError: ex from: aPatchOperation ] ]
    on: Error
    do: [ :ex | self handlePatchOperation: aPatchOperation failure: ex ]