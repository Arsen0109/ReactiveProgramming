import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormatPipe } from './format.pipe';
import { JoinPipe } from './join.pipe';
import { SqrtPipe } from './sqrt.pipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FormatPipe,
    JoinPipe,
    SqrtPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
