import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  items: MenuItem[] = [
    {
      label: 'Cinemar',
      icon: 'bi bi-film',
      routerLink: '/private'
    },
    {
      label: 'Peliculas',
      icon: 'bi bi-camera-reels-fill',
      items: [
        {
          label: 'Estrenos',
          icon: 'pi pi-megaphone',
        },
        {
          label: 'Todas las peliculas',
          icon: 'bi bi-camera-reels',
        },
        {
          label: 'Peliculas 2-D',
          icon: 'bi bi-camera-video-fill',
        },
        {
          label: 'Peliculas 3-D',
          icon: 'bi bi-badge-3d-fill'
        },
      ],
    },
    {
      label: 'Mis Reservas',
      icon: 'pi pi-fw pi-calendar',
    },
  ];
  constructor() {}

  getItems(): Observable<MenuItem[]>{
    return of(this.items);
  }
}
