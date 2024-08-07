import React, { useEffect, useState } from 'react'
import "./ArticleCard.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { faLocationDot, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PopUpAddReviews from '../PopUpAddReviews/PopUpAddReviews';
import PopupDelete from '../PopupDelete/PopupDelete';
import axios from 'axios';
import NavBar2 from '../NavBar2/NavBar2';

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

        const [userData, setUserData] = useState(
            localStorage.getItem('Maneger')
          );
    
        const [Loge, setLoge] = useState(
            localStorage.getItem('logo')
          );
    
        const [color, setcolor] = useState(
            localStorage.getItem('color')
          );
    

        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const [token, settoken] = useState(
            localStorage.getItem('token')
          );

        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get('http://127.0.0.1:8000/api/articles', {
                headers: {
                  'Accept': 'application/json',
                  'Authorization': `Bearer ${token}`,
                },
              });
              setData(response.data[0]);
              console.log(response.data);
              
              setLoading(false);
            } catch (error) {
              setError(error.message);
              setLoading(false);
            }
          };
      
          fetchData();
        }, []); // المصفوفة الفارغة لضمان أن الجلب يحدث مرة واحدة عند التحميل
      
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;


    return (
        <>
            <NavBar2 userData={userData}Loge={Loge}color={color}/>
        <section className='articles' style={{ padding: "70px 0" }} >
            <Container>
                <div className="addbutton" style={{ padding: " 0" }}>
                    <Link to="/AddArticle" className='add'>Add New Article</Link>
                </div>
                <Row>
                    {data.map(index => {
                        return (
                            <Col className="colArticle" key={index} lg={4} md={6} sm={12} data-aos="zoom-in-down">
                                <Card className='ArticleCard' style={{ width: '20wh', height: '100%' }} >
                                    <Card.Img className="image" variant="top" src={index.photo_url} />
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
        </section>
        </>
        )
}
export default ArticleCards



