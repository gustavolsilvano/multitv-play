import React, {useCallback, useMemo} from 'react';
import Video from 'react-native-video';
import styles from '../../screens/HomeScreen/styles';
import {CustomVideoProps} from './types';

const bufferConfig = {
  minBufferMs: 2000,
  maxBufferMs: 5000,
  bufferForPlaybackMs: 1000,
  bufferForPlaybackAfterRebufferMs: 2000,
};

const CustomVideo = ({videoUrl}: CustomVideoProps) => {
  // FUNCTION
  const handleOnProgress = useCallback(data => {
    // console.log('handleOnProgress', data);
  }, []);
  const handleOnBuffer = useCallback(data => {
    console.log('handleOnBuffer', data);
  }, []);
  const handleOnError = useCallback(data => {
    console.log('handleOnError', data);
  }, []);

  // RENDER
  return useMemo(
    () => (
      <Video
        source={{uri: videoUrl}}
        muted={false}
        style={styles.container}
        repeat={true}
        paused={false}
        posterResizeMode="cover"
        rate={1}
        fullscreenOrientation={'portrait'}
        ignoreSilentSwitch={'ignore'}
        onProgress={handleOnProgress}
        playInBackground={false}
        bufferConfig={bufferConfig}
        onBuffer={handleOnBuffer}
        onError={handleOnError}
      />
    ),
    [handleOnBuffer, handleOnError, handleOnProgress, videoUrl],
  );
};

export default CustomVideo;
