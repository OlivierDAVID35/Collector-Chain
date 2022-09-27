-- Revert collector_chain:v10 from pg

BEGIN;

ALTER TABLE "nft"
DROP COLUMN "showcase_id";

COMMIT;
