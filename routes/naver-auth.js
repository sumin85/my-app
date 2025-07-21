const express = require('express');
const axios = require('axios');
const admin = require('../config/firebase-admin');
const router = express.Router();

// 네이버 액세스 토큰 획득
const getNaverAccessToken = async (code, state) => {
    try {
        const response = await axios.get('https://nid.naver.com/oauth2.0/token', {
            params: {
                grant_type: 'authorization_code',
                client_id: process.env.REACT_APP_NAVER_CLIENT_ID,
                client_secret: process.env.REACT_APP_NAVER_CLIENT_SECRET,
                code: code,
                state: state
            }
        });

        return response.data.access_token;
    } catch (error) {
        console.error('네이버 액세스 토큰 획득 실패:', error);
        throw new Error('네이버 액세스 토큰 획득 실패');
    }
};

// 네이버 사용자 정보 획득
const getNaverUserInfo = async (accessToken) => {
    try {
        const response = await axios.get('https://openapi.naver.com/v1/nid/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        if (response.data.resultcode !== '00') {
            throw new Error('네이버 사용자 정보 획득 실패');
        }

        return response.data.response;
    } catch (error) {
        console.error('네이버 사용자 정보 획득 실패:', error);
        throw new Error('네이버 사용자 정보 획득 실패');
    }
};

// Firebase 커스텀 토큰 생성 및 사용자 관리
const createFirebaseUser = async (naverUser) => {
    try {
        const uid = `naver_${naverUser.id}`;
        let firebaseUser;

        try {
            // 기존 사용자 확인
            firebaseUser = await admin.auth().getUser(uid);
        } catch (error) {
            // 사용자가 없으면 새로 생성
            console.log('새 사용자 생성:', uid);
            firebaseUser = await admin.auth().createUser({
                uid: uid,
                email: naverUser.email,
                displayName: naverUser.name || naverUser.nickname,
                photoURL: naverUser.profile_image,
                emailVerified: true
            });
        }

        // 커스텀 토큰 생성
        const customToken = await admin.auth().createCustomToken(uid, {
            provider: 'naver',
            naver_id: naverUser.id
        });

        return customToken;
    } catch (error) {
        console.error('Firebase 사용자 생성/토큰 발급 실패:', error);
        throw new Error('Firebase 사용자 생성 실패');
    }
};

// 네이버 로그인 처리 API
router.post('/exchange-token', async (req, res) => {
    try {
        const { code } = req.body;

        if (!code) {
            return res.status(400).json({ 
                success: false, 
                error: '인증 코드가 필요합니다.' 
            });
        }

        // 1. 네이버 액세스 토큰 획득
        const accessToken = await getNaverAccessToken(code, 'random_state');

        // 2. 네이버 사용자 정보 획득
        const naverUser = await getNaverUserInfo(accessToken);

        // 3. Firebase 커스텀 토큰 생성
        const firebaseToken = await createFirebaseUser(naverUser);

        res.json({
            success: true,
            data: {
                firebaseToken: firebaseToken,
                user: {
                    id: naverUser.id,
                    email: naverUser.email,
                    name: naverUser.name || naverUser.nickname,
                    profileImage: naverUser.profile_image
                }
            }
        });

    } catch (error) {
        console.error('네이버 로그인 처리 실패:', error);
        res.status(500).json({
            success: false,
            error: error.message || '네이버 로그인 처리 중 오류가 발생했습니다.'
        });
    }
});

module.exports = router;
