import React, { ReactNode } from 'react'
import { 
  View, 
  ViewStyle,
  ViewProps, 
  TouchableOpacityProps, 
  TouchableOpacity, 
  ActivityIndicator, 
  Text, 
  TextStyle, 
  Image, 
  ImageStyle, 
  ImageSourcePropType, 
  GestureResponderEvent, 
  ImageBackground, 
  ImageBackgroundProps, 
  ImageProps, 
  TextInput, 
  TextInputProps, 
  Platform, 
  SectionListProps,
  SectionList,
  ScrollView,
  ScrollViewProps
} from 'react-native'
import Animated, { AnimatedStyleProp, BaseAnimationBuilder, FadeIn, FadeOut, LayoutAnimationFunction } from 'react-native-reanimated';
import { IconProps, IconWeight } from '../@IconOneLib';
import theme from '../../Global/Styles/theme';
import { responsiveHeight, responsiveWidth } from '../Utils/responsive';

const PLATFORMAPP = Platform.OS

const applyResponsiveValue = (value: undefined | string | number, responsiveFunction: (value: number | string) => number): number | undefined => {
  return value !== undefined ? responsiveFunction(value) : undefined;
};

type ITACKAPP = ViewStyle & ViewProps & {
  children: React.ReactNode;
  space?: number;

  width?: string | number,
  height?: string | number,
  top?: string | number,
  left?: string | number,
  right?: string | number,
  bottom?: string | number,
  padding?: string | number,
  paddingBottom?: string | number,
  paddingHorizontal?: string | number,
  paddingLeft?: string | number,
  paddingRight?: string | number,
  paddingTop?: string | number,
  paddingVertical?: string | number,
  margin?: string | number,
  marginBottom?: string | number,
  marginHorizontal?: string | number,
  marginLeft?: string | number,
  marginRight?: string | number,
  marginTop?: string | number,
  marginVertical?: string | number,
  maxHeight?: string | number,
  maxWidth?: string | number,
  minHeight?: string | number,
  minWidth?: string | number,
}

export function HSTACKAPP({ 
  children, 
  space = 0, 
  width,
  height,
  top,
  left,
  right,
  bottom,
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
  margin,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  style,
  ...rest 
}: ITACKAPP) {
  const applyResponsiveWidth = (value: undefined | string | number) => applyResponsiveValue(value, responsiveWidth);
  const applyResponsiveHeight = (value: undefined | string | number) => applyResponsiveValue(value, responsiveHeight);

  const responsiveWidthValue = width === "100%" ? width : applyResponsiveWidth(width);
  const responsiveHeightValue = height === "100%" ? height : applyResponsiveHeight(height);
  const responsiveSpace = applyResponsiveWidth(space);

  return (
    <View 
      {...rest} 
      style={[{ 
        flexDirection: 'row', 
        columnGap: responsiveSpace,
        width: responsiveWidthValue,
        height: responsiveHeightValue,
        top: applyResponsiveHeight(top),
        left: applyResponsiveWidth(left),
        right: applyResponsiveWidth(right),
        bottom: applyResponsiveHeight(bottom),
        padding: applyResponsiveWidth(padding),
        paddingBottom: applyResponsiveHeight(paddingBottom),
        paddingHorizontal: applyResponsiveWidth(paddingHorizontal),
        paddingLeft: applyResponsiveWidth(paddingLeft),
        paddingRight: applyResponsiveWidth(paddingRight),
        paddingTop: applyResponsiveHeight(paddingTop),
        paddingVertical: applyResponsiveHeight(paddingVertical),
        margin: applyResponsiveWidth(margin),
        marginBottom: applyResponsiveHeight(marginBottom),
        marginHorizontal: applyResponsiveWidth(marginHorizontal),
        marginLeft: applyResponsiveWidth(marginLeft),
        marginRight: applyResponsiveWidth(marginRight),
        marginTop: applyResponsiveHeight(marginTop),
        marginVertical: applyResponsiveHeight(marginVertical),
        maxHeight: applyResponsiveHeight(maxHeight),
        maxWidth: applyResponsiveWidth(maxWidth),
        minHeight: applyResponsiveHeight(minHeight),
        minWidth: applyResponsiveWidth(minWidth),
        ...rest 
      }, style]}
    >
      {children}
    </View>
  );
}

export function VSTACKAPP({ 
  children, 
  space = 0, 
  width,
  height,
  top,
  left,
  right,
  bottom,
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
  margin,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  ...rest 
}: ITACKAPP) {
  const applyResponsiveWidth = (value: undefined | string | number) => applyResponsiveValue(value, responsiveWidth);
  const applyResponsiveHeight = (value: undefined | string | number) => applyResponsiveValue(value, responsiveHeight);

  

  const responsiveWidthValue = width === "100%" ? width : applyResponsiveWidth(width);
  const responsiveHeightValue = height === "100%" ? height : applyResponsiveHeight(height);
  const responsiveSpace = applyResponsiveHeight(space);


  return (
    <View 
      {...rest} 
      style={{ 
        flexDirection: 'column', 
        rowGap: responsiveSpace, 
        width: responsiveWidthValue,
        height: responsiveHeightValue,
        top: applyResponsiveHeight(top),
        left: applyResponsiveWidth(left),
        right: applyResponsiveWidth(right),
        bottom: applyResponsiveHeight(bottom),
        padding: applyResponsiveWidth(padding),
        paddingBottom: applyResponsiveHeight(paddingBottom),
        paddingHorizontal: applyResponsiveWidth(paddingHorizontal),
        paddingLeft: applyResponsiveWidth(paddingLeft),
        paddingRight: applyResponsiveWidth(paddingRight),
        paddingTop: applyResponsiveHeight(paddingTop),
        paddingVertical: applyResponsiveHeight(paddingVertical),
        margin: applyResponsiveWidth(margin),
        marginBottom: applyResponsiveHeight(marginBottom),
        marginHorizontal: applyResponsiveWidth(marginHorizontal),
        marginLeft: applyResponsiveWidth(marginLeft),
        marginRight: applyResponsiveWidth(marginRight),
        marginTop: applyResponsiveHeight(marginTop),
        marginVertical: applyResponsiveHeight(marginVertical),
        maxHeight: applyResponsiveHeight(maxHeight),
        maxWidth: applyResponsiveWidth(maxWidth),
        minHeight: applyResponsiveHeight(minHeight),
        minWidth: applyResponsiveWidth(minWidth),
        ...rest 
      }}
    >
      {children}
    </View>
  );
}

