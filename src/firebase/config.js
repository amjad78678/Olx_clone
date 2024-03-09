import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyX_VztAFrUGQW3vKRZD1WPhSPnC_pB_w",
  authDomain: "olx-clone-2c382.firebaseapp.com",
  projectId: "olx-clone-2c382",
  storageBucket: "olx-clone-2c382.appspot.com",
  messagingSenderId: "211720685307",
  appId: "1:211720685307:web:cf80bc8ec7c8329b1f925e",
  measurementId: "G-1WQVXT9W0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
