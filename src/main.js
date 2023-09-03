import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// firebase imports
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';

createApp(App).mount('#app')

const firebaseConfig = {
    apiKey: "AIzaSyCX78dxorKjss5T1sLareHP7T7nMJogaxs",
    authDomain: "crooksryan-portfolio.firebaseapp.com",
    projectId: "crooksryan-portfolio",
    storageBucket: "crooksryan-portfolio.appspot.com",
    messagingSenderId: "353807726439",
    appId: "1:353807726439:web:bbc1999cf1d35d8acf21c2",
    measurementId: "G-EPPBWXGN1R"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const performance = getPerformance(app);