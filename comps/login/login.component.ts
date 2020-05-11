import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/modelos/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;   
  user:any="";
  pswd:any="";    
  
datos :User={
  id: 0,
    user: '',
    nombre: '',
    apellido: '',
    dir: '',
    tel: 0,
    puesto: '',
    psqd: '',
    administrador: null
}            
  private formSubmitAttempt: boolean;
  constructor( 
    private authService: AuthService) { }

  ngOnInit(): void {
   
  }
login(){  
  this.authService.login(this.datos)
}

  

}
