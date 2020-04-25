
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
		sidebar.setContent('<p>Österreich</p>'+'<img src=' + at11 + 'height="125%" width="100%"/>'+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2013 liegen für Österreich keine registrierten Erstanträge vor.</i></span><br><br>');
		sidebar.show();
    });
// Belgien
var marker2 = L.marker([50.63,4.64],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Belgien</p>'+be11);
		sidebar.show();
    });

//Bulgarien
var marker3 = L.marker([42.76,25.21],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Bulgarien</p>'+bu11);
		sidebar.show();
    });
//Kroatien
var marker4 = L.marker([45.44,17.93],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Kroatien</p><br><br><br><i><span style="font-size:16px">Für den Zeitraum von 2011 bis 2012 liegen für Kroatien keine Daten vor.</i></span>');
		sidebar.show();
    });
//Zypern
var marker5 = L.marker([34.91,32.95],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Zypern</p>'+zy11);
		sidebar.show();
    });
// Tschechien
var marker6 = L.marker([49.7324,15.3141],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Tschechien</p>'+cz11);
		sidebar.show();
    });
//Dänemark
var marker7 = L.marker([55.8011,8.8115],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Dänemark</p>'+dk11+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Dänemark keine Daten im Bereich “Kinder unter 18 Jahren” vor.</i></span><br><br>');
		sidebar.show();
    });
//Estland
var marker8 = L.marker([58.6842,25.8314],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Estland</p>'+est1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Estland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Finnland
var marker9 = L.marker([61.921,23.3598],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Finnland</p>'+fin11+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Finnland keine Daten in den unterschiedlichen Altersgruppen vor.<br>Hinweis: Für das Jahr 2013 liegen für Finnland keine Daten in Bezug auf weibliche Flüchtlige vor. </i></span><br><br>');
		sidebar.show();
    });
//Frankreich
var marker10 = L.marker([46.6206,2.4522],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Frankreich</p>'+fr11+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Frankreich  keine Daten zu Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Deutschland
var marker11 = L.marker([51.0871,10.3708],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Deutschland</p>'+'<img src=' + de11 + 'height="125%" width="100%"/>');
		sidebar.show();
    });
//Griechenland
var marker12 = L.marker([39.475,22.5819],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Griechenland</p>'+gr11);
		sidebar.show();
    });
//Ungarn
var marker13 = L.marker([47.1632,19.3968],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ungarn</p>'+un11+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2012 liegen für Ungarn keine Daten zu Erstanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Island
var marker14 = L.marker([64.754587, -18.339390],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Island</p>'+isl1118+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Island keine Daten zu Folgeanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2014 liegen für Island keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Island unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Irland
var marker15 = L.marker([53.1767,-8.1383],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irland</p>'+ir11);
		sidebar.show();
    });
//Italien
var marker16 = L.marker([42.8086,12.5601],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Italien</p>'+it11);
		sidebar.show();
    });
//Lettland
var marker17 = L.marker([56.6334,26.4051],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Lettland</p>'+let1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Lettland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Liechtenstein
var marker18 = L.marker([47.14,9.54],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Liechtenstein</p>'+lie1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Liechtenstein unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 hat Liechtenstein keine syrischen Flüchtlinge registriert.<br><br>Hinweis:Für das Jahr 2013 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für das Jahr 2015 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Folgeanträgen vor. </i></span><br><br>');
		sidebar.show();
    });
//Litauen
var marker19 = L.marker([55.3267,23.8941],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Litauen</p>'+lit1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Litauen unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Luxemburg
var marker20 = L.marker([49.7668,6.0718],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Luxemburg</p>'+lux11);
		sidebar.show();
    });
//Malta
var marker21 = L.marker([35.879787, 14.443875],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Malta</p>'+mal11);
		sidebar.show();
    });
//Niederlande
var marker22 = L.marker([52.1724,5.3228],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Niederlande</p>'+nl11);
		sidebar.show();
    });
//Norwegen
var marker23 = L.marker([61.4431,11.4643],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Norwegen</p>'+nor11);
		sidebar.show();
    });
//Polen
var marker24 = L.marker([52.1248,19.3943],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Polen</p>'+pl11);
		sidebar.show();
    });
//Portugal
var marker25 = L.marker([39.6808,-7.9747],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Portugal</p>'+por11+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 hat Portugal keine syrischen Flüchtlinge registriert.<br>Hinweis: Für das Jahr 2015 liegen in Portugal keine Daten zur Unterteilung der Geschlechter vor. </i></span><br><br>');
		sidebar.show();
    });
//Rumänien
var marker26 = L.marker([45.8535,24.9729],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Rumänien</p>'+rum11);
		sidebar.show();
    });
//Slowakei
var marker27 = L.marker([48.7049,19.4804],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowakei</p>'+sk1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in der Slowakei unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Slowenien
var marker28 = L.marker([46.0636,14.9403],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowenien</p>'+slo11);
		sidebar.show();
    });
//Spanien
var marker29 = L.marker([40.3895,-3.5629],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Spanien</p>'+sp11);
		sidebar.show();
    });
//Schweden
var marker30 = L.marker([60.5946,14.372],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweden</p>'+swe11);
		sidebar.show();
    });
//Schweiz
var marker31 = L.marker([46.9726,8.2107],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweiz</p>'+ch11);
		sidebar.show();
    });
//Groß Britanien
var marker32 = L.marker([52.2411,-0.2307],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Großbritannien</p>'+gb11);
		sidebar.show();
    });
