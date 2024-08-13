import { Container } from 'react-bootstrap'
import NavBar2 from '../../Components/NavBar2/NavBar2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './EditCardJob.css'
import { useNavigate, useParams } from 'react-router-dom'
function EditCardJob() {

    const [userData, setUserData] = useState(localStorage.getItem('ManegerName'));
    const [Loge, setLoge] = useState(localStorage.getItem('logo'));
    const [color, setcolor] = useState(localStorage.getItem('color'));
    const [token, settoken] = useState(localStorage.getItem('token'));

    const {id} = useParams()
    const navegeto = useNavigate()
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/posts/${id}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                setData(response.data[0]);
            //   console.log(response.data[0]);
            setTimeout(() => {
                
                setTitle(response.data[0].title)
                setJobRole(response.data[0].job_role)
                setCareerLevel(response.data[0].career_level)
                setExperienceNeeded(response.data[0].experience_needed)
                setKeySkills(response.data[0].key_skills)
                setJobType(response.data[0].job_type)
                setAddress(response.data[0].address)
            
        }, 100);
                
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [token]);

        // 1. إعداد الحالات (states) لحفظ القيم المدخلة
        const [title, setTitle] = useState('');
        const [jobRole, setJobRole] = useState('');
        const [careerLevel, setCareerLevel] = useState('');
        const [experienceNeeded, setExperienceNeeded] = useState('');
        const [keySkills, setKeySkills] = useState('');
        const [jobType, setJobType] = useState('');
        const [address, setAddress] = useState('');
        const [success, setSuccess] = useState(false);
        const [idCompany, setidCompany] = useState(localStorage.getItem('companyid'));
    

        useEffect(() => {
            
        } , [])


        // 2. دالة `handleSubmit` لإرسال البيانات المدخلة باستخدام axios
        const handleSubmit = async (e) => {
            e.preventDefault(); // منع إعادة تحميل الصفحة عند الإرسال
    
            try {
                const response = await axios.put(`http://127.0.0.1:8000/api/post/${id}`, {
                    title,
                    job_role: jobRole,
                    career_level: careerLevel,
                    experience_needed: experienceNeeded,
                    key_skills: keySkills,
                    job_type: jobType,
                    address,
                    // company_id : idCompany,
                }, {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                });
    
                console.log('Data submitted successfully:', response.data);
                setSuccess(true);
                setError(null);
                navegeto('/nav')
            } catch (error) {
                console.error('Error submitting data:', error);
                setError('Failed to submit data.');
                setSuccess(false);
            }
        };
    return (
        <section className='addjob'>
        <NavBar2 userData={userData} Loge={Loge} color={color}/>
        <Container>
            <div className="title">
                <h2>Edit Job</h2>
            </div>
            <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Job Title:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Job Role:</label>
                    <input 
                        type="text" 
                        value={jobRole} 
                        onChange={(e) => setJobRole(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Career Level:</label>
                    <input 
                        type="text" 
                        value={careerLevel} 
                        onChange={(e) => setCareerLevel(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Experience Needed:</label>
                    <input 
                        type="text" 
                        value={experienceNeeded} 
                        onChange={(e) => setExperienceNeeded(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Key Skills:</label>
                    <input 
                        type="text" 
                        value={keySkills} 
                        onChange={(e) => setKeySkills(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Job Type:</label>
                    <input 
                        type="text" 
                        value={jobType} 
                        onChange={(e) => setJobType(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Data submitted successfully!</p>}
        </div>
        </Container>
    </section>
    )
}

export default EditCardJob