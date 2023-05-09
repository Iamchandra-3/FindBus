// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import {getAuth,setPersistence,browserSessionPersistence} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

//initializing Firebase
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCLasrBLlU1guuxGQ3_dfmF7kM9RboWNkM",
    authDomain: "findbus-83ccb.firebaseapp.com",
    databaseURL: "https://findbus-83ccb-default-rtdb.firebaseio.com/",
    projectId: "findbus-83ccb",
    storageBucket: "findbus-83ccb.appspot.com",
    messagingSenderId: "802174545668",
    appId: "1:802174545668:web:9ce7961b83d732b69fea51",
    measurementId: "G-KJGHTJ4LDV"
});


const auth = getAuth(firebaseApp);
sessionStorage.setItem("auth",auth);


 //*************Restricting dates according to the database *****************/
//  var from ="";
//  var to="";
//  var dd ="";
//  $('#date').attr('min', "2022-03-18");
//  $('#date').attr('max', "2022-03-19");
 //*************END Restricting dates according to the database****************/

//********************EVENT LISTENING FOR search button in Index page */
 
const btnloginm=document.getElementById("btnloginm")
btnloginm.addEventListener("click",()=>{window.location.href = "Login.html"})
 const searchstart=async()=> {
  from= source1.value;
  to = destination1.value;
  dd= date.value;
     if (from== "" && to== "" && dd == "") {
        window.alert("Please Fill out all fields ")
     }
     else {
      from= source1.value;
      to = destination1.value;
      dd= date.value;
      sessionStorage.setItem("from",from);
      sessionStorage.setItem("to",to);
      sessionStorage.setItem("date",dd);
      window.location.href = "booking.html"
     }
 } 
 var btnsearch=document.getElementById("btnsearch");
 btnsearch.addEventListener("click", searchstart)
//********************EVENT LISTENING FOR search button in Index page */

//**login button event handling */
var loginm=document.getElementById("btnloginm");
loginm.addEventListener("click",()=>{
  window.location.href="Login.html";
  sessionStorage.setItem("index","index")
})
//**End login button event handling */

//**************************************************changing state persistence******************* */
setPersistence(auth,browserSessionPersistence)
.catch((error)=>{
  console.log(error);
})
//*************************************************End of changing state persistence******************* */