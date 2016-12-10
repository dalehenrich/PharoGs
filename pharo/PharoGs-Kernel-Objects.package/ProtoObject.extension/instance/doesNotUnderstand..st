*pharogs-kernel-objects
doesNotUnderstand: aMessage
doesNotUnderstand: aMessageDescriptor
  "The method is for compatiblity with Gs64 v2.x, and assumes you are using 
   only method environment 0  for all of your Smalltalk code."

  | ex sel args |
  (ex := MessageNotUnderstood _basicNew)
    receiver: self
    selector: (sel := aMessageDescriptor at: 1)
    args: (args := aMessageDescriptor at: 2)
    envId: 0.
  ^ ex signal
