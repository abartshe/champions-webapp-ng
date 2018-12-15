import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Champion } from '../models/Champion';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  getChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>(`${environment.apiBaseURL}/api/champions`);
  }
}
