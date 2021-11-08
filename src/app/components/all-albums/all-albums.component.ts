import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/Models/Album';
import { MusicApiService } from 'src/app/services/music-api.service';

@Component({
  selector: 'app-all-albums',
  templateUrl: './all-albums.component.html',
  styleUrls: ['./all-albums.component.css']
})
export class AllAlbumsComponent implements OnInit {

  albumResults: Album[];

  constructor(private musicApiService: MusicApiService) {

   }

  ngOnInit(): void {
    this.searchAlbum();
  }

  searchAlbum(){
    this.musicApiService.searchMusic( "albums")
    .subscribe(res =>{
      this.albumResults = res;
    });
  }
}
