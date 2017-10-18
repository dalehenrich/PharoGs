private
repositoryUrl
  | gsHome |
  gsHome := System gemEnvironmentVariable: 'GS_HOME'.
  ^ 'cypressfiletree:' , gsHome , '/shared/repos/PharoGs/proof/'