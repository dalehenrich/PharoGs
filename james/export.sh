#!/bin/sh
alias Pharo='/Applications/Pharo6.0.app/Contents/MacOS/Pharo'
Pharo --headless Pharo-minimal.image globals.st
Pharo --headless Pharo-minimal.image pools.st
Pharo --headless Pharo-minimal.image classes.st
Pharo --headless Pharo-minimal.image methods.st
