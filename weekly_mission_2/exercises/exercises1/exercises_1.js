const repo = {
    name: "LaunchX",
    author: "Edu Rosas",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   console.log("Name: "+repo.name+". Autor: "+repo.author+". Lenguage: "+repo.language)
   console.log("Number of commits: "+repo.numberOfCommits+". Stars: "+repo.stars+". Forks: "+repo.forks)
   console.log("Issues open: "+repo.issues_open+". Issues close: "+repo.issues_close)