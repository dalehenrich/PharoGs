reflective operations
basicIdentityHash
  "This method returns some Integer related to the identity of the receiver.  If
 two objects compare identically (==) to each other, the results of sending
 basicIdentityHash to each of those objects is equal."

  "Faster than identityHash.  Used in GsMethodDictionary ."

  <primitive: 321>
  self _primitiveFailed: #'basicIdentityHash'.
  self _uncontinuableError
