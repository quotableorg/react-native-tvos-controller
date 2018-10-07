import {
    NativeModules,
    NativeEventEmitter
  } from 'react-native';
  
  const nativeEventEmitter = new NativeEventEmitter(NativeModules.ReactNativeTvosController);
  
  module.exports = {
      connect: function(){
          NativeModules.ReactNativeTvosController.connect();
      },
      enablePanGesture: function(){
          NativeModules.ReactNativeTvosController.enablePanGesture();
      },
      disablePanGesture: function(){
          NativeModules.ReactNativeTvosController.disablePanGesture();
      },
      enableRecognizeSimultaneously: function(){
          NativeModules.ReactNativeTvosController.enableRecognizeSimultaneously();
      },
      disableRecognizeSimultaneously: function(){
          NativeModules.ReactNativeTvosController.disableRecognizeSimultaneously();
      },
      subscribe: function(event, callback){
          nativeEventEmitter.addListener(event, callback);
          return function(){
              nativeEventEmitter.removeListener(event, callback);
          }
      }
  }