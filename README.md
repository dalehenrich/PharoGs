Experimental project to bootstrap Pharo source into a GemStone db ... 

Pharo source as of Pharo 6.0 #60332

Screen shot of tODE environment opened on ProtoObject class:

<img style="border: 2px solid #000000;" src="https://raw.githubusercontent.com/dalehenrich/PharoGs/master/docs/images/tode_2016-12-24.png" />

ProtoObject is the only class in system (*CompileError occurred (error 1001), undefined symbol  Object* in shell window and no ProtoObject subclasses in hierarchy pane). Browsing `env0` methods at moment. Note inspector pane open on a ProtoObject instance.

`PharoGsUser` is a GemStone user with a symbol list that contains a symbol dictionary named *Smalltalk* and the single class ProtoObject. The Pharo methods are installed in method environment 2 (no tODE browsing capability, yet), but you can browse the [PharoGs-Basic-ProtoObject package](https://github.com/dalehenrich/PharoGs/tree/gs/pharo/PharoGs-Basic-ProtoObject.package/ProtoObject.class) to see the method environment 2 class and instance methods. 

Here's a screen shot of a topaz session logged in as `PharoGsUser`:

<img style="border: 2px solid #000000;" src="https://raw.githubusercontent.com/dalehenrich/PharoGs/master/docs/images/topaz_2016-12-24.png" />


... and here's a screen shot of a tODE debugger open on an MNU:

<img style="border: 2px solid #000000;" src="https://raw.githubusercontent.com/dalehenrich/PharoGs/master/docs/images/tode_debugger_2016-12-24.png" />



