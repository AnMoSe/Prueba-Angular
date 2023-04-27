import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  registroForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registroForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  submit() {
    console.log('Registro enviado', this.registroForm.value);
  }
}