//Türkei
var marker33 = L.marker([38.846893, 35.659720],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Türkei</p>'+tu11+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für die Türkei keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Ägypten
var marker34 = L.marker([26.193431, 29.851937],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ägypten</p>'+aeg11+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Ägypten keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Jordanien
var marker35 = L.marker([30.893409, 36.295589],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Jordanien</p>'+jo11+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Jordanien keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Libanon
var marker36 = L.marker([33.923195, 35.846689],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Libanon</p>'+lib11+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Libanon keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Irak
var marker37 = L.marker([32.752881, 43.394704],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irak</p>'+irk11+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Israel
var marker38 = L.marker([31.151942, 34.826074],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Israel</p>'+is11+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });

var b2011 = L.layerGroup([marker1,marker2,marker3,marker4,marker5,marker6,marker7,marker8,marker9,marker10,marker11,marker12,marker13,marker14,marker15,marker16,marker17,marker18,marker19,marker20,marker21,marker22,marker23,marker24,marker25,marker26,marker27,marker28,marker29,marker30,marker31,marker32,marker33,marker34,marker35,marker36,marker37,marker38]);


//2012
//Österreich
var marker1a = L.marker([47.58,14.13],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Österreich</p>'+at12+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2013 liegen für Österreich keine registrierten Erstanträge vor.</i></span><br><br>');
		sidebar.show();
    });
// Belgien
var marker2a = L.marker([50.63,4.64],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Belgien</p>'+be12);
		sidebar.show();
    });

//Bulgarien
var marker3a = L.marker([42.76,25.21],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Bulgarien</p>'+bu12);
		sidebar.show();
    });
//Kroatien
var marker4a = L.marker([45.44,17.93],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Kroatien</p><br><br><br><i><span style="font-size:16px">Für den Zeitraum von 2011 bis 2012 liegen für Kroatien keine Daten vor.</i></span>');
		sidebar.show();
    });
//Zypern
var marker5a = L.marker([34.91,32.95],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Zypern</p>'+zy12);
		sidebar.show();
    });
// Tschechien
var marker6a = L.marker([49.7324,15.3141],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Tschechien</p>'+cz12);
		sidebar.show();
    });
//Dänemark
var marker7a = L.marker([55.8011,8.8115],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Dänemark</p>'+dk12);
		sidebar.show();
    });
//Estland
var marker8a = L.marker([58.6842,25.8314],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Estland</p>'+est1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Estland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Finnland
var marker9a = L.marker([61.921,23.3598],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Finnland</p>'+fin12+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2013 liegen für Finnland keine Daten in Bezug auf weibliche Flüchtlinge vor.</i></span><br><br>');
		sidebar.show();
    });
//Frankreich
var marker10a = L.marker([46.6206,2.4522],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Frankreich</p>'+fr12+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Frankreich  keine Daten zu Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Deutschland
var marker11a = L.marker([51.0871,10.3708],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Deutschland</p>'+de12);
		sidebar.show();
    });
//Griechenland
var marker12a = L.marker([39.475,22.5819],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Griechenland</p>'+gr12);
		sidebar.show();
    });
//Ungarn
var marker13a = L.marker([47.1632,19.3968],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ungarn</p>'+un12+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2012 liegen für Ungarn keine Daten zu Erstanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Island
var marker14a = L.marker([64.754587, -18.339390],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Island</p>'+isl1118+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Island keine Daten zu Folgeanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2014 liegen für Island keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Island unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Irland
var marker15a = L.marker([53.1767,-8.1383],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irland</p>'+ir12);
		sidebar.show();
    });
//Italien
var marker16a = L.marker([42.8086,12.5601],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Italien</p>'+it12);
		sidebar.show();
    });
//Lettland
var marker17a = L.marker([56.6334,26.4051],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Lettland</p>'+let1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Lettland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Liechtenstein
var marker18a = L.marker([47.14,9.54],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Liechtenstein</p>'+lie1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Liechtenstein unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 hat Liechtenstein keine syrischen Flüchtlinge registriert.<br><br>Hinweis:Für das Jahr 2013 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für das Jahr 2015 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Folgeanträgen vor. </i></span><br><br>');
		sidebar.show();
    });
//Litauen
var marker19a = L.marker([55.3267,23.8941],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Litauen</p>'+lit1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Litauen unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Luxemburg
var marker20a = L.marker([49.7668,6.0718],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Luxemburg</p>'+lux12);
		sidebar.show();
    });
//Malta
var marker21a = L.marker([35.879787, 14.443875],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Malta</p>'+mal12);
		sidebar.show();
    });
//Niederlande
var marker22a = L.marker([52.1724,5.3228],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Niederlande</p>'+nl12);
		sidebar.show();
    });
//Norwegen
var marker23a = L.marker([61.4431,11.4643],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Norwegen</p>'+nor12);
		sidebar.show();
    });
//Polen
var marker24a = L.marker([52.1248,19.3943],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Polen</p>'+pl12);
		sidebar.show();
    });
//Portugal
var marker25a = L.marker([39.6808,-7.9747],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Portugal</p>'+por12+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 hat Portugal keine syrischen Flüchtlinge registriert.<br>Hinweis: Für das Jahr 2015 liegen in Portugal keine Daten zur Unterteilung der Geschlechter vor. </i></span><br><br>');
		sidebar.show();
    });
//Rumänien
var marker26a = L.marker([45.8535,24.9729],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Rumänien</p>'+rum12);
		sidebar.show();
    });
//Slowakei
var marker27a = L.marker([48.7049,19.4804],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowakei</p>'+sk1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in der Slowakei unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Slowenien
var marker28a = L.marker([46.0636,14.9403],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowenien</p>'+slo12);
		sidebar.show();
    });
//Spanien
var marker29a = L.marker([40.3895,-3.5629],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Spanien</p>'+sp12);
		sidebar.show();
    });
//Schweden
var marker30a = L.marker([60.5946,14.372],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweden</p>'+swe12);
		sidebar.show();
    });
//Schweiz
var marker31a = L.marker([46.9726,8.2107],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweiz</p>'+ch12);
		sidebar.show();
    });
//Groß Britanien
var marker32a = L.marker([52.2411,-0.2307],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Großbritannien</p>'+gb12);
		sidebar.show();
    });
