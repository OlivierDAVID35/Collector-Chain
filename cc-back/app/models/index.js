const User = require('./user');
const Collection = require('./collection');
const Category = require('./category');
const Nft = require('./nft');
const Favorite = require('./favorite');
const Property = require('./property');
const Tag = require('./tag');
const NftHasPropertyHasTag = require('./nft_has_property_has_tag');

module.exports = {
    User, Collection, Category, Nft, Favorite, Property, Tag, NftHasPropertyHasTag,
};
