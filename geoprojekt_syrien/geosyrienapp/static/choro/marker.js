
var newicon = L.icon({
    iconUrl: '/static/choro/bilder/pie_mouse_test.png',
    iconSize:     [20, 20], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    //iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    //popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


//2011
//Österreich
var marker1 = L.marker([47.58,14.13],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Österreich</p>'+'<img src=' + at11 + ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2013 liegen für Österreich keine registrierten Erstanträge vor.</i></span><br><br>');
		sidebar.show();
    });
// Belgien
var marker2 = L.marker([50.63,4.64],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Belgien</p>'+'<img src=' + be11 + ' height="125%" width="100%"/>');
		sidebar.show();
    });

//Bulgarien
var marker3 = L.marker([42.76,25.21],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Bulgarien</p>'+'<img src=' +bu11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Kroatien
var marker4 = L.marker([45.44,17.93],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Kroatien</p><br><br><br><i><span style="font-size:16px">Für den Zeitraum von 2011 bis 2012 liegen für Kroatien keine Daten vor.</i></span>');
		sidebar.show();
    });
//Zypern
var marker5 = L.marker([34.91,32.95],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Zypern</p>'+'<img src=' +zy11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
// Tschechien
var marker6 = L.marker([49.7324,15.3141],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Tschechien</p>'+'<img src=' +cz11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Dänemark
var marker7 = L.marker([55.8011,8.8115],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Dänemark</p>'+'<img src=' +dk11+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Dänemark keine Daten im Bereich “Kinder unter 18 Jahren” vor.</i></span><br><br>');
		sidebar.show();
    });
//Estland
var marker8 = L.marker([58.6842,25.8314],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Estland</p>'+'<img src=' +est1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Estland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Finnland
var marker9 = L.marker([61.921,23.3598],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Finnland</p>'+'<img src=' +fin11+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Finnland keine Daten in den unterschiedlichen Altersgruppen vor.<br>Hinweis: Für das Jahr 2013 liegen für Finnland keine Daten in Bezug auf weibliche Flüchtlige vor. </i></span><br><br>');
		sidebar.show();
    });
