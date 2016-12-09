bootstrapping
bootstrapExceptionClassStructure
  self
    createClassNamed: 'Exception'
      superclassName: 'Object'
      instVarNames:
        #(#'messageText' #'tag' #'signaler' #'signalContext' #'handlerContext' #'outerContext');
    createClassNamed: 'Error' superclassName: 'Exception';
    yourself