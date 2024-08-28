import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input, input } from '@angular/core';
import { InvestmentServices } from '../investment.services';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
//@Input() results?:{ year: number,
 // interest: number,
  //valueEndOfYear: number,
  //annualInvestment: number,
  //totalInterest: number,
  //totalAmountInvested: number}[];

private investmentService=inject(InvestmentServices);

get results(){
  return this.investmentService.resultsData;
}

}
