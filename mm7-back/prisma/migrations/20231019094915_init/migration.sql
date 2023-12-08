-- CreateTable
CREATE TABLE "Recipes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ofTheDay" BOOLEAN DEFAULT false,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creationDate" DATETIME NOT NULL,
    "image" TEXT NOT NULL,
    "time" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Ingredients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT DEFAULT '',
    "unit" TEXT DEFAULT 'grammes'
);

-- CreateTable
CREATE TABLE "_IngredientsToRecipes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_IngredientsToRecipes_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredients" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_IngredientsToRecipes_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_Recipes_1" ON "Recipes"("id");
Pragma writable_schema=0;

-- CreateIndex
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_Recipes_2" ON "Recipes"("image");
Pragma writable_schema=0;

-- CreateIndex
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_Ingredients_1" ON "Ingredients"("id");
Pragma writable_schema=0;

-- CreateIndex
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_Ingredients_2" ON "Ingredients"("name");
Pragma writable_schema=0;

-- CreateIndex
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_Ingredients_3" ON "Ingredients"("image");
Pragma writable_schema=0;

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientsToRecipes_AB_unique" ON "_IngredientsToRecipes"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientsToRecipes_B_index" ON "_IngredientsToRecipes"("B");
