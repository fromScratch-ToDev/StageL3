-- CreateTable
CREATE TABLE "Tableau" (
    "id" SERIAL NOT NULL,
    "imagePath" TEXT NOT NULL,
    "description_fr" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "laGalerieNom" TEXT NOT NULL,

    CONSTRAINT "Tableau_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Galerie" (
    "nom" TEXT NOT NULL,
    "presentation_fr" TEXT NOT NULL,
    "presentation_en" TEXT NOT NULL,

    CONSTRAINT "Galerie_pkey" PRIMARY KEY ("nom")
);

-- AddForeignKey
ALTER TABLE "Tableau" ADD CONSTRAINT "Tableau_laGalerieNom_fkey" FOREIGN KEY ("laGalerieNom") REFERENCES "Galerie"("nom") ON DELETE RESTRICT ON UPDATE CASCADE;
