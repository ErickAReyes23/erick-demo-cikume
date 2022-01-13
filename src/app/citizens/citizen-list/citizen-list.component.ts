import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
//import { threadId } from 'worker_threads';
import { Citizen } from '../../models/citizen.model';
import { CitizenService } from '../citizen.service';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import {MatTooltipModule} from '@angular/material/tooltip';


@Component({
  selector: 'app-citizen-list',
  templateUrl: './citizen-list.component.html',
  styleUrls: ['./citizen-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  
})
export class CitizenListComponent implements OnInit{

  constructor(private _citizenService : CitizenService, 
    private _formBuilder: FormBuilder, 
    private _toastr: ToastrService) {  

  }

  /********************************************************************/
  /*Begin Variables Area*/

  /*Variables de estados para realizar efecto loading al crear un nuevo citizen
  y otras funcionalidades de nuestra app.*/
  loadEffect:boolean = false;
  isSubmitting:boolean = false;
  isDeleting:boolean = false;
  switchWomen:boolean = false;
  switchMen:boolean = false;
  maleSelected:boolean = false;
  femaleSelected:boolean = false;
  selectedFilterMan:boolean = false;
  selectedFilterWoman:boolean = false;
  allFilter:boolean = true;

  /*Variable que moldea los datos a partir de nuestra interfaz*/
  citizens!: Citizen[] ;

  /*Variable para la paginacion de la App.*/
  actualPage:number=1;
  
  /*Se usa para construir un formulario creando un form group, de esta manera
  le podemos dar seguimiento y control a los datos.*/
  citizenForm!: FormGroup;
 

  /*Variables encargadas de llevar la logica de nuestros botones edit y save
  asi como difentes variables de estados para mostrar u ocultar alertas en
  nustra vista*/
  postErrorMessage: string = '';
  statusMessage: boolean = false;
  edit = true;
  add = false;

  /*End Variables Area*/
  /********************************************************************/


  /********************************************************************/
  /*Begin LifeCycle Hooks*/

  ngOnInit(): void {
    this.getCitizenData();
    this.initForm();
  }

  /*End LifeCycle Hooks*/
  /********************************************************************/


  /********************************************************************/
  /*Begin Methods*/

  initForm():void{
    this.citizenForm = this._formBuilder.group({
        id: [''],
        name:['',[Validators.required]],
        age:['',[Validators.required]],
        gender:['',[Validators.required]],
        civilStatus: ['',[Validators.required]],
        profession:['',[Validators.required]]
    })
  }

  /*GET ALL*/
  public getCitizenData():void {
    this.selectedFilterMan = false;
    this.selectedFilterWoman = false;
    this.allFilter = true;
    this.citizens = [];
    this._citizenService.getCitizens$().subscribe({
      next: citizens => this.citizens = citizens,
      error: err => console.log(err),
      complete: () => console.log('Get Data Completed Succesfully')
    });
  }
  /*GET WOMEN*/

  public getWomenData():void {
    this.actualPage = 1;
    this.citizens = [];
    this.selectedFilterWoman = true;
    this.selectedFilterMan = false;
    this.allFilter = false;
    this._citizenService.getWomenCitizens$().subscribe({
      next: citizens => this.citizens = citizens,
      error: err => console.log(err),
      complete: () => console.log('Get Women Data Completed Succesfully')
    });
  }

  /*GET MEN LIST*/ 

  public getMenData():void {
    this.actualPage = 1;
    this.citizens = [];
    this.selectedFilterMan = true;
    this.selectedFilterWoman = false;
    this.allFilter = false;
    this._citizenService.getMenCitizens$().subscribe({
      next: citizens => this.citizens = citizens,
      error: err => console.log(err),
      complete: () => console.log('Get Men Data Completed Succesfully')
    });
  }


   /*POST*/
  addCitizen() {
    if(this.citizenForm.valid)
    {
      this.resetAfterValidation();
      this._citizenService.createCitizen$(this.citizenForm.value)
      .subscribe({
        next:response => {
          console.log(response);
          this.successAlert();
          this.getCitizenData();
          this.resetValues();
          this.loadEffect = false;
          this.isSubmitting = false;
        },
        error:err => console.log(`Error Added Data: ${err}`),
        complete: () => console.log('Add Data Completed Succesfully')
      });

    }else{
      this.postErrorMessage = "Please complete the form properly :)"
      this.statusMessage = true;
    }
  }

 /*PUT*/
  updateCitizen(){
    if(this.citizenForm.valid)
    {
      this.resetAfterValidation();  
      this._citizenService.editCitizen$(this.citizenForm.value)
      .subscribe({
        next: () => {
              this.getCitizenData();
              this.successAlert();
              this.resetValues();
              this.loadEffect = false;
              this.isSubmitting = false;
          },
          error:err => console.log(`Error Updated Data: ${err}`),
          complete: () => console.log('Updated Data Completed Succesfully')
      });
      
    }else{
        this.postErrorMessage = "Please complete the form properly :)"
        this.statusMessage = true;
    }
  }
  
  /*DELETE*/
  removeCitizen(citizen: Citizen){
    this.isDeleting = true;
    let citizenDeleted = citizen.name;
    Swal.fire({
      title: `Would you like to delete "${citizen.name}" citizen?`,
      showDenyButton: true,
      confirmButtonText: 'Sure',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        
        /*Proceso para eliminar*/
        this._citizenService.deleteCitizen$(citizen.id).
          subscribe({
            next: ()  => console.log(`Deleting citizen...`),
            error:err => console.log(`Error Updated Data: ${err}`),
            complete: () => console.log('Deleted Data Completed Succesfully')
        });

        /*Alert deleted confirmation*/
        Swal.fire(`${citizenDeleted} has been deleted!`, '', 'success');

        /*Cargar tabla y limpiar formulario*/
        this.getCitizenData();
        this.resetValues();
        this.isDeleting = false;

      } else if (result.isDenied) {
        Swal.fire('Operation canceled', '', 'info');
        this.isDeleting = false;
      }
    })
  }

  /*Reset form values*/
  resetValues():void {
    this.citizenForm.reset();
    this.statusMessage = false;
    this.edit = true;
    this.add = false;
  }

  /*Reset logic variables to show alerts validations and loading*/
  resetAfterValidation():void{
    this.isSubmitting = true;
    this.loadEffect = true;
    this.statusMessage = false;
  }

  /*Asignar valor al form al momento de editar un registro*/
  setValues(citizen:Citizen){

    /*Condicionante para el tipo de genero seleccionado*/
    citizen.gender === 'Male' ? this.maleSelected = true :  this.femaleSelected = true;
  
    this.citizenForm.patchValue({
      name:citizen.name,
      age:citizen.age,
      profession:citizen.profession,
      id:citizen.id,
      gender: citizen.gender,
      civilStatus: citizen.civilStatus
    });

    this.edit = false;
    this.add = true;
  }

  /*Alerta de Exito con Toastr*/ 
  successAlert():void{
    this._toastr.success('Operation done succesfully!');
  }

  /*Funcion para cambiar Titulo en filtro*/
  titleFiltered():string{
    let title = "";
    if(this.allFilter)
    {
      title = "No filter applied"
      
    }else if(this.selectedFilterMan)
    {
      title = "Men"
    }else{
      title= "Women"
    }

    return title;
  }

   /*End Methods*/
  /********************************************************************/
   
}
