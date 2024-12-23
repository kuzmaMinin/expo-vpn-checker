import { NativeModule, requireNativeModule } from "expo";

declare class ExpoVpnCheckerModule extends NativeModule {
  checkVpn(): boolean;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoVpnCheckerModule>("ExpoVpnChecker");
