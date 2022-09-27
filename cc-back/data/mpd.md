# MPD

category :

- id INT PRIMARY KEY GENERATED ALWAY AS IDENTITY,
- name TEXT UNIQUE NOT NULL,
- description TEXT,
- media TEXT NOT NULL,
- created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
- updated_at TIMESTAMPTZ;

collection :

- id INT PRIMARY KEY GENERATED ALWAY AS IDENTITY,
- name NOT NULL,
- description TEXT,
- media TEXT,
- category_id INT NOT NULL REFERENCES "category"("id"),
- created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
- updated_at TIMESTAMPTZ;

user :

- id INT PRIMARY KEY GENERATED ALWAY AS IDENTITY,
- email TEXT UNIQUE NOT NULL,
- nickname TEXT UNIQUE NOT NULL,
- password TEXT NOT NULL,
- wallet NUMERIC(15,4) DEFAULT(150),
- isAdmin BOOL DEFAULT(0),
- media TEXT,
- created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
- updated_at TIMESTAMPTZ,
- CHECK(wallet>0),
- CHECK( email ~ `^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$`);

nft :

- id INT PRIMARY KEY GENERATED ALWAY AS IDENTITY,
- token TEXT UNIQUE NOT NULL,
- name TEXT NOT NULL,
- description TEXT,
- price NUMERIC(15,4) NOT NULL,
- forSale BOOL DEFAULT(0),
- media TEXT NOT NULL,
- collection_id INT NOT NULL REFERENCES "collection"("id"),
- user_id INT NOT NULL REFERENCES "user"("id"),
- created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
- updated_at TIMESTAMPTZ,
- CHECK(price>0);

tag :

- id INT PRIMARY KEY GENERATED ALWAY AS IDENTITY,
- name UNIQUE NOT NULL,
- created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
- updated_at TIMESTAMPTZ;

property :

- id INT PRIMARY KEY GENERATED ALWAY AS IDENTITY,
- name UNIQUE NOT NULL,
- tag_id INT NOT NULL REFERENCES "tag"("id"),
- created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
- updated_at TIMESTAMPTZ;

property_has_nft :

- property_id INT NOT NULL REFERENCES "property"("id"),
- nft_id INT NOT NULL REFERENCES "nft"("id"),
- PRIMARY KEY("property_id","nft_id");

favorite :

- user_id INT NOT NULL REFERENCES "user"("id"),
- nft_id INT NOT NULL REFERENCES "nft"("id"),
- PRIMARY KEY("user_id","nft_id");
