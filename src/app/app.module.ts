import { BrowserModule } from '@angular/platform-browser';
import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';

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








@NgModule({
  declarations: [
    AppComponent,
    PageOneHeaderComponent,
    PageOneMiddleComponent,
    PageOneFooterComponent,
    PageOneBackgroundComponent
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

