import { useEffect, useState } from 'react';
import pdf from './../../assets/Images/logo.svg'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck , faTimes , faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Cvs.css'
import NavBar2 from '../NavBar2/NavBar2';
import axios from 'axios';
const Popup = ({ message, onConfirm, onCancel }) => {
    return (
        <div style={popupStyle}>
            <div className='popup' style={popupContentStyle}>
                <p style={{fontSize: '2rem' , textAlign: 'center'}}>{message}</p>
                <div style={{    width: '100%' , display: 'flex' , justifyContent: 'center' , gap: '10px' , alignItems: 'center'}}>
                <button style={{ border: '1px solid #5cb7fd' ,padding: '10px 15px' ,background: '#5cb7fd' ,borderRadius: '10px' ,fontSize: '20px'}} onClick={onConfirm}>YES</button>
                <button style={{ border: '1px solid #5cb7fd' ,padding: '10px 15px' ,background: '#5cb7fd' ,borderRadius: '10px' ,fontSize: '20px'}} onClick={onCancel}>NO</button>
                </div>
            </div>
        </div>
    );
};

const popupStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const popupContentStyle = {
    position: 'relative',
    backgroundColor: 'white',
    padding:' 50px 30px' ,
    width: '500px' ,
    height: '250px' ,
    borderRadius: '30px' ,
    display: 'flex' ,
    justifyContent: 'space-between' ,
    alignItems: 'center' ,
    flexDirection: 'column' ,
};

const CVList = () => {
    const [cvs, setCvs] = useState([
        { company_id: 1, name: 'ahmad', email: "ahmad@555gmail.com", file_path: pdf, status: '' },
        { company_id: 2, name: 'ahmad', email: "ahmad@555gmail.com", file_path: pdf, status: '' },
        { company_id: 5, name: 'ahmad', email: "ahmad@555gmail.com", file_path: pdf, status: '' },
    ]);

    const [popup, setPopup] = useState({ show: false, message: '', onConfirm: null });
    const [currentCV, setCurrentCV] = useState(null);

    const showConfirmationPopup = (message , onConfirm) => {
        setPopup({ show: true, message , onConfirm });
    };

    const handleApprove = (cv) => {
        setCurrentCV(cv);
        showConfirmationPopup('Do you want to accept this cv?', () => {
            updateCVStatus(cv.company_id, 'Accepted');
        });
    };

    const handleReject = (cv) => {
        setCurrentCV(cv);
        showConfirmationPopup('Do you want to reject this cv ?', () => {
            updateCVStatus(cv.company_id, 'rejected');
        });
    };

    const handleDelete = (cv) => {
        setCurrentCV(cv);
        showConfirmationPopup('Do you want to delete this cv ? ', () => {
            deleteCV(cv.company_id);
        });
    };

    const updateCVStatus = (id, status) => {
        setCvs(cvs.map(cv => cv.company_id === id ? { ...cv, status } : cv));
        closePopup();
    };

    const deleteCV = (id) => {
        setCvs(cvs.filter(cv => cv.company_id !== id));
        closePopup();
    };

    const closePopup = () => {
        setPopup({ show: false, message: '', onConfirm: null });
        setCurrentCV(null);
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
        <section className='CV'>
            <Container>
                <ul className="cv-list">
                    {cvs.map(cv => (
                        <li key={cv.company_id} className="cv-item" >
                            <a href={cv.file_path} className='title' target="_blank" rel="noopener noreferrer" >{cv.name}</a>
                            {cv.status && <span style={{ color: cv.status === 'Accepted' ? 'green' : 'red' }}>{cv.status}</span>}
                            <div className='icons'>
                                <FontAwesomeIcon className='icon' icon={faCheck}  onClick={() => handleApprove(cv)} ></FontAwesomeIcon>
                                <FontAwesomeIcon className='icon' icon={faTimes}  onClick={() => handleReject(cv)} ></FontAwesomeIcon>
                                <FontAwesomeIcon className='icon' icon={faTrashAlt}  onClick={() => handleDelete(cv)} ></FontAwesomeIcon>
                            </div>
                        </li>
                    ))}
                </ul>
                {
                    popup.show && (
                        <Popup
                            message={popup.message}
                            onConfirm={popup.onConfirm}
                            onCancel={closePopup}
                        />
                    )
                }
            </Container>
        </section >
            </>
    );
};

export default CVList;
