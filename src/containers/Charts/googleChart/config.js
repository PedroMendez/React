const width = '100%';
const height = '400px';

const BarChart = {
  title: 'Fastest-Growing Companies',
  key: 'BarChart',
  chartType: 'BarChart',
  width,
  height,
  data: [
    [
      'Year',
      'Grown',
      {
        role: 'style',
      },
    ],
    ['2010', 10000, 'fill-color: #48A6F2; fill-opacity: 0.4'],
    ['2012', 21500, 'fill-color: #f64744; fill-opacity: 0.4'],
    ['2014', 56598, 'fill-color: #ffbf00; fill-opacity: 0.4'],
    ['2016', 85256, 'fill-color: #511E78; fill-opacity: 0.4'],
  ],
  options: {
    title: 'One of the Fastest-Growing Companies',
    titleTextStyle: {
      color: '#788195',
    },
    bar: {
      groupWidth: '95%',
    },
    legend: {
      position: 'none',
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true,
    },
    hAxis: {
      textStyle: {
        color: '#788195',
      },
    },
    vAxis: {
      textStyle: {
        color: '#788195',
      },
    },
    tooltip: {
      textStyle: {
        color: '#788195',
      },
    },
  },
  chartEvents: [
    {
      eventName: 'onmouseover',
    },
  ],
};

