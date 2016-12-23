tests
testProtoObjectPackageLoad
  "just load package without errors"

  | boot |
  boot := self bootstrapper.
  self loadProtoObjectPackage: boot.
  System commit