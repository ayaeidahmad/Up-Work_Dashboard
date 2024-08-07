import { Container, Row , Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot , faTrashAlt , faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './JobCard.css'
import { useEffect, useState } from 'react';
import PopUpAddReviews from '../PopUpAddReviews/PopUpAddReviews';
import PopupDelete from '../PopupDelete/PopupDelete';
import { Link } from 'react-router-dom';
import NavBar2 from '../NavBar2/NavBar2';
import axios from 'axios';
const JobCard = ({ page , onDelete  }) => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleDelete = () => {
        onDelete();
        setIsPopupOpen(false);
    };

    const [userData, setUserData] = useState(
        localStorage.getItem('ManegerName')
      );

    const [Loge, setLoge] = useState(
        localStorage.getItem('logo')
      );

    const [color, setcolor] = useState(
        localStorage.getItem('color')
      );

    const [token, settoken] = useState(
        localStorage.getItem('token')
      );

    const [idCompany, setidCompany] = useState(
        localStorage.getItem('companyid')
      );
    
    const Job_Details = [
        {
            company_name : "Focal X Agency",
            job_title : "software development", 
            career_Level : "senior", 
            experience_Needed : "more 5 years", 
            Time : "full time", 
            key_Skills : "android, database, xml", 
            address : "Syria - latakia", 
            id: 1
        }
    ]

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
        
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get(`http://127.0.0.1:8000/api/posts?company_id=${idCompany}`, {
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

        <section className='jobCard'>
            <Container>
            <div className="addbutton">
                <Link to="/addjob"  className='add'>Add New Job</Link>
            </div>
            </Container>
            <Container>

                <Row className='jobRow'>
                    {data.map(index => {
                    return (
                            <Col className='jobCol' key={index} lg={4} md={6} sm={12} >
                                <Card className="job-card mb-4"  >
                                    <h3 className='title'>From {userData} Commpanny</h3>
                                    <div className='body'>
                                        <p className='companyName'> <strong>Job Title </strong> {index.title}</p>
                                        <p className='jobRole'> <strong>Level </strong> {index.job_role}</p>
                                        <p className='careerLevel'> <strong>Experience </strong> {index.career_level}</p>
                                        <p className='experienceNeeded'> <strong>Time </strong> {index.experience_needed}</p>
                                        <p className='keySkills'> <strong>Skills </strong> {index.key_skills}</p>
                                        <p className='job_type'> <strong>job_type </strong> {index.job_type}</p>
                                    </div>
                                    <div className='part3'>
                                        <p className='address'>
                                            <FontAwesomeIcon className='LocationDot' icon={faLocationDot} />
                                            {index.address}
                                        </p>
                                        <button  onClick={handleAddReviewsClick} className={page === "landingPage" ? "Apply" : "Applynone"}>Apply Here</button>
                                        <div className={page === "landingPage" ? "buttonsNone" : "buttons"}>
                                            <Link to="/EditCardJob" className="update">
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </Link>
                                            <button className="trash" onClick={() => setIsPopupOpen(true)}>
                                                <FontAwesomeIcon icon={faTrashAlt}/>
                                            </button>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            )
                        }
                    )}
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

export default JobCard
