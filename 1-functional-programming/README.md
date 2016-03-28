# Mitä on funktionaalinen ohjelmointi?

*comp.lang.functional FAQ*:
> Functional programming is a style of programming that emphasizes the
> evaluation of expressions, rather than execution of commands.

Ihan löperö määrittely!
[esimerkkiohjelma](ex-1.js)

*Wikipedia*:
> In functional code, the output value of a function depends only on the
> arguments that are input to the function.

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

## Määritelmän tuolle puolen

Kaiken ytimessä on sivuvaikutuksettomuus.  Mutta ohjelmoijan kannalta
funktionaalinen ohjelmointi on (valtava) joukko asioita, jotka toimivat
hyvin yhteen.

- Funktionaaliset *tekniikat* ovat ohjelmointitapoja, joilla
  funktionaalinen ohjelmointi on mahdollisimman näppärää.
- Funktionaaliset *kieliominaisuudet* ovat tapoja toteuttaa
  funktionaalisten ohjelmien suoritus, joista ohjelmoijan ei pitäisi
  tarvita tietää, mutta jotka parantavat ohjelmien toimintaa.
- Funktionaaliset *kielet* ovat ohjelmointikieliä, joissa
  funktionaaliset tekniikat ovat helppoja käyttää ja joiden
  toteutuksissa on paljon funktionaalisia kieliominaisuuksia.

Funktionaaliset tekniikat ovat valuneet funktionaalisista kielistä
muihin kieliin noin 50 vuotta.  Kun ohjelmoijat käyttävät niitä muissa
kielissä, puuttuvat funktionaaliset kieliominaisuudet ärsyttävät.  Tässä
voi nähdä kaksi opetusta:

1. Jos joku on oppinut funktionaalisen tekniikan, hän yleensä haluaa
   käyttää sitä mieluummin kuin vaihtoehtoisia tekniikoita.
2. Suunta on aina vain funktionaaliseen päin.

