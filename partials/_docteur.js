import { Pharmacie } from "./_pharmacie.js";
var pharmacie = new Pharmacie("la cave",0);

export class Docteur {
    constructor(nom,cabinet,argent,salleA){
        this.nom = nom,
        this.cabinet = cabinet,
        this.argent = argent,
        this.salleA = salleA
    };
    diagnostique(patient){
        if(patient.argent >= 50){
            console.log(`${this.nom} osculte ${patient.nom} et lui fait son diagnostique.`);
            patient.etatSante = "diagnostiqué";
            switch (patient.maladie) {
                case "mal indenté":
                    patient.traitement = "ctrl+maj+f";
                    console.log(`Le docteur ${this.nom} dit à ${patient.nom} que le traitement à sa maladie est ${patient.traitement}.`)
                    break;
                case "unsave":
                    patient.traitement = "saveOnFocusChange";
                    console.log(`Le docteur ${this.nom} dit à ${patient.nom} que le traitement à sa maladie est ${patient.traitement}.`)
                    break;    
                case "404":
                    patient.traitement = "CheckLinkRelation";
                    console.log(`Le docteur ${this.nom} dit à ${patient.nom} que le traitement à sa maladie est ${patient.traitement}.`)
                    break;
                case "azmatique":
                    patient.traitement = "Ventoline";
                    console.log(`Le docteur ${this.nom} dit à ${patient.nom} que le traitement à sa maladie est ${patient.traitement}.`)
                    break;
                case "syntaxError":
                    patient.traitement = "f12+doc";
                    console.log(`Le docteur ${this.nom} dit à ${patient.nom} que le traitement à sa maladie est ${patient.traitement}.`)
                    break;
                default:
                    console.log(`${patient.nom} est foutu, on ne trouve pas de traitement à sa maladie !`);
                    break;
            }
            patient.payer(this);
        }else{
            console.log(`${patient.nom} n'a pas assez d'argent pour la consultation et s'en vas du cabinet. Il est voué à mourrir dans d'atroces souffrances.`);
            this.patientOut();
        }
    };
    patientIn(){
        let patientCourant = this.salleA.shift();
        setTimeout(()=>{
            this.cabinet.push(patientCourant);
            console.log(`${patientCourant.nom} rentre   dans le cabinet du docteur ${this.nom}.`);
            this.diagnostique(patientCourant);
            this.patientOut();
            pharmacie.venteMedoc(patientCourant);
            if(this.salleA.length>0){
                setTimeout(this.patientIn(),2000);
            };
        },2000)        
    };
    patientOut(){
        this.cabinet.pop();
    };
};