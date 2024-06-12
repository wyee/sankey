(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/us/us-ca-all.topo.json'
    ).then(response => response.json());

    const labels = ['column 2', 'column 1', 'column 3'];

    // Create the map of California.
    let map = Highcharts.mapChart('map', {

      chart: {
        map: topology,
        backgroundColor: 'none',
        events: {
          // load default Sankey chart
          load: function () {
            sankeyChart.update({
              title: {
                text: this.series.name ?? sankeyChart.series[0].name,
              },
              // series: [{
              //   data: sankeyChart.series[0].data.visible
              // }]
            })
          }
        },
      },

      title: {
        text: '',
      },

      subtitle: {
        text: '',
      },

      accessibility: {
        series: {
          descriptionFormat: '{series.name} with ' + '{series.points.length} counties.'
        },
        point: {
          valueDescriptionFormat: '{point.name}'
        }
      },

      legend: {
        enabled: false,
      },

      plotOptions: {
        map: {
          point: {
            events: {

              mouseOver: function () {
                map.series.forEach(s => {
                  s.points.forEach((point) => {
                    if (point.series.name === this.series.name) {
                      point.setState('hover');
                    }
                  })
                })
              },

              mouseOut: function () {
                map.series.forEach(s => {
                  s.points.forEach((point) => {
                    if (point.series.name === this.series.name) {
                      point.setState('');
                    }
                  })
                })
              },

              click: function () {
                
                // map.setTitle({text: 'Ninth Grade to Postsecondary Award: ' + this.series.name})
                
                map.series.forEach(s => {
                  s.points.forEach((point) => {
                    point.select(true);
                  });
                });

                Highcharts.each(this.series.points, function (p) {
                  p.select(true, true);
                });

                // update sankey chart based on group.
                sankeyChart.update({
                  title: {
                    text: this.series.name ?? sankeyChart.series[0].name,
                  },
                })

                // Disable all series except the first (All).
                sankeyChart.series.forEach((s, index) => {
                  if (index !== 0) {
                    s.update({
                      visible: false,
                      enableMouseTracking: false,
                    });
                  }
                })

                // Enable the selected map/sankey matching series.
                const matchingSelectedSeries = sankeyChart.get(this.series.userOptions.id);
                matchingSelectedSeries.update({
                  visible: true,
                  enableMouseTracking: true,
                });

              },
            },
          },

          allAreas: false,

          joinBy: ['hc-key', 'code'],

          dataLabels: {
            enabled: false,
          },

          stickyTracking: true,

          tooltip: {
            headerFormat: '',
            pointFormat: '<div>{point.name}: <b>{series.name}</b></div>'
          },

          states: {
            // select: {
            //   color: 'black',
            //   lineWidth: 10,
            //   lineColor: 'white',
            //   fillColor: 'black',
            // },
            // hover: {
            //   lineColor: 'white',
            // }
          }
        },
      },

      credits: {
        enabled: false,
      },

      caption: {
        text: '',
      },

      series: [
        {
          name: 'Group 1',
          id: 'one',
          color: '#306B99',
          data: ['us-ca-015', 'us-ca-023', 'us-ca-045', 'us-ca-033', 'us-ca-097', 'us-ca-041', 'us-ca-055', 'us-ca-095', 'us-ca-013', 'us-ca-001', 'us-ca-075', 'us-ca-081', 'us-ca-085'].map(code => ({
            code
          }))
        }, {
          name: 'Group 2',
          id: 'two',
          color: '#73727D',
          data: ['us-ca-105', 'us-ca-103', 'us-ca-021', 'us-ca-007', 'us-ca-011'].map(code => ({
            code
          }))
        }, {
          name: 'Group 3',
          id: 'three',
          color: '#F2A826',
          data: ['us-ca-093', 'us-ca-049', 'us-ca-089', 'us-ca-035', 'us-ca-063', 'us-ca-091', 'us-ca-057'].map(code => ({
            code
          }))
        }, {
          name: 'Group 4',
          id: 'four',
          color: '#EF6F21',
          data: ['us-ca-115', 'us-ca-101', 'us-ca-061', 'us-ca-017', 'us-ca-067', 'us-ca-113'].map(code => ({
            code
          }))
        }, {
          name: 'Group 5',
          id: 'five',
          color: '#4B9A63',
          data: ['us-ca-077', 'us-ca-099', 'us-ca-047', 'us-ca-039', 'us-ca-019', 'us-ca-031', 'us-ca-107', 'us-ca-029'].map(code => ({
            code
          }))
        }, {
          name: 'Group 6',
          id: 'six',
          color: '#3A1E65',
          data: ['us-ca-005', 'us-ca-003', 'us-ca-009', 'us-ca-109', 'us-ca-043', 'us-ca-051', 'us-ca-027'].map(code => ({
            code
          }))
        }, {
          name: 'Group 7',
          id: 'seven',
          color: '#d568fb',
          data: ['us-ca-071', 'us-ca-065'].map(code => ({
            code
          }))
        }, {
          name: 'Group 8',
          id: 'eight',
          color: '#4366A8',
          data: ['us-ca-059', 'us-ca-073', 'us-ca-025'].map(code => ({
            code
          }))
        }, {
          name: 'Group 9',
          id: 'nine',
          color: '#271346',
          data: ['us-ca-087', 'us-ca-069', 'us-ca-053', 'us-ca-079', 'us-ca-083', 'us-ca-111', 'us-ca-037'].map(code => ({
            code
          }))
        },
      ],
    });
})();
