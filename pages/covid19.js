import {
  Wrapper, 
  Markdown, 
  connect, 
  reduxWrapper, 
  configure,
  WidgetIconGrid,
  TwoColsLayout as Section
} from 'eventjuicer-site-components'

import settings from '../settings'

import InsertInvitation from '@material-ui/icons/InsertInvitation'
import Description from '@material-ui/icons/Description'
import Public from '@material-ui/icons/Public'


const PageCovid19 = () => (

  <Wrapper label="covid19.title">

  <WidgetIconGrid icons={{
      "Accepted" : InsertInvitation,
      "Invited" : Description,
      "Digital" : Public
  }} setting="covid19.visitors" />
 
  <WidgetIconGrid icons={{

  }} setting="covid19.exhibitors" />
 
  <WidgetIconGrid icons={{

  }} setting="covid19.presenters" />

  <Section 

  left={

<Markdown>{`

# ZAPEWNIENIE BEZPIECZEŃSTWA NA TARGACH EHANDLU W ZWIĄZKU Z COVID - obowiązujące na dzień 12.08.2020


### TERENY WYSTAWIENNICZE

Zmiana sposobu organizacji przestrzeni wystawienniczych poprzez poszerzenie ciągów komunikacyjnych pomiędzy stoiskami wystawienniczymi do szerokości minimum 3 metrów.

Dostosowanie liczby uczestników do obowiązujących przepisów tj. przebywanie nie więcej niż 1 osoby na 2,5 m2 powierzchni dostępnej dla uczestników, z wyłączeniem obsługi.

Wprowadzenie sprzedaży biletów wstępu na targi wyłącznie online.

W celu ograniczenia liczby osób oczekujących na wejście czy przebywających na terenie targów wprowadzenie wyłącznie sprzedaży biletów wstępu online.

Wprowadzenie rejestracji online wystawców, mediów, odwiedzających.

Obowiązek zasłaniania ust i nosa (maseczką, przyłbicą lub innym materiałem) oraz noszenia rękawiczek  przez każdą osobę przebywającą w przestrzeni wystawienniczej, o ile będzie to wymagane obowiązującym prawem.

Zapewnienie przez Organizatora możliwości zakupu maseczek w przynajmniej jednym punkcie na terenie obiektu targowego.

Zainstalowanie odpowiedniej liczby pojemników z preparatem dezynfekującym przy wszystkich wejściach, w toaletach i innych ogólnodostępnych przestrzeniach.

Zrezygnowanie z roznoszenia ulotek i takich działań na terenie obiektów wystawienniczych, które mogłyby sprzyjać tworzeniu się skupisk ludzi.

### STREFY WEJŚCIA I WJAZDU

Wprowadzenie wyłącznie sprzedaży biletów wstępu online na targi.

Wprowadzenie rejestracji wszystkich uczestników targów, w celu pozyskania danych osób przebywających na targach. Formularz rejestracji będzie zawierał obowiązkową deklarację epidemiologiczną – o nieprzebywaniu na kwarantannie lub w izolacji.

Wejście na targi będzie tylko możliwe po okazaniu dokumentu wstępu oraz będzie dotyczyło wyłącznie osób uprawnionych tj. zgłoszeni wystawcy, zarejestrowani zwiedzający, pracownicy obsługi i służby serwisowe. Dokumenty będą weryfikowane w formie bezdotykowej.

Wyznaczenie odrębnych dróg komunikacji dla uczestników wydarzenia – jednej dla gości wchodzących na teren targów, drugiej dla wychodzących, w celu zminimalizowania bliskiego kontaktu między nimi.

Zapewnienie bezpiecznej strefy dla gości oczekujących, wydzielenie stref kolejki na teren targów z zachowaniem zasad bezpieczeństwa, tak aby odległość pomiędzy osobami wynosiła minimum 1,5 m.

Organizator zapewnia, że będzie weryfikował liczbę osób przebywających na terenie targów oraz pozwoli na blokadę wejścia, w przypadku przekroczenia dozwolonej liczby osób.

Organizator zapewnia dokonywanie bezdotykowego pomiaru temperatury ciała w strefie wejścia, o ile będzie to zalecane przez GIS oraz weryfikowanie w strefach wejścia, czy wchodzący mają na twarzy maseczkę i założone rękawiczki, jeśli będzie to nadal wymagane obowiązującymi przepisami prawa.

Organizator przygotuje specjalne zamknięte, zdezynfekowanie i odizolowane pomieszczenia dla osób z objawami infekcji. Zapewnienie odpowiedniego zabezpieczenia pracownikom medycznym pracującym w tym pomieszczeniu.

### PUNKTY OBSŁUGI KLIENTA (recepcje, biura targów)

Wyposażenie punktów obsługi w osłony z plexi, o ile nie jest możliwe zachowanie bezpiecznej odległości 1,5 m.

Do pracy będą dopuszczeni jedynie pracownicy po przeprowadzonej kontroli temperatury ciała, za ich zgodą, oraz wyposażonych w maseczki / przyłbice ochronne oraz rękawiczki, jeśli nadal będzie to wymagane obowiązującymi przepisami prawa lub zaleceniami GIS.

Organizator przygotuje bezpieczna strefę kolejki do puntu obsługi, w której oczekujący będą oddaleni od siebie o minimum 1,5 metry.

Dezynfekowanie powierzchni lady recepcyjnej w punkcie obsługi nie rzadziej niż co godzinę.

Zastosowanie rozliczeń bezgotówkowych, zabezpieczenie folią terminali płatniczych oraz ich dezynfekowanie nie rzadziej niż co godzinę.

### STOISKA WYSTAWIENNICZE I STREFY DLA GOŚCI

Organizator dostosuje liczbę dostępnych miejsc siedzących na terenach targowych poprzez wprowadzenie specjalnych rozwiązań umożliwiających zachowanie odległości przynajmniej 2 metrów zgodnie z aktualnie obowiązującymi zasadami bezpieczeństwa.

Organizator zobowiązuje Wystawców do zapewnienia na swoich stoiskach stosownych środków ochrony osobistej dla personelu oraz środków dezynfekujących.

Organizator wyda specjalne zalecenia wystawcom, aby w miarę możliwości materiały dla gości targowych były dostępne tylko w wersji online (np. na ekranach, pliki przekazywane online).

###  PRZESTRZENIE GASTRONOMICZNE

Przygotowanie sposobu funkcjonowania przestrzeni gastronomicznych (w tym restauracji) zgodnie z aktualnie obowiązującymi zasadami bezpieczeństwa w tego typu obiektach.

Zapewnienie bezpiecznej przestrzeni dla gości oczekujących na wejście do przestrzeni gastronomicznych (w tym restauracji) z zachowaniem bezpiecznych odstępów minimum 1,5 metra. 

### HIGIENA OTOCZENIA I ŚRODKI BEZPIECZEŃSTWA

Serwis sprzątający otrzyma szczegółowy plan zachowania higieny.

Zapewnienie odpowiedniej ilości urządzeń do higieny rąk, środkami na bazie alkoholu w miejscach przebywania gości np. w recepcji, w toaletach, przed przestrzeniami gastronomicznymi itp.

Przeszkolenie personelu obsługującego wydarzenie targowe w zakresie zasad reżimu sanitarnego i bezpieczeństwa podczas przebywania uczestników na terenach targowych.

Regularne, nie rzadziej niż co 2 godziny, czyszczenie i dezynfekcja często dotykanych elementów infrastruktury: klamki, poręcze, balustrady, blaty z użyciem środków dezynfekujących.

Przechowywanie śmieci i odpadów w pojemnikach zamkniętych, regularnie czyszczonych i dezynfekowanych.

Regularne wentylowanie pomieszczeń i przestrzeni, w jakich przebywają uczestnicy.

Wyposażenie wszystkich toalet w płynne mydło i jednorazowe ręczniki papierowe, a także w płyn dezynfekujący. Regularna kontrola stanu asortymentu w toaletach oraz stanu toalet oraz wprowadzenie kart kontrolnych, z częstotliwością serwisu co godzinę.

Zapewnienie obecności zespołu medycznego dostępnego na terenach targowych podczas wydarzenia.

## KOMUNIKACJA Z GOŚĆMI

Podejmowanie wzmożonych akcji informacyjnych dotyczących zasad bezpieczeństwa obowiązujących uczestników wydarzenia na terenach targowych.

Zamieszczenie w widocznych miejscach materiałów edukacyjnych (w postaci plakatów, plansz na ekranach czy filmów instruktażowych) na temat higieny rąk i zachowania podczas kichania lub kaszlu (toalety, punkty obsługi klienta, strefy wejściowe) oraz utrzymywania odpowiedniego dystansu z innymi ludźmi i unikania uścisków dłoni.

Uruchomienie alarmowego numeru telefonu, dostępnego w czasie wydarzeń targowych, oznakowanie w widocznych miejscach informacji o tym numerze i zasadach korzystania.


      `}</Markdown>
    
  }

  right={

    <img src="https://res.cloudinary.com/eventjuicer/image/upload/w_800,c_fit/v1599598132/expoxxi_covid19.png" alt="" style={{width: "95%"}} />

  } />


</Wrapper>

)



export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
  await configure(store, {
    settings: settings,
    preload: []
  })
  
  return {
      props: {}, 
      revalidate: 1
  }

})

export default connect()(PageCovid19);
