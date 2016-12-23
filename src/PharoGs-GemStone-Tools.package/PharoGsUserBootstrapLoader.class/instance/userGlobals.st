accessing
userGlobals
  ^ userGlobals ifNil: [ userGlobals := SymbolDictionary new
        name: #'UserGlobals';
        yourself ]