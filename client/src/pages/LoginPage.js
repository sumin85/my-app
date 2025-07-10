import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === 'admin' && password === 'password') {
            navigate('/mypage');
        } else{
            alert('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <div className="login-page">
            <h2>로그인</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">아이디</label>
                    <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                </div>
                <div className="form-group">
                    <label htmlFor="password">비밀번호</label>
                    <input
                    type="password"
                    id="password"
                    value={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default LoginPage;