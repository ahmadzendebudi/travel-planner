import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CityPickerComponent } from './main/city-picker/city-picker.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { CityContentComponent } from './main/city-content/city-content.component';
import { CityDetailsComponent } from './main/city-content/city-details/city-details.component';
import { CityWeatherComponent } from './main/city-content/city-weather/city-weather.component';
import { TempDefaultUnit } from './main/city-content/city-weather/temp-default-unit';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CityPickerComponent,
    CityDetailsComponent,
    CityWeatherComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ErrorComponent,
    TempDefaultUnit,
    CityContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
