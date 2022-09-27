import './styles.scss'
import { AutoComplete, InputPicker, Input, Loader } from 'rsuite'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ObjectPicture from '../CreateNewNft1/ObjectPicture';
import Footer from '../../Footer';
import CustomPropFields from './CustomPropFields';
import { changeNftField, deleteNftMedia, nftCreation, setCreatorId, storeCategory, storeCollection, storeNftMedia } from '../../../../store/actions/createNft';
import { wait } from '../../../../utils/wait';
import { fetchCollections } from '../../../../store/actions/data';
import Axios from 'axios';

const CreateNewNft2 = () => {

    const dispatch=useDispatch();

    const userId = useSelector(state => state.user.id)
    // useEffect(()=>{

    //     dispatch(setCreatorId(userId));
    // },[])

    //! import des données des catégories pour alimenter les inputPicker
    //category
    const categoryListAll = useSelector(state => state.categories.list)
    const categoryData = categoryListAll.map(item => ({label: item.name, value: item.id }));

    const collectionListAll = useSelector(state => state.collections.list)

    // State locale pour récupérer l'id de la category selctionné dans l'input picker
    const [selectedCatId, setSelectedCatId] =useState()
    // Filtrage en fonction de l'id
    const collectionFiltered = collectionListAll.filter(collection => collection.category_id == selectedCatId)
    // Création du menu déroulant filtré pour l'inputPiker collection
    const collectionData = collectionFiltered.map(item => ({label: item.name, value: item.id }));
    
    // import de l'image temp du process de creation
    const tempPicture = useSelector(state => state.createNft.tempMedia)

    // gestion de l'apparission d'un champ custom prop au click
    const [customProps, setCustomProps] = useState([])
    const addCustomProp = () => {
        // a chaque ajout, on ajoute un element au tableau qui sert à générer le nbr de props
        setCustomProps([...customProps, 'p'])
    }

    //! state local pour envoie des infos au reducer createNft au moment de la validation finale
       
    //PICTURE
    const [picture,setPicture] = useState('')
    const createNft = useSelector(state => state.createNft)
    console.log(createNft.nftToCreate.media);

	const uploadImage = (event) => {
		// setPicture(event.target.files);
		// Il faut stocker un chemin URL pour afficher l'image
        // dispatch(storeNftMedia(event.target.files[0]));
        const formData = new FormData()
        formData.append("file",event.target.files[0])
        formData.append("upload_preset", "r2bx0mli")
        Axios.post("https://api.cloudinary.com/v1_1/ddsddskey/image/upload",
        formData
        ).then((response) => {
            console.log(response.data.secure_url);
            dispatch(storeNftMedia(response.data.secure_url));
        })

	};
	const deleteImage = () => {
		// setPicture('');
		// Il faut stocker un chemin URL pour afficher l'image
		dispatch(deleteNftMedia());
	};

    // VALIDATION FORMULAIRE
    const [isValidated, setIsValidated] = useState(false)
    const [isLoading, setIsLoading] =useState(false)

    const validateCreation = async () => {
        dispatch(setCreatorId(userId))
        dispatch(nftCreation())
        setIsLoading(true)
        await wait(2000)
        setIsLoading(false)
        setIsValidated(true)
    }

    //!Gestion de la mise à jour du state lors du changement des inputs
    const handleChangeField = (event, item) => {
        // console.log(event, item)
		dispatch(changeNftField(event, item.target.name))
	}

    const handleChangeCategory = (event) => {
        setSelectedCatId(event)
        dispatch(storeCategory(event))
    }

    const handleChangeCollection = (event) => {
      dispatch(storeCollection(event))
    }

    return (
        <div className='createNewNft2'>
            <div className="onGoingCreation">
                <div className="onGoingCreation__text">
                    <p>Ongoing creation :</p>
                    <button className='button button--save'><Link to='/'>Save and continue later</Link></button>
                </div>
                <div className="onGoingCreation__image">
                    <img src={tempPicture} alt="on going creation" />
                </div>
            </div>
            <div className="category">
                <h3>Object category and collection</h3>
                <p>Select the category of the object :</p>
                <InputPicker data={categoryData} className='category__input' name='category' onChange={handleChangeCategory}/>
                <button className='button button--newCategory'>Or ask for a new category</button>
                <p>Select the collection of the object :</p>
                <InputPicker data={collectionData} className='category__input' name='category' onChange={handleChangeCollection}/>
                <button className='button button--newCategory'>Or ask for a new collection into {createNft.category?createNft.category:'the category'}</button>
            </div>
            <div className="properties">
                <h3>Object main properties</h3>
                <div className="properties__property">
                    {/* <p>Name</p>
                    <Input placeholder='NFT name' name='name' onChange={handleChangeField}/> */}
                    <p>Name</p>
                    <Input placeholder='object brand model' name='name' onChange={handleChangeField}/>
                    <p>Model</p>
                    <Input placeholder='object brand model' name='model' onChange={handleChangeField}/>
                    <p>Serial</p>
                    <Input placeholder='object serial number' name='serial' onChange={handleChangeField}/>
                    <p>Rarity</p>
                    <Input placeholder='object rarity index' name='rarity' onChange={handleChangeField}/>
                </div>
            </div>
            <div className="customProperties">
                <h3>Object custom properties</h3>
                <div className="customProperties__add">
                    <p>Add a new property</p>
                    <button onClick={addCustomProp}><ion-icon name="add-circle"></ion-icon></button>
                </div>
                {customProps.map((prop,i) => (
                        <CustomPropFields key={i} index={i} addCustomProp={addCustomProp}/>
                ))}
            </div>
            <div className="description">
                <h3>Object description</h3>
                <p>Highlight your NFT !</p>
                <Input as='textarea' rows={3} placeholder='Describe your NFT' name='description' onChange={handleChangeField}/>
            </div>
            <div className="picture__title">
                <h3>NFT picture</h3>
                <p>Upload the base picture for NFT profile picture creation</p>
                <div className="picture__picture">
					{createNft.nftToCreate.media ? (
						<div className="picture__trash-icon" onClick={deleteImage}>
							<ion-icon className="picture__trash" name="trash-outline" id="overallPicture" size="large"></ion-icon>
						</div>
					) : (
						""
					)}
					{!createNft.nftToCreate.media? (
						<>
							<label htmlFor="OverallPictureInput" className="picture__add-icon">
								<ion-icon name="add-circle-outline" size="large"></ion-icon>
							</label>
							<input type="file" accept="image/*" name="overallPicture" onChange={uploadImage} className="picture__input" id="OverallPictureInput" />
						</>
					) : (
						""
					)}
					{createNft.nftToCreate.media ? <img className="picture__image" src={createNft.nftToCreate.media} alt="Overall picture" /> : ""}
				</div>
            </div>
            <div className="validation">
                <button className='button button--validation' onClick={validateCreation}>Validate your creation</button>
                {isLoading? <Loader className='validation__loader' size='lg' vertical/>:''}
                {isValidated?
                <p className="validation__text">
                    <strong>Congratulation ! </strong>You’ve finished the creation process. Your unique NFT is now available <Link className='validation__text--link' to='/showcase'>in your showcase</Link> to be displayed.
                    <p className='validation__text--centered'><strong>Enjoy !!</strong></p>
                </p>
                :''              
                }
            </div>
        </div>
    )
}

export default CreateNewNft2