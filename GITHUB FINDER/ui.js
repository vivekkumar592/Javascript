class UI{
  constructor(){
    this.profile=document.getElementById('profile');
  }

   showProfile(Profile) {
    this.profile.innerHTML=`
    <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
              <img class="img-fluid mb-2" src="${Profile.avatar_url}">
              <a href="${Profile.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile 
              </a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary"> Public Repos : ${Profile.public_repos}</span>
                <span class="badge badge-primary"> Public Gists : ${Profile.public_gists}</span>
                <span class="badge badge-success">Followers : ${Profile.followers}</span>
                <span class="badge badge-info"> Following : ${Profile.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${Profile.company} </li>
                    <li class="list-group-item">Website/Blog: ${Profile.blog} </li>
                    <li class="list-group-item">Location: ${Profile.location} </li>
                    <li class="list-group-item">Member Since : ${Profile.created_at} </li>

                </ul>
            </div>
        </div>
    </div>
    `
    
  }

  showAlert(message,className){
    
    const div=document.createElement('div');
   div.className=className;

   div.appendChild(document.createTextNode(message));

   const container=document.querySelector('.searchContainer');

   const search=document.querySelector('.search');

   container.insertBefore(div,search);

   setTimeout(()=>{
     this.clearAlert();
   },3000);

  }


  clearAlert(){
    const currentAlert=document.querySelector('.alert');
    if(currentAlert)
       currentAlert.remove();
  }

  clearProfile(){
    this.profile.innerHTML="";
  }

}