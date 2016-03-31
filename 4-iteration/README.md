# Funktionaaliset toistorakennetyylit

## Miksi tästä edes tarvitsee erikseen puhua?

- perinteinen silmukka ei ole käytettävissä puhtaan funktionaalisessa
  tyylissä
  - muuttujien arvot eivät voi muuttua; siispä silmukan lopetusehto on
    aina tosi (ei suoriteta yhtään kertaa) tai aina epätosi (ikuinen
    silmukka)
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
  - Haskell

## Iteraattorit

- funktioita, jotka käyvät tietorakenteita eri tavoin läpi
- ottavat tiedon varsinaisesta operaatiosta argumenttina, joka on
  funktio (katso [korkeamman asteen funktiot](../6-first-class-functions))
- hyvin abstrakteja, tekevät mahdolliseksi kirjoittaa tiivistä koodia
- lähes vaativat kieleltä kunnollista tukea nimettömille funktioille ja
  sulkeumille
- omituista kyllä, nämä näyttävät olevan ensimmäinen mainstreamiksi
  tullut funktionaalinen toistotekniikka (Javan streamit, useiden
  kielten .map-, .filter- ymv. metodit)
- esimerkiksi listan (tai taulukon) minkä tahansa operaation voi
  toteuttaa reduce:a parametrisoimalla

