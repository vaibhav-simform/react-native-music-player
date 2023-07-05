import {View, SafeAreaView} from 'react-native';
import React from 'react';
import {CustomButton} from '..';
import {Images} from '../../assets';

const MusicPlayerControls = () => {
  return (
    <SafeAreaView>
      <View>{/* Playlist Name  and search*/}</View>
      <View>{/* Background focused picture */}</View>
      <View>{/* Song name with artist name and fav button */}</View>
      <View>{/* music player */}</View>
      <View>{/* share tool bar */}</View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <CustomButton source={Images.shuffleIcon} />
        <CustomButton source={Images.previousIcon} />
        <CustomButton source={Images.playIcon} />
        <CustomButton source={Images.nextIcon} />
        <CustomButton source={Images.loopIcon} />
      </View>
    </SafeAreaView>
  );
};

export default MusicPlayerControls;
