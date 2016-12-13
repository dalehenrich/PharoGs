tests
testEnvironmentSend
  | boot obj |
  boot := self bootstrapper.
  obj := ('(Object @env0:new)'
    _compileInContext: nil
    symbolList: GsSession currentSession symbolList
    oldLitVars: nil
    environmentId: boot methodEnvironment
    flags: 0) _executeInContext: nil.
  self halt