//------------------------------------------------------------------------------------------------------------------

type ICENTERAPP = ViewStyle & ViewProps & {
  children?: ReactNode

  size?: number,
  width?: string | number,
  height?: string | number,
  top?: string | number,
  left?: string | number,
  right?: string | number,
  bottom?: string | number,
  padding?: string | number,
  paddingBottom?: string | number,
  paddingHorizontal?: string | number,
  paddingLeft?: string | number,
  paddingRight?: string | number,
  paddingTop?: string | number,
  paddingVertical?: string | number,
  margin?: string | number,
  marginBottom?: string | number,
  marginHorizontal?: string | number,
  marginLeft?: string | number,
  marginRight?: string | number,
  marginTop?: string | number,
  marginVertical?: string | number,
  maxHeight?: string | number,
  maxWidth?: string | number,
  minHeight?: string | number,
  minWidth?: string | number,
}

export function CENTERAPP({
  children, 
  size,
  width,
  height,
  top,
  left,
  right,
  bottom,
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
  margin,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  style,
  ...res
}: ICENTERAPP) {
  const applyResponsiveWidth = (value: undefined | string | number) => applyResponsiveValue(value, responsiveWidth);
  const applyResponsiveHeight = (value: undefined | string | number) => applyResponsiveValue(value, responsiveHeight);

  const responsiveWidthValue = applyResponsiveWidth(width);
  const responsiveHeightValue = applyResponsiveHeight(height);

  return (
    <View 
      {...res} 
      style={[{
        justifyContent: 'center', 
        alignItems: 'center', 
        width: size ? applyResponsiveWidth(size) : responsiveWidthValue,
        height: size ? applyResponsiveWidth(size) : responsiveHeightValue,
        top: applyResponsiveHeight(top),
        left: applyResponsiveWidth(left),
        right: applyResponsiveWidth(right),
        bottom: applyResponsiveHeight(bottom),
        padding: applyResponsiveWidth(padding),
        paddingBottom: applyResponsiveHeight(paddingBottom),
        paddingHorizontal: applyResponsiveWidth(paddingHorizontal),
        paddingLeft: applyResponsiveWidth(paddingLeft),
        paddingRight: applyResponsiveWidth(paddingRight),
        paddingTop: applyResponsiveHeight(paddingTop),
        paddingVertical: applyResponsiveHeight(paddingVertical),
        margin: applyResponsiveWidth(margin),
        marginBottom: applyResponsiveHeight(marginBottom),
        marginHorizontal: applyResponsiveWidth(marginHorizontal),
        marginLeft: applyResponsiveWidth(marginLeft),
        marginRight: applyResponsiveWidth(marginRight),
        marginTop: applyResponsiveHeight(marginTop),
        marginVertical: applyResponsiveHeight(marginVertical),
        maxHeight: applyResponsiveHeight(maxHeight),
        maxWidth: applyResponsiveWidth(maxWidth),
        minHeight: applyResponsiveHeight(minHeight),
        minWidth: applyResponsiveWidth(minWidth),
        ...res
      }, style]} 
    >
      {children}
    </View>
  )
}

//------------------------------------------------------------------------------------------------------------------

export type IBOXAPP = ViewStyle & ViewProps & {
  children?: ReactNode

  width?: string | number,
  height?: string | number,
  top?: string | number,
  left?: string | number,
  right?: string | number,
  bottom?: string | number,
  padding?: string | number,
  paddingBottom?: string | number,
  paddingHorizontal?: string | number,
  paddingLeft?: string | number,
  paddingRight?: string | number,
  paddingTop?: string | number,
  paddingVertical?: string | number,
  margin?: string | number,
  marginBottom?: string | number,
  marginHorizontal?: string | number,
  marginLeft?: string | number,
  marginRight?: string | number,
  marginTop?: string | number,
  marginVertical?: string | number,
  maxHeight?: string | number,
  maxWidth?: string | number,
  minHeight?: string | number,
  minWidth?: string | number,
}

export function BOXAPP({
  children,

  width,
  height,
  top,
  left,
  right,
  bottom,
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
  margin,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth, 
  style, 
  ...res
}: IBOXAPP) {
  const applyResponsiveWidth = (value: undefined | string | number) => applyResponsiveValue(value, responsiveWidth);
  const applyResponsiveHeight = (value: undefined | string | number) => applyResponsiveValue(value, responsiveHeight);

  const responsiveWidthValue = width === "100%" ? width : applyResponsiveWidth(width);
  const responsiveHeightValue = height === "100%" ? height : applyResponsiveHeight(height);

  return (
    <View {...res}
      style={[{
        width: responsiveWidthValue,
        height: responsiveHeightValue,
        top: applyResponsiveHeight(top),
        left: applyResponsiveWidth(left),
        right: applyResponsiveWidth(right),
        bottom: applyResponsiveHeight(bottom),
        padding: applyResponsiveWidth(padding),
        paddingBottom: applyResponsiveHeight(paddingBottom),
        paddingHorizontal: applyResponsiveWidth(paddingHorizontal),
        paddingLeft: applyResponsiveWidth(paddingLeft),
        paddingRight: applyResponsiveWidth(paddingRight),
        paddingTop: applyResponsiveHeight(paddingTop),
        paddingVertical: applyResponsiveHeight(paddingVertical),
        margin: applyResponsiveWidth(margin),
        marginBottom: applyResponsiveHeight(marginBottom),
        marginHorizontal: applyResponsiveWidth(marginHorizontal),
        marginLeft: applyResponsiveWidth(marginLeft),
        marginRight: applyResponsiveWidth(marginRight),
        marginTop: applyResponsiveHeight(marginTop),
        marginVertical: applyResponsiveHeight(marginVertical),
        maxHeight: applyResponsiveHeight(maxHeight),
        maxWidth: applyResponsiveWidth(maxWidth),
        minHeight: applyResponsiveHeight(minHeight),
        minWidth: applyResponsiveWidth(minWidth),
        ...res
      }, style]}
    >
      {children}
    </View>
  )
}

//------------------------------------------------------------------------------------------------------------------

type IOPACITYAPP = ViewStyle & {
  color: string | undefined
  children?: ReactNode
  opacity?: number
}

