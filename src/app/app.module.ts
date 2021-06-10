import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor/editor.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemsTableComponent } from './components/items-table/items-table.component';
import { FormComponent } from './components/add-form/add-form.component';

const appRoutes: Routes = [
  { path: 'editor', component: EditorComponent },
  { path: 'preview', component: PreviewComponent },
  { path: '**', redirectTo: '/preview', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    PreviewComponent,
    ItemsComponent,
    ItemsTableComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    MatSortModule,
  ],
  providers: [ItemsTableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
