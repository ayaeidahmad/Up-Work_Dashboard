import { Container } from "react-bootstrap"
import NavBar2 from '../../Components/NavBar2/NavBar2'
import './AddArticle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAsterisk } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import axios from "axios"
const AddArticle = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [file, setFile] = useState(null); // الحالة لتخزين الملف
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [company_id, setcompany_id] = useState(localStorage.getItem('companyid'));

    // دالة handleSubmit لإرسال البيانات عند النقر على زر الإرسال
    const handleSubmit = async (e) => {
        e.preventDefault();  // منع إعادة تحميل الصفحة

        // إعداد FormData
        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('company_id', company_id);
        if (file) {
            formData.append('photo', file);  // 'photo' هو اسم الحقل المتوقع من الـ API
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/article', formData, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                }
            });

            console.log(response.data);
            setSuccess(true);
            setTitle('');
            setBody('');
            setFile(null);
        } catch (error) {
            console.error('Error submitting the form:', error);
            setError(error.message);
        }
    };

    const [userData, setUserData] = useState(localStorage.getItem('Maneger'));
    const [Loge, setLoge] = useState(localStorage.getItem('logo'));
    const [color, setcolor] = useState(localStorage.getItem('color'));
    
    return (
        <section className="addarticle">
            <NavBar2 userData={userData} Loge={Loge} color={color} />
            <Container>
                <div className="title">
                </div>
                 <div className="form-container">
            <h2>Add New Article</h2>
            {success && <p className="success-message">Article added successfully!</p>}
            {error && <p className="error-message">Error: {error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body:</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="file">Upload Photo:</label>
                    <input
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])} // تخزين الملف في الحالة
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
            </Container>
        </section>
    )
}

export default AddArticle