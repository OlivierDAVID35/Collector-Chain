-- Deploy collector_chain:v9 to pg

BEGIN;

CREATE VIEW getAllNftWithJoin AS
SELECT nft.*,
array_agg(property.name) as property,
array_agg(tag.name) as tag,
"creator".nickname as creator,
"owner".nickname as owner
FROM "nft"
FULL JOIN "nft_has_property_has_tag" ON "nft_has_property_has_tag"."nft_id" = "nft"."id"
FULL JOIN "property" ON "property"."id" = "nft_has_property_has_tag"."property_id"
FULL JOIN "tag" ON "tag"."id" = "nft_has_property_has_tag"."tag_id"
JOIN "user" "creator" on "creator".id = nft.creator_id 
JOIN "user" "owner" on "owner".id = nft.owner_id
WHERE "nft".id IS NOT NULL
GROUP BY nft.id, "creator".nickname, "owner".nickname;

COMMIT;
