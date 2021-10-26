import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TrackRoutingModule } from './track-routing.module';
import { TracksComponent } from './pages/tracks/tracks.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TracksComponent
  ],
  imports: [
    CommonModule,
    TrackRoutingModule,
    SharedModule

  ]
})
export class TrackModule { }
