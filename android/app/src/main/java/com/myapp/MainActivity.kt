//package com.myapp
//
//import com.facebook.react.ReactActivity
//import com.facebook.react.ReactActivityDelegate
//import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
//import com.facebook.react.defaults.DefaultReactActivityDelegate
//import com.microsoft.appcenter.AppCenter;
//import com.microsoft.appcenter.analytics.Analytics;
//import com.microsoft.appcenter.crashes.Crashes;
//
//class MainActivity : ReactActivity() {
//
//  /**
//   * Returns the name of the main component registered from JavaScript. This is used to schedule
//   * rendering of the component.
//   */
//  override fun getMainComponentName(): String = "MyApp"
//
//  /**
//   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
//   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
//   */
//  override fun createReactActivityDelegate(): ReactActivityDelegate =
//      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
//}
package com.myapp

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.microsoft.appcenter.AppCenter
import com.microsoft.appcenter.analytics.Analytics
import com.microsoft.appcenter.crashes.Crashes

class MainActivity : ReactActivity() {

    override fun getMainComponentName(): String = "MyApp"

    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // AppCenter initialization
//        AppCenter.start(
//            application,
//            "73024799-0f72-4844-8df6-8b5fea997152",
//            Analytics::class.java,
//            Crashes::class.java
//        )

        val appSecret = "73024799-0f72-4844-8df6-8b5fea997152"
        AppCenter.configure(application, appSecret)
        if (!AppCenter.isConfigured()) {
            AppCenter.start(
                application,
                Analytics::class.java,
                Crashes::class.java
            )
        } else {
            AppCenter.start(Analytics::class.java)
            AppCenter.start(Crashes::class.java)
        }
    }
}
