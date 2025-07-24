import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';



@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [AuthLayoutComponent]
})
export class SharedModule { }
