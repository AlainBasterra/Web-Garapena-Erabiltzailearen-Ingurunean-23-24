// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';  // Adjust the import based on your project structure
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { CrudService } from './shared/crud.service';

@NgModule({
  declarations: [AppComponent, ItemListComponent, ItemFormComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [CrudService],
  bootstrap: [AppComponent],
})
export class AppModule {}
