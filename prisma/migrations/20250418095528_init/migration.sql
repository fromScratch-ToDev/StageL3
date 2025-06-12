-- CreateTable
CREATE TABLE "Tableau" (
    "id" SERIAL NOT NULL,
    "imagePath" TEXT NOT NULL,
    "description_fr" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "laGalerieId" TEXT NOT NULL,

    CONSTRAINT "Tableau_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Galerie" (
    "nom_fr" TEXT NOT NULL,
    "nom_en" TEXT NOT NULL,
    "presentation_fr" TEXT NOT NULL,
    "presentation_en" TEXT NOT NULL,

    CONSTRAINT "Galerie_pkey" PRIMARY KEY ("nom_fr")
);

-- AddForeignKey
ALTER TABLE "Tableau" ADD CONSTRAINT "Tableau_laGalerieId_fkey" FOREIGN KEY ("laGalerieId") REFERENCES "Galerie"("nom_fr") ON DELETE RESTRICT ON UPDATE CASCADE;
