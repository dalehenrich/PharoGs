
run
System myUserProfile symbolList
	createDictionaryNamed: #'Smalltalk' at: 0;
	createDictionaryNamed: #'PharoPools' at: 0;
	yourself.
%
errorCount
commit
logout
login
input globals.gs
input pools.gs
input classes.gs
run
System myUserProfile symbolList
	createDictionaryNamed: #'PharoGS' at: 0;
	yourself.
%
commit
logout
login
run
#(
	#Array #Association #Bag #Behavior #BlockClosure #Boolean 
	#ByteArray #CannotReturn #Character #Class #Collection #CompiledMethod #Date 
	#DateAndTime #Delay #Dictionary #Duration #Error #Exception #ExceptionSet 
	#FileStream #Float #FloatingPointException #Fraction #Halt #IdentityBag #IdentityDictionary 
	#IdentitySet #Integer #Interval #LargeInteger #Locale #Magnitude #Message 
	#MessageNotUnderstood #Notification #Number #Object #OrderedCollection #PositionableStream #Pragma 
	#ProcessorScheduler #Random #ReadStream #ReadWriteStream #ScaledDecimal #Semaphore #SequenceableCollection 
	#Set #SharedQueue #SmallInteger #SortedCollection #Stream #String #Symbol 
	#Time #TimeZone #UndefinedObject #Warning #WriteStream #ZeroDivide 
) do: [:each | 
	PharoGS at: each put: (Globals at: each).
].
%
commit
input methods.gs
