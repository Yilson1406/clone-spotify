import { MultimediaService } from './../../services/multimedia.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit,OnDestroy {
listObservers$: Array<Subscription> = []
    constructor(public _multimedia:MultimediaService ) { }

  ngOnInit(): void {

    const observer1$:Subscription = this._multimedia.callback
                        .subscribe(status => {
                          console.log(status);

                        });
    this.listObservers$ = [observer1$]
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    console.log('🔴🔴🔴🔴🔴🔴🔴 BOOM!');

  }
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  // @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')

  // state: string = 'paused'


  // ngOnInit(): void {



  // ngOnDestroy(): void {

  // }


  // handlePosition(event: MouseEvent): void {
  //   const elNative: HTMLElement = this.progressBar.nativeElement
  //   const { clientX } = event
  //   const { x, width } = elNative.getBoundingClientRect()
  //   const clickX = clientX - x //TODO: 1050 - x
  //   const percentageFromX = (clickX * 100) / width
  //   console.log(`Click(x): ${percentageFromX}`);
  //   this.multimediaService.seekAudio(percentageFromX)

  // }


// }
