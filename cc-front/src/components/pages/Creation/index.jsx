import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Panel, PanelGroup } from 'rsuite'
import './styles.scss'

const Creation = () => {

  const isLogged = useSelector(state => state.user.isLogged)

  return (
    <div className='creation'>
      <h1>NFT Creation Process</h1>
      <p>Discover the Collector chain creation process to create a unique NFT, forever linked to your physical collectible object</p>
      {isLogged?
          <Button className='button'><Link to='/creation/createnewnft'>Create your NFT now</Link></Button>
          :
          <h2>Login or Signin to create your NFT now</h2>}
      <PanelGroup accordion className='panel' >
          <Panel header="An unique collectible will provide a unique NFT" defaultExpanded>
              <img src="https://bladerender.com/media/simple-responsive-slideshow/2.jpg" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nostrum aliquid temporibus, labore mollitia earum architecto voluptate repellendus consectetur sunt eum quisquam asperiores sint ducimus, delectus eveniet odio pariatur, quidem et est dignissimos illo! Aperiam, minima. Totam iusto laboriosam quasi similique voluptate, officia id earum veniam? Tempore delectus, dicta quidem perferendis vero a ducimus, ipsam suscipit dolor facere asperiores molestias natus voluptas accusamus quasi officia. Vitae quos a quas mollitia esse quia nobis magni libero, consectetur dolore assumenda obcaecati. Nihil fugiat debitis doloribus animi molestias, quasi voluptatem sed dicta magni, non suscipit ab necessitatibus quas, sapiente tenetur magnam. Totam vero consectetur, provident non illo, animi dignissimos perspiciatis doloremque, repellendus maiores dolor unde at. Voluptate ipsam ullam nulla unde voluptatem? Voluptas eligendi odit consequuntur repudiandae. Sunt amet asperiores labore! Rem at deserunt vero hic temporibus reiciendis atque assumenda! Iure, illum voluptates. Sapiente aliquid quo voluptatem facilis vel harum repudiandae, recusandae nostrum!</p>
          </Panel>
          <Panel header="You have the power of creation" defaultExpanded>
						  <img src="https://media.istockphoto.com/photos/video-archives-concept-picture-id1032516536?k=20&m=1032516536&s=612x612&w=0&h=1v1vz3AYBwmgyWvbpP8SzA7uv_CujrukUUgzYFps5wE=" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nostrum aliquid temporibus, labore mollitia earum architecto voluptate repellendus consectetur sunt eum quisquam asperiores sint ducimus, delectus eveniet odio pariatur, quidem et est dignissimos illo! Aperiam, minima. Totam iusto laboriosam quasi similique voluptate, officia id earum veniam? Tempore delectus, dicta quidem perferendis vero a ducimus, ipsam suscipit dolor facere asperiores molestias natus voluptas accusamus quasi officia. Vitae quos a quas mollitia esse quia nobis magni libero, consectetur dolore assumenda obcaecati. Nihil fugiat debitis doloribus animi molestias, quasi voluptatem sed dicta magni, non suscipit ab necessitatibus quas, sapiente tenetur magnam. Totam vero consectetur, provident non illo, animi dignissimos perspiciatis doloremque, repellendus maiores dolor unde at. Voluptate ipsam ullam nulla unde voluptatem? Voluptas eligendi odit consequuntur repudiandae. Sunt amet asperiores labore! Rem at deserunt vero hic temporibus reiciendis atque assumenda! Iure, illum voluptates. Sapiente aliquid quo voluptatem facilis vel harum repudiandae, recusandae nostrum!</p>
          </Panel>
          <Panel header="Digital word as a jewel box for your collectible " defaultExpanded>
						  <img src="https://media2.giphy.com/media/KVQNB6nT5SwNy/giphy.gif" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nostrum aliquid temporibus, labore mollitia earum architecto voluptate repellendus consectetur sunt eum quisquam asperiores sint ducimus, delectus eveniet odio pariatur, quidem et est dignissimos illo! Aperiam, minima. Totam iusto laboriosam quasi similique voluptate, officia id earum veniam? Tempore delectus, dicta quidem perferendis vero a ducimus, ipsam suscipit dolor facere asperiores molestias natus voluptas accusamus quasi officia. Vitae quos a quas mollitia esse quia nobis magni libero, consectetur dolore assumenda obcaecati. Nihil fugiat debitis doloribus animi molestias, quasi voluptatem sed dicta magni, non suscipit ab necessitatibus quas, sapiente tenetur magnam. Totam vero consectetur, provident non illo, animi dignissimos perspiciatis doloremque, repellendus maiores dolor unde at. Voluptate ipsam ullam nulla unde voluptatem? Voluptas eligendi odit consequuntur repudiandae. Sunt amet asperiores labore! Rem at deserunt vero hic temporibus reiciendis atque assumenda! Iure, illum voluptates. Sapiente aliquid quo voluptatem facilis vel harum repudiandae, recusandae nostrum!</p>
          </Panel>
        </PanelGroup>
        {isLogged?
          <Button className='button'><Link to='/creation/createnewnft'>Create your NFT now</Link></Button>
          :
          <h2>Login to create your NFT now</h2>}
    </div>
  )
}

export default Creation