class Github {
  constructor() {
    this.client_id = 'e191b3653bd6559639a1';
    this.client_secret = '2dfa5ac1a49926f6420da9eb5f839b1d3204c516';
    this.repos_count = 5;
    this.repo_sort = 'created: asc';
  }
  
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repo_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json();
    const repo = await repoResponse.json();
    
    return {
      profile,
      repo
    }
  }
}