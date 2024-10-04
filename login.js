import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkDHaYrv0OETBHUlqAfS7dno5cf3ywTj4",
  authDomain: "appcadastresse.firebaseapp.com",
  projectId: "appcadastresse",
  storageBucket: "appcadastresse.appspot.com",
  messagingSenderId: "891443415257",
  appId: "1:891443415257:web:bcaf7cd2be9d4fc7eed6c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.getElementById("login_button").addEventListener("click", function(){
  const email = document.getElementById("username").value;
  const senha = document.getElementById("password").value;


signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   console.log("ok")
   document.getElementById("container").style.display = "none";
   document.getElementById("concluido").innerHTML = "bem vindo \n" + email + "!!!";
   document.getElementById("concluido").style.color = "white";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("concluido").innerHTML = "senha ou email invalido";
    document.getElementById("concluido").style.color = "red";
  });
})
