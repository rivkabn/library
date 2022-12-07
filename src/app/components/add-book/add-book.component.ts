import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Book } from 'src/app/interfaces/Book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book = { name: "", author: "", genre: "", price: 0 }
  constructor(private bs: BooksService) { }
  addNewBook() {
    console.log(this.book);

    this.bs.addBook(this.book).then(() => {
      console.log(
        "Book was added")
      this.reset()
    }).catch((err) => { console.log(err) });

  }
  reset() {
    this.book = { name: '', author: '', genre: '', price: 0 };
  }


  ngOnInit(): void {

  };
}


