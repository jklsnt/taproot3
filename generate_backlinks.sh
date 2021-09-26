#!/bin/bash

BASENAME=$(basename $1)

pushd $(dirname $1) > /dev/null
    FILES=$(grep -lre "href.*$BASENAME")
    BACKLINKS=""
    for FILE in $FILES; do
        TITLE="$(cat $FILE | sed -n 's/.*<title>\(.*\)<\/title>.*/\1/ip;T;q')"
        BACKLINKS="<li><a class='backlink' href='$FILE'>$TITLE<\/a><\/li> $BACKLINKS"
    done
    sed -i "s/<div id=.table-of-backlinks.>.*<\/div>//" $BASENAME
    sed -i "s/<div id=.table-of-contents.>/<div id=\"table-of-backlinks\"><h2>Backlinks<\/h2><ul>$BACKLINKS<\/ul><\/div><div id=\"table-of-contents\">/" $BASENAME
#    sed -i "s/div/±/g" $BASENAME
    #cat $BASENAME
    #cat $BASENAME | sed -ze "s/<± id=.table-of-backlinks.>\(.*\)<\/±><± id=.table-of-contents.>\([^±]*\)/<± id=\"linktables\"><± id=\"table-of-contents\">\2<\/±><± id=\"table-of-backlinks\">\1<\/±><\/±>/"
    #sed -i "s/±/div/g" $BASENAME
    #cat $BASENAME | sed "s/<div id=.table-of-backlinks.>\(.*\)<\/div><div id=.table-of-contents.>\((.|\n)*\)<\/div>/hahahhahahaha/"
popd > /dev/null


