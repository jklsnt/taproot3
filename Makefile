# Source lists
MARKDOWN_SRC := $(shell find . -name "*.md" -not -path "./gen/*" -not -path "./src/.stversions/*" -not -path "./src/Template/*" -not -path '*/\.*')
RST_SRC := $(shell find . -name "*.rst" -not -path "./gen/*" -not -path "./src/.stversions/*" -not -path "./src/Template/*" -not -path '*/\.*')

# Conversion lists
MARKDOWN_CONV := $(MARKDOWN_SRC:.md=.org)
RST_CONV := $(TEX_SRC:.rst=.org)

CONV_ALL := $(MARKDOWN_CONV) $(RST_CONV)

# Raw org
ORG_SRC := $(filter-out $(CONV_ALL), $(shell find . -name "*.org" -not -path "./gen/*" -not -path "./templates/*" -not -path "./README.org" -not -path "./src/.stversions/*" -not -path "./src/Template/*" -not -path '*/\.*')) 

# Target lists
ORG_TARGET := $(ORG_SRC) $(CONV_ALL) 

# Generation lists
ORG_GEN := $(subst src/,gen/,$(ORG_TARGET)) 

# Compilation Lists
ORG_BUILD := $(subst src/,docs/,$(ORG_TARGET)) 
PDF_BUILD := $(ORG_BUILD:.org=.pdf)

OX_BUILD := $(subst docs/,ox_docs/,$(ORG_BUILD))
HTML_OX_BUILD := $(OX_BUILD:.org=.html)

# Redux Lists
PDF_REDUX := $(subst docs/,src/,$(PDF_BUILD))



# Conversion recipes
src/%.md_.gen: src/%.md
	cat "$<" | sed "s/\[\[\([^]]*\)\]\]/[[file:\1.org][\1]]/g" > "$<_.gen"
src/%.org: src/%.md_.gen
	pandoc -f markdown -t org "$<" -o "$@" --template=./templates/pandoc.org

src/%.org: src/%.rst
	pandoc -s "$<" -o "$@"



# Generation recipies
gen/%.org: src/%.org
	mkdir -p $$(dirname "$@")
	cp "$<" "$@"
	sed -i "s/\[file:\(.*\)md\]/[file:\1org]/g" "$@"
	sed -i "s/inkscape:/file:/g" "$@"
	cat ./templates/setup.org >> "$@"
	sed -i "s/%20/ /g" "$@"

gen: $(ORG_GEN)
	cp -r static/* docs/



# Transpiling recipes
docs/%.tex: gen/%.org
	./transpile_latex.el "$<"
	mkdir -p $$(dirname "$@")
	cp $$(echo "$<" | sed "s/\.org/.tex/g") "$@"
	sed -ie "s/\\href{\(.*\).svg\}{\?.*\}\?/\includesvg{\1}/g" "$@"

docs/%.html: gen/%.org
	echo "PHONY"

ox_docs/%.html: gen/%.org 
	./transpile_html.el "$<"
	mkdir -p $$(dirname "$@")
	cp $$(echo "$<" | sed "s/\.org/.html/g") "$@"

transpile: gen
	mkdir -p docs
	rsync -am --include='*.'{jpg,jpeg,png,gif,svg} --include='*/' --exclude='*' ./src/* ./docs
	rsync -am --include='*.html' --include='*/' --exclude='*' ./gen/_firn/_site/* ./docs
	find ./src/ -regex '.*\(jpg\|jpeg\|png\|gif\|svg\)' -not -path "*ltximg*" -exec cp "{}" docs \;
	mkdir -p gen/_firn
	cp -r site/* gen/_firn
	cp -r gen/_firn/static docs
	cd gen && firn build
	find . -d -name "*~" -exec rm -f {} \;
	find . -d -name "*.texe" -exec rm -f {} \;
	find . -d -name "*sync-conflict*" -exec rm -f {} \;



# Compliation recipies
docs/%.pdf: docs/%.tex
	-(cd $$(dirname "$@") && xelatex --shell-escape -interaction nonstopmode $$(basename "$<") $$(basename "$@"))

compile: transpile $(PDF_BUILD) $(HTML_OX_BUILD)



# Reduxing recipies
src/%.pdf: docs/%.pdf
	-cp "$<" "$@"

redux: $(PDF_REDUX)
	find . -d -name "_*.md" -exec rm -f {} \;
	find . -d -name "*_.gen" -exec rm -f {} \;
	find . -d -name "*~" -exec rm -f {} \;
	find . -d -name "*sync-conflict*" -exec rm -f {} \;

	find . -d -name "*~" -exec rm -f {} \;



# Aftercare
clean: 
	find . -d -name "*.latex" -exec rm -f {} \;
	find . -d -name "*.html" -exec rm -f {} \;
	find . -d -name "*.pdf" -exec rm -f {} \;
	find . -d -name "*.tex" -exec rm -f {} \;
	find . -d -name "_*.md" -exec rm -f {} \;
	find . -d -name "*_.gen" -exec rm -f {} \;
	find . -d -name "*~" -exec rm -f {} \;
	find . -d -name "*sync-conflict*" -exec rm -f {} \;
	rm -f $(CONV_ALL)
	rm -rf gen/*
	rm -rf docs/*

all: gen transpile compile redux
.DEFAULT_GOAL := compile
.PHONY: gen transpile compile clean
