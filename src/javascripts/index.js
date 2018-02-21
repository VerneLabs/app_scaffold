/*
This is the first JavaScript file that runs once your iframe is loaded within a Zendesk product.
*/
import I18n from 'i18n';
import LegacyApp from './legacy_app';
import React from 'react';
import {render} from 'react-dom';
import Home from './pages/containers/home'

const app = document.getElementById('app');

render(<Home/>, app);




//
// // add an event listener to detect once your app is registered with the framework
// client.on('app.registered', function(appData) {
//   client.get('currentUser.locale').then(userData => {
//     // load translations based on the account's current locale
//     I18n.loadTranslations(userData['currentUser.locale']);
//     // create a new instance of your app
//     // new LegacyApp(client, appData);
//   });
// });
