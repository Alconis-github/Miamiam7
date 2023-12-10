/*
  Warnings:

  - You are about to drop the column `A` on the `_IngredientsToRecipes` table. All the data in the column will be lost.
  - You are about to drop the column `B` on the `_IngredientsToRecipes` table. All the data in the column will be lost.
  - Added the required column `ingredient` to the `_IngredientsToRecipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipe` to the `_IngredientsToRecipes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "sqlite_autoindex_Recipes_2";

-- DropIndex
DROP INDEX "sqlite_autoindex_Recipes_1";

-- AlterTable
ALTER TABLE "Recipes" ADD COLUMN "type" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new__IngredientsToRecipes" (
    "ingredient" INTEGER NOT NULL,
    "recipe" INTEGER NOT NULL,
    "quantity" type double,
    CONSTRAINT "_IngredientsToRecipes_recipe_fkey" FOREIGN KEY ("recipe") REFERENCES "Recipes" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_IngredientsToRecipes_ingredient_fkey" FOREIGN KEY ("ingredient") REFERENCES "Ingredients" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
DROP TABLE "_IngredientsToRecipes";
ALTER TABLE "new__IngredientsToRecipes" RENAME TO "_IngredientsToRecipes";
CREATE INDEX "_IngredientsToRecipes_B_index" ON "_IngredientsToRecipes"("recipe");
CREATE UNIQUE INDEX "_IngredientsToRecipes_AB_unique" ON "_IngredientsToRecipes"("ingredient", "recipe");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
