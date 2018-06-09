import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposalComponent } from './proposal/proposal.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProposalComponent, AnnouncementComponent, AnnouncementsComponent]
})
export class AdvertiserModule { }