//Türkei
var marker33a = L.marker([38.846893, 35.659720],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Türkei</p>'+tu12+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für die Türkei leider keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Ägypten
var marker34a = L.marker([26.193431, 29.851937],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ägypten</p>'+aeg12+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Ägypten keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Jordanien
var marker35a = L.marker([30.893409, 36.295589],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Jordanien</p>'+jo12+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Jordanien keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Libanon
var marker36a = L.marker([33.923195, 35.846689],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Libanon</p>'+lib12+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Libanon keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Irak
var marker37a = L.marker([32.752881, 43.394704],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irak</p>'+irk12+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Israel
var marker38a = L.marker([31.151942, 34.826074],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Israel</p>'+is12+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });

var b2012 = L.layerGroup([marker1a,marker2a,marker3a,marker4a,marker5a,marker6a,marker7a,marker8a,marker9a,marker10a,marker11a,marker12a,marker13a,marker14a,marker15a,marker16a,marker17a,marker18a,marker19a,marker20a,marker21a,marker22a,marker23a,marker24a,marker25a,marker26a,marker27a,marker28a,marker29a,marker30a,marker31a,marker32a,marker33a,marker34a,marker35a,marker36a,marker37a,marker38a]);

//2013
//Österreich
var marker1b = L.marker([47.58,14.13],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Österreich</p>'+at13+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2013 liegen für Österreich keine registrierten Erstanträge vor.</i></span><br><br>');
		sidebar.show();
    });
// Belgien
var marker2b = L.marker([50.63,4.64],{icon: newicon}).on('click', function () {
	sidebar.setContent('<p>Belgien</p>'+be13);
		sidebar.show();
    });

//Bulgarien
var marker3b = L.marker([42.76,25.21],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Bulgarien</p>'+bu13);
		sidebar.show();
    });
//Kroatien
var marker4b = L.marker([45.44,17.93],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Kroatien</p>'+kro13);
		sidebar.show();
    });
//Zypern
var marker5b = L.marker([34.91,32.95],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Zypern</p>'+zy13);
		sidebar.show();
    });
// Tschechien
var marker6b = L.marker([49.7324,15.3141],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Tschechien</p>'+cz13);
		sidebar.show();
    });
//Dänemark
var marker7b = L.marker([55.8011,8.8115],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Dänemark</p>'+dk13);
		sidebar.show();
    });
//Estland
var marker8b = L.marker([58.6842,25.8314],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Estland</p>'+est1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Estland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Finnland
var marker9b = L.marker([61.921,23.3598],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Finnland</p>'+fin13+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2013 liegen für Finnland keine Daten in Bezug auf weibliche Flüchtlinge vor.</i></span><br><br>');
		sidebar.show();
    });
//Frankreich
var marker10b = L.marker([46.6206,2.4522],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Frankreich</p>'+fr13+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Frankreich  keine Daten zu Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Deutschland
var marker11b = L.marker([51.0871,10.3708],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Deutschland</p>'+de13);
		sidebar.show();
    });
//Griechenland
var marker12b = L.marker([39.475,22.5819],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Griechenland</p>'+gr13);
		sidebar.show();
    });
//Ungarn
var marker13b = L.marker([47.1632,19.3968],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ungarn</p>'+un13+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2012 liegen für Ungarn keine Daten zu Erstanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Island
var marker14b = L.marker([64.754587, -18.339390],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Island</p>'+isl1118+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Island keine Daten zu Folgeanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2014 liegen für Island keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Island unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Irland
var marker15b = L.marker([53.1767,-8.1383],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irland</p>'+ir13);
		sidebar.show();
    });
//Italien
var marker16b = L.marker([42.8086,12.5601],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Italien</p>'+it13);
		sidebar.show();
    });
//Lettland
var marker17b = L.marker([56.6334,26.4051],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Lettland</p>'+let1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Lettland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Liechtenstein
var marker18b = L.marker([47.14,9.54],{icon: newicon}).on('click', function () {
	sidebar.setContent('<p>Liechtenstein</p>'+lie1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Liechtenstein unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 hat Liechtenstein keine syrischen Flüchtlinge registriert.<br><br>Hinweis:Für das Jahr 2013 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für das Jahr 2015 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Folgeanträgen vor. </i></span><br><br>');
		sidebar.show();
    });
//Litauen
var marker19b = L.marker([55.3267,23.8941],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Litauen</p>'+lit1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Litauen unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Luxemburg
var marker20b = L.marker([49.7668,6.0718],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Luxemburg</p>'+lux13);
		sidebar.show();
    });
//Malta
var marker21b = L.marker([35.879787, 14.443875],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Malta</p>'+mal13);
		sidebar.show();
    });
//Niederlande
var marker22b = L.marker([52.1724,5.3228],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Niederlande</p>'+nl13);
		sidebar.show();
    });
//Norwegen
var marker23b = L.marker([61.4431,11.4643],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Norwegen</p>'+nor13);
		sidebar.show();
    });
//Polen
var marker24b = L.marker([52.1248,19.3943],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Polen</p>'+pl13);
		sidebar.show();
    });
//Portugal
var marker25b = L.marker([39.6808,-7.9747],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Portugal</p>'+por13+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 hat Portugal keine syrischen Flüchtlinge registriert.<br>Hinweis: Für das Jahr 2015 liegen in Portugal keine Daten zur Unterteilung der Geschlechter vor. </i></span><br><br>');
		sidebar.show();
    });
//Rumänien
var marker26b = L.marker([45.8535,24.9729],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Rumänien</p>'+rum13);
		sidebar.show();
    });
//Slowakei
var marker27b = L.marker([48.7049,19.4804],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowakei</p>'+sk1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in der Slowakei unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für das Jahr 2013 liegen in der Slowakei leider keine Daten zur Unterteilung der Geschlechter vor.</i></span><br><br>');
		sidebar.show();
    });
//Slowenien
var marker28b = L.marker([46.0636,14.9403],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowenien</p>'+slo13);
		sidebar.show();
    });
//Spanien
var marker29b = L.marker([40.3895,-3.5629],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Spanien</p>'+sp13);
		sidebar.show();
    });
//Schweden
var marker30b = L.marker([60.5946,14.372],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweden</p>'+swe13);
		sidebar.show();
    });
//Schweiz
var marker31b = L.marker([46.9726,8.2107],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweiz</p>'+ch13);
		sidebar.show();
    });
//Groß Britanien
var marker32b = L.marker([52.2411,-0.2307],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Großbritannien</p>'+gb13);
		sidebar.show();
    });
