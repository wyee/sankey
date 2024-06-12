const nodes = [
    {
        id: 'Ninth Grade',
        column: 1,
        offset: -100,
        color: '#ffa500',
        marginTop: 0,
        offsetVertical: -100,
    },
    {
        id: 'Completed High School',
        column: 2,
        color: '#74ffe7',
    },
    {
        id: 'Did Not Complete High School',
        column: 2,
        color: '#8cff74',
      },
    {
        id: 'Four-year college',
        column: 3,
        color: '#ff8da1',
      },
    {
        id: 'Two-year community college',
        column: 3,
        color: '#f4c0ff',
      },
    {
        id: 'Never enrolled in college',
        column: 3,
        color: '#e6e6e6',
      },
    {
        id: 'Bachelor\'s degree',
        column: 4,
        color: '#F9E79F',
      },
    {
        id: 'Associate degree',
        column: 4,
        color: '#009c00'
      },
    {
        id: 'Community college certificate',
        column: 4,
        color: '#1a8dff'
      },
    {
        id: 'Attended, did not yet earn degree',
        column: 4,
        color: '#009c00'
      }
];


let sankeyChart = Highcharts.chart('sankey-chart', {

  title: {
    text: ''
  },

  subtitle: {
    text: '',
  },

  caption: {
    text: 'Dateset information Time Period: 2013-2023',
    allowHTML: true,
  },

  credits: {
    enabled: false,
  },

  chart: {
    type: "sankey",
    nodes: nodes,
    allowOverlap: true,
    colorByPoint: false,
    showInLegend: true,
    alignThresholds: true,
    displayErrors: false,
    ignoreHiddenSeries: false,
    backgroundColor: 'none',
  },

  yAxis: {
    floor: 0,
    ceiling: 100,
  },

  exporting: {
    chartOptions: {
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true
          }
        }
      }
    }
  },

  plotOptions: {
    sankey: {
      nodeAlignment: 'top',
      nodePadding: 60,
      nodeDistance: 60,
      centerInCategory: true,
      enableMouseTracking: true,
      visible: false,
      linkOpacity: 0.1,
      dataLabels: {
        enabled: false,
      },
      label: {
        enabled: true,
        useHTML: true,
      },
    },
  },

  series: [
    {
      name: 'All Regions',
      keys: ['from', 'to', 'weight', 'color'],
      index: 1,
      stack: 1,
      // linkOpacity: 0.5, if no active group, enable this .5.
      visible: true, // always to true. the enableMouseTracking will determine if its "active".
      enableMouseTracking: false, // defaults to true. if no active group, set to true.
      dataLabels: {
        enabled: true,
      },
      data: [
        ['Ninth Grade', 'Completed High School', 84.14, 'lightgray'],
        ['Ninth Grade', 'Did Not Complete High School', 15.86, 'lightgray'],
        ['Completed High School', 'Four-year school', 36.00, 'lightgray'],
        ['Completed High School', 'Two-year school', 28.00, 'lightgray'],
        ['Completed High School', 'Never enrolled', 20.14, 'lightgray'],
        ['Did Not Complete High School', 'Four-year school', 2.86, 'lightgray'],
        ['Did Not Complete High School', 'Two-year school', 5.00, 'lightgray'],
        ['Did Not Complete High School', 'Never enrolled', 8.00, 'lightgray'],
        ['Four-year school', 'Bachelor\'s degree', 18.00, 'lightgray'],
        ['Four-year school', 'Associate degree', 10.00, 'lightgray'],
        ['Four-year school', 'Community college certificate', 6.00, 'lightgray'],
        ['Four-year school', 'Never enrolled in college', 4.86, 'lightgray'],
        ['Two-year school', 'Bachelor\'s degree', 9.00, 'lightgray'],
        ['Two-year school', 'Associate degree', 9.00, 'lightgray'],
        ['Two-year school', 'Community college certificate', 9.00, 'lightgray'],
        ['Two-year school', 'Never enrolled in college', 6.00, 'lightgray'],
        ['Never enrolled', 'Never enrolled in college', 28.14, 'lightgray'],
      ]
    },
    {
      name: 'Group 1',
      keys: ['from', 'to', 'weight'],
      index: 99,
      stack: 2,
      linkOpacity: 0.5, // defaults to 0.1. the active group needs to be set to 0.5
      visible: true, // defaults to false. the active group needs to be set to true
      enableMouseTracking: true, // defaults to false. the active group needs to be set to true
      data: [
        ['Ninth Grade', 'Completed High School', 54.14],
        ['Ninth Grade', 'Did Not Complete High School', 45.86],
        ['Completed High School', 'Four-year school', 26.00],
        ['Completed High School', 'Two-year school', 18.00],
        ['Completed High School', 'Never enrolled', 10.14],
        ['Did Not Complete High School', 'Four-year school', 1.86],
        ['Did Not Complete High School', 'Two-year school', 4.00],
        ['Did Not Complete High School', 'Never enrolled', 7.00],
        ['Four-year school', 'Bachelor\'s degree', 18.00],
        ['Four-year school', 'Associate degree', 10.00],
        ['Four-year school', 'Community college certificate', 6.00],
        ['Four-year school', 'Never enrolled in college', 4.86],
        ['Two-year school', 'Bachelor\'s degree', 9.00],
        ['Two-year school', 'Associate degree', 9.00],
        ['Two-year school', 'Community college certificate', 9.00],
        ['Two-year school', 'Never enrolled in college', 6.00],
        ['Never enrolled', 'Never enrolled in college', 28.14],
      ],
    },
    {
      name: 'Group 2',
      keys: ['from', 'to', 'weight'],
      index: 99,
      stack: 3,
      data: [
        ['Ninth Grade', 'Completed High School', 23.24],
        ['Ninth Grade', 'Did Not Complete High School', 16.76],
        ['Completed High School', 'Four-year school', 12.7],
        ['Completed High School', 'Two-year school', 34.7],
        ['Completed High School', 'Never enrolled', 56.14],
        ['Did Not Complete High School', 'Four-year school', 2.86],
        ['Did Not Complete High School', 'Two-year school', 5.00],
        ['Did Not Complete High School', 'Never enrolled', 8.00],
        ['Four-year school', 'Bachelor\'s degree', 18.00],
        ['Four-year school', 'Associate degree', 10.00],
        ['Four-year school', 'Community college certificate', 6.00],
        ['Four-year school', 'Never enrolled in college', 4.86],
        ['Two-year school', 'Bachelor\'s degree', 9.00],
        ['Two-year school', 'Associate degree', 9.00],
        ['Two-year school', 'Community college certificate', 9.00],
        ['Two-year school', 'Never enrolled in college', 6.00],
        ['Never enrolled', 'Never enrolled in college', 28.14],
      ],
    },
    {
      name: 'Group 3',
      keys: ['from', 'to', 'weight'],
      index: 99,
      stack: 4,
      data: [
        ['Ninth Grade', 'Completed High School', 23.24],
        ['Ninth Grade', 'Did Not Complete High School', 16.76],
        ['Completed High School', 'Four-year school', 12.7],
        ['Completed High School', 'Two-year school', 34.7],
        ['Completed High School', 'Never enrolled', 56.14],
        ['Did Not Complete High School', 'Four-year school', 2.86],
        ['Did Not Complete High School', 'Two-year school', 5.00],
        ['Did Not Complete High School', 'Never enrolled', 8.00],
        ['Four-year school', 'Bachelor\'s degree', 18.00],
        ['Four-year school', 'Associate degree', 10.00],
        ['Four-year school', 'Community college certificate', 6.00],
        ['Four-year school', 'Never enrolled in college', 4.86],
        ['Two-year school', 'Bachelor\'s degree', 9.00],
        ['Two-year school', 'Associate degree', 9.00],
        ['Two-year school', 'Community college certificate', 9.00],
        ['Two-year school', 'Never enrolled in college', 6.00],
        ['Never enrolled', 'Never enrolled in college', 28.14],
      ],
    }
  ],
});

console.log(sankeyChart.series[0].name);
console.log(sankeyChart.series[1].name);
