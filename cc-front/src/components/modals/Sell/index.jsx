import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Input, Modal } from 'rsuite'
import './styles.scss'

const Sell = ({nft, hidesell}) => {

    const[isConfirmationVisible, setIsConfirmationVisible] = useState(false)
    const showConfirmation = () => setIsConfirmationVisible(true)
    const hideConfirmation =() => setIsConfirmationVisible(false)

    const [price,setPrice] = useState('')
    const handlePriceChange = (event) => setPrice(event)
    console.log(price)

    return (
        <div className='sell'>
            <h1 className="sell__title">sell {nft.name}</h1>
            <div className="sell__item">
                <img className='sell__item__image' src={nft.media} alt="nft image" />
                <div className="sell__item__data">
                        <div>
                            <h3>NFT name
                                <p>{nft.name}</p>
                            </h3>
                        </div>
                        <div>
                            <h3>Category
                                <p>Wathes</p>
                            </h3>
                        </div>
                        <div>
                            <h3>Collection
                                <p>Rolex</p>
                            </h3>
                        </div>
                        <div>
                            <h3>Author
                                <p>Mich mich</p>
                            </h3>
                        </div>
                        <div>
                            <h3>Owner
                                <p>{nft.user_id}</p>
                            </h3>
                        </div>
                </div>
            </div>
            <div className="sell__sellInfo">
                <div className="sell__sellInfo__label">
                    <h3>Price
                        <p>Royalties : 2,5%</p>
                    </h3>
                </div>
                <div className="sell__sellInfo__price">
                    <Input placeholder='Selling price' onChange={handlePriceChange}/>
                </div>
            </div>
            <div className="sell__termOfService">
                <input type="checkbox" id="termOfService" name="termOfService"/>
                <label for="termOfService">By checking this box, i agree Collector Chain's terms of service</label>
            </div>
            <div className="sell__actions">
                <button type='button' className='confirm' onClick={showConfirmation}>Confirm selling</button>
                <button type='button' className='cancel' onClick={hidesell}>Cancel</button>
            </div>
            
            {isConfirmationVisible?
            <div className='sell__confirmation'>
                <p>Congratualtion, you just put to sale {nft.name} for {price} !</p> 
            </div>
            :
            ''
            }
        
        </div>

    )
}

export default Sell