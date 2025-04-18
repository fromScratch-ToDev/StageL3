import { Prisma, PrismaClient } from '../src/app/generated/prisma'

const prisma = new PrismaClient()

const galerieData: Prisma.GalerieCreateInput[] = [
      {
        nom_fr: 'Stylo à bille 1971-1972',
        nom_en: 'Ballpoint pen 1971-1972',
        presentation_fr: `Revenant de mon premier et éprouvant voyage en Inde en 1970, je fus attiré par une expression minimaliste, et réduis mes outils à du « papier carotte » (que j'achetais pour rien dans l'imprimerie d'un journal de Marseille), et à un stylo à bille noir. Cette technique s’imposait à moi comme vecteur parfaitement adapté à « mon monde » d’alors. Cela se vérifia chaque fois ensuite. Lorsque mon monde changeait, une technique différente s'imposait.`,
        presentation_en: `After returning from my first and challenging trip to India in 1970, I was drawn to a minimalist expression and reduced my tools to papier newsprint (which I bought for next to nothing from a newspaper printing house in Marseille) and a black ballpoint pen. This technique naturally imposed itself as a medium perfectly suited to my inner world at the time. This was confirmed each time thereafter: whenever my inner world changed, a different technique would emerge.`,
      },
      {
        nom_fr: 'Encres de chine Marseille/Luminy (1972-1974)',
        nom_en: 'India Ink Marseille-Luminy (1972–1974)',
        presentation_fr: `Après un an et demi environ de travail au stylo à bille, j’eus envie d’un support plus lumineux. Le papier carotte fit place à du papier chromecoat, blanc, argent, ou noir.

                          Le papier chromé-couché est plus souvent appelé simplement « chromecoat ». C'est un papier de haute qualité qui a subi un traitement spécial pour lui donner une surface lisse et brillante. Il est recouvert d'une ou plusieurs couches de produits minéraux (comme le kaolin ou le carbonate de calcium) qui lui donnent son aspect brillant, satiné ou mat, selon le type de finition. Quand il est très brillant, on parle de couché brillant (glossy) ; c'est celui-la que j'utilisais.
                          Le stylo à bille laissa la place au Rotring, aux pinceaux et à l’encre de chine ; j’utilisai des aiguilles utilisées pour lire les disques vinyles ; je les fixai sur un manche en bois afin de graver la surface du papier ; j’utilisai du papier abrasif à l’eau très fin pour frotter cette même surface lorsque je voulais faire apparaître la couche en kaolin ou en carbonate de calcium.  
                          Et ces images apparurent.`,
        presentation_en: `After about a year and a half of working with ballpoint pen, I felt the need for a brighter surface. The blank newsprint — commonly called 'carrot paper' — was replaced by Chromecoat paper in white, silver, or black.
                          Chromed coated paper is more commonly referred to simply as 'Chromecoat.' It's a high-quality paper that has undergone a special treatment to give it a smooth, glossy surface. It's coated with one or more layers of mineral substances—such as kaolin or calcium carbonate—which give it a shiny, satin, or matte finish, depending on the type. I used the high-gloss version, known as glossy coated paper.


                          The ballpoint pen gave way to Rotring pens, brushes, and India ink. I used needles originally designed to read vinyl records, mounting them on wooden handles to engrave the surface of the paper. I used very fine wet sandpaper to rub that same surface whenever I wanted to reveal the layer of kaolin or calcium carbonate.

                          And these images Materialized.`,
      },
      {
        nom_fr: 'Monotypes 1977-1979',
        nom_en: 'Monotypes from 1977 to 1979',
        presentation_fr: `Le monotype est une technique d'impression unique (l'image obtenue ne peut être répétée). 
                          Il combine des éléments de la peinture et de la gravure. 
                          Le monotype nécessite un travail assez rapide car l'encre sèche.
                          Une fois l'image obtenue, il suffit de la transférer sur une feuille de papier par pression.
                          Il faut ensuite retirer délicatement la feuille de papier.
                          Moment magique car le dessin apparaît enrichi par les hasards des dépôts d'encre non maîtrisables.
                          L'aspect imprévisible de cette technique correspondait parfaitement au monde intérieur que je souhaitais exprimer. J’enduisais une plaque de verre d'encre d'impression à l'aide d'un rouleau en caoutchouc puis à l'aide de différents outils permettant de retirer ou d'ajouter de l'encre, je créais l'image souhaitée.`,
        presentation_en: `Monotype is a unique printmaking technique (the resulting image cannot be reproduced).
                          It combines elements of both painting and printmaking.
                          Monotype requires fairly quick work because the ink dries.
                          Once the image is ready, it is transferred onto a sheet of paper by applying pressure.

                          The paper then had to be carefully peeled off.
                          A magical moment, as the drawing would appear, enhanced by the accidental and uncontrollable deposits of ink.

                          The unpredictable nature of this technique perfectly matched the inner world I sought to express.
                          I would coat a glass plate with printing ink using a rubber roller, and then, with various tools allowing me to remove or add ink, I shaped the image I envisioned.`,
      },
      {
        nom_fr: 'Croquis traits continus 1977-1979',
        nom_en: 'Continuous Line Drawings 1977-1979',
        presentation_fr: `À mesure que les morceaux épars de mon existence trouvaient leur fil d'Ariane à travers l'introspection, le besoin de dessiner sans fractionner le trait s'imposa.`,
        presentation_en: `As the scattered pieces of my existence found their Ariadne's thread through introspection, The necessity of drawing without lifting the pen became evident.`,
      },
      {
        nom_fr: 'Encres de chine et « lying »',
        nom_en: 'India ink and « lying down technique »',
        presentation_fr: `En 1975, je fus accueilli au Bost, premier ashram d'Arnaud Desjardins. 
                    L'année suivante, guidé par Denise Desjardins, j'ai commencé à explorer les profondeurs de mon inconscient à travers « le lying » — une méthode développée par Swami Prajnanpad entre 1930 et 1950.
                    L'intensité de ce qui surgit de l'inconscient me contraint à imager les états d'âme retrouvés. Le résultat fut si sombre que j'ai décidé de ne jamais montrer ces dessins à l'encre avant qu'une aube ne marque la fin de ce voyage intérieur. Ils sont ainsi restés cachés jusqu'en 1985.`,
        presentation_en: `I first arrived at Le Bost, Arnaud Desjardins' original ashram, in 1975.
                    The following year, guided by Denise Desjardins, I began exploring the depths of my unconscious through the 'lying down technique' — a method developed by Swami Prajnanpad between 1930 and 1950.
                    The intensity of what surfaced from the unconscious compelled me to depict the soul-states that had been recalled. The result was so dark that I decided never to show these ink drawings until a dawn marked the end of that inner journey. So, they remained hidden until 1985.`,
      },
      {
        nom_fr: 'Peinture à la caséine',
        nom_en: 'Casein painting 1981',
        presentation_fr: `Cette peinture marqua l'aube d'une expression nouvelle plus apaisée. 
                          J'ai appris de mon père trois techniques : à travers l'icône, la peinture à L’œuf et la dorure à la feuille d'or. 
                          Également ce qu'il appelait "laque de Byzance". 
                          La laque de Byzance est une peinture à base de caséine brunie en finale à la pierre d’agate. 
                          Le résultat est une matière très belle, précieuse et satinée`,
        presentation_en: `This painting marked the dawn of a new, more serene form of expression.
                          I learned three techniques from my father: through the icon, egg tempera painting, and gold leaf gilding.
                          He also taught me what he called the "Byzantine lacquer."
                          Byzantine lacquer is a casein-based paint, burnished at the end with an agate stone.

                          The result is a beautiful, precious, and satin-like finish.`,
      },
      {
        nom_fr: 'Dessins préparatoires à partir de 1985',
        nom_en: 'Preparatory drawings from 1985 onward',
        presentation_fr: ``,
        presentation_en: ``,
      },
      {
        nom_fr: 'Peintures',
        nom_en: 'Painting',
        presentation_fr: `La fin de l'anamnèse, à travers la méthode du lying conçue par swami Prajnanpad, s'accompagna entre autres choses de deux changements : mes rêves qui, jusqu'à ce jour, étaient en noir et blanc, devinrent colorés ; quant à l'expression artistique, elle s'habilla elle aussi de couleurs, elle qui, jusqu'à ce jour, se cantonnait en une expression achromatique. 
                        Un nouvelle technique - L'acrylique et l’aérographe - s'imposa à moi comme rupture nécessaire avec celles que j'avais appris, mais aussi comme un média mieux adapté pour retranscrire ce que l'âme souhaitait exprimer maintenant. 
                        Ce ne fut pas pour autant du goût de tout le monde ! 
                        Certains dirent « quel dommage ! » 
                        D’autres ressentirent qu’une expression intrusive, coup de poing, avait fait place à des images qui emmènent celui ou celle qui prend le temps de s’y arrêter, en un lieu plus intérieur, plus unifié, plus serein.`,
        presentation_en: `The end of the anamnesis, through the lying method developed by Swami Prajnanpad, was accompanied, among other things, by two changes : my dreams, which until that day, had been in black and white, became colored ; As for artistic expression, it too dressed itself in colors, it who, until that day, had confined itself to an achromatic form.

                          A new technique—acrylic and airbrush—imposed itself on me as a necessary break from those I had learned, but also as a medium better suited to transcribe what the soul now wished to express.
                          That was not to everyone’s liking!
                          Some said, « It’s a shame! »
                          Others felt that an intrusive, punchy form of expression, had given way to images that, for those who take the time to linger, lead to a more inner, more unified, more serene place.`,
      },
    ]
  

