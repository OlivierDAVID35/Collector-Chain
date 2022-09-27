import { CHANGE_NFT_FIELD, DELETE_NFT_MEDIA, DELETE_PROPERTY, SET_CREATOR_ID, STORE_CATEGORY, STORE_COLLECTION, STORE_DESCRIPTION, STORE_NFT_MEDIA, STORE_PROPERTY, STORE_TEMP_PICTURE } from "../actions/createNft";

export const initialState = {
    nftToCreate:{
        name: "",
        description:'',
        price:0,
        forSale:false,
        media: "",
        collection_id:'',
        creator_id:'',
        owner_id:'',
        rarity:'',
        serial:'',
        model:'',
        showcase_id:0,
        properties:[],
    },
    tempMedia: "",
    category:'',

   
}

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case STORE_TEMP_PICTURE: {
			return {
				...state,
				tempMedia: action.payload,
				}			
		};

        case STORE_PROPERTY:{
            return {
                ...state,
                nftToCreate:{
                    ...state.nftToCreate,
                    properties :[
                        ...state.nftToCreate.properties,
                        {name:action.property, tag:action.tag}
                    ]
                }
                
            }
        };

        case DELETE_PROPERTY:{
            return {
                ...state,
                properties: state.properties.filter(property => property.name !== action.property)
            }

        };

        case STORE_NFT_MEDIA:{
            return {
                ...state,
                nftToCreate:{
                    ...state.nftToCreate,
                    media:action.payload
                }

            }

        }

        case DELETE_NFT_MEDIA:{
            return {
                ...state,
                media:''
            }
        };

        case STORE_DESCRIPTION:{
            return{
                ...state,
                description: action.payload
            }
        };

        case STORE_CATEGORY:{
            return{
                ...state,
                category: action.payload
            }
        };

        case CHANGE_NFT_FIELD:{
            return{
                ...state,
                nftToCreate:{
                    ...state.nftToCreate,
                    [action.name]:action.value
                }
            }
        };
        case STORE_COLLECTION:{
            return{
                ...state,
                nftToCreate:{
                    ...state.nftToCreate,
                    collection_id:action.payload
                }

            }
        };
        case SET_CREATOR_ID:{
            return{
                ...state,
                nftToCreate:{
                    ...state.nftToCreate,
                    creator_id:action.id,
                    owner_id:action.id
                }
            }
        }

		default:
			return state;
	}
};

export default reducer;

