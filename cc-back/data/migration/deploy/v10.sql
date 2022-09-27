-- Deploy collector_chain:v10 to pg

BEGIN;

ALTER TABLE "nft"
ADD COLUMN "showcase_id" INT;

COMMIT;
