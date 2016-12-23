private
getNewPharoGsUser
  | newPharoGsUser newSymbolList |
  newPharoGsUser := AllUsers userWithId: 'PharoGsUser' ifAbsent: [ nil ].
  newPharoGsUser ~~ nil
    ifTrue: [ AllUsers removeAndCleanup: newPharoGsUser.
      System commit ].
  newSymbolList := SymbolList new
    addLast: self undefinedGlobals;
    addLast: self smalltalk;
    yourself.
  newPharoGsUser := (AllUsers
    addNewUserWithId: 'PharoGsUser'
    password: 'swordfish'
    defaultObjectSecurityPolicy: nil
    privileges:
      #('CodeModification' 'UserPassword' 'OtherPassword' 'CompilePrimitives')
    inGroups: #('DataCuratorGroup'))
    symbolList: newSymbolList;
    yourself.
  System commit.
  ^ newPharoGsUser