import { Injectable } from '@angular/core';

import { AFiltreService } from '@ric-ng/ts-general';


@Injectable({
  providedIn: 'root'
})
export abstract class FiltreService<T> extends AFiltreService<T>{
} 