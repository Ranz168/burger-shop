import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { MenuComponent } from './pages/menu/menu';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { OrderComponent } from './pages/order/order';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', redirectTo: '' }
];