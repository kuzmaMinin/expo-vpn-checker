package expo.modules.vpnchecker

import android.content.Context
import android.net.ConnectivityManager
import android.net.Network
import android.net.NetworkCapabilities

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoVpnCheckerModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoVpnChecker")

    Function("checkVpn") {
       val context = appContext.reactContext ?: throw IllegalStateException("React context is not available")

       val connectivityManager = context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager

       val activeNetwork: Network? = connectivityManager.activeNetwork

       val caps: NetworkCapabilities? = activeNetwork?.let {
           connectivityManager.getNetworkCapabilities(it)
       }

       caps?.hasTransport(NetworkCapabilities.TRANSPORT_VPN) == true
    }
  }
}