export function OPACITYAPP({children, color, opacity = 0.5, ...res}: IOPACITYAPP) {

  return (
    <View 
      {...res} 
      style={{
        opacity,
        position: 'absolute',
        borderRadius: 8,
        width: '100%',
        height: '100%',
        backgroundColor: color,
        ...res
      }}
    >
      {children}
    </View>
  )
}

//------------------------------------------------------------------------------------------------------------------

type IBUTTONAPP = TouchableOpacityProps & ViewStyle & {
  label?: string | number;
  children?: ReactNode;
  activeOpacity?: number;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  space?: number;
  backgroundColor?: string;
  _isLoading?: boolean;
  loadingSize?: 'small' | 'large';
  loadingColor?: string;
  fontSize?: number;
  fontFamily?: 'Ubuntu_300Light' | 'Ubuntu_400Regular' | 'Ubuntu_500Medium' | 'Ubuntu_700Bold';
  fontColor?: string;

  width?: string | number,
  height?: string | number,
  top?: string | number,
  left?: string | number,
  right?: string | number,
  bottom?: string | number,
  padding?: string | number,
  paddingBottom?: string | number,
  paddingHorizontal?: string | number,
  paddingLeft?: string | number,
  paddingRight?: string | number,
  paddingTop?: string | number,
  paddingVertical?: string | number,
  margin?: string | number,
  marginBottom?: string | number,
  marginHorizontal?: string | number,
  marginLeft?: string | number,
  marginRight?: string | number,
  marginTop?: string | number,
  marginVertical?: string | number,
  maxHeight?: string | number,
  maxWidth?: string | number,
  minHeight?: string | number,
  minWidth?: string | number,
}

export function BUTTONAPP({ 
  label, fontSize, fontFamily, fontColor, children, _isLoading = false, loadingSize, loadingColor, backgroundColor, leftIcon, rightIcon, activeOpacity = 0.5, space = 0,

  width,
  height = 5.2,
  top,
  left,
  right,
  bottom,
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
  margin,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,  
  ...rest 
}: IBUTTONAPP ) {
  // const memoizedHeight = useMemo(() => responsiveHeight(5), []);
  const applyResponsiveWidth = (value: undefined | string | number) => applyResponsiveValue(value, responsiveWidth);
  const applyResponsiveHeight = (value: undefined | string | number) => applyResponsiveValue(value, responsiveHeight);

  const responsiveHeightValue = applyResponsiveHeight(height);
  const responsiveWidthValue = width === "100%" ? width : applyResponsiveWidth(width);
  const responsiveSpace = applyResponsiveWidth(space);

  return (
    <TouchableOpacity 
      {...rest}
      activeOpacity={activeOpacity} 
      style={{
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row',
        columnGap: responsiveSpace,
        backgroundColor,
        borderRadius: 8,
        height: responsiveHeightValue,
        width: responsiveWidthValue,
        top: applyResponsiveHeight(top),
        left: applyResponsiveWidth(left),
        right: applyResponsiveWidth(right),
        bottom: applyResponsiveHeight(bottom),
        padding: applyResponsiveWidth(padding),
        paddingBottom: applyResponsiveHeight(paddingBottom),
        paddingHorizontal: applyResponsiveWidth(paddingHorizontal),
        paddingLeft: applyResponsiveWidth(paddingLeft),
        paddingRight: applyResponsiveWidth(paddingRight),
        paddingTop: applyResponsiveHeight(paddingTop),
        paddingVertical: applyResponsiveHeight(paddingVertical),
        margin: applyResponsiveWidth(margin),
        marginBottom: applyResponsiveHeight(marginBottom),
        marginHorizontal: applyResponsiveWidth(marginHorizontal),
        marginLeft: applyResponsiveWidth(marginLeft),
        marginRight: applyResponsiveWidth(marginRight),
        marginTop: applyResponsiveHeight(marginTop),
        marginVertical: applyResponsiveHeight(marginVertical),
        maxHeight: applyResponsiveHeight(maxHeight),
        maxWidth: applyResponsiveWidth(maxWidth),
        minHeight: applyResponsiveHeight(minHeight),
        minWidth: applyResponsiveWidth(minWidth),
        ...rest
      }}
    >
      {!_isLoading && (
        <>
          {leftIcon}
          { children ? children : <TEXTAPP label={label} fontFamily={fontFamily} fontSize={fontSize} color={fontColor}/> }
          {rightIcon}
        </>
      )}
      {_isLoading && (
        <ActivityIndicator size={loadingSize} color={loadingColor} animating={_isLoading}/>
      )}
    </TouchableOpacity>
  );
}

//------------------------------------------------------------------------------------------------------------------

type ITEXTAPP = TextStyle & ViewStyle & {
  label: string | number | null | boolean | undefined
  fontSize?: number
  fontFamily?: 'Ubuntu_300Light' | 'Ubuntu_400Regular' | 'Ubuntu_500Medium' | 'Ubuntu_700Bold',
  color?: string
  onPress?: ((event: GestureResponderEvent) => void) | undefined

  width?: string | number,
  height?: string | number,
  top?: string | number,
  left?: string | number,
  right?: string | number,
  bottom?: string | number,
  padding?: string | number,
  paddingBottom?: string | number,
  paddingHorizontal?: string | number,
  paddingLeft?: string | number,
  paddingRight?: string | number,
  paddingTop?: string | number,
  paddingVertical?: string | number,
  margin?: string | number,
  marginBottom?: string | number,
  marginHorizontal?: string | number,
  marginLeft?: string | number,
  marginRight?: string | number,
  marginTop?: string | number,
  marginVertical?: string | number,
  maxHeight?: string | number,
  maxWidth?: string | number,
  minHeight?: string | number,
  minWidth?: string | number,
}

