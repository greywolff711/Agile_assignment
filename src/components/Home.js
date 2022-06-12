import React from 'react';
import './Home.css';
import {Container,Row,Col,Button} from 'react-bootstrap'; 
import Cards from './Cards';
import JsonFile from './file.json'
function Home() {
  
  return (
    <div className='Home'>
        <Container className='Home__Heading'>
          <Row>
            <Col>
                <strong>You are taking Challenges of a new project</strong>
            </Col>
          </Row>
        </Container>
        <Container className='Home__Container'>
          {
            JsonFile.tasks.map(item=>{
              return item.assets.map(i=>{
                  return <Row><Cards Heading={i.asset_title} 
                  Description={i.asset_description} video={i.display_asset_video} img={i.display_asset_image} /></Row>
              })
            })
          }
          <Row className="justify-content-md-center">
            <Col xs lg="1"><Button>Submit</Button></Col>
          </Row>
        </Container>

    </div>
  )
}

export default Home