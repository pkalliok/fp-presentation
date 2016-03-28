# Mitä on funktionaalinen ohjelmointi?

> Functional programming is a style of programming that emphasizes the
> evaluation of expressions, rather than execution of commands.
-- comp.lang.functional FAQ

Ihan löperö määrittely!
[esimerkkiohjelma](ex-1.js)

> In functional code, the output value of a function depends only on the
> arguments that are input to the function.
-- Wikipedia

Muuten hyvä, paitsi että tässä sanaa "funktio" käytetään
ohjelmointimerkityksessä; matemaattisesta näkökulmasta tämä on
tautologia.  Lisäksi ehto on edelleen liian löyhä.
[esimerkkiohjelma](ex-2.js)

Hyvä määritelmä ohjelmoijille:

> Funktionaalinen ohjelmointi on ohjelmointityyli, jossa mikään
> aliohjelma (= funktio) ei **saa** vaikuttaa mihinkään muuhun kuin
> omaan lopputulokseensa (= palautusarvoonsa).

[esimerkkiohjelma](ex-3.js)

Hyvä määritelmä niille, joilla ei ole ennakkokäsityksiä ohjelmoinnista
(eikä siis mitään hajua muutenkaan, mistä puhutaan):

> Funktionaalisessa ohjelmoinnissa jokainen ohjelma on määritelmä, mitä
> tämän ohjelman haluttu lopputulos on.

[esimerkkiohjelma](ex-4.js)
