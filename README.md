# CrytoExpert

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Design and Walkthrough

Spent some time designing a low def mock up on figma
![image](https://github.com/Oshane713/cryto-expert.io/assets/42421312/bbe4bc73-657b-448e-896a-6a7bfa332354)


Final look
![image](https://github.com/Oshane713/cryto-expert.io/assets/42421312/0794c7b0-eade-487d-9df3-96d7a766d77d)

With the filter dropdown at the top the user has the ability to filter the listed crypto currencies.
![image](https://github.com/Oshane713/cryto-expert.io/assets/42421312/8df0fb61-3d7f-4cec-b379-bfe3a7b711ef)

![image](https://github.com/Oshane713/cryto-expert.io/assets/42421312/38d44642-9262-48cd-b107-b0f8b976c07a)

A price chart is displayed when the user hits view chart.
![image](https://github.com/Oshane713/cryto-expert.io/assets/42421312/4f5f7f8a-f6d4-48bd-892c-afbadbdb6d2b)


Small menu at top right to show User's Bitcoin Wallet

![image](https://github.com/Oshane713/cryto-expert.io/assets/42421312/7cd496ad-6e81-4fbc-bcce-8993687520f6)



Bitcoin wallet when clicked.

![image](https://github.com/Oshane713/cryto-expert.io/assets/42421312/a2594cec-46ec-45e2-bbfb-e205b1d4e3ad)



## Ideas

So due to the time contraints I wasnt able to make the full dashboard I wanted. I had many more ideas. Some of them are:
* Allow wallet to include assets from the coins that was in the front page. allow user to add and remove assets for each and give a big total in the bottom as USD.
* Reorganize component structure: Some components I wouldve made completely unrelated and use rxjs to share data instead of @input @ouput
* More testing. This is my first time testing with Jasmine or any testing script for that matter. Based on some research I did some simple ones. would've Loved to go deeper and test other things like my service
* Design: Honestly this webapp couldve been much better looking especially the wallet. would've also made it responsive to different sizes.
* Wouldve wanted my card to show more information like 7day change. and 1 month change. Didnt see that readily available on this api like on coinmarketcap


