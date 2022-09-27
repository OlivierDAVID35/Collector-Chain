-- Deploy collector_chain:V4 to pg

BEGIN;

ALTER TABLE "user"
ADD COLUMN "name" TEXT, 
ADD COLUMN "lastName" TEXT, 
ADD COLUMN "isOpenToContact" BOOL DEFAULT(TRUE);

COMMIT;
