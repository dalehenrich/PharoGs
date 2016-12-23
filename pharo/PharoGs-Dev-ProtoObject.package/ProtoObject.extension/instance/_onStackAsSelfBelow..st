become support - env0
_onStackAsSelfBelow: startLevel

"Returns true if the receiver exists as self anywhere on the current
 GemStone Smalltalk stack above specified Activation; returns false otherwise.

 startLevel is the Activation on the stack at which to begin searching
 downwards.  1 means top of stack, which will be the Activation of
 the sender of  _onStackAsSelfBelow: .  (Since _onStackAsSelfBelow: is
 a primitive, it has no Activation).

 startLevel < 1 is interpreted as  startLevel == 1.

 See Object|become: for a typical use of this method."

<primitive: 288>
startLevel _validateClass: SmallInteger.
self _primitiveFailed: #_onStackAsSelfBelow: args: { startLevel } .
^ false

