import { getAuth,signOut,setPersistence,browserSessionPersistence } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { getDatabase, ref, get, query, orderByChild, equalTo } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";

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
const dbRef = getDatabase();
var pnumber = sessionStorage.getItem("pnumber");
var npassengers = sessionStorage.getItem("npass");
var startp = sessionStorage.getItem("startp");
var desp = sessionStorage.getItem("desp");
var pprice = '';
var iprice = "";
var ipass = "";
var tprice = "";
var toll = parseFloat(document.getElementById("tollprice").innerText);
var ser = parseFloat(document.getElementById("service").innerText);
var snumbers = "";
var uid1 = sessionStorage.getItem("user");

//***************************************************displaying details************************** */
const getd = query(ref(dbRef, "bookings/"), orderByChild("uid"), equalTo(uid1));
get(getd).then(details => {
    if (details.exists()) {
        details.forEach(function (singledetail) {
            npassengers = singledetail.val().npass;
            pprice = singledetail.val().price;
            snumbers = singledetail.val().seats;
            ipass = parseInt(npassengers);
            if (npassengers > 1) {
                iprice = pprice * ipass;
                iprice += (ser + toll);
                tprice = iprice.toString();
            }
        });
    }
    document.getElementById("phone").innerHTML = "+91 " + pnumber;
    document.getElementById("noofpass").innerHTML = npassengers;
    document.getElementById("amount").innerHTML = pprice;
    document.getElementById("totalprice").innerHTML = iprice;
    document.getElementById("startpoint").innerHTML = startp;
    document.getElementById("endpoint").innerHTML = "To <b>" + desp + "</b>";
    document.getElementById("seatnumbers").innerHTML = "Your Seat Numbers: " + snumbers;
});
const butok = document.getElementById("btnok")
butok.addEventListener("click", () => {
    signOut(auth);
    window.location.href = "index.html";
})

//***************************************************end of displaying details************************** */

//**************************************************changing state persistence******************* */
setPersistence(auth,browserSessionPersistence)
.catch((error)=>{
  console.log(error);
})
//*************************************************end of changing state persistence******************* */