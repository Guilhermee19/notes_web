import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ReactiveFormsModule } from '@angular/forms';
import { IconDirective } from 'src/app/directives/icon.directive';
import { LoadingComponent } from './loading/loading.component';
import { PageLoadingComponent } from './page-loading/page-loading.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  declarations: [LoadingComponent, PageLoadingComponent, IconDirective],
  exports: [
    LoadingComponent,
    PageLoadingComponent,
    IconDirective,
    MatButtonModule,
  ],
})
export class SharedModule {}
