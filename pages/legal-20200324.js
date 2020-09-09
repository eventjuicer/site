import {
  Wrapper, 
  Markdown, 
  connect, 
  reduxWrapper, 
  configure
} from 'eventjuicer-site-components'

import settings from '../settings'

const PageFaq = () => (

  <Wrapper label="exhibitors.agreement.title">
     
  <Markdown>{`

Poprzednia wersja regulaminu (dotycząca Targów eHandlu Kraków 22 kwietnia 2020 roku) znajduje się pod adresem [targiehandlu.pl/legal-20191023](https://targiehandlu.pl/legal-20191023).

# 1. Postanowienia ogólne, definicje.

1.1. Niniejszy regulamin stanowi ogólne warunki umowy w ramach organizowanych przez Infoguru Sp. z o.o. Sp. k. z siedzibą w Poznaniu Targów eHandlu.

1.2. Określenia użyte w niniejszym dokumencie, pisane wielką literą oznaczają:

1.2.1. Organizator ​– Infoguru sp. z o.o. Sp.k. z siedzibą w Poznaniu (kod pocztowy 60­-478), ul. Truskawiecka 13, wpisana do rejestru przedsiębiorców pod numerem KRS 0000721810, której akta rejestrowe przechowywane są przez Sąd Rejonowy Poznań­ Nowe Miasto i Wilda w Poznaniu, VIII Wydział Gospodarczy Krajowego Rejestru Sądowego, posługująca się nadanym jej numerem identyfikacji podatkowej 7811967834 oraz numerem REGON 369698530; Adres e-mail: hello@targiehandlu.pl,

1.2.2. Targi ​– organizowane przez Organizatora 18 Targi eHandlu, które odbędą się w Warszawie na terenie Warszawskiego Centrum EXPO XXI, w dniu 23 października 2020 roku;

1.2.3. Regulamin ​– niniejszy dokument stanowiący ogólne warunki Umowy;

1.2.4. Wystawca ​– osoba fizyczna, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, która prowadzi działalność gospodarczą: związaną z handlem elektronicznym, w tym w szczególności świadczy usługi elektroniczne, której oferta skierowana jest do podmiotów prowadzących sklepy internetowe lub która w ramach prowadzonej przez siebie działalności gospodarczej zamierza rozpocząć prowadzenie sklepu internetowego lub kierowanie oferty do podmiotów prowadzących taką działalność;

1.2.5. Hala – Przestrzeń na terenie Warszawskiego Centrum EXPO XXI, w której odbędą się Targi;

1.2.6. Stoisko​ – przestrzeń wystawiennicza umieszczona w Hali;

1.2.7. Prezentacja ​– multimedialna, 15 ­minutowa prezentacja skierowana do Wystawców i Zwiedzających dotycząca zagadnień związanych ze sprzedażą w Internecie;

1.2.8. Umowa ​– zawarta na zasadach określonych w Regulaminie umowa pomiędzy Organizatorem a Wystawcą, określająca prawa i obowiązki Organizatora oraz Wystawcy;

1.2.9. Strona Targów – udostępniona przez Organizatora w sieci Internet pod adresem https://targiehandlu.pl strona umożliwiająca między innymi zawarcie Umowy pomiędzy Organizatorem a Wystawcą;

1.2.10. Zwiedzający ​– osoba fizyczna niebędąca Wystawcą ani przedstawicielem Organizatora, przebywająca w Hali podczas Targów.

# 2. Świadczenia organizatora.

2.1. Organizator udostępnia Wystawcom, na zasadach określonych w Regulaminie, Pakiety wystawiennicze w kategorii wybranej przez Wystawcę, na zasadach określonych Regulaminem. Organizator oferuje następujące kategorie Pakietów wystawienniczych: Pakiet „Standard”, Pakiet „Hot”, Pakiet "Super-HOT", Pakiet „Ultra”, Pakiet "Grand".

2.2. W ramach Pakietów „Standard”, „Hot”, "Super-Hot" oraz „Ultra”, Organizator na czas trwania Targów umożliwia Wystawcy korzystanie ze Stoiska, które obejmuje:

2.2.1. 6m2 (sześć metrów kwadratowych) powierzchni podłogi Hali (o wymiarach 3 m x 2 m),

2.2.2. umieszczonego na powierzchni o jakiej mowa w pkt 2.2.1. jednego stołu o średnicy min. 70 cm,

2.2.3. 2 (dwóch) krzeseł,

2.2.4. możliwości umieszczenia na powierzchni o jakiej mowa w pkt. 2.2.1.1. przygotowanych przez Wystawcę rollup’ów lub ścianki reklamowej o szerokości podstawy nie większej niż 3 m (trzy metry), wysokość zabudowy stoiska nie może przekraczać 2.5 m (dwa i pół metra). Stoisko może być zabudowane - w przypadku braku odmiennej, wyrażonej na piśmie zgody Organizatora - wyłącznie z jednej strony powierzchni, o jakiej mowa w pkt 2.2.1. 

2.2.5. dostępu do przyłącza elektroenergetycznego o maksymalnej mocy 300 W (napięcie 230 V),

2.2.6. dostępu do Internetu na terenie Hali za pośrednictwem sieć WIFI.

2.3. W ramach Pakietu „Grand” Organizator na czas trwania Targów umożliwia Wystawcy korzystanie ze Stoiska, które obejmuje:

2.3.1. powierzchnię podłogi Hali  (o wymiarach 4 m x 6 m),

2.3.2. umieszczonych na powierzchni o jakiej mowa w pkt. 2.3.1. dwóch stołów o średnicy min. 70 cm,

2.3.3. 4 (czterech) krzeseł,

2.3.4. możliwości umieszczenia na powierzchni o jakiej mowa w pkt. 2.3.1. przygotowanych przez Wystawcę rollup’ów lub ścianki reklamowej o szerokości podstawy nie większej niż 6 m (sześć metrów), wysokość zabudowy stoiska nie może przekraczać 2,5 m (dwa i pół metra). Stoisko może być zabudowane - w braku odmiennej, wyrażonej na piśmie zgody Organizatora - wyłącznie z jednej strony powierzchni, o jakiej mowa w pkt 2.3.1. 

2.3.5. dostępu do przyłącza elektroenergetycznego o maksymalnej mocy 2000 W (napięcie 230 V),

2.3.6. Innych materiałów promocyjnych lub mebli stanowiących wyposażenie stoiska. Dostarczenie i przygotowanie tych materiałów leży po stronie Wystawcy

2.4. Organizator, do 7 dni przed rozpoczęciem Targów, zastrzega sobie prawo do modyfikacji planu rozmieszczenia Stoisk w ramach Hali  - w szczególności  przenosin poszczególnych Stoisk oraz zmiany numeracji Stoisk, jeżeli taka zmiana podyktowana jest względami komfortu Zwiedzających bądź względami bezpieczeństwa. Modyfikacje, o których mowa w pkt 2.4 nie będą wiązały się ze zmianą kategorii Pakietów Wystawienniczych.

2.4.1. Organizator dołoży starań, aby modyfikacja, o której mowa w pkt 2.4. powyżej nie miała wpływu na ekspozycję Stoiska Wystawcy i nie osłabiała jego efektu promocyjnego i marketingowego, co oceni Organizator.

2.4.2. W przypadku modyfikacji wskazanej w pkt 2.4 Wystawcy nie przysługuje roszczenie o zwrot jakiejkolwiek części zapłaconego wynagrodzenia.

2.5. W ramach Pakietów Wystawienniczych Organizator od dnia zawarcia umowy do dnia 23 października 2020 umożliwia Wystawcy korzystanie z usług przedstawionych w pkt 10.

3. Zawarcie Umowy z organizatorem

3.1. Do zawarcia Umowy z Organizatorem, której przedmiotem jest korzystanie w czasie Targów, z jednego lub większej liczby Stoisk lub umożliwienie przeprowadzenia jednej lub większej liczby Prezentacji dochodzi w formie elektronicznej, za pośrednictwem Strony Targów.

3.2. Warunkiem zawarcia Umowy, o jakie mowa w ust. 3.1. jest:

3.2.1. Wybór przez Wystawcę przynajmniej jednego Pakietu Wystawienniczego lub Prezentacji, przy czym wyboru Pakietu Wystawienniczego lub Prezentacji Wystawca dokonuje przy pomocy udostępnionej przez Organizatora w ramach Strony Targów funkcjonalności,

3.2.2. wypełnienie formularza rejestracyjnego,

3.3. Do zawarcia Umowy dochodzi z chwilą potwierdzenia przez Organizatora rezerwacji Pakietu Wystawienniczego lub możliwości przeprowadzenia Prezentacji. 
Potwierdzenie następuje poprzez wysłanie na adres e-mail Wystawcy wskazany przy rejestracji, 
informacji potwierdzającej przyjęcie rezerwacji Pakietu wystawienniczego lub możliwości przeprowadzenia Prezentacji.

# 4. Wynagrodzenie

4.1. Z chwilą zawarcia Umowy Wystawca zobowiązany jest do zapłaty Organizatorowi wynagrodzenia stanowiącego sumę iloczynów liczby wybranych przez Wystawcę Pakietów Wystawienniczych lub Prezentacji oraz przypisanych do nich stawek, określonych w aktualnym na dzień zawierania Umowy cenniku dostępnym w ramach Strony Targów.

4.2. Wystawca informuje, że ceny Pakietów Wystawienniczych oraz Prezentacji zależne są od transzy cenowej, w ramach której Wystawca zawiera Umowę, zgodnie z zasadą, że im później Umowa zostanie zawarta, tym wyższa jest cena. Wystawca przewiduje minimum 4 (cztery) transze cenowe. Zmiany cen nie dotyczą umów zawartych przed ogłoszeniem zmian cennika na Stronie Targów.

4.3. Całkowite wynagrodzenie składa się z opłaty za powierzchnię wystawienniczą i opłaty stałej w wysokości 1250 PLN netto za reklamę, marketing, usługi account managera, rejestrację oraz usługi dodatkowe.

4.4. Z chwilą zawarcia Umowy, Organizator prześle na adres email Wystawcy podany podczas rejestracji fakturę proforma.

4.5. Wystawca zobowiązany jest do dokonania zapłaty wynagrodzenia na rachunek Organizatora podany na fakturze proforma w terminie 3 (trzech) dni od dnia zawarcia Umowy.

4.6. W przypadku braku zapłaty całości należnego Organizatorowi wynagrodzenia w terminie, o jakim mowa w pkt 4.5. Organizator ma prawo wypowiedzieć umowę przy jednoczesnym poinformowaniu Wystawcy drogą mailową. Wystawcy nie przysługują żadne roszczenia z tego tytułu.

4.7. Za dzień zapłaty uznaje się dzień uznania rachunku bankowego Organizatora.

4.8. Wystawca upoważnia Organizatora do sporządzania faktur VAT oraz faktury proforma w formie elektronicznej i przesyłania ich, jako plik w formacie pdf, na adres e-mail Wystawcy podany podczas rejestracji w ramach Strony Targów.

4.9. Wystawca, który nie dokonał terminowej płatności całości należnego Organizatorowi wynagrodzenia, jest uprawniony do ponownego zawarcia Umowy z Organizatorem, jednakże wyłącznie w kolejnych transzach cenowych. Jednakże jeżeli Umowę zawarł w ostatniej transzy cenowej, jest uprawniony do ponownego jej zawarcia w tej samej transzy.

# 5. Rozwiązanie Umowy.

5.1. Każdy Wystawca może, bez podania przyczyny, rozwiązać Umowę, na piśmie, bez zachowania okresu wypowiedzenia.

5.2. W przypadku rozwiązania przez Wystawcę Umowy do dnia 23 kwietnia 2020 roku Organizator zwróci Wystawcy całość płatności dokonanej jako wynagrodzenie za powierzchnię wystawienniczą. Płatność za usługi świadczone w ramach opłaty stałej (w tym częściowo wykonane) nie podlega zwrotowi.

5.3. W przypadku rozwiązania przez Wystawcę Umowy w okresie od dnia 24 kwietnia 2020 roku do dnia 23 sierpnia 2020 roku Organizator zwróci Wystawcy 50% (pięćdziesiąt procent) płatności dokonanej jako wynagrodzenie za powierzchnię wystawienniczą, zachowując pozostałe 50% (pięćdziesiąt procent) jako opłata manipulacyjna. Płatność za usługi świadczone w ramach opłaty stałej (w tym częściowo wykonane) nie podlega zwrotowi.

5.4. W przypadku rozwiązania przez Wystawcę Umowy w okresie od dnia 24 sierpnia 2020 roku do dnia 23 września 2020 roku Organizator zwraca 25% (dwadzieścia pięć procent) płatności dokonanej jako wynagrodzenie za powierzchnię wystawienniczą, zachowując pozostałe 75% (siedemdziesiąt pięć procent) jako opłata manipulacyjna. Płatność za usługi świadczone w ramach opłaty stałej (w tym częściowo wykonane) nie podlega zwrotowi.

5.5. W przypadku rozwiązania przez Wystawcę Umowy w okresie po dniu 24 września 2020 roku Organizator nie zwraca kwoty wpłaconej jako wynagrodzenie za powierzchnię wystawienniczą, zachowując 100% (sto procent) wpłaconej kwoty jako opłata manipulacyjna. Płatność za usługi świadczone w ramach opłaty stałej (w tym częściowo wykonane) nie podlega zwrotowi.

5.6. Organizator zastrzega sobie prawo do odwołania Targów ze względu na zbyt małą liczbę uczestników. 

5.7. Organizator zastrzega sobie prawo do odwołania lub zmiany terminu Targów, z przyczyn niezależnych od jego woli, w szczególności ze względu na przyczyny spowodowane działaniem siły wyższej oraz stanem zagrożenia zdrowotnego i stosowaniem się do zaleceń z nim związanych. 

W przypadku zmiany terminu Targów, nowy termin zostanie wyznaczony nie później niż na 12 miesięcy od dnia pierwotnego terminu.

5.8. O odwołaniu lub zmianie terminu Targów Wystawca zostanie powiadomiony poprzez przesłanie wiadomości e-mail na adres podany przez Wystawcę w związku z rejestracją za pośrednictwem Strony Targów.

5.9. W przypadku odwołania Targów, Umowa ulega automatycznemu rozwiązaniu, a Wystawcy przysługuje roszczenie o zwrot zapłaconego wynagrodzenia za powierzchnię wystawienniczą w całości	– z zastrzeżeniem postanowień pkt. 5.10. Płatność za usługi świadczone w ramach opłaty stałej (w tym częściowo wykonane) nie podlega zwrotowi.

5.10.	W przypadku odwołania lub przełożenie terminu Targów z przyczyn podanych w pkt. 5.7. Organizator nie zwraca wynagrodzenia, zatrzymując 100% (sto procent) zapłaconej kwoty. 
Tym samym wyłączona jest odpowiedzialność Organizatora, wynikająca z art. 495 §1 i §2 Kodeksu cywilnego.

5.11.	W przypadku odwołania, zmiany terminu lub zamknięcia dla publiczności Targów Organizator nie ponosi jakiejkolwiek odpowiedzialności odszkodowawczej względem Wystawcy.

5.12. Organizator zastrzega sobie prawo do rozwiązania Umowy w trybie natychmiastowym w przypadku, gdy według swobodnej oceny Organizatora, prowadzona przez Wystawcę działalność nie mieści się w ramach działalności, o jakiej mowa w pkt. 1.2.4. Regulaminu. 

W takim przypadku Organizator poinformuje Wystawcę o rozwiązaniu Umowy wysyłając wiadomość e-mail na adres podany przez Wystawcę w związku z rejestracją za pośrednictwem Strony Targów, a Wystawcy przysługuje roszczenie o zwrot zapłaconego wynagrodzenia w całości.

# 6. Odpowiedzialność Organizatora

6.1. Z zastrzeżeniem postanowień pkt. 5.5 do 5.12 Organizator ponosi odpowiedzialność za niewykonanie lub nienależyte wykonanie Umowy, wyłącznie do wysokości rzeczywiście poniesionej przez Wystawcę szkody z ograniczeniem do wysokości zapłaconego przez Wystawcę wynagrodzenia.

6.2. Organizator nie ponosi odpowiedzialności za utracone korzyści.

6.3. Organizator nie ponosi odpowiedzialności za szkody wyrządzone Wystawcy przez innych Wystawców lub przez inne osoby trzecie.

6.4. Organizator w szczególności nie ponosi odpowiedzialności za rzeczy pozostawione przez Wystawcę na terenie Hali , w tym w szczególności na terenie Stoiska, w tym za ich utratę lub uszkodzenie.

# 7. Warunki korzystania ze Stoiska

7.1. Wystawca nie może korzystać ze Stoiska w sposób niezgodny z jego przeznaczeniem, w tym w szczególności nie może: korzystać w ramach Stoiska jednocześnie z urządzeń o łącznym poborze mocy większym niż moc przyłącza elektroenergetycznego udostępnionego w ramach Stoiska, umieszczać w ramach Stoiska rollup’u lub ścianki reklamowej o wymiarach większych niż określone dla danej kategorii Pakaietu Wystawienniczego. 

7.2. W celu aranżacji Stoiska Organizator udostępni Wystawcy Stoisko od godziny 16:00 w dzień poprzedzający Targi.

7.3. Wystawca nie może przystąpić do demontażu stoiska przed godz. 17:00 w dzień Targów.

7.4. Wystawca może korzystać z dowolnej liczby Pakietów wystawienniczych Standard, Light, Hot, Super-Hot i Ultra.

7.5. Wystawca może korzystać z jednego Pakietu Wystawienniczego wyłącznie w celu promowania jednego produktu (towaru lub usługi), przy czym przez promowanie rozumieć należy prezentowanie oferty handlowej dotyczącej towaru lub usługi; przez jeden produkt lub usługę rozumieć należy także grupę produktów lub usług oferowanych przez Wystawcę pod jedną marką (znakiem towarowym stanowiącym oznaczenie odróżniające).

7.6. Po zakończeniu Targów Wystawca zobowiązany jest usunąć ze Stoiska oraz Hali , w dniu Targów, do godziny 20:00, wszelkie rzeczy wniesione do Hali  przez niego lub osoby przez niego upoważnione.

7.7. W przypadku pozostawania rzeczy o których mowa w pkt. 7.6. na Stoisku lub w jakimkolwiek innym miejscu w Hali , Organizator usunie te rzeczy na koszt Wystawcy i odda je na przechowanie na koszt i ryzyko Wystawcy.

7.8. Z zastrzeżeniem postanowień pkt. 8, wszelka działalność Wystawcy w ramach Targów, w tym w szczególności promocyjna i marketingowa winna odbywać się wyłącznie na terenie Stoiska Wystawcy. Prowadzenie jakiejkolwiek działalności promocyjnej i marketingowej poza terenem Stoiska Wystawcy możliwe jest wyłącznie na podstawie odrębnej, pisemnej umowy z Organizatorem, zawartej na piśmie, pod rygorem nieważności.

7.9. Po zakończeniu Targów Wystawca zobowiązany jest zwrócić wszelkie przedmioty składające się na wyposażenie Stoiska w stanie niepogorszonym ponad zużycie wynikające z prawidłowego użytkowania.

# 8. Warunki dotyczące przeprowadzenia Prezentacji

8.1. Wystawca, lub inna osoba fizyczna bądź prawna, która zawarła z Organizatorem Umowę, której przedmiotem jest umożliwienie przeprowadzanie Prezentacji, zobowiązana jest:

8.1.1 w terminie do dnia 11 października 2020 roku, do godz. 20:00, przesyłając wiadomość na adres email, o jakim mowa w pkt. 1.2.1., poinformować Organizatora o ostatecznym temacie Prezentacji, pod rygorem utraty prawa do jej przeprowadzenia.

8.1.2 w terminie do dnia 18 października 2020 roku do godz. 12:00, przesłać Organizatorowi, w formie załącznika do wiadomości e-mail wysłanej na adres, o jakim mowa w pkt. 1.2.1., slajdy Prezentacji (wyłącznie w formacie pdf lub keynote​), pod rygorem utraty prawa do jej przeprowadzenia.

8.2. Temat Prezentacji musi być związany z handlem elektronicznym, pod rygorem utraty prawa do jej przeprowadzenia bez zwrotu wynagrodzenia. Prezentacja może być związana z promocją działalności gospodarczej prowadzonej przez Wystawcę, o ile w jej treści elementy autopromocyjne stanowić będą maksymalnie 5% zawartości .

8.3. Wystawca zobowiązuje się do nieodpłatnego udostępnienia Prezentacji Organizatorowi w celu publikacji o charakterze edukacyjnym.

8.4. Organizator:

8.4.1. umożliwi Wystawcy przeprowadzenie podczas Targów 15­-minutowej Prezentacji w sali konferencyjnej zlokalizowanej w obiekcie  Hali , w czasie ustalonym szczegółowo przez Organizatora i określonym w harmonogramie opublikowanym na Stronie Targów najpóźniej na 1 (jeden) dzień przed rozpoczęciem Targów, przy czym ustalenie kolejności Prezentacji i ewentualne pogrupowanie ich w ramach bloków tematycznych zależy wyłącznie od woli Organizatora,

8.4.2. na zasadach określonych w pkt. 10. umieści w ramach Strony Targów profil Wystawcy,

8.4.3. na czas przeprowadzenia Prezentacji zapewni dostęp do zaplecza multimedialnego umożliwiającego przeprowadzenie Prezentacji (nagłośnienie, projektor, komputer, oświetlenie), przy czym prawidłowe wyświetlanie slajdów Prezentacji będzie możliwe wyłącznie w przypadku przesłania slajdów Prezentacji w formacie pdf.

8.5. Organizator zastrzega, że przekroczenie 15­-minutowego czasu Prezentacji powoduje natychmiastowe odebranie dostępu do zaplecza multimedialnego polegające między innymi na wyłączeniu nagłośnienia i projektora.

8.6. Organizator nie ponosi odpowiedzialności za treści przedstawione przez Wystawcę w ramach Prezentacji.

# 9. Kary umowne.

9.1. W przypadku naruszenia przez Wystawcę postanowień pkt. 7.1. Wystawca zapłaci Organizatorowi, na jego pierwsze wezwanie, karę umowną w wysokości 50% wynagrodzenia należnego Organizatorowi z tytułu Umowy, za każde naruszenie.

9.2. W przypadku naruszenia przez Wystawcę postanowień pkt. 7.3. Wystawca zapłaci Organizatorowi, na jego pierwsze wezwanie, karę umowną w wysokości 25% wynagrodzenia należnego Organizatorowi z tytułu Umowy, za każde naruszenie.

9.3. W przypadku naruszenia przez Wystawcę postanowień pkt. 7.5. Wystawca zapłaci Organizatorowi, na jego pierwsze wezwanie, karę umowną w wysokości 25% wynagrodzenia należnego Organizatorowi z tytułu Umowy, za każde naruszenie.

9.4. W przypadku naruszenia przez Wystawcę postanowień pkt. 7.6. Wystawca zapłaci Organizatorowi, na jego pierwsze wezwanie, karę umowną w wysokości 50% wynagrodzenia należnego Organizatorowi z tytułu Umowy, za każde naruszenie.

9.5. W przypadku naruszenia przez Wystawcę postanowień pkt. 7.8. Wystawca zapłaci Organizatorowi, na jego pierwsze wezwanie, karę umowną w wysokości 50% wynagrodzenia należnego Organizatorowi z tytułu Umowy, za każde naruszenie.

9.6. Organizator zastrzega sobie prawo do dochodzenia odszkodowania w wysokości przenoszącej wysokość kar umownych.

# 10. Reklama, marketing, usługi account managera, rejestracja oraz usługi dodatkowe.

10.1. Organizator w ramach opłaty stałej po zawarciu umowy niezwłocznie rejestruje Wystawcę w systemie EXPO CRM.

10.2. Po zawarciu Umowy Organizator udziela Wystawcy, w ramach opłaty stałej, nieograniczonej terytorialnie licencji na okres od daty zawarcia Umowy do 23 października 2020 r. Na używanie znaku towarowego „Targów eHandlu” w celu promowania udziału Wystawcy w Targach, we wszystkich mediach, w szczególności w prasie, radiu, telewizji, w transmisjach skierowanych do ogółu użytkowników Internetu za pomocą dowolnych środków komunikacji w sieci, w wiadomościach e-mail.

10.3. Organizator, w ramach opłaty stałej, udostępnia Wystawcy w ramach Strony Targów profil Wystawcy dostępny dla użytkowników strony.

10.4. Wystawca zobowiązuje się uzupełnić profil wszystkimi danymi wymaganymi przez Organizatora, w tym w szczególności umieścić w ramach profilu logo, informację o prowadzonej działalności, a także przygotować i umieścić w ramach profilu informację o ofercie specjalnej dla Zwiedzających.

10.5. Organizator zastrzega sobie prawo do nieudostępnienia profilu Wystawcy użytkownikom Strony Targów, jeżeli Wystawca nie wykona któregokolwiek z obowiązków określonych w pkt. 10.2.

10.6. Dane umieszczone przez Wystawcę w ramach profilu, tj. nazwa, logo oraz opis działalności, prezentowane będą przez Organizatora w Wirtualnym Katalogu Wystawców dostępnym w ramach Strony Targów.

10.7. Wystawca z chwilą zawarcia Umowy udziela Organizatorowi nieodpłatnej, nieograniczonej terytorialnie licencji na czas od dnia zawarcia Umowy do dnia 23 października 2025 roku, na korzystanie z materiałów umieszczonych w ramach profilu Wystawcy w celu promocji Targów, w tym kolejnych ich edycji, w środkach masowego przekazu, w tym w szczególności w prasie, radio, telewizji, w ramach Strony Targów, w przekazach kierowanych do ogółu użytkowników sieci Internet za pomocą dowolnych środków przekazu w ramach tej sieci, w wiadomościach e-mail, a także w celu promocji działalności Organizatora w opisanym wyżej zakresie.

10.8. W każdej sprawie związanej z Umową lub Targami Wystawca może skontaktować się z account managerem, który udzieli wszelkich potrzebnych informacji lub wsparcia.

# 11. Działalność osób trzecich

11.1. W czasie trwania Targów Organizator jest jedynym dysponentem Hali i umożliwia wstęp na jego teren wyłącznie Wystawcom i ich upoważnionym przedstawicielom, Zwiedzającym oraz własnym pracownikom i współpracownikom.

11.2. Przebywanie na terenie Hali  w czasie trwania Targów osób innych niż Wystawcy, ich upoważnieni przedstawiciele, Zwiedzający oraz pracownicy lub współpracownicy Organizatora, jest zabronione.

11.3. Z zastrzeżeniem postanowień pkt 7.8, prowadzenie w czasie Targów na terenie Hali  jakiejkolwiek działalności gospodarczej, promocyjnej, informacyjnej, w tym sprzedaż lub świadczenie usług na rzecz Wystawców lub Zwiedzających, odpłatne lub nieodpłatne, wymaga uprzedniej, pisemnej pod rygorem nieważności, zgody Organizatora.

11.4. Fotografowanie i rejestrowanie nagrań wideo na terenie Hali w czasie Targów wymaga uprzedniej, pisemnej, pod rygorem nieważności, zgody Organizatora.

# 12. Właściwość Sądu

Wszelkie spory pomiędzy Wystawcami, a Organizatorem rozwiązywane będą ugodowo, a w razie nie dojścia do porozumienia spór rozstrzygnie sąd powszechny właściwy dla siedziby Organizatora.

# 13. Uczestnictwo w Targach w charakterze Zwiedzającego.

13.1. Uczestnictwo w charakterze Zwiedzającego jest bezpłatne.

13.2. Warunkiem uczestnictwa w Targach jest wypełnienie formularza rejestracyjnego dostępnego na Stronie Targów oraz akceptacja niniejszego Regulaminu.

13.3. Poprzez rejestrację Zwiedzający wyraża zgodę na otrzymywanie informacji dotyczących Targów zarówno przed, jak i po dniu Wydarzenia.

13.4. Bezpłatna wejściówka zostanie przesłana osobie zarejestrowanej na kilka dni przed Wydarzeniem

13.5. Zwiedzający, po zakończeniu Targów, otrzyma także informację o następnej edycji Wydarzenia.

13.6. Zwiedzający, uczestniczący w Targach jest świadomy, że jego wizerunek może pojawić się na zdjęciach i materiale video relacjonujących Targi. 

# 14. Wejście w życie i zmiany Regulaminu.

14.1. Regulamin wchodzi w życie z dniem 24 marca 2020 roku.

14.2. Organizator zastrzega sobie prawo do zmian Regulaminu, przy czym zmieniony Regulamin będzie miał zastosowanie do Umów zawartych przed wejściem w życie zmian o ile Wystawca wyrazi na to zgodę.

14.3. Zmiany Regulaminu wchodzą w życie z dniem ogłoszenia ich na Stronie Targów.

  

  `}</Markdown>
</Wrapper>

)


export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
  await configure(store, {
    settings: settings,
    preload: []
  })
  
})

export default connect()(PageFaq);
