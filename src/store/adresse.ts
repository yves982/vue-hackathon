import Ville from './ville'
export default class Adresse {
    public constructor (
        public Num: number,
        public HeurePlanifiee: string,
        public Nom: string,
        public Ville: Ville
    ) { }
}