import * as React from 'react';

import { ExpoVpnCheckerViewProps } from './ExpoVpnChecker.types';

export default function ExpoVpnCheckerView(props: ExpoVpnCheckerViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
