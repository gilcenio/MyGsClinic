import React from 'react'
import Chart from 'react-google-charts'
import theme from '../../../Global/theme'

interface IBarChart{
  data: (string | number)[][]
}

export default function BarChart({data}: IBarChart) {

  const options = {
    backgroundColor: theme.base.base_8,
    legend: "none",
    chartArea: { left: 100, top: 50, right: 100, bottom: 50},
    fontSize: 14,
    tooltip: {textStyle: { color: '#FF0000' } },
    fontName: theme.fonts.Poppins_500Medium,
    pieSliceText: "label",
    is3D: true,
  }

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="90%"
      data={data}
      options={options}
      chartPackages={["corechart", "controls"]}
      chartWrapperParams={{ view: { columns: [0, 1] } }}
      controls={[
        {
          controlType: "StringFilter",
          options: {
            filterColumnIndex: 0,
            matchType: "any", // 'prefix' | 'exact',
            ui: {
              label: "Pesquisar por Nome",
              labelStacking: "horizontal",
              caption: 'Sem filtro',
            },
          },
        },
      ]}
    />
  )
}