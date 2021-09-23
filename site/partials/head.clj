(defn head
  [{:keys [build-url site-title site-author site-desc title meta]}]
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
   [:meta {:name "author" :content (-> meta :keywords :author)}]
   [:meta {:name "description" :content "A note on Taproot, a connected notes system."}]
   [:title title]
   [:link {:rel "stylesheet" :href "/static/css/firn_base.css"}]
   [:link {:rel "stylesheet" :href "/static/css/prism.css"}]
   [:link {:rel "stylesheet" :href "/static/css/global.css"}]
   [:script {:type "text/javascript" :async "async" :src "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS_HTML"}]
   [:script {:type "text/javascript" :src "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/prism.min.js"}]
   [:script {:type "text/x-mathjax-config"}
    (str "MathJax.Hub.Config({
        'displayAlign': 'center',
        'displayIndent': '0em',
        'extensions': ['tex2jax.js'],
        'tex2jax': {
        'inlineMath': [ ['$','$'], ['\\\\(','\\\\)'] ],
        'processEscapes': true
        },
        'HTML-CSS': { scale: 100,
                        linebreaks: { automatic: 'false' },
                        webFont: 'TeX'
                       },
        SVG: {scale: 100,
              linebreaks: { automatic: 'false' },
              font: 'TeX'},
        NativeMML: {scale: 100},
        TeX: { equationNumbers: {autoNumber: 'AMS'},
               MultLineWidth: '85%',
               TagSide: 'right',
               TagIndent: '.8em'
             }})")]])
