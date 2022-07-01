import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  form!: FormGroup

  constructor(private formBuilder: FormBuilder, public router: Router, private appService: AppService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      _id: null,
      name: null,
      touchDownThrown: null,
      rushingYard: null,
      sacks: null,
      numberOfGoals: null
    })
  }

  addPlayer() {
    this.appService.addPlayer(this.form.value).subscribe(res => {
      this.router.navigate(['/']);
    }, err => {
      console.log(err);

    })
  }

}
