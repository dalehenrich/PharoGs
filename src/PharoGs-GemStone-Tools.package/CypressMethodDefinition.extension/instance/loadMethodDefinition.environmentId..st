*pharogs-gemstone-tools
loadMethodDefinition: symbolList environmentId: environmentId
  | cls actualCls |
  cls := (symbolList resolveSymbol: self className) value.
  actualCls := self classIsMeta
    ifTrue: [ cls class ]
    ifFalse: [ cls ].
  actualCls
    compileMethod: self source
    dictionaries: symbolList
    category: self category
    environmentId: environmentId