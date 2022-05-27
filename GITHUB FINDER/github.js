class GitHub{
  constructor(){
    this.client_id='5dabbfc0a38e521c3f91';
    this.client_secret='ce477b1b038e1f0b3700f9b3af830621ab40decc';
  }

  async getUser(user){
    const profileResponse= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile=await profileResponse.json();
    return {profile};
  }
}