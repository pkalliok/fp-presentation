# Mitä on funktionaalinen ohjelmointi?

*comp.lang.functional FAQ*: ([esimerkkiohjelma](ex-1.js))
> Functional programming is a style of programming that emphasizes the
> evaluation of expressions, rather than execution of commands.

Ihan löperö määrittely!

*Wikipedia*: ([esimerkkiohjelma](ex-2.js))
> In functional code, the output value of a function depends only on the
> arguments that are input to the function.

Muuten hyvä, paitsi että tässä sanaa "funktio" käytetään
ohjelmointimerkityksessä; matemaattisesta näkökulmasta tämä on
tautologia.  Lisäksi ehto on edelleen liian löyhä.

Hyvä määritelmä ohjelmoijille: ([esimerkkiohjelma](ex-3.js))
> Funktionaalinen ohjelmointi on ohjelmointityyli, jossa mikään
> aliohjelma (= funktio) ei **saa** vaikuttaa mihinkään muuhun kuin
> omaan lopputulokseensa (= palautusarvoonsa).

Hyvä määritelmä niille, joilla ei ole ennakkokäsityksiä ohjelmoinnista
(eikä siis mitään hajua muutenkaan, mistä puhutaan):
([esimerkkiohjelma](ex-4.js))
> Funktionaalisessa ohjelmoinnissa jokainen ohjelma on määritelmä sille,
> mitä tämän ohjelman haluttu lopputulos on.

## Määritelmän tuolle puolen

Ohjelmoijan kannalta funktionaalinen ohjelmointi on (valtava) joukko
asioita, jotka toimivat hyvin yhteen.  Kaiken ytimessä on
sivuvaikutuksettomuus, joka on funktionaalisuuden määritelmä.

- Funktionaaliset *tekniikat* ovat ohjelmointitapoja, joilla
  funktionaalinen ohjelmointi on mahdollisimman näppärää.
- Funktionaaliset *kieliominaisuudet* ovat tapoja toteuttaa
  funktionaalisten ohjelmien suoritus, joista ohjelmoijan ei pitäisi
  tarvita tietää, mutta jotka parantavat ohjelmien toimintaa.
- Funktionaaliset *kielet* ovat ohjelmointikieliä, joissa
  funktionaaliset tekniikat ovat helppoja käyttää ja joiden
  toteutuksissa on paljon funktionaalisia kieliominaisuuksia.
- Funktionaaliset *käsitteet* ovat sanoja, joita käytetään erilaisista
  funktionaalisissa kielissä usein esiintyvistä asioista.  Niitä on
  paljon ja ne ovat usein hienon kuuloisia, mikä saa funktionaalisen
  ohjelmoinnin vaikuttamaan hienolta (tai vaikealta).

Funktionaaliset tekniikat ovat valuneet funktionaalisista kielistä
muihin kieliin noin 50 vuotta.  Kun ohjelmoijat käyttävät niitä muissa
kielissä, puuttuvat funktionaaliset kieliominaisuudet ärsyttävät.  Tässä
voi nähdä kaksi opetusta:

1. Jos joku on oppinut funktionaalisen tekniikan, hän yleensä haluaa
   käyttää sitä mieluummin kuin vaihtoehtoisia tekniikoita.
2. Suunta on aina vain funktionaaliseen päin.

