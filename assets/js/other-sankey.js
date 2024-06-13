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
  // let dataLabelDefaults = {
  //   useHTML: true,
  //   backgroundColor: 'rgba(255, 255, 255, 1)',
  //   borderRadius: 5,
  //   borderWidth: 1,
  // };

  // nodeData.forEach((node, idx) => {
  //   node.dataLabels = dataLabelDefaults;
  // });
  
  let seriesDataCompact = [
    ['Ninth Grade', 'Completed High School', 84.14, '#A5B5D4'],
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
      spacingRight: 200,
      spacingLeft: 100,
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
          nodeFormat: '<b style="font-size: 12px">{point.name}</b> <br/>{point.sum}',
          backgroundColor: '#fff',
          borderColor: '#666',
          borderWidth: 1,
          borderRadius: 3,
          padding: 4,
          zIndex: 1,
          shadow: {
            offsetX: 0,
            offsetY: 0,
            width: 1,
            lineHeight: 1,
          },
          style: {
            fontWeight: 'normal',
            fontSize: '12px',
            textAlign: 'left',
          },
          // color: 'rgba(0, 0, 0, 0.7)',
          // verticalAlign: 'middle',
          // padding: 7,
          alignTo: 'plotEdges',
          overflow: 'allow',
          crop: false,
          //width: 150,
          // align: 'center',
        },
        // label: {
        //   enabled: true,
        //   useHTML: true,
        // },
        levels: [{
          level: 0,
          dataLabels: {
            align: 'right',
            x: -20,
            style: {
              minWidth: '125px',
              width: '125px',
            },
          }
        }, {
          level: 1,
          dataLabels: {
            nodeFormat: '<b style="font-size: 12px">{point.name}</b> <br/>{point.sum}%',
            align: 'center',
          }
        }, {
          level: 2,
          dataLabels: {
            nodeFormat: '<b style="font-size: 12px">{point.name}</b> <br/>{point.sum}%',
            align: 'center',
          }
        }, {
          level: 3,
          dataLabels: {
            nodeFormat: '<b style="font-size: 12px">{point.name}</b> <br/>{point.sum}%',
            align: 'left',
            x: 20,
            style: {
              minWidth: '125px',
              width: '125px',
            },
          }
        }],
      },
    },

    series: [
      {
        name: 'All Regions',
        id: 'all',
        keys: ['from', 'to', 'weight', 'color'],
        visible: true,
        enableMouseTracking: true,
        dataLabels: {
          zIndex: 10,
        },
        //data: seriesDataFull,
        data: seriesDataCompact,
      },
    ],
  });

})();
