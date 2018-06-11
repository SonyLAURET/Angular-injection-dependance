import { Formation } from "../Formation";

export class FormationService {
    constructor() { }
    getFormations(): Array<Formation> {
        return [
            new Formation('Module Angular',"formation sur angular 5"),
            new Formation('Module JavaScript','formation sur javascript'),
            new Formation('Module TypeScript',''),]
    }

}