import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { RouterModule, Routes } from '@angular/router';

// components

import { UtilService} from '../../services/util.service';
import { BlockchainService} from '../../services/blockchain.service';

import { AppComponent } from './app.component';
import { TransactionListComponent } from './pages/transaction-list/transaction-list.component';
import { CreateInfoComponent } from './pages/create-info/create-info.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { StartpageComponent } from './startpage/startpage.component';
import { UserlistComponent } from './pages/user/list/userlist/userlist.component';
import { NavigationTempComponent } from './templates/navigation-temp/navigation-temp.component';
import { ChainInfoComponent } from './pages/contracts/chain-info/chain-info.component';
import { AboutComponent } from './pages/whoweare/about/about/about.component';
import { ContactusComponent } from './pages/whoweare/contactus/contactus/contactus.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { OrganizationListComponent } from './pages/organization/list/organization-list/organization-list.component';
import { RegisterDoctorComponent } from './pages/doctor/register-doctor/register-doctor.component';
import { ListDoctorComponent } from './pages/doctor/list-doctor/list-doctor.component';
import { AlertComponent } from './_directives/alert/alert.component';
import { AuthGuardService , UserService} from './_services/index';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UploadDocumentComponent } from './pages/upload-document/upload-document.component';
const appRoutes: Routes = [
  {
    path: '',
    component: StartpageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactusComponent
  },
  {
    path: 'home',
    component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'data-entry',
    component: CreateInfoComponent, canActivate: [AuthGuard]
  },
  {
    path: 'sign-up',
    component: SignupComponent
  },
  {
    path: 'sign-in',
    component: SigninComponent
  },
  {
    path: 'userList',
    component: UserlistComponent, canActivate: [AuthGuard]
  },
  {
    path: 'organizations',
    component: OrganizationListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'orgEntry',
    component: OrganizationComponent, canActivate: [AuthGuard]
  },
  {
    path: 'chainInfo',
    component: ChainInfoComponent, canActivate: [AuthGuard]
  },{
    path: 'registerDoctor',
    component: RegisterDoctorComponent, canActivate: [AuthGuard]
  },{
    path: 'doctorList',
    component: ListDoctorComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'uploadDocument',
    component: UploadDocumentComponent
  },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    TransactionListComponent,
    CreateInfoComponent,
    SettingsComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    StartpageComponent,
    UserlistComponent,
    NavigationTempComponent,
    ChainInfoComponent,
    AboutComponent,
    ContactusComponent,
    OrganizationComponent,
    OrganizationListComponent,
    RegisterDoctorComponent,
    ListDoctorComponent,
    AlertComponent,
    DashboardComponent,
    UploadDocumentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, UserService, UtilService, BlockchainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
