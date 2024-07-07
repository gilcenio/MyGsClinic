import { View, Text, StyleSheet, ScrollView, SectionList, TouchableOpacity, Button, TextInput, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { globalStyles } from '../../_Styles'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import theme from '../../../Global/theme';
import { Ionicons } from '@expo/vector-icons';
import RenderItemSchedule from '../../Components/RenderItemSchedule';
import ListEmptyComponent from '../../Components/ListEmptyComponent';
import SelectApp from '../../Components/SelectApp';
import ButtonApp from '../../Components/ButtonApp';
import { useAuth } from '../../Hooks';

export interface IDATA{
  date: string,
  data: {
    date: string
    dateStart: string
    hourStart: string
    dateFinal: string
    hourFinal: string
    isAllday: boolean
    frequency: string
    nameProfessional: string
    namePatient: string
    cor: string
    notes: string
  }[]
}

const DATA: IDATA[] = [
  { 
    date: "2024-06-16",
    data: [{
      "date": "2024-06-16",
      "dateStart": "08:10",
      "hourStart": "17:07",
      "dateFinal": "08:11",
      "hourFinal": "17:13",
      "isAllday": false,
      "frequency": "Não ses repete",
      "nameProfessional": "Marquinhos",
      "namePatient": "Martinha",
      "cor": theme.colorFolders.color_1,
      "notes": ""
    }]
  },
  {
    date: "2024-06-17",
    data: [
      {    
        "date": "2024-06-17",
        "dateStart": "08:00",
        "hourStart": "17:00",
        "dateFinal": "08:00",
        "hourFinal": "17:00",
        "isAllday": false,
        "frequency": "Não se repete",
        "nameProfessional": "Marcos",
        "namePatient": "Pedro",
        "cor": theme.colorFolders.color_1,
        "notes": ""
      },
      {    
        "date": "2024-06-17",
        "dateStart": "08:00",
        "hourStart": "17:00",
        "dateFinal": "08:00",
        "hourFinal": "17:00",
        "isAllday": false,
        "frequency": "Não se repete",
        "nameProfessional": "Marcos",
        "namePatient": "Pedro",
        "cor": theme.colorFolders.color_1,
        "notes": ""
      },
      {    
        "date": "2024-06-17",
        "dateStart": "08:00",
        "hourStart": "17:00",
        "dateFinal": "08:00",
        "hourFinal": "17:00",
        "isAllday": false,
        "frequency": "Não se repete",
        "nameProfessional": "Marcos",
        "namePatient": "Pedro",
        "cor": theme.colorFolders.color_1,
        "notes": ""
      }
    ]
  },
  {
    date: "2024-06-18",
    data: [
      {    
        "date": "2024-06-18",
        "dateStart": "08:00",
        "hourStart": "17:00",
        "dateFinal": "08:00",
        "hourFinal": "17:00",
        "isAllday": false,
        "frequency": "Não se repete",
        "nameProfessional": "Virna",
        "namePatient": "Pedro",
        "cor": theme.colorFolders.color_1,
        "notes": ""
      },
      {    
        "date": "2024-06-18",
        "dateStart": "08:00",
        "hourStart": "17:00",
        "dateFinal": "08:00",
        "hourFinal": "17:00",
        "isAllday": false,
        "frequency": "Não se repete",
        "nameProfessional": "Marcos",
        "namePatient": "Pedro",
        "cor": theme.colorFolders.color_1,
        "notes": ""
      },
      {    
        "date": "2024-06-18",
        "dateStart": "08:00",
        "hourStart": "17:00",
        "dateFinal": "08:00",
        "hourFinal": "17:00",
        "isAllday": false,
        "frequency": "Não se repete",
        "nameProfessional": "Marcos",
        "namePatient": "Pedro",
        "cor": theme.colorFolders.color_1,
        "notes": ""
      }
    ]
  },
  {
    date: "2024-06-19",
    data: [{"date": "2024-06-19",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-06-20",
    data: [{"date": "2024-06-20",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-06-21",
    data: [{"date": "2024-06-21",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-06-22",
    data: [{"date": "2024-06-22",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-06-23",
    data: [{"date": "2024-06-23",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-06-24",
    data: [{"date": "2024-06-24",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-06-25",
    data: [{"date": "2024-06-25",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-06-26",
    data: [{"date": "2024-06-26",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-06-27",
    data: [{"date": "2024-06-27",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-06-28",
    data: [{"date": "2024-06-28",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-06-29",
    data: [{"date": "2024-06-29",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-06-30",
    data: [{"date": "2024-06-30",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-07-01",
    data: [{"date": "2024-07-01",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-07-02",
    data: [{"date": "2024-07-02",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-07-03",
    data: [{"date": "2024-07-03",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-07-04",
    data: [{"date": "2024-07-04",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-07-06",
    data: [{"date": "2024-07-06",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-07-07",
    data: [{"date": "2024-07-07",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-07-08",
    data: [{"date": "2024-07-08",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-07-09",
    data: [{"date": "2024-07-09",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  },
  {
    date: "2024-07-10",
    data: [{"date": "2024-07-10",
      "dateStart": "08:00",
      "hourStart": "17:00",
      "dateFinal": "08:00",
      "hourFinal": "17:00",
      "isAllday": false,
      "frequency": "Não se repete",
      "nameProfessional": "Marcos",
      "namePatient": "Pedro",
      "cor": theme.colorFolders.color_1,
      "notes": ""}]
  }
]

// Função para filtrar eventos por uma data específica
const filterByDate = (data, targetDate) => {
  return data.filter(event => event.date === targetDate);
};

const filterByDateRange = (data, startDate, endDate) => {
  return data.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= new Date(startDate) && eventDate <= new Date(endDate);
  });
};

const getStartAndEndDatesOfCurrentWeekInCurrentMonth = () => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  // Determina o primeiro e último dia do mês atual
  const startOfMonth = new Date(currentYear, currentMonth, 1);
  const endOfMonth = new Date(currentYear, currentMonth + 1, 0);

  // Calcula o início da semana atual (segunda-feira)
  const dayOfWeek = now.getDay(); // 0 (domingo) a 6 (sábado)
  const daysToMonday = (dayOfWeek === 0 ? 6 : dayOfWeek - 1); // Ajusta para segunda-feira
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - daysToMonday);

  // Calcula o fim da semana atual (domingo)
  const daysToSunday = (7 - dayOfWeek); // Ajusta para domingo
  const endOfWeek = new Date(now);
  endOfWeek.setDate(now.getDate() + daysToSunday);

  // Ajusta o início da semana para o primeiro dia do mês, se necessário
  if (startOfWeek < startOfMonth) {
    startOfWeek.setDate(1); // Define para o primeiro dia do mês atual
    startOfWeek.setMonth(currentMonth);
  }

  // Ajusta o fim da semana para o último dia do mês, se necessário
  if (endOfWeek > endOfMonth) {
    endOfWeek.setDate(endOfMonth.getDate()); // Define para o último dia do mês atual
    endOfWeek.setMonth(currentMonth);
  }

  return {
    startOfWeek: startOfWeek.toISOString().split('T')[0], // Formato YYYY-MM-DD
    endOfWeek: endOfWeek.toISOString().split('T')[0], // Formato YYYY-MM-DD
  };
};

const getStartAndEndDatesOfCurrentMonth = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  // Determina o primeiro e último dia do mês atual
  const startOfMonth = new Date(currentYear, currentMonth, 1);
  const endOfMonth = new Date(currentYear, currentMonth + 1, 0);

  return {
    startOfMonth: startOfMonth.toISOString().split('T')[0], // Formato YYYY-MM-DD
    endOfMonth: endOfMonth.toISOString().split('T')[0], // Formato YYYY-MM-DD
  };
};

export default function Schedule() {
  const {showToast, alertConfig, showAlert} = useAuth()
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredData, setFilteredData] = useState(DATA);
  const sectionListRef = useRef(null);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);

    if (text) {
      const newData = DATA.map(item => {
        const filteredItemData = item.data.filter(subItem => {
          const textLower = text.toLowerCase();
          return (
            (subItem.date && subItem.date.toLowerCase().includes(textLower)) ||
            (subItem.dateStart && subItem.dateStart.toLowerCase().includes(textLower)) ||
            (subItem.hourStart && subItem.hourStart.toLowerCase().includes(textLower)) ||
            (subItem.dateFinal && subItem.dateFinal.toLowerCase().includes(textLower)) ||
            (subItem.hourFinal && subItem.hourFinal.toLowerCase().includes(textLower)) ||
            (subItem.frequency && subItem.frequency.toLowerCase().includes(textLower)) ||
            (subItem.nameProfessional && subItem.nameProfessional.toLowerCase().includes(textLower)) ||
            (subItem.namePatient && subItem.namePatient.toLowerCase().includes(textLower)) ||
            (subItem.notes && subItem.notes.toLowerCase().includes(textLower))
          );
        });

        return { ...item, data: filteredItemData };
      }).filter(item => item.data.length > 0);

      setFilteredData(newData);
    } else {
      setFilteredData(DATA);
    }
  };

  const handleFilterByDateRange = (startDate: string, endDate: string) => {
    setFilteredData(filterByDateRange(DATA, startDate, endDate));
  };

  const handleFilterByDate = (date: string) => {
    setFilteredData(filterByDate(DATA, date)); // Filtra os dados e atualiza o estado
  };

  const handleDayPress = (day) => {
    console.log(new Date(day.dateString).toISOString().toString())
    handleFilterByDate(day.dateString)
    setSelectedDate(day.dateString);
  };

  LocaleConfig.locales['fr'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul.','Ago','Set.','Out.','Nov.','Dez.'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
    today: 'hoje'
  };

  LocaleConfig.defaultLocale = 'fr';

  function scroll(){
    // Obtém a data atual no formato YYYY-MM-DD
    const currentDate = new Date().toISOString().split('T')[0];
    setSelectedDate(currentDate);
    
    // Rola até a data atual após a montagem do componente
    const sectionIndex = DATA.findIndex(section => section.date === currentDate);
    if (sectionListRef.current && sectionIndex !== -1) {
      setTimeout(() => {
        sectionListRef.current.scrollToLocation({
          sectionIndex,
          itemIndex: 0,
        });
      }, 100);
    }
  }

  useEffect(() => {
    scroll()
  }, []);
  
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  const handleSelectWeek = () => {
    const { startOfWeek, endOfWeek } = getStartAndEndDatesOfCurrentWeekInCurrentMonth();

    handleFilterByDateRange(startOfWeek, endOfWeek)
    showToast('info', 'Filtro semanal selecionado')
  };

  const handleSelecMonth = () => {
    const { startOfMonth, endOfMonth } = getStartAndEndDatesOfCurrentMonth();

    handleFilterByDateRange(startOfMonth, endOfMonth)
    showToast('info', 'Filtro mensal selecionado')
  };

  return (
    <View style={[globalStyles.content, {flexDirection: "row", columnGap: 20}]}>
            
      <View style={styles.box1}>
        <Calendar
          onDayPress={handleDayPress}
          monthFormat={'dd/MM/yyyy'}
          onPressArrowLeft={subtractMonth => subtractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          style={{
            backgroundColor: theme.base.base_8,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 5,
          }}
          markedDates={{
            [selectedDate]: { selected: true, marked: true, selectedColor: theme.base.base_2 },
          }
        }
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: theme.base.base_8,
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            // selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            // todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: theme.status.error,
            // dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: theme.base.base_2,
            disabledArrowColor: '#d9e1e8',
            monthTextColor: theme.base.base_2,
            indicatorColor: theme.base.base_2,
            textDayFontFamily: theme.fonts.Poppins_700Bold,
            textMonthFontFamily: theme.fonts.Poppins_500Medium,
            textDayHeaderFontFamily: theme.fonts.Poppins_500Medium,
            // textDayFontWeight: '300',
            // textMonthFontWeight: 'bold',
            // textDayHeaderFontWeight: '300',
            textDayFontSize: 14,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14
          }}
        />

        <View style={{rowGap: 20}}>
          <Text style={[styles.textButton, {marginHorizontal: 20}]}>Filtrar por:</Text>

          <SelectApp setFilteredData={setFilteredData} DATA={DATA}/>
        </View>

        <View style={{position: "absolute", bottom: 20, width:"100%"}}>
          <ButtonApp onPress={() => showAlert()} title={'Adicioanar Agenda'} iconName={'add-circle-sharp'} mh={20}/>
        </View>

      </View>
      <View style={styles.box2}>

        <View style={styles.header}>
          <ButtonApp onPress={() => {scroll(), setFilteredData(DATA)}} title={'Hoje'} bg={theme.base.base_5} w={"5%"}/>

          <View style={styles.containerInput}>
            <Ionicons 
              name={"search-outline"}
              size={20} 
              color={theme.text.text_4}
              style={{marginLeft: 8}}
            /> 
            <TextInput 
              value={searchText}
              onChangeText={handleSearch}
              placeholder='Buscar por: data, hora, frquencia, profissional, paciente, notas'
              style={styles.input}
              placeholderTextColor={theme.text.text_3}
            />
          </View>

          <ButtonApp onPress={() => handleSelectWeek()} title={'Semana'} bg={theme.base.base_5} w={"8%"}/>
          <ButtonApp onPress={() => handleSelecMonth()} title={'Mês'} bg={theme.base.base_5} w={"8%"}/>
        </View>

        <SectionList
          ref={sectionListRef}
          sections={filteredData}
          keyExtractor={(item, index) => item.date+index}
          renderItem={({item}) => (
            <RenderItemSchedule item={item}/>
          )}
          renderSectionHeader={({section: {date}}) => (
            <Text style={styles.text}>{formatDate(date)}</Text>
          )}
          ListEmptyComponent={
            <ListEmptyComponent title={`Nenhuma agenda foi encontrada.`}/>
          }
        />
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  box1: {
    width: "30%",
    backgroundColor: theme.base.base_8,
    borderRadius: 20,
    rowGap: 20
  },
  box2: {
    flex: 1,
  },
  text: {
    fontFamily: theme.fonts.Poppins_700Bold,
    fontSize: 18,
    color: theme.text.text_4,
    marginBottom: 10
  },
  textButton: {
    fontFamily: theme.fonts.Poppins_700Bold,
    fontSize: 14,
    color: theme.text.text_4,
  },
  header: {
    height: 65,
    backgroundColor: theme.base.base_8,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    flexDirection: "row"
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 14, 
    fontFamily: theme.fonts.Poppins_400Regular,
  },
  containerInput: {
    width: "75%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.base.base_5,
    columnGap: 4,
    borderRadius: 10, 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    height: 40
  }
})