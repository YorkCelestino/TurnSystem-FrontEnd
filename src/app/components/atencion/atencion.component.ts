import { Component, OnInit } from '@angular/core';
import { Turns } from 'src/app/models/turns';
import { TurnsService } from 'src/app/services/turns.service';

@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.component.html',
  styleUrls: ['./atencion.component.css']
})
export class AtencionComponent implements OnInit {
   turns: Turns;
   turn: Turns;
  constructor(private turnsService: TurnsService) { }

  ngOnInit() {
    this.getTurns();
  }

  getTurns () {
    this.turnsService.getTurns()
    .subscribe(
      res => {
        this.turns = res;
        this.turn = this.turns;
      },
      err => console.error(err)
    );
  }


}
