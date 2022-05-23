import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatCardModule} from '@angular/material/card'
@NgModule({
exports: [MatToolbarModule, MatCardModule]
})

export class MaterialModule {}