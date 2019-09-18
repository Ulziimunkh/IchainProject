import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionListComponent } from "./pages/transaction-list/transaction-list.component";
import { SettingsComponent } from './pages/settings/settings.component';
import { CreateInfoComponent} from './pages/create-info/create-info.component';
import { HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "transactions", component: TransactionListComponent },
  { path: 'settings', component:SettingsComponent},
  { path: 'data-entry', component:CreateInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
