# Expo VPN Checker
## This is expo module for checking if device has an active VPN connection.

The API is very simple. There is only one *checkVpn()* method, which returns **true** or **false**, depending on the state of the device.

### Setup

:white_check_mark: In **app.json** in the root of your project update **ios** section:

```
"ios": {
  ...
  "entitlements": {
    "com.apple.developer.networking.wifi-info": true
  }
}
```
:white_check_mark: Then run:
```
npx expo install expo-vpn-checker
```

:white_check_mark: To use native module you need to make a development build
```
npx expo prebuild
```

DONE!

for *IOS*:
```
npx expo run:ios
```

for *Android*:
```
npx expo run:android
```

### Usage

```javascript
import ExpoVpnChecker from "expo-vpn-checker";
import {} from "react-native"

export default function App() {
  const [isVpnEnabled, setIsVpnEnabled] = useState(false);

  useEffect(() => {
    const result = ExpoVpnChecker.checkVpn();
    setIsVpnEnabled(result);
  }, [])

  return (
    <>
      <Text>{isVpnEnabled.toString()}</Text>
      ...
    </>
  );
}
```
