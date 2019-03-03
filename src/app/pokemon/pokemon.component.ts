import { Component, OnInit, Input } from "@angular/core";
import { PokedexService } from "../pokedex.service";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"]
})
export class PokemonComponent implements OnInit {
  @Input() id: number;
  constructor(private pokedexService: PokedexService) {}

  ngOnInit() {
    this.pokedexService.getPokemon(this.id).subscribe(poke => {
      console.log(poke);
    });
  }
}
