import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



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
    <div>
      <h2>تسجيل الدخول</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>البريد الإلكتروني:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>كلمة المرور:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'جارٍ تسجيل الدخول...' : 'تسجيل الدخول'}
        </button>
      </form>
    </div>
  );
};

export default Logein;
