const AbstractSeeder = require("./AbstractSeeder");
const CategorySeeder = require("./CategorySeeder");

class ProgramSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "program", truncate: true, dependencies: [CategorySeeder] });
  }

  run() {
    const programs = [
      {
        title: "The Good Place",
        synopsis:
          "À sa mort, Eleanor Shellstrop est envoyée au Bon Endroit, un paradis fantaisiste réservé aux individus exceptionnellement bienveillants. Or Eleanor n'est pas exactement une « bonne personne » et comprend vite qu'il y a eu erreur sur la personne. Avec l'aide de Chidi, sa prétendue âme sœur dans l'au-delà, la jeune femme est bien décidée à se redécouvrir.",
        poster:
          "https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg",
        country: "USA",
        year: 2016,
        category_id: this.getRef("category_Comédie").insertId,
      },
      {
        title: "Dark",
        synopsis:
          "Quatre familles affolées par la disparition d'un enfant cherchent des réponses et tombent sur un mystère impliquant trois générations qui finit de les déstabiliser.",
        poster:
          "https://img.betaseries.com/zDxfeFudy3HWjxa6J8QIED9iaVw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc47135385da176a87d0dd9177c5f6a41.jpg",
        country: "Allemagne",
        year: 2017,
        category_id: this.getRef("category_Science-Fiction").insertId,
      },
      {
        title: "True Detective",
        synopsis:
          "La première saison se déroule en Louisiane, en 1995, et narre l'enquête de deux inspecteurs très différents de la Louisiana State Police, Rust Cohle et Martin Hart, chargés de résoudre l'assassinat d'une jeune femme coiffée de bois de cerfs et tatouée de dessins sataniques. Alors qu'ils ont quitté la police, que Rust semble parti à la dérive, que Martin est devenu détective privé, ils sont contactés et interrogés en 2012 par deux autres inspecteurs après qu'un meurtre similaire eut été commis. Cet interrogatoire construit les retours en arrière qui dévoilent les étapes de l'enquête et l'évolution des relations entre les deux hommes et leur psychologie. Après cet interrogatoire, Rust va convaincre son ancien coéquipier de reprendre l'enquête que lui n'a jamais abandonnée. À eux deux, ils vont soulever un coin du mystère d'une série de meurtres sataniques et pédophiles.",
        poster:
          "https://fr.wikipedia.org/wiki/True_Detective#/media/Fichier:True_Detective_2014_Intertitle.jpg",
        country: "Etat-Unis",
        year: 2014,
        category_id: this.getRef("category_Policier").insertId,
      },
      {
        title: "Ash VS Evil Dead",
        synopsis:
          "Ash Williams, ex tueur de démons, vient de passer ces 30 dernières années à vivre dans une caravane et bosser comme vendeur dans un magasin de bricolage. Mais un soir où il est fortement alcoolisé, il fait l’erreur de lire le Nécronomicon qui fait revenir les Cadavéreux, qui menacent ainsi de détruire l'humanité. Ash est contraint de sortir de sa retraite de tueur de démons pour sauver le monde à l'aide de son fusil Remington calibre 12 à canon scié et de sa tronçonneuse fixée à sa main droite. Mais cette fois, il n'est plus seul pour combattre les forces du Mal. Il sera aidé de Pablo et Kelly, deux vendeurs du magasin où il travaille. Ash sera traqué par deux femmes, une policière et une femme mystérieuse qui prétend vouloir se venger d’Ash...",
        poster:
          "https://fr.wikipedia.org/wiki/Ash_vs._Evil_Dead#/media/Fichier:Ash_vs_Evil_Dead.svg",
        country: "Etat-Unis",
        year: 2015,
        category_id: this.getRef("category_Horreur").insertId,
      },
    ];

    programs.forEach((program) => {
      this.insert(program); // insert into program(title, synopsis, poster, country, year, category_id) values (?, ?, ?, ?, ?, ?)
    });
  }
}

// Export the ProgramSeeder class
module.exports = ProgramSeeder;
