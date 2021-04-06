import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactComponent } from './contact/contact.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyStatisticsComponent } from './survey-statistics/survey-statistics.component';
import { FillSurveyComponent } from './fill-survey/fill-survey.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NewsComponent,
    CreateNewsComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    AddUsersComponent,
    EditUserComponent,
    SurveyComponent,
    SurveyStatisticsComponent,
    FillSurveyComponent,
    CreateSurveyComponent,
    NotificationsComponent,
    SendNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
