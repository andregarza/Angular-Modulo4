import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MainpageComponent } from './components/mainpage/mainpage.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { PostdialogComponent } from './components/postdialog/postdialog.component';
import { DeletedialogComponent } from './components/deletedialog/deletedialog.component';
import { SearchdialogComponent } from './components/searchdialog/searchdialog.component';
import { UpdatedialogComponent } from './components/updatedialog/updatedialog.component';
import { LogindialogComponent } from './components/logindialog/logindialog.component';


@NgModule({
  declarations: [
    MainpageComponent,
    PostdialogComponent,
    DeletedialogComponent,
    SearchdialogComponent,
    UpdatedialogComponent,
    LogindialogComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    MainpageComponent
  ]
})
export class DashboardModule { }
