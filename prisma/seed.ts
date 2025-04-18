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
        nom_fr: 'Encres de chine et lying 1976-1985',
        nom_en: '',
        presentation_fr: ``,
        presentation_en: ``,
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
    ]
  

const tableauData: Prisma.TableauCreateInput[] = []
//tableaux stylo à bille
for (let index = 1; index < 8; index++) {
  tableauData.push({
    imagePath: `/images/stylo_a_bille/sab${index}.jpg`,
    description_fr: '',
    description_en: '',
    laGalerie: { connect: { id: 1, },
      },
  })
}
//tableaux monotypes
let num = ["1","1 bis","2","3","4","4 bis","5","8","9","9 bis","10","11","12","14","15"]
for (let index = 1; index < 16; index++) {
  tableauData.push({
    imagePath: `/images/monotypes/m${index}.jpg`,
    description_fr: `François Malespine monotypes ${num[index-1]}`,
    description_en: `François Malespine monotypes ${num[index-1]}`,
    laGalerie: { connect: { id: 2, },
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
    laGalerie: { connect: { id: 3, },
      },
  })
}
//tableaux encre de chine et lying
for (let index = 1; index < 28; index++) {
  tableauData.push({
    imagePath: `/images/encre_de_chine_et_lying/l${index}.jpg`,
    description_fr: ``,
    description_en: ``,
    laGalerie: { connect: { id: 4, },
      },
  })
}
// peinture à la caséine
tableauData.push({
  imagePath: `/images/peinture_a_la_caseine/pc1.jpg`,
  description_fr: `François Malespine – Laque 1981 40cm x 50cm`,
  description_en: `François Malespine – Lacquer 1981, 40cm x 50cm`,
  laGalerie: { connect: { id: 5, },
    },
})

  export async function main() {
    for (const g of galerieData) {
        await prisma.galerie.create({ data: g })
      }
    for (const t of tableauData) {
      await prisma.tableau.create({ data: t })
    }
  }

main()  