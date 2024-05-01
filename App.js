import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Reading from './src/views/Reading';
import Navbar from './src/components/Navbar';
import { useColorScheme } from 'nativewind';

import { useState } from 'react';

export default function App() {

  const [navbar, setNavbar] = useState(true);

  const {colorScheme, toggleColorScheme} = useColorScheme()

  const hideNavbar = () => {
    setNavbar(false);
  }

  const showNavbar = () => {
    setNavbar(true);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      {navbar && <Navbar toggleColorScheme={toggleColorScheme} isDark={colorScheme==='dark'} />}
      <Reading hideNavbar={hideNavbar} showNavbar={showNavbar}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'scroll'
  },
});
