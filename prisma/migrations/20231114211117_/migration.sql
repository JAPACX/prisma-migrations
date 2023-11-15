-- AlterTable
ALTER TABLE "supplies"."product" ALTER COLUMN "department" DROP NOT NULL,
ALTER COLUMN "municipality" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "unity_of_measure" DROP NOT NULL,
ALTER COLUMN "last_price" DROP NOT NULL,
ALTER COLUMN "last_price" SET DATA TYPE VARCHAR(255);
