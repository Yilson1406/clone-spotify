import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MediaComponent } from './component/media/media.component';
import { HeaderUserComponent } from './component/header-user/header-user.component';



@NgModule({
  declarations: [
    SidebarComponent,
    MediaComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
