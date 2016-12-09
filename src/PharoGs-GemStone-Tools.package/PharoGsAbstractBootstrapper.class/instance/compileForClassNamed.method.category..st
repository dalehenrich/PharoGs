compilation
compileForClassNamed: className method: sourceString category: categoryString
  (self symbolList objectNamed: className)
    _compileMethod: sourceString
    category: categoryString
    using: self symbolList
    environmentId: self methodEnvironment