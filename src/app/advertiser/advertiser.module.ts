import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule,  MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProposalComponent } from './proposal/proposal.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

@NgModule({
  imports: [
    CommonModule,
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
  declarations: [ProposalComponent, AnnouncementComponent, AnnouncementsComponent]
})
export class AdvertiserModule { }
