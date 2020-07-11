import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { AddDefinitionComponent } from './add-definition/add-definition.component';
import { AboutComponent } from './about/about.component';
import { CreateOtherComponent } from './create-other/create-other.component';
import { DetailOtherComponent } from './detail-other/detail-other.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddDefinitionOtherComponent } from './add-definition-other/add-definition-other.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'termsEnglish/detail/:id',
    component: DetailComponent,
    pathMatch: 'full',
  },
  { path: 'termsEnglish/create', component: CreateComponent },
  {
    path: 'termsEnglish/add-definition/:id',
    component: AddDefinitionComponent,
    pathMatch: 'full',
  },
  {
    path: 'termsOther/create/:id',
    component: CreateOtherComponent,
    pathMatch: 'full',
  },
  {
    path: 'termsOther/detail/:id',
    component: DetailOtherComponent,
    pathMatch: 'full',
  },
  {
    path: 'termsOther/add-definition/:id',
    component: AddDefinitionOtherComponent,
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
