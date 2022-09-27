-- Revert collector_chain:v9 from pg

BEGIN;

DROP VIEW getAllNftWithJoin;

COMMIT;
