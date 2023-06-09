import { StyleSheet, View, Text } from 'react-native'
import { Provider } from 'react-redux'
import AgeControl from './components/AgeControl'
import store from './store'
import AgeView from './components/AgeView'

export default function App() {
  return <Provider store={store}>
    <View style={styles.container}>
      <AgeView />
      <AgeControl />
    </View>
  </Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
