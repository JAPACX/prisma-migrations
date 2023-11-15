-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "supplies";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "technical_advice";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "technical_advice"."technical_advice_topic_video" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(250) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "technical_advice_topic_video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "technical_advice"."technical_advice_video" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "topic_id_fk" UUID NOT NULL,
    "description" VARCHAR(250) NOT NULL,
    "time" VARCHAR(250) NOT NULL,
    "url" VARCHAR(250) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "technical_advice_video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplies"."category_of_supply" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_of_supply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplies"."type_of_supply" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "category_of_supply_id_fk" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "type_of_supply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplies"."supply" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "type_of_supply_id_fk" UUID NOT NULL,
    "department" VARCHAR(255) NOT NULL,
    "municipality" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "unity_of_measure" VARCHAR(255) NOT NULL,
    "last_price" VARCHAR NOT NULL,
    "last_price2" VARCHAR,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "supply_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "category_of_supply_name_key" ON "supplies"."category_of_supply"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_of_supply_name_key" ON "supplies"."type_of_supply"("name");

-- AddForeignKey
ALTER TABLE "technical_advice"."technical_advice_video" ADD CONSTRAINT "technical_advice_video_topic_id_fk_fkey" FOREIGN KEY ("topic_id_fk") REFERENCES "technical_advice"."technical_advice_topic_video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supplies"."type_of_supply" ADD CONSTRAINT "type_of_supply_category_of_supply_id_fk_fkey" FOREIGN KEY ("category_of_supply_id_fk") REFERENCES "supplies"."category_of_supply"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "supplies"."supply" ADD CONSTRAINT "supply_type_of_supply_id_fk_fkey" FOREIGN KEY ("type_of_supply_id_fk") REFERENCES "supplies"."type_of_supply"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
