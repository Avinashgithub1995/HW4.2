import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AppComponent } from './app.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { PlayerListComponent } from './player-list/player-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/player-list', pathMatch: 'full' },
  { path: 'player-list', component: PlayerListComponent },
  { path: 'edit-player', component: EditPlayerComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent },
  { path: 'add-player', component: AddPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
