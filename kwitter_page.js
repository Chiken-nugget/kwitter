//YOUR FIREBASE LINKS
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

  user_name=localStorage.getItem("user_name")
  room_name=localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
      })
      document.getElementById("msg").value="";
}