-- Revert collector_chain:v8 from pg

BEGIN;


ALTER TABLE "user"
DROP CONSTRAINT "user_wallet_check",
ADD CONSTRAINT "user_wallet_check" CHECK (wallet > 0::numeric);

ALTER TABLE "nft"
DROP CONSTRAINT "nft_price_check",
ADD CONSTRAINT "nft_price_check" CHECK (price > 0::numeric);

ALTER TABLE "nft"
DROP COLUMN "serial",
DROP COLUMN "model";

COMMIT;
