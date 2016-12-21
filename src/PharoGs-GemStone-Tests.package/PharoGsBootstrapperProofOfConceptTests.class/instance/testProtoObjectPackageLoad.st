tests
testProtoObjectPackageLoad
  | boot obj |
  boot := self bootstrapper.
  self loadProtoObjectPackage: boot.
  boot bootstrapTodeProtoObjectMethods.
  obj := boot execute: 'ProtoObject new'.
  self assert: obj class == (boot classNamed: 'ProtoObject').
  obj := boot execute: 'ProtoObject new flag: #test'.
  self assert: obj class == (boot classNamed: 'ProtoObject').
  self
    should: [ boot execute: 'ProtoObject new foo' ]
    raise: MessageNotUnderstood