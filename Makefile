# Source lists
MARKDOWN_SRC := $(shell find . -name "*.md" -not -path "./gen/*")
RST_SRC := $(shell find . -name "*.rst" -not -path "./gen/*")

# Conversion lists
MARKDOWN_CONV := $(MARKDOWN_SRC:.md=.org)
RST_CONV := $(TEX_SRC:.rst=.org)

CONV_ALL := $(MARKDOWN_CONV) $(RST_CONV)

# Raw org
ORG_SRC := $(filter-out $(CONV_ALL), $(shell find . -name "*.org" -not -path "./gen/*" -not -path "./templates/*")) 

# Target lists
ORG_TARGET := $(ORG_SRC) $(CONV_ALL) 
IMG_TARGET := $(shell find . -name "*.jpg" -not -path "./gen/*"  -o -name "*.jpeg" -not -path "./gen/*" -o -name "*.png" -not -path "./gen/*" -not -path "*/ltximg/*")

# Generation lists
ORG_GEN := $(subst src/,gen/,$(ORG_TARGET)) 
IMG_GEN := $(subst src/,gen/,$(IMG_TARGET))

# Compilation Lists
ORG_BUILD := $(subst src/,build/,$(ORG_TARGET)) 
PDF_BUILD := $(ORG_BUILD:.org=.pdf)

# Redux Lists
PDF_REDUX := $(subst build/,src/,$(PDF_BUILD))



# Conversion recipes
src/%.md_.gen: src/%.md
	cat "$<" | sed "s/\[\[\(.*\)\]\]/[[file:\1.org][\1]]/g" > "$<_.gen"
src/%.org: src/%.md_.gen
	pandoc -f markdown -t org "$<" -o "$@" --template=./templates/pandoc.org

src/%.org: src/%.rst
	pandoc -s "$<" -o "$@"



# Generation recipies
gen/%.org: src/%.org
	mkdir -p $$(dirname "$@")
	cp "$<" "$@"
	echo "#+SETUPFILE: ../../templates/setup.org" >> "$@"
gen/%.png: src/%.png
	mkdir -p $$(dirname "$@")
	cp "$<" "$@"
gen/%.jpeg: src/%.jpeg
	mkdir -p $$(dirname "$@")
	cp "$<" "$@"
gen/%.jpg: src/%.jpg
	mkdir -p $$(dirname "$@")
	cp "$<" "$@"

gen: $(ORG_GEN) $(IMG_GEN)
	cp -r static/ gen/



# Transpiling recipes
transpile: gen
	./transpile.el



# Compliation recipies
build/%.pdf: build/%.tex
	-(cd $$(dirname "$@") && xelatex -interaction nonstopmode $$(basename "$<") $$(basename "$@"))

compile: transpile $(PDF_BUILD)



# Reduxing recipies
src/%.pdf: build/%.pdf
	-cp "$<" "$@"

redux: $(PDF_REDUX)



# Aftercare
clean: 
	find . -d -name "*.latex" -exec rm -f {} \;
	find . -d -name "_*.md" -exec rm -f {} \;
	find . -d -name "*_.gen" -exec rm -f {} \;
	find . -d -name "*.html" -exec rm -f {} \;
	find . -d -name "*.pdf" -exec rm -f {} \;
	find . -d -name "*.tex" -exec rm -f {} \;
	find . -d -name "*~" -exec rm -f {} \;
	find . -d -name "*sync-conflict*" -exec rm -f {} \;
	rm -f $(CONV_ALL)
	rm -rf gen/*
	rm -rf build/*

all: gen transpile compile redux
.DEFAULT_GOAL := compile
.PHONY: gen transpile compile clean