export function TEXTAPP({
  onPress, 
  label, 
  fontSize = 4, 
  fontFamily = 'Ubuntu_500Medium', 
  color = theme.shade.shade_2, 

  top,
  left,
  right,
  bottom,
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
  margin,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  ...res
}: ITEXTAPP ) {
  const applyResponsiveWidth = (value: undefined | string | number) => applyResponsiveValue(value, responsiveWidth);
  const applyResponsiveHeight = (value: undefined | string | number) => applyResponsiveValue(value, responsiveHeight);

  return (
    <Text 
      onPress={onPress}
      style={{
        fontSize: applyResponsiveWidth(fontSize),
        fontFamily,
        color: color,

        top: applyResponsiveHeight(top),
        left: applyResponsiveWidth(left),
        right: applyResponsiveWidth(right),
        bottom: applyResponsiveHeight(bottom),
        padding: applyResponsiveWidth(padding),
        paddingBottom: applyResponsiveHeight(paddingBottom),
        paddingHorizontal: applyResponsiveWidth(paddingHorizontal),
        paddingLeft: applyResponsiveWidth(paddingLeft),
        paddingRight: applyResponsiveWidth(paddingRight),
        paddingTop: applyResponsiveHeight(paddingTop),
        paddingVertical: applyResponsiveHeight(paddingVertical),
        margin: applyResponsiveWidth(margin),
        marginBottom: applyResponsiveHeight(marginBottom),
        marginHorizontal: applyResponsiveWidth(marginHorizontal),
        marginLeft: applyResponsiveWidth(marginLeft),
        marginRight: applyResponsiveWidth(marginRight),
        marginTop: applyResponsiveHeight(marginTop),
        marginVertical: applyResponsiveHeight(marginVertical),
        maxHeight: applyResponsiveHeight(maxHeight),
        maxWidth: applyResponsiveWidth(maxWidth),
        minHeight: applyResponsiveHeight(minHeight),
        minWidth: applyResponsiveWidth(minWidth),
        ...res
      }}
    >
      {label}
    </Text>
  );
}

//------------------------------------------------------------------------------------------------------------------

export type IPRESSABLEAPP = TouchableOpacityProps & ViewStyle & {
  activeOpacity?: number;
  children?: ReactNode;

  width?: string | number,
  height?: string | number,
  top?: string | number,
  left?: string | number,
  right?: string | number,
  bottom?: string | number,
  padding?: string | number,
  paddingBottom?: string | number,
  paddingHorizontal?: string | number,
  paddingLeft?: string | number,
  paddingRight?: string | number,
  paddingTop?: string | number,
  paddingVertical?: string | number,
  margin?: string | number,
  marginBottom?: string | number,
  marginHorizontal?: string | number,
  marginLeft?: string | number,
  marginRight?: string | number,
  marginTop?: string | number,
  marginVertical?: string | number,
  maxHeight?: string | number,
  maxWidth?: string | number,
  minHeight?: string | number,
  minWidth?: string | number,
}

export function PRESSABLEAPP({
  children, 
  activeOpacity = 0.5,

  // width,
  // height,
  top,
  left,
  right,
  bottom,
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
  margin,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  ...res
}: IPRESSABLEAPP ) {
  const applyResponsiveWidth = (value: undefined | string | number) => applyResponsiveValue(value, responsiveWidth);
  const applyResponsiveHeight = (value: undefined | string | number) => applyResponsiveValue(value, responsiveHeight);

  return (
    <TouchableOpacity 
      activeOpacity={activeOpacity} 
      style={{
        top: applyResponsiveHeight(top),
        left: applyResponsiveWidth(left),
        right: applyResponsiveWidth(right),
        bottom: applyResponsiveHeight(bottom),
        padding: applyResponsiveWidth(padding),
        paddingBottom: applyResponsiveHeight(paddingBottom),
        paddingHorizontal: applyResponsiveWidth(paddingHorizontal),
        paddingLeft: applyResponsiveWidth(paddingLeft),
        paddingRight: applyResponsiveWidth(paddingRight),
        paddingTop: applyResponsiveHeight(paddingTop),
        paddingVertical: applyResponsiveHeight(paddingVertical),
        margin: applyResponsiveWidth(margin),
        marginBottom: applyResponsiveHeight(marginBottom),
        marginHorizontal: applyResponsiveWidth(marginHorizontal),
        marginLeft: applyResponsiveWidth(marginLeft),
        marginRight: applyResponsiveWidth(marginRight),
        marginTop: applyResponsiveHeight(marginTop),
        marginVertical: applyResponsiveHeight(marginVertical),
        maxHeight: applyResponsiveHeight(maxHeight),
        maxWidth: applyResponsiveWidth(maxWidth),
        minHeight: applyResponsiveHeight(minHeight),
        minWidth: applyResponsiveWidth(minWidth),
        ...res
      }}
      {...res}
    >
      {children}
    </TouchableOpacity>
  );
}

//------------------------------------------------------------------------------------------------------------------

interface IAVATARAPP extends ImageStyle {
  source: ImageSourcePropType
  size?: number 
}

export function AVATARAPP({source, size = 10, ...res}: IAVATARAPP ) {

  return (
    <Animated.Image 
      {...res}
      source={source}
      style={{
        borderRadius: 100,
        height: responsiveWidth(size),
        width: responsiveWidth(size)
      }}
    >
      
    </Animated.Image>
  );
}

//------------------------------------------------------------------------------------------------------------------

interface IIMAGEAPP extends ImageStyle {
  source: ImageSourcePropType
}

export function IMAGEAPP({source, ...res}: IIMAGEAPP ) {

  return (
    <Image 
      {...res}
      source={source}
      style={{...res}}
    >
      
    </Image>
  );
}

//------------------------------------------------------------------------------------------------------------------

interface IIMAGEBACKGROUNDAPP extends ImageBackgroundProps {

}

export function IMAGEBACKGROUNDAPP({...res}: IIMAGEBACKGROUNDAPP ) {

  return (
    <ImageBackground 
      {...res}
    >
      
    </ImageBackground>
  );
}

//------------------------------------------------------------------------------------------------------------------

type IICONAPP = TouchableOpacityProps & ViewStyle & {
  Icon({ weight, color, size, style, mirrored }: IconProps): JSX.Element
  size?: number
  weight?: IconWeight | undefined
  color?: string
}

export function ICONAPP({Icon, size, weight, color, ...res}: IICONAPP ) {

  return (
    <PRESSABLEAPP 
      {...res}
      style={{...res}}
    >
      <Icon 
        color={color ? color : theme.shade.shade_5} 
        weight={weight ? weight : "bold"} 
        size={size ? size : 24}
      />
    </PRESSABLEAPP>
  );
}

//------------------------------------------------------------------------------------------------------------------

type IINPUTAPP = TextInputProps & ViewStyle & {
  fontSize?: number
  fontFamily?: 'Ubuntu_300Light' | 'Ubuntu_400Regular' | 'Ubuntu_500Medium' | 'Ubuntu_700Bold',
  InputRightElement?: JSX.Element | undefined | null
  InputLeftElement?: JSX.Element | undefined | null
  backgroundColor?: string
  color?: string
  error?: boolean | undefined | null
  message?: string
  flex?: number
  height?: number | string | undefined
  errorPosition?: 'top' | 'bottom'
}

