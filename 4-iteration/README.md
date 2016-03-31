# Funktionaaliset toistorakennetyylit

## Miksi tästä edes tarvitsee erikseen puhua?

- perinteinen silmukka ei ole käytettävissä puhtaan funktionaalisessa
  tyylissä
  - muuttujien arvot eivät voi muuttua; siispä silmukan lopetusehto on
    aina tosi (ikuinen silmukka) tai aina epätosi (ei suoriteta yhtään
    kertaa)
- funktionaalisessa ohjelmoinnissa on *tosi monta* tapaa ilmaista
  toistoa, kaikissa omat hyvät puolensa
- keräelmät ovat selkeä ja rajoittunut tekniikka, iteraattorit ja
  rekursio monipuolisia ja kattavia

## Keräelmät

- kattavat hurjan määrän tapauksia, joissa listalle (tai taulukolle,
  mapille, ...) tehdään muunnoksia ja poimintoja
  - joidenkin tutkimusten mukaan 95% kaikista toistotarpeista saa
    katetuksi keräelmillä jopa ilman mitään apukeinoja
- tuottavat aina listoista listoja (tai yleisemmin: monadeista monadeja)
- helppolukuisia, vaativat syntaktista tukea kieleltä
  - Python ([esimerkkiohjelma](ex-1.py))
  - Clojure ([esimerkkiohjelma](ex-1.clj))
  - Haskell ([esimerkkiohjelma](ex-1.hs))

