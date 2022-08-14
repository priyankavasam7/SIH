
src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"
src="https://www.gstatic.com/firebasejs/8.2.9/firebase-auth.js"
src="https://www.gstatic.com/firebasejs/8.2.9/firebase-firestore.js"
src="https://www.gstatic.com/firebasejs/8.2.9/firebase-storage.js"

async function signup(e){
    e.preventDefault()
    const email  = document.querySelector('#signupEmail')
    const password  = document.querySelector('#signupPassword')
    
    try{
    const res = await firebase.auth()
      const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      await result.user.updateProfile({
        displayName: "User"
      })
       await result.user.sendEmailVerification()
       alert("Email sent");
       window.alert(result)
    }catch(err){
        window.alert(err)
    }
    email.value = ""
    password.value = ""
    
}

async function login(e){
    e.preventDefault()
    const email  = document.querySelector('#loginEmail')
    const password  = document.querySelector('#loginPassword')    
    try{
      const result = await firebase.auth().signInWithEmailAndPassword(email.value, password.value)     
     alert(result)
     var user = firebase.auth().currentUser;
if (user !== null) {
  const uid = user.uid;
}
     window.location="profile2.html"  
    }catch(err){
        window.alert(err)        
    }
    email.value = ""
    password.value = ""
}

function logout(){
    firebase.auth().signOut()
    alert("logout")
}

async function loginWithGoogle(){
    try{
      var provider = new firebase.auth.GoogleAuthProvider();
    const result =  await firebase.auth()
    .signInWithPopup(provider)  
    console.log(result)
    }catch(err){
        window.alert(err)
    }
    
  
}



