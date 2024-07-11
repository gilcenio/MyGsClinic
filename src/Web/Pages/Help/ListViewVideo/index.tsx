import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import theme from '../../../../Global/theme'
import { ResizeMode, Video } from 'expo-av'

interface IListViewVideo {
  title: string
  DATA: any
  scrollChange: number
  setScrollChange: React.Dispatch<React.SetStateAction<number>>
  scrollViewRef: React.RefObject<ScrollView>
}

export default function ListViewVideo({title, scrollChange, scrollViewRef, setScrollChange, DATA}: IListViewVideo) {
  

  function handleScrollInit() {
    if (scrollChange > 0) {
      scrollViewRef.current?.scrollTo({ x: 0, animated: true }); 
      setScrollChange(0);
    }
  }

  function handleScrollReturn() {
    if (scrollChange > 0) {
      scrollViewRef.current?.scrollTo({ x: (scrollChange - 1) * 410, animated: true }); 
      setScrollChange(scrollChange - 1);
    }
  }

  function handleScrollUp() {
    console.log("aqui")
    if (scrollChange < DATA - 4) {
      scrollViewRef.current?.scrollTo({ x: (scrollChange + 1) * 410, animated: true }); 
      setScrollChange(scrollChange + 1);
    }
  }
  
  return (
    <View style={styles({}).content}>
      <View style={styles({}).headerTitle}>
        <Text 
          onPress={() => handleScrollInit()} 
          style={styles({fontSize: 28, fontFamily: theme.fonts.Poppins_500Medium}).text}
        >
          {"< "}{title}
        </Text>

        <View style={{flexDirection: "row", columnGap: 40}}>
          <Text 
            onPress={() => handleScrollReturn()} 
            style={styles({fontSize: 50, fontFamily: theme.fonts.Poppins_500Medium}).text}
          >
            {"<"}
          </Text>
          <Text 
            onPress={() => handleScrollUp()} 
            style={styles({fontSize: 50, fontFamily: theme.fonts.Poppins_500Medium}).text}
          >
            {">"}
          </Text>
        </View>
      </View>

      <ScrollView 
        ref={scrollViewRef} 
        horizontal 
        contentContainerStyle={{columnGap: 20}} 
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled
      >
        {
          DATA.map(() => {
            return(
              <Video
                videoStyle={styles({}).card}
                style={styles({}).card}
                source={{
                  uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode={ResizeMode.COVER}
              />
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export interface IStylesheetInterface {
  fontFamily?: string,
  fontSize?: number,
  color?: string,
}

const styles = ({fontSize, color, fontFamily}: IStylesheetInterface) =>
  StyleSheet.create({
    content: {
      width: "100%",
      height: 300,
    },
    card: {
      width: 400,
      height: "100%",
      borderRadius: 20
    },
    text: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: color ? color : theme.text.text_1,
      marginBottom: 10,
    },
    headerTitle: {
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }
);