import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoanRequestService } from '../../core/services/loan-request.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  plans: string[] = ['Plan 1', 'Plan 2', 'Plan 3'];

  loanDetails: any = {
    loanAmount: "",
    monthlyEarning: "",
    paymentPlan: "",
    accomodationStatus: ""
  }

  loaderIsActive: boolean;
  constructor(private _loanRequestService: LoanRequestService, private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  loanForm(){

  }

  handlePlanSelected(evt: any) {
    console.log('selected evtData', evt);
    this.loanDetails.plan = evt;
  }
  onAccommodationStatusChange(evt) {
    console.log('accomodation status = ', evt.value);
    this.loanDetails.accomodationStatus = evt.value;
  }

  onFormSubmitted(form: NgForm) {
    console.log(this.loanDetails);
    //do validations
    this.loaderIsActive = true;
    this.loanDetails.accomodationStatus = this.getAccommodationStatus();
    this._loanRequestService.saveLoanRequest(this.loanDetails).subscribe(
      (response) => {
        this._snackbar.open('Thank you. Your loan request has been successfully received for processing.', 'Ok', {verticalPosition: 'bottom', horizontalPosition: 'center', duration: 25000});
        form.reset();
        this.loaderIsActive = false;
      },
      (error) => {
        console.log(error);
        this._snackbar.open(`We encountered an error while processing your request. Error message:: ${error.error} .. Please retry after some time.`, 'Ok', {verticalPosition: 'bottom', horizontalPosition: 'center', duration: 30000});
        this.loaderIsActive = false;
      }
    )
  }

  private getAccommodationStatus() {
    switch (this.loanDetails.accomodationStatus) {
      case "1":
      case 1:
        return 'Renew Rent';
      case "2":
      case 2:
        return 'New Rent';
      case 3:
      case "3":
        return "Searching for Property";
      default:
        return "Unknown Status";
    }
  }

}
