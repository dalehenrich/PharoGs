tests
testProtoObject
  | boot protoObjectClass |
  boot := self bootstrapper.
  self loadProtoObjectPackage: boot.
  protoObjectClass := boot execute: 'ProtoObject'.
  boot execute: 'ProtoObject new'.
  self assert: (boot execute: 'ProtoObject new class') == protoObjectClass.
  self
    assert:
      (boot execute: '(ProtoObject new flag: #test) class') == protoObjectClass.
  self
    should: [ boot execute: 'ProtoObject new foo' ]
    raise: MessageNotUnderstood.
  self assert: (boot execute: '| obj | obj := ProtoObject new. obj == obj').
  self assert: (boot execute: 'ProtoObject new ~~ ProtoObject new').
  self should: [ boot execute: 'ProtoObject new error: ''help''' ] raise: Error.
  true
    ifTrue: [ "early exit until become: becomes functional"
      ^ self ].
  self assert: (boot
        execute:
          '| p1 p2 p3 | p3 := p1 := ProtoObject new. p2 := ProtoObject new. "p1 become: p2." p3 ~~ p2').
  self assert: (boot
        execute:
          '| p1 p2 p3 | p3 := p1 := ProtoObject new. p2 := ProtoObject new.  p1 become: p2.  p3 == p2')