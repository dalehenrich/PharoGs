accessing
packageManager
  ^ packageManager
    ifNil: [ packageManager := PharoGsCypressPackageManager3 new ]