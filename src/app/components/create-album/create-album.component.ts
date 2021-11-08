import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicApiService } from 'src/app/services/music-api.service';
import { Album } from 'src/app/Models/Album';
import { Artist } from 'src/app/Models/Artist';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {
  album:Album;
  id:string = "";

  artistValue: Artist;
  searchArtistValue: string;
  artistResults: Artist[];

  public albumForm: FormGroup  = new FormGroup({
    title: new FormControl("", Validators.required),
    artistId: new FormControl(""),
    coverUrl: new FormControl(""),
    year: new FormControl(""),
    genre: new FormControl("")
  });


  constructor(private route: ActivatedRoute,
    private musicApiService: MusicApiService, private router: Router ) {

   }

   ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      if(params.has('id')){
        this.id = params.get('id');
        this.getAlbum();
      }
    });
  }


  onSubmit() {
    this.album = this.albumForm.value;

    if(this.id === ""){
      this.addAlbum();
    }else{
      this.updateAlbum();
    }

    this.router.navigate(['/']);

  }

  addAlbum() {
    this.musicApiService.addMusic(this.album, "album")
      .subscribe(data => {
        console.log(data)
      });
      this.albumForm.reset;
    }

  updateAlbum() {
    this.album._id = this.id;
    this.musicApiService.updateMusic(this.album._id, this.album, "album")
      .subscribe(data => {
        console.log(data)
        this.albumForm.reset;
      });
    }

  searchArtist(){
    this.musicApiService.searchMusic("artists")
    .subscribe(res =>{
      console.log(res);
      this.artistResults = res.filter((artist:any) => artist.name.includes(this.searchArtistValue));
    });
  }

  saveArtistId(artist:Artist){
    console.log(artist)
    this.albumForm.get("artistId").setValue(artist._id);
    this.artistResults = [];
    this.searchArtistValue = artist.name;
  }

  getAlbum(): void {
    this.musicApiService.getMusic(this.id, "album")
    .subscribe(res =>{
      this.album = res;

      this.albumForm.setValue({
        title: res.title,
        artistId: res.artistId !==null ? res.artistId: "",
        coverUrl: res.coverUrl !==null ? res.coverUrl: "",
        year: res.year !==null ? res.year: "",
        genre: res.genre !==null ? res.genre: "",
      });
    });
  }

}