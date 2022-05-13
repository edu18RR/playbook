const issue={
    title:'"edu18RR/playbook"',
    repositoryNameAssociated:"visualpartnership/playbook",
    statuse:"activo",
    numberOfComments:21,
    labels:["Code", "Pull requests", "actions","proyects", "wiki"],
    autor:"edu18RR",
    dateCreated:"18 abril",
    lastUpdated:"15 mayo",
    getTitleAndAuthor: function(){
        console.log("El titulo del issue es: "+this.title+". Autor: "+this.autor)
    },
    getGeneralInfo: function(){
        return `This issue ${this.title} was created by ${this.autor} asociate to the repository ${this.repositoryNameAssociated}`
    }
}

console.log("Nombre del Issue: "+issue.title+". Nombre del repositorio asociado: "+issue.repositoryNameAssociated)
console.log("Status: "+issue.statuse+". Número de commentarios: "+issue.numberOfComments+". Etiquetas: "+issue.labels)
console.log("Autor: "+issue.autor+". Fecha de creacion: "+ issue.dateCreated+". Ultima fecha de actualización: "+issue.lastUpdated)
issue.getTitleAndAuthor()
console.log(issue.getGeneralInfo())