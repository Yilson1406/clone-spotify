import { TracksModel } from './../../../../core/model/tracksmodel';
import { Component, OnInit } from '@angular/core';
import * as dataraw from  '../../../../data/track.json'

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  tracks: Array<TracksModel> = []
  constructor() { }

  ngOnInit(): void {
    const {data} : any = (dataraw as any).default
    this.tracks = data

  }

}
