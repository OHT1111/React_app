import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import data from './pages/shopData'
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import About from './pages/About';
import Details from './pages/Details';
import Detail from './pages/Detail';
import { useState } from 'react';
import Cart from './pages/Cart';


function App() {

  const navigate = useNavigate()
  const [bests] = useState(data)

  return (
    <div className="App">

    <Navbar className='nav_menu' variant="dark">
      <Container>
        <Navbar.Brand onClick={() => {navigate('/')}}>Market Kurly</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
          <Nav.Link onClick={() => {navigate('/about')}}>About</Nav.Link>
          <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
          <Nav.Link onClick={() => {navigate('/cart')}}>Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Routes>
      <Route path='/' element={

        <Container>
          {/* <img className='visual_main' src={process.env.PUBLIC_URL+'/images/visual_main_01.jpg'} alt="" style={{width: '85%', margin: '30px 0px'}} /> */}
          <div className='visual_main'></div>
          <h2 className='best_name'>BEST 상품</h2>
          <Row>
            {
              bests.map((best, i) => {
                return (
                  <Col className='menus'>
                    <Link to={`/detail/${i}`}>
                      <img className='main_item_img' src={best.image} alt="" style={{width: 280}} />
                      <h5 className='item_name'>{best.title}</h5>
                      <p>{best.desc}</p>
                      <p>{best.price}원</p>
                    </Link>
                  </Col>
                )
              })
            }            
          </Row>
      </Container>

      }></Route>
      <Route path='about' element={<About />}>
        <Route path='info' element={<div>Infomation</div>} />
        <Route path='loca' element={<div>Location</div>} />
      </Route>
      <Route path='detail/:id' element={<Details bests={bests}/>} />
      <Route path='detail' element={<Detail />} />
      <Route path='cart' element={<Cart />} />
    </Routes>
      
    </div>
  );
}

export default App;