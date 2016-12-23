private
loadProtoObjectPackage: boot
  boot
    bootstrapFrom: {(self protoObjectPackageName)}
    repositorySpec: self repositoryUrl.
  boot
    bootstrapFrom: {(self devProtoObjectPackageName).
      (self todeProtoObjectPackageName)}
    repositorySpec: self repositoryUrl
    compilationSymbolList: System myUserProfile symbolList
    lookupSymbolList: boot symbolList
    envId: boot sessionMethodEnvironment	"dev package methods are compiled for the classes in the new symbol list using the default symbol list for compilation and compiled in env 0"