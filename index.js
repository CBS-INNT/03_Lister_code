import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

// Forklaring på denne fil med andre ord: 
    // index.js = “start motoren med denne bil”
    // App.js = “bilen” (alt design, logik, navigation, UI osv.)

registerRootComponent(App);