//Türkei
var marker33b = L.marker([38.846893, 35.659720],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Türkei</p>'+tu13+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für die Türkei leider keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Ägypten
var marker34b = L.marker([26.193431, 29.851937],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ägypten</p>'+aeg13+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Ägypten keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Jordanien
var marker35b = L.marker([30.893409, 36.295589],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Jordanien</p>'+jo13+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Jordanien keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Libanon
var marker36b = L.marker([33.923195, 35.846689],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Libanon</p>'+lib13+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Libanon keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Irak
var marker37b = L.marker([32.752881, 43.394704],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irak</p>'+irk13+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Israel
var marker38b = L.marker([31.151942, 34.826074],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Israel</p>'+is13+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });

var b2013 = L.layerGroup([marker1b,marker2b,marker3b,marker4b,marker5b,marker6b,marker7b,marker8b,marker9b,marker10b,marker11b,marker12b,marker13b,marker14b,marker15b,marker16b,marker17b,marker18b,marker19b,marker20b,marker21b,marker22b,marker23b,marker24b,marker25b,marker26b,marker27b,marker28b,marker29b,marker30b,marker31b,marker32b,marker33b,marker34b,marker35b,marker36b,marker37b,marker38b]);


//2014
//Österreich
var marker1c = L.marker([47.58,14.13],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Österreich</p>'+at14+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2013 liegen für Österreich keine registrierten Erstanträge vor.</i></span><br><br>');
		sidebar.show();
    });
// Belgien
var marker2c = L.marker([50.63,4.64],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Belgien</p>'+be14);
		sidebar.show();
    });

//Bulgarien
var marker3c = L.marker([42.76,25.21],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Bulgarien</p>'+bu14);
		sidebar.show();
    });
//Kroatien
var marker4c = L.marker([45.44,17.93],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Kroatien</p>'+kro14);
		sidebar.show();
    });
//Zypern
var marker5c = L.marker([34.91,32.95],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Zypern</p>'+zy14);
		sidebar.show();
    });
// Tschechien
var marker6c = L.marker([49.7324,15.3141],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Tschechien</p>'+cz14);
		sidebar.show();
    });
//Dänemark
var marker7c = L.marker([55.8011,8.8115],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Dänemark</p>'+dk14);
		sidebar.show();
    });
//Estland
var marker8c = L.marker([58.6842,25.8314],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Estland</p>'+est1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Estland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Finnland
var marker9c = L.marker([61.921,23.3598],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Finnland</p>'+fin14+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2013 liegen für Finnland keine Daten in Bezug auf weibliche Flüchtlinge vor.</i></span><br><br>');
		sidebar.show();
    });
//Frankreich
var marker10c = L.marker([46.6206,2.4522],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Frankreich</p>'+fr14+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Frankreich  keine Daten zu Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Deutschland
var marker11c = L.marker([51.0871,10.3708],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Deutschland</p>'+de14);
		sidebar.show();
    });
//Griechenland
var marker12c = L.marker([39.475,22.5819],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Griechenland</p>'+gr14);
		sidebar.show();
    });
//Ungarn
var marker13c = L.marker([47.1632,19.3968],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ungarn</p>'+un14+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2012 liegen für Ungarn keine Daten zu Erstanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Island
var marker14c = L.marker([64.754587, -18.339390],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Island</p>'+isl1118+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Island keine Daten zu Folgeanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2014 liegen für Island keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Island unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Irland
var marker15c = L.marker([53.1767,-8.1383],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irland</p>'+ir14);
		sidebar.show();
    });
//Italien
var marker16c = L.marker([42.8086,12.5601],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Italien</p>'+it14);
		sidebar.show();
    });
//Lettland
var marker17c = L.marker([56.6334,26.4051],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Lettland</p>'+let1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Lettland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Liechtenstein
var marker18c = L.marker([47.14,9.54],{icon: newicon}).on('click', function () {
	sidebar.setContent('<p>Liechtenstein</p>'+lie1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Liechtenstein unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 hat Liechtenstein keine syrischen Flüchtlinge registriert.<br><br>Hinweis:Für das Jahr 2013 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für das Jahr 2015 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Folgeanträgen vor. </i></span><br><br>');
		sidebar.show();
    });
//Litauen
var marker19c = L.marker([55.3267,23.8941],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Litauen</p>'+lit1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Litauen unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Luxemburg
var marker20c = L.marker([49.7668,6.0718],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Luxemburg</p>'+lux14);
		sidebar.show();
    });
//Malta
var marker21c = L.marker([35.879787, 14.443875],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Malta</p>'+mal13);
		sidebar.show();
    });
//Niederlande
var marker22c = L.marker([52.1724,5.3228],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Niederlande</p>'+nl14);
		sidebar.show();
    });
//Norwegen
var marker23c = L.marker([61.4431,11.4643],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Norwegen</p>'+nor14);
		sidebar.show();
    });
//Polen
var marker24c = L.marker([52.1248,19.3943],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Polen</p>'+pl14);
		sidebar.show();
    });
//Portugal
var marker25c = L.marker([39.6808,-7.9747],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Portugal</p>'+por14+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 hat Portugal keine syrischen Flüchtlinge registriert.<br>Hinweis: Für das Jahr 2015 liegen in Portugal keine Daten zur Unterteilung der Geschlechter vor. </i></span><br><br>');
		sidebar.show();
    });
//Rumänien
var marker26c = L.marker([45.8535,24.9729],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Rumänien</p>'+rum14);
		sidebar.show();
    });
//Slowakei
var marker27c = L.marker([48.7049,19.4804],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowakei</p>'+sk1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in der Slowakei unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Slowenien
var marker28c = L.marker([46.0636,14.9403],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowenien</p>'+slo14);
		sidebar.show();
    });
//Spanien
var marker29c = L.marker([40.3895,-3.5629],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Spanien</p>'+sp14);
		sidebar.show();
    });
//Schweden
var marker30c = L.marker([60.5946,14.372],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweden</p>'+swe14);
		sidebar.show();
    });
//Schweiz
var marker31c = L.marker([46.9726,8.2107],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweiz</p>'+ch14);
		sidebar.show();
    });
//Groß Britanien
var marker32c = L.marker([52.2411,-0.2307],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Großbritannien</p>'+gb14);
		sidebar.show();
    });
