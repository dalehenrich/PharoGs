tests
testBasicBootstrapArray
  | obj boot |
  boot := self bootstrapper.
  obj := boot
    bootstrapBasicClassStructure;
    bootstrapArrayClassStructure;
    bootstrapInspectorMethods;
    execute: 'Array new: 10'.
  self assert: obj class == (boot classNamed: 'Array')