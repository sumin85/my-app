import React, { useState, useEffect} from "react";

const Mypage = () => {
    const [user, setUser] = useState({
        username: "admin",
        email: "admin@example.com",
    });

    useEffect(() => {

    },[]);

    return (
        <div className="mypage">
            <h2>마이페이지</h2>
            <div className="user-info">
                <p>
                    <strong>사용자명</strong> {user.username}
                </p>
                <p>
                    <strong>이메일:</strong> {user.email}
                </p>
            </div>
        </div>
    );
};

export default Mypage;