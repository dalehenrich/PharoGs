private
loadProtoObjectPackage: boot
  boot
    bootstrapFrom: {(self protoObjectPackageName)}
      repositorySpec: self repositoryUrl;
    bootstrapFrom: {(self devProtoObjectPackageName)}
      repositorySpec: self repositoryUrl