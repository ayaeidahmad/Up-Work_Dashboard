import { Container, Row , Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot , faTrashAlt , faEdit } from '@fortawesome/free-solid-svg-icons';
import './JobCard.css';
import { useEffect, useState } from 'react';
import PopUpAddReviews from '../PopUpAddReviews/PopUpAddReviews';
import PopupDelete from '../PopupDelete/PopupDelete';
import { Link } from 'react-router-dom';
import NavBar2 from '../NavBar2/NavBar2';
import axios from 'axios';

const JobCard = ({ page }) => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [jobToDelete, setJobToDelete] = useState(null);

    const [userData, setUserData] = useState(localStorage.getItem('ManegerName'));
    const [Loge, setLoge] = useState(localStorage.getItem('logo'));
    const [color, setcolor] = useState(localStorage.getItem('color'));
    const [token, settoken] = useState(localStorage.getItem('token'));
    const [idCompany, setidCompany] = useState(localStorage.getItem('companyid'));

    const [showPopup, setShowPopup] = useState(false);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    const [reviewsList, setReviewsList] = useState([]);
    
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
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [idCompany, token]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/post/${jobToDelete}`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            // قم بإزالة العنصر المحذوف من قائمة البيانات
            setData(prevData => prevData.filter(job => job.id !== jobToDelete));
            setIsPopupOpen(false);
        } catch (error) {
            console.error('Error deleting job: ', error);
        }
    };

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <NavBar2 userData={userData} Loge={Loge} color={color}/>

            <section className='jobCard'>
                <Container>
                    <div className="addbutton">
                        <Link to="/addjob" className='add'>Add New Job</Link>
                    </div>
                </Container>
                <Container>
                    <Row className='jobRow'>
                        {data.map(job => (
                            <Col className='jobCol' key={job.id} lg={4} md={6} sm={12}>
                                <Card className="job-card mb-4">
                                    <h3 className='title'>From {userData} Company</h3>
                                    <div className='body'>
                                        <p className='companyName'> <strong>Job Title </strong> {job.title}</p>
                                        <p className='jobRole'> <strong>Level </strong> {job.job_role}</p>
                                        <p className='careerLevel'> <strong>Experience </strong> {job.career_level}</p>
                                        <p className='experienceNeeded'> <strong>Time </strong> {job.experience_needed}</p>
                                        <p className='keySkills'> <strong>Skills </strong> {job.key_skills}</p>
                                        <p className='job_type'> <strong>job_type </strong> {job.job_type}</p>
                                    </div>
                                    <div className='part3'>
                                        <p className='address'>
                                            <FontAwesomeIcon className='LocationDot' icon={faLocationDot} />
                                            {job.address}
                                        </p>
                                        <button onClick={handleAddReviewsClick} className={page === "landingPage" ? "Apply" : "Applynone"}>Apply Here</button>
                                        <div className={page === "landingPage" ? "buttonsNone" : "buttons"}>
                                            <Link to={`/EditCardJob/${job.id}`} className="update">
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </Link>
                                            <button 
                                                className="trash" 
                                                onClick={() => { 
                                                    setJobToDelete(job.id); 
                                                    setIsPopupOpen(true); 
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faTrashAlt}/>
                                            </button>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        ))}
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
                            message="Are you sure you want to confirm deletion?" 
                            onConfirm={handleDelete} 
                            onCancel={() => setIsPopupOpen(false)} 
                        />
                    )}
                </Container>
            </section>
        </>
    );
}

export default JobCard;
