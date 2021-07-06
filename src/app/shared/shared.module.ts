import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from "@angular/forms";
//material
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class SharedModule { }
