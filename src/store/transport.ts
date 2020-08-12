import Adresse from './adresse'

export default class Transport {
    public nom: string = "";
    public journee: Date = new Date();
    public depart: Adresse;
    public arrivee: Adresse;
    public id: number = 0;

    private static maxId : number = 0;

    public constructor(nom: string, journee: Date, depart: Adresse,
        arrivee: Adresse) {
            this.nom = nom;
            this.journee = journee;
            this.depart = depart;
            this.arrivee = arrivee;
            this.id = Transport.maxId++;
    }
}