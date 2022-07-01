import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: any = [];
  playerQueries = [
    { id: 1, name: "Most Rushing Yards", },
    { id: 2, name: "Least Rushing Yards", },
    { id: 3, name: "Most Touch Down Thrown", },
    { id: 4, name: "Sacks", },
    { id: 5, name: "Most Nubmer of Goals", },
  ];
  queryData: any = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getAllPlayers().subscribe(res => {
      this.players = res;
    });
  }
  delete(id: Number) {
    this.appService.deletePlayer(id).subscribe(res => {
      console.log("Successfuly Deleted");
      this.ngOnInit();
    }, err => {
      console.log(err);
    })
  }
  queryChanged(query: any) {
    switch (query.id) {
      case 1:
        this.appService.mostRushingYards().subscribe((res: any) => {
          this.queryData = res;
        })
        break;
      case 2:
        this.appService.leastRushingYardPlayerDetails().subscribe((res: any) => {
          this.queryData = res;
        })
        break;
      case 3:
        this.appService.mostTouchDownThrownPlayerDetails().subscribe((res: any) => {
          this.queryData = res;
        })
        break
      case 4:
        this.appService.mostSacksPlayerDetails().subscribe((res: any) => {
          this.queryData = res;
        })
        break
      case 5:
        this.appService.mostToLeastGoalsPlayerDetails().subscribe((res: any) => {
          this.queryData = res;
        })
        break
    }
  }

}
