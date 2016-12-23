tests
testProtoObjectDev
  | boot obj |
  boot := self bootstrapper.
  self loadProtoObjectPackage: boot.
  obj := boot execute: 'ProtoObject new'.
  true
    ifTrue: [ obj foo ]