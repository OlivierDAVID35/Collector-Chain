-- Revert collector_chain:V4 from pg

BEGIN;

ALTER TABLE "user"
DROP COLUMN "isOpenToContact",
DROP COLUMN "lastName", 
DROP COLUMN "name"; 

COMMIT;
