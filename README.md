# RegionCountryNgrx

# Styling

RegionCountryNgrx uses bootstrap v4 and ng-bootstrap v6, no major styling was implemented since most of the time invested was focused on the implementation of Redux on Angular.

# Quick Overview of RegionCountryNgrx

There are 2 main options in the nav menu:
1. **Home**: Welcome component with a quick guide of the test.

2. **Countries**: This component is lazy-loaded when the route: /countries is clicked. This is very usefull when there are several components and end-points involved on loading a site.

On Countries' landing page 2 dropdown boxes will be rendered; one associated to Regions and the second associated to Countries, the last one is directly related to the chosen value of the Region box.

A Country's Profile will be rendered when clicking on a country on the second dropdown, an extra Redux-action was added on "List including Capital" checkbox which includes the name of the Country's Capital on the list(Country's dropdown).

The initial idea was treating **Regions** and **Countries** as separate entities with similar structures however along the way seemed to be more logical to get them nested and make a better use of the Redux:Store.


**RegionCountryNgrx tree-structure Layout**

This project has been designed based on features-modules, meaning that folders/files are scoped within specific functionality.

Components, Service, Actions, Reducers and Effects have been carefully strong-typed.

## Installation and Use

From the project's folder run `npm install` to install essential dependencies of the app. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
