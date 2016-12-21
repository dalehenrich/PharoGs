bootstrap package loading
bootstrapFrom: packageNames repositorySpec: repositorySpec symbolList: aSymbolList envId: envId
  | repo |
  repo := CypressAbstractRepository onUrl: repositorySpec asUrl alias: ''.
  self packageManager
    defaultSymbolDictionaryName: self smalltalk name;
    defaultSymbolList: aSymbolList;
    defaultEnvironmentId: envId.
  packageNames do: [ :packageName | self packageManager
        addResolvedReference:
          (CypressResolvedReference name: packageName repository: repo) ].
  self packageManager loadResolvedReferences