const tableauData: Prisma.TableauCreateInput[] = []
//tableaux stylo à bille
for (let index = 1; index < 8; index++) {
  tableauData.push({
    imagePath: `/images/stylo_a_bille/sab${index}.jpg`,
    description_fr: '',
    description_en: '',
    laGalerie: { connect: { nom_fr: "Stylo à bille 1971-1972", },
      },
  })
}
//tableaux encre de chine Marseille/Luminy
for (let index = 1; index < 13 ; index++) {
    tableauData.push({
      imagePath:`/images/encre_de_chine_marseille_luminy/edc${index}.jpg`,
      description_fr:`François Malespine Luminy ENCRES DE CHINE ${index}`,
      description_en: `François Malespine Luminy INDIA INKS ${index}`,
      laGalerie: { connect: { nom_fr: "Encres de chine Marseille/Luminy (1972-1974)", }}
    })
  
}
//tableaux monotypes
let num = ["1","1 bis","2","3","4","4 bis","5","8","9","9 bis","10","11","12","14","15"]
for (let index = 1; index < 16; index++) {
  tableauData.push({
    imagePath: `/images/monotypes/m${index}.jpg`,
    description_fr: `François Malespine monotypes ${num[index-1]}`,
    description_en: `François Malespine monotypes ${num[index-1]}`,
    laGalerie: { connect: { nom_fr: "Monotypes 1977-1979", },
      },
  })
}
//tableaux traits continus
num = ["1","2","2 bis","3","3 bis","3 ter","4","4 bis","5","6","7","7 bis","8"]
for (let index = 1; index < 14; index++) {
  tableauData.push({
    imagePath: `/images/croquis_traits_continu/ctc${index}.jpg`,
    description_fr: `François Malespine croquis trait continu ${num[index-1]}`,
    description_en: `François Malespine croquis trait continu ${num[index-1]}`,
    laGalerie: { connect: { nom_fr: "Croquis traits continus 1977-1979", },
      },
  })
}
//tableaux encre de chine et lying
const descriptionFR = ["François Malespine Janvier 1976. 57,5cm x 67cm","François Malespine Février 1976 : « Passage ». 59,5cm x 62cm","François Malespine Février 1976 : « Naissance ». 53cm x 36,5cm","François Malespine Mars 1976 : « Un jour, la pluie ». 67,5cm x 61cm","François Malespine Mars 1976 : « Marécage ». 45cm x 76cm","François Malespine Avril 1976 : « L’eau ». 67,5cm x 70cm","François Malespine Mai 1976 : « Interférence ». 51cm x 51cm","François Malespine Juin 1976 : « La traversée ». 70cm x 70cm","François Malespine 5 novembre 1976 : « Traversée ». 48cm x 52cm","François Malespine Octobre 1977 – « n° 1 »","François Malespine octobre 1977 « n°2 »","François Malespine Octobre 1977 – « n° 3 »","François Malespine Octobre 1977 n° « 4 »","François Malespine Octobre 1977 -« n° 5 »","François Malespine Novembre 1977 « n°1 »","François Malespine Novembre 1977 « n° 2 »","François Malespine Novembre 1977 \"n°3\" 70cm x 84cm","François Malespine Décembre 1977. n°1 « Le passeur ». 100cm x 70cm","François Malespine Décembre 1977 n°2 « L’homme à la fenêtre »","François Malespine Mars 1978","François Malespine Mai 1978","François Malespine Octobre 1978","François Malespine encres et lying 1979 dimension 100cm x 71cm","François Malespine Visage 1979","François Malespine encres et lying 1979 dimension 100cm x 71cm","François Malespine encres et lying 1979 dimension 100cm x 61cm","François Malespine Visage 1979 n°2","1 Décembre 1981 - « Le voyage en avion » François Malespine"];
const descriptionEN = ["François Malespine January 1976. 57.5cm x 67cm","François Malespine February 1976: 'Passage'. 59.5cm x 62cm","François Malespine February 1976: 'Birth'. 53cm x 36.5cm","François Malespine March 1976: 'One Day, the Rain'. 67.5cm x 61cm","François Malespine March 1976: 'Swamp'. 45cm x 76cm","François Malespine April 1976: 'Water'. 67.5cm x 70cm","François Malespine May 1976: 'Interference'. 51cm x 51cm","François Malespine June 1976: 'The Crossing'. 70cm x 70cm","François Malespine November 5, 1976: 'Crossing'. 48cm x 52cm","François Malespine October 1977 – 'No. 1'","François Malespine October 1977 – 'No. 2'","François Malespine October 1977 – 'No. 3'","François Malespine October 1977 – 'No. 4'","François Malespine October 1977 – 'No. 5'","François Malespine November 1977 – 'No. 1'","François Malespine November 1977 – 'No. 2'","François Malespine November 1977 – 'No. 3' 70cm x 84cm","François Malespine December 1977. No. 1: 'The Ferryman'. 100cm x 70cm","François Malespine December 1977 No. 2: 'The Man at the Window'","François Malespine March 1978","François Malespine May 1978","François Malespine October 1978","François Malespine inks and lying 1979 size 100cm x 71cm","François Malespine Face 1979","François Malespine inks and lying 1979 size 100cm x 71cm","François Malespine inks and lying 1979 size 100cm x 61cm","François Malespine Face 1979 No. 2","December 1, 1981 – 'The Airplane Trip' François Malespine"];