//Frankreich
var marker10 = L.marker([46.6206,2.4522],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Frankreich</p>'+'<img src=' +fr11+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Frankreich  keine Daten zu Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Deutschland
var marker11 = L.marker([51.0871,10.3708],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Deutschland</p>'+'<img src=' + de11 + ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Griechenland
var marker12 = L.marker([39.475,22.5819],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Griechenland</p>'+'<img src=' +gr11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Ungarn
var marker13 = L.marker([47.1632,19.3968],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ungarn</p>'+'<img src=' +un11+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2012 liegen für Ungarn keine Daten zu Erstanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Island
var marker14 = L.marker([64.754587, -18.339390],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Island</p>'+'<img src=' +isl1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Island keine Daten zu Folgeanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2014 liegen für Island keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Island unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Irland
var marker15 = L.marker([53.1767,-8.1383],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irland</p>'+'<img src=' +ir11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Italien
var marker16 = L.marker([42.8086,12.5601],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Italien</p>'+'<img src=' +it11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Lettland
var marker17 = L.marker([56.6334,26.4051],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Lettland</p>'+'<img src=' +let1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Lettland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Liechtenstein
var marker18 = L.marker([47.14,9.54],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Liechtenstein</p>'+'<img src=' +lie1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Liechtenstein unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 hat Liechtenstein keine syrischen Flüchtlinge registriert.<br><br>Hinweis:Für das Jahr 2013 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für das Jahr 2015 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Folgeanträgen vor. </i></span><br><br>');
		sidebar.show();
    });
//Litauen
var marker19 = L.marker([55.3267,23.8941],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Litauen</p>'+'<img src=' +lit1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Litauen unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Luxemburg
var marker20 = L.marker([49.7668,6.0718],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Luxemburg</p>'+'<img src=' +lux11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Malta
var marker21 = L.marker([35.879787, 14.443875],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Malta</p>'+'<img src=' +mal11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Niederlande
var marker22 = L.marker([52.1724,5.3228],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Niederlande</p>'+'<img src=' +nl11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Norwegen
var marker23 = L.marker([61.4431,11.4643],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Norwegen</p>'+'<img src=' +nor11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Polen
var marker24 = L.marker([52.1248,19.3943],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Polen</p>'+'<img src=' +pl11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Portugal
var marker25 = L.marker([39.6808,-7.9747],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Portugal</p>'+'<img src=' +por11+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 hat Portugal keine syrischen Flüchtlinge registriert.<br>Hinweis: Für das Jahr 2015 liegen in Portugal keine Daten zur Unterteilung der Geschlechter vor. </i></span><br><br>');
		sidebar.show();
    });
//Rumänien
var marker26 = L.marker([45.8535,24.9729],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Rumänien</p>'+'<img src=' +rum11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Slowakei
var marker27 = L.marker([48.7049,19.4804],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowakei</p>'+'<img src=' +sk1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in der Slowakei unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Slowenien
var marker28 = L.marker([46.0636,14.9403],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowenien</p>'+'<img src=' +slo11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Spanien
var marker29 = L.marker([40.3895,-3.5629],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Spanien</p>'+'<img src=' +sp11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Schweden
var marker30 = L.marker([60.5946,14.372],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweden</p>'+'<img src=' +swe11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Schweiz
var marker31 = L.marker([46.9726,8.2107],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweiz</p>'+'<img src=' +ch11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Groß Britanien
var marker32 = L.marker([52.2411,-0.2307],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Großbritannien</p>'+'<img src=' +gb11+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Türkei
var marker33 = L.marker([38.846893, 35.659720],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Türkei</p>'+'<img src=' +tu11+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für die Türkei keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Ägypten
var marker34 = L.marker([26.193431, 29.851937],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ägypten</p>'+'<img src=' +aeg11+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Ägypten keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Jordanien
var marker35 = L.marker([30.893409, 36.295589],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Jordanien</p>'+'<img src=' +jo11+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Jordanien keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Libanon
var marker36 = L.marker([33.923195, 35.846689],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Libanon</p>'+'<img src=' +lib11+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Libanon keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Irak
var marker37 = L.marker([32.752881, 43.394704],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irak</p>'+'<img src=' +irk11+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Israel
var marker38 = L.marker([31.151942, 34.826074],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Israel</p>'+'<img src=' +is11+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });

var b2011 = L.layerGroup([marker1,marker2,marker3,marker4,marker5,marker6,marker7,marker8,marker9,marker10,marker11,marker12,marker13,marker14,marker15,marker16,marker17,marker18,marker19,marker20,marker21,marker22,marker23,marker24,marker25,marker26,marker27,marker28,marker29,marker30,marker31,marker32,marker33,marker34,marker35,marker36,marker37,marker38]);


//2012
//Österreich
var marker1a = L.marker([47.58,14.13],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Österreich</p>'+'<img src=' +at12+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2013 liegen für Österreich keine registrierten Erstanträge vor.</i></span><br><br>');
		sidebar.show();
    });
// Belgien
var marker2a = L.marker([50.63,4.64],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Belgien</p>'+'<img src=' +be12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });

//Bulgarien
var marker3a = L.marker([42.76,25.21],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Bulgarien</p>'+'<img src=' +bu12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Kroatien
var marker4a = L.marker([45.44,17.93],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Kroatien</p><br><br><br><i><span style="font-size:16px">Für den Zeitraum von 2011 bis 2012 liegen für Kroatien keine Daten vor.</i></span>');
		sidebar.show();
    });
//Zypern
var marker5a = L.marker([34.91,32.95],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Zypern</p>'+'<img src=' +zy12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
// Tschechien
var marker6a = L.marker([49.7324,15.3141],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Tschechien</p>'+'<img src=' +cz12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Dänemark
var marker7a = L.marker([55.8011,8.8115],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Dänemark</p>'+'<img src=' +dk12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Estland
var marker8a = L.marker([58.6842,25.8314],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Estland</p>'+'<img src=' +est1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Estland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Finnland
var marker9a = L.marker([61.921,23.3598],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Finnland</p>'+'<img src=' +fin12+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2013 liegen für Finnland keine Daten in Bezug auf weibliche Flüchtlinge vor.</i></span><br><br>');
		sidebar.show();
    });
//Frankreich
var marker10a = L.marker([46.6206,2.4522],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Frankreich</p>'+'<img src=' +fr12+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Frankreich  keine Daten zu Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Deutschland
var marker11a = L.marker([51.0871,10.3708],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Deutschland</p>'+'<img src=' +de12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Griechenland
var marker12a = L.marker([39.475,22.5819],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Griechenland</p>'+'<img src=' +gr12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Ungarn
var marker13a = L.marker([47.1632,19.3968],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ungarn</p>'+'<img src=' +un12+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2012 liegen für Ungarn keine Daten zu Erstanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Island
var marker14a = L.marker([64.754587, -18.339390],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Island</p>'+'<img src=' +isl1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Island keine Daten zu Folgeanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2014 liegen für Island keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Island unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Irland
var marker15a = L.marker([53.1767,-8.1383],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irland</p>'+'<img src=' +ir12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Italien
var marker16a = L.marker([42.8086,12.5601],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Italien</p>'+'<img src=' +it12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Lettland
var marker17a = L.marker([56.6334,26.4051],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Lettland</p>'+'<img src=' +let1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Lettland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Liechtenstein
var marker18a = L.marker([47.14,9.54],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Liechtenstein</p>'+'<img src=' +lie1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Liechtenstein unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 hat Liechtenstein keine syrischen Flüchtlinge registriert.<br><br>Hinweis:Für das Jahr 2013 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für das Jahr 2015 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Folgeanträgen vor. </i></span><br><br>');
		sidebar.show();
    });
//Litauen
var marker19a = L.marker([55.3267,23.8941],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Litauen</p>'+'<img src=' +lit1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Litauen unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Luxemburg
var marker20a = L.marker([49.7668,6.0718],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Luxemburg</p>'+'<img src=' +lux12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Malta
var marker21a = L.marker([35.879787, 14.443875],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Malta</p>'+'<img src=' +mal12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Niederlande
var marker22a = L.marker([52.1724,5.3228],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Niederlande</p>'+'<img src=' +nl12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Norwegen
var marker23a = L.marker([61.4431,11.4643],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Norwegen</p>'+'<img src=' +nor12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Polen
var marker24a = L.marker([52.1248,19.3943],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Polen</p>'+'<img src=' +pl12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Portugal
var marker25a = L.marker([39.6808,-7.9747],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Portugal</p>'+'<img src=' +por12+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 hat Portugal keine syrischen Flüchtlinge registriert.<br>Hinweis: Für das Jahr 2015 liegen in Portugal keine Daten zur Unterteilung der Geschlechter vor. </i></span><br><br>');
		sidebar.show();
    });
//Rumänien
var marker26a = L.marker([45.8535,24.9729],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Rumänien</p>'+'<img src=' +rum12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Slowakei
var marker27a = L.marker([48.7049,19.4804],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowakei</p>'+'<img src=' +sk1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in der Slowakei unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Slowenien
var marker28a = L.marker([46.0636,14.9403],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowenien</p>'+'<img src=' +slo12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Spanien
var marker29a = L.marker([40.3895,-3.5629],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Spanien</p>'+'<img src=' +sp12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Schweden
var marker30a = L.marker([60.5946,14.372],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweden</p>'+'<img src=' +swe12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Schweiz
var marker31a = L.marker([46.9726,8.2107],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweiz</p>'+'<img src=' +ch12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Groß Britanien
var marker32a = L.marker([52.2411,-0.2307],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Großbritannien</p>'+'<img src=' +gb12+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Türkei
var marker33a = L.marker([38.846893, 35.659720],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Türkei</p>'+'<img src=' +tu12+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für die Türkei leider keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Ägypten
var marker34a = L.marker([26.193431, 29.851937],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ägypten</p>'+'<img src=' +aeg12+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Ägypten keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Jordanien
var marker35a = L.marker([30.893409, 36.295589],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Jordanien</p>'+'<img src=' +jo12+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Jordanien keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Libanon
var marker36a = L.marker([33.923195, 35.846689],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Libanon</p>'+'<img src=' +lib12+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Libanon keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Irak
var marker37a = L.marker([32.752881, 43.394704],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irak</p>'+'<img src=' +irk12+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Israel
var marker38a = L.marker([31.151942, 34.826074],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Israel</p>'+'<img src=' +is12+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });

var b2012 = L.layerGroup([marker1a,marker2a,marker3a,marker4a,marker5a,marker6a,marker7a,marker8a,marker9a,marker10a,marker11a,marker12a,marker13a,marker14a,marker15a,marker16a,marker17a,marker18a,marker19a,marker20a,marker21a,marker22a,marker23a,marker24a,marker25a,marker26a,marker27a,marker28a,marker29a,marker30a,marker31a,marker32a,marker33a,marker34a,marker35a,marker36a,marker37a,marker38a]);

//2013
//Österreich
var marker1b = L.marker([47.58,14.13],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Österreich</p>'+'<img src=' +at13+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2013 liegen für Österreich keine registrierten Erstanträge vor.</i></span><br><br>');
		sidebar.show();
    });
// Belgien
var marker2b = L.marker([50.63,4.64],{icon: newicon}).on('click', function () {
	sidebar.setContent('<p>Belgien</p>'+'<img src=' +be13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });

//Bulgarien
var marker3b = L.marker([42.76,25.21],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Bulgarien</p>'+'<img src=' +bu13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Kroatien
var marker4b = L.marker([45.44,17.93],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Kroatien</p>'+'<img src=' +kro13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Zypern
var marker5b = L.marker([34.91,32.95],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Zypern</p>'+'<img src=' +zy13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
// Tschechien
var marker6b = L.marker([49.7324,15.3141],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Tschechien</p>'+'<img src=' +cz13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Dänemark
var marker7b = L.marker([55.8011,8.8115],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Dänemark</p>'+'<img src=' +dk13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Estland
var marker8b = L.marker([58.6842,25.8314],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Estland</p>'+'<img src=' +est1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Estland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Finnland
var marker9b = L.marker([61.921,23.3598],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Finnland</p>'+'<img src=' +fin13+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2013 liegen für Finnland keine Daten in Bezug auf weibliche Flüchtlinge vor.</i></span><br><br>');
		sidebar.show();
    });
//Frankreich
var marker10b = L.marker([46.6206,2.4522],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Frankreich</p>'+'<img src=' +fr13+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Frankreich  keine Daten zu Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Deutschland
var marker11b = L.marker([51.0871,10.3708],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Deutschland</p>'+'<img src=' +de13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Griechenland
var marker12b = L.marker([39.475,22.5819],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Griechenland</p>'+'<img src=' +gr13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Ungarn
var marker13b = L.marker([47.1632,19.3968],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ungarn</p>'+'<img src=' +un13+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2012 liegen für Ungarn keine Daten zu Erstanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Island
var marker14b = L.marker([64.754587, -18.339390],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Island</p>'+'<img src=' +isl1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Island keine Daten zu Folgeanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2014 liegen für Island keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Island unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Irland
var marker15b = L.marker([53.1767,-8.1383],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irland</p>'+'<img src=' +ir13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Italien
var marker16b = L.marker([42.8086,12.5601],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Italien</p>'+'<img src=' +it13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Lettland
var marker17b = L.marker([56.6334,26.4051],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Lettland</p>'+'<img src=' +let1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Lettland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Liechtenstein
var marker18b = L.marker([47.14,9.54],{icon: newicon}).on('click', function () {
	sidebar.setContent('<p>Liechtenstein</p>'+'<img src=' +lie1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Liechtenstein unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 hat Liechtenstein keine syrischen Flüchtlinge registriert.<br><br>Hinweis:Für das Jahr 2013 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für das Jahr 2015 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Folgeanträgen vor. </i></span><br><br>');
		sidebar.show();
    });
//Litauen
var marker19b = L.marker([55.3267,23.8941],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Litauen</p>'+'<img src=' +lit1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Litauen unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Luxemburg
var marker20b = L.marker([49.7668,6.0718],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Luxemburg</p>'+'<img src=' +lux13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Malta
var marker21b = L.marker([35.879787, 14.443875],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Malta</p>'+'<img src=' +mal13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Niederlande
var marker22b = L.marker([52.1724,5.3228],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Niederlande</p>'+'<img src=' +nl13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Norwegen
var marker23b = L.marker([61.4431,11.4643],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Norwegen</p>'+'<img src=' +nor13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Polen
var marker24b = L.marker([52.1248,19.3943],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Polen</p>'+'<img src=' +pl13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Portugal
var marker25b = L.marker([39.6808,-7.9747],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Portugal</p>'+'<img src=' +por13+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 hat Portugal keine syrischen Flüchtlinge registriert.<br>Hinweis: Für das Jahr 2015 liegen in Portugal keine Daten zur Unterteilung der Geschlechter vor. </i></span><br><br>');
		sidebar.show();
    });
//Rumänien
var marker26b = L.marker([45.8535,24.9729],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Rumänien</p>'+'<img src=' +rum13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Slowakei
var marker27b = L.marker([48.7049,19.4804],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowakei</p>'+'<img src=' +sk1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in der Slowakei unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für das Jahr 2013 liegen in der Slowakei leider keine Daten zur Unterteilung der Geschlechter vor.</i></span><br><br>');
		sidebar.show();
    });
//Slowenien
var marker28b = L.marker([46.0636,14.9403],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowenien</p>'+'<img src=' +slo13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Spanien
var marker29b = L.marker([40.3895,-3.5629],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Spanien</p>'+'<img src=' +sp13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Schweden
var marker30b = L.marker([60.5946,14.372],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweden</p>'+'<img src=' +swe13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Schweiz
var marker31b = L.marker([46.9726,8.2107],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweiz</p>'+'<img src=' +ch13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Groß Britanien
var marker32b = L.marker([52.2411,-0.2307],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Großbritannien</p>'+'<img src=' +gb13+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Türkei
var marker33b = L.marker([38.846893, 35.659720],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Türkei</p>'+'<img src=' +tu13+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für die Türkei leider keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Ägypten
var marker34b = L.marker([26.193431, 29.851937],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ägypten</p>'+'<img src=' +aeg13+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Ägypten keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Jordanien
var marker35b = L.marker([30.893409, 36.295589],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Jordanien</p>'+'<img src=' +jo13+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Jordanien keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Libanon
var marker36b = L.marker([33.923195, 35.846689],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Libanon</p>'+'<img src=' +lib13+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Libanon keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Irak
var marker37b = L.marker([32.752881, 43.394704],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irak</p>'+'<img src=' +irk13+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Israel
var marker38b = L.marker([31.151942, 34.826074],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Israel</p>'+'<img src=' +is13+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });

var b2013 = L.layerGroup([marker1b,marker2b,marker3b,marker4b,marker5b,marker6b,marker7b,marker8b,marker9b,marker10b,marker11b,marker12b,marker13b,marker14b,marker15b,marker16b,marker17b,marker18b,marker19b,marker20b,marker21b,marker22b,marker23b,marker24b,marker25b,marker26b,marker27b,marker28b,marker29b,marker30b,marker31b,marker32b,marker33b,marker34b,marker35b,marker36b,marker37b,marker38b]);


//2014
//Österreich
var marker1c = L.marker([47.58,14.13],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Österreich</p>'+'<img src=' +at14+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2013 liegen für Österreich keine registrierten Erstanträge vor.</i></span><br><br>');
		sidebar.show();
    });
// Belgien
var marker2c = L.marker([50.63,4.64],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Belgien</p>'+'<img src=' +be14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });

//Bulgarien
var marker3c = L.marker([42.76,25.21],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Bulgarien</p>'+'<img src=' +bu14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Kroatien
var marker4c = L.marker([45.44,17.93],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Kroatien</p>'+'<img src=' +kro14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Zypern
var marker5c = L.marker([34.91,32.95],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Zypern</p>'+'<img src=' +zy14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
// Tschechien
var marker6c = L.marker([49.7324,15.3141],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Tschechien</p>'+'<img src=' +cz14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Dänemark
var marker7c = L.marker([55.8011,8.8115],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Dänemark</p>'+'<img src=' +dk14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Estland
var marker8c = L.marker([58.6842,25.8314],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Estland</p>'+'<img src=' +est1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Estland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Finnland
var marker9c = L.marker([61.921,23.3598],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Finnland</p>'+'<img src=' +fin14+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2013 liegen für Finnland keine Daten in Bezug auf weibliche Flüchtlinge vor.</i></span><br><br>');
		sidebar.show();
    });
//Frankreich
var marker10c = L.marker([46.6206,2.4522],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Frankreich</p>'+'<img src=' +fr14+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Frankreich  keine Daten zu Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Deutschland
var marker11c = L.marker([51.0871,10.3708],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Deutschland</p>'+'<img src=' +de14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Griechenland
var marker12c = L.marker([39.475,22.5819],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Griechenland</p>'+'<img src=' +gr14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Ungarn
var marker13c = L.marker([47.1632,19.3968],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ungarn</p>'+'<img src=' +un14+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2012 liegen für Ungarn keine Daten zu Erstanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Island
var marker14c = L.marker([64.754587, -18.339390],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Island</p>'+'<img src=' +isl1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Island keine Daten zu Folgeanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2014 liegen für Island keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Island unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Irland
var marker15c = L.marker([53.1767,-8.1383],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irland</p>'+'<img src=' +ir14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Italien
var marker16c = L.marker([42.8086,12.5601],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Italien</p>'+'<img src=' +it14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Lettland
var marker17c = L.marker([56.6334,26.4051],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Lettland</p>'+'<img src=' +let1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Lettland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Liechtenstein
var marker18c = L.marker([47.14,9.54],{icon: newicon}).on('click', function () {
	sidebar.setContent('<p>Liechtenstein</p>'+'<img src=' +lie1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Liechtenstein unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 hat Liechtenstein keine syrischen Flüchtlinge registriert.<br><br>Hinweis:Für das Jahr 2013 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für das Jahr 2015 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Folgeanträgen vor. </i></span><br><br>');
		sidebar.show();
    });
//Litauen
var marker19c = L.marker([55.3267,23.8941],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Litauen</p>'+'<img src=' +lit1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Litauen unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Luxemburg
var marker20c = L.marker([49.7668,6.0718],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Luxemburg</p>'+'<img src=' +lux14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Malta
var marker21c = L.marker([35.879787, 14.443875],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Malta</p>'+'<img src=' +mal14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Niederlande
var marker22c = L.marker([52.1724,5.3228],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Niederlande</p>'+'<img src=' +nl14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Norwegen
var marker23c = L.marker([61.4431,11.4643],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Norwegen</p>'+'<img src=' +nor14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Polen
var marker24c = L.marker([52.1248,19.3943],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Polen</p>'+'<img src=' +pl14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Portugal
var marker25c = L.marker([39.6808,-7.9747],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Portugal</p>'+'<img src=' +por14+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 hat Portugal keine syrischen Flüchtlinge registriert.<br>Hinweis: Für das Jahr 2015 liegen in Portugal keine Daten zur Unterteilung der Geschlechter vor. </i></span><br><br>');
		sidebar.show();
    });
//Rumänien
var marker26c = L.marker([45.8535,24.9729],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Rumänien</p>'+'<img src=' +rum14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Slowakei
var marker27c = L.marker([48.7049,19.4804],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowakei</p>'+'<img src=' +sk1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in der Slowakei unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Slowenien
var marker28c = L.marker([46.0636,14.9403],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowenien</p>'+'<img src=' +slo14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Spanien
var marker29c = L.marker([40.3895,-3.5629],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Spanien</p>'+'<img src=' +sp14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Schweden
var marker30c = L.marker([60.5946,14.372],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweden</p>'+'<img src=' +swe14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Schweiz
var marker31c = L.marker([46.9726,8.2107],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweiz</p>'+'<img src=' +ch14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Groß Britanien
var marker32c = L.marker([52.2411,-0.2307],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Großbritannien</p>'+'<img src=' +gb14+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Türkei
var marker33c = L.marker([38.846893, 35.659720],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Türkei</p>'+'<img src=' +tu14+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für die Türkei leider keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Ägypten
var marker34c = L.marker([26.193431, 29.851937],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ägypten</p>'+'<img src=' +aeg14+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Ägypten keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Jordanien
var marker35c = L.marker([30.893409, 36.295589],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Jordanien</p>'+'<img src=' +jo14+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Jordanien keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Libanon
var marker36c = L.marker([33.923195, 35.846689],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Libanon</p>'+'<img src=' +lib14+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Libanon keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Irak
var marker37c = L.marker([32.752881, 43.394704],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irak</p>'+'<img src=' +irk14+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Israel
var marker38c = L.marker([31.151942, 34.826074],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Israel</p>'+'<img src=' +is14+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });

var b2014 = L.layerGroup([marker1c,marker2c,marker3c,marker4c,marker5c,marker6c,marker7c,marker8c,marker9c,marker10c,marker11c,marker12c,marker13c,marker14c,marker15c,marker16c,marker17c,marker18c,marker19c,marker20c,marker21c,marker22c,marker23c,marker24c,marker25c,marker26c,marker27c,marker28c,marker29c,marker30c,marker31c,marker32c,marker33c,marker34c,marker35c,marker36c,marker37c,marker38c]);

//2015
//Österreich
var marker1d = L.marker([47.58,14.13],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Österreich</p>'+'<img src=' +at15+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2013 liegen für Österreich keine registrierten Erstanträge vor.</i></span><br><br>');
		sidebar.show();
    });
// Belgien
var marker2d = L.marker([50.63,4.64],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Belgien</p>'+'<img src=' +be15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });

//Bulgarien
var marker3d = L.marker([42.76,25.21],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Bulgarien</p>'+'<img src=' +bu15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Kroatien
var marker4d = L.marker([45.44,17.93],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Kroatien</p>'+'<img src=' +kro15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Zypern
var marker5d = L.marker([34.91,32.95],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Zypern</p>'+'<img src=' +zy15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
// Tschechien
var marker6d = L.marker([49.7324,15.3141],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Tschechien</p>'+'<img src=' +cz15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Dänemark
var marker7d = L.marker([55.8011,8.8115],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Dänemark</p>'+'<img src=' +dk15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Estland
var marker8d = L.marker([58.6842,25.8314],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Estland</p>'+'<img src=' +est1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Estland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Finnland
var marker9d = L.marker([61.921,23.3598],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Finnland</p>'+'<img src=' +fin15+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2013 liegen für Finnland keine Daten in Bezug auf weibliche Flüchtlinge vor.</i></span><br><br>');
		sidebar.show();
    });
//Frankreich
var marker10d = L.marker([46.6206,2.4522],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Frankreich</p>'+'<img src=' +fr15+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Frankreich  keine Daten zu Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Deutschland
var marker11d = L.marker([51.0871,10.3708],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Deutschland</p>'+'<img src=' +de15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Griechenland
var marker12d = L.marker([39.475,22.5819],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Griechenland</p>'+'<img src=' +gr15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Ungarn
var marker13d = L.marker([47.1632,19.3968],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ungarn</p>'+'<img src=' +un15+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2012 liegen für Ungarn keine Daten zu Erstanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Island
var marker14d = L.marker([64.754587, -18.339390],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Island</p>'+'<img src=' +isl1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Island keine Daten zu Folgeanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2014 liegen für Island keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Island unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Irland
var marker15d = L.marker([53.1767,-8.1383],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irland</p>'+'<img src=' +ir15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Italien
var marker16d = L.marker([42.8086,12.5601],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Italien</p>'+'<img src=' +it15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Lettland
var marker17d = L.marker([56.6334,26.4051],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Lettland</p>'+'<img src=' +let1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Lettland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Liechtenstein
var marker18d = L.marker([47.14,9.54],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Liechtenstein</p>'+'<img src=' +lie1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Liechtenstein unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 hat Liechtenstein keine syrischen Flüchtlinge registriert.<br><br>Hinweis:Für das Jahr 2013 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für das Jahr 2015 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Folgeanträgen vor. </i></span><br><br>');
		sidebar.show();
    });
//Litauen
var marker19d = L.marker([55.3267,23.8941],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Litauen</p>'+'<img src=' +lit1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Litauen unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Luxemburg
var marker20d = L.marker([49.7668,6.0718],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Luxemburg</p>'+'<img src=' +lux15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Malta
var marker21d = L.marker([35.879787, 14.443875],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Malta</p>'+'<img src=' +mal15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Niederlande
var marker22d = L.marker([52.1724,5.3228],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Niederlande</p>'+'<img src=' +nl15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Norwegen
var marker23d = L.marker([61.4431,11.4643],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Norwegen</p>'+'<img src=' +nor15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Polen
var marker24d = L.marker([52.1248,19.3943],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Polen</p>'+'<img src=' +pl15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Portugal
var marker25d = L.marker([39.6808,-7.9747],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Portugal</p>'+'<img src=' +por15+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 hat Portugal keine syrischen Flüchtlinge registriert.<br>Hinweis: Für das Jahr 2015 liegen in Portugal keine Daten zur Unterteilung der Geschlechter vor. </i></span><br><br>');
		sidebar.show();
    });
//Rumänien
var marker26d = L.marker([45.8535,24.9729],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Rumänien</p>'+'<img src=' +rum15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Slowakei
var marker27d = L.marker([48.7049,19.4804],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowakei</p>'+'<img src=' +sk1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in der Slowakei unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Slowenien
var marker28d = L.marker([46.0636,14.9403],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowenien</p>'+'<img src=' +slo15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Spanien
var marker29d = L.marker([40.3895,-3.5629],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Spanien</p>'+'<img src=' +sp15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Schweden
var marker30d = L.marker([60.5946,14.372],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweden</p>'+'<img src=' +swe15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Schweiz
var marker31d = L.marker([46.9726,8.2107],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweiz</p>'+'<img src=' +ch15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Groß Britanien
var marker32d = L.marker([52.2411,-0.2307],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Großbritannien</p>'+'<img src=' +gb15+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Türkei
var marker33d = L.marker([38.846893, 35.659720],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Türkei</p>'+'<img src=' +tu15+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für die Türkei leider keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Ägypten
var marker34d = L.marker([26.193431, 29.851937],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ägypten</p>'+'<img src=' +aeg15+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Ägypten keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Jordanien
var marker35d = L.marker([30.893409, 36.295589],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Jordanien</p>'+'<img src=' +jo15+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Jordanien keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Libanon
var marker36d = L.marker([33.923195, 35.846689],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Libanon</p>'+'<img src=' +lib15+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Libanon keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Irak
var marker37d = L.marker([32.752881, 43.394704],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irak</p>'+'<img src=' +irk15+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Israel
var marker38d = L.marker([31.151942, 34.826074],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Israel</p><br><br><i><span style="font-size:12px">Hinweis: Für den Zeitraum 2015 bis 2018 liegen für Israel keine Daten vor.</i></span><br><br>');
		sidebar.show();
    });

var b2015 = L.layerGroup([marker1d,marker2d,marker3d,marker4d,marker5d,marker6d,marker7d,marker8d,marker9d,marker10d,marker11d,marker12d,marker13d,marker14d,marker15d,marker16d,marker17d,marker18d,marker19d,marker20d,marker21d,marker22d,marker23d,marker24d,marker25d,marker26d,marker27d,marker28d,marker29d,marker30d,marker31d,marker32d,marker33d,marker34d,marker35d,marker36d,marker37d,marker38d]);

//2016
//Österreich
var marker1e = L.marker([47.58,14.13],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Österreich</p>'+'<img src=' +at16+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2013 liegen für Österreich keine registrierten Erstanträge vor.</i></span><br><br>');
		sidebar.show();
    });
// Belgien
var marker2e = L.marker([50.63,4.64],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Belgien</p>'+'<img src=' +be16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });

//Bulgarien
var marker3e = L.marker([42.76,25.21],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Bulgarien</p>'+'<img src=' +bu16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Kroatien
var marker4e = L.marker([45.44,17.93],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Kroatien</p>'+'<img src=' +kro16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Zypern
var marker5e = L.marker([34.91,32.95],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Zypern</p>'+'<img src=' +zy16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
// Tschechien
var marker6e = L.marker([49.7324,15.3141],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Tschechien</p>'+'<img src=' +cz16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Dänemark
var marker7e = L.marker([55.8011,8.8115],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Dänemark</p>'+'<img src=' +dk16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Estland
var marker8e = L.marker([58.6842,25.8314],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Estland</p>'+'<img src=' +est1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Estland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Finnland
var marker9e = L.marker([61.921,23.3598],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Finnland</p>'+'<img src=' +fin16+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2013 liegen für Finnland keine Daten in Bezug auf weibliche Flüchtlinge vor.</i></span><br><br>');
		sidebar.show();
    });
//Frankreich
var marker10e = L.marker([46.6206,2.4522],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Frankreich</p>'+'<img src=' +fr16+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Frankreich  keine Daten zu Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Deutschland
var marker11e = L.marker([51.0871,10.3708],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Deutschland</p>'+'<img src=' +de16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Griechenland
var marker12e = L.marker([39.475,22.5819],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Griechenland</p>'+'<img src=' +gr16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Ungarn
var marker13e = L.marker([47.1632,19.3968],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ungarn</p>'+'<img src=' +un16+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2012 liegen für Ungarn keine Daten zu Erstanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Island
var marker14e = L.marker([64.754587, -18.339390],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Island</p>'+'<img src=' +isl1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Island keine Daten zu Folgeanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2014 liegen für Island keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Island unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Irland
var marker15e = L.marker([53.1767,-8.1383],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irland</p>'+'<img src=' +ir16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Italien
var marker16e = L.marker([42.8086,12.5601],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Italien</p>'+'<img src=' +it16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Lettland
var marker17e = L.marker([56.6334,26.4051],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Lettland</p>'+'<img src=' +let1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Lettland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Liechtenstein
var marker18e = L.marker([47.14,9.54],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Liechtenstein</p>'+'<img src=' +lie1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Liechtenstein unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 hat Liechtenstein keine syrischen Flüchtlinge registriert.<br><br>Hinweis:Für das Jahr 2013 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für das Jahr 2015 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Folgeanträgen vor. </i></span><br><br>');
		sidebar.show();
    });
//Litauen
var marker19e = L.marker([55.3267,23.8941],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Litauen</p>'+'<img src=' +lit1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Litauen unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Luxemburg
var marker20e = L.marker([49.7668,6.0718],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Luxemburg</p>'+'<img src=' +lux16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Malta
var marker21e = L.marker([35.879787, 14.443875],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Malta</p>'+'<img src=' +mal16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Niederlande
var marker22e = L.marker([52.1724,5.3228],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Niederlande</p>'+'<img src=' +nl16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Norwegen
var marker23e = L.marker([61.4431,11.4643],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Norwegen</p>'+'<img src=' +nor16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Polen
var marker24e = L.marker([52.1248,19.3943],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Polen</p>'+'<img src=' +pl16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Portugal
var marker25e = L.marker([39.6808,-7.9747],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Portugal</p>'+'<img src=' +por16+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 hat Portugal keine syrischen Flüchtlinge registriert.<br>Hinweis: Für das Jahr 2015 liegen in Portugal keine Daten zur Unterteilung der Geschlechter vor. </i></span><br><br>');
		sidebar.show();
    });
//Rumänien
var marker26e = L.marker([45.8535,24.9729],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Rumänien</p>'+'<img src=' +rum16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Slowakei
var marker27e = L.marker([48.7049,19.4804],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowakei</p>'+'<img src=' +sk1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in der Slowakei unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Slowenien
var marker28e = L.marker([46.0636,14.9403],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowenien</p>'+'<img src=' +slo16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Spanien
var marker29e = L.marker([40.3895,-3.5629],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Spanien</p>'+'<img src=' +sp16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Schweden
var marker30e = L.marker([60.5946,14.372],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweden</p>'+'<img src=' +swe16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Schweiz
var marker31e = L.marker([46.9726,8.2107],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweiz</p>'+'<img src=' +ch16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Groß Britanien
var marker32e = L.marker([52.2411,-0.2307],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Großbritannien</p>'+'<img src=' +gb16+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Türkei
var marker33e = L.marker([38.846893, 35.659720],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Türkei</p>'+'<img src=' +tu16+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für die Türkei leider keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Ägypten
var marker34e = L.marker([26.193431, 29.851937],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ägypten</p>'+'<img src=' +aeg16+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Ägypten keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Jordanien
var marker35e = L.marker([30.893409, 36.295589],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Jordanien</p>'+'<img src=' +jo16+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Jordanien keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Libanon
var marker36e = L.marker([33.923195, 35.846689],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Libanon</p>'+'<img src=' +lib16+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Libanon keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Irak
var marker37e = L.marker([32.752881, 43.394704],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irak</p>'+'<img src=' +irk16+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Israel
var marker38e = L.marker([31.151942, 34.826074],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Israel</p><br><br><i><span style="font-size:12px">Hinweis: Für den Zeitraum 2015 bis 2018 liegen für Israel keine Daten vor.</i></span><br><br>');
		sidebar.show();
    });

var b2016 = L.layerGroup([marker1e,marker2e,marker3e,marker4e,marker5e,marker6e,marker7e,marker8e,marker9e,marker10e,marker11e,marker12e,marker13e,marker14e,marker15e,marker16e,marker17e,marker18e,marker19e,marker20e,marker21e,marker22e,marker23e,marker24e,marker25e,marker26e,marker27e,marker28e,marker29e,marker30e,marker31e,marker32e,marker33e,marker34e,marker35e,marker36e,marker37e,marker38e]);

//2017
//Österreich
var marker1f = L.marker([47.58,14.13],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Österreich</p>'+'<img src=' +at17+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2013 liegen für Österreich keine registrierten Erstanträge vor.</i></span><br><br>');
		sidebar.show();
    });
// Belgien
var marker2f = L.marker([50.63,4.64],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Belgien</p>'+'<img src=' +be17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });

//Bulgarien
var marker3f = L.marker([42.76,25.21],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Bulgarien</p>'+'<img src=' +bu17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Kroatien
var marker4f = L.marker([45.44,17.93],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Kroatien</p>'+'<img src=' +kro17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Zypern
var marker5f = L.marker([34.91,32.95],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Zypern</p>'+'<img src=' +zy17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
// Tschechien
var marker6f = L.marker([49.7324,15.3141],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Tschechien</p>'+'<img src=' +cz17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Dänemark
var marker7f = L.marker([55.8011,8.8115],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Dänemark</p>'+'<img src=' +dk17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Estland
var marker8f = L.marker([58.6842,25.8314],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Estland</p>'+'<img src=' +est1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Estland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Finnland
var marker9f = L.marker([61.921,23.3598],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Finnland</p>'+'<img src=' +fin17+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2013 liegen für Finnland keine Daten in Bezug auf weibliche Flüchtlinge vor.</i></span><br><br>');
		sidebar.show();
    });
//Frankreich
var marker10f = L.marker([46.6206,2.4522],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Frankreich</p>'+'<img src=' +fr17+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Frankreich  keine Daten zu Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Deutschland
var marker11f = L.marker([51.0871,10.3708],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Deutschland</p>'+'<img src=' +de17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Griechenland
var marker12f = L.marker([39.475,22.5819],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Griechenland</p>'+'<img src=' +gr17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Ungarn
var marker13f = L.marker([47.1632,19.3968],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ungarn</p>'+'<img src=' +un17+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2012 liegen für Ungarn keine Daten zu Erstanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Island
var marker14f = L.marker([64.754587, -18.339390],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Island</p>'+'<img src=' +isl1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Island keine Daten zu Folgeanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2014 liegen für Island keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Island unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Irland
var marker15f = L.marker([53.1767,-8.1383],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irland</p>'+'<img src=' +ir17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Italien
var marker16f = L.marker([42.8086,12.5601],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Italien</p>'+'<img src=' +it17+ ' height="125%" width="100%"/>'+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Lettland
var marker17f = L.marker([56.6334,26.4051],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Lettland</p>'+'<img src=' +let1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Lettland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Liechtenstein
var marker18f = L.marker([47.14,9.54],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Liechtenstein</p>'+'<img src=' +lie1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Liechtenstein unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 hat Liechtenstein keine syrischen Flüchtlinge registriert.<br><br>Hinweis:Für das Jahr 2013 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für das Jahr 2015 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Folgeanträgen vor. </i></span><br><br>');
		sidebar.show();
    });
//Litauen
var marker19f = L.marker([55.3267,23.8941],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Litauen</p>'+'<img src=' +lit1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Litauen unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Luxemburg
var marker20f = L.marker([49.7668,6.0718],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Luxemburg</p>'+'<img src=' +lux17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Malta
var marker21f = L.marker([35.879787, 14.443875],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Malta</p>'+'<img src=' +mal17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Niederlande
var marker22f = L.marker([52.1724,5.3228],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Niederlande</p>'+'<img src=' +nl17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Norwegen
var marker23f = L.marker([61.4431,11.4643],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Norwegen</p>'+'<img src=' +nor17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Polen
var marker24f = L.marker([52.1248,19.3943],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Polen</p>'+'<img src=' +pl17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Portugal
var marker25f = L.marker([39.6808,-7.9747],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Portugal</p>'+'<img src=' +por17+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 hat Portugal keine syrischen Flüchtlinge registriert.<br>Hinweis: Für das Jahr 2015 liegen in Portugal keine Daten zur Unterteilung der Geschlechter vor. </i></span><br><br>');
		sidebar.show();
    });
//Rumänien
var marker26f = L.marker([45.8535,24.9729],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Rumänien</p>'+'<img src=' +rum17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Slowakei
var marker27f = L.marker([48.7049,19.4804],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowakei</p>'+'<img src=' +sk1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in der Slowakei unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Slowenien
var marker28f = L.marker([46.0636,14.9403],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowenien</p>'+'<img src=' +slo17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Spanien
var marker29f = L.marker([40.3895,-3.5629],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Spanien</p>'+'<img src=' +sp17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Schweden
var marker30f = L.marker([60.5946,14.372],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweden</p>'+'<img src=' +swe17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Schweiz
var marker31f = L.marker([46.9726,8.2107],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweiz</p>'+'<img src=' +ch17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Groß Britanien
var marker32f = L.marker([52.2411,-0.2307],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Großbritannien</p>'+'<img src=' +gb17+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Türkei
var marker33f = L.marker([38.846893, 35.659720],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Türkei</p>'+'<img src=' +tu17+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für die Türkei leider keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Ägypten
var marker34f = L.marker([26.193431, 29.851937],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ägypten</p>'+'<img src=' +aeg17+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Ägypten keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Jordanien
var marker35f = L.marker([30.893409, 36.295589],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Jordanien</p>'+'<img src=' +jo17+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Jordanien keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Libanon
var marker36f = L.marker([33.923195, 35.846689],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Libanon</p>'+'<img src=' +lib17+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Libanon keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Irak
var marker37f = L.marker([32.752881, 43.394704],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irak</p>'+'<img src=' +irk17+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Israel
var marker38f = L.marker([31.151942, 34.826074],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Israel</p><br><br><i><span style="font-size:12px">Hinweis: Für den Zeitraum 2015 bis 2018 liegen für Israel keine Daten vor.</i></span><br><br>');
		sidebar.show();
    });

var b2017 = L.layerGroup([marker1f,marker2f,marker3f,marker4f,marker5f,marker6f,marker7f,marker8f,marker9f,marker10f,marker11f,marker12f,marker13f,marker14f,marker15f,marker16f,marker17f,marker18f,marker19f,marker20f,marker21f,marker22f,marker23f,marker24f,marker25f,marker26f,marker27f,marker28f,marker29f,marker30f,marker31f,marker32f,marker33f,marker34f,marker35f,marker36f,marker37f,marker38f]);

//2018
//Österreich
var marker1g = L.marker([47.58,14.13],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Österreich</p>'+'<img src=' +at18+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2013 liegen für Österreich keine registrierten Erstanträge vor.</i></span><br><br>');
		sidebar.show();
    });
// Belgien
var marker2g = L.marker([50.63,4.64],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Belgien</p>'+'<img src=' +be18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });

//Bulgarien
var marker3g = L.marker([42.76,25.21],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Bulgarien</p>'+'<img src=' +bu18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Kroatien
var marker4g = L.marker([45.44,17.93],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Kroatien</p>'+'<img src=' +kro18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Zypern
var marker5g = L.marker([34.91,32.95],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Zypern</p>'+'<img src=' +zy18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
// Tschechien
var marker6g = L.marker([49.7324,15.3141],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Tschechien</p>'+'<img src=' +cz18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Dänemark
var marker7g = L.marker([55.8011,8.8115],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Dänemark</p>'+'<img src=' +dk18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Estland
var marker8g = L.marker([58.6842,25.8314],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Estland</p>'+'<img src=' +est1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Estland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Finnland
var marker9g = L.marker([61.921,23.3598],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Finnland</p>'+'<img src=' +fin18+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2013 liegen für Finnland keine Daten in Bezug auf weibliche Flüchtlinge vor.</i></span><br><br>');
		sidebar.show();
    });
//Frankreich
var marker10g = L.marker([46.6206,2.4522],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Frankreich</p>'+'<img src=' +fr18+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Frankreich  keine Daten zu Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Deutschland
var marker11g = L.marker([51.0871,10.3708],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Deutschland</p>'+'<img src=' +de18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Griechenland
var marker12g = L.marker([39.475,22.5819],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Griechenland</p>'+'<img src=' +gr18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Ungarn
var marker13g = L.marker([47.1632,19.3968],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ungarn</p>'+'<img src=' +un18+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2012 liegen für Ungarn keine Daten zu Erstanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Island
var marker14g = L.marker([64.754587, -18.339390],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Island</p>'+'<img src=' +isl1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Island keine Daten zu Folgeanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2014 liegen für Island keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Island unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Irland
var marker15g = L.marker([53.1767,-8.1383],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irland</p>'+'<img src=' +ir18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Italien
var marker16g = L.marker([42.8086,12.5601],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Italien</p>'+'<img src=' +it18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Lettland
var marker17g = L.marker([56.6334,26.4051],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Lettland</p>'+'<img src=' +let1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Lettland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Liechtenstein
var marker18g = L.marker([47.14,9.54],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Liechtenstein</p>'+'<img src=' +lie1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Liechtenstein unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 hat Liechtenstein keine syrischen Flüchtlinge registriert.<br><br>Hinweis:Für das Jahr 2013 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für das Jahr 2015 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Folgeanträgen vor. </i></span><br><br>');
		sidebar.show();
    });
//Litauen
var marker19g = L.marker([55.3267,23.8941],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Litauen</p>'+'<img src=' +lit1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Litauen unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Luxemburg
var marker20g = L.marker([49.7668,6.0718],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Luxemburg</p>'+'<img src=' +lux18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Malta
var marker21g = L.marker([35.879787, 14.443875],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Malta</p>'+'<img src=' +mal18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Niederlande
var marker22g = L.marker([52.1724,5.3228],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Niederlande</p>'+'<img src=' +nl18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Norwegen
var marker23g = L.marker([61.4431,11.4643],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Norwegen</p>'+'<img src=' +nor18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Polen
var marker24g = L.marker([52.1248,19.3943],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Polen</p>'+'<img src=' +pl18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Portugal
var marker25g = L.marker([39.6808,-7.9747],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Portugal</p>'+'<img src=' +por18+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 hat Portugal keine syrischen Flüchtlinge registriert.<br>Hinweis: Für das Jahr 2015 liegen in Portugal keine Daten zur Unterteilung der Geschlechter vor. </i></span><br><br>');
		sidebar.show();
    });
//Rumänien
var marker26g = L.marker([45.8535,24.9729],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Rumänien</p>'+'<img src=' +rum18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Slowakei
var marker27g = L.marker([48.7049,19.4804],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowakei</p>'+'<img src=' +sk1118+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in der Slowakei unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Slowenien
var marker28g = L.marker([46.0636,14.9403],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowenien</p>'+'<img src=' +slo18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Spanien
var marker29g = L.marker([40.3895,-3.5629],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Spanien</p>'+'<img src=' +sp18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Schweden
var marker30g = L.marker([60.5946,14.372],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweden</p>'+'<img src=' +swe18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Schweiz
var marker31g = L.marker([46.9726,8.2107],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweiz</p>'+'<img src=' +ch18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Groß Britanien
var marker32g = L.marker([52.2411,-0.2307],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Großbritannien</p>'+'<img src=' +gb18+ ' height="125%" width="100%"/>');
		sidebar.show();
    });
//Türkei
var marker33g = L.marker([38.846893, 35.659720],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Türkei</p>'+'<img src=' +tu18+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für die Türkei leider keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Ägypten
var marker34g = L.marker([26.193431, 29.851937],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ägypten</p>'+'<img src=' +aeg18+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Ägypten keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Jordanien
var marker35g = L.marker([30.893409, 36.295589],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Jordanien</p>'+'<img src=' +jo18+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Jordanien keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Libanon
var marker36g = L.marker([33.923195, 35.846689],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Libanon</p>'+'<img src=' +lib18+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Libanon keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Irak
var marker37g = L.marker([32.752881, 43.394704],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irak</p>'+'<img src=' +irk18+ ' height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Israel
var marker38g = L.marker([31.151942, 34.826074],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Israel</p><br><br><i><span style="font-size:12px">Hinweis: Für den Zeitraum 2015 bis 2018 liegen für Israel keine Daten vor.</i></span><br><br>');
		sidebar.show();
    });

var b2018 = L.layerGroup([marker1g,marker2g,marker3g,marker4g,marker5g,marker6g,marker7g,marker8g,marker9g,marker10g,marker11g,marker12g,marker13g,marker14g,marker15g,marker16g,marker17g,marker18g,marker19g,marker20g,marker21g,marker22g,marker23g,marker24g,marker25g,marker26g,marker27g,marker28g,marker29g,marker30g,marker31g,marker32g,marker33g,marker34g,marker35g,marker36g,marker37g,marker38g]);
