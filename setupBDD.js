/* eslint-disable max-len */
/* eslint-disable quotes */
const Profile = require('./profile.model');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mole-people', { useNewUrlParser: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connection Successful!');

  var brooklyn = new Profile({

    name: 'Brooklyn',

    cardContent: 'Brooklyn vit depuis plus de 35 ans dans les tunnels de Riverside Park. C’est l’une des habitantes les plus connues des souterrains de New York.',
    cardImage: 'https://image.noelshack.com/fichiers/2019/26/3/1561544699-brooklyn.jpg',
    cardSound: 'https://s1.vocaroo.com/media/download_temp/Vocaroo_s1PFIoupoSWx.mp3',
  
    vimeoId: 344272014,
  
    intro: "Brooklyn vit depuis plus de 35 ans dans les tunnels de Riverside Park. C’est l’une des habitantes les plus connues des souterrains de New York. Elle raconte comment elle a trouvé refuge dans un recoin des sous-sols, à l'abri de la police, des vols, de la lumière et du regard des gens.",
    firstArticleTitle: 'La femme aux chats',
    firstArticleContent: 'Elle doit son surnom Brooklyn à son histoire et à comment elle est arrivée ici. En effet, ce sont les chats errants de la ville qui lui ont montré le chemin jusqu’à son nouveau foyer, alors qu’elle dormait dans la rue. Elle leur dooit son éternelle reconnaissance. Dans un coin de sa chambre il y a toujours une gamelle remplie de nourriture pour les 49 chats avec qui elle partage son tunnel.',
    secondArticleTitle: '“ J’adore cuisiner “',
    secondArticleContent: 'Comme beaucoup de résidents des souterrains, Brooklyn cuisine sa propre nourriture. Il est très important pour elle de conserver les activités de son passé dans ces ténèbres. C’est sans doute le meilleur moyen de garder l’esprit sain. Pour Brooklyn, en tout cas, c’est un passe-temps et une véritable passion : ',
    outside: "“ J’aimerais avoir une grande cuisine avec toutes sortes de couverts et d'équipements “",
  
    YPos: 40,
    XPos: 40
  });

  var miguel = new Profile({

    "name": 'Miguel',

    "cardContent": 'Miguel est un optimiste. Malgré sa vie qui peut nous paraître misérable, il est dans son élément sous la terre.',
    "cardImage": 'https://image.noelshack.com/fichiers/2019/26/3/1561544699-miguel.jpg',
    "cardSound": 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0SqqpGo3h3S.mp3',
  
    "vimeoId": 344271187,
  
    "intro": "Miguel est un optimiste. Malgré sa vie qui peut nous paraître misérable, il est dans son élément sous la terre. Pour lui cette vie là n’est qu’un séjour, comme une retraite spirituelle.",
    "firstArticleTitle": 'La solitude des profondeurs',
    "firstArticleContent": "Souvent, les personnes qui vivent en bas racontent les bienfaits que la solitude a sur eux. Ils y sont tellement attachés qu’il est parfois impensable pour eux de retourner vivre à la surface.  Pour Miguel, c’est l’endroit parfait pour s’occuper de “ses affaires” comme il aime le dire. Sûrement l’occasion de régler un conflit intérieur. Difficile de penser qu’un environnement si sombre puisse être bénéfique pour la santé mentale. Quoi qu’il en soit, ces femmes et ces hommes apprécient cette vie au retrait du monde, et disent s’y plaire.",
    "secondArticleTitle": "Contact avec les curieux",
    "secondArticleContent": "Les tunnels de Riverside Park sont recouverts de graffitis. Cet art urbain attire les jeunes aventuriers en quête de sensation fortes. Ils ne s’attendent jamais à se retrouver nez à nez avec les habitants de ses lieux. Miguel s’amuse donc à les effrayer. ",
    "outside": " ",
  
    "YPos": 42,
    "XPos": 54
  });

  // save model to database
  brooklyn.save(function(err, profile) {
    if (err) return console.error(err);
    console.log(profile.name + ' a été ajouté à la BDD !');
  });

  miguel.save(function(err, profile) {
    if (err) return console.error(err);
    console.log(profile.name + ' a été ajouté à la BDD !');
  });
});
