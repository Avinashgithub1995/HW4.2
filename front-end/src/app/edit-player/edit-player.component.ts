import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  form!: FormGroup
  player: any;

  constructor(private formBuilder: FormBuilder, public router: Router, public activatedRoute: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    this.player = this.activatedRoute.snapshot.params;
    this.form = this.formBuilder.group({
      _id: null,
      name: null,
      touchDownThrown: null,
      rushingYard: null,
      sacks: null,
      numberOfGoals: null
    })
    this.form.patchValue(this.player)
  }

  updatePlayer() {
    this.appService.updatePlayer(this.player._id, this.form.value).subscribe(res => {
      console.log("Success");
      this.router.navigate(['/'])

    }, err => {
      console.log(err);

    })
  }

}
