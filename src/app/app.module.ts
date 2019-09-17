import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { UtilService} from '../../services/util.service';
import { BlockchainService} from '../../services/blockchain.service';

import { AppComponent } from './app.component';
import { TransactionListComponent } from './pages/transaction-list/transaction-list.component';
import { CreateInfoComponent } from './pages/create-info/create-info.component';
import { SettingsComponent } from './pages/settings/settings.component';

const appRoutes: Routes = [
  {
    path: 'data-entry',
    component: CreateInfoComponent
  },
  { path: '',
    redirectTo: '/data-entry',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    CreateInfoComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [UtilService, BlockchainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
