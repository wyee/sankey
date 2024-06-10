const nodes = [
    {
        id: 'Ninth Grade',
        // color: '#ffa500',
        offsetHorizontal: -50,
        offsetVertical: 10
    },
    {
        id: 'Completed High School',
        // color: '#74ffe7',
        offsetHorizontal: -50,
        offsetVertical: 130
    },
    // {
    //     id: 'Did Not Complete High School',
    //     color: '#8cff74',
    //     offset: -110
    // },
    // {
    //     id: 'Four-year college',
    //     color: '#ff8da1',
    //     column: 3,
    //     offset: 50
    // },
    // {
    //     id: 'Two-year community college',
    //     color: '#f4c0ff',
    //     column: 3,
    //     offset: 50
    // },
    // {
    //     id: 'Never enrolled in college',
    //     color: '#e6e6e6',
    //     column: 3,
    //     offset: -30
    // },
    // {
    //     id: 'Bachelor\'s degree',
    //     color: '#F9E79F',
    //     column: 4,
    //     offset: 50
    // },
    // {
    //     id: 'Associate degree',
    //     color: '#009c00',
    //     column: 4,
    //     offset: 50
    // },
    // {
    //     id: 'Community college certificate',
    //     color: '#1a8dff',
    //     column: 4,
    //     offset: 50
    // },
    // {
    //     id: 'Attended, did not yet earn degree',
    //     color: '#009c00',
    //     column: 4,
    //     offset: 50
    // }
];


let sankeyChart = Highcharts.chart('sankey-chart', {
    title: {
        text: 'Highcharts Sankey Diagram'
    },
    chart: {
        type: "sankey",
        nodes: nodes,
        allowOverlap: true,
        colorByPoint: false,
        showInLegend: true,
        color: "#ffff00",
    },

    series: [{
        name: 'All Regions',
        keys: ['from', 'to', 'weight', 'color'],
        stack: 0,
        data: [
            ['Ninth Grade', 'Completed High School', 84.14, 'orange'],
            ['Ninth Grade', 'Did Not Complete High School', 15.86, 'orange'],
            ['Completed High School', 'Four-year school', 36.00, 'orange'],
            ['Completed High School', 'Two-year school', 28.00, 'orange'],
            ['Completed High School', 'Never enrolled', 20.14, 'orange'],
            ['Did Not Complete High School', 'Four-year school', 2.86, 'orange'],
            ['Did Not Complete High School', 'Two-year school', 5.00, 'orange'],
            ['Did Not Complete High School', 'Never enrolled', 8.00, 'orange'],
            ['Four-year school', 'Bachelor\'s degree', 18.00, 'orange'],
            ['Four-year school', 'Associate degree', 10.00, 'orange'],
            ['Four-year school', 'Community college certificate', 6.00, 'orange'],
            ['Four-year school', 'Never enrolled in college', 4.86, 'orange'],
            ['Two-year school', 'Bachelor\'s degree', 9.00, 'orange'],
            ['Two-year school', 'Associate degree', 9.00, 'orange'],
            ['Two-year school', 'Community college certificate', 9.00, 'orange'],
            ['Two-year school', 'Never enrolled in college', 6.00, 'orange'],
            ['Never enrolled', 'Never enrolled in college', 28.14, 'orange'],

        ]
    } ,
        {
            name: 'Sirrea Nevada',
            keys: ['from', 'to', 'weight', 'color'],
            stack: 1,
            data: [
                ['Ninth Grade', 'Completed High School', 78.24, 'green'],
                ['Ninth Grade', 'Did Not Complete High School', 21.76, 'green'],
                ['Completed High School', 'Four-year school', 30.7, 'green'],
                ['Completed High School', 'Two-year school', 34.7, 'green'],
                ['Completed High School', 'Never enrolled', 28.14, 'green'],
                ['Did Not Complete High School', 'Four-year school', 2.86, 'green'],
                ['Did Not Complete High School', 'Two-year school', 5.00, 'green'],
                ['Did Not Complete High School', 'Never enrolled', 8.00, 'green'],
                ['Four-year school', 'Bachelor\'s degree', 18.00, 'green'],
                ['Four-year school', 'Associate degree', 10.00, 'green'],
                ['Four-year school', 'Community college certificate', 6.00, 'green'],
                ['Four-year school', 'Never enrolled in college', 4.86, 'green'],
                ['Two-year school', 'Bachelor\'s degree', 9.00, 'green'],
                ['Two-year school', 'Associate degree', 9.00, 'green'],
                ['Two-year school', 'Community college certificate', 9.00, 'green'],
                ['Two-year school', 'Never enrolled in college', 6.00, 'green'],
                ['Never enrolled', 'Never enrolled in college', 28.14, 'green'],
            ],
        }
    ],
});

console.log(sankeyChart.series[0].name);
console.log(sankeyChart.series[1].name);
