"use client"
import Carousel from "@/components/Carousel/Carousel"
import H2 from "@/components/Text/H2"
import H3 from "@/components/Text/H3"
import P from "@/components/Text/P"
import e05 from "@/public/images/exposition_gaillac/exposition-05.jpg"
import e06 from "@/public/images/exposition_gaillac/exposition-06.jpg"
import e07 from "@/public/images/exposition_gaillac/exposition-07.jpg"
import { EmblaOptionsType } from "embla-carousel"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

const text_fr_discours_ouverture = `L’image a toujours tenu une place prépondérante dans ma vie.

Aussi loin que je me souvienne, qu’elle soit extérieure ou intérieure, je la ressens comme un miroir m’invitant à voir les contenus que la conscience de l’homme abrite.

Bien sûr, enfant, je n’aurais pas utilisé ces mots : l’image, en moi, ouvrait simplement des portes sur des perceptions intérieures allant d’une paix parfaite à l’angoisse la plus insoutenable.

J’aurais pu me contenter d’en jouer, selon l’humeur et l’envie du moment ; à la place de cela, une question prit forme : celle de l’œuf et de la poule.

Est-ce l’image qui provoque le ressenti, ou est-ce ce que je porte en moi qui donne une tonalité émotionnelle à l’image ?

Les images qui sont dans ces salles parlent de ce cheminement. Je n’ai jamais peint ni dessiné pour faire une œuvre. J’ai simplement observé ce qui voulait se dire, et comment cela voulait se dire.

Ce processus a toujours commencé par l’attirance pour un support ou une technique particulière.

Ainsi le premier voyage que je fis en Inde provoqua le rejet du support précieux ou simplement un peu onéreux. S’imposa alors à moi l’utilisation du papier journal vierge et du stylo à bille noir, que vous pouvez voir dans la vitrine de la première salle. Ce support permit l’émergence d’un monde naissant, un peu comme le révélateur dans lequel est plongé le papier du photographe. Ce travail dura une année puis je rencontrai par hasard, mais le hasard existe-t-il, le papier chromcoat, un papier glacé, épais, brillant comme du papier photo pour le papier blanc, satiné pour l’argenté. Ce papier attira l’envie d’encre de chine et le besoin d’utiliser un abrasif pour supprimer par endroit la brillance. Je découvris alors que les parties abrasées laissaient apparaître une matière proche du blanc d’Espagne. La texture du papier, les noirs infinis de l’encre, firent naître un univers nouveau que vous pouvez découvrir sous le titre « encres de chine Marseille/Luminy », nom du campus à Marseille où je suivais les cours. Mais ces encres furent faites dans ma chambre-atelier que je louais dans la partie inhabitée et très vétuste d’une grande maison ancienne donnant sur des maraîchages.

Les encres intitulées « lying », toutes en noir et blanc, sont nées de la traversée de l’inconscient. Cette traversée a permis l’accès à un monde en couleur dont les peintures acryliques témoignent et m’a fait toucher du doigt ce qu’on appelle aujourd’hui création artistique.

La création artistique, de nos jours – il n’en fut pas toujours ainsi – est l’expression d’impressions oubliées, d’un vécu personnel, ou de convictions qui en sont directement les fruits. Il ne faut pas croire que ce monde soit riche. Ce type d’expression ressemble aux images que l’on voit dans un kaléidoscope : miroitements infinis d’un contenu unique.

Lorsque ce monde fait des hurlements du moi se tait, alors, au cœur du silence retrouvé, un monde plus intérieur s’actualise sous forme d’images. Ce monde dont la nature est vacuité, se dit à travers des formes, des couleurs. C’est un monde qui n’agresse pas, qui est là, comme le ruisseau pour le passant. Simplement là pour celui qui veut bien s’y arrêter et prendre le temps d’y entrer.

Si des empreintes de pas vous conduisent d’image en image, c’est simplement parce que cette exposition est un cheminement qui vous est proposé, de l’ombre vers la lumière.`


const text_en_discours_ouverture = `Images have always played a major role in my life.

For as long as I can remember, whether external or internal, I’ve felt them as mirrors inviting me to see the contents held within human consciousness.

Of course, as a child, I wouldn’t have used those words: images, for me, simply opened doors to inner perceptions ranging from perfect peace to unbearable anguish.

I could have been content to play with them, according to my mood or whim; but instead, a question took shape — that of the chicken and the egg.

Is it the image that triggers the feeling, or is it what I carry within me that gives the image its emotional tone?

The images in these rooms speak of that journey. I have never painted or drawn with the goal of making art. I simply observed what wanted to be expressed, and how it wanted to be expressed.

This process has always begun with an attraction to a particular medium or technique.

Thus, the first trip I took to India caused me to reject precious or even slightly expensive materials. What imposed itself instead was the use of blank newspaper and a black ballpoint pen, as you can see in the display case in the first room. That medium allowed a nascent world to emerge, much like the developer in which a photographer dips their paper. That work lasted a year, and then I stumbled upon — though does chance really exist? — chromcoat paper, a glossy, thick paper, shiny like photo paper when white, satin-finished when silver. This paper awakened a desire for India ink and the need to use an abrasive to remove the gloss in places. I then discovered that the abraded areas revealed a texture close to Spanish white. The texture of the paper and the infinite blacks of the ink gave rise to a new universe that you can discover under the title India Inks Marseille/Luminy, named after the campus in Marseille where I was studying. But these inks were created in the room-studio I rented in the uninhabited and very dilapidated part of an old house overlooking market gardens.

The works entitled Lying, all in black and white, were born from a journey through the unconscious. This journey opened access to a world of color, which the acrylic paintings reflect, and it allowed me to glimpse what is now called artistic creation.

Artistic creation today — though it was not always so — is the expression of forgotten impressions, of personal experience, or of convictions that are its direct fruit. One shouldn’t believe that this world is rich. This kind of expression resembles the images seen in a kaleidoscope: endless reflections of a single content.

When this world — made of the ego’s cries — falls silent, then, at the heart of the regained silence, a more inward world begins to take form as images. This world, whose nature is emptiness, expresses itself through shapes and colors. It is a world that does not assault, that simply exists — like a stream for the passerby. Simply there for whoever is willing to pause and take the time to step in.

If footprints lead you from one image to another, it is simply because this exhibition is a journey offered to you — from shadow into light.`

