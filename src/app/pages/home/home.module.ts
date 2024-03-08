import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/components/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ZoomableDirective } from 'src/app/directives/zoomable.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    DragDropModule,
    MatTooltipModule,
  ],
  declarations: [HomeComponent, ZoomableDirective],
})
export class HomeModule {}
