import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/Models/Artist';
import { MusicApiService } from 'src/app/services/music-api.service';

@Component({
  selector: 'app-all-artist',
  templateUrl: './all-artist.component.html',
  styleUrls: ['./all-artist.component.css']
})
export class AllArtistComponent implements OnInit {
  artistResults: Artist[];

  constructor(private musicApiService: MusicApiService) {

  }

  ngOnInit(): void {
    this.searchArtist();
  }

  searchArtist() {
    this.musicApiService.searchMusic("artists")
      .subscribe(res => {
        this.artistResults = res;
      });
  }

}
