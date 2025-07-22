import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();

        const [form, setForm] = useState({
            name: '',
            password: '',
            email: '',
        });
        
        const handleChange = (e) => {
            const {name, value} = e.target;
            setForm({...form, [name]: value});
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            try{
                await axios.post(`${process.env.REACT_APP_API_URL}/api/users`, form);
                alert('회원가입 성공');
                navigate('/login');
            }catch(error){
                console.error(error);
                alert('회원가입 실패' + (error.response?.error || error.message));
            }
        };

        return (
            <div className="register-container">
                <h2> 회원 가입 </h2>
                <form onSubmit={handleSubmit} className="register-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="아이디"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="이메일"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="비밀번호"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">회원가입</button>
                </form>
            </div>
        );
    };


export default RegisterPage;