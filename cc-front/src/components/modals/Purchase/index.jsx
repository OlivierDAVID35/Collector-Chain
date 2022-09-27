import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Modal } from 'rsuite'
import './styles.scss'

const Purchase = ({nft, hidePurchase}) => {

    const user=useSelector(state => state.user)

    const[isConfirmationVisible, setIsConfirmationVisible] = useState(false)
    const showConfirmation = () => setIsConfirmationVisible(true)
    const hideConfirmation =() => setIsConfirmationVisible(false)

  return (
    <div className='purchase'>
        <h1 className="purchase__title">Purchase {nft.name}</h1>
        <div className="purchase__item">
            <img className='purchase__item__image' src={nft.media} alt="nft image" />
            <div className="purchase__item__data">
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
        <div className="purchase__buyInfo">
            <div className="purchase__buyInfo__label">
                <h3>Price
                    <p>Royalties : 2,5%</p>
                </h3>
            </div>
            <div className="purchase__buyInfo__price">
                <p>{nft.price}</p>
            </div>
        </div>
        <div className="purchase__wallet">
            <div className='purchase__wallet__label'>
                <p>Your wallet</p>
            </div>
            <div className='purchase__wallet__price'>
                <p>{user.wallet}</p>
            </div>
        </div>
        <div className="purchase__termOfService">
            <input type="checkbox" id="termOfService" name="termOfService"/>
            <label for="termOfService">By checking this box, i agree Collector Chain's terms of service</label>
        </div>
        <div className="purchase__actions">
            <button type='button' className='confirm' onClick={showConfirmation}>Confirm payment</button>
            <button type='button' className='cancel' onClick={hidePurchase}>Cancel</button>
        </div>
        
        {isConfirmationVisible?
        <div className='purchase__confirmation'>
            <p>Congratualtion, you just bought {nft.name} for {nft.price} !</p> 
        </div>
        :
        ''
        }
    
    </div>

  )
}

export default Purchase