type Slide = {
  nom_fr? : string,
  nom_en? : string,
  path : string | StaticImageData ,
  redirect? : string,
  aspect? : string,
}


function Expositions() {
  const OPTIONS: EmblaOptionsType = { dragFree: true }
  const slides1 : Slide[] = [{path : e05, aspect : e05.width.toString()+"/"+e05.height.toString()},
                            {path : e06, aspect : e06.width.toString()+"/"+e06.height.toString()},
                            {path : e07, aspect : e07.width.toString()+"/"+e07.height.toString()}]  
  
  return (
    <>
      <H2 text_fr="Exposition - Gaillac" text_en="Gaillac Exhibition" className=" text-center"></H2>
      <H3 text_fr={`Rétrospective - Musée de Gaillac`} text_en={"Retrospective – Gaillac Museum"}></H3>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 ">
        <div className="relative aspect-[1/1.6]">
          <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_gaillac/exposition-01.jpg'} fill alt="affiche de l'exposition"></Image>
        </div>
        <div className="relative aspect-[1.1/1] md:aspect-[1/1.6]">
          <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_gaillac/exposition-02.jpg'} fill alt="entrée du musée"></Image>
        </div>
      </div>
      <H3 text_fr="Peinture à l'oeuf et dorure à la feuille" text_en="Egg tempera painting and gold leaf gilding" className="mt-5"></H3>
      <P text_fr="En 1969 j'apprends avec mon père Claude Malespine la peinture à l'oeuf, la dorure à la feuille, le travail de l'or"
      text_en="In 1969, I learned egg tempera painting, gold leaf gilding, and gold craftsmanship from my father, Claude Malespine."></P>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5  ">
        <div className="relative aspect-[1.6/1]">
          <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_gaillac/exposition-03.jpg'} fill alt="peinture à l'oeuf et dorure"></Image>
        </div>
        <div className="relative aspect-[1.6/1]">
          <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_gaillac/exposition-04.jpg'} fill alt="vue de la peinture dans une vitrine avec des dessins aux stylo à bille"></Image>
        </div>
      </div>
      <H3 text_fr='Encre de chine "Marseille / Luminy"' text_en='India Ink "Marseille / Luminy"' className="mt-5"></H3>
      <Carousel slides={slides1} options={OPTIONS} className="h-[30vh] md:h-[40vh] w-auto object-contain shadow-black shadow-md"></Carousel>
      <H3 text_fr="Dessin à l'encre de chine et au pinceau" text_en='Ink drawing made with a brush.' className="mt-5"></H3>
      <div className="relative aspect-[1.6/1] w-full">
          <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_gaillac/exposition-08.jpg'} fill alt="affiche de l'exposition"></Image>
      </div>
      <H3 text_fr='"Lying"' text_en='"Lying"' className="mt-5"></H3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5  ">
        <div className="relative aspect-[1.1/1]">
          <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_gaillac/exposition-09.jpg'} fill alt="peinture suite à des lying"></Image>
        </div>
        <div className="relative aspect-[1.1/1]">
          <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_gaillac/exposition-10.jpg'} fill alt="peinture suite à des lying"></Image>
        </div>
        <div className="relative aspect-[1.1/1]">
          <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_gaillac/exposition-11.jpg'} fill alt="peintures suite à des lying"></Image>
        </div>
      </div>
      <H3 text_fr='Autres' text_en='Others' className="mt-5"></H3>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5  ">
        <div className="relative md:col-span-2 aspect-[3/1.2]">
          <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_gaillac/exposition-12.jpg'} fill alt="vue panoramique d'une pièce de la galerie"></Image>
        </div>
        <div className="relative md:col-span-2 aspect-[3/1.1]">
          <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_gaillac/exposition-13.jpg'} fill alt="vue panoramique d'une autre pièce de la galerie"></Image>
        </div>
        <div className="relative aspect-[1.1/1]">
          <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_gaillac/exposition-14.jpg'} fill alt="vue ouverte d'une pièce de la galerie"></Image>
        </div>
        <div className="relative aspect-[1.1/1]">
          <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_gaillac/exposition-15.jpg'} fill alt="vue ouverte d'une pièce de la galerie"></Image>
        </div>
      </div>  
      <H3 text_fr='Discours d’ouverture' text_en='Opening speech' className="mt-5 text-center"></H3>
      <P text_fr={text_fr_discours_ouverture} text_en={text_en_discours_ouverture} className="text-justify max-w-[65ch] m-auto pb-5"></P>
      <H3 text_fr="Exposition Los Angeles" text_en="Los Angeles exhibition" ></H3>
      <Link href="/expositions/los_angeles"><P
        text_fr="Cliquer ici pour voir les affiches et articles de presses de l'exposition de Los Angeles"
        text_en="Click here to see the posters and press articles from the Los Angeles exhibition."
      ></P></Link>
    </>
  )
}

export default Expositions