export function INPUTAPP({errorPosition = "bottom", flex= 0, height= undefined, fontSize = 3.5, fontFamily = 'Ubuntu_500Medium', backgroundColor= theme.shade.shade_10, color= theme.shade.shade_2, style, InputLeftElement, InputRightElement, error = false, message, ...res}: IINPUTAPP ) {

  const applyResponsiveWidth = (value: undefined | string | number) => applyResponsiveValue(value, responsiveWidth);
  const applyResponsiveHeight = (value: undefined | string | number) => applyResponsiveValue(value, responsiveHeight);

  return (
    <View style={{flexDirection: 'column', rowGap: responsiveHeight(0.5), flex: flex}}>
      {error && errorPosition === "top" &&
        <BOXANIMATEDAPP
          animationEntering={FadeIn}
          animationExiting={FadeOut.duration(10)}
        >
          <Text
            style={{
              fontFamily: 'Ubuntu_300Light',
              fontSize: applyResponsiveWidth(3),
              color: theme.error.error_1,
            }}
          >
            {message}
          </Text>
        </BOXANIMATEDAPP>
      }
      <View style={{
          alignItems: 'center', flexDirection: 'row', 
          backgroundColor, borderRadius: 8, 
          paddingRight: applyResponsiveWidth(InputRightElement ? 2 : 0),
          paddingLeft: applyResponsiveWidth(InputLeftElement ? 3 : 0)
        }}
      >
        <View 
          style={{
            zIndex: 1
          }}
        >
          {InputLeftElement}
        </View>
        <TextInput
          {...res}
          autoCapitalize={'none'}
          placeholderTextColor={theme.shade.shade_6}
          style={[
            {
              flex: 1,
              backgroundColor,
              paddingHorizontal: applyResponsiveWidth(InputLeftElement ? 2 : 4),
              paddingVertical: applyResponsiveHeight(PLATFORMAPP === 'ios' ? 1.3 : 0.70),
              fontSize: applyResponsiveWidth(fontSize),
              color,
              borderRadius: 8,
              fontFamily,
              height: applyResponsiveHeight(height),
            },
            style
          ]}
        />
        <View>
          {InputRightElement}
        </View>
      </View>
      {error && errorPosition === "bottom" && message &&
        <BOXANIMATEDAPP
          animationEntering={FadeIn}
          animationExiting={FadeOut.duration(10)}
        >
          <Text
            style={{
              fontFamily: 'Ubuntu_300Light',
              fontSize: applyResponsiveWidth(3),
              color: theme.error.error_1,
            }}
          >
            {message}
          </Text>
        </BOXANIMATEDAPP>
      }
    </View>
  );
}

//------------------------------------------------------------------------------------------------------------------

type IINPUTFORMAPP = TextInputProps & ViewStyle & {
  //----------------label props----------------
  label?: string | number | null | undefined
  LabelFontSize?: number
  LabelFontFamily?: 'Ubuntu_300Light' | 'Ubuntu_400Regular' | 'Ubuntu_500Medium' | 'Ubuntu_700Bold',
  LabelColor?: string
  //----------------label props----------------
  fontSize?: number
  fontFamily?: 'Ubuntu_300Light' | 'Ubuntu_400Regular' | 'Ubuntu_500Medium' | 'Ubuntu_700Bold',
  maxHeight?: string | number
  height?: number | string | undefined
  color?: string
  backgroundColor?: string
  widthContainer?: number | string
  flexContainer?: number
  error?: string | undefined
}

export function INPUTFORMAPP({label,
  LabelFontSize = 3.5, 
  LabelFontFamily = 'Ubuntu_500Medium', 
  widthContainer,
  flexContainer,
  LabelColor = theme.shade.shade_2,  fontSize = 3.5, height = undefined, fontFamily = 'Ubuntu_500Medium', backgroundColor= theme.shade.shade_10, color= theme.shade.shade_2, maxHeight, style, error, ...res}: IINPUTFORMAPP ) {

  const applyResponsiveWidth = (value: undefined | string | number) => applyResponsiveValue(value, responsiveWidth);
  const applyResponsiveHeight = (value: undefined | string | number) => applyResponsiveValue(value, responsiveHeight);

  return (
    <View style={{width: widthContainer, flex: flexContainer, marginTop: label ? applyResponsiveHeight(1) : undefined}}>
      {label && 
        <Text
          style={{
            fontSize: applyResponsiveWidth(LabelFontSize),
            fontFamily: LabelFontFamily,
            color: LabelColor,
            marginBottom: applyResponsiveHeight(1)
          }}
        >
          {label}
        </Text>
      }
      <TextInput
        {...res}
        multiline={maxHeight ? true : undefined}
        placeholderTextColor={theme.shade.shade_4}
        autoCapitalize={'none'}
        style={[
          {
            backgroundColor,
            borderRadius: 8,
            fontSize: applyResponsiveWidth(fontSize),
            color,
            fontFamily,
            maxHeight,
            height: applyResponsiveHeight(height),
            paddingHorizontal: applyResponsiveWidth(2.5),
            paddingVertical: applyResponsiveHeight(PLATFORMAPP === 'ios' ? 1.3 : 0.70),
            borderColor: theme.error.error_1,
            borderWidth: error ? 1 : undefined
          },
          style
        ]}
      />
    </View>
  );
}

//------------------------------------------------------------------------------------------------------------------

type IPROGRESSAPP = ViewStyle & {
  progress: number,
  backgroundColor?: string 
  progressColor?: string 
}

export function PROGRESSAPP({progress, backgroundColor = theme.shade.shade_10, progressColor = theme.base.base_2, ...res}: IPROGRESSAPP ) {

  return (
    <View {...res} 
      style={{    
        backgroundColor,
        borderRadius: 5,
        height: responsiveHeight(0.6),
        overflow: 'hidden'
      }}
    >
      <View 
        style={{ 
          width: `${progress}%`,     
          backgroundColor: progressColor,
          height: '100%',
          borderRadius: 100 
        }} 
      />
    </View>
  );
}

//------------------------------------------------------------------------------------------------------------------

