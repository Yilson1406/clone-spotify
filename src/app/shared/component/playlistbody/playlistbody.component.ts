import { TracksModel } from 'src/app/core/model/tracksmodel';
import { Component, OnInit } from '@angular/core';
import * as dataset from '../../../data/track.json'
@Component({
  selector: 'app-playlistbody',
  templateUrl: './playlistbody.component.html',
  styleUrls: ['./playlistbody.component.css']
})
export class PlaylistbodyComponent implements OnInit {
tracks:TracksModel[]=[];
optionorder:{propiedad:string | null, order:string} =  {propiedad:null, order:'desc'}
  constructor() { }

  ngOnInit(): void {
    const {data}: any = (dataset as any).default
    // console.log(data);

    this.tracks= data
  }
  cambiarnobre(propiedad:string):void{
    const {order}=this.optionorder
    this.optionorder = {
      propiedad,
      order: order == 'asc' ? 'desc' : 'asc'
    }
  }
}
