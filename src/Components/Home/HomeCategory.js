import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from '../Category/CategoryCard'
import clothe from "../../images/Math.png";
import cloth from "../../images/phy.png";
import cat2 from "../../images/sci.png";
import labtop from "../../images/geo.png";
import sale from "../../images/en.png";
import pic from "../../images/Chemistry.png";

const HomeCategory = () => {
    return (
        <Container>
            <SubTiltle title="Subjects" btntitle="More" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCard title="Math " img={clothe}  />
                <CategoryCard title="Science" img={cat2}  />
                <CategoryCard title="Geography" img={labtop}  />
                <CategoryCard title="English" img={sale}  />
                <CategoryCard title="Physics" img={cloth}  />
                <CategoryCard title="Chemistry" img={pic}  />
            </Row>
        </Container>
    )
}

export default HomeCategory
