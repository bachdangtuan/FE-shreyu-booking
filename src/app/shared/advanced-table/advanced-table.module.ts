import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbSortableHeaderDirective } from './sortable.directive';
import { AdvancedTableComponent } from './advanced-table.component';
import {UiModule} from "../ui/ui.module";

@NgModule({
  declarations: [
    NgbSortableHeaderDirective,
    AdvancedTableComponent,
  ],
    imports: [
        CommonModule,
        NgbModule,
        FormsModule,
        UiModule,
    ],
  exports: [AdvancedTableComponent]
})
export class AdvancedTableModule { }
