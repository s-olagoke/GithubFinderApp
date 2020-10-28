// Instantiate Github library
const github = new Github();

// Instantiate UI library
const ui = new UI();



// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get user input
  const userText = e.target.value;
  
  if (userText !== '') {
   
    github.getUser(userText)
    .then(data => {
      if (data.profile.message === 'Not Found') {
        // show alert
        ui.showAlert('User not found', 'alert alert-danger')
      } else {
        ui.showProfile(data.profile)
        ui.showRepos(data.repo)
        
      }
      
      
    })
  } else {
    // clear the profile
    ui.clearProfile();
  }
})