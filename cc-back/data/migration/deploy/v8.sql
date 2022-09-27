-- Deploy collector_chain:v8 to pg

BEGIN;

ALTER TABLE "nft"
ADD COLUMN "serial" TEXT,
ADD COLUMN "model" TEXT;

ALTER TABLE "nft"
DROP CONSTRAINT "nft_price_check",
ADD CONSTRAINT "nft_price_check" CHECK (price >= 0::numeric);

ALTER TABLE "user"
DROP CONSTRAINT "user_wallet_check",
ADD CONSTRAINT "user_wallet_check" CHECK (wallet >= 0::numeric);

COMMIT;
