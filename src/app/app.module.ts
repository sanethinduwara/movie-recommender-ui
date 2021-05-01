import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import {MoviesComponent} from './pages/movies/movies.component';
import {RecommendedComponent} from './pages/recommended/recommended.component';
import {AdminComponent} from './pages/admin/admin.component';
import {GroupsComponent} from './pages/groups/groups.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './pages/login/login.component';
import {ChartsModule} from 'ng2-charts';
import {NewGroupDialogComponent} from './popup/new-group-dialog/new-group-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    RecommendedComponent,
    AdminComponent,
    GroupsComponent,
    LoginComponent,
    NewGroupDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
