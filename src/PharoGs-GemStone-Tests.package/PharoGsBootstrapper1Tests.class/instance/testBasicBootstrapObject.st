tests
testBasicBootstrapObject
  | obj boot |
  boot := self bootstrapper.
  obj := boot
    bootstrapBasicClassStructure;
    bootstrapInspectorMethods;
    execute: 'Object new'.
  self assert: obj class == (boot classNamed: 'Object')