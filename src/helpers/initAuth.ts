import { init } from 'next-firebase-auth'


const initAuth = () => {
  init({
    debug: true,
    authPageURL: '/auth/login',
    appPageURL: '/',
    loginAPIEndpoint: '/api/auth/login', // required
    logoutAPIEndpoint: '/api/auth/logout', // required
    // firebaseAuthEmulatorHost: 'localhost:9099',
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'catalogo-fmedeiros',
        clientEmail: 'catalogo-fmedeiros@appspot.gserviceaccount.com',
        // The private key must not be accesssible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: 'https://catalogo-fmedeiros.firebaseio.com',
    },
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyDMb-cDe60NOAkYZ-Yj0cb8qln84m6yhcY', // required
      authDomain: 'catalogo-fmedeiros.firebaseapp.com',
      databaseURL: 'https://catalogo-fmedeiros.firebaseio.com',
      projectId: 'catalogo-fmedeiros',
      appId: '1:295222701516:web:68f26d87ba8c3c77f88169',
      storageBucket: 'catalogo-fmedeiros.appspot.com',
      messagingSenderId: "295222701516",
      measurementId: "G-8Y95T28ZJT",
    },
    cookies: {
      name: 'catalogo.fmedeiros', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      signed: true,
      keys: [
        process.env.FIREBASE_COOKIE_SECRET_CURRENT,
        process.env.FIREBASE_COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: false, // set this to false in local (non-HTTPS) development
    },
  })
}

export default initAuth
