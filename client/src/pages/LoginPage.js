import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import  { Link } from 'react-router-dom';

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
        <div className="login-container">
            <div className="login-page">
                <h2 className="login-title">로그인</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="username">아이디</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            placeholder="아이디를 입력해주세요"
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
                        placeholder="비밀번호를 입력해주세요"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </div>
                    <button type="submit">로그인</button>
                </form>
                <div className="sub-links">
                    <Link to="/register">회원가입</Link>
                    <span>|</span>
                    <Link to="/find-id-password">아이디/비밀번호 찾기</Link>
                    <div className="divider" />
                </div>
                <div className="social-buttons">
                    <button className="social-button kakao">카카오</button> 
                    <button className="social-button naver">네이버</button>
                    <button className="social-button google">구글</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;