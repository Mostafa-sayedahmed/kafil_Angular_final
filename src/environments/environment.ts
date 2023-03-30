export const environment = {
  firebase: {
    projectId: 'kafiil-12b6c',
    appId: '1:894615157997:web:9e5b2fc5d3f0c7ceb5a0e4',
    storageBucket: 'kafiil-12b6c.appspot.com',
    apiKey: 'AIzaSyByEnviX-FDw6MAqAt3DdFm5GTvXuKiwKE',
    authDomain: 'kafiil-12b6c.firebaseapp.com',
    messagingSenderId: '894615157997',
    measurementId: 'G-TXXLDM8EZ1',
  },};
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyByEnviX-FDw6MAqAt3DdFm5GTvXuKiwKE',
  authDomain: 'kafiil-12b6c.firebaseapp.com',
  projectId: 'kafiil-12b6c',
  storageBucket: 'kafiil-12b6c.appspot.com',
  messagingSenderId: '894615157997',
  appId: '1:894615157997:web:9e5b2fc5d3f0c7ceb5a0e4',
  measurementId: 'G-TXXLDM8EZ1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
