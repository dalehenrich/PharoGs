tests
testSmallIntegerAddition
  | boot |
  boot := self bootstrapper.
  self loadProtoObjectPackage: boot.
  boot
    bootstrapTodeProtoObjectMethods;
    bootstrapBasicClassStructure;
    bootstrapSmallIntegerClassStructure;
    bootstrapSmallIntegerAddition;
    yourself.
  self assert: (boot execute: '3+4') = 7.
  self assert: (boot execute: '(3+4) pharoObject')