import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }
  backendServer = 'http://localhost:5000';
  getAllPlayers() {
    return this.httpClient.get(this.backendServer + '/getFootballPlayerDetails')
  }
  addPlayer(player: any) {
    return this.httpClient.post(this.backendServer + '/addPlayer', player)
  }
  updatePlayer(id: Number, updatedPlayer: any) {
    return this.httpClient.patch(this.backendServer + '/updatePlayerDetail/' + id, updatedPlayer);
  }
  deletePlayer(id: Number) {
    return this.httpClient.delete(this.backendServer + '/deletePlayerDetail/' + id)
  }
  mostRushingYards() {
    return this.httpClient.get(this.backendServer + '/mostRushingYardPlayerDetails');
  }
  leastRushingYardPlayerDetails() {
    return this.httpClient.get(this.backendServer + '/leastRushingYardPlayerDetails');
  }
  mostTouchDownThrownPlayerDetails() {
    return this.httpClient.get(this.backendServer + '/mostTouchDownThrownPlayerDetails');
  }
  mostToLeastGoalsPlayerDetails() {
    return this.httpClient.get(this.backendServer + '/mostToLeastGoalsPlayerDetails');
  }
  mostSacksPlayerDetails() {
    return this.httpClient.get(this.backendServer + '/mostSacksPlayerDetails');
  }
}
