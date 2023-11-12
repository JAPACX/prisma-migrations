-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "supplies";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "public"."topic" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(250) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."videos" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "topic_id_fk" UUID NOT NULL,
    "description" VARCHAR(250) NOT NULL,
    "time" VARCHAR(250) NOT NULL,
    "url" VARCHAR(250) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "supplies"."department" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplies"."municipality" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "department_id_fk" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "municipality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplies"."supply" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "type_of_supply_id_fk" UUID NOT NULL,
    "municipality_id_fk" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "unity_of_measure" VARCHAR(255) NOT NULL,
    "last_price" VARCHAR NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "supply_pkey" PRIMARY KEY ("id")
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

-- CreateIndex
CREATE UNIQUE INDEX "category_of_supply_name_key" ON "supplies"."category_of_supply"("name");

-- CreateIndex
CREATE UNIQUE INDEX "department_name_key" ON "supplies"."department"("name");

-- CreateIndex
CREATE UNIQUE INDEX "municipality_name_key" ON "supplies"."municipality"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_of_supply_name_key" ON "supplies"."type_of_supply"("name");

-- AddForeignKey
ALTER TABLE "public"."videos" ADD CONSTRAINT "videos_topic_id_fk_fkey" FOREIGN KEY ("topic_id_fk") REFERENCES "public"."topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supplies"."municipality" ADD CONSTRAINT "municipality_department_id_fk_fkey" FOREIGN KEY ("department_id_fk") REFERENCES "supplies"."department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "supplies"."supply" ADD CONSTRAINT "supply_municipality_id_fk_fkey" FOREIGN KEY ("municipality_id_fk") REFERENCES "supplies"."municipality"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "supplies"."supply" ADD CONSTRAINT "supply_type_of_supply_id_fk_fkey" FOREIGN KEY ("type_of_supply_id_fk") REFERENCES "supplies"."type_of_supply"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "supplies"."type_of_supply" ADD CONSTRAINT "type_of_supply_category_of_supply_id_fk_fkey" FOREIGN KEY ("category_of_supply_id_fk") REFERENCES "supplies"."category_of_supply"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
