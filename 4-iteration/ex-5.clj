
;; transform a list of records like [{:name "", :tags []}] so that
;; the tags for same names are combined.  e.g.
;; [{:name "foo", :tags [1, 2]}, {:name "bar", :tags [3, 4]},
;;  {:name "foo", :tags [5, 6]}] ==>
;; [{:name "foo", :tags [1, 2, 5, 6]}, {:name "bar", :tags [3, 4]}]

(defn combine-tags-by-name [recs]
  (map (fn [[name recs]] {:name name, :tags (mapcat :tags recs)})
       (group-by :name recs)))

;; idea: first group records by name, then transform the map (from names
;; to lists of records) back into a list of records

(println (combine-tags-by-name
           [{:name "foo", :tags [1, 2]},
            {:name "bar", :tags [3, 4]},
            {:name "foo", :tags [5, 6]}]))

