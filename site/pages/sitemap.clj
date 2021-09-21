(defn sitemap
  [{:keys [render partials] :as config}]
  (let [{:keys [head]} partials]
    [:html
     (head config)
     [:body
      [:div.headerline
       [:a.wordmark {:style "border:0" :href "https://taproot3.sanity.gq/"} "TR3"]]
      [:main
       [:article.content
        [:div.preamble
         [:h1.title "Sitemap"]]
        (render :sitemap)]]]]))
