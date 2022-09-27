export const STORE_TEMP_PICTURE = 'STORE_TEMP_PICTURE';
export const STORE_PROPERTY = 'STORE_PROPERTY';
export const DELETE_PROPERTY = 'DELETE_PROPERTY';
export const STORE_NFT_MEDIA = 'STORE_NFT_MEDIA';
export const DELETE_NFT_MEDIA = 'DELETE_NFT_MEDIA';
export const STORE_DESCRIPTION = 'STORE_DESCRIPTION';
export const STORE_CATEGORY = 'STORE_CATEGORY';
export const CHANGE_NFT_FIELD = 'CHANGE_NFT_FIELD';
export const NFT_CREATION = 'NFT_CREATION';
export const STORE_COLLECTIONS_BY_CATEGORY = 'STORE_COLLECTIONS_BY_CATEGORY';
export const STORE_COLLECTION = 'STORE_COLLECTION';
export const SET_CREATOR_ID = 'SET_CREATOR_ID';

export const setCreatorId = (id) => ({
  type: SET_CREATOR_ID,
  id
});

export const storeCollection = (payload) => ({
  type: STORE_COLLECTION,
  payload
});

export const storeCollectionsByCategory = (categoryName) => ({
  type: STORE_COLLECTIONS_BY_CATEGORY,
  categoryName
});

export const nftCreation = () => ({
  type: NFT_CREATION
});

export const changeNftField = (value,name) => ({
  type: CHANGE_NFT_FIELD,
  value,
  name
});

export const storeCategory = (payload) => ({
  type: STORE_CATEGORY,
  payload
});

export const deleteNftMedia = () => ({
  type: DELETE_NFT_MEDIA
});

export const storeNftMedia = (payload) => ({
  type: STORE_NFT_MEDIA,
  payload
});

export const deleteProperty = (property) => ({
  type: DELETE_PROPERTY,
  property
});

export const storeProperty = (property,tag) => ({
  type: STORE_PROPERTY,
  property,
  tag
});

export const storeTempPicture = (payload) => ({
  type: STORE_TEMP_PICTURE,
  payload
});