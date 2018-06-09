import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestComponent } from './interest/interest.component';
import { InterestsComponent } from './interests/interests.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InterestComponent, InterestsComponent]
})
export class ClientModule { }
