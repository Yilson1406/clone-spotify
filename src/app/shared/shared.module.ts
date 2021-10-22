import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MediaComponent } from './component/media/media.component';
import { HeaderUserComponent } from './component/header-user/header-user.component';
import { CardPlayerComponent } from './component/card-player/card-player.component';
import { SectionGenericComponent } from './component/section-generic/section-generic.component';
import { PlaylistheaderComponent } from './component/playlistheader/playlistheader.component';
import { PlaylistbodyComponent } from './component/playlistbody/playlistbody.component';
import { OrderlistPipe } from './pipe/orderlist.pipe';




@NgModule({
  declarations: [
    SidebarComponent,
    MediaComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlaylistheaderComponent,
    PlaylistbodyComponent,
    OrderlistPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[

    SidebarComponent,
    MediaComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlaylistheaderComponent,
    PlaylistbodyComponent,
    OrderlistPipe


  ]
})
export class SharedModule { }
