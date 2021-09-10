#!/usr/bin/env emacs --script

(require 'ox-publish)

(setq user-full-name "Taproot")

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
	  :html-postamble "<div class=\"namedate\"><p class=\"subtitle\"><span class=\"author\">%a</span><span class=\"date\">%C</span></p></div><div class=\"taprootcopyright\">(c) 2021 Houjun Liu, Huxley Marvit, Zachary Sayyah, Albert Huang, Dylan Wallace</div>"
	  :html-preamble ""
	  :html-link-home "https://taproot3.sanity.gq/"
	  :html-link-up "https://taproot3.sanity.gq/sitemap.html"
	  :publishing-function org-html-publish-to-html)
	 ("taproot-tex"
	  :base-directory "./gen"
	  :base-extension "org"
	  :publishing-directory "./build"
	  :recursive t
	  :publishing-function org-latex-publish-to-latex)
	 ("taproot-static"
	  :base-directory "./gen"
	  :base-extension "css\\|js\\|png\\|jpg\\|gif\\|pdf\\|mp3\\|ogg\\|swf"
	  :publishing-directory "./build/"
	  :recursive t
	  :publishing-function org-publish-attachment)))

(org-publish-all)

