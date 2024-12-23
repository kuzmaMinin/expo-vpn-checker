import ExpoVpnChecker from "expo-vpn-checker";
import { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

export default function App() {
  const [isVpnEnabled, setIsVpnEnabled] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Module API</Text>
      <Group name="Is VPN enabled on device">
        <Text>{isVpnEnabled.toString()}</Text>
      </Group>

      <Button
        title="Check VPN"
        onPress={async () => {
          const result = ExpoVpnChecker.checkVpn();

          setIsVpnEnabled(result);
        }}
      />
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
};