/* * * * * * * * * * * * * * * * * * * *
              Line Charts
* * * * * * * * * * * * * * * * * * * */
const lineChart = {
  title: 'Caregivers in time',
  chartType: 'LineChart',
  key: 'LineChart',
  width,
  height,
  columns: [
    {
      label: 'time',
      type: 'number',
    },
    {
      label: 'Caregivers',
      type: 'number',
    },
  ],
  rows: [
    [1949, 11],
    [1949.08333333333, 11],
    [1949.16666666667, 13],
    [1949.25, 12],
    [1949.33333333333, 12],
    [1949.41666666667, 13],
    [1949.5, 14],
    [1949.58333333333, 14],
    [1949.66666666667, 136],
    [1949.75, 119],
    [1949.83333333333, 104],
    [1949.91666666667, 118],
    [1950, 115],
    [1950.08333333333, 126],
    [1950.16666666667, 141],
    [1950.25, 135],
    [1950.33333333333, 125],
    [1950.41666666667, 149],
    [1950.5, 170],
    [1950.58333333333, 170],
    [1950.66666666667, 158],
    [1950.75, 133],
    [1950.83333333333, 114],
    [1950.91666666667, 140],
    [1951, 145],
    [1951.08333333333, 150],
    [1951.16666666667, 178],
    [1951.25, 163],
    [1951.33333333333, 172],
    [1951.41666666667, 178],
    [1951.5, 199],
    [1951.58333333333, 199],
    [1951.66666666667, 184],
    [1951.75, 162],
    [1951.83333333333, 146],
    [1951.91666666667, 166],
    [1952, 171],
    [1952.08333333333, 180],
    [1952.16666666667, 193],
    [1952.25, 181],
    [1952.33333333333, 183],
    [1952.41666666667, 218],
    [1952.5, 230],
    [1952.58333333333, 242],
    [1952.66666666667, 209],
    [1952.75, 191],
    [1952.83333333333, 172],
    [1952.91666666667, 194],
    [1953, 196],
    [1953.08333333333, 196],
    [1953.16666666667, 236],
    [1953.25, 235],
    [1953.33333333333, 229],
    [1953.41666666667, 243],
    [1953.5, 264],
    [1953.58333333333, 272],
    [1953.66666666667, 237],
    [1953.75, 211],
    [1953.83333333333, 180],
    [1953.91666666667, 201],
    [1954, 204],
    [1954.08333333333, 188],
    [1954.16666666667, 235],
    [1954.25, 227],
    [1954.33333333333, 234],
    [1954.41666666667, 264],
    [1954.5, 302],
    [1954.58333333333, 293],
    [1954.66666666667, 259],
    [1954.75, 229],
    [1954.83333333333, 203],
    [1954.91666666667, 229],
    [1955, 242],
    [1955.08333333334, 233],
    [1955.16666666667, 267],
    [1955.25, 269],
    [1955.33333333334, 270],
    [1955.41666666667, 315],
    [1955.5, 364],
    [1955.58333333334, 347],
    [1955.66666666667, 312],
    [1955.75, 274],
    [1955.83333333334, 237],
    [1955.91666666667, 278],
    [1956, 284],
    [1956.08333333334, 277],
    [1956.16666666667, 317],
    [1956.25, 313],
    [1956.33333333334, 318],
    [1956.41666666667, 374],
    [1956.5, 413],
    [1956.58333333334, 405],
    [1956.66666666667, 355],
    [1956.75, 306],
    [1956.83333333334, 271],
    [1956.91666666667, 306],
    [1957, 315],
    [1957.08333333334, 301],
    [1957.16666666667, 356],
    [1957.25, 348],
    [1957.33333333334, 355],
    [1957.41666666667, 422],
    [1957.5, 465],
    [1957.58333333334, 467],
    [1957.66666666667, 404],
    [1957.75, 347],
    [1957.83333333334, 305],
    [1957.91666666667, 336],
    [1958, 340],
    [1958.08333333334, 318],
    [1958.16666666667, 362],
    [1958.25, 348],
    [1958.33333333334, 363],
    [1958.41666666667, 435],
    [1958.5, 491],
    [1958.58333333334, 505],
    [1958.66666666667, 404],
    [1958.75, 359],
    [1958.83333333334, 310],
    [1958.91666666667, 337],
    [1959, 360],
    [1959.08333333334, 342],
    [1959.16666666667, 406],
    [1959.25, 396],
    [1959.33333333334, 420],
    [1959.41666666667, 472],
    [1959.5, 548],
    [1959.58333333334, 559],
    [1959.66666666667, 463],
    [1959.75, 407],
    [1959.83333333334, 362],
    [1959.91666666667, 405],
    [1960, 417],
    [1960.08333333334, 391],
    [1960.16666666667, 419],
    [1960.25, 461],
    [1960.33333333334, 472],
    [1960.41666666667, 535],
    [1960.5, 622],
    [1960.58333333334, 606],
    [1960.66666666667, 508],
    [1960.75, 461],
    [1960.83333333334, 390],
    [1960.91666666667, 432],
  ],
  options: {
    legend: {
      textStyle: {
        color: '#788195',
      },
    },
    hAxis: {
      textStyle: {
        color: '#788195',
      },
      title: 'Time',
      titleTextStyle: {
        color: '#788195',
      },
    },
    vAxis: {
      textStyle: {
        color: '#788195',
      },
      title: 'Caregivers',
      titleTextStyle: {
        color: '#788195',
      },
    },
    colors: ['#48A6F2'],
    dataOpacity: 1.0,
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true,
    },
    tooltip: {
      textStyle: {
        color: '#788195',
      },
    },
  },
};

/* * * * * * * * * * * * * * * * * * * *
              Scatter Charts
* * * * * * * * * * * * * * * * * * * */
const ScatterChart = {
  title: 'Scatter Chart',
  key: 'ScatterChart',
  chartType: 'ScatterChart',
  width,
  height,
  data: [
    ['Age', 'Weight'],
    [8, 12],
    [4, 10.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7],
    [8, 11],
    [12, 8],
    [9.5, 14],
    [6.5, 12],
  ],
  options: {
    title: 'Age vs. Weight Comparison',
    titleTextStyle: {
      color: '#788195',
    },
    hAxis: {
      title: 'Age',
      titleTextStyle: {
        color: '#788195',
      },
      minValue: 0,
      maxValue: 15,
      textStyle: {
        color: '#788195',
      },
    },
    vAxis: {
      title: 'Weight',
      titleTextStyle: {
        color: '#788195',
      },
      minValue: 0,
      maxValue: 15,
      textStyle: {
        color: '#788195',
      },
    },
    legend: 'none',
    colors: ['#42A5F5'],
    dataOpacity: 0.8,
    tooltip: {
      textStyle: {
        color: '#788195',
      },
    },
  },
};

