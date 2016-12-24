# PharoGs

Experimental project to bootstrap [Pharo](http://pharo.org/web) source into a [GemStone](https://gemtalksystems.com/products/gs64/) db ... the basic idea is to use the same technology created for running [Ruby in GemStone](https://github.com/MagLev/maglev) for running alternate Smalltalk implementations in GemStone.

The package [PharoGs-Basic-ProtoObject package][1] contains the Pharo 6.0 source (currently as of Pharo 6.0 #60332) for the ProtoObject class. The package [PharoGs-Dev-ProtoObject package][2] contains the GemStone Smalltalk source code to implement the equivalent Pharo functionality ... a Pharo primitive implemented in GemStone Smalltalk. The package [PharoGs-Tode-ProtoObject package][3] contains the GemStone Smalltalk source code to support the use of [tODE](https://github.com/dalehenrich/tode) for inspecting PharoGs objects.

Here's an example of a *Pharo Primitive implemented in GemStone smalltalk*. This is the implementation of [`doesNotUnderstand:` method in method environment 2][4]:

```Smalltalk
doesNotUnderstand: aMessageDescriptor
  "invoke MessageNotUnderstood indirectly in env 0"

^ self @env0: doesNotUnderstand: aMessageDescriptor
```

The selector `@env0:` allows one to call a method in an alternate method environment and in this case it is calling the [`doesNotUnderstand:` method in method environment 0][5]:

```Smalltalk
doesNotUnderstand: aMessageDescriptor

"The method is for compatiblity with Gs64 v2.x, and assumes you are using 
   only method environment 0  for all of your Smalltalk code."

| ex sel args |
(ex := MessageNotUnderstood _basicNew)
  receiver: self selector: (sel := aMessageDescriptor at: 1) 
		args: (args := aMessageDescriptor at: 2) envId: 0 .
^ex signal .
```

Screen shot of tODE environment opened on ProtoObject class, browsing method environmen 0 methods:

<img style="border: 2px solid #000000;" src="https://raw.githubusercontent.com/dalehenrich/PharoGs/master/docs/images/tode_2016-12-24.png" />

ProtoObject is the only class in system (*CompileError occurred (error 1001), undefined symbol  Object* in shell window and no ProtoObject subclasses in hierarchy pane). Note inspector pane open on a ProtoObject instance.

`PharoGsUser` is a GemStone user with a symbol list that contains a symbol dictionary named *Smalltalk* and the single class ProtoObject. The Pharo methods are installed in method environment 2 (no tODE browsing capability, yet), but you can browse the [PharoGs-Basic-ProtoObject package][1] to see the method environment 2 class and instance methods. 

Here's a screen shot of a topaz session logged in as `PharoGsUser`:

<img style="border: 2px solid #000000;" src="https://raw.githubusercontent.com/dalehenrich/PharoGs/master/docs/images/topaz_2016-12-24.png" />


... and here's a screen shot of a tODE debugger open on an MNU:

<img style="border: 2px solid #000000;" src="https://raw.githubusercontent.com/dalehenrich/PharoGs/master/docs/images/tode_debugger_2016-12-24.png" />

[1]: pharo/PharoGs-Basic-ProtoObject.package/ProtoObject.class
[2]: pharo/PharoGs-Dev-ProtoObject.package/ProtoObject.extension
[3]: pharo/PharoGs-Tode-ProtoObject.package/ProtoObject.extension
[4]: pharo/PharoGs-Basic-ProtoObject.package/ProtoObject.class/instance/doesNotUnderstand..st
[5]: pharo/PharoGs-Dev-ProtoObject.package/ProtoObject.extension/instance/doesNotUnderstand..st


