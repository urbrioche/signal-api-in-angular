import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  template: `
   <h1>Hello from {{ name }}!</h1>
   <h2>Posts List</h2>
   <app-posts />
  `,
})
export class App {
  name = 'IT Home Ironman 2024 day 2';
}

bootstrapApplication(App);
