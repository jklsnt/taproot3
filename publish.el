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
	  :sitemap-title "Taproot Navigation"
	  :html-head-extra "<link rel=\"stylesheet\" href=\"./global.css\" type=\"text/css\"/>"
	  :html-html5-fancy t
	  :html-preamble "<div class=\"title\"><h1>%t</h1></div><p class=\"subtitle\"><span class=\"author\">%a</span><span class=\"date\">%C</span></p>"
	  :html-postamble ""
	  :html-link-home "."
	  :html-link-up "../"
	  :publishing-function org-html-publish-to-html)
	 ("taproot-pdf"
	  :base-directory "./gen"
	  :base-extension "org"
	  :publishing-directory "./build"
	  :recursive t
	  :publishing-function org-latex-publish-to-pdf)
	 ("taproot-static"
	  :base-directory "./gen"
	  :base-extension "css\\|js\\|png\\|jpg\\|gif\\|pdf\\|mp3\\|ogg\\|swf"
	  :publishing-directory "./build/"
	  :recursive t
	  :publishing-function org-publish-attachment)))

(org-publish-all)

