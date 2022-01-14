import { Component } from '@angular/core';

@Component({
  selector: '<nav-demo></nav-demo>',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid ">
        <a class="navbar-brand font-weight-bold">Erick - Demo</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" routerLink="/login"
              >Login</a
            >
            <a class="nav-link active" aria-current="page" routerLink="/home"
              >Home</a
            >
            <a class="nav-link active" aria-current="page" routerLink="/citizen"
              >Citizens</a
            >

          </div>
        </div>
      </div>
    </nav>
  `,
})
export class NavBarComponent {}
