# Applikatiiviset tietorakenteet

Tietorakenne on applikatiivinen, mikäli sen kaikki operaatiot jättävät
alkuperäisen tietorakenteen ennalleen.

## Kuulostaako tuhlailevalta?

Applikatiiviset tietorakenteet eivät ole niin (muistia / resursseja)
tuhlailevia kuin ehkä kuulostaa.
- tietorakenteen osia voi jakaa useamman rakenteen kesken, jos ne eivät
  muutu ([esimerkkiohjelma](ex-1.js))
- jos muuttumattomuus on rakennettu kaikkeen, tämä on oikeasti
  merkittävä hyöty
- samaa tietorakennetta voi yhtaikaa lukea ja/tai "päivittää" useampi
  suoritin
- jos muuttumattomuuteen voi luottaa, voi myös tehdä automaattisia
  rinnakkaistuksia esim. laskea yhtaikaa kahta funktiota, joilla on
  sama syöte

Tässä on yksi asia, jossa imperatiivinen tapa tuottaa yksiä hyötyjä ja
funktionaalinen toisia

## Listat vs taulukot

- linkitetyn listan lookup = O(n), taulukon O(1); mutta prependin
  aikavaativuus on toisin päin... mikä järki on linkitetyssä listassa?
- lista on rakenteeltaan induktiivinen
  - sopii hyvin rekursiivisesti käsiteltäväksi
  - useampi lista voi jakaa hännän
- taulukko tekee usein rekursiivisesta koodista O(n^2), kun taas
  linkitetyn listan tails() on tilavaativuudeltaan O(n)
  ([esimerkkiohjelma](ex-2.js))
- muita tapauksia, joissa linkitetty lista jakaa tehokkaasti osiaan
  useamman listan kesken: joukko, ominaisuuslista, katenaatio
  ([esimerkkiohjelma](ex-3.js))
- tämä on lähestulkoon tärkein syy, miksi alkuvaiheen tekoälytutkimus
  tehtiin LISPillä :D

## Hajautukset vs puut

