import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { patternValidator } from 'app/shared/pattern-validator';

@Component({
  selector: 'app-proposal-form',
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.css']
})
export class ProposalFormComponent  {


    proposalForm = new FormGroup({
        companyMentorInfo: new FormGroup({
          name:  new FormControl('', Validators.required),
          jobTitle: new FormControl('', Validators.required),
          email: new FormControl('', Validators.required),
          phone: new FormControl('', Validators.required),
          companyName: new FormControl('', Validators.required),
          companyAddress: new FormGroup({
            street: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            state: new FormControl('', Validators.required),
            zip: new FormControl('', Validators.required),
          }),
          website: new FormControl('', Validators.required)
        }),
        projectInfo: new FormGroup({
          // To be done by Tomee
        })
    });
  
  
  public submitForm() {
     console.log(this.proposalForm.value);
  }

}
