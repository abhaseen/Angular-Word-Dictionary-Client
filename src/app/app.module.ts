import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { AddDefinitionComponent } from './add-definition/add-definition.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LikeButtonComponent } from './like-button/like-button.component';
import { HelpfulButtonsComponent } from './helpful-buttons/helpful-buttons.component';
import { CreateOtherComponent } from './create-other/create-other.component';
import { TranslationLinkComponent } from './translation-link/translation-link.component';
import { DetailOtherComponent } from './detail-other/detail-other.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddDefinitionOtherComponent } from './add-definition-other/add-definition-other.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DetailComponent,
    CreateComponent,
    AddDefinitionComponent,
    SearchComponent,
    AboutComponent,
    LikeButtonComponent,
    HelpfulButtonsComponent,
    CreateOtherComponent,
    TranslationLinkComponent,
    DetailOtherComponent,
    NotFoundComponent,
    AddDefinitionOtherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
