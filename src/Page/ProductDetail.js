import React, { useEffect, useState } from "react"
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom"


const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const getProductDetail = async () => {
    setLoading(true);
    let url = `https://my-json-server.typicode.com/teddybearkim/hnm-final/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);

    setProduct(data);
  };

  useEffect(() => {
    getProductDetail()
  }, []);

  if (loading || product == null) return <h1>Loading</h1>;
  return (
    <Container> 
      <Row>
        <Col className="product-img">
          <img width="80%" src={product?.img}/>
        </Col>
        <Col>
          <div className="product-title">{product?.title}</div>
          <div className="product-price">₩{product?.price}</div>
          <div className="choice">{product.choice ? "Conscious choice" : ""}</div>
          <Dropdown className="drop-down">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item) => (
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark" className="add-button">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
