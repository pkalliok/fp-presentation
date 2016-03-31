# Applikatiiviset tietorakenteet

Tietorakenne on applikatiivinen, mikäli sen kaikki operaatiot jättävät
alkuperäisen tietorakenteen ennalleen ja palauttavat uuden, erilaisen
tietorakenteen.

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
- Nykyään ei kuitenkaan niin tärkeää:
  - kielet ovat kehittyneet
  - taulukoitakin käsitellään iteraattoreilla / keräelmillä
  - kielissä sisäänrakennettuna tehokkaita assosiaatiorakenteita

## Puut vs hajautukset

- aika samanlainen case kuin listat vs taulukot
- hajautuksen destruktiivinen päivitys O(1), applikatiivinen O(n),
  puun applikatiivinen päivitys O(log(n)).
  - tilavaativuus noudattaa samaa kaavaa
- tarinan opetus: koodin selkeyden ja tehokkuuden vuoksi on tärkeää,
  että kielessä on helppokäyttöinen, applikatiivinen map-toteutus!
  - Clojuressa on

## Symbolit (tai avainsanat) vs merkkijonot

- merkkijonot, joita voi muutella destruktiivisesti, ovat evil
- jos ei voi, samansisältöisen merkkijonon voi jakaa kaikkialle, missä
  sitä tarvitaan
- jos *kaikki* (lyhyet) merkkijonot ovat sisällön perusteella
  identtisiä, säästyy sekä tilaa että tehoja merkkijonojen vertailussa
- merkkijonojen käsittelystä tulee yhtä kevyttä kuin enumien -> ei
  tarvetta käyttää numeroita / enumeja ilmaisemaan kategorioita
- tästä on kyse symboli-tietotyypissä

