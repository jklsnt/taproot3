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

(setq org-html-preamble-format '(("en" "<div>%t %s %a %C</div>")))

(find-file (car argv))
(org-html-export-to-html)


