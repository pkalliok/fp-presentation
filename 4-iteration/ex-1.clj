
(def data [{:name "Panu", :dad "Mikko", :mom "Podo"}
           {:name "Henna", :dad "Matti", :mom "Heidi"}
           {:name "Riikka", :dad "?", :mom "Tuula"}
           {:name "Martta", :dad "Martti", :mom "Tiina"}
           {:name "Kaneli", :dad "Panu", :mom "Martta"}
           {:name "Peikko", :dad "Panu", :mom "Martta"}
           {:name "Utu", :dad "Panu", :mom "Martta"}
           {:name "Kaarna", :dad "Panu", :mom "Riikka"}
           {:name "Liekki", :dad "Panu", :mom "Henna"}])

(defn sibling_pairs [people]
  (for [person1 people
        person2 people
        :when (not= person1 person2)
        :when (or (= (:mom person1) (:mom person2))
                  (= (:dad person1) (:dad person2)))]
    [(:name person1) (:name person2)]))

(println (sibling_pairs data))

; Of course, you can (mis)use comprehensions for weird stuff like:

(defn duplicate_unless_already_duplicated [elems]
  (concat
    (for [[elem1 elem2] (partition 2 1 elems)
          element (if (= elem1 elem2) [] [elem1 elem1])]
      element)
    (list (last elems) (last elems))))

(println (duplicate_unless_already_duplicated [1 1 2 3 3 4 5]))

