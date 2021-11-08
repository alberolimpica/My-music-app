import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { CreateAlbumComponent } from './components/create-album/create-album.component';
import { CreateArtistComponent } from './components/create-artist/create-artist.component';
import { CommonModule, DatePipe } from '@angular/common';
import { AllAlbumsComponent } from './components/all-albums/all-albums.component';
import { AllArtistComponent } from './components/all-artist/all-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    CreateAlbumComponent,
    CreateArtistComponent,
    AllAlbumsComponent,
    AllArtistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, CommonModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