type ISECTIONLISTAPP = SectionListProps<SectionList> & ViewStyle & {

  width?: string | number,
  height?: string | number,
  top?: string | number,
  left?: string | number,
  right?: string | number,
  bottom?: string | number,
  padding?: string | number,
  paddingBottom?: string | number,
  paddingHorizontal?: string | number,
  paddingLeft?: string | number,
  paddingRight?: string | number,
  paddingTop?: string | number,
  paddingVertical?: string | number,
  margin?: string | number,
  marginBottom?: string | number,
  marginHorizontal?: string | number,
  marginLeft?: string | number,
  marginRight?: string | number,
  marginTop?: string | number,
  marginVertical?: string | number,
  maxHeight?: string | number,
  maxWidth?: string | number,
  minHeight?: string | number,
  minWidth?: string | number,
}

export function SECTIONLISTAPP({
  top,
  left,
  right,
  bottom,
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
  margin,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  style,
  ...res
}: ISECTIONLISTAPP ) {
  const applyResponsiveWidth = (value: undefined | string | number) => applyResponsiveValue(value, responsiveWidth);
  const applyResponsiveHeight = (value: undefined | string | number) => applyResponsiveValue(value, responsiveHeight);

  return (
    <SectionList 
      {...res}
      style={[
        {
          top: applyResponsiveHeight(top),
          left: applyResponsiveWidth(left),
          right: applyResponsiveWidth(right),
          bottom: applyResponsiveHeight(bottom),
          padding: applyResponsiveWidth(padding),
          paddingBottom: applyResponsiveHeight(paddingBottom),
          paddingHorizontal: applyResponsiveWidth(paddingHorizontal),
          paddingLeft: applyResponsiveWidth(paddingLeft),
          paddingRight: applyResponsiveWidth(paddingRight),
          paddingTop: applyResponsiveHeight(paddingTop),
          paddingVertical: applyResponsiveHeight(paddingVertical),
          margin: applyResponsiveWidth(margin),
          marginBottom: applyResponsiveHeight(marginBottom),
          marginHorizontal: applyResponsiveWidth(marginHorizontal),
          marginLeft: applyResponsiveWidth(marginLeft),
          marginRight: applyResponsiveWidth(marginRight),
          marginTop: applyResponsiveHeight(marginTop),
          marginVertical: applyResponsiveHeight(marginVertical),
          maxHeight: applyResponsiveHeight(maxHeight),
          maxWidth: applyResponsiveWidth(maxWidth),
          minHeight: applyResponsiveHeight(minHeight),
          minWidth: applyResponsiveWidth(minWidth),
        }, 
        style
      ]}
    />
  );
}

//------------------------------------------------------------------------------------------------------------------

type ISCROLLVIEW = ScrollViewProps & ViewStyle & {
  width?: string | number,
  height?: string | number,
  top?: string | number,
  left?: string | number,
  right?: string | number,
  bottom?: string | number,
  padding?: string | number,
  paddingBottom?: string | number,
  paddingHorizontal?: string | number,
  paddingLeft?: string | number,
  paddingRight?: string | number,
  paddingTop?: string | number,
  paddingVertical?: string | number,
  margin?: string | number,
  marginBottom?: string | number,
  marginHorizontal?: string | number,
  marginLeft?: string | number,
  marginRight?: string | number,
  marginTop?: string | number,
  marginVertical?: string | number,
  maxHeight?: string | number,
  maxWidth?: string | number,
  minHeight?: string | number,
  minWidth?: string | number,
}

export function SCROLLVIEW({
  top,
  left,
  right,
  bottom,
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
  margin,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  style,
  ...res
}: ISCROLLVIEW ) {
  const applyResponsiveWidth = (value: undefined | string | number) => applyResponsiveValue(value, responsiveWidth);
  const applyResponsiveHeight = (value: undefined | string | number) => applyResponsiveValue(value, responsiveHeight);

  return (
    <ScrollView 
      {...res}
      style={[
        {
          top: applyResponsiveHeight(top),
          left: applyResponsiveWidth(left),
          right: applyResponsiveWidth(right),
          bottom: applyResponsiveHeight(bottom),
          padding: applyResponsiveWidth(padding),
          paddingBottom: applyResponsiveHeight(paddingBottom),
          paddingHorizontal: applyResponsiveWidth(paddingHorizontal),
          paddingLeft: applyResponsiveWidth(paddingLeft),
          paddingRight: applyResponsiveWidth(paddingRight),
          paddingTop: applyResponsiveHeight(paddingTop),
          paddingVertical: applyResponsiveHeight(paddingVertical),
          margin: applyResponsiveWidth(margin),
          marginBottom: applyResponsiveHeight(marginBottom),
          marginHorizontal: applyResponsiveWidth(marginHorizontal),
          marginLeft: applyResponsiveWidth(marginLeft),
          marginRight: applyResponsiveWidth(marginRight),
          marginTop: applyResponsiveHeight(marginTop),
          marginVertical: applyResponsiveHeight(marginVertical),
          maxHeight: applyResponsiveHeight(maxHeight),
          maxWidth: applyResponsiveWidth(maxWidth),
          minHeight: applyResponsiveHeight(minHeight),
          minWidth: applyResponsiveWidth(minWidth),
        }, 
        style
      ]}
    />
  );
}

//----------------------------------------------------ANIMATIONS-----------------------------------------------------
//----------------------------------------------------ANIMATIONS-----------------------------------------------------
//----------------------------------------------------ANIMATIONS-----------------------------------------------------
//----------------------------------------------------ANIMATIONS-----------------------------------------------------
//----------------------------------------------------ANIMATIONS-----------------------------------------------------
//----------------------------------------------------ANIMATIONS-----------------------------------------------------

const ImageAnimated = Animated.createAnimatedComponent(Image)

type IIMAGEANIMATEDAPP = ImageProps & ViewStyle &  {
  source: ImageSourcePropType
  animatedStyleImage: AnimatedStyleProp<ImageStyle>
}

export function IMAGEANIMATEDAPP({animatedStyleImage, source, ...res}: IIMAGEANIMATEDAPP ) {

  return (
    <ImageAnimated 
      {...res}
      source={source}
      style={[animatedStyleImage]}
    >
      
    </ImageAnimated>
  );
}

//------------------------------------------------------------------------------------------------------------------
const BoxAnimated = Animated.createAnimatedComponent(View)

