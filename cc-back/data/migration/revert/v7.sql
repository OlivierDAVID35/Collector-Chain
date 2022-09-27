-- Revert collector_chain:v7 from pg

BEGIN;

ALTER TABLE "collection" DROP COLUMN "nameCategoryId";

COMMIT;
