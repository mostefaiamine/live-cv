import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap} from 'rxjs/operators';

const baseUrl = "/assets/data/cv.json";

@Injectable()
export class ResumeService {
    /** data */
    private _data: any = null;

    constructor(private http: HttpClient) {

    }

    getData(): Observable<any> {
        if (this._data) {
            return of(this._data);
        }
        return this.http.get(baseUrl).pipe(
            tap(d => this._data = d)
        );
    }
}