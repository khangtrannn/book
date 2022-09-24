import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  ngOnInit() {
    this.books = [
      {
        title: 'Hack não 1500',
        author: 'Step Up',
        downloadUrl: '/assets/books/hacknao1500.mobi',
        cover: 'https://ebookhay.net/wp-content/uploads/2020/09/hack-nao-1500-tu-tieng-anh.jpg'
      }
    ]
  }
}
