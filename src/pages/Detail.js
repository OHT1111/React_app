
import { Outlet } from "react-router-dom";
import { Col, Row } from 'react-bootstrap';
// import { Routes, Route, Link, useNavigate } from 'react-router-dom'

// import data from './pages/shopData'

function Detail() {

    return (
        <>
        <h3 className="about_page_name" >Detail Page</h3>
        <Outlet>
        </Outlet>
        <h5 className="kurlys_start_name">컬리의 메뉴</h5>

<Row>

        <Col className="menus">
            <img src="./images/best_01.png" alt="" />
        </Col>
        <Col className="menus">
            <img src="./images/best_02.png" alt="" />
        </Col>
        <Col className="menus">
            <img src="./images/best_03.png" alt="" />
        </Col>
        <Col className="menus">
            <img src="./images/best_04.png" alt="" />
        </Col>
        <Col className="menus">
            <img src="./images/best_05.png" alt="" />
        </Col>
        <Col className="menus">
            <img src="./images/best_06.png" alt="" />
        </Col>
        <Col className="menus">
            <img src="./images/best_07.png" alt="" />
        </Col>
        <Col className="menus">
            <img src="./images/best_08.png" alt="" />
        </Col>
        </Row>
</>

    );
}

export default Detail;