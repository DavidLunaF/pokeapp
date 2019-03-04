import { Component } from "@angular/core";
import { PokedexService } from "./pokedex.service";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Pokemon } from './shared/pokemon.model';
import { SwiperConfig } from 'ngx-swiper-wrapper';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title: string = "pokeapp";
  pokemon: Pokemon;
  id: number;
  config: any = {
    centeredSlides: true
  }

  constructor(
    private pokedexService: PokedexService) {}

  ngOnInit() {
   this.id=1;
  }
}
