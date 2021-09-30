#!/usr/bin/emacs --script

; bad!
; (add-to-list 'load-path "~/.emacs.d/elpa/")

(load-file "./resources/htmlize.el")
(load-file "./resources/org-special-block-extras.el")

(require 'org)
(require 'htmlize)
(require 'org-special-block-extras)

(setq user-full-name "Taproot")
(setq user-mail-address "services@sanity.gq")

(setq org-html-preamble t)
(setq org-html-postamble nil)
(setq org-src-fontify-natively t)
(setq org-html-htmlize-output-type 'css)

(setq org-html-preamble-format '(("en" "<div class=\"header\"><span class=\"site\"><a href=\"https://taproot3.sanity.gq\">TR3.5</a></span></div><div class=\"datarow\"><h1 class=\"title\">%t</h1> <h2 class=\"subtitle\">%s</h2> <span class=\"author\">%a</span> <span class=\"date\">%C</date></div>")))

(setq org-html-mathjax-options
  '((path "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML")
    (scale "100")
    (align "center")
    (indent "2em")
    (mathml t)))

(setq org-html-mathjax-template
              "
<script type=\"text/javascript\" src=\"%PATH\"></script>
<script type=\"text/javascript\">
<!--/*--><![CDATA[/*><!--*/
    MathJax.Hub.Config({
        jax: [\"input/TeX\", \"output/HTML-CSS\"],
        extensions: [\"tex2jax.js\",\"TeX/AMSmath.js\",\"TeX/AMSsymbols.js\",
                     \"TeX/noUndefined.js\", \"[Contrib]/siunitx/siunitx.js\", \"[Contrib]/mhchem/mhchem.js\"],
        tex2jax: {
            inlineMath: [ [\"\\\\(\",\"\\\\)\"] ],
            displayMath: [ ['$$','$$'], [\"\\\\[\",\"\\\\]\"], [\"\\\\begin{displaymath}\",\"\\\\end{displaymath}\"] ],
            skipTags: [\"script\",\"noscript\",\"style\",\"textarea\",\"pre\",\"code\"],
            ignoreClass: \"tex2jax_ignore\",
            processEscapes: false,
            processEnvironments: true,
            preview: \"TeX\"
        },
        TeX: {extensions: [\"AMSmath.js\",\"AMSsymbols.js\",  \"[Contrib]/siunitx/siunitx.js\", \"[Contrib]/mhchem/mhchem.js\"]},
        showProcessingMessages: true,
        displayAlign: \"%ALIGN\",
        displayIndent: \"%INDENT\",

        \"HTML-CSS\": {
             scale: %SCALE,
             availableFonts: [\"STIX\",\"TeX\"],
             preferredFont: \"TeX\",
             webFont: \"TeX\",
             imageFont: \"TeX\",
             showMathMenu: true,
        },
        MMLorHTML: {
             prefer: {
                 MSIE:    \"MML\",
                 Firefox: \"MML\",
                 Opera:   \"HTML\",
                 other:   \"HTML\"
             }
        }
    });
/*]]>*///-->
</script>")

(defun admonition-block (color icon title contents)
  (format
   "<div class=\"admonition admonition-plugin\" style=\"--admonition-color: %s;\">
  <div class=\"admonition-title \">
    <div class=\"admonition-title-content\">
      <div class=\"admonition-title-icon\">
        <i class=\"fas %s\"> 
      </div>
      <div class=\"admonition-title-markdown\">%s</div>
    </div>
  </div>
  <div class=\"admonition-content-holder\">
    <div class=\"admonition-content\">
      <p>%s</p>
    </div>
  </div>
</div>" color icon title contents))

  
(org-special-block-extras-defblock defn (admonition-block "255, 0, 0" "fa-info-circle" "Testeroo" "dsadjakl"))
				   
(find-file (car argv))
(org-special-block-extras-mode)
(org-html-export-to-html)


