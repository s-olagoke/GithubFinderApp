class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.repos = document.getElementById('repos');
  }
  
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url} " class="img-fluid img-block mb-2">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
          </div>
          <div class="col-md-9">
              <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
              <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-success">Followers: ${user.followers}</span>
              <span class="badge badge-dark">Following: ${user.following}</span>
            <ul class="list-group mt-2">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos">
        
        
        
        </div>
    `
  }
  
  // Show repo
  
  showRepos(repos) {
    
    let output = '';
    
    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazer_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });
    
    // Output repo
    document.getElementById('repos').innerHTML = output;
  }
  
  clearProfile() {
    this.profile.innerHTML = "";
  }
  
  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert-danger');
    
    if (currentAlert) {
      currentAlert.remove(); 
    }
    
  }
  
  // Show alert message
  showAlert(msg, className) {
    // clear any remaining alert
    this.clearAlert()
    // create div
    const div = document.createElement('div');
    // Add class name
    div.className = className;
    // Add text node
    div.appendChild(document.createTextNode(msg));
    // create parent element
    const container = document.querySelector('#searchContainer');
    // sibling
    const search = document.querySelector('.search');
    
    // Insert Alert
    container.insertBefore(div, search);
    
    // timeout after 3sec
    setTimeout( () => {
      this.clearAlert();
    }, 3000);
    
  }
}