type IBOXANIMATEDAPP = ViewStyle & {
  animatedStyleBox?: { height: number } | {transform: {rotateZ: string}[]} | {padding: number}
  children?: ReactNode
  animationEntering?: any
  animationExiting?: any
  layout?: BaseAnimationBuilder | LayoutAnimationFunction | typeof BaseAnimationBuilder | undefined

  width?: string | number,
  height?: string | number,
  top?: string | number,
  left?: string | number,
  right?: string | number,
  bottom?: string | number,
  padding?: string | number,
  paddingBottom?: string | number,
  paddingHorizontal?: string | number,
  paddingLeft?: string | number,
  paddingRight?: string | number,
  paddingTop?: string | number,
  paddingVertical?: string | number,
  margin?: string | number,
  marginBottom?: string | number,
  marginHorizontal?: string | number,
  marginLeft?: string | number,
  marginRight?: string | number,
  marginTop?: string | number,
  marginVertical?: string | number,
  maxHeight?: string | number,
  maxWidth?: string | number,
  minHeight?: string | number,
  minWidth?: string | number,
}

export function BOXANIMATEDAPP({
  children, 
  animatedStyleBox, 
  animationEntering, 
  animationExiting, 
  layout,

  top,
  left,
  right,
  bottom,
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
  margin,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth, 
  ...res
}: IBOXANIMATEDAPP) {
  const applyResponsiveWidth = (value: undefined | string | number) => applyResponsiveValue(value, responsiveWidth);
  const applyResponsiveHeight = (value: undefined | string | number) => applyResponsiveValue(value, responsiveHeight);

  return (
    <BoxAnimated 
      {...res}
      entering={animationEntering}
      exiting={animationExiting}
      style={[{
        top: applyResponsiveHeight(top),
        left: applyResponsiveWidth(left),
        right: applyResponsiveWidth(right),
        bottom: applyResponsiveHeight(bottom),
        padding: applyResponsiveWidth(padding),
        paddingBottom: applyResponsiveHeight(paddingBottom),
        paddingHorizontal: applyResponsiveWidth(paddingHorizontal),
        paddingLeft: applyResponsiveWidth(paddingLeft),
        paddingRight: applyResponsiveWidth(paddingRight),
        paddingTop: applyResponsiveHeight(paddingTop),
        paddingVertical: applyResponsiveHeight(paddingVertical),
        margin: applyResponsiveWidth(margin),
        marginBottom: applyResponsiveHeight(marginBottom),
        marginHorizontal: applyResponsiveWidth(marginHorizontal),
        marginLeft: applyResponsiveWidth(marginLeft),
        marginRight: applyResponsiveWidth(marginRight),
        marginTop: applyResponsiveHeight(marginTop),
        marginVertical: applyResponsiveHeight(marginVertical),
        maxHeight: applyResponsiveHeight(maxHeight),
        maxWidth: applyResponsiveWidth(maxWidth),
        minHeight: applyResponsiveHeight(minHeight),
        minWidth: applyResponsiveWidth(minWidth),
        ...res
      }, animatedStyleBox]}
      layout={layout}
    >
      {children}
    </BoxAnimated>
  )
}

//------------------------------------------------------------------------------------------------------------------
const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity)

type IPRESSABLEANIMATEDAPP = TouchableOpacityProps & ViewStyle & {
  children: ReactNode 
  animationEntering?: any
  animationExiting?: any
  animatedStyleBox?: { height: number } | {transform: {rotateZ: string}[]} 
  layout?: BaseAnimationBuilder | LayoutAnimationFunction | typeof BaseAnimationBuilder | undefined

  width?: string | number,
  height?: string | number,
  top?: string | number,
  left?: string | number,
  right?: string | number,
  bottom?: string | number,
  padding?: string | number,
  paddingBottom?: string | number,
  paddingHorizontal?: string | number,
  paddingLeft?: string | number,
  paddingRight?: string | number,
  paddingTop?: string | number,
  paddingVertical?: string | number,
  margin?: string | number,
  marginBottom?: string | number,
  marginHorizontal?: string | number,
  marginLeft?: string | number,
  marginRight?: string | number,
  marginTop?: string | number,
  marginVertical?: string | number,
  maxHeight?: string | number,
  maxWidth?: string | number,
  minHeight?: string | number,
  minWidth?: string | number,
}

export function PRESSABLEANIMATEDAPP({
  children, 
  animatedStyleBox, 
  animationEntering, 
  animationExiting, 
  layout,

  width,
  height,
  top,
  left,
  right,
  bottom,
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
  margin,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth, 
  ...res
}: IPRESSABLEANIMATEDAPP) {
  const applyResponsiveWidth = (value: undefined | string | number) => applyResponsiveValue(value, responsiveWidth);
  const applyResponsiveHeight = (value: undefined | string | number) => applyResponsiveValue(value, responsiveHeight);

  return (
    <TouchableOpacityAnimated 
      {...res}
      entering={animationEntering}
      exiting={animationExiting}
      style={[animatedStyleBox, {
        top: applyResponsiveHeight(top),
        left: applyResponsiveWidth(left),
        right: applyResponsiveWidth(right),
        bottom: applyResponsiveHeight(bottom),
        padding: applyResponsiveWidth(padding),
        paddingBottom: applyResponsiveHeight(paddingBottom),
        paddingHorizontal: applyResponsiveWidth(paddingHorizontal),
        paddingLeft: applyResponsiveWidth(paddingLeft),
        paddingRight: applyResponsiveWidth(paddingRight),
        paddingTop: applyResponsiveHeight(paddingTop),
        paddingVertical: applyResponsiveHeight(paddingVertical),
        margin: applyResponsiveWidth(margin),
        marginBottom: applyResponsiveHeight(marginBottom),
        marginHorizontal: applyResponsiveWidth(marginHorizontal),
        marginLeft: applyResponsiveWidth(marginLeft),
        marginRight: applyResponsiveWidth(marginRight),
        marginTop: applyResponsiveHeight(marginTop),
        marginVertical: applyResponsiveHeight(marginVertical),
        maxHeight: applyResponsiveHeight(maxHeight),
        maxWidth: applyResponsiveWidth(maxWidth),
        minHeight: applyResponsiveHeight(minHeight),
        minWidth: applyResponsiveWidth(minWidth),
        ...res
      }]}
      layout={layout}
    >
      {children}
    </TouchableOpacityAnimated>
  )
}

//------------------------------------------------------------------------------------------------------------------
const CenterAnimated = Animated.createAnimatedComponent(View)

