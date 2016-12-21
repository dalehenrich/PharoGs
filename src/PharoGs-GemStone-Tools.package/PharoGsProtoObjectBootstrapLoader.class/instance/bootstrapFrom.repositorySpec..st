bootstrap package loading
bootstrapFrom: packageNames repositorySpec: repositorySpec
  ^ self
    bootstrapFrom: packageNames
    repositorySpec: repositorySpec
    symbolList: self symbolList
    envId: self methodEnvironment