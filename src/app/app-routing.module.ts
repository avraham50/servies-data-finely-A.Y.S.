import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { TodosComponent } from './comps/totos/todos.component';
import { PhotosComponent } from './comps/photos/photos.component';
import { PostsComponent } from './comps/posts/posts.component';
import { UsersComponent } from './comps/users/users.component';
import { CommentPostsComponent } from './comps/comment-posts/comment-posts.component';
import { TodosComponent } from './comps/todos/todos.component';
import { LoginComponent } from './comps/login/login.component';

const routes: Routes = [
  { path: 'photos', component: PhotosComponent},
  { path: 'posts', component: PostsComponent},
  { path: 'users', component: UsersComponent,},
  { path: 'comment_posts', component: CommentPostsComponent},
  { path: 'todos', component: TodosComponent},
  { path: 'login', component: LoginComponent},

  { path: '', component: LoginComponent },
  { path: '**', component: LoginComponent},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
