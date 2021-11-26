#!/usr/bin/emacs --script

(setq user-full-name "Taproot")
(setq user-mail-address "services@sanity.gq")

(setq org-export-with-broken-links t)

(load-file "./resources/s.el")
(load-file "./resources/dash.el")
(load-file "./resources/lf.el")
(load-file "./resources/org-special-block-extras.el")

(require 'org-special-block-extras)
(add-hook #'org-mode-hook #'org-special-block-extras-mode)

(setq org-html-head "<link rel=\"stylesheet\" href=\"https://quantumish.github.io/admonition.css\"><script src=\"https://kit.fontawesome.com/76c5ce8bda.js\" crossorigin=\"anonymous\">")
(o-defblock aside (title "") (contents "")
				   (format
				    "<div class=\"admonition\" style=\"--admonition-color: 173, 173, 173;\"><div class=\"admonition-title\"><div class=\"admonition-title-content\"><div class=\"admonition-title-icon\"><i class=\"fas fa-quote-left\" aria-hidden=\"true\"></i></div><div class=\"admonition-title-markdown\">%s</div></div></div><div class=\"admonition-content-holder\"><div class=\"admonition-content\">%s</div></div></div>" title contents))

(require 'org-id)
(org-id-locations-load)
(find-file (car argv))
(org-latex-export-to-latex)

