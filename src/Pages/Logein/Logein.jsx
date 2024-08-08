import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Logein.css'
import image from './../../assets/Images/login.jpg'
import logo from './../../assets/Images/upwork1.png'
const Logein = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password,
      });

      // معالجة الاستجابة (مثل تخزين بيانات المستخدم)
      
      console.log(response.data);
      localStorage.setItem('ManegerName', response.data.company_name);
      localStorage.setItem('companyid', response.data.company_id);
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('logo', response.data.company_logo);
      localStorage.setItem('color', response.data.company_color);
      navigate('/nav');
      // يمكنك توجيه المستخدم إلى صفحة أخرى بعد تسجيل الدخول الناجح
      

    } catch (err) {
      setError('فشل تسجيل الدخول. تحقق من البريد الإلكتروني وكلمة المرور.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='login'>
      <div className="container">
        <img className='image-login' src={image} alt="image-login" />
        <div className="form">
          <div className="title">
            <img className='logo' src={logo} alt="logo" />
            <h2>Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='email'>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='password'>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" disabled={loading}>
              {loading ? 'Login in progress' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Logein;
