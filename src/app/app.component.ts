import { Component } from "@angular/core";
import { PokedexService } from "./pokedex.service";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title: string = "pokeapp";
  products;
  id: number;

  constructor(
    public dialog: MatDialog,
    private pokedexService: PokedexService
  ) {}

  ngOnInit() {
    this.products = [];
    this.pokedexService.getPokemons().subscribe(poke => {
      poke.results.forEach(element => {
        this.products.push(element);
      });
    });
  }
  showInfo(id: number) {
    const dialogRef = this.dialog.open(PokemonComponent, {
      width: "250px",
      data: { id: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.id = result;
    });
  }
}
