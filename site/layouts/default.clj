(defn render-filetag [title content color icon]
  [:div {:class "admonition" :style (str "--admonition-color: " color ";")}
          [:div {:class "admonition-title"}
           [:div {:class "admonition-title-content"} 
            [:div {:class "admonition-title-icon"}
             [:i {:class (str "fas " icon)}]
             ]
           [:div {:class "admonition-title-markdown"} title ]]]
          [:div {:class "admonition-content-holder"}
           [:div {:class "admonition-content"}
            content]]])

(defn default
  [{:keys [render partials title meta] :as config}]
  (let [{:keys [head]} partials]
    [:html
     (head config)
     [:body
      [:script {:type "text/javascript" :src "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js"}]
      [:script {:type "text/javascript" :src "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js"}]
      [:script {:src "https://kit.fontawesome.com/76c5ce8bda.js" :crossorigin="anonymous"}] ;; maybe questionable
      [:div.headerline
       [:a.wordmark {:style "border:0" :href "https://taproot3.sanity.gq/"} "TR3"]]
      [:main
       [:article.content.rss ;; `.rss` is required for targeting what content you wish your feed to contain
        [:div.preamble
         [:h1.title title]]
        ;[:div.metamble
         ;(if-let [author (-> meta :keywords :author)]           
           ;(if-let [course (-> meta :keywords :course)]
             ;[:span [:span "Written by "] [:span author] [:span " for "] [:span course]]
             ;[:span [:span "Written by "] [:span author]])
           ;(if-let [course (-> meta :keywords :course)]
             ;[:span [:span "Written for "] [:span course]]))
         ;(if-let [tag (-> meta :keywords :filetags)]
           ;(case tag
             ;"flow" (render-filetag "This note is a <i>flow</i> note." "This note was taken in real time as a class or reading progressed and is therefore not guaranteed to be high quality. Be prepared to parse hastily jotted bullet points!" "0, 176, 255" "fa-book")
             ;"incomplete" (render-filetag "This note is incomplete." "Not all sections of this note are fully written. Consider bothering the author about it!" "214, 53, 17" "fa-times-circle")
             ;"index" (render-filetag "This note is an index." "Jump to other things from here!" "108, 173, 96" "fa-list")
             ;"unresearched" (render-filetag "This note hasn't been created yet!" "Go bother the author about this." "150, 150, 150" "fa-ellipsis-h")
             ;"review" (render-filetag "This note is in need of review!" "This note may not be high quality for certain sections." "230, 119, 46" "fa-undo")
             ;"fledgling" (render-filetag "This note is a fledgling!" "This note needs expansion." "150, 150, 150" "fa-egg")
             ;"low_quality" (render-filetag "This note is low quality!" "This note needs revision." "150, 150, 150" "fa-unlink")
             ;nil))]
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

