running
tearDown
  super tearDown.
  PharoGsCypressBootstrapLoader pharoSymbolList: nil.
  System commit