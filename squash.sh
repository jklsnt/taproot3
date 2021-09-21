#!/bin/bash

while :
do 
    FIRST_COMMIT_HASH_TODAY="$(git log --since="23 hours ago" --pretty=format:%H | tail -n 1)"
    GIT_MERGE_AUTOEDIT=no git pull origin master
    git reset --soft ${FIRST_COMMIT_HASH_TODAY}^
    git commit -m "Taproot Autosquash for $(date +%F)"
    git push -f
    sleep $((($(date -f - +%s- <<<$'23:30 tomorrow\nnow')0)%86400))
done


