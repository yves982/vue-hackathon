import Ville from './ville'
export default class Adresse {
    public constructor (
        public num: number,
        public heurePlanifiee: string,
        public nom: string,
        public ville: Ville
    ) { }
}