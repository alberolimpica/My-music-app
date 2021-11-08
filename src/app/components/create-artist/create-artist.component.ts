import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/Models/Artist';
import { MusicApiService } from 'src/app/services/music-api.service';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.css']
})
export class CreateArtistComponent implements OnInit {

  id:string = "";
  artist:Artist;
  minDate = new Date("1909-01-01");
  maxDate = new Date("2030-12-31");

  public artistForm: FormGroup  = new FormGroup({
    name: new FormControl("", Validators.required),
    photoUrl: new FormControl(""),
    birthdate: new FormControl("", [this.dateRangeValidator(this.minDate, this.maxDate)]),
    deathDate: new FormControl("", [this.dateRangeValidator(this.minDate, this.maxDate)])
  }

  );

  constructor(private route: ActivatedRoute,
    private musicApiService: MusicApiService, public datepipe: DatePipe, private router: Router  ) {

   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      if(params.has('id')){
        this.id = params.get('id');
        this.getArtist();
      }
    });
  }

  onSubmit() {
    this.artist = this.artistForm.value;
    if(this.id === ""){
      console.log(1);
      this.addArtist();
    }else{
      console.log(2);
      this.updateArtist();
    }

    this.router.navigate(['/']);
  }

  addArtist() {
    this.musicApiService.addMusic(this.artist, "artist")
      .subscribe(data => {
        console.log(data)
        this.artistForm.reset;
      });
  }

  updateArtist() {
    this.artist._id = this.id;
    this.musicApiService.updateMusic(this.artist._id, this.artist, "artist")
      .subscribe(data => {
        console.log(data)
        this.artistForm.reset;
      });
  }

  getArtist(): void {
    this.musicApiService.getMusic(this.id, "artist")
    .subscribe(res =>{
      this.artist = res;
      this.artistForm.setValue({
        name: res.name,
        photoUrl: res.photoUrl ? res.photoUrl: "",
        birthdate: res.birthdate? this.datepipe.transform(new Date(res.birthdate),'yyyy-MM-dd') : "",
        deathDate: res.deathDate? this.datepipe.transform(new Date(res.deathDate),'yyyy-MM-dd') : ""
      });
    });
  }


  dateRangeValidator(min: Date, max: Date): ValidatorFn {
    return control => {
      if (!control.value) return null;

      const dateValue = new Date(control.value);

      if ((min && dateValue < min) || (max && dateValue > max)) {
        return { message: 'error message' };
      }else{
        return {};
      }

      null;
    }
  }

}
