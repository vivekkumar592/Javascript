const ui=new UI;

const github=new GitHub;

const searchUser=document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{
  let userText=e.target.value;
  console.log(userText);
   if(userText!==''){
     github.getUser(userText)
      .then(data=>{
        if(data.profile.message==='Not Found'){
                  //show Alert
                  ui.clearAlert();
                  ui.showAlert("Username Not found",'alert alert-danger');
        } else{
           //show Profile
           ui.clearAlert();
           ui.showProfile(data.profile);
        }
        console.log(data);
      })
   } else{
     //clear Profile
    
     ui.clearProfile();
   }
})



