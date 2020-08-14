import { BookdataService }  from './bookdata.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title='wednesday';
  books:[];
  displayedColumns: string[] = ['TopSellers', 'AuthorName', 'Title']
  constructor(private http1: BookdataService ) {}
  ngOnInit(){
    this.http1.getBooksInfo().subscribe(
      (data)=>{
        console.log(data),
        this.books=data['results']['books']})
      console.log(this.books);
  }
}
 