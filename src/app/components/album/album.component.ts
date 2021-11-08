import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicApiService } from 'src/app/services/music-api.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: any;
  artistName: string;
  deleted: boolean = false;

  constructor(private route: ActivatedRoute,
    private musicApiService: MusicApiService) {

  }

  ngOnInit(): void {
    this.deleted = false;
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.getAlbum();
  }

  getAlbum(): void {
    this.musicApiService.getMusic(this.id, "album")
      .subscribe(res => {
        this.album = res;
        if (this.album.artistId !== undefined) {
          this.musicApiService.getMusic(this.album.artistId, "artist")
            .subscribe((res: any) => {
              if (res) {
                this.artistName = res.name;
              }
            });
        }
      });
  }

  deleteAlbum(): void {
    this.musicApiService.deleteMusic(this.id, "album")
      .subscribe(res => {
        this.deleted = true;
      });
  }

}
