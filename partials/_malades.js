export class Malades {
    constructor(nom,maladie,argent,poche,etatSante,traitement){
        this.nom = nom,
        this.maladie = maladie,
        this.argent = argent,
        this.poche = poche,
        this.etatSante = etatSante,
        this.traitement = traitement
    };
    goTo(){
        
    };
    takeCure(){
        this.etatSante = "en bonne santé";
        console.log(`${this.nom} prend son traitement, il est maintenant ${this.etatSante} et rentre chez lui heureux.\n\n`)
    };
    payer(docteur){
        console.log(`${this.nom} paye le docteur ${docteur.nom}, lui serre là main et s'en va chercher son traitement à la pharmacie.`);
        this.argent -= 50;
        console.log(`${this.nom} a encore ${this.argent} euros.`);
    };
};