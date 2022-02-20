import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule,ReactiveFormsModule, FormsModule ,MatFormFieldModule,MatInputModule,MatIconModule],
  providers: [LoginService],
  exports:[LoginComponent]
})
export class LoginModule {

 }
