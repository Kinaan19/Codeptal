var cimetiere = [];

export class Pharmacie {
    constructor(nom,argent){
        this.nom = nom,
        this.argent = argent
    };
    venteMedoc(patient){
        console.log(`Quand ${patient.nom} arrivent enfin à la pharmacie "${this.nom}" il demande son traitement(${patient.traitement}) au pharmacien.`);
        switch (patient.traitement) {
            case "ctrl+maj+f" :
                if(patient.argent >= 60){
                    console.log(`${patient.nom} paye le pharmarcien et reçois son traitement.`);
                    patient.argent -= 60;
                    patient.takeCure();
                }else{
                    console.log(`${patient.nom} s'apperçoit qu'il n'a pas assez d'argent pour payer le traitement, le pauvre bougre est foutu; il va certainement mourrir.`);
                    cimetiere.push(patient.nom);
                    console.log(`${patient.nom} gît au cimetière désormais.\nCeux qui reposent au cimetière : ${cimetiere}\n\n`);
                }
                break;
            case "saveOnFocusChange" :
                if(patient.argent >= 100){
                    console.log(`${patient.nom} paye le pharmarcien et reçois son traitement.`);
                    patient.argent -= 100;
                    patient.takeCure();
                }else{
                    console.log(`${patient.nom} s'apperçoit qu'il n'a pas assez d'argent pour payer le traitement, le pauvre bougre est foutu; il va certainement mourrir.`);
                    cimetiere.push(patient.nom);
                    console.log(`${patient.nom} gît au cimetière désormais.\nCeux qui reposent au cimetière : ${cimetiere}\n\n`);
                }
                break;
            case "CheckLinkRelation" :
                if(patient.argent >= 35){
                    console.log(`${patient.nom} paye le pharmarcien et reçois son traitement.`);
                    patient.argent -= 35;
                    patient.takeCure();
                }else{
                    console.log(`${patient.nom} s'apperçoit qu'il n'a pas assez d'argent pour payer le traitement, le pauvre bougre est foutu; il va certainement mourrir.`);
                    cimetiere.push(patient.nom);
                    console.log(`${patient.nom} gît au cimetière désormais.\nCeux qui reposent au cimetière : ${cimetiere}\n\n`);
                }
                break;
            case "Ventoline" :
                if(patient.argent >= 40){
                    console.log(`${patient.nom} paye le pharmarcien et reçois son traitement.`);
                    patient.argent -= 40;
                    patient.takeCure();
                }else{
                    console.log(`${patient.nom} s'apperçoit qu'il n'a pas assez d'argent pour payer le traitement, le pauvre bougre est foutu; il va certainement mourrir.`);
                    cimetiere.push(patient.nom);
                    console.log(`${patient.nom} gît au cimetière désormais.\nCeux qui reposent au cimetière : ${cimetiere}\n\n`);
                }
                break;
            case "f12+doc" :
                if(patient.argent >= 20){
                    console.log(`${patient.nom} paye le pharmarcien et reçois son traitement.`);
                    patient.argent -= 20;
                    patient.takeCure();
                }else{
                    console.log(`${patient.nom} s'apperçoit qu'il n'a pas assez d'argent pour payer le traitement, le pauvre bougre est foutu; il va certainement mourrir.`);
                    cimetiere.push(patient.nom);
                    console.log(`${patient.nom} gît au cimetière désormais.\nCeux qui reposent au cimetière : ${cimetiere}\n\n`);
                }
                break;
        }
    };
};