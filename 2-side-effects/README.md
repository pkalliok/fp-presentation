# Sivuvaikutuksettomuus

Sivuvaikutuksettomuus tarkoittaa siis sitä, että aliohjelma (funktio) ei
saa vaikuttaa mihinkään muuhun kuin palautusarvoonsa.

## Sivuvaikutuksettomuuden hyödyt

- uudelleenkäytettävyys ([esimerkkiohjelma](ex-1.js))
- laajennettavuus ([esimerkkiohjelma](ex-2.js))
- virheettömyys ([esimerkkiohjelma](ex-3.js))
- testattavuus ([esimerkkiohjelma](ex-4.js))
- rinnakkaistuvuus

## Portaat sivuvaikutuksettomuuteen

1. sovelluksen tilasiirtymät lasketaan funktionaalisesti, mutta
   päivitetään imperatiivisesti ([esimerkkiohjelma](ex-5.js))
2. sovelluksen kaikki tietorakenteet ovat muuttumattomia, mutta
   kommunikaatio (I/O) hoidetaan imperatiivisesti
   ([esimerkkiohjelma](ex-6.js))
   - tämä on vaikeaa laiskoissa kielissä!
   - Clojure suosii tätä tapaa
3. ohjelma on kuvaus tietynlaisesta vuorovaikutuksesta maailman kanssa
   ([esimerkkiohjelma](ex-7.js))
   - käytännössä vain Haskell, Mercury ym. puhtaat kielet

Funktionaalisuuden hyödyt (ja haitat) kasvavat, mitä pidemmälle edetään.

## Miten voin rakentaa koodini niin, ettei tilamuutoksia ole?

- aloita pienestä: "Mitäpä jos tämä funktio/metodi ei muuttaisikaan
  mitään, vaan palauttaisi uuden arvon?"
  - siirry näitä kutsuviin funktioihin, muuta nekin funktionaalisiksi
- mieti aina ensiksi: "Mitä tämä funktio palauttaa?"
  - nimeä funktio sen mukaan
- siirry käyttämään [applikatiivisia tietorakenteita](../3-data-structures/)
- heitä silmukat menemään ja käytä sen sijaan
  [funktionaalisia toistorakenteita](../4-iteration)
- siirrä tila taustapalveluihin, jotka ovat erikoistuneet tilan
  hallintaan (kuten tietokantoihin), tai...
- mallinna koko ohjelma siten, että sen pysyvä tila on tietorakenne,
  jonka pääsilmukka antaa rekursiivisesti itselleen

