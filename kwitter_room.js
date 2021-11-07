
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDMIxqfWVGCdCjJCeCFT-e3dYhkL4GCeY0",
      authDomain: "kwitter-442b1.firebaseapp.com",
      databaseURL: "https://kwitter-442b1-default-rtdb.firebaseio.com",
      projectId: "kwitter-442b1",
      storageBucket: "kwitter-442b1.appspot.com",
      messagingSenderId: "900780597015",
      appId: "1:900780597015:web:c45dcda3587d3d7cc9a152"
    };
    
   
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+ user_name +"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+ Room_names);
row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name",user_name);
      window.location="index.html";
}
function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
})
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}