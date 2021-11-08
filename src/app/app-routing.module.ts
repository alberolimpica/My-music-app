import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { AllAlbumsComponent } from './components/all-albums/all-albums.component';
import { AllArtistComponent } from './components/all-artist/all-artist.component';
import { ArtistComponent } from './components/artist/artist.component';
import { CreateAlbumComponent } from './components/create-album/create-album.component';
import { CreateArtistComponent } from './components/create-artist/create-artist.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'see-artist/:id', component: ArtistComponent },
  { path: 'see-album/:id', component: AlbumComponent },
  { path: 'create-album', component: CreateAlbumComponent },
  { path: 'create-artist', component: CreateArtistComponent },
  { path: 'modify-album/:id', component: CreateAlbumComponent },
  { path: 'modify-artist/:id', component: CreateArtistComponent },
  { path: 'all-artists', component: AllArtistComponent },
  { path: 'all-albums', component: AllAlbumsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
