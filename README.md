

# BbdMfeDemo

To run:

- run `npm install`
- cd into apps/mfe-two and run `npm install`
- open new terminal OR cd back to project root
- run `npm run start`

## Webpack Module Federation
This MFE architecture uses Webpack 5's Module Federation capabilities. In this way we can deploy our microsites separately and without needing to redeploy or rebuild any other application we can consume microsites from the shell application.

Webpack's Module Federation has the added benefit of sharing dependencies between microsites. Meaning your application bundle doesn't bloat with duplicated dependencies. You can set your shared dependencies in your webpack.config.js file.

More on webpack module federation: https://webpack.js.org/concepts/module-federation/

## Angular Architects
This project is written with the major help of the Angular Architects series of articles on MFE's: https://www.angulararchitects.io/en/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/

I urge anyone to go have a read as most of the components required to get this all running is explained in those articles.

## Dynamic config loading
This shell applications uses the APP_INITIALIZER and an app-config.json file to load environment configuration when the app is accessed. This is the final part of the puzzle to build and deploy completely independently. The menuConfig is used to generate the routes to the various MFE's and the menu items for those MFE's. This was implemented from a blog post https://christianlydemann.com/implementing-dynamic-environments-in-angular-for-avoiding-one-build-per-environment/

Even if you don't implement MFE architecture, if you have an Angular application I suggest you use dynamic environment configuration to allow you to deploy the same image to all environments.
