import React from 'react'
import "./ArticleCard.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { faLocationDot, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArticleCards = ({ articles , Stetus}) => {


    return (

        <section className='articles' style={{ padding: "99px 0" }} >
            <Container>
                <div className="addbutton" style={{ padding: " 0" }}>
                    {/* <Link to="/AddArticle" className='add'>Add New Article</Link> */}
                </div>
                <Row>
                    {articles.map(index => {
                        return (
                            <Col lg={4} md={6} sm={12} data-aos="zoom-in-down">
                                <Card className='ArticleCard' style={{ width: '20wh', height: 'auto' }} >
                                    <Card.Img className='IMgArticle' variant="top" src={index.photo} />
                                    <Card.Body>
                                        <Card.Title>{index.title}</Card.Title>
                                        <Card.Text>
                                            {index.body}
                                        </Card.Text>
                                        { Stetus &&
                                        <div >
                                            <Link to="/EditeArticle" className="update">
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Link>
                                            <button className="trash" onClick={() => setIsPopupOpen(true)}>
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        </div>
                                        }


                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>)
}
export default ArticleCards



