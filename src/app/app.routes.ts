import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import(`./modules/characters/characters.module`).then(m => m.CharactersModule)
    },
    {
        path: 'episodes',
        loadChildren: () => import(`./modules/episodes/episodes.module`).then(m => m.EpisodesModule)
    },
    {
        path: 'locations',
        loadChildren: () => import(`./modules/locations/locations.module`).then(m => m.LocationsModule)
    }
];
