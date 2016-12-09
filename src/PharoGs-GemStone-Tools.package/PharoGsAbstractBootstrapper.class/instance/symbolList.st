accessing
symbolList
  ^ symbolList ifNil: [ symbolList := SymbolList new
        addLast: self smalltalk;
        yourself ]