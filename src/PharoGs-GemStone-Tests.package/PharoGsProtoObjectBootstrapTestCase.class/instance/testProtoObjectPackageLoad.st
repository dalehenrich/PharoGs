tests
testProtoObjectPackageLoad
  "just load package without errors"

  | boot |
  boot := self bootstrapper.
  self loadProtoObjectPackage: boot.
  self halt