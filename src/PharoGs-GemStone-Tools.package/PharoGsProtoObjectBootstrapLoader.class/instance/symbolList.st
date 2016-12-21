accessing
symbolList
  ^ symbolList ifNil: [ symbolList := SymbolList new
        addLast: self undefinedGlobals;
        addLast: self smalltalk;
        yourself ]