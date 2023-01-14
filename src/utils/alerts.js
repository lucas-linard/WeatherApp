import React from "react";
import { Alert, Linking, Platform } from "react-native";
export const handleOpenSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      Linking.openSettings();
    }
};

export default createLocationButtonAlert = () => Alert.alert(
    "Permissão de localização não concedida",
    "Para utilizar o aplicativo é necessário permitir o acesso a localização e reiniciar o aplicativo",
    [
      
      { text: "Configurações", onPress: () => handleOpenSettings() }
    ]
  );