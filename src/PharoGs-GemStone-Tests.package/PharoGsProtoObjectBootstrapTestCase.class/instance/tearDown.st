running
tearDown
  super tearDown.
  self bootstrapperClass pharoSymbolList: nil.
  System commit