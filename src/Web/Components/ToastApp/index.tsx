import React, { useEffect, useState, useRef } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import theme from '../../../Global/theme';

const ToastApp = ({ type, label, visible, onHide }) => {
  const [show, setShow] = useState(visible);
  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (visible) {
      setShow(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(slideAnim, {
            toValue: -100,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            setShow(false);
            onHide && onHide();
          });
        }, 3000); // Toast will be visible for 3 seconds
      });
    }
  }, [visible]);

  if (!show) return null;

  return (
    <Animated.View style={[styles.toast, { transform: [{ translateY: slideAnim }] }, styles[type]]}>
      <Text style={styles.text}>{label}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    height: 55, 
    width: "28%", 
    borderRadius: 8,
    position: "absolute",
    right: 40,
    top: 20,
    borderLeftWidth: 6,
    justifyContent: "center",
    zIndex: 40
  },
  text: {
    color: theme.text.text_4,
    fontFamily: theme.fonts.Poppins_500Medium,
    fontSize: 16,
    marginLeft: 16
  },
  success: {
    borderColor: theme.status.finished,
    backgroundColor: theme.backStatus.finished
  },
  error: {
    borderColor: theme.status.error,
    backgroundColor: theme.backStatus.error
  },
  info: {
    borderColor: theme.status.inProgress,
    backgroundColor: theme.backStatus.inProgress
  },
});

export default ToastApp;


{/* <Button
title="Mostrar Toast de Sucesso"
onPress={() => showToast('success', 'Operação realizada com sucesso!')}
/>
<Button
title="Mostrar Toast de Erro"
onPress={() => showToast('error', 'Ocorreu um erro!')}
/>
<Button
title="Mostrar Toast de Informação"
onPress={() => showToast('info', 'Aqui está uma informação!')}
/> */}