/* * * * * * * * * * * * * * * * * * * *
              Area Charts
* * * * * * * * * * * * * * * * * * * */
const AreaChart = {
  title: 'Area Chart',
  key: 'AreaChart',
  chartType: 'AreaChart',
  width,
  height,
  data: [
    ['Year', 'Sales', 'Expenses'],
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540],
  ],
  options: {
    legend: {
      textStyle: {
        color: '#788195',
      },
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true,
    },
    hAxis: {
      textStyle: {
        color: '#788195',
      },
    },
    vAxis: {
      textStyle: {
        color: '#788195',
      },
    },
    colors: ['#48A6F2', '#511E78'],
    dataOpacity: 0.6,
    tooltip: {
      textStyle: {
        color: '#788195',
      },
    },
  },
};

/* * * * * * * * * * * * * * * * * * * *
              Combo Charts
* * * * * * * * * * * * * * * * * * * */
const ComboChart = {
  title: 'Average Growns by Office',
  key: 'ComboChart',
  chartType: 'ComboChart',
  width,
  height,
  data: [
    [
      'Month',
      'Maryland',
      'Washington, D.C.',
      'Northern Virginia',
      'Average',
    ],
    ['2012/13', 938, 522, 998, 714.6],
    ['2013/14', 1120, 599, 1268, 882],
    ['2014/15', 1167, 587, 807, 723],
    ['2015/16', 1110, 615, 968, 709.4],
    ['2016/17', 691, 629, 1026, 769.6],
  ],
  options: {
    title: 'Grown by Office',
    titleTextStyle: {
      color: '#788195',
    },
    legend: {
      textStyle: {
        color: '#788195',
      },
    },
    hAxis: {
      textStyle: {
        color: '#788195',
      },
      title: 'Office',
      titleTextStyle: {
        color: '#788195',
      },
    },
    vAxis: {
      textStyle: {
        color: '#788195',
      },
      title: 'Grown',
      titleTextStyle: {
        color: '#788195',
      },
    },
    seriesType: 'bars',
    series: {
      5: {
        type: 'line',
      },
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true,
    },
    colors: ['#00b16a', '#ff6384', '#511E78', '#01C0C8'],
    dataOpacity: 0.6,
    tooltip: {
      textStyle: {
        color: '#788195',
      },
    },
  },
};

/* * * * * * * * * * * * * * * * * * * *
              Donut Charts
* * * * * * * * * * * * * * * * * * * */
const DonutChart = {
  title: 'Caregivers Daily Activities',
  key: 'DonutChart',
  chartType: 'PieChart',
  width,
  height,
  data: [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ],
  options: {
    title: 'My Daily Activities',
    titleTextStyle: {
      color: '#788195',
    },
    legend: {
      textStyle: {
        color: '#788195',
      },
    },
    pieHole: 0.4,
    pieSliceTextStyle: {
      color: '#ffffff',
    },
    is3D: true,
    colors: ['#9678AE', '#F99FB4', '#C8E4FB', '#01C0C8', '#ffbf00'],
    tooltip: {
      textStyle: {
        color: '#788195',
      },
    },
  },
};

/* * * * * * * * * * * * * * * * * * * *
            Timeline Charts
* * * * * * * * * * * * * * * * * * * */
const Timeline = {
  title: 'Offices Timeline',
  key: 'Timeline',
  chartType: 'Timeline',
  chartPackage: 'timeline',
  width,
  height,
  columns: [
    {
      id: 'Term',
      type: 'string',
    },
    {
      id: 'Office',
      type: 'string',
    },
    {
      id: 'Start',
      type: 'date',
    },
    {
      id: 'End',
      type: 'date',
    },
  ],
  rows: [
    [
      '1',
      'Washington D.C.',
      new Date('2002-04-29T18:00:00.000Z'),
      new Date('2017-10-03T18:00:00.000Z'),
    ],
    [
      '2',
      'Maryland',
      new Date('2009-03-03T18:00:00.000Z'),
      new Date('2017-10-03T18:00:00.000Z'),
    ],
    [
      '3',
      'Northern Virginia',
      new Date('2013-03-03T18:00:00.000Z'),
      new Date('2017-10-03T18:00:00.000Z'),
    ],
  ],
  options: {
    colors: ['#ffbf00', '#F55F82', '#48A6F2'],
    tooltip: {
      textStyle: {
        color: '#788195',
      },
    },
  },
};

