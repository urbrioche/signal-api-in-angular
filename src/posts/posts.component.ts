import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PostService } from '../post.service';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent {
  postService = inject(PostService);
  filteredPosts = [...this.postService.posts];

  delete(id: number) {
    this.filteredPosts = this.filteredPosts.filter((post) => post.id !== id);
  }

  restore() {
    this.filteredPosts = [...this.postService.posts];
  }
}
