# TodoApp

# Angular Firebase To-Do App

A simple **To-Do application** built with **Angular**, **Angular Material**, and **Firebase Firestore**.  
Supports adding, deleting, completing tasks, and sorting/filtering by category, priority, and date.

---

## Features

- Add tasks with:
  - Title
  - Description (optional)
  - Category (optional)
  - Priority (1-High, 2-Medium, 3-Low)
  - Due Date (optional)
- Real-time updates using **Firebase Firestore**
- Mark tasks as completed/uncompleted
- Delete tasks
- Filter tasks by category
- Sort tasks by priority or creation date
- Responsive design using Angular Material

---

## Tech Stack

- **Angular 20** (Standalone Components)
- **Angular Material**
- **Firebase Firestore**
- **RxJS** for state management
- **Vite** as dev server

---

## Installation

1. Clone the repo:

```bash```
git clone https://github.com/arvindbabu2003/Todo.git
cd Todo

## Install dependencies

npm install

## Development server

To start a local development server, run:

```bash```
ng serve


Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```
