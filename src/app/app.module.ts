//Importar los modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Importar los servicios
//import { PorfolioService } from './servicios/porfolio.service'; Si lo ponemos asi tambien funciona

//Importar los componentes
import { AppComponent } from './app.component';
//import { LoginComponent } from './modals/login/login.component';
import { LoginComponent } from './login/login.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { AwardsComponent } from './awards/awards.component';
import { WorkComponent } from './work/work.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { IndexComponent } from './index/index.component';
import { MainComponent } from './main/main.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BotonlogoutComponent } from './botonlogout/botonlogout.component';
import { AcercademidashboardComponent } from './acercademidashboard/acercademidashboard.component';
import { ExperiencedashboardComponent } from './experiencedashboard/experiencedashboard.component';
import { EducationdashboardComponent } from './educationdashboard/educationdashboard.component';
import { ProyectosdashboardComponent } from './proyectosdashboard/proyectosdashboard.component';
import { SkillsdashboardComponent } from './skillsdashboard/skillsdashboard.component';
import { WorkdashboardComponent } from './workdashboard/workdashboard.component';
import { BannerdashboardComponent } from './bannerdashboard/bannerdashboard.component';
import { AwardsdashboardComponent } from './awardsdashboard/awardsdashboard.component';
import { InterestsdashboardComponent } from './interestsdashboard/interestsdashboard.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { NabvardashboardComponent } from './nabvardashboard/nabvardashboard.component';
import { AppRoutingModule } from './app-routing.module';
//import { LoginComponent_1 as LoginComponent } from "./modals/login/login.component";



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RedesComponent,
        BannerComponent,
        IndexComponent,
        ExperienceComponent,
        EducationComponent,
        SkillsComponent,
        InterestsComponent,
        AwardsComponent,
        WorkComponent,
        ProyectosComponent,
        ErrorComponent,
        MainComponent,
        AcercademiComponent,
        DashboardComponent,
        BotonlogoutComponent,
        AcercademidashboardComponent,
        ExperiencedashboardComponent,
        EducationdashboardComponent,
        ProyectosdashboardComponent,
        SkillsdashboardComponent,
        WorkdashboardComponent,
        BannerdashboardComponent,
        AwardsdashboardComponent,
        InterestsdashboardComponent,
        NabvarComponent,
        NabvardashboardComponent,
    ],
    //Agregamos el servicio al array de providers
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        LoginComponent
    ]
})
export class AppModule { }





//export class AppModule { }