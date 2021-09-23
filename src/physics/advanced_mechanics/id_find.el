#!emacs --script

(require 'org-id)

(setq org-id-track-globally t)
;; (setq org-id-locations  "../../")

;; (org-id-update-id-locations)
(find-file "./KBhTrajectoryOptimization.org")
(org-id-find "6C15CE08-EAD6-4BF0-AEA7-371F0869CBD9")
