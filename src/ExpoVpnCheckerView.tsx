import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoVpnCheckerViewProps } from './ExpoVpnChecker.types';

const NativeView: React.ComponentType<ExpoVpnCheckerViewProps> =
  requireNativeView('ExpoVpnChecker');

export default function ExpoVpnCheckerView(props: ExpoVpnCheckerViewProps) {
  return <NativeView {...props} />;
}
