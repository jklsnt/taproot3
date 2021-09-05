# Source lists
ORG_SRC := $(shell find . -name "*.org" -not -path "./gen/*")
MARKDOWN_SRC := $(shell find . -name "*.md" -not -path "./gen/*")
RST_SRC := $(shell find . -name "*.rst" -not -path "./gen/*")

# Conversion lists
MARKDOWN_CONV := $(MARKDOWN_SRC:.md=.org)
RST_CONV := $(TEX_SRC:.rst=.org)

CONV_ALL := $(MARKDOWN_CONV) $(RST_CONV)

# Target lists
ORG_GEN := $(ORG_SRC) $(CONV_ALL) 
IMG_GEN := $(wildcard *.jpeg) $(wildcard *.png)

# Conversion recipes
%.org: %.md
	pandoc -s "$<" -o "$@"

%.org: %.rst
	pandoc -s "$<" -o "$@"

# Generation recipe
gen: $(ORG_GEN)
	for FILE in $(ORG_GEN); do mkdir -p gen/$$(basename $$(dirname $$FILE)) && cp $$FILE gen/$$(basename $$(dirname $$FILE))/$$(basename $$FILE); done

clean: 
	find . -d -name "*.latex" -exec rm -f {} \;
	find . -d -name "_*.md" -exec rm -f {} \;
	find . -d -name "*.html" -exec rm -f {} \;
	find . -d -name "*.pdf" -exec rm -f {} \;
	find . -d -name "*.tex" -exec rm -f {} \;
	find . -d -name "*sync-conflict*" -exec rm -f {} \;
	rm -f $(CONV_ALL)
	rm -rf gen/*

.PHONY: gen clean
