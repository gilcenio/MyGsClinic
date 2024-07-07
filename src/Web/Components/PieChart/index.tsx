import React from 'react'
import Chart from 'react-google-charts';
import theme from '../../../Global/theme';

interface IPieChart{
  data: (string | number)[][]
}

export default function PieChart({data}: IPieChart) {

  const options = {
    backgroundColor: theme.base.base_8,
    legend: { position: 'bottom', textStyle: { color: 'blue', fontSize: 14 } },
    chartArea: { left: 0, top: 0, right: 0, bottom: 50, justifyContent: "center",},
    fontSize: 14,
    tooltip: {textStyle: { color: '#FF0000' } },
    fontName: theme.fonts.Poppins_500Medium,
    pieSliceText: "label",
    is3D: true,
  }

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="90%"
      data={data}
      options={options}
      chartWrapperParams={{ view: { columns: [0, 1] } }}
      chartPackages={["corechart", "controls"]}
      controls={[
        {
          controlEvents: [
            {
              eventName: "statechange",
              callback: ({ chartWrapper, controlWrapper }) => {
                console.log("State changed to", controlWrapper?.getState());
              },
            },
          ],
          controlType: "CategoryFilter",
          options: {
            filterColumnIndex: 0,
            ui: {
              labelStacking: "horizontal",
              label: "",
              caption: 'Sem filtro',
              allowTyping: false,
              allowMultiple: false,
            },
          },
        }
      ]}
    />
  )
}
