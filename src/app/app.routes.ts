import { Routes } from '@angular/router';
import {HomePageComponent} from "./Pages/home-page/home-page.component";
import {ContactPageComponent} from "./Pages/contact-page/contact-page.component";

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        title: 'Home'
    },
    {
      path: 'contact-us',
      component: ContactPageComponent,
      title: 'Contact Us'
    }
];
