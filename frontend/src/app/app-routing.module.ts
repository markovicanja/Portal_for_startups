import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsersComponent } from './add-users/add-users.component';
import { ContactComponent } from './contact/contact.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FillSurveyComponent } from './fill-survey/fill-survey.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { SurveyStatisticsComponent } from './survey-statistics/survey-statistics.component';
import { SurveyComponent } from './survey/survey.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'news', component: NewsComponent },
  { path: 'createNews', component: CreateNewsComponent },
  { path: 'termsOfUse', component: TermsOfUseComponent },
  { path: 'privacyPolicy', component: PrivacyPolicyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'addUser', component: AddUsersComponent },
  { path: 'editUser', component: EditUserComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'surveyStatistics', component: SurveyStatisticsComponent },
  { path: 'fillSurvey', component: FillSurveyComponent },
  { path: 'createSurvey', component: CreateSurveyComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'sendNotification', component: SendNotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
