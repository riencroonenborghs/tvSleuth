import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { NgMasonryGridModule } from 'ng-masonry-grid';

import { MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, MatGridListModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatSnackBarModule, MatDividerModule } from "@angular/material";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInitModule } from "./app-init/app-init.module";

import { EnvServiceProvider } from "@services/env.service.provider";

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowsComponent } from './components/shows/shows.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { ShowScheduleComponent } from './components/show-schedule/show-schedule.component';
import { ShowSearchComponent } from './components/show-search/show-search.component';
import { ErrorSnackbarComponent } from './components/snackbars/error-snackbar/error-snackbar.component';
import { SuccessSnackbarComponent } from './components/snackbars/success-snackbar/success-snackbar.component';
import { WarnSnackbarComponent } from './components/snackbars/warn-snackbar/warn-snackbar.component';

import { StriphtmlPipe } from './pipes/striphtml.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { EpisodeComponent } from './components/episode/episode.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShowsComponent,
    ShowDetailsComponent,
    ShowScheduleComponent,
    ShowSearchComponent,
    StriphtmlPipe,
    TruncatePipe,
    ErrorSnackbarComponent,
    SuccessSnackbarComponent,
    WarnSnackbarComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppInitModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    NgMasonryGridModule,
    MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, MatGridListModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatSnackBarModule, MatDividerModule
  ],
  providers: [EnvServiceProvider],
  bootstrap: [AppComponent],
  entryComponents: [
    ShowSearchComponent,
    ErrorSnackbarComponent,
    WarnSnackbarComponent,
    SuccessSnackbarComponent
  ]
})
export class AppModule { }
