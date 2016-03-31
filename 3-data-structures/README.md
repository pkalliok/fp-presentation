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

