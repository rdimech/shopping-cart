import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Api {
    
    constructor(private http: HttpClient) {}

    getCart = () => this.http.get('http://localhost:3000');
}