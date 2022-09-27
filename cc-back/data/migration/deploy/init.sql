-- Deploy collector-chain:init to pg

BEGIN;

CREATE TABLE "category" (
"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"name" TEXT UNIQUE NOT NULL,
"description" TEXT,
"media" TEXT NOT NULL,
"created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
"updated_at" TIMESTAMPTZ
);

CREATE TABLE "collection" (
"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"name" TEXT NOT NULL,
"description" TEXT,
"media" TEXT,
"category_id" INT NOT NULL REFERENCES "category"("id"),
"created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
"updated_at" TIMESTAMPTZ
);

CREATE TABLE "user" (
"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"email" TEXT UNIQUE NOT NULL,
"nickname" TEXT UNIQUE NOT NULL,
"password" TEXT NOT NULL,
"wallet" NUMERIC(15,4) DEFAULT(150),
"isAdmin" BOOL DEFAULT(false),
"media" TEXT,
"created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
"updated_at" TIMESTAMPTZ,
CHECK(wallet>0),
CHECK( email ~ '^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$')
);

CREATE TABLE "nft" (
"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"token" TEXT UNIQUE NOT NULL,
"name" TEXT NOT NULL,
"description" TEXT,
"price" NUMERIC(15,4) NOT NULL,
"forSale" BOOL DEFAULT(false),
"media" TEXT NOT NULL,
"collection_id" INT NOT NULL REFERENCES "collection"("id"),
"user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
"created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
"updated_at" TIMESTAMPTZ,
CHECK(price>0)
);

CREATE TABLE "tag" (
"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"name" TEXT UNIQUE NOT NULL,
"created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
"updated_at" TIMESTAMPTZ
);

CREATE TABLE "property" (
"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"name" TEXT UNIQUE NOT NULL,
"created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
"updated_at" TIMESTAMPTZ
);

CREATE TABLE "favorite" (
"user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
"nft_id" INT NOT NULL REFERENCES "nft"("id") ON DELETE CASCADE,
PRIMARY KEY("user_id","nft_id")
);

COMMIT;
