#!/usr/bin/emacs --script

(require 'ox-publish)

(setq user-full-name "Taproot")
(setq user-mail-address "services@sanity.gq")

(setq org-publish-project-alist
      '(("taproot-static"
         :base-directory "./src"
         :base-extension "css\\|js\\|png\\|jpg\\|gif\\|mp3\\|ogg\\|swf"
         :publishing-directory "./docs"
         :recursive t
         :publishing-function org-publish-attachment)))

(org-publish "taproot-static")

