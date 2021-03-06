import {Component, OnInit} from "@angular/core";
import {FundService} from "./core.service/fund.core.service";
import {UserFund} from "./core.model/user.fund";

@Component({
    moduleId: module.id,
    selector: 'funds',
    templateUrl: './html/funds.component.html',
    styleUrls: ['./css/funds.component.css']
})
export class UserFundsComponent implements OnInit {
    userFunds: UserFund[]

    constructor(private fundService: FundService) {
    }

    ngOnInit(): void {
        this.fundService.get()
            .then(userFunds => this.userFunds = userFunds);
    }

    getFundClass(balance: number) {
        if (balance > 0) {
            return 'green';
        }
        if (balance < 0) {
            return 'red';
        }
        return 'gray';
    }
}
