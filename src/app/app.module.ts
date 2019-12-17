import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './comps/todos/todos.component';
import { PhotosComponent } from './comps/photos/photos.component';
import { PostsComponent } from './comps/posts/posts.component';
import { UsersComponent } from './comps/users/users.component';
import { CommentPostsComponent } from './comps/comment-posts/comment-posts.component';
import { MatModule } from './modules/mat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './comps/navigation/navigation.component';
import { TodoComponent } from './comps/items/todo/todo.component';
import { PostComponent } from './comps/items/post/post.component';
import { UserComponent } from './comps/items/user/user.component';
import { PhotoComponent } from './comps/items/photo/photo.component';
import { ChangeMatDirective } from './directivs/change-mat.directive';
import { ImageDirective } from './directivs/image.directive';
import { SearchPipe } from './pipes/search.pipe';
import { LoginComponent } from './comps/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    PhotosComponent,
    PostsComponent,
    UsersComponent,
    CommentPostsComponent,
    NavigationComponent,
    TodoComponent,
    PostComponent,
    UserComponent,
    PhotoComponent,
    ChangeMatDirective,
    ImageDirective,
    SearchPipe,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
     HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
