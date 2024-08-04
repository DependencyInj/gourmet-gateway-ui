import { Component } from '@angular/core';
import { LoaderBarService } from './features/shared/services/loader-bar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gourmet-gateway';
  loaderSubscription!: Subscription;

  showLoader = false;

  constructor(private loaderService: LoaderBarService){

  }

  ngOnInit(){
    this.loaderSubscription = this.loaderService.loaderBarSubject.subscribe((value: boolean) => {
      this.showLoader = value;
    });
  }

  ngOnDestroy(){
    this.loaderSubscription?.unsubscribe();
  }
}
