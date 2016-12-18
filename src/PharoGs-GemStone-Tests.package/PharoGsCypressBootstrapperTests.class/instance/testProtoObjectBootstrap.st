tests
testProtoObjectBootstrap
  | boot obj |
  boot := self bootstrapper.
  boot
    bootstrapFrom: 'PharoGs-Basic-Kernel-Objects'
    repositorySpec:
      'cypressfiletree:/export/foos1/users/dhenrich/dev/_home/shared/repos/pharo6.0/PharoGs/pharo/'.
  boot bootstrapTodeProtoObjectMethods.
  obj := boot execute: 'ProtoObject new'.
  self assert: obj class == (boot execute: 'ProtoObject')