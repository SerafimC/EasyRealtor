import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule,  MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestComponent } from './interest/interest.component';
import { InterestsComponent } from './interests/interests.component';
import { ClientRoutingModule } from './client-routing.module';
import { RealtySearchComponent } from './realty-search/realty-search.component';
import { MapsComponent } from '.././shared/maps/maps.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsm6WJoDgRDCnjHLz7iRrAZ3hkuI9QtrQ'
    }),
    ClientRoutingModule,
    ReactiveFormsModule, FormsModule, MatFormFieldModule, MatNativeDateModule, MatAutocompleteModule,
    MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule,
    MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule,
    MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatListModule, MatNativeDateModule, MatPaginatorModule,
    MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule,
    MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule,
    MatToolbarModule, MatTooltipModule, MatTreeModule
  ],
  exports: [ MapsComponent, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatNativeDateModule,
    MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule,
    MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
    MatStepperModule, MatDatepickerModule, MatDialogModule, MatDividerModule,
    MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatListModule, MatNativeDateModule,
    MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule,
    MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
    MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule],
  declarations: [MapsComponent, InterestComponent, InterestsComponent, RealtySearchComponent]
})
export class ClientModule { }
