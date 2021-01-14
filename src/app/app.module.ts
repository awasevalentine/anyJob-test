import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "backgroundOpacity": 1,
      "backgroundStrokeWidth": 4,
      "backgroundPadding": 0,
      "radius": 39,
      "space": -2,
      "toFixed": 0,
      "maxPercent": 100,
      "outerStrokeWidth": 3,
      "outerStrokeColor": "#18e756",
      "innerStrokeColor": "#1b34ee",
      "innerStrokeWidth": 3,

      "subtitleColor": "#271124",
      "subtitleFontSize": "19",
      "imageHeight": 229,
      "imageWidth": 104,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": true})
  ],
  providers: [
    {
      provide: APP_BASE_HREF, useValue: '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
