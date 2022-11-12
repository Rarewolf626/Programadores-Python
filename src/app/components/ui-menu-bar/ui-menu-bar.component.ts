import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription,map } from 'rxjs';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-ui-menu-bar',
  templateUrl: './ui-menu-bar.component.html',
  styleUrls: ['./ui-menu-bar.component.css'],
})
export class UiMenuBarComponent implements OnInit, OnDestroy {
  items!: any[];
  private subscriptions$ = new Subscription();
  constructor(private navigationService: NavigationService) {}
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit(): void {
    this.getItems();
  }
  getItems() {
    this.subscriptions$ = this.navigationService.getItems().pipe(
      map((items)=>{
        this.items = items;
      })
    ).subscribe();
  }
}
