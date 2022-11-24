import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

//////////////////////////////////////////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCiQ1Z3WKce-6hxG60gyH_QDzHfhduqF8A",
  authDomain: "ionic-26713.firebaseapp.com",
  databaseURL: "https://ionic-26713-default-rtdb.firebaseio.com",
  projectId: "ionic-26713",
  storageBucket: "ionic-26713.appspot.com",
  messagingSenderId: "814663103444",
  appId: "1:814663103444:web:1acf0e99862f0d1deadc41"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
///////////////firebase///////////////////////////////////////

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(appFirebase);
  
router.isReady().then(() => {
  app.mount('#app');
});