//Türkei
var marker33c = L.marker([38.846893, 35.659720],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Türkei</p>'+tu14+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für die Türkei leider keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Ägypten
var marker34c = L.marker([26.193431, 29.851937],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ägypten</p>'+aeg14+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Ägypten keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Jordanien
var marker35c = L.marker([30.893409, 36.295589],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Jordanien</p>'+jo14+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Jordanien keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Libanon
var marker36c = L.marker([33.923195, 35.846689],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Libanon</p>'+lib14+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Libanon keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Irak
var marker37c = L.marker([32.752881, 43.394704],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irak</p>'+irk14+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Israel
var marker38c = L.marker([31.151942, 34.826074],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Israel</p>'+is14+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });

var b2014 = L.layerGroup([marker1c,marker2c,marker3c,marker4c,marker5c,marker6c,marker7c,marker8c,marker9c,marker10c,marker11c,marker12c,marker13c,marker14c,marker15c,marker16c,marker17c,marker18c,marker19c,marker20c,marker21c,marker22c,marker23c,marker24c,marker25c,marker26c,marker27c,marker28c,marker29c,marker30c,marker31c,marker32c,marker33c,marker34c,marker35c,marker36c,marker37c,marker38c]);

//2015
//Österreich
var marker1d = L.marker([47.58,14.13],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Österreich</p>'+at15+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2013 liegen für Österreich keine registrierten Erstanträge vor.</i></span><br><br>');
		sidebar.show();
    });
// Belgien
var marker2d = L.marker([50.63,4.64],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Belgien</p>'+be15);
		sidebar.show();
    });

//Bulgarien
var marker3d = L.marker([42.76,25.21],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Bulgarien</p>'+bu15);
		sidebar.show();
    });
//Kroatien
var marker4d = L.marker([45.44,17.93],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Kroatien</p>'+kro15);
		sidebar.show();
    });
//Zypern
var marker5d = L.marker([34.91,32.95],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Zypern</p>'+zy15);
		sidebar.show();
    });
// Tschechien
var marker6d = L.marker([49.7324,15.3141],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Tschechien</p>'+cz15);
		sidebar.show();
    });
//Dänemark
var marker7d = L.marker([55.8011,8.8115],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Dänemark</p>'+dk15);
		sidebar.show();
    });
//Estland
var marker8d = L.marker([58.6842,25.8314],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Estland</p>'+est1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Estland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Finnland
var marker9d = L.marker([61.921,23.3598],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Finnland</p>'+fin15+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2013 liegen für Finnland keine Daten in Bezug auf weibliche Flüchtlinge vor.</i></span><br><br>');
		sidebar.show();
    });
//Frankreich
var marker10d = L.marker([46.6206,2.4522],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Frankreich</p>'+fr15+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Frankreich  keine Daten zu Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Deutschland
var marker11d = L.marker([51.0871,10.3708],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Deutschland</p>'+de15);
		sidebar.show();
    });
//Griechenland
var marker12d = L.marker([39.475,22.5819],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Griechenland</p>'+gr15);
		sidebar.show();
    });
//Ungarn
var marker13d = L.marker([47.1632,19.3968],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ungarn</p>'+un15+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2012 liegen für Ungarn keine Daten zu Erstanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Island
var marker14d = L.marker([64.754587, -18.339390],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Island</p>'+isl1118+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Island keine Daten zu Folgeanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2014 liegen für Island keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Island unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Irland
var marker15d = L.marker([53.1767,-8.1383],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irland</p>'+ir15);
		sidebar.show();
    });
//Italien
var marker16d = L.marker([42.8086,12.5601],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Italien</p>'+it15);
		sidebar.show();
    });
//Lettland
var marker17d = L.marker([56.6334,26.4051],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Lettland</p>'+let1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Lettland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Liechtenstein
var marker18d = L.marker([47.14,9.54],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Liechtenstein</p>'+lie1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Liechtenstein unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 hat Liechtenstein keine syrischen Flüchtlinge registriert.<br><br>Hinweis:Für das Jahr 2013 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für das Jahr 2015 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Folgeanträgen vor. </i></span><br><br>');
		sidebar.show();
    });
//Litauen
var marker19d = L.marker([55.3267,23.8941],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Litauen</p>'+lit1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Litauen unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Luxemburg
var marker20d = L.marker([49.7668,6.0718],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Luxemburg</p>'+lux15);
		sidebar.show();
    });
//Malta
var marker21d = L.marker([35.879787, 14.443875],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Malta</p>'+mal15);
		sidebar.show();
    });
//Niederlande
var marker22d = L.marker([52.1724,5.3228],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Niederlande</p>'+nl15);
		sidebar.show();
    });
//Norwegen
var marker23d = L.marker([61.4431,11.4643],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Norwegen</p>'+nor15);
		sidebar.show();
    });
//Polen
var marker24d = L.marker([52.1248,19.3943],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Polen</p>'+pl15);
		sidebar.show();
    });
//Portugal
var marker25d = L.marker([39.6808,-7.9747],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Portugal</p>'+por15+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 hat Portugal keine syrischen Flüchtlinge registriert.<br>Hinweis: Für das Jahr 2015 liegen in Portugal keine Daten zur Unterteilung der Geschlechter vor. </i></span><br><br>');
		sidebar.show();
    });
//Rumänien
var marker26d = L.marker([45.8535,24.9729],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Rumänien</p>'+rum15);
		sidebar.show();
    });
//Slowakei
var marker27d = L.marker([48.7049,19.4804],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowakei</p>'+sk1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in der Slowakei unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Slowenien
var marker28d = L.marker([46.0636,14.9403],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowenien</p>'+slo15);
		sidebar.show();
    });
//Spanien
var marker29d = L.marker([40.3895,-3.5629],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Spanien</p>'+sp15);
		sidebar.show();
    });
//Schweden
var marker30d = L.marker([60.5946,14.372],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweden</p>'+swe15);
		sidebar.show();
    });
//Schweiz
var marker31d = L.marker([46.9726,8.2107],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweiz</p>'+ch15);
		sidebar.show();
    });
//Groß Britanien
var marker32d = L.marker([52.2411,-0.2307],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Großbritannien</p>'+gb15);
		sidebar.show();
    });
