#!/bin/bash 

while :
do 
    # Make it!
    make -j12 all

    # Add it! 
    git add src
    git add docs
    git add templates
    git add static
    git add site
    git add .



    # Ship it!
    git commit -a -m "taproot3 autocommit $(date "+%Y-%m-%d %H:%M:%S")"
    GIT_MERGE_AUTOEDIT=no git pull origin master

    git push
done

