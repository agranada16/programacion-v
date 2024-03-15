//declarar variables

var brand = "mala practica";
let counter = 100;
const token = "abc";

console.log(token)
counter= 200;
console.log(counter);

//comentario de una linea
/* cometario multi linas*/

//interpolacion
//imprimir variable
let interpolation = `el valor de un counter es: ${counter}`;
console.log(interpolation);
console.log("el valor del counter", counter);
console.log("el valor del counter" + counter );

//https://mockaroo.com/ pagina crea json
const persons = [
    {
        "first_name": "Mylène",
        "last_name": "Jobbins",
        "age": 27
      }, {
        "first_name": "Zoé",
        "last_name": "Kearey",
        "age": 59
      }, {
        "first_name": "Naéva",
        "last_name": "Methringham",
        "age": 47
      }, {
        "first_name": "Estée",
        "last_name": "Rockcliff",
        "age": 15
      }, {
        "first_name": "Vénus",
        "last_name": "Jordison",
        "age": 47
      }, {
        "first_name": "Dorothée",
        "last_name": "Rorke",
        "age": 12
      }, {
        "first_name": "Marie-ève",
        "last_name": "Titta",
        "age": 13
      }, {
        "first_name": "Lorène",
        "last_name": "Caddie",
        "age": 60
      }, {
        "first_name": "Marlène",
        "last_name": "Lornsen",
        "age": 37
      }, {
        "first_name": "Gérald",
        "last_name": "Sebastian",
        "age": 55
      }, {
        "first_name": "Alizée",
        "last_name": "Mitchenson",
        "age": 59
      }, {
        "first_name": "Almérinda",
        "last_name": "Cantwell",
        "age": 37
      }, {
        "first_name": "Loïca",
        "last_name": "Reynalds",
        "age": 37
      }, {
        "first_name": "Göran",
        "last_name": "Thurling",
        "age": 49
      }, {
        "first_name": "Méryl",
        "last_name": "Clinch",
        "age": 42
      }, {
        "first_name": "Clélia",
        "last_name": "Scamerden",
        "age": 23
      }, {
        "first_name": "Åsa",
        "last_name": "Treen",
        "age": 37
      }, {
        "first_name": "Ruì",
        "last_name": "Sains",
        "age": 3
      }, {
        "first_name": "Anaïs",
        "last_name": "Latta",
        "age": 60
      }, {
        "first_name": "Régine",
        "last_name": "Breyt",
        "age": 12
      }, {
        "first_name": "Aurélie",
        "last_name": "Dow",
        "age": 38
      }, {
        "first_name": "Maï",
        "last_name": "Schubuser",
        "age": 8
      }, {
        "first_name": "Noémie",
        "last_name": "Grigoli",
        "age": 45
      }, {
        "first_name": "Aimée",
        "last_name": "Sweetlove",
        "age": 69
      }, {
        "first_name": "Cunégonde",
        "last_name": "Fish",
        "age": 34
      }, {
        "first_name": "Maïwenn",
        "last_name": "Flatt",
        "age": 70
      }, {
        "first_name": "Véronique",
        "last_name": "Senechell",
        "age": 34
      }, {
        "first_name": "Cloé",
        "last_name": "Walesa",
        "age": 46
      }, {
        "first_name": "Eliès",
        "last_name": "Utterson",
        "age": 18
      }, {
        "first_name": "Méng",
        "last_name": "Seago",
        "age": 41
      }, {
        "first_name": "Léana",
        "last_name": "Featherstone",
        "age": 47
      }, {
        "first_name": "Zoé",
        "last_name": "Kovnot",
        "age": 6
      }, {
        "first_name": "Maïly",
        "last_name": "Gillham",
        "age": 1
      }, {
        "first_name": "Estée",
        "last_name": "Prestwich",
        "age": 44
      }, {
        "first_name": "Célia",
        "last_name": "McRonald",
        "age": 37
      }, {
        "first_name": "Alizée",
        "last_name": "Ellingsworth",
        "age": 64
      }, {
        "first_name": "Maëlys",
        "last_name": "Canet",
        "age": 35
      }, {
        "first_name": "Cinéma",
        "last_name": "Bulger",
        "age": 2
      }, {
        "first_name": "Françoise",
        "last_name": "Mackilpatrick",
        "age": 35
      }, {
        "first_name": "Léane",
        "last_name": "Killingbeck",
        "age": 48
      }, {
        "first_name": "Léonore",
        "last_name": "Lippett",
        "age": 39
      }, {
        "first_name": "Tú",
        "last_name": "Chiddy",
        "age": 15
      }, {
        "first_name": "Adélaïde",
        "last_name": "Ambrois",
        "age": 3
      }, {
        "first_name": "Intéressant",
        "last_name": "Foli",
        "age": 67
      }, {
        "first_name": "Gaïa",
        "last_name": "Craufurd",
        "age": 17
      }, {
        "first_name": "Maëlyss",
        "last_name": "Loukes",
        "age": 68
      }, {
        "first_name": "Lén",
        "last_name": "Biggerstaff",
        "age": 5
      }, {
        "first_name": "Bénédicte",
        "last_name": "Van den Velde",
        "age": 28
      }, {
        "first_name": "Régine",
        "last_name": "Szabo",
        "age": 63
      }, {
        "first_name": "Märta",
        "last_name": "MacKnight",
        "age": 14
      }, {
        "first_name": "Faîtes",
        "last_name": "Eicheler",
        "age": 68
      }, {
        "first_name": "Nadège",
        "last_name": "Standrin",
        "age": 66
      }, {
        "first_name": "Yú",
        "last_name": "Poulsum",
        "age": 52
      }, {
        "first_name": "Gaïa",
        "last_name": "Gidney",
        "age": 15
      }, {
        "first_name": "Tú",
        "last_name": "McTurley",
        "age": 28
      }, {
        "first_name": "Kù",
        "last_name": "Le Maitre",
        "age": 37
      }, {
        "first_name": "Bérénice",
        "last_name": "Troup",
        "age": 17
      }, {
        "first_name": "Valérie",
        "last_name": "Marsham",
        "age": 21
      }, {
        "first_name": "Östen",
        "last_name": "Manson",
        "age": 50
      }, {
        "first_name": "Solène",
        "last_name": "Ludman",
        "age": 41
      }, {
        "first_name": "Pò",
        "last_name": "Biagi",
        "age": 63
      }, {
        "first_name": "Estée",
        "last_name": "Proffer",
        "age": 32
      }, {
        "first_name": "Marie-ève",
        "last_name": "Jepensen",
        "age": 44
      }, {
        "first_name": "Tú",
        "last_name": "Eneas",
        "age": 35
      }, {
        "first_name": "Marie-noël",
        "last_name": "Perrins",
        "age": 42
      }, {
        "first_name": "Marie-françoise",
        "last_name": "O'Meara",
        "age": 6
      }, {
        "first_name": "Maï",
        "last_name": "Seys",
        "age": 67
      }, {
        "first_name": "Illustrée",
        "last_name": "Houlston",
        "age": 68
      }, {
        "first_name": "Mà",
        "last_name": "Renhard",
        "age": 5
      }, {
        "first_name": "Stévina",
        "last_name": "Tonna",
        "age": 16
      }, {
        "first_name": "Marie-hélène",
        "last_name": "Knath",
        "age": 43
      }, {
        "first_name": "Méryl",
        "last_name": "Andrin",
        "age": 20
      }, {
        "first_name": "Eliès",
        "last_name": "Riccio",
        "age": 49
      }, {
        "first_name": "Mélodie",
        "last_name": "Chell",
        "age": 13
      }, {
        "first_name": "Léonore",
        "last_name": "Marlon",
        "age": 21
      }, {
        "first_name": "Sélène",
        "last_name": "Hugnot",
        "age": 23
      }, {
        "first_name": "Maïwenn",
        "last_name": "Wilkins",
        "age": 56
      }, {
        "first_name": "Daphnée",
        "last_name": "Pavey",
        "age": 59
      }, {
        "first_name": "Gösta",
        "last_name": "Olerenshaw",
        "age": 65
      }, {
        "first_name": "Pélagie",
        "last_name": "Horry",
        "age": 51
      }, {
        "first_name": "Marie-thérèse",
        "last_name": "Petkov",
        "age": 46
      }, {
        "first_name": "Maëly",
        "last_name": "Glynn",
        "age": 30
      }, {
        "first_name": "Miléna",
        "last_name": "Creelman",
        "age": 17
      }, {
        "first_name": "Josée",
        "last_name": "Summergill",
        "age": 54
      }, {
        "first_name": "Marie-josée",
        "last_name": "Grogono",
        "age": 62
      }, {
        "first_name": "Yóu",
        "last_name": "Gildersleaves",
        "age": 64
      }, {
        "first_name": "Anaé",
        "last_name": "Delamere",
        "age": 53
      }, {
        "first_name": "Örjan",
        "last_name": "De Blasi",
        "age": 41
      }, {
        "first_name": "Annotée",
        "last_name": "McGarry",
        "age": 62
      }, {
        "first_name": "Véronique",
        "last_name": "Hoffner",
        "age": 47
      }, {
        "first_name": "Adélaïde",
        "last_name": "Minchinton",
        "age": 42
      }, {
        "first_name": "Almérinda",
        "last_name": "Constable",
        "age": 64
      }, {
        "first_name": "Aí",
        "last_name": "Castillou",
        "age": 20
      }, {
        "first_name": "Bérengère",
        "last_name": "Kabsch",
        "age": 24
      }, {
        "first_name": "Mélanie",
        "last_name": "Serotsky",
        "age": 61
      }, {
        "first_name": "Maëlla",
        "last_name": "Tingly",
        "age": 59
      }, {
        "first_name": "Audréanne",
        "last_name": "Morecomb",
        "age": 65
      }, {
        "first_name": "Östen",
        "last_name": "Franscioni",
        "age": 23
      }, {
        "first_name": "Loïca",
        "last_name": "Shermar",
        "age": 16
      }, {
        "first_name": "Méthode",
        "last_name": "Clausen",
        "age": 58
      }
];

console.table(persons);

