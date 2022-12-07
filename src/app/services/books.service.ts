import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, setDoc, docData } from '@angular/fire/firestore';
import { deleteDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  bookReference = collection(this.firestore, 'books')
  constructor(private firestore: Firestore) { }
  // add new book
  addBook(book: Book): Promise<void> {
    return addDoc(this.bookReference, book) as Promise<any>;
  }
  // get all book from db
  getBooks() {
    return collectionData(this.bookReference, { idField: "id" }) as Observable<Book[]>
  }
  // delete specific book

  deleteBook(book: Book): Promise<void> {
    let bookRef = doc(this.firestore, `books/${book.id}`)
    return deleteDoc(bookRef) as Promise<void>
  }
  // update specific book

  updateBook(newBook: Book): Promise<any> {
    let bookRef = doc(this.firestore, `books/${newBook.id}`);
    return setDoc(bookRef, newBook) as Promise<any>;
  }

  // get specific book by id
  getBookById(id: string): Observable<Book> {
    let bookRef = doc(this.firestore, `books/${id}`);
    return docData(bookRef, { idField: 'id' }) as Observable<Book>;
  }

}
