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
    sed -i "s/div/勹/g" $BASENAME
    sed -zEi "s/<勹 id=.table-of-backlinks.>([^勹]*)<\/勹><勹 id=.table-of-contents.>\n[^勹]*[^\n]*\n<勹([^勹]*)<\/勹>/<勹 id=\"linktables\"><勹 id=\"table-of-backlinks\">\1<\/勹><勹 id=\"table-of-contents\"><h2>Table of Contents<\/h2><勹\2<\/勹><\/勹>/" $BASENAME
    sed -i "s/勹/div/g" $BASENAME
    #cat $BASENAME | sed "s/<div id=.table-of-backlinks.>\(.*\)<\/div><div id=.table-of-contents.>\((.|\n)*\)<\/div>/hahahhahahaha/"
popd > /dev/null


