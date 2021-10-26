
import { MultimediaService } from './../../services/multimedia.service';
import { Component, Input, OnInit } from '@angular/core';
import { TracksModel } from 'src/app/core/model/tracksmodel';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small'
  @Input() track!: TracksModel;
  constructor(private _multimedia:MultimediaService) { }


  ngOnInit(): void {
  }

  sendplay(track:TracksModel):void{
    this._multimedia.callback.emit(track)
  }
}
