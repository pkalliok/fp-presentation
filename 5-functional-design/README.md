# Ohjelmien suunnittelu

Funktionaalisten ohjelmien suunnittelu on yksinkertaista, mutta hyvin
erilaista kuin esimerkiksi olio-ohjelmien suunnittelu.

## Akronyymeja

- KISS, [keep it simple, stupid](https://en.wikipedia.org/wiki/KISS_principle)
- YAGNI, [you aren't gonna need
  it](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)
- DTSTTCPW, [do the simplest thing that could possibly
  work](http://c2.com/cgi-bin/wiki?DoTheSimplestThingThatCouldPossiblyWork)
- DRY, [don't repeat yourself](http://c2.com/cgi/wiki?DontRepeatYourself)

## Kaikki lähtee tietomallista

- mieti ensimmäiseksi mahdollisimman näppärä tapa esittää niitä
  *tietoja*, joita ohjelmasi käsittelee
- tyypillisesti hyvä esitysmuoto on esimerkiksi sellainen, jota
  haluaisit REST-rajapinnan ottavan vastaan / palauttavan
  - suoraviivaisin mahdollinen, mutta laajennettava
  - paljon assosiatiivisia tietorakenteita (mappeja?)
  - lisää aiheesta [kapseloinnissa](../9-encapsulation/)
- Tee funktiot, joilla näitä esitysmuotoja on helppoa luoda ja
  tarkastella
- Tee näille tietomalleille muunnokset, joilla ne voi lähettää
  erilaisiin ulkoisiin lähteisiin / hakemaan niistä
  - tietokanta
  - teksti ruudulle (tulee ilmaiseksi kunnon kielissä)
  - rajapinnat (tulee usein ilmaiseksi samalla kuin edell. kohta)
  - HTML / formit
  - graafinen käyttöliittymä

## Tiedon muunnokset

- yritä hajottaa muunnokset pienimpiin mahdollisiin askeliin, joilla on
  vielä järkevä nimi
  - jokainen askel on yksi funktio (nimetön tai nimetty)
- tee monimutkaiset muunnokset sarjana yksinkertaisempia
- pyri siihen, että jokaisella tiedolla on vain yksi esitysmuoto
  ohjelmassa

## Refaktorointi

- DRY: koodissa on duplikointia, jos yksi muutos pitää tehdä useampaan
  kohtaan
  - käytännössä ainoa hyväksyttävä duplikointi on nimien duplikointi
- jotta duplikointi pysyy nollassa, koodia on refaktoroitava koko ajan
  kirjoitettaessa
- kun kahdessa funktiossa _f_ ja _g_ on samaa logiikkaa, on kaksi tapaa
  poistaa duplikaatio:
  1. tee apufunktio, jota sekä _f_ että _g_ kutsuvat ja joka laskee
     niille yhteiset asiat
  2. tee uusi funktio _h_, josta _f_ ja _g_ ovat saatavissa
     parametrisoimalla ([esimerkkiohjelma](ex-1.js))

