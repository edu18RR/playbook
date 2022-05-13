class facebook{
    constructor(name,perfil_picture,age,friends,post_1,biography)
    {
        this.name=name
        this.perfil_picture=perfil_picture
        this.age=age
        this.friends=friends
        this.post_1=post_1
        this.biography=biography
    }
}

const face=new facebook("Rangel Edu","/imageperfil",31,309,['tilte:"Tu!"','date:"07-05-2022"','text:"amor"','image:"/image"','friends_tags:["vero"]'],['country:"México"','work:"CCSF"','emotional_situation:"Casado"','School:"UNID"','city:"CDMX"'])
console.log(face)