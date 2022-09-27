-- Deploy collector_chain:v2 to pg

BEGIN;

ALTER TABLE "nft"
ADD COLUMN "owner_id" INT REFERENCES "user"("id") ON DELETE CASCADE,
ADD COLUMN "rarity" TEXT NOT NULL DEFAULT(1),
ADD CONSTRAINT "rarityCheck" CHECK("rarity" ~ '^[1-8]$|^[1-7|][0]$|^[1|6][5]$|^12$');

ALTER TABLE "nft"
RENAME COLUMN "user_id" TO "creator_id";

UPDATE "nft" 
SET "owner_id" = (SELECT "creator_id" FROM "nft");

ALTER TABLE "nft"
ALTER COLUMN "owner_id" SET NOT NULL;

COMMIT;
