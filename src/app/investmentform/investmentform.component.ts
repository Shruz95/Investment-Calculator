import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData } from '../investment.-input.model';
import { InvestmentServices } from '../investment.services';



@Component({
  selector: 'app-investmentform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './investmentform.component.html',
  styleUrl: './investmentform.component.css'
})
export class InvestmentformComponent {
//@Output() calculate=new EventEmitter<InvestmentData>();

constructor(private investmentService:InvestmentServices){}

enteredinitialInvestment=0;
enteredannualInvestment=0;
enteredexpectedReturn=0;
enteredduration=0;

onSubmit(){
  this.investmentService.calculateInvestmentResults({
    initialInvestment:+this.enteredinitialInvestment,
    duration:+this.enteredduration,
    expectedReturn:+this.enteredexpectedReturn,
    annualInvestment:+this.enteredannualInvestment,
  });
 // this.calculate.emit();
}

}
