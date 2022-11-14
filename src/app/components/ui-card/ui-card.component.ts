import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription, map } from 'rxjs';
import { MoviesService } from 'src/app/project/services/movies.service';
import { MovieDetailDialogComponent } from '../movie-detail-dialog/movie-detail-dialog.component';

@Component({
  selector: 'app-ui-card',
  templateUrl: './ui-card.component.html',
  providers : [DialogService],
  styleUrls: ['./ui-card.component.css'],
})
export class UiCardComponent implements OnInit, OnDestroy {
  @Input() header!: string;
  @Input() imageURL!: string;
  @Input() rating!: number;
  @Input() id!: number;
  @Input() subheader!: string;
  @Input() description!: string;
  @Input() icon!: string;
  ref!: DynamicDialogRef;
  subscription$: Subscription = new Subscription();
  constructor(
    private moviesService: MoviesService,
    private dialogService: DialogService
  ) {}
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  ngOnInit(): void {}
  getDetail() {
    this.subscription$ = this.moviesService
      .getMovie(this.id)
      .pipe(
        map((result) => {
          this.ref = this.dialogService.open(MovieDetailDialogComponent,{
            data: {movie: result},
            header: `${result.title}`,
            width: '70%',
            contentStyle: {"overflow": "auto"},
            baseZIndex: 10000,
          });
        })
      )
      .subscribe();
  }
}
