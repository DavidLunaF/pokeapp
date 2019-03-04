import { Component, OnInit, Input } from "@angular/core";
import { PokedexService } from "../pokedex.service";
import { Pokemon } from '../shared/pokemon.model';

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"]
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon;
  @Input() id: number;
  constructor(private pokedexService: PokedexService) {}

  ngOnInit() {
    this.get();
  }
  get(){
    this.pokedexService.getPokemon(this.id).subscribe(poke => {
      this.pokemon = poke;
    });
  }
  next(){
    this.id++;
    this.get();
  }
  prev(){
    this.id--;
    this.get();
  }
}