for (let index = 1; index < 28; index++) {
  tableauData.push({
    imagePath: `/images/encre_de_chine_et_lying/l${index}.jpg`,
    description_fr: descriptionFR[index-1],
    description_en: descriptionEN[index-1],
    laGalerie: { connect: { nom_fr: "Encres de chine et « lying »", },
      },
  })
}
// peinture à la caséine
tableauData.push({
  imagePath: `/images/peinture_a_la_caseine/pc1.jpg`,
  description_fr: `François Malespine – Laque 1981 40cm x 50cm`,
  description_en: `François Malespine – Lacquer 1981, 40cm x 50cm`,
  laGalerie: { connect: { nom_fr: "Peinture à la caséine", },
    },
})
//dessins préparatoires
for (let index = 1; index < 58; index++) {
  tableauData.push({
    imagePath:`/images/dessins_preparatoires/dp${index}.jpg`,
    description_fr: `François Malespine dessins préparatoires ${index}`,
    description_en: `François Malespine preparatory drawings ${index}`,
    laGalerie: {connect: { nom_fr:"Dessins préparatoires à partir de 1985"}},
  })  
}
// peintures


  export async function main() {
    for (const g of galerieData) {
        await prisma.galerie.create({ data: g })
      }
    for (const t of tableauData) {
      await prisma.tableau.create({ data: t })
    }
  }

main()  