//Türkei
var marker33d = L.marker([38.846893, 35.659720],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Türkei</p>'+tu15+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für die Türkei leider keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Ägypten
var marker34d = L.marker([26.193431, 29.851937],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ägypten</p>'+aeg15+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Ägypten keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Jordanien
var marker35d = L.marker([30.893409, 36.295589],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Jordanien</p>'+jo15+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Jordanien keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Libanon
var marker36d = L.marker([33.923195, 35.846689],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Libanon</p>'+lib15+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Libanon keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Irak
var marker37d = L.marker([32.752881, 43.394704],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irak</p>'+irk15+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
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
		sidebar.setContent('<p>Österreich</p>'+at16+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2013 liegen für Österreich keine registrierten Erstanträge vor.</i></span><br><br>');
		sidebar.show();
    });
// Belgien
var marker2e = L.marker([50.63,4.64],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Belgien</p>'+be16);
		sidebar.show();
    });

//Bulgarien
var marker3e = L.marker([42.76,25.21],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Bulgarien</p>'+bu16);
		sidebar.show();
    });
//Kroatien
var marker4e = L.marker([45.44,17.93],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Kroatien</p>'+kro16);
		sidebar.show();
    });
//Zypern
var marker5e = L.marker([34.91,32.95],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Zypern</p>'+zy16);
		sidebar.show();
    });
// Tschechien
var marker6e = L.marker([49.7324,15.3141],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Tschechien</p>'+cz16);
		sidebar.show();
    });
//Dänemark
var marker7e = L.marker([55.8011,8.8115],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Dänemark</p>'+dk16);
		sidebar.show();
    });
//Estland
var marker8e = L.marker([58.6842,25.8314],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Estland</p>'+est1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Estland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Finnland
var marker9e = L.marker([61.921,23.3598],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Finnland</p>'+fin16+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2013 liegen für Finnland keine Daten in Bezug auf weibliche Flüchtlinge vor.</i></span><br><br>');
		sidebar.show();
    });
//Frankreich
var marker10e = L.marker([46.6206,2.4522],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Frankreich</p>'+fr16+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Frankreich  keine Daten zu Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Deutschland
var marker11e = L.marker([51.0871,10.3708],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Deutschland</p>'+de16);
		sidebar.show();
    });
//Griechenland
var marker12e = L.marker([39.475,22.5819],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Griechenland</p>'+gr16);
		sidebar.show();
    });
//Ungarn
var marker13e = L.marker([47.1632,19.3968],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ungarn</p>'+un16+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2012 liegen für Ungarn keine Daten zu Erstanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Island
var marker14e = L.marker([64.754587, -18.339390],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Island</p>'+isl1118+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Island keine Daten zu Folgeanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2014 liegen für Island keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Island unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Irland
var marker15e = L.marker([53.1767,-8.1383],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irland</p>'+ir16);
		sidebar.show();
    });
//Italien
var marker16e = L.marker([42.8086,12.5601],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Italien</p>'+it16);
		sidebar.show();
    });
//Lettland
var marker17e = L.marker([56.6334,26.4051],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Lettland</p>'+let1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Lettland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Liechtenstein
var marker18e = L.marker([47.14,9.54],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Liechtenstein</p>'+lie1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Liechtenstein unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 hat Liechtenstein keine syrischen Flüchtlinge registriert.<br><br>Hinweis:Für das Jahr 2013 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für das Jahr 2015 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Folgeanträgen vor. </i></span><br><br>');
		sidebar.show();
    });
//Litauen
var marker19e = L.marker([55.3267,23.8941],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Litauen</p>'+lit1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Litauen unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Luxemburg
var marker20e = L.marker([49.7668,6.0718],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Luxemburg</p>'+lux16);
		sidebar.show();
    });
//Malta
var marker21e = L.marker([35.879787, 14.443875],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Malta</p>'+mal16);
		sidebar.show();
    });
//Niederlande
var marker22e = L.marker([52.1724,5.3228],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Niederlande</p>'+nl16);
		sidebar.show();
    });
//Norwegen
var marker23e = L.marker([61.4431,11.4643],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Norwegen</p>'+nor16);
		sidebar.show();
    });
//Polen
var marker24e = L.marker([52.1248,19.3943],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Polen</p>'+pl16);
		sidebar.show();
    });
//Portugal
var marker25e = L.marker([39.6808,-7.9747],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Portugal</p>'+por16+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 hat Portugal keine syrischen Flüchtlinge registriert.<br>Hinweis: Für das Jahr 2015 liegen in Portugal keine Daten zur Unterteilung der Geschlechter vor. </i></span><br><br>');
		sidebar.show();
    });
//Rumänien
var marker26e = L.marker([45.8535,24.9729],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Rumänien</p>'+rum16);
		sidebar.show();
    });
//Slowakei
var marker27e = L.marker([48.7049,19.4804],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowakei</p>'+sk1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in der Slowakei unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Slowenien
var marker28e = L.marker([46.0636,14.9403],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowenien</p>'+slo16);
		sidebar.show();
    });
//Spanien
var marker29e = L.marker([40.3895,-3.5629],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Spanien</p>'+sp16);
		sidebar.show();
    });
//Schweden
var marker30e = L.marker([60.5946,14.372],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweden</p>'+swe16);
		sidebar.show();
    });
//Schweiz
var marker31e = L.marker([46.9726,8.2107],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweiz</p>'+ch16);
		sidebar.show();
    });
//Groß Britanien
var marker32e = L.marker([52.2411,-0.2307],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Großbritannien</p>'+gb16);
		sidebar.show();
    });
//Türkei
var marker33e = L.marker([38.846893, 35.659720],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Türkei</p>'+tu16+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für die Türkei leider keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Ägypten
var marker34e = L.marker([26.193431, 29.851937],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ägypten</p>'+aeg16+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Ägypten keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Jordanien
var marker35e = L.marker([30.893409, 36.295589],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Jordanien</p>'+jo16+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Jordanien keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Libanon
var marker36e = L.marker([33.923195, 35.846689],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Libanon</p>'+lib16+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Libanon keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Irak
var marker37e = L.marker([32.752881, 43.394704],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irak</p>'+irk16+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
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
		sidebar.setContent('<p>Österreich</p>'+at17+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2013 liegen für Österreich keine registrierten Erstanträge vor.</i></span><br><br>');
		sidebar.show();
    });
// Belgien
var marker2f = L.marker([50.63,4.64],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Belgien</p>'+be17);
		sidebar.show();
    });

//Bulgarien
var marker3f = L.marker([42.76,25.21],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Bulgarien</p>'+bu17);
		sidebar.show();
    });
//Kroatien
var marker4f = L.marker([45.44,17.93],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Kroatien</p>'+kro17);
		sidebar.show();
    });
//Zypern
var marker5f = L.marker([34.91,32.95],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Zypern</p>'+zy17);
		sidebar.show();
    });
