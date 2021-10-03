#!/usr/bin/emacs --script

(setq user-full-name "Taproot")
(setq user-mail-address "services@sanity.gq")

(require 'org-id)
(org-id-locations-load)
(find-file (car argv))
(org-latex-export-to-latex)

