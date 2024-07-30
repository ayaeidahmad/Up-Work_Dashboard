import React, { useState } from 'react'
import "./ArticleCard.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { faLocationDot, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PopUpAddReviews from '../PopUpAddReviews/PopUpAddReviews';
import PopupDelete from '../PopupDelete/PopupDelete';

const ArticleCards = ({ articles , Stetus , onDelete}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleDelete = () => {
        onDelete();
        setIsPopupOpen(false);
    };
    const [showPopup, setShowPopup] = useState(false);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    const [reviewsList, setReviewsList] = useState([]);
    const handleAddReviewsClick = () => {
        setShowPopup(true);
        };
    const handleClosePopup = () => {
        setShowPopup(false);
        };
    const handleSendReview = () => {
        const newReview = { review, rating };
        setReviewsList([...reviewsList, newReview]);
        setReview('');
        setRating('');
        setShowPopup(false);
        };
    return (
        <section className='articles' style={{ padding: "70px 0" }} >
            <Container>
                <div className="addbutton" style={{ padding: " 0" }}>
                    <Link to="/AddArticle" className='add'>Add New Article</Link>
                </div>
                <Row>
                    {articles.map(index => {
                        return (
                            <Col className="colArticle" key={index} lg={4} md={6} sm={12} data-aos="zoom-in-down">
                                <Card className='ArticleCard' style={{ width: '20wh', height: '100%' }} >
                                    <Card.Img className="image" variant="top" src={index.photo} />
                                    <Card.Body>
                                        <Card.Title className="title">{index.title}</Card.Title>
                                        <Card.Text className="content">
                                            {index.body}
                                        </Card.Text>
                                        { Stetus &&
                                        <div className='button'>
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
                <PopUpAddReviews
                page={"jobCard"}
                show={showPopup}
                closePopup={handleClosePopup}
                sendReview={handleSendReview}
                review={review}
                setReview={setReview}
                rating={rating}
                setRating={setRating}
                />
                {isPopupOpen && (
                    <PopupDelete 
                        message="Are you sure you want to confirm deletion ?" 
                        onConfirm={handleDelete} 
                        onCancel={() => setIsPopupOpen(false)} 
                    />
                )}
            </Container>
        </section>)
}
export default ArticleCards



