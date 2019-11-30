import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { appRouting } from './main.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { MatTooltipModule, MatDialogModule } from '@angular/material';
import { IntroComponent } from './components/intro/intro.component';
import { ResumeService } from '@shared';
import { HttpClientModule } from '@angular/common/http';
import { IntroButtonComponent } from './components/intro-button/intro-button.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { SharedModule } from '@shared/shared.module';
import { DataResolverFactory } from './main.factories';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  bootstrap: [
    LayoutComponent
  ],
  declarations: [
    LayoutComponent,
    MenuComponent,
    TopBarComponent,
    IntroComponent,
    IntroButtonComponent,
    FooterComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatTooltipModule,
    MatDialogModule,
    appRouting,
    BrowserAnimationsModule,
    SlideshowModule,
    SharedModule
  ],
  providers: [
    ResumeService,
    {
      provide: 'resolve_data',
      useFactory: DataResolverFactory,
      deps: [ResumeService]
    }
  ]
})
export class MainModule { }
