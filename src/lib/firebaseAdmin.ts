import admin from 'firebase-admin';

let adminAuth: admin.auth.Auth | undefined;

if (!admin.apps.length) {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (projectId && clientEmail && privateKey) {
        try {
            admin.initializeApp({
                credential: admin.credential.cert({
                    projectId,
                    clientEmail,
                    privateKey,
                }),
            });
            adminAuth = admin.auth();
            console.log("Firebase Admin Initialized successfully.");
        } catch (error: any) {
            console.error('Firebase admin initialization error:', error.message);
        }
    } else {
        console.warn('Firebase Admin API Env variables missing. Firebase features will be disabled.');
    }
} else {
    // Already initialized
    adminAuth = admin.auth();
}

export { adminAuth };

