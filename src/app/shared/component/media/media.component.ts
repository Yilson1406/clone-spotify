import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  // @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  // listObservers$: Array<Subscription> = []
  // state: string = 'paused'
  // constructor(public multimediaService: MultimediaService) { }

  // ngOnInit(): void {

  //   const observer1$ = this.multimediaService.playerStatus$
  //     .subscribe(status => this.state = status)
  //   this.listObservers$ = [observer1$]
  // }

  // ngOnDestroy(): void {
  //   this.listObservers$.forEach(u => u.unsubscribe())
  //   console.log('🔴🔴🔴🔴🔴🔴🔴 BOOM!');
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


}