// Tschechien
var marker6f = L.marker([49.7324,15.3141],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Tschechien</p>'+cz17);
		sidebar.show();
    });
//Dänemark
var marker7f = L.marker([55.8011,8.8115],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Dänemark</p>'+dk17);
		sidebar.show();
    });
//Estland
var marker8f = L.marker([58.6842,25.8314],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Estland</p>'+est1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Estland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Finnland
var marker9f = L.marker([61.921,23.3598],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Finnland</p>'+fin17+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2013 liegen für Finnland keine Daten in Bezug auf weibliche Flüchtlinge vor.</i></span><br><br>');
		sidebar.show();
    });
//Frankreich
var marker10f = L.marker([46.6206,2.4522],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Frankreich</p>'+fr17+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Frankreich  keine Daten zu Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Deutschland
var marker11f = L.marker([51.0871,10.3708],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Deutschland</p>'+de17);
		sidebar.show();
    });
//Griechenland
var marker12f = L.marker([39.475,22.5819],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Griechenland</p>'+gr17);
		sidebar.show();
    });
//Ungarn
var marker13f = L.marker([47.1632,19.3968],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ungarn</p>'+un17+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2012 liegen für Ungarn keine Daten zu Erstanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Island
var marker14f = L.marker([64.754587, -18.339390],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Island</p>'+isl1118+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Island keine Daten zu Folgeanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2014 liegen für Island keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Island unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Irland
var marker15f = L.marker([53.1767,-8.1383],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irland</p>'+ir17);
		sidebar.show();
    });
//Italien
var marker16f = L.marker([42.8086,12.5601],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Italien</p>'+it17);
		sidebar.show();
    });
//Lettland
var marker17f = L.marker([56.6334,26.4051],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Lettland</p>'+let1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Lettland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Liechtenstein
var marker18f = L.marker([47.14,9.54],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Liechtenstein</p>'+lie1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Liechtenstein unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 hat Liechtenstein keine syrischen Flüchtlinge registriert.<br><br>Hinweis:Für das Jahr 2013 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für das Jahr 2015 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Folgeanträgen vor. </i></span><br><br>');
		sidebar.show();
    });
//Litauen
var marker19f = L.marker([55.3267,23.8941],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Litauen</p>'+lit1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Litauen unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Luxemburg
var marker20f = L.marker([49.7668,6.0718],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Luxemburg</p>'+lux17);
		sidebar.show();
    });
//Malta
var marker21f = L.marker([35.879787, 14.443875],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Malta</p>'+mal17);
		sidebar.show();
    });
//Niederlande
var marker22f = L.marker([52.1724,5.3228],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Niederlande</p>'+nl17);
		sidebar.show();
    });
//Norwegen
var marker23f = L.marker([61.4431,11.4643],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Norwegen</p>'+nor17);
		sidebar.show();
    });
//Polen
var marker24f = L.marker([52.1248,19.3943],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Polen</p>'+pl17);
		sidebar.show();
    });
//Portugal
var marker25f = L.marker([39.6808,-7.9747],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Portugal</p>'+por17+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 hat Portugal keine syrischen Flüchtlinge registriert.<br>Hinweis: Für das Jahr 2015 liegen in Portugal keine Daten zur Unterteilung der Geschlechter vor. </i></span><br><br>');
		sidebar.show();
    });
//Rumänien
var marker26f = L.marker([45.8535,24.9729],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Rumänien</p>'+rum17);
		sidebar.show();
    });
//Slowakei
var marker27f = L.marker([48.7049,19.4804],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowakei</p>'+sk1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in der Slowakei unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Slowenien
var marker28f = L.marker([46.0636,14.9403],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowenien</p>'+slo17);
		sidebar.show();
    });
//Spanien
var marker29f = L.marker([40.3895,-3.5629],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Spanien</p>'+sp17);
		sidebar.show();
    });
//Schweden
var marker30f = L.marker([60.5946,14.372],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweden</p>'+swe17);
		sidebar.show();
    });
//Schweiz
var marker31f = L.marker([46.9726,8.2107],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweiz</p>'+ch17);
		sidebar.show();
    });
//Groß Britanien
var marker32f = L.marker([52.2411,-0.2307],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Großbritannien</p>'+gb17);
		sidebar.show();
    });
//Türkei
var marker33f = L.marker([38.846893, 35.659720],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Türkei</p>'+tu17+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für die Türkei leider keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Ägypten
var marker34f = L.marker([26.193431, 29.851937],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ägypten</p>'+aeg17+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Ägypten keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Jordanien
var marker35f = L.marker([30.893409, 36.295589],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Jordanien</p>'+jo17+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Jordanien keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Libanon
var marker36f = L.marker([33.923195, 35.846689],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Libanon</p>'+lib17+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Libanon keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Irak
var marker37f = L.marker([32.752881, 43.394704],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irak</p>'+irk17+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
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
		sidebar.setContent('<p>Österreich</p>'+at18+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2013 liegen für Österreich keine registrierten Erstanträge vor.</i></span><br><br>');
		sidebar.show();
    });
// Belgien
var marker2g = L.marker([50.63,4.64],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Belgien</p>'+be18);
		sidebar.show();
    });

//Bulgarien
var marker3g = L.marker([42.76,25.21],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Bulgarien</p>'+bu18);
		sidebar.show();
    });
//Kroatien
var marker4g = L.marker([45.44,17.93],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Kroatien</p>'+kro18);
		sidebar.show();
    });
//Zypern
var marker5g = L.marker([34.91,32.95],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Zypern</p>'+zy18);
		sidebar.show();
    });
// Tschechien
var marker6g = L.marker([49.7324,15.3141],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Tschechien</p>'+cz18);
		sidebar.show();
    });
//Dänemark
var marker7g = L.marker([55.8011,8.8115],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Dänemark</p>'+dk18);
		sidebar.show();
    });
