import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { LoadingService } from "../../services/loading.service";

@Component({
    selector: 'loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnDestroy {
    visible: boolean = false;
    subscription: Subscription;

    constructor(private loadingService: LoadingService) { }

    ngOnInit() {
        this.subscription = this.loadingService.loaderStatus$
            .subscribe(status => this.visible = status)
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

