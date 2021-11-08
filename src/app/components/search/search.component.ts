import { Component, OnInit } from '@angular/core';
import { MusicApiService } from 'src/app/services/music-api.service';
import { Artist } from 'src/app/Models/Artist';
import { Album } from 'src/app/Models/Album';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchArtistValue: string;
  artistResults: Artist[];

  searchAlbumValue: string;
  albumsResults: Album[];

  constructor(private musicApiService: MusicApiService) {

  }

  ngOnInit(): void {
  }

  searchArtist() {
    this.musicApiService.searchMusic("artists")
      .subscribe(res => {
        this.artistResults = res.filter((artist: any) => artist.name.includes(this.searchArtistValue));
      });
  }

  searchAlbum() {
    this.musicApiService.searchMusic("albums")
      .subscribe(res => {
        this.albumsResults = res.filter((album: any) => album.title.includes(this.searchAlbumValue));
      });
  }
}