//Estland
var marker8g = L.marker([58.6842,25.8314],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Estland</p>'+est1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Estland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Finnland
var marker9g = L.marker([61.921,23.3598],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Finnland</p>'+fin18+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2013 liegen für Finnland keine Daten in Bezug auf weibliche Flüchtlinge vor.</i></span><br><br>');
		sidebar.show();
    });
//Frankreich
var marker10g = L.marker([46.6206,2.4522],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Frankreich</p>'+fr18+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Frankreich  keine Daten zu Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Deutschland
var marker11g = L.marker([51.0871,10.3708],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Deutschland</p>'+de18);
		sidebar.show();
    });
//Griechenland
var marker12g = L.marker([39.475,22.5819],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Griechenland</p>'+gr18);
		sidebar.show();
    });
//Ungarn
var marker13g = L.marker([47.1632,19.3968],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ungarn</p>'+un18+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2012 liegen für Ungarn keine Daten zu Erstanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Island
var marker14g = L.marker([64.754587, -18.339390],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Island</p>'+isl1118+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 liegen für Island keine Daten zu Folgeanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2014 liegen für Island keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Island unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Irland
var marker15g = L.marker([53.1767,-8.1383],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irland</p>'+ir18);
		sidebar.show();
    });
//Italien
var marker16g = L.marker([42.8086,12.5601],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Italien</p>'+it18);
		sidebar.show();
    });
//Lettland
var marker17g = L.marker([56.6334,26.4051],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Lettland</p>'+let1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Lettland unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Liechtenstein
var marker18g = L.marker([47.14,9.54],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Liechtenstein</p>'+lie1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Liechtenstein unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 hat Liechtenstein keine syrischen Flüchtlinge registriert.<br><br>Hinweis:Für das Jahr 2013 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für das Jahr 2015 liegen für Liechtenstein keine Daten zur Unterteilung der Geschlechter vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Erstanträgen vor.<br><br>Hinweis: Für den Zeitraum von 2011 bis 2015 liegen für Liechtenstein keine Daten zu Folgeanträgen vor. </i></span><br><br>');
		sidebar.show();
    });
//Litauen
var marker19g = L.marker([55.3267,23.8941],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Litauen</p>'+lit1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in Litauen unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Luxemburg
var marker20g = L.marker([49.7668,6.0718],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Luxemburg</p>'+lux18);
		sidebar.show();
    });
//Malta
var marker21g = L.marker([35.879787, 14.443875],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Malta</p>'+mal18);
		sidebar.show();
    });
//Niederlande
var marker22g = L.marker([52.1724,5.3228],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Niederlande</p>'+nl18);
		sidebar.show();
    });
//Norwegen
var marker23g = L.marker([61.4431,11.4643],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Norwegen</p>'+nor18);
		sidebar.show();
    });
//Polen
var marker24g = L.marker([52.1248,19.3943],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Polen</p>'+pl18);
		sidebar.show();
    });
//Portugal
var marker25g = L.marker([39.6808,-7.9747],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Portugal</p>'+por18+'<br><i><span style="font-size:12px">Hinweis: Für das Jahr 2011 hat Portugal keine syrischen Flüchtlinge registriert.<br>Hinweis: Für das Jahr 2015 liegen in Portugal keine Daten zur Unterteilung der Geschlechter vor. </i></span><br><br>');
		sidebar.show();
    });
//Rumänien
var marker26g = L.marker([45.8535,24.9729],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Rumänien</p>'+rum18);
		sidebar.show();
    });
//Slowakei
var marker27g = L.marker([48.7049,19.4804],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowakei</p>'+sk1118+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegt die Gesamtzahl der registrierten Flüchtlinge in der Slowakei unter 500. Aufgrund dessen wurden die Daten der unterschiedlichen Altersgruppen für diese Jahre zusammengefasst.</i></span><br><br>');
		sidebar.show();
    });
//Slowenien
var marker28g = L.marker([46.0636,14.9403],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Slowenien</p>'+slo18);
		sidebar.show();
    });
//Spanien
var marker29g = L.marker([40.3895,-3.5629],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Spanien</p>'+sp18);
		sidebar.show();
    });
//Schweden
var marker30g = L.marker([60.5946,14.372],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweden</p>'+swe18);
		sidebar.show();
    });
//Schweiz
var marker31g = L.marker([46.9726,8.2107],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Schweiz</p>'+ch18);
		sidebar.show();
    });
//Groß Britanien
var marker32g = L.marker([52.2411,-0.2307],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Großbritannien</p>'+gb18);
		sidebar.show();
    });
//Türkei
var marker33g = L.marker([38.846893, 35.659720],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Türkei</p>'+tu18+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für die Türkei leider keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Ägypten
var marker34g = L.marker([26.193431, 29.851937],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Ägypten</p>'+aeg18+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Ägypten keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Jordanien
var marker35g = L.marker([30.893409, 36.295589],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Jordanien</p>'+jo18+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für Jordanien keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Libanon
var marker36g = L.marker([33.923195, 35.846689],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Libanon</p>'+lib18+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Libanon keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Irak
var marker37g = L.marker([32.752881, 43.394704],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Irak</p>'+irk18+'<br><i><span style="font-size:12px">Hinweis: Für den Zeitraum von 2011 bis 2018 liegen für den Irak keine Daten zu Erst- und Folgeanträgen vor.</i></span><br><br>');
		sidebar.show();
    });
//Israel
var marker38g = L.marker([31.151942, 34.826074],{icon: newicon}).on('click', function () {
		sidebar.setContent('<p>Israel</p><br><br><i><span style="font-size:12px">Hinweis: Für den Zeitraum 2015 bis 2018 liegen für Israel keine Daten vor.</i></span><br><br>');
		sidebar.show();
    });

var b2018 = L.layerGroup([marker1g,marker2g,marker3g,marker4g,marker5g,marker6g,marker7g,marker8g,marker9g,marker10g,marker11g,marker12g,marker13g,marker14g,marker15g,marker16g,marker17g,marker18g,marker19g,marker20g,marker21g,marker22g,marker23g,marker24g,marker25g,marker26g,marker27g,marker28g,marker29g,marker30g,marker31g,marker32g,marker33g,marker34g,marker35g,marker36g,marker37g,marker38g]);
