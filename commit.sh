#!/bin/bash 

while :
do 
    # Make it!
    make all
    # Add it! 
    git add src
    git add docs
    git add templates
    git add static
    # Ship it!
    GIT_MERGE_AUTOEDIT=no git pull origin master
    git commit -a -m "taproot3 autocommit $(date "+%Y-%m-%d %H:%M:%S")"
    git push
done

