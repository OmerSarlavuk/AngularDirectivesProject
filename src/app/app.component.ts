import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resim Sayfası';
  currentPage = 0;
  images = [
    {
      title: 'one',
      url: 'https://plus.unsplash.com/premium_photo-1664699099341-b7c4229a8d97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'two',
      url: 'https://images.unsplash.com/photo-1634711973511-7571b469428a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'
    },
    {
      title: 'three',
      url: 'https://images.unsplash.com/photo-1634839387651-5317dc8f4549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'four',
      url: 'https://images.unsplash.com/photo-1635128329715-c9e7ead3b54a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
    },
    {
      title: 'five',
      url: 'https://images.unsplash.com/photo-1596362633860-0ef5640b1356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'one',
      url: 'https://plus.unsplash.com/premium_photo-1664699099341-b7c4229a8d97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'two',
      url: 'https://images.unsplash.com/photo-1634711973511-7571b469428a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'
    },
    {
      title: 'three',
      url: 'https://images.unsplash.com/photo-1634839387651-5317dc8f4549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'four',
      url: 'https://images.unsplash.com/photo-1635128329715-c9e7ead3b54a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
    },
    {
      title: 'five',
      url: 'https://images.unsplash.com/photo-1596362633860-0ef5640b1356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'one',
      url: 'https://plus.unsplash.com/premium_photo-1664699099341-b7c4229a8d97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'two',
      url: 'https://images.unsplash.com/photo-1634711973511-7571b469428a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'
    },
    {
      title: 'three',
      url: 'https://images.unsplash.com/photo-1634839387651-5317dc8f4549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'four',
      url: 'https://images.unsplash.com/photo-1635128329715-c9e7ead3b54a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
    },
    {
      title: 'five',
      url: 'https://images.unsplash.com/photo-1596362633860-0ef5640b1356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'one',
      url: 'https://plus.unsplash.com/premium_photo-1664699099341-b7c4229a8d97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'two',
      url: 'https://images.unsplash.com/photo-1634711973511-7571b469428a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'
    },
    {
      title: 'three',
      url: 'https://images.unsplash.com/photo-1634839387651-5317dc8f4549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'four',
      url: 'https://images.unsplash.com/photo-1635128329715-c9e7ead3b54a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
    },
    {
      title: 'five',
      url: 'https://images.unsplash.com/photo-1596362633860-0ef5640b1356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'one',
      url: 'https://plus.unsplash.com/premium_photo-1664699099341-b7c4229a8d97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'two',
      url: 'https://images.unsplash.com/photo-1634711973511-7571b469428a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'
    },
    {
      title: 'three',
      url: 'https://images.unsplash.com/photo-1634839387651-5317dc8f4549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'four',
      url: 'https://images.unsplash.com/photo-1635128329715-c9e7ead3b54a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
    },
    {
      title: 'five',
      url: 'https://images.unsplash.com/photo-1596362633860-0ef5640b1356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'one',
      url: 'https://plus.unsplash.com/premium_photo-1664699099341-b7c4229a8d97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'two',
      url: 'https://images.unsplash.com/photo-1634711973511-7571b469428a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'
    },
    {
      title: 'three',
      url: 'https://images.unsplash.com/photo-1634839387651-5317dc8f4549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'four',
      url: 'https://images.unsplash.com/photo-1635128329715-c9e7ead3b54a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
    },
    {
      title: 'five',
      url: 'https://images.unsplash.com/photo-1596362633860-0ef5640b1356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    }
  ];

  PageIndex(value:number)
  {
    return Math.abs(this.currentPage - value) < 5;
  }

}