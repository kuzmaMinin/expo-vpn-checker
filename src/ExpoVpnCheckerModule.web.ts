import { registerWebModule, NativeModule } from 'expo';

import { ExpoVpnCheckerModuleEvents } from './ExpoVpnChecker.types';

class ExpoVpnCheckerModule extends NativeModule<ExpoVpnCheckerModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoVpnCheckerModule);
