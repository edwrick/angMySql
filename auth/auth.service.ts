import { Injectable } from '@angular/core';
import { User } from '../modelos/user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from '../servs/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  public usuario:User={
    id: 0,
    user: '',
    nombre: '',
    apellido: '',
    dir: '',
    tel: 0,
    puesto: '',
    psqd: '',
    administrador: null
  };
  public prueba:any=[];
  public admin :boolean;
  public id :number;
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  getuserid(){
    return this.id;
  }
  getuserrol():boolean{
    return this.admin;
  }
  constructor( private router: Router , private userser:UsersService) { }
  login(user: User){
    const comp = this.usuario;
     this.userser.getUserbyUser(user).subscribe(
      res=>{
        console.log(res);
        this.prueba= res;
        this.admin= this.prueba.administrador;
        this.id= this.prueba.id;
        if ( this.prueba.psqd === user.psqd ) { 
          this.loggedIn.next(true);
          this.router.navigate(['/users',this.prueba.id]);
        }
      },
      err => console.log(err)
    )
    console.log(user.psqd);
    console.log(this.prueba.psqd);

    
  }

  logout() {                            
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }


  

}
