import Adresse from './adresse'

export default class Transport {
    public Nom: string = "";
    public Journee: Date = new Date();
    public Depart: Adresse;
    public Arrivee: Adresse;
    public Id: number = 0;

    private static maxId : number = 0;

    public constructor(nom: string, journee: Date, depart: Adresse,
        arrivee: Adresse) {
            this.Nom = nom;
            this.Journee = journee;
            this.Depart = depart;
            this.Arrivee = arrivee;
            this.Id = Transport.maxId++;
    }
}