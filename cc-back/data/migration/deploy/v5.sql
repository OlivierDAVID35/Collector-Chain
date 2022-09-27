-- Deploy collector_chain:v5 to pg

BEGIN;

ALTER TABLE "property"
DROP CONSTRAINT "property_name_key";


COMMIT;
