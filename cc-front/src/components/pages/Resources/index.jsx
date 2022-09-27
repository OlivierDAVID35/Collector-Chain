import { Link } from 'react-router-dom'
import { Button, Panel, PanelGroup, Placeholder } from 'rsuite'
import './styles.scss'

const Resources = () => {
    return (
      <div className='resources'>
          <h1>Understand Collector Chain</h1>
          <p>Take few minutes to understand how web3, through blockchain and NFT technologies, will give you acces to a brand new way to enjoy your passion of collectibles</p>
          <Button className='button'><Link to='/creation'>Curious? Understand how to create your NFT</Link></Button>
          <PanelGroup accordion className='panel'>
          <Panel header="Understand blockchain and NFT technologies" defaultExpanded>
              <img src="https://cdn.pixabay.com/photo/2022/03/16/17/16/nft-7072864_960_720.jpg" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nostrum aliquid temporibus, labore mollitia earum architecto voluptate repellendus consectetur sunt eum quisquam asperiores sint ducimus, delectus eveniet odio pariatur, quidem et est dignissimos illo! Aperiam, minima. Totam iusto laboriosam quasi similique voluptate, officia id earum veniam? Tempore delectus, dicta quidem perferendis vero a ducimus, ipsam suscipit dolor facere asperiores molestias natus voluptas accusamus quasi officia. Vitae quos a quas mollitia esse quia nobis magni libero, consectetur dolore assumenda obcaecati. Nihil fugiat debitis doloribus animi molestias, quasi voluptatem sed dicta magni, non suscipit ab necessitatibus quas, sapiente tenetur magnam. Totam vero consectetur, provident non illo, animi dignissimos perspiciatis doloremque, repellendus maiores dolor unde at. Voluptate ipsam ullam nulla unde voluptatem? Voluptas eligendi odit consequuntur repudiandae. Sunt amet asperiores labore! Rem at deserunt vero hic temporibus reiciendis atque assumenda! Iure, illum voluptates. Sapiente aliquid quo voluptatem facilis vel harum repudiandae, recusandae nostrum!</p>
          </Panel>
          <Panel header="A new way to enjoy your showcase">
						  <img src="https://media.istockphoto.com/photos/video-archives-concept-picture-id1032516536?k=20&m=1032516536&s=612x612&w=0&h=1v1vz3AYBwmgyWvbpP8SzA7uv_CujrukUUgzYFps5wE=" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nostrum aliquid temporibus, labore mollitia earum architecto voluptate repellendus consectetur sunt eum quisquam asperiores sint ducimus, delectus eveniet odio pariatur, quidem et est dignissimos illo! Aperiam, minima. Totam iusto laboriosam quasi similique voluptate, officia id earum veniam? Tempore delectus, dicta quidem perferendis vero a ducimus, ipsam suscipit dolor facere asperiores molestias natus voluptas accusamus quasi officia. Vitae quos a quas mollitia esse quia nobis magni libero, consectetur dolore assumenda obcaecati. Nihil fugiat debitis doloribus animi molestias, quasi voluptatem sed dicta magni, non suscipit ab necessitatibus quas, sapiente tenetur magnam. Totam vero consectetur, provident non illo, animi dignissimos perspiciatis doloremque, repellendus maiores dolor unde at. Voluptate ipsam ullam nulla unde voluptatem? Voluptas eligendi odit consequuntur repudiandae. Sunt amet asperiores labore! Rem at deserunt vero hic temporibus reiciendis atque assumenda! Iure, illum voluptates. Sapiente aliquid quo voluptatem facilis vel harum repudiandae, recusandae nostrum!</p>
          </Panel>
          <Panel header="Earn passive incomes with your collection">
						  <img src="https://images.pexels.com/photos/8185629/pexels-photo-8185629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nostrum aliquid temporibus, labore mollitia earum architecto voluptate repellendus consectetur sunt eum quisquam asperiores sint ducimus, delectus eveniet odio pariatur, quidem et est dignissimos illo! Aperiam, minima. Totam iusto laboriosam quasi similique voluptate, officia id earum veniam? Tempore delectus, dicta quidem perferendis vero a ducimus, ipsam suscipit dolor facere asperiores molestias natus voluptas accusamus quasi officia. Vitae quos a quas mollitia esse quia nobis magni libero, consectetur dolore assumenda obcaecati. Nihil fugiat debitis doloribus animi molestias, quasi voluptatem sed dicta magni, non suscipit ab necessitatibus quas, sapiente tenetur magnam. Totam vero consectetur, provident non illo, animi dignissimos perspiciatis doloremque, repellendus maiores dolor unde at. Voluptate ipsam ullam nulla unde voluptatem? Voluptas eligendi odit consequuntur repudiandae. Sunt amet asperiores labore! Rem at deserunt vero hic temporibus reiciendis atque assumenda! Iure, illum voluptates. Sapiente aliquid quo voluptatem facilis vel harum repudiandae, recusandae nostrum!</p>
          </Panel>
        </PanelGroup>
      </div>
  )
}

export default Resources