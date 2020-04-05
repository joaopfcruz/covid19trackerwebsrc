import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Input
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import {dates_xaxis} from '../../data/data'

const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')

// Infected Country 1

var elements = 60;
var data_infected_country1 = [];
var data_infectedcum_country1 = [];

for (var i = 0; i < elements; i++) {
  data_infected_country1.push(0);
  data_infectedcum_country1.push(0);
}

var total_infections_country_1 = 0

const infectedCountry1Chart = {
  labels: dates_xaxis.split("-"),
  datasets: [
    {
      label: 'Infections',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data_infected_country1,
    },
    {
      label: 'Infections (cumulative)',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data_infectedcum_country1,
    }
  ],
};

const infectedCountry1ChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 90,
          stepSize: 5,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 1250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};


// Infected Country 2

var elements = 60;
var data_infected_country2 = [];
var data_infectedcum_country2 = [];

for (var i = 0; i < elements; i++) {
  data_infected_country2.push(0);
  data_infectedcum_country2.push(0);
}

var total_infections_country_2 = 0


const infectedCountry2Chart = {
  labels: dates_xaxis.split("-"),
  datasets: [
    {
      label: 'Infections',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data_infected_country2,
    },
    {
      label: 'Infections (cumulative)',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data_infectedcum_country2,
    }
  ],
};

const infectedCountry2ChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 60,
          stepSize: 5,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 1250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// Deaths Country 1

var elements = 60;
var data_deaths_country1 = [];
var data_deathscum_country1 = [];

for (var i = 0; i < elements; i++) {
  data_deaths_country1.push(0);
  data_deathscum_country1.push(0);
}

var total_deaths_country_1 = 0

const deathsCountry1Chart = {
  labels: dates_xaxis.split("-"),
  datasets: [
    {
      label: 'Infections',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data_deaths_country1,
    },
    {
      label: 'Infections (cumulative)',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data_deathscum_country1,
    }
  ],
};

const deathsCountry1ChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 60,
          stepSize: 5,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 1250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// Deaths Country 2

var elements = 60;
var data_deaths_country2 = [];
var data_deathscum_country2 = [];

for (var i = 0; i < elements; i++) {
  data_deaths_country2.push(0);
  data_deathscum_country2.push(0);
}

var total_deaths_country_2 = 0

const deathsCountry2Chart = {
  labels: dates_xaxis.split("-"),
  datasets: [
    {
      label: 'Infections',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data_deaths_country2,
    },
    {
      label: 'Infections (cumulative)',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data_deathscum_country2,
    }
  ],
};

const deathsCountry2ChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 60,
          stepSize: 5,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 1250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// Infected Country 1 / Country 2 (Running days)

var elements = 60;
var data_infectedrunning_country1 = [];
var data_infectedrunning_country2 = [];

for (var i = 0; i < elements; i++) {
  data_infectedrunning_country1.push(0);
  data_infectedrunning_country2.push(0);
}

const infectedRunningChart = {
  labels: dates_xaxis.split("-"),
  datasets: [
    {
      label: 'Infections',
      backgroundColor: 'transparent',
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data_infectedrunning_country1,
    },
    {
      label: 'Infections (cumulative)',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data_infectedrunning_country2,
    }
  ],
};

const infectedRunningChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 60,
          stepSize: 5,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 1250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// Deaths Country 1 / Country 2 (Running days)

var elements = 60;
var data_deathsrunning_country1 = [];
var data_deathsrunning_country2 = [];

for (var i = 0; i < elements; i++) {
  data_deathsrunning_country1.push(0);
  data_deathsrunning_country2.push(0);
}

const deathsRunningChart = {
  labels: dates_xaxis.split("-"),
  datasets: [
    {
      label: 'Infections',
      backgroundColor: 'transparent',
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data_deathsrunning_country1,
    },
    {
      label: 'Infections (cumulative)',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data_deathsrunning_country2,
    }
  ],
};

const deathsRunningChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 60,
          stepSize: 5,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 1250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.country1select_state = {value: ''};
    this.handleChange_country1select = this.handleChange_country1select.bind(this);
    this.country2select_state = {value: ''};
    this.handleChange_country2select = this.handleChange_country2select.bind(this);
  }

  handleChange_country1select(event) {
    this.country1select_state.value = event.target.value
    document.getElementById("infectedCountry1Chart_title").innerHTML = "Number of Confirmed Infections (" + this.country1select_state.value + ")";
    document.getElementById("deathsCountry1Chart_title").innerHTML = "Number of Confirmed Deaths (" + this.country1select_state.value + ")";
  }

  handleChange_country2select(event) {
    this.country2select_state.value = event.target.value
    document.getElementById("infectedCountry2Chart_title").innerHTML = "Number of Confirmed Infections (" + this.country2select_state.value + ")";
    document.getElementById("deathsCountry2Chart_title").innerHTML = "Number of Confirmed Deaths (" + this.country2select_state.value + ")";
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const countries_map = require("../../data/countries.json");
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="6">
          <Card>
          <Input type="select" onChange={this.handleChange_country1select}>
            <option disabled selected="selected">Select a Country</option>
            {countries_map.countries.map(item => (
              <option value={item.id}>
                {item.country}
              </option>
            ))}
          </Input>
          </Card>
          </Col>

          <Col xs="12" sm="6" lg="6">
          <Card>
          <Input type="select" onChange={this.handleChange_country2select}>
            <option disabled selected="selected">Select a Country</option>
            {countries_map.countries.map(item => (
              <option value={item.id}>
                {item.country}
              </option>
            ))}
          </Input>
          </Card>
          </Col>
        </Row>


        <Row>
          <Col xs="12" sm="6" lg="6">
            <Card>
            <CardHeader>
              <a id="infectedCountry1Chart_title">Number of Confirmed Infections</a>
            </CardHeader>
              <CardBody>
                <div className="callout callout-info">
                  <small className="text-muted">Total Number of Infections</small>
                  <br />
                  <strong className="h4">{total_infections_country_1}</strong>
                </div>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={infectedCountry1Chart} options={infectedCountry1ChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="6">
            <Card>
            <CardHeader>
              <a id="infectedCountry2Chart_title">Number of Confirmed Infections</a>
            </CardHeader>
              <CardBody>
                <div className="callout callout-info">
                  <small className="text-muted">Total Number of Infections</small>
                  <br />
                  <strong className="h4">{total_infections_country_2}</strong>
                </div>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={infectedCountry2Chart} options={infectedCountry2ChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>


        <Row>
          <Col xs="12" sm="6" lg="6">
            <Card>
              <CardHeader>
                <a id="deathsCountry1Chart_title">Number of Confirmed Deaths</a>
              </CardHeader>
              <CardBody>
                <div className="callout callout-danger">
                  <small className="text-muted">Total Number of Deaths</small>
                  <br />
                  <strong className="h4">{total_deaths_country_1}</strong>
                </div>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={deathsCountry1Chart} options={deathsCountry1ChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="6">
            <Card>
              <CardHeader>
                <a id="deathsCountry2Chart_title">Number of Confirmed Deaths</a>
              </CardHeader>
              <CardBody>
                <div className="callout callout-danger">
                  <small className="text-muted">Total Number of Deaths</small>
                  <br />
                  <strong className="h4">{total_deaths_country_2}</strong>
                </div>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={deathsCountry2Chart} options={deathsCountry2ChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>


        <Row>
          <Col>
            <Card>
              <CardHeader>
                <a id="infectedRunningChart_title">Number of Confirmed Infections (Both countries)</a>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={infectedRunningChart} options={infectedRunningChartOpts} height={300} />
                </div>
                <small className="text-muted">Day 1: First day with more than 50 confirmed infections (cumulative)</small>
              </CardBody>
            </Card>
          </Col>
        </Row>



        <Row>
          <Col>
            <Card>
              <CardHeader>
              <a id="deathsRunningChart_title">Number of Confirmed Infections (Both countries)</a>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={deathsRunningChart} options={deathsRunningChartOpts} height={300} />
                </div>
                <small className="text-muted">Day 1: First day with more than 50 confirmed infections (cumulative)</small>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
