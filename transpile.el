#!/usr/bin/emacs --script

(require 'ox-publish)

(setq user-full-name "Taproot")
(setq user-mail-address "services@sanity.gq")
(setq org-publish-use-timestamps-flag t)

(setq org-publish-project-alist
      '(("taproot-notes"
         :base-directory "./gen"
         :base-extension "org"
         :publishing-directory "./docs"
         :recursive t
         :auto-sitemap t
         :makeindex t
         :sitemap-title "Taproot Navigation"
         :html-head-extra "<link rel=\"stylesheet\" href=\"./global.css\" type=\"text/css\"/>"
         :html-html5-fancy t
         :html-postamble "<div class=\"namedate\"><p class=\"subtitle\"><span class=\"author\">%a</span><span class=\"date\">%C</span></p></div><div class=\"taprootcopyright\">(c) 2021 Houjun Liu, Huxley Marvit, Zachary Sayyah, Albert Huang, Dylan Wallace</div>"
         :html-preamble ""
         :html-link-home "https://taproot3.sanity.gq/theindex.html"
         :html-link-up "https://taproot3.sanity.gq/sitemap.html"
         :publishing-function org-html-publish-to-html)
        ("taproot-tex"
         :base-directory "./gen"
         :base-extension "org"
         :publishing-directory "./docs"
         :recursive t
         :publishing-function org-latex-publish-to-latex)
        ("taproot-static"
         :base-directory "./src"
         :base-extension "css\\|js\\|png\\|jpg\\|gif\\|mp3\\|ogg\\|swf"
         :publishing-directory "./docs"
         :recursive t
         :publishing-function org-publish-attachment)))

(org-publish-all)

