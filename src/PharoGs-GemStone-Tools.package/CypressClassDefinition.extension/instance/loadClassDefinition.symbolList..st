*pharogs-gemstone-tools
loadClassDefinition: aSymbolDictionaryName symbolList: aSymbolList
  "Create a new version of the defined class. If the class already exists,
	 copy the behaviors and state from the old version."

  | newClass oldClass |
  self defaultSymbolDictionaryName: aSymbolDictionaryName.
  oldClass := (aSymbolList resolveSymbol: self name) value.
  newClass := self
    createOrReviseClass: aSymbolDictionaryName
    symbolList: aSymbolList.
  (oldClass isNil or: [ newClass == oldClass ])
    ifTrue: [ ^ self ].
  self classNeedingMigration: newClass.
  self
    recompileWithSubclassesFrom: oldClass
    to: newClass
    symbolList: aSymbolList