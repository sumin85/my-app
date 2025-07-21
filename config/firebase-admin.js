const admin = require('firebase-admin');

// Firebase Admin SDK 초기화
// 실제 서비스 계정 키 파일이 필요하지만, 개발 환경에서는 환경변수로 대체 가능
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        // 또는 서비스 계정 키 파일 사용:
        // credential: admin.credential.cert(require('./path/to/serviceAccountKey.json')),
        projectId: 'schedule-share-513'
    });
}

module.exports = admin;
