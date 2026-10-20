import { authGuard, permissionGuard } from '@abp/ng.core';
import { BookComponent } from './book.component';

const routes: Routes = [
{ 
    path: 'books', 
    loadComponent: () => import('./book/book.component').then(c => BookComponent),
    canActivate: [authGuard, permissionGuard],
},
];
