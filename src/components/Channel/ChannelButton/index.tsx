import React, {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IMAGES} from '../../../utils/constants';
import Image from '../../Image';
import styles from './styles';

const ChannelButton = ({logo, label, currentShow}) => {
  console.log({label});
  return useMemo(
    () => (
      <TouchableOpacity style={styles.container}>
        <Image src={IMAGES.CHANNEL_PLACEHOLDER} style={styles.channelLogo} />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label.toUpperCase()}</Text>
          <Text style={styles.currentShow}>{currentShow}</Text>
        </View>
      </TouchableOpacity>
    ),
    [currentShow, label],
  );
};

export default ChannelButton;
