accessing
defaultSymbolList
  ^ defaultSymbolList
    ifNil: [ defaultSymbolList := System myUserProfile symbolList ]