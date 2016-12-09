tests
testBasicBootstrapProtoObject
  | obj boot |
  boot := self bootstrapper.
  obj := boot
    bootstrapBasicClassStructure;
    bootstrapInspectorMethods;
    execute: 'ProtoObject new'.
  self assert: obj class == (boot classNamed: 'ProtoObject')