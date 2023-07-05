import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {MusicPlayerControls} from './components';

const App: FC = () => {
  return (
    <SafeAreaView>
      <MusicPlayerControls />
    </SafeAreaView>
  );
};

export default App;
