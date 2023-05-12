import { Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { Feather } from '@expo/vector-icons'
import AutoHeightWebView from 'react-native-autoheight-webview';

export function VideoView({ handleClose, videoUrl }) {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.retorno} onPress={handleClose}>
        <Feather name="arrow-left" size={28} color={'#fff'} />
        <Text style={styles.textoRetorno}>Voltar</Text>
      </TouchableOpacity>

      <AutoHeightWebView
        style={styles.webView}
        source={{ uri: videoUrl }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  retorno: {
    flexDirection: 'row',
    backgroundColor: '#4cbe6c',
    alignItems: 'center',
    height: 48,
    borderRadius: 4,
    width: '100%',
    padding: 8
  },
  textoRetorno: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
    marginLeft: 14
  },
  webView: {
    width: '100%'
  }
})