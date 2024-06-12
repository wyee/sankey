let dataLabelDefaults = {
  useHTML: true,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  borderRadius: 5,
  borderWidth: 1,
};

let nodes = [
    {
        id: 'ninth_grade',
        name: 'Ninth Grade',
        column: 1,
    },
    {
        id: 'completed_high_school',
        name: 'Completed High School',
        column: 2,
    },
    {
        id: 'did_not_complete_high_school',
        name: 'Did Not Complete High School',
        column: 2,
      },
    {
        id: 'four_year_college',
        name: 'Four-year college',
        column: 3,
      },
    {
        id: 'two_year_community_college',
        name: 'Two-year community college',
        column: 3,
      },
    {
        id: 'never_enrolled_in_college',
        name: 'Never enrolled in college',
        column: 3,
      },
    {
        id: 'bachelors_degree',
        name: 'Bachelor\'s degree',
        column: 4,
      },
    {
        id: 'associate_degree',
        name: 'Associate degree',
        column: 4,
      },
    {
        id: 'community_college_certificate',
        name: 'Community college certificate',
        column: 4,
      },
    {
        id: 'attended_did_not_yet_earn_degree',
        name: 'Attended, did not yet earn degree',
        column: 4,
      }
];

// Assign colorIndex and default dataLabel information to each node item.
nodes.forEach((node, idx) => {
  node.colorIndex = idx;
  node.dataLabels = dataLabelDefaults;
});

let sankeyChart = Highcharts.chart('sankey-chart', {

  // Title for the chart. Can "allowHTML" for more customization.
  title: {
    text: ''
  },

  // Subtitle for the chart. Can "allowHTML" for more customization.
  subtitle: {
    text: '',
  },

  // Caption text that displays at the footer. Can "allowHTML" for more customization.
  caption: {
    text: 'Dateset information Time Period: 2013-2023',
    allowHTML: true,
  },

  // HighCharts credits display. It is on by default on a lot of charts.
  credits: {
    enabled: false,
  },

  // Here is where we define the type of chart and some basic settings.
  chart: {
    type: "sankey",
    nodes: nodes, // This needs to be altered for each series, I think.
    allowOverlap: true,
    colorByPoint: false,
    showInLegend: true,
    alignThresholds: true,
    displayErrors: false,
    ignoreHiddenSeries: false,
    backgroundColor: 'none',
    colorCount: nodes.length,
  },

  // Exporting availability options.
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

  // General Series settings to apply for all series in the set. Items can be overridden in the series object.
  plotOptions: {
    sankey: {
      nodeAlignment: 'center', // 'top, 'center', 'bottom' are options. defaults to center.
      nodePadding: 75, // I think this is the vertical padding between nodes.
      nodeDistance: 100, // I think this is minimum L/R distance between nodes.
      centerInCategory: false,
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
        ['ninth_grade', 'Completed High School', 84.14, 'lightgray'],
        ['ninth_grade', 'Did Not Complete High School', 15.86, 'lightgray'],
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
        ['ninth_grade', 'Completed High School', 54.14],
        ['ninth_grade', 'Did Not Complete High School', 10.86],
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
