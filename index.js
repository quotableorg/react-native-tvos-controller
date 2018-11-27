import {
    NativeModules,
    NativeEventEmitter
  } from 'react-native';
  
  const nativeEventEmitter = new NativeEventEmitter(NativeModules.ReactNativeTvosController);
  
  module.exports = {
      connect: function(){
          NativeModules.ReactNativeTvosController.connect();
      },
      connectTap: function(){
          NativeModules.ReactNativeTvosController.connectTap();
      },
      connectSwipe: function(){
          NativeModules.ReactNativeTvosController.connectSwipe();
      },
      connectLongPress: function(){
          NativeModules.ReactNativeTvosController.connectLongPress();
      },
      disconnect: function(){
          NativeModules.ReactNativeTvosController.disconnect();
      },
      disconnectTap: function(){
          NativeModules.ReactNativeTvosController.disconnectTap();
      },
      disconnectSwipe: function(){
          NativeModules.ReactNativeTvosController.disconnectSwipe();
      },
      disconnectLongPress: function(){
          NativeModules.ReactNativeTvosController.disconnectLongPress();
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