import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

/**
 * Routes
 */
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';


/**
 * Includes
 */
import { ListComponent } from './includes/home/list/list.component';
import { AppBarComponent } from './includes/home/app-bar/app-bar.component';
import { HeaderComponent } from './includes/home/header/header.component';
import { ChatComponent } from './includes/home/chat/chat.component';
import { SearchComponent } from './includes/home/search/search.component';


const routes:Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AppBarComponent,
    HeaderComponent,
    HomeComponent,
    ChatComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
