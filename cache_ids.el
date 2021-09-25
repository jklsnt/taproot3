#!/usr/bin/emacs --script

(require 'org-id)
(setq org-id-files (append (file-expand-wildcards "./**/**/**/*.org")
                            (file-expand-wildcards "./**/**/*.org")
                            (file-expand-wildcards "./**/**/**/*.org")
                            (file-expand-wildcards "./**/*.org")))
(org-id-update-id-locations) 
