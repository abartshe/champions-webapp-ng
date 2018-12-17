import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LookupItem } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private http: HttpClient) { }

  getLookupItem(type: LookupOptions) {
    return this.http.get<LookupItem[]>(`${environment.apiBaseURL}/api/lookup/${type}`);
  }
}

export type LookupOptions =
  'affiliations' |
  'origins';
