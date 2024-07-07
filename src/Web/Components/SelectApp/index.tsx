import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import theme from '../../../Global/theme';
import { Ionicons } from '@expo/vector-icons';
import { IDATA } from '../../Pages/Schedule';

interface ISelectApp {
  setFilteredData: React.Dispatch<React.SetStateAction<IDATA[]>>;
  DATA: IDATA[];
}

export default function SelectApp({ setFilteredData, DATA }: ISelectApp) {
  const [isSelected, setIsSelected] = useState(0);
  const [searchText, setSearchText] = useState('');

  function handlerSelected(value: number) {
    setFilteredData(DATA);
    setSearchText('');
    if (value === 1) {
      if (isSelected === 0) {
        setIsSelected(1);
      } else if (isSelected === 2) {
        setIsSelected(1);
      } else {
        setIsSelected(0);
      }
    } else {
      if (isSelected === 0) {
        setIsSelected(2);
      } else if (isSelected === 1) {
        setIsSelected(2);
      } else {
        setIsSelected(0);
      }
    }
  }

  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const newData = DATA.map(item => {
        const filteredItemData = item.data.filter(subItem =>
          isSelected === 1
            ? subItem.nameProfessional.toLowerCase().includes(text.toLowerCase())
            : subItem.namePatient.toLowerCase().includes(text.toLowerCase())
        );
        return { ...item, data: filteredItemData };
      }).filter(item => item.data.length > 0);
      setFilteredData(newData);
    } else {
      setFilteredData(DATA);
    }
  };

  return (
    <View style={{ width: "100%", rowGap: 20 }}>
      <View style={styles.boxItens}>
        <TouchableOpacity onPress={() => handlerSelected(1)} style={[styles.selecApp, { backgroundColor: isSelected === 1 ? theme.base.base_9 : undefined }]}>
          <Ionicons
            name={'checkmark-sharp'}
            size={14}
            color={theme.text.text_4}
          />
        </TouchableOpacity>
        <Text style={styles.textSelect}>{"Nome do profissional"}</Text>
      </View>
      {isSelected === 1 &&
        <TextInput
          value={searchText}
          onChangeText={handleSearch}
          placeholderTextColor={theme.text.text_3}
          style={styles.input}
          placeholder={'Insira nome do profissional'}
        />
      }
      <View style={styles.boxItens}>
        <TouchableOpacity onPress={() => handlerSelected(2)} style={[styles.selecApp, { backgroundColor: isSelected === 2 ? theme.base.base_9 : undefined }]}>
          <Ionicons
            name={'checkmark-sharp'}
            size={14}
            color={theme.text.text_4}
          />
        </TouchableOpacity>
        <Text style={styles.textSelect}>{"Nome do paciente"}</Text>
      </View>
      {isSelected === 2 &&
        <TextInput
          value={searchText}
          onChangeText={handleSearch}
          placeholderTextColor={theme.text.text_3}
          style={styles.input}
          placeholder={'Insira nome do paciente'}
        />
      }

    </View>
  );
}

const styles = StyleSheet.create({
  selecApp: {
    borderWidth: 1,
    borderColor: theme.text.text_6,
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  textSelect: {
    flex: 1,
    fontFamily: theme.fonts.Poppins_500Medium,
    fontSize: 12,
    color: theme.text.text_4
  },
  boxItens: {
    flexDirection: "row",
    columnGap: 10,
    alignItems: "center",
    marginHorizontal: 20
  },
  input: {
    marginHorizontal: 20,
    height: 40,
    backgroundColor: "white",
    borderRadius: 8,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: theme.base.base_6,
    fontSize: 14,
    fontFamily: theme.fonts.Poppins_400Regular
  },
});
