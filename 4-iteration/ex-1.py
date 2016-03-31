
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

