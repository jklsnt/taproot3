(defn default
  [{:keys [render partials title meta] :as config}]
  (let [{:keys [head]} partials]
    [:html
     (head config)
     [:body
      [:script {:type "text/javascript" :src "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js"}]
      [:script {:type "text/javascript" :src "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js"}]
      [:div.headerline
       [:a.wordmark {:style "border:0" :href "https://taproot3.sanity.gq/"} "TR3"]]
      [:main
       [:article.content.rss ;; `.rss` is required for targeting what content you wish your feed to contain
        [:div.preamble
         [:h1.title title]]
        [:div.metamble
         (if-let [author (-> meta :keywords :author)]
           [:span [:span "Written by "] [:span author]])]
        [:div.notebody (render :file)]]
       [:div.metapanel
        [:div.metalabel "Contents"]
        (try (render :toc) (catch Exception e (println "Brrr") "Error Generating TOC"))
        [:div.metalabel "Backlinks"]
        (try (render :backlinks) (catch Exception e (println "Brrr") "Error Generating Backlinks"))]
       ]]]))

