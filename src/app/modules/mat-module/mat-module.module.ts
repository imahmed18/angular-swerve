import { NgModule } from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule} from '@angular/material/card';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { MatTabsModule} from '@angular/material/tabs';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule} from '@angular/material/dialog';
import {  MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPaginatorModule} from '@angular/material/paginator';
import {  MatTooltipModule} from '@angular/material/tooltip';
import { MatDividerModule} from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatToolbarModule} from '@angular/material/toolbar'


const materialComponents=[
  MatFormFieldModule,
  MatCheckboxModule, 
  MatButtonModule, 
  MatIconModule,
  MatInputModule ,
  MatSelectModule,
  MatSidenavModule,
  MatMenuModule,
  MatCardModule,
  MatDatepickerModule,
  MatTableModule,
  MatListModule,
  MatTabsModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatDividerModule,
  MatRippleModule,
  MatSnackBarModule,
  MatBottomSheetModule,
  MatToolbarModule
]


@NgModule({
  imports:[materialComponents],
  exports:[
    materialComponents
  ],
})
export class MatModuleModule { }
