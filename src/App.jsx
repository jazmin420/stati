import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Navb  from './component/Navb'
import  Form  from './component/Form'
import Footer from './component/Footer'
import './App.css'
import ourStory from './assets/our-story-01.jpg'
import introOne from './assets/intro-01.jpg'
import introTwo from './assets/intro-02.jpg'
import introThree from './assets/intro-04.jpg'
function App() {
  

  return (
    <>
     <Navb/>
     <div className='story'>
      <div className='our-story'>
        <h3>Italian Restaurant
          <span>WELCOME</span>
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat blanditiis consequuntur impedit omnis sed incidunt, quos doloribus cupiditate provident libero, numquam officiis consectetur, voluptates pariatur esse quia modi fuga quisquam!</p>
        <a href="">Our story</a>
        </div>
        <div>
          <img  src={ourStory} alt="" />

      </div>
     </div>

     <div className='discover'>
      <h4>Discover <span>Tapo place</span></h4>
     </div>

     <div className='d-flex justify-content-evenly align-items-center mt-5 flex-wrap'>
     <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={introOne} />
      <Card.Body>
        <Card.Title>ROMANTIC RESTAURANT</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{ backgroundColor: 'red'}} variant="primary">LEARN MORE</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={introTwo} />
      <Card.Body>
        <Card.Title>DELICIOUS FOOD</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{ backgroundColor: 'red'}} variant="primary">LEARN MORE</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={introThree} />
      <Card.Body>
        <Card.Title>RED WINES YOU LOVE</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{ backgroundColor: 'red'}} variant="primary">LEARN MORE</Button>
      </Card.Body>
    </Card>
     </div>
     <Form/>
     <Footer/>
    </>
  )
}

export default App
