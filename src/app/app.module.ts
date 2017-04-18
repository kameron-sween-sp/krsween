// NG2
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// App
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BioLinkComponent } from './bio-link/bio-link.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BioLinkComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
