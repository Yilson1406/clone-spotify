import { TracksModel } from 'src/app/core/model/tracksmodel';
import { TrackService } from './../../services/track.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  tracks:TracksModel[]=[]

  constructor(private _tracks:TrackService) { }

  ngOnInit(): void {
  this.getalltracks();
  }

  getalltracks(){
    this._tracks.getAllRandom$()
    .subscribe((response: TracksModel[]) => {
      this.tracks = response
    })
  }
}
