accessing
allClasses
  ^ self defaultSymbolList allSatisfying: [ :each | each isBehavior ]