# Source lists
MARKDOWN_SRC := $(shell find . -name "*.md" -not -path "./gen/*")
RST_SRC := $(shell find . -name "*.rst" -not -path "./gen/*")

# Conversion lists
MARKDOWN_CONV := $(MARKDOWN_SRC:.md=.org)
RST_CONV := $(TEX_SRC:.rst=.org)

CONV_ALL := $(MARKDOWN_CONV) $(RST_CONV)

# Raw org
ORG_SRC := $(filter-out $(CONV_ALL), $(shell find . -name "*.org" -not -path "./gen/*" -not -path "./*.org")) 

# Target lists
ORG_TARGET := $(ORG_SRC) $(CONV_ALL) 
IMG_TARGET := $(shell find . -name "*.jpg" -not -path "./gen/*"  -o -name "*.jpeg" -not -path "./gen/*" -o -name "*.png" -not -path "./gen/*" -not -path "*/ltximg/*")

# Generation lists
ORG_GEN := $(subst src/,gen/,$(ORG_TARGET)) 
IMG_GEN := $(subst src/,gen/,$(IMG_TARGET))

HTML_GEN := $(subst .org,.html, $(ORG_GEN))



# Conversion recipes
src/%.org: src/%.md
	cat "$<" | sed "s/\[\[\(.*\)\]\]/[[file:\1.org]]/g" > "$<_.gen"
	pandoc -s -f markdown -t org "$<_.gen" -o "$@"

src/%.org: src/%.rst
	pandoc -s "$<" -o "$@"



# Copying recipies
gen/%.org: src/%.org
	mkdir -p $$(dirname "$@")
	cp "$<" "$@"
	echo "#+SETUPFILE: ../../setup.org" >> "$@"
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



# Exporting recipies
gen/%.html: gen/%.org
	emacsclient -e "(progn (find-file \"$<\") (org-html-export-to-html) (kill-buffer))" 

export: $(HTML_GEN) $(IMAGE_GEN)



# Aftercare
clean: 
	find . -d -name "*.latex" -exec rm -f {} \;
	find . -d -name "_*.md" -exec rm -f {} \;
	find . -d -name "*_.gen" -exec rm -f {} \;
	find . -d -name "*.html" -exec rm -f {} \;
	find . -d -name "*.pdf" -exec rm -f {} \;
	find . -d -name "*.tex" -exec rm -f {} \;
	find . -d -name "*sync-conflict*" -exec rm -f {} \;
	rm -f $(CONV_ALL)
	rm -rf gen/*

all: gen export 
.DEFAULT_GOAL := export
.PHONY: gen export clean
