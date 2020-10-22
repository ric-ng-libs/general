import { Injectable } from '@angular/core';

import { IComparateur } from '../modeles/comparateur-interface.modele';
import { Filtre } from '../modeles/filtre.type';



@Injectable({
  providedIn: 'root'
})
export abstract class FiltreService<T> {
    
    private comparateur: IComparateur<T>;

    constructor() {
        this.comparateur = this.creerComparateur();
    }

    protected abstract creerComparateur(): IComparateur<T>;

    private obtenirComparateur(): IComparateur<T> {
        return(this.comparateur);
    }

    obtenirFiltreEgalite(itemCible: T): Filtre<T> {
        const retour: Filtre<T> = (item: T): boolean => {
            const trouve: boolean = this.obtenirComparateur().testerEgalite(item, itemCible);
            return(trouve);                              
        };
        return(retour);
    }  

} 