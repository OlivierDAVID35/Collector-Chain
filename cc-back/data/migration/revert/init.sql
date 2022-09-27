-- Revert collector-chain:init from pg

BEGIN;

DROP TABLE "category", "collection", "user", "nft", "tag", "property", "favorite";

COMMIT;
