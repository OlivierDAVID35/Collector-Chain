-- Revert collector_chain:v5 from pg

BEGIN;

ALTER TABLE "property"
ADD CONSTRAINT "property_name_key" UNIQUE ("name");

COMMIT;
