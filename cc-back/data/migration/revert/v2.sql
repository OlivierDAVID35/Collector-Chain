-- Revert collector_chain:v2 from pg

BEGIN;
ALTER TABLE "nft"
DROP CONSTRAINT "rarityCheck";

ALTER TABLE "nft"
RENAME COLUMN "creator_id" TO "user_id";
ALTER TABLE "nft"
DROP COLUMN "rarity",
DROP COLUMN "owner_id";

COMMIT;
