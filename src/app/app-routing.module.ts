import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth-guard';
import { AdminComponent } from './pages/admin/admin.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { LoginComponent } from './pages/login/login.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { RecommendedComponent } from './pages/recommended/recommended.component';

const routes: Routes = [
  { path: '', redirectTo: '/recommended', pathMatch: 'full'},
  { path: 'movies', component: MoviesComponent, canActivate: [AuthGuard] },
  { path: 'recommended', component: RecommendedComponent, canActivate: [AuthGuard] },
  { path: 'groups', component: GroupsComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
