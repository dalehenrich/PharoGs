tests
testProtoObjectDev
  "coverage for most of the methods needed to support debugging/inspecting PharoGs objects with tODE"

  | boot obj res |
  boot := self bootstrapper.
  self loadProtoObjectPackage: boot.
  obj := boot execute: 'ProtoObject new'.
  false
    ifTrue: [ "cause debugger to pop up"
      obj foo ].
  self assert: obj asString = 'aProtoObject'.
  res := obj asTDCommandResult.
  self assert: res resultObject == obj.
  self assert: obj classForEditorNodeLookup == obj class.
  self
    assert:
      (res := obj displayWith: self todeDisplayPolicy) = '[ProtoObject] aProtoObject'.
  self deny: obj isCommitted.
  self assert: (res := obj printStringTodeLimitedTo: 10) = 'aProtoO...'.
  self assert: (obj respondsTo: #'asString')