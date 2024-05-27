/*
  Warnings:

  - You are about to drop the `_CategoryToProducts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category_id` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToProducts" DROP CONSTRAINT "_CategoryToProducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToProducts" DROP CONSTRAINT "_CategoryToProducts_B_fkey";

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "category_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_CategoryToProducts";

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
