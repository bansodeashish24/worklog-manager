import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiRootModule } from '@taiga-ui/core';
import { WorklogTableComponent } from './components/worklog-table/worklog-table.component';

@NgModule({
  declarations: [
    AppComponent,
    WorklogTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TuiRootModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
