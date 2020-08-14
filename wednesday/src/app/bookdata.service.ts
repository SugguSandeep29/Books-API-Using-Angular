import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})
export class BookdataService {
    key= 'PywdqvDIaw25IRrNA3pzKxVxLzOl8be5';
    constructor(private http1:HttpClient) {}
    getBooksInfo()
    {
        return this.http1.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${this.key}`);
    }
}