/* * * * * * * * * * * * * * * * * * * *
          Trend Lines Charts
* * * * * * * * * * * * * * * * * * * */
const TrendLines = {
  title: 'Age Comparison',
  key: 'TrendLines',
  chartType: 'ScatterChart',
  width,
  height,
  data: [
    ['Clients', 'Caregivers'],
    [38, 37],
    [24, 19.5],
    [21, 52],
    [34, 22],
    [36, 16.5],
    [43, 32.8],
    [41, 72],
  ],
  options: {
    title: 'Clients age - Caregivers age',
    titleTextStyle: {
      color: '#788195',
    },
    hAxis: {
      textStyle: {
        color: '#788195',
      },
      title: 'Caregivers',
      titleTextStyle: {
        color: '#788195',
      },
    },
    vAxis: {
      textStyle: {
        color: '#788195',
      },
      title: 'Clients',
      titleTextStyle: {
        color: '#788195',
      },
    },
    legend: 'none',
    trendlines: {
      0: {
        type: 'exponential',
        colors: '#48A6F2',
      },
    },
    tooltip: {
      textStyle: {
        color: '#788195',
      },
    },
  },
};

/* * * * * * * * * * * * * * * * * * * *
              Gantt Charts
* * * * * * * * * * * * * * * * * * * */
const Gantt = {
  title: 'Progress Graph',
  key: 'Gantt',
  chartType: 'Gantt',
  chartPackages: ['gantt'],
  width,
  height,
  columns: [
    {
      id: 'Task ID',
      type: 'string',
    },
    {
      id: 'Task Name',
      type: 'string',
    },
    {
      id: 'Start Date',
      type: 'date',
    },
    {
      id: 'End Date',
      type: 'date',
    },
    {
      id: 'Duration',
      type: 'number',
    },
    {
      id: 'Percent Complete',
      type: 'number',
    },
    {
      id: 'Dependencies',
      type: 'string',
    },
  ],
  rows: [
    [
      'Research',
      'Find sources',
      new Date('2014-12-31T18:00:00.000Z'),
      new Date('2015-01-04T18:00:00.000Z'),
      null,
      100,
      null,
    ],
    [
      'Write',
      'Write paper',
      null,
      new Date('2015-01-08T18:00:00.000Z'),
      259200000,
      25,
      'Research,Outline',
    ],
    [
      'Cite',
      'Create bibliography',
      null,
      new Date('2015-01-06T18:00:00.000Z'),
      86400000,
      20,
      'Research',
    ],
    [
      'Complete',
      'Hand in paper',
      null,
      new Date('2015-01-09T18:00:00.000Z'),
      86400000,
      0,
      'Cite,Write',
    ],
    [
      'Outline',
      'Outline paper',
      null,
      new Date('2015-01-05T18:00:00.000Z'),
      86400000,
      100,
      'Research',
    ],
  ],
  options: {
    tooltip: {
      textStyle: {
        color: '#788195',
      },
    },
    gantt: {
      criticalPathEnabled: false, // Critical path arrows will be the same as other arrows.
      arrow: {
        angle: 100,
        width: 2,
        color: '#9678AE',
        radius: 0,
      },
    },
  },
};

export {
  BarChart,
  lineChart,
  ScatterChart,
  AreaChart,
  ComboChart,
  DonutChart,
  Timeline,
  TrendLines,
  Gantt,
};
