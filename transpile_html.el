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

(find-file (car argv))
(org-html-export-to-html)


