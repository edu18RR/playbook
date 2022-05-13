
const PullRequest ={
    title:'"Launch X"',
    barnchName:"main",
    dateCreated:"18 abril",
    status:"Active",
    repositoryNameAssociated:"Playbook",
    autor:"edu18RR",
    getStatus : function(){
        console.log("Estado del Pull Request "+this.title+" es "+this.status)
    },
    getTitleAndAutor:function(){
        console.log("EL nombre del Pull Request es "+this.title+" y su autor es "+this.autor)
    }
}
PullRequest.getStatus()
PullRequest.getTitleAndAutor()