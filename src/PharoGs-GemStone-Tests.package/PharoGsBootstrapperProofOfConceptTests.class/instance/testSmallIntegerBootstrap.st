tests
testSmallIntegerBootstrap
  | boot |
  boot := self bootstrapper.
  self loadProtoObjectPackage: boot.
  boot
    bootstrapTodeProtoObjectMethods;
    bootstrapBasicClassStructure;
    bootstrapSmallIntegerClassStructure;
    yourself