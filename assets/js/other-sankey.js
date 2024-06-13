(async () => {

  // // Pull our series data from a seperate json source.
  let responseSeries = await fetch('../assets/data/sankey-series-full.json');
  let dataSeries = await responseSeries.json();
  let seriesDataFull = await dataSeries.data;
  
  // Pull our nodes/column data from a seperate json source.
  let responseNodes = await fetch('../assets/data/sankey-nodes.json');
  let dataNodes = await responseNodes.json();
  let nodeData = await dataNodes.nodes;
  
  // Assign default dataLabel information to each node item.
  let dataLabelDefaults = {
    useHTML: true,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 5,
    borderWidth: 1,
  };

  nodeData.forEach((node, idx) => {
    node.dataLabels = dataLabelDefaults;
  });
  
  let seriesDataCompact = [
    ['Ninth Grade', 'Completed High School', 84.14, '#A5B5D4', 'test'],
    ['Ninth Grade', 'Did Not Complete High School', 15.86, '#A5B5D4'],
    ['Completed High School', 'Four-year school', 36.00, '#A5B5D4'],
    ['Completed High School', 'Two-year school', 28.00, '#A5B5D4'],
    ['Completed High School', 'Never enrolled', 20.14, '#A5B5D4'],
    ['Did Not Complete High School', 'Four-year school', 2.86, '#A5B5D4'],
    ['Did Not Complete High School', 'Two-year school', 5.00, '#A5B5D4'],
    ['Did Not Complete High School', 'Never enrolled', 8.00, '#A5B5D4'],
    ['Four-year school', 'Bachelor\'s degree', 18.00, '#A5B5D4'],
    ['Four-year school', 'Associate degree', 10.00, '#A5B5D4'],
    ['Four-year school', 'Community college certificate', 6.00, '#A5B5D4'],
    ['Four-year school', 'Never enrolled in college', 4.86, '#A5B5D4'],
    ['Two-year school', 'Bachelor\'s degree', 9.00, '#A5B5D4'],
    ['Two-year school', 'Associate degree', 9.00, '#A5B5D4'],
    ['Two-year school', 'Community college certificate', 9.00, '#A5B5D4'],
    ['Two-year school', 'Never enrolled in college', 6.00, '#A5B5D4'],
    ['Never enrolled', 'Never enrolled in college', 28.14, '#A5B5D4'],
  ]

  let sankeyChart = Highcharts.chart('other-sankey-chart', {

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
      nodes: nodeData,
      allowOverlap: true,
      showInLegend: true,
      alignThresholds: true,
      displayErrors: false,
      ignoreHiddenSeries: true,
      backgroundColor: 'none',
      styledMode: false,
      animation: false,
    },

    // General Series settings to apply for all series in the set. 
    // Items can be overridden in each individual series object.
    plotOptions: {
      sankey: {
        nodeWidth: 10,
        nodeAlignment: 'center',
        nodePadding: 50,
        linkOpacity: 1,
        enableMouseTracking: true,
        animation: false,
        visible: false,
        index: 99,
        color: '#A5B5D4',
        // clip: false,
        // centerInCategory: true,
        dataLabels: {
          enabled: true,
          useHTML: true,
          backgroundColor: '#fff',
          borderColor: '#666',
          borderWidth: 1,
          borderRadius: 3,
          shadow: {
            offsetX: 0,
            offsetY: 0,
            width: 1,
          },
          style: {
            fontWeight: 'normal',
            fontSize: '10px',
          }
          // color: 'rgba(0, 0, 0, 0.7)',
          // verticalAlign: 'middle',
          // enabled: true,
          // padding: 7,
          // alignTo: 'plotEdges',
          // overflow: 'allow',
          // crop: false,
          // align: 'center',
        },
        // nodes: {
        //   dataLabels: {
        //     enabled: true,
        //     style: {
        //       fontWeight: 'normal',
        //       backgroundColor: 'rgba(255, 255, 255, 1)',
        //       borderColor: '#666',
        //       borderWidth: '4px',
        //     },
        //     color: 'rgba(0, 0, 0, 0.7)',
        //     verticalAlign: 'middle',
        //     useHTML: false,
        //     enabled: true,
        //     padding: 7,
        //     alignTo: 'plotEdges',
        //     // overflow: 'allow',
        //     // crop: false,
        //     // align: 'center',
        //   },
        // },
        // label: {
        //   enabled: true,
        //   useHTML: true,
        // },
        // levels: {
        //   color: '#4366A8',
        //   dataLabels: {
        //     enabled: true,
        //     backgroundColor: 'rgba(255, 255, 255, 1)',
        //     borderColor: 'rgba(0, 0, 0, 0.7)',
        //     borderWidth: 1,
        //     color: 'rgba(0, 0, 0, 0.7)',
        //     overflow: 'none',
        //     allowHTML: true,
        //     // verticalAlign: 'middle',
        //   },
        // }
      },
    },

    series: [
      {
        name: 'All Regions',
        id: 'all',
        keys: ['from', 'to', 'weight', 'color', 'custom.value'],
        visible: true,
        enableMouseTracking: true,
        data: seriesDataFull,
        // dataLabels: {
        //   nodeFormat: '<span>{point.name}</span>',
        // }
      },
    ],
  });

})();
