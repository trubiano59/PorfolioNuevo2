import { Component, OnInit } from '@angular/core';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  
  // Inyectar en el constructor el formBuilder

  constructor(private formBuilder: FormBuilder) {
    //creamos el grupo de control para el formulario login
    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      mail:['',[Validators.required, Validators.email]]
    })
    }  

 
  ngOnInit() {}
  //Metodos para el formulario
  //toma el dato de la password
  get Password(){
    return this.form.get("password");
  }
  //toma el dato del mail
  get Mail(){
    return this.form.get("mail");
  }
  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }
  get MailValid(){
    return this.Password?.touched && !this.Password?.valid;
  }
  onEnviar(event: Event){
    //Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault;

    if (this.form.valid){
      alert("todo salio bien: !Enviar formulario!")
      //llamamos nuestro servicio para enviar los datos al servidor
    }else{
      this.form.markAllAsTouched();
      alert("todo salio mal: !No Enviar formulario!")
    } 
  }

}