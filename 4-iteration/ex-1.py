
data = [dict(name="Panu", dad="Mikko", mom="Podo"),
        dict(name="Henna", dad="Matti", mom="Heidi"),
        dict(name="Riikka", dad="?", mom="Tuula"),
        dict(name="Martta", dad="Martti", mom="Tiina"),
        dict(name="Kaneli", dad="Panu", mom="Martta"),
        dict(name="Peikko", dad="Panu", mom="Martta"),
        dict(name="Utu", dad="Panu", mom="Martta"),
        dict(name="Kaarna", dad="Panu", mom="Riikka"),
        dict(name="Liekki", dad="Panu", mom="Henna")]

def sibling_pairs(people):
    return [(person1['name'], person2['name'])
            for person1 in people
            for person2 in people
            if person1 != person2
            if person1['mom'] == person2['mom']
                or person1['dad'] == person2['dad']]

print sibling_pairs(data)

# Of course, you can (mis)use comprehensions for weird stuff like:

def duplicate_unless_already_duplicated(elems):
    return [element
            for elem1, elem2 in zip(elems, elems[1:])
            for element in ([elem1, elem1] if elem1 != elem2 else [])] + \
                    [elems[-1], elems[-1]]

print duplicate_unless_already_duplicated([1, 1, 2, 3, 3, 4, 5])