type ICENTERANIMATEDAPP = ViewStyle & {
  children: ReactNode 
  animationEntering?: any
  animationExiting?: any
  animatedStyleCenter?: { height: number } | {transform: {rotateZ: string}[]} 
  layout?: BaseAnimationBuilder | LayoutAnimationFunction | typeof BaseAnimationBuilder | undefined

  width?: string | number,
  height?: string | number,
  top?: string | number,
  left?: string | number,
  right?: string | number,
  bottom?: string | number,
  padding?: string | number,
  paddingBottom?: string | number,
  paddingHorizontal?: string | number,
  paddingLeft?: string | number,
  paddingRight?: string | number,
  paddingTop?: string | number,
  paddingVertical?: string | number,
  margin?: string | number,
  marginBottom?: string | number,
  marginHorizontal?: string | number,
  marginLeft?: string | number,
  marginRight?: string | number,
  marginTop?: string | number,
  marginVertical?: string | number,
  maxHeight?: string | number,
  maxWidth?: string | number,
  minHeight?: string | number,
  minWidth?: string | number,
}

export function CENTERANIMATEDAPP({
  children, 
  animatedStyleCenter, 
  animationEntering, 
  animationExiting, 
  layout,

  width,
  height,
  top,
  left,
  right,
  bottom,
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
  margin,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth, 
  ...res
}: ICENTERANIMATEDAPP) {
  const applyResponsiveWidth = (value: undefined | string | number) => applyResponsiveValue(value, responsiveWidth);
  const applyResponsiveHeight = (value: undefined | string | number) => applyResponsiveValue(value, responsiveHeight);

  return (
    <CenterAnimated 
      {...res}
      entering={animationEntering}
      exiting={animationExiting}
      style={[animatedStyleCenter, {
        justifyContent: 'center', 
        alignItems: 'center',
        top: applyResponsiveHeight(top),
        left: applyResponsiveWidth(left),
        right: applyResponsiveWidth(right),
        bottom: applyResponsiveHeight(bottom),
        padding: applyResponsiveWidth(padding),
        paddingBottom: applyResponsiveHeight(paddingBottom),
        paddingHorizontal: applyResponsiveWidth(paddingHorizontal),
        paddingLeft: applyResponsiveWidth(paddingLeft),
        paddingRight: applyResponsiveWidth(paddingRight),
        paddingTop: applyResponsiveHeight(paddingTop),
        paddingVertical: applyResponsiveHeight(paddingVertical),
        margin: applyResponsiveWidth(margin),
        marginBottom: applyResponsiveHeight(marginBottom),
        marginHorizontal: applyResponsiveWidth(marginHorizontal),
        marginLeft: applyResponsiveWidth(marginLeft),
        marginRight: applyResponsiveWidth(marginRight),
        marginTop: applyResponsiveHeight(marginTop),
        marginVertical: applyResponsiveHeight(marginVertical),
        maxHeight: applyResponsiveHeight(maxHeight),
        maxWidth: applyResponsiveWidth(maxWidth),
        minHeight: applyResponsiveHeight(minHeight),
        minWidth: applyResponsiveWidth(minWidth),
        ...res
      }]}
      layout={layout}
    >
      {children}
    </CenterAnimated>
  )
}

//------------------------------------------------------------------------------------------------------------------
const HSTackAnimated = Animated.createAnimatedComponent(View)

type IHSTACKANIMATEDAPP = ViewStyle & ViewProps & {
  space?: number;
  animatedStyleBox?: { height: number } | {transform: {rotateZ: string}[]} | {padding: number}
  children?: ReactNode
  animationEntering?: any
  animationExiting?: any
  layout?: BaseAnimationBuilder | LayoutAnimationFunction | typeof BaseAnimationBuilder | undefined
  width?: string | number,
  height?: string | number,
  top?: string | number,
  left?: string | number,
  right?: string | number,
  bottom?: string | number,
  padding?: string | number,
  paddingBottom?: string | number,
  paddingHorizontal?: string | number,
  paddingLeft?: string | number,
  paddingRight?: string | number,
  paddingTop?: string | number,
  paddingVertical?: string | number,
  margin?: string | number,
  marginBottom?: string | number,
  marginHorizontal?: string | number,
  marginLeft?: string | number,
  marginRight?: string | number,
  marginTop?: string | number,
  marginVertical?: string | number,
  maxHeight?: string | number,
  maxWidth?: string | number,
  minHeight?: string | number,
  minWidth?: string | number,
}

export function HSTACKANIMATEDAPP({
  children, 
  space = 0, 
  animatedStyleBox, 
  animationEntering, 
  animationExiting, 
  layout,
  top,
  left,
  right,
  bottom,
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
  margin,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth, 
  style,
  ...res
}: IHSTACKANIMATEDAPP) {
  const applyResponsiveWidth = (value: undefined | string | number) => applyResponsiveValue(value, responsiveWidth);
  const applyResponsiveHeight = (value: undefined | string | number) => applyResponsiveValue(value, responsiveHeight);
  const responsiveSpace = applyResponsiveWidth(space);

  return (
    <HSTackAnimated 
      {...res}
      entering={animationEntering}
      exiting={animationExiting}
      style={[animatedStyleBox, {
        flexDirection: 'row', 
        columnGap: responsiveSpace,
        top: applyResponsiveHeight(top),
        left: applyResponsiveWidth(left),
        right: applyResponsiveWidth(right),
        bottom: applyResponsiveHeight(bottom),
        padding: applyResponsiveWidth(padding),
        paddingBottom: applyResponsiveHeight(paddingBottom),
        paddingHorizontal: applyResponsiveWidth(paddingHorizontal),
        paddingLeft: applyResponsiveWidth(paddingLeft),
        paddingRight: applyResponsiveWidth(paddingRight),
        paddingTop: applyResponsiveHeight(paddingTop),
        paddingVertical: applyResponsiveHeight(paddingVertical),
        margin: applyResponsiveWidth(margin),
        marginBottom: applyResponsiveHeight(marginBottom),
        marginHorizontal: applyResponsiveWidth(marginHorizontal),
        marginLeft: applyResponsiveWidth(marginLeft),
        marginRight: applyResponsiveWidth(marginRight),
        marginTop: applyResponsiveHeight(marginTop),
        marginVertical: applyResponsiveHeight(marginVertical),
        maxHeight: applyResponsiveHeight(maxHeight),
        maxWidth: applyResponsiveWidth(maxWidth),
        minHeight: applyResponsiveHeight(minHeight),
        minWidth: applyResponsiveWidth(minWidth),
        ...res
      }, style]}
      layout={layout}
    >
      {children}
    </HSTackAnimated>
  )
}