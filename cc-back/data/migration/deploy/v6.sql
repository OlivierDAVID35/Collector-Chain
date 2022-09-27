-- Deploy collector_chain:v6 to pg

BEGIN;

CREATE TABLE "nft_has_property_has_tag" (
"property_id" INT NOT NULL REFERENCES "property"("id"),
"tag_id" INT NOT NULL REFERENCES "tag"("id"),
"nft_id" INT NOT NULL REFERENCES "nft"("id") ON DELETE CASCADE,
PRIMARY KEY("property_id","tag_id","nft_id")
);

COMMIT;
