import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React, { useState } from 'react';
import pdf from './../../assets/Images/logo.svg'
import img1 from './../../assets/Images/acceptable-risk.png'
import img2 from './../../assets/Images/delete.png'
import img3 from './../../assets/Images/rejected.png'

const Popup = ({ message, onConfirm, onCancel }) => {
    return (
        <div style={popupStyle}>
            <div className='popup' style={popupContentStyle}>
                <p>{message}</p>
                <div>
                <button style={{ marginRight: 10, padding: 5, borderRadius: 10, border: 0, width: 50 }} onClick={onConfirm}>YES</button>
                <button style={{ marginRight: 10, padding: 5, borderRadius: 10, border: 0, width: 50 }} onClick={onCancel}>NO</button>
                </div>
            </div>
        </div>
    );
};

const popupStyle = {
    position: 'fixed',
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
    background: '#61c8ff',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    height: '20vh',
    top: "30%",
    left: "40%",
    width: "20%",
    display:"flex",
    flexDirection: "column",
};

const CVList = () => {
    const [cvs, setCvs] = useState([
        { company_id: 1, name: 'ahmad', email: "ahmad@555gmail.com", file_path: pdf, status: '' },
        { company_id: 2, name: 'ahmad', email: "ahmad@555gmail.com", file_path: pdf, status: '' },
        { company_id: 5, name: 'ahmad', email: "ahmad@555gmail.com", file_path: pdf, status: '' },
    ]);

    const [popup, setPopup] = useState({ show: false, message: '', onConfirm: null });
    const [currentCV, setCurrentCV] = useState(null);

    const showConfirmationPopup = (message, onConfirm) => {
        setPopup({ show: true, message, onConfirm });
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

    return (
        <div>

            <ul className="cv-list" style={{ listStyleType: 'none', padding: "15vh" }}>
                {cvs.map(cv => (
                    <li key={cv.company_id} className="cv-item" style={{ margin: '10px 10%', padding: '10px', border: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <a href={cv.file_path} target="_blank" rel="noopener noreferrer" style={{
                            marginLeft: '10px', backgroundcolor: '#6666662a',
                            padding: " 5px "
                        }}>{cv.name}</a>
                        {cv.status && <span style={{ marginLeft: '10px', color: cv.status === 'Accepted' ? 'green' : 'red' }}>{cv.status}</span>}
                        <div style={{ width: "20%" }}>
                            <img src={img1} onClick={() => handleApprove(cv)} style={{ marginLeft: '10px', width: "20px", height: "20" }} ></img>
                            <img src={img3} onClick={() => handleReject(cv)} style={{ marginLeft: '20px', width: "20px", height: "20" }}></img>
                            <img src={img2} onClick={() => handleDelete(cv)} style={{ marginLeft: '20px', width: "20px", height: "20" }}></img>
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
        </div >
    );
};

export default CVList;
