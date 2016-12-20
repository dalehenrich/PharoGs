tests
testSimplePackageLoad
  | boot |
  boot := self bootstrapper.
  self loadProtoObjectPackage: boot