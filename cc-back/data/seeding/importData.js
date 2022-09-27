const { Client } = require("pg");
require("dotenv").config();

const data = require("./dataTest.json");

const categories = data[0].category;
const collections = data[1].collection;
const nfts = data[2].nft;
const users = data[3].user;
const properties = data[4].property;
const tags = data[5].tag;
const { nftHasPropertyHasTag } = data[6];

(async () => {
	const dbConfig = {
		connectionString: "postgres://collectorchain:collectorchain@localhost/collectorchain",
	};

	dbConfig.ssl = { rejectUnauthorized: false };

	const client = new Client(dbConfig);
	await client.connect();

	await client.query('TRUNCATE TABLE "favorite", "nft_has_property_has_tag", "property", "tag", "nft", "user", "collection", "category" RESTART IDENTITY;');
	console.log("categories");

	// Import catégories
	const categoryQueries = [];
	categories.forEach((category) => {
		const query = client.query(
			`
        INSERT INTO "category"("name","media") VALUES
        ($1,$2)
        RETURNING *
      `,
			[category.name, category.media],
		);
		categoryQueries.push(query);
	});
	await Promise.all(categoryQueries);
	console.log("collection");

	// Import collection
	const collectionQueries = [];
	collections.forEach((collection) => {
		const query = client.query(
			`
        INSERT INTO "collection"("name","description", "media", "category_id" ) VALUES
        ($1,$2,$3,
          (SELECT id FROM "category" WHERE $4 = "category"."name")
          )
        RETURNING *
      `,
			[collection.name, collection.description, collection.media, collection.category_id],
		);
		collectionQueries.push(query);
	});
	await Promise.all(collectionQueries);
	console.log("User");

	// Import User
	const userQueries = [];
	users.forEach((user) => {
		const query = client.query(
			`
        INSERT INTO "user"("email","nickname", "password", "media" ) VALUES
        ($1,$2,$3,$4
          )
        RETURNING *
      `,
			[user.email, user.nickname, user.password, user.media],
		);
		userQueries.push(query);
	});
	userQueries.push(
		client.query(
			`
            INSERT INTO "user"("email","nickname", "password", "media", "name", "lastName" ) VALUES
            ($1,$2,$3,$4,$5,$6
            )
            RETURNING *
        `,
			["user@user.com", "user", "$2a$12$auKxh5o5M0wGHZ26GmPbJuzn8MHDVIl68a.sAwpuvgk215rwYH48C", "https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg", "Jerome", "Julien"],
		),
	);
	await Promise.all(userQueries);
	console.log("nft");

	// Import nft
	const nftQueries = [];
	nfts.forEach((nft) => {
		const query = client.query(
			`
        INSERT INTO "nft"(
            "token",
            "name",
            "description",
            "price",
            "forSale",
            "media",
            "collection_id",
            "creator_id",
            "owner_id",
            "rarity" )
        VALUES
        ($1,$2,$3,$4,$5,$6,
            (SELECT id FROM "collection" WHERE $7 = "collection"."name"),
            (SELECT id FROM "user" WHERE $8 = "user"."nickname"),
            (SELECT id FROM "user" WHERE $9 = "user"."nickname"),
            $10
            )
        RETURNING *
        `,
			[nft.token, nft.name, nft.description, nft.price, nft.forSale, nft.media, nft.collection_id, nft.creator_id, nft.owner_id, nft.rarity],
		);
		nftQueries.push(query);
	});
	await Promise.all(nftQueries);
	console.log("tags");

	// Import tags
	const tagQueries = [];
	tags.forEach((tag) => {
		const query = client.query(
			`
        INSERT INTO "tag"("name") VALUES
        ($1)
        RETURNING *
        `,
			[tag.name],
		);
		tagQueries.push(query);
	});
	await Promise.all(tagQueries);
	console.log("property");

	// Import property
	const propertyQueries = [];
	properties.forEach((property) => {
		const query = client.query(
			`
        INSERT INTO "property"("name") VALUES
        ($1)
        RETURNING *
        `,
			[property.name],
		);
		propertyQueries.push(query);
	});
	await Promise.all(propertyQueries);

	console.log("nftHasPropertyHasTag");

	// Import nftHasPropertyHasTag
	const nftHasPropertyHasTagQueries = [];
	nftHasPropertyHasTag.forEach((value) => {
		const query = client.query(
			`
        INSERT INTO "nft_has_property_has_tag"("property_id", "nft_id", "tag_id" ) VALUES
        (
            (SELECT id FROM "property" WHERE $1 = "property"."name"),
            (SELECT id FROM "nft" WHERE $2 = "nft"."token"),
            (SELECT id FROM "tag" WHERE $3 = "tag"."name")
        )
        RETURNING *
        `,
			[value.property_id, value.nft_id, value.tag_id],
		);
		nftHasPropertyHasTagQueries.push(query);
	});
	await Promise.all(nftHasPropertyHasTagQueries);

	client.end();
})();
// nft_has_property_has_tag
