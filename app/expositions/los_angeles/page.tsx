import H2 from "@/components/Text/H2";
import H3 from "@/components/Text/H3";
import Image from "next/image";


function LosAngeles() {
  return (
    <>
        <H2 text_fr={"Exposition Los Angeles"} text_en={"Los Angeles Exhibition"} className="text-center"></H2>
        <H3 text_fr={"Liste expositions"} text_en={"List of exhibitions"}></H3>
        <div className="relative aspect-[1/1.6] w-full sm:w-[75%] md:w-[50%]">
            <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_los_angeles/image1.jpeg'} fill alt="affiche de l'exposition"></Image>
        </div>
        <H3 text_fr={"Affiches Expositions Los Angeles"} text_en={"Los Angeles Exhibition Posters"} className="mt-5"></H3>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full sm:w-[75%] md:w-full gap-5 mb-5">
            <div className="relative aspect-[1/1.6]">
                <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_los_angeles/image2.jpeg'} fill alt="affiche de l'exposition"></Image>
            </div>
            <div className="relative aspect-[1/1.6]">
                <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_los_angeles/image3.jpeg'} fill alt="affiche de l'exposition"></Image>
            </div>
        </div>
        <H3 text_fr={"Presse"} text_en={"Press"} className="mt-5"></H3>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 aspect-[2/1.6] gap-5">
            <div className="relative row-span-2 aspect-[1/1.6] md:aspect-auto w-full sm:w-[75%] md:w-full ">
                <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_los_angeles/image4.jpeg'} fill alt="affiche de l'exposition"></Image>
            </div>
            <div className="relative aspect-[1/0.8] w-full sm:w-[75%] md:w-full ">
                <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_los_angeles/image5.jpeg'} fill alt="affiche de l'exposition"></Image>
            </div>
            <div className="relative aspect-[1/0.8] w-full sm:w-[75%] md:w-full">
                <Image className="shadow-black shadow-md object-contain bg-black/20" src={'/images/exposition_los_angeles/image6.jpeg'} fill alt="affiche de l'exposition"></Image>
            </div>
        </div>

    </>
  )
}

export default LosAngeles