import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { InputComponent } from './cmps/input/input.component';
import { EditContactComponent } from './cmps/edit-contact/edit-contact.component'; // Add this
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { BitCoinService } from './services/bit-coin.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AddContactComponent } from './cmps/add-contact/add-contact.component';
import { UserPreviewComponent } from './cmps/user-preview/user-preview.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { LogInComponent } from './cmps/log-in/log-in.component';
import { SignUpComponent } from './cmps/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    InputComponent,
    ContactDetailsPageComponent,
    ContactPageComponent,
    HomePageComponent,
    AppHeaderComponent,
    StatisticsPageComponent,
    EditContactComponent,
    AddContactComponent,
    UserPreviewComponent,
    UserRegisterComponent,
    LogInComponent,
    SignUpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [BitCoinService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
