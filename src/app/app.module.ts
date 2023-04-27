import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importar reactive forms module
import { FormsModule } from '@angular/forms'; // Importar forms module
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule], // Importar los módulos
  bootstrap: [AppComponent],
})
export class AppModule {}
