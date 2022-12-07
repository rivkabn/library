import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from 'src/app/interfaces/Book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @Input() id!: string;
  book: Book = { name: "", author: "", genre: "", price: 0 }

  constructor(private bs: BooksService, private activeModal: NgbActiveModal) { }


  ngOnInit(): void {
    this.bs.getBookById(this.id).subscribe({
      next: (bookData: Book) => { this.book = bookData }
    })
  }
  updateTheBook() {
    this.bs
      .updateBook(this.book)
      .then(() => this.activeModal.close())
      .catch((err) => console.log(err));
  }

}
