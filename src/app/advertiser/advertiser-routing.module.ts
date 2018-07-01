import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

const routes: Routes = [
        { path: 'new_advertise', component: AnnouncementComponent },
        { path: 'advertises', component: AnnouncementsComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdvertiserRoutingModule { }
