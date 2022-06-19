import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { IndlshedComponent } from './indlshed/indlshed.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { StreetlightpoleComponent } from './streetlightpole/streetlightpole.component';
import { HighmastpoleComponent } from './highmastpole/highmastpole.component';
import { BoardsComponent } from './boards/boards.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { BusshelterComponent } from './busshelter/busshelter.component';
import { ContactComponent } from './contact/contact.component';
import { DecorativepoleComponent } from './decorativepole/decorativepole.component';
import { AboutComponent } from './about/about.component';
import { DescriptionComponent } from './description/description.component';
import { TrafficpoleComponent } from './trafficpole/trafficpole.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    IndlshedComponent,
    OurworkComponent,
    ProductComponent,
    ServiceComponent,
    StreetlightpoleComponent,
    HighmastpoleComponent,
    BoardsComponent,
    AgricultureComponent,
    BusshelterComponent,
    ContactComponent,
    DecorativepoleComponent,
    AboutComponent,
    DescriptionComponent,
    TrafficpoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
