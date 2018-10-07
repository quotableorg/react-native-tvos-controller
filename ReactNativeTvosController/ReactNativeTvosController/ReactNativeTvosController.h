//
//  ReactNativeTvosController.h
//  ReactNativeTvosController
//
//  Created by yangchen on 2017/1/29.
//  Copyright © 2017年 yangchen. All rights reserved.
//

//#import <React/RCTBridgeModule.h>
//#import <React/RCTEventEmitter.h>

#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#else
#import "RCTBridgeModule.h"
#endif
#import "RCTEventEmitter.h"

@interface ReactNativeTvosController : RCTEventEmitter <RCTBridgeModule, UIGestureRecognizerDelegate>

@end
