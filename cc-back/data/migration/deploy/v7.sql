-- Deploy collector_chain:v7 to pg

BEGIN;

ALTER TABLE "collection"
  ADD COLUMN "nameCategoryId" TEXT UNIQUE NOT NULL GENERATED ALWAYS AS 
(CASE WHEN "name" IS NULL THEN "category_id"::text
      WHEN "category_id"::text  IS NULL THEN "name"
      ELSE "name" || "category_id"::text END) STORED;

COMMIT;
