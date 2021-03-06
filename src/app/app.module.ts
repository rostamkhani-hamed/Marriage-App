import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { PageOneHeaderComponent } from './page-one-header/page-one-header.component';
import { PageOneMiddleComponent } from './page-one-middle/page-one-middle.component';
import { PageOneFooterComponent } from './page-one-footer/page-one-footer.component';
import { PageOneBackgroundComponent } from './page-one-background/page-one-background.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageFourComponent } from './page-four/page-four.component';
import { PageFiveComponent } from './page-five/page-five.component';
import { PageSixComponent } from './page-six/page-six.component';
import { PageSevenComponent } from './page-seven/page-seven.component';
import { PageEightComponent } from './page-eight/page-eight.component';








@NgModule({
  declarations: [
    AppComponent,
    PageOneHeaderComponent,
    PageOneMiddleComponent,
    PageOneFooterComponent,
    PageOneBackgroundComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    PageFiveComponent,
    PageSixComponent,
    PageSevenComponent,
    PageEightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

