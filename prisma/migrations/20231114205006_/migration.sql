/*
  Warnings:

  - You are about to drop the `supply` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "supplies"."supply" DROP CONSTRAINT "supply_type_of_supply_id_fk_fkey";

-- DropTable
DROP TABLE "supplies"."supply";

-- CreateTable
CREATE TABLE "supplies"."product" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "type_of_supply_id_fk" UUID NOT NULL,
    "department" VARCHAR(255) NOT NULL,
    "municipality" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "unity_of_measure" VARCHAR(255) NOT NULL,
    "last_price" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "supplies"."product" ADD CONSTRAINT "product_type_of_supply_id_fk_fkey" FOREIGN KEY ("type_of_supply_id_fk") REFERENCES "supplies"."type_of_supply"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
