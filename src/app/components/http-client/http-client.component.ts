import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post{
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-http-client',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.scss'
})
export class HttpClientComponent implements OnInit {
 posts$: Observable<Post[]> | null = null;
 newPost$: Observable<Post> | null = null;

 http = inject(HttpClient);

 ngOnInit(): void {
   this.getPosts();
   this.addPost();
 }
 getPosts(){
  this.posts$ = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
 }
 addPost(){
  this.newPost$ = this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', {
    title: `New Post title #1`,
    body: 'New post body'
  });
 }
}
