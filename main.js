import { Malades } from "./partials/_malades.js";
import { Docteur } from "./partials/_docteur.js";

var maladeMarcus = new Malades("Marcus","mal indenté",100,"vide","malade","");
var maladeOptimus = new Malades("Optimus","unsave",200,"vide","malade","");
var maladeSangoku = new Malades("Sangoku","404",80,"vide","malade","");
var maladeDarthVader = new Malades("DarthVader","azmatique",110,"vide","malade","");
var maladeSemicolon = new Malades("Semicolon","syntaxError",60,"vide","malade","");

// var rel1 = new Relations("mal indenté","ctrl+maj+f",60);
// var rel2 = new Relations("unsave","saveOnFocusChange",100);
// var rel3 = new Relations("404","CheckLinkRelation",35);
// var rel4 = new Relations("azmatique","Ventoline",40);
// var rel5 = new Relations("syntaxError","f12+doc",20);

var docJekyll = new Docteur("Jekyll",[],0,[maladeMarcus,maladeOptimus,maladeSangoku,maladeDarthVader,maladeSemicolon]);

docJekyll.patientIn()

// un chat dans le cabiniet du doc.