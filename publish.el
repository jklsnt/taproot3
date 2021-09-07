#!/usr/bin/env emacs --script

(require 'ox-publish)

(setq-local org-publish-project-alist
       '(("taproot-notes"
	  :base-directory "./gen"
	  :base-extension "org"
	  :publishing-directory "./build"
	  :recursive t
	  :auto-sitemap t
	  :makeindex t
	  :publishing-function org-html-publish-to-html)
	 ("taproot-static"
	  :base-directory "./gen"
	  :base-extension "css\\|js\\|png\\|jpg\\|gif\\|pdf\\|mp3\\|ogg\\|swf"
	  :publishing-directory "./build/"
	  :recursive t
	  :publishing-function org-publish-attachment)))

(org-publish-all)

