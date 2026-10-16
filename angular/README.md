# BookStore

This is a startup project based on the ABP framework. For more information, visit <a href="https://abp.io/" target="_blank">abp.io</a>

## Visual Studio

Abre `../aspnet-core/Acme.BookStore.slnx` como solución. El proyecto
`Acme.BookStore.Angular` usa este frontend existente y ejecuta `npm start`.
Necesitas Node.js compatible con el Angular del proyecto y las herramientas de
JavaScript/TypeScript de Visual Studio (disponibles en la carga de trabajo
«Desarrollo de ASP.NET y web»).

Para iniciar backend y frontend juntos, abre las propiedades de la solución y
selecciona varios proyectos de inicio. Configura la acción «Iniciar» para
`Acme.BookStore.HttpApi.Host` y `Acme.BookStore.Angular`, y presiona F5.
Angular abre `http://localhost:4200/` mediante su script existente.

La restauración del proyecto instala las dependencias con npm. Compilar la
solución no genera el frontend de producción; para eso usa `npm run build`
desde esta carpeta.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Vitest](https://vitest.dev).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
