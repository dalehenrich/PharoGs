tests
testProtoObjectBootstrap
  | boot obj |
  boot := self bootstrapper.
  self loadProtoObjectPackage: boot.
  boot bootstrapTodeProtoObjectMethods.
  obj := boot execute: 'ProtoObject new'.
  self assert: obj class == (boot execute: 'ProtoObject')