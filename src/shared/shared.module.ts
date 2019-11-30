import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapturesComponent } from './components/captures/captures.component';
import { SlideshowModule } from 'ng-simple-slideshow';



@NgModule({
  declarations: [
    CapturesComponent
  ],
  entryComponents: [CapturesComponent],
  imports: [
    CommonModule,
    SlideshowModule
  ]
})
export class SharedModule { }
