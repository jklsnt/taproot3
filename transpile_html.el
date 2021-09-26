#!/usr/bin/emacs --script

(load-file "./resources/htmlize.el")
(require 'org)
(require 'htmlize)

(setq user-full-name "Taproot")
(setq user-mail-address "services@sanity.gq")

(setq org-html-preamble t)
(setq org-html-postamble nil)
(setq org-src-fontify-natively t)
(setq org-html-htmlize-output-type 'css)

(setq org-html-preamble-format '(("en" "<div class=\"header\"><span class=\"site\">TR3.5</span></div><div class=\"datarow\"><h1 class=\"title\">%t</h1> <h2 class=\"subtitle\">%s</h2> <span class=\"author\">%a</span> <span class=\"date\">%C</date></div>")))

(find-file (car argv))
(org-html-export-to-html)


