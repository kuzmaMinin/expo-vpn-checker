import { NativeModule, requireNativeModule } from 'expo';

import { ExpoVpnCheckerModuleEvents } from './ExpoVpnChecker.types';

declare class ExpoVpnCheckerModule extends NativeModule<ExpoVpnCheckerModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoVpnCheckerModule>('ExpoVpnChecker');
