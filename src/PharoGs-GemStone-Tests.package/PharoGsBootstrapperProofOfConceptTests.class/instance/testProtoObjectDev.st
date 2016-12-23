tests
testProtoObjectDev
  | boot obj |
  boot := self bootstrapper.
  self loadProtoObjectPackage: boot.
  boot bootstrapTodeProtoObjectMethods.
  obj := boot execute: 'ProtoObject new'.
  false
    ifTrue: [ obj foo ]