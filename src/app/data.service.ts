import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    return {
      citizens: [
        {
          id: 1,
          name: 'Erick Reyes',
          age: 23,
          gender: 'Male',
          civilStatus: 'Single',
          profession: 'Engineer'
        },
        {
          id: 2,
          name: 'Sara Esther',
          age: 23,
          gender: 'Female',
          civilStatus: 'Single',
          profession: 'Engineer'
        },
        {
          id: 3,
          name: 'Milena Guerra',
          age: 24,
          gender: 'Female',
          civilStatus: 'Single',
          profession: 'Police'
        },
        {
          id: 4,
          name: 'Juan Perez',
          age: 35,
          gender: 'Male',
          civilStatus: 'Single',
          profession: 'Doctor'
        },
        {
          id: 5,
          name: 'Carlos Ernesto',
          age: 38,
          gender: 'Male',
          civilStatus: 'Divorced',
          profession: 'Lawyer'
        },
        {
          id: 6,
          name: 'Abigail Hernadez',
          age: 21,
          gender: 'Female',
          civilStatus: 'Single',
          profession: 'Artist'
        },
        {
          id: 7,
          name: 'Kevin Hernandez',
          age: 25,
          gender: 'Male',
          civilStatus: 'Single',
          profession: 'Painter'
        },
        {
          id: 8,
          name: 'Monica Ramirez',
          age: 28,
          gender: 'Female',
          civilStatus: 'Single',
          profession: 'Model'
        },
        {
          id: 9,
          name: 'Jessica Olla',
          age: 36,
          gender: 'Female',
          civilStatus: 'Single',
          profession: 'Musician'
        },
        {
          id: 10,
          name: 'Nelson Reyes',
          age: 28,
          gender: 'Male',
          civilStatus: 'Single',
          profession: 'Engineer'
        },
        {
          id: 11,
          name: 'Alejandra Perez',
          age: 26,
          gender: 'Female',
          civilStatus: 'Single',
          profession: 'Engineer'
        },
        {
          id: 12,
          name: 'Andrea Ortiez',
          age: 40,
          gender: 'Female',
          civilStatus: 'Married',
          profession: 'Police'
        },
        {
          id: 13,
          name: 'Luis Benavides',
          age: 30,
          gender: 'Male',
          civilStatus: 'Single',
          profession: 'Doctor'
        },
        {
          id: 14,
          name: 'Erick Portillo',
          age: 56,
          gender: 'Male',
          civilStatus: 'Divorced',
          profession: 'Lawyer'
        },
        {
          id: 15,
          name: 'Veronica Mejia',
          age: 26,
          gender: 'Female',
          civilStatus: 'Single',
          profession: 'Artist'
        },
        {
          id: 16,
          name: 'Melvin Hernandez',
          age: 30,
          gender: 'Male',
          civilStatus: 'Single',
          profession: 'Painter'
        },
        {
          id: 17,
          name: 'Beatriz Alvarado',
          age: 28,
          gender: 'Female',
          civilStatus: 'Single',
          profession: 'Model'
        },
        {
          id: 18,
          name: 'Cindy Alas',
          age: 34,
          gender: 'Female',
          civilStatus: 'Single',
          profession: 'Musician'
        },
        {
          id: 19,
          name: 'Daniela Umanzor',
          age: 24,
          gender: 'Female',
          civilStatus: 'Single',
          profession: 'Police'
        },
        {
          id: 20,
          name: 'Doris Hernandez',
          age: 22,
          gender: 'Female',
          civilStatus: 'Single',
          profession: 'Dancer'
        },
        {
          id: 21,
          name: 'Esmeralda Garcia',
          age: 31,
          gender: 'Female',
          civilStatus: 'Single',
          profession: 'Doctor'
        },
        {
          id: 22,
          name: 'Gisella Palacios',
          age: 24,
          gender: 'Female',
          civilStatus: 'Single',
          profession: 'Police'
        },
        {
          id: 23,
          name: 'Jennifer Tovar',
          age: 29,
          gender: 'Female',
          civilStatus: 'Single',
          profession: 'Singer'
        },
        {
          id: 24,
          name: 'Katherine Gomez',
          age: 27,
          gender: 'Female',
          civilStatus: 'Single',
          profession: 'Doctor'
        },
        {
          id: 25,
          name: 'Juan Carlos',
          age: 40,
          gender: 'Male',
          civilStatus: 'Married',
          profession: 'Dentist'
        }
  
      ]
    };
  }
}
