import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicApiService } from 'src/app/services/music-api.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: any;
  albums: any[];
  death: Date;
  birth: Date;
  deleted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private musicApiService: MusicApiService
  ) { }

  ngOnInit(): void {
    this.deleted = false;
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.getArtist();
  }

  getArtist(): void {
    this.musicApiService.getMusic(this.id, "artist")
      .subscribe(res => {
        this.artist = res;
        if (res.birthdate) {
          this.birth = res.birthdate;
        }
        if (res.deathDate) {
          this.death = res.deathDate;
        }

      });
  }

  deleteArtist(): void {
    this.musicApiService.deleteMusic(this.id, "artist")
      .subscribe(res => {
        this.deleted = true;
      });
  }


}
