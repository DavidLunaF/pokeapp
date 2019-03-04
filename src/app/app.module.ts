import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { PokedexService } from "./pokedex.service";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { SwiperModule } from "ngx-swiper-wrapper";
import { SWIPER_CONFIG } from "ngx-swiper-wrapper";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatBottomSheetModule,
  MatListModule,
  MatButtonModule,
  MatDialogModule
} from "@angular/material";
import {MatIconModule} from '@angular/material/icon';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: "horizontal",
  slidesPerView: 3,
  centeredSlides: true,
  autoplay: true
};

@NgModule({
  declarations: [AppComponent, PokemonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatIconModule
  ],
  entryComponents: [PokemonComponent],
  providers: [
    PokedexService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
