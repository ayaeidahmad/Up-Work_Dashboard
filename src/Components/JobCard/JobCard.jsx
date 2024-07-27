import { Container, Row , Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot , faTrashAlt , faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './JobCard.css'
import { useState } from 'react';
import PopUpAddReviews from '../PopUpAddReviews/PopUpAddReviews';
import PopupDelete from '../PopupDelete/PopupDelete';
import { Link } from 'react-router-dom';
const JobCard = ({page, onDelete }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleDelete = () => {
        onDelete();
        setIsPopupOpen(false);
    };
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
        } , 
        {
            company_name : "Focal X Agency",
            job_title : "software development", 
            career_Level : "senior", 
            experience_Needed : "more 5 years", 
            Time : "full time", 
            key_Skills : "android, database, xml", 
            address : "Syria - latakia", 
            id: 1
        } , 
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
    return (
        <section className='jobCard'>
            <Container>
            <div className="addbutton">
                <Link to="/addjob"  className='add'>Add New Job</Link>
            </div>
            </Container>
            <Container>
                <Row className='jobRow'>
                    {Job_Details.map(index => {
                    return (
                            <Col className='jobCol' key={index} lg={4} md={6} sm={12} >
                                <Card className="job-card mb-4"  >
                                    <h3 className='title'> {index.company_name} </h3>
                                    <div className='body'>
                                        <p className='companyName'> <strong>Job Title </strong> {index.job_title}</p>
                                        <p className='jobRole'> <strong>Level </strong> {index.career_Level}</p>
                                        <p className='careerLevel'> <strong>Experience </strong> {index.experience_Needed}</p>
                                        <p className='experienceNeeded'> <strong>Time </strong> {index.Time}</p>
                                        <p className='keySkills'> <strong>Skills </strong> {index.key_Skills}</p>
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
    )
}

export default JobCard
