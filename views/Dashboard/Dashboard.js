import React, { Component, } from 'react';
import { HorizontalBar, Line } from 'react-chartjs-2';
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
import {datasets, dataset_delimiter, sanitizer_regex, dataset_geoid_idx, dataset_dates_idx, dataset_cases_idx, dataset_deaths_idx, dataset_casesrunning_idx, dataset_deathsrunning_idx, dataset_dayncases_idx, dataset_dayndeaths_idx, dataset_population_idx} from '../../data/data'

const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')

// Infected Country 1

const infectedCountry1Chart = {
  labels: [],
  datasets: [
    {
      label: 'Infections',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: new Array(9999),
      yAxisID: 'A'
    },
    {
      label: 'Infections (cumulative)',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: new Array(9999),
      yAxisID: 'B'
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
        id: 'A',
        position: 'left',
        scaleLabel: {
          display: true,
          labelString: 'Infections'
        },
        ticks: {
          beginAtZero: true,
        },
      },
      {
        id: 'B',
        position: 'right',
        scaleLabel: {
          display: true,
          labelString: 'Infections (cumulative)'
        },
        ticks: {
          beginAtZero: true,
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

const infectedCountry2Chart = {
  labels: [],
  datasets: [
    {
      label: 'Infections',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: new Array(9999),
      yAxisID: 'A'
    },
    {
      label: 'Infections (cumulative)',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: new Array(9999),
      yAxisID: 'B'
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
          maxTicksLimit: 90,
          stepSize: 5,
        },
      }],
    yAxes: [
      {
        id: 'A',
        position: 'left',
        scaleLabel: {
          display: true,
          labelString: 'Infections'
        },
        ticks: {
          beginAtZero: true,
        },
      },
      {
        id: 'B',
        position: 'right',
        scaleLabel: {
          display: true,
          labelString: 'Infections (cumulative)'
        },
        ticks: {
          beginAtZero: true,
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

const deathsCountry1Chart = {
  labels: [],
  datasets: [
    {
      label: 'Deaths',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: new Array(9999),
      yAxisID: 'A'
    },
    {
      label: 'Deaths (cumulative)',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: new Array(9999),
      yAxisID: 'B'
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
          maxTicksLimit: 90,
          stepSize: 5,
        },
      }],
    yAxes: [
      {
        id: 'A',
        position: 'left',
        scaleLabel: {
          display: true,
          labelString: 'Deaths'
        },
        ticks: {
          beginAtZero: true,
        },
      },
      {
        id: 'B',
        position: 'right',
        scaleLabel: {
          display: true,
          labelString: 'Deaths (cumulative)'
        },
        ticks: {
          beginAtZero: true,
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

const deathsCountry2Chart = {
  labels: [],
  datasets: [
    {
      label: 'Deaths',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: new Array(9999),
      yAxisID: 'A'
    },
    {
      label: 'Deaths (cumulative)',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: new Array(9999),
      yAxisID: 'B'
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
          maxTicksLimit: 90,
          stepSize: 5,
        },
      }],
    yAxes: [
      {
        id: 'A',
        position: 'left',
        scaleLabel: {
          display: true,
          labelString: 'Deaths'
        },
        ticks: {
          beginAtZero: true,
        },
      },
      {
        id: 'B',
        position: 'right',
        scaleLabel: {
          display: true,
          labelString: 'Deaths (cumulative)'
        },
        ticks: {
          beginAtZero: true,
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

const infectedRunningChart = {
  labels: [],
  datasets: [
    {
      label: '',
      backgroundColor: 'transparent',
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: new Array(9999),
    },
    {
      label: '',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: new Array(9999),
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
          maxTicksLimit: 90,
          stepSize: 5,
        },
      }],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Infections (Cumulative)'
        },
        ticks: {
          beginAtZero: true,
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

const deathsRunningChart = {
  labels: [],
  datasets: [
    {
      label: '',
      backgroundColor: 'transparent',
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: new Array(9999),
    },
    {
      label: '',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: new Array(9999),
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
          maxTicksLimit: 90,
          stepSize: 5,
        },
      }],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Deaths (cumulative)'
        },
        ticks: {
          beginAtZero: true,
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

// Infected Per Million

const infectedPerMillionChart = {
  labels: [],
  datasets: [
    {
      label: '',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: new Array(9999),
    },
  ],
};

const infectedPerMillionChartOpts = {
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
    display: false,
  },
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Infections Per One Million Population'
        },
        ticks: {
          beginAtZero: true,
        },
      }],
    yAxes: [
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

// Deaths Per Million

const deathsPerMillionChart = {
  labels: [],
  datasets: [
    {
      label: '',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [],
    },
  ],
};

const deathsPerMillionChartOpts = {
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
    display: false,
  },
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Deaths Per One Million Population'
        },
        ticks: {
          beginAtZero: true,
        },
      }],
    yAxes: [
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
    if (sanitizer_regex.test(event.target.value)){
      this.country1select_state.value = event.target.value
      this.refreshIndividualCharts(this.country1select_state.value, "1");
      this.refreshRunningAndPerMillionCharts();
    }
  }

  handleChange_country2select(event) {
    if (sanitizer_regex.test(event.target.value)){
      this.country2select_state.value = event.target.value
      this.refreshIndividualCharts(this.country2select_state.value, "2");
      this.refreshRunningAndPerMillionCharts();
    }
  }

  refreshIndividualCharts(country, countryId){
    var stop = false;
    for (var i = 0; i < datasets.length && !stop; i++){
      if (datasets[i][dataset_geoid_idx] === country){
        stop = !stop;
        var cases = datasets[i][dataset_cases_idx].split(dataset_delimiter);
        var new_cases = [];
        for (var j = 0; j < cases.length; j++){
          new_cases.push(parseInt(cases[j]));
        }
        var casesrunning = datasets[i][dataset_casesrunning_idx].split(dataset_delimiter);
        var new_casesrunning = [];
        for (j = 0; j < casesrunning.length; j++){
          new_casesrunning.push(parseInt(casesrunning[j]));
        }
        var deaths = datasets[i][dataset_deaths_idx].split(dataset_delimiter);
        var new_deaths = [];
        for (j = 0; j < deaths.length; j++){
          new_deaths.push(parseInt(deaths[j]));
        }
        var deathsrunning = datasets[i][dataset_deathsrunning_idx].split(dataset_delimiter);
        var new_deathsrunning = [];
        for (j = 0; j < deathsrunning.length; j++){
          new_deathsrunning.push(parseInt(deathsrunning[j]));
        }

        if (countryId === "1"){
          document.getElementById("infectedCountry1Chart_title").innerHTML = "Confirmed Infections (" + this.country1select_state.value + ")";
          document.getElementById("deathsCountry1Chart_title").innerHTML = "Confirmed Deaths (" + this.country1select_state.value + ")";
          infectedCountry1Chart.labels = datasets[i][dataset_dates_idx].split(dataset_delimiter);
          infectedCountry1Chart.datasets[0].data = new_cases;
          infectedCountry1Chart.datasets[1].data = new_casesrunning;
          this._infectedCountry1ChartRef.chartInstance.update();
          document.getElementById("total_infections_country_1").innerHTML = new_casesrunning[new_casesrunning.length-1];

          deathsCountry1Chart.labels = datasets[i][dataset_dates_idx].split(dataset_delimiter);
          deathsCountry1Chart.datasets[0].data = new_deaths;
          deathsCountry1Chart.datasets[1].data = new_deathsrunning;
          this._deathsCountry1ChartRef.chartInstance.update();
          document.getElementById("total_deaths_country_1").innerHTML = new_deathsrunning[new_deathsrunning.length-1];

        } else if (countryId === "2") {
          document.getElementById("infectedCountry2Chart_title").innerHTML = "Confirmed Infections (" + this.country2select_state.value + ")";
          document.getElementById("deathsCountry2Chart_title").innerHTML = "Confirmed Deaths (" + this.country2select_state.value + ")";
          infectedCountry2Chart.labels = datasets[i][dataset_dates_idx].split(dataset_delimiter);
          infectedCountry2Chart.datasets[0].data = new_cases;
          infectedCountry2Chart.datasets[1].data = new_casesrunning;
          this._infectedCountry2ChartRef.chartInstance.update();
          document.getElementById("total_infections_country_2").innerHTML = new_casesrunning[new_casesrunning.length-1];

          deathsCountry2Chart.labels = datasets[i][dataset_dates_idx].split(dataset_delimiter);
          deathsCountry2Chart.datasets[0].data = new_deaths;
          deathsCountry2Chart.datasets[1].data = new_deathsrunning;
          document.getElementById("total_deaths_country_2").innerHTML = new_deathsrunning[new_deathsrunning.length-1];
          this._deathsCountry2ChartRef.chartInstance.update();
        }
      }
    }
  }

  refreshRunningAndPerMillionCharts(){
    if (this.country1select_state.value !== "" && this.country2select_state.value !== ""){
      document.getElementById("infectedRunningChart_title").innerHTML = "Confirmed Infections (" + this.country1select_state.value + "/" + this.country2select_state.value + ")";
      document.getElementById("deathsRunningChart_title").innerHTML = "Confirmed Deaths (" + this.country1select_state.value + "/" + this.country2select_state.value + ")";
      document.getElementById("infectedPerMillionChart_title").innerHTML = "Confirmed Infections Per One Million Population (" + this.country1select_state.value + "/" + this.country2select_state.value + ")";
      document.getElementById("deathsPerMillionChart_title").innerHTML = "Confirmed Deaths Per One Million Population (" + this.country1select_state.value + "/" + this.country2select_state.value + ")";

      var new_casesrunningdays_1 = [];
      var new_deathsrunningdays_1 = [];
      var new_casesrunning_1 = [];
      var new_deathsrunning_1 = [];
      var new_casesrunningdays_2 = [];
      var new_deathsrunningdays_2 = [];
      var new_casesrunning_2 = [];
      var new_deathsrunning_2 = [];
      var infected_per_million_1 = 0;
      var infected_per_million_2 = 0;
      var deaths_per_million_1 = 0;
      var deaths_per_million_2 = 0;

      var stop1 = false;
      var stop2 = false;
      for (var i = 0; i < datasets.length && (!stop1 || !stop2); i++){
        if (datasets[i][dataset_geoid_idx] === this.country1select_state.value){
          stop1 = !stop1;
          var casesrunningdays_1 = datasets[i][dataset_dayncases_idx].split(dataset_delimiter);
          var deathsrunningdays_1 = datasets[i][dataset_dayndeaths_idx].split(dataset_delimiter);
          var casesrunning_1 = datasets[i][dataset_casesrunning_idx].split(dataset_delimiter);
          var deathsrunning_1 = datasets[i][dataset_deathsrunning_idx].split(dataset_delimiter);
          for (var k = 0; k < casesrunningdays_1.length; k++){
            if (casesrunningdays_1[k] !== "-1"){
              new_casesrunningdays_1.push("Day " + casesrunningdays_1[k]);
              new_casesrunning_1.push(casesrunning_1[k]);
            }
          }
          for (k = 0; k < deathsrunningdays_1.length; k++){
            if (deathsrunningdays_1[k] !== "-1"){
              new_deathsrunningdays_1.push("Day " + deathsrunningdays_1[k]);
              new_deathsrunning_1.push(deathsrunning_1[k]);
            }
          }
          infected_per_million_1 = datasets[i][dataset_population_idx] !== "0" ? (1000000 * parseInt(casesrunning_1[casesrunning_1.length - 1]) / parseInt(datasets[i][dataset_population_idx])) : 0;
          deaths_per_million_1 = datasets[i][dataset_population_idx] !== "0" ? (1000000 * parseInt(deathsrunning_1[deathsrunning_1.length - 1]) / parseInt(datasets[i][dataset_population_idx])) : 0;

        }
        if (datasets[i][dataset_geoid_idx] === this.country2select_state.value) {
          stop1 = !stop1;
          var casesrunningdays_2 = datasets[i][dataset_dayncases_idx].split(dataset_delimiter);
          var deathsrunningdays_2 = datasets[i][dataset_dayndeaths_idx].split(dataset_delimiter);
          var casesrunning_2 = datasets[i][dataset_casesrunning_idx].split(dataset_delimiter);
          var deathsrunning_2 = datasets[i][dataset_deathsrunning_idx].split(dataset_delimiter);
          for (k = 0; k < casesrunningdays_2.length; k++){
            if (casesrunningdays_2[k] !== "-1"){
              new_casesrunningdays_2.push("Day " + casesrunningdays_2[k]);
              new_casesrunning_2.push(casesrunning_2[k]);
            }
          }
          for (k = 0; k < deathsrunningdays_2.length; k++){
            if (deathsrunningdays_2[k] !== "-1"){
              new_deathsrunningdays_2.push("Day " + deathsrunningdays_2[k]);
              new_deathsrunning_2.push(deathsrunning_2[k]);
            }
          }
          infected_per_million_2 = datasets[i][dataset_population_idx] !== "0" ? (1000000 * parseInt(casesrunning_2[casesrunning_2.length - 1]) / parseInt(datasets[i][dataset_population_idx])) : 0;
          deaths_per_million_2 = datasets[i][dataset_population_idx] !== "0" ? (1000000 * parseInt(deathsrunning_2[deathsrunning_2.length - 1]) / parseInt(datasets[i][dataset_population_idx])) : 0;
        }
      }

      infectedRunningChart.labels = new_casesrunningdays_1.length > new_casesrunningdays_2.length ? new_casesrunningdays_1 : new_casesrunningdays_2;
      deathsRunningChart.labels = new_deathsrunningdays_1.length > new_deathsrunningdays_2.length ? new_deathsrunningdays_1 : new_deathsrunningdays_2;

      infectedRunningChart.datasets[0].data = new_casesrunning_1;
      infectedRunningChart.datasets[0].label = this.country1select_state.value;
      deathsRunningChart.datasets[0].data = new_deathsrunning_1;
      deathsRunningChart.datasets[0].label = this.country1select_state.value;
      infectedRunningChart.datasets[1].data = new_casesrunning_2
      infectedRunningChart.datasets[1].label = this.country2select_state.value;
      deathsRunningChart.datasets[1].data = new_deathsrunning_2;
      deathsRunningChart.datasets[1].label = this.country2select_state.value;

      infectedPerMillionChart.datasets[0].data=[Math.round(infected_per_million_1 * 10) / 10, Math.round(infected_per_million_2 * 10) / 10];
      infectedPerMillionChart.labels=[this.country1select_state.value, this.country2select_state.value];
      deathsPerMillionChart.datasets[0].data=[Math.round(deaths_per_million_1 * 10) / 10, Math.round(deaths_per_million_2 * 10) / 10];
      deathsPerMillionChart.labels=[this.country1select_state.value, this.country2select_state.value];

      this._infectedRunningChartRef.chartInstance.update();
      this._deathsRunningChartRef.chartInstance.update();
      this._infectedPerMillionChartRef.chartInstance.update();
      this._deathsPerMillionChartRef.chartInstance.update();

    }
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
              <span id="infectedCountry1Chart_title">Confirmed Infections</span>
            </CardHeader>
              <CardBody>
                <div className="callout callout-info">
                  <small className="text-muted">Total Infections</small>
                  <br />
                  <strong className="h4" id="total_infections_country_1">0</strong>
                </div>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={infectedCountry1Chart} options={infectedCountry1ChartOpts} height={300} ref={child => {this._infectedCountry1ChartRef = child;}} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="6">
            <Card>
            <CardHeader>
              <span id="infectedCountry2Chart_title">Confirmed Infections</span>
            </CardHeader>
              <CardBody>
                <div className="callout callout-info">
                  <small className="text-muted">Total Infections</small>
                  <br />
                  <strong className="h4" id="total_infections_country_2">0</strong>
                </div>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={infectedCountry2Chart} options={infectedCountry2ChartOpts} height={300} ref={child => {this._infectedCountry2ChartRef = child;}} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>


        <Row>
          <Col xs="12" sm="6" lg="6">
            <Card>
              <CardHeader>
                <span id="deathsCountry1Chart_title">Confirmed Deaths</span>
              </CardHeader>
              <CardBody>
                <div className="callout callout-info">
                  <small className="text-muted">Total Deaths</small>
                  <br />
                  <strong className="h4" id="total_deaths_country_1">0</strong>
                </div>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={deathsCountry1Chart} options={deathsCountry1ChartOpts} height={300} ref={child => {this._deathsCountry1ChartRef = child;}} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="6">
            <Card>
              <CardHeader>
                <span id="deathsCountry2Chart_title">Confirmed Deaths</span>
              </CardHeader>
              <CardBody>
                <div className="callout callout-info">
                  <small className="text-muted">Total Deaths</small>
                  <br />
                  <strong className="h4" id="total_deaths_country_2">0</strong>
                </div>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={deathsCountry2Chart} options={deathsCountry2ChartOpts} height={300} ref={child => {this._deathsCountry2ChartRef = child;}} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>


        <Row>
          <Col xs="12" sm="6" lg="8">
            <Card>
              <CardHeader>
                <span id="infectedRunningChart_title">Confirmed Infections</span>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={infectedRunningChart} options={infectedRunningChartOpts} height={300} ref={child => {this._infectedRunningChartRef = child;}} />
                </div>
                <small className="text-muted">Day 1: First day with more than 50 confirmed infections (cumulative)</small>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="4">
            <Card>
            <CardHeader>
              <span id="infectedPerMillionChart_title">Confirmed Infections Per One Million Population</span>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                <HorizontalBar data={infectedPerMillionChart} options={infectedPerMillionChartOpts} height={300} ref={child => {this._infectedPerMillionChartRef = child;}} />
              </div>
              <small className="text-muted">Population as of 2018</small>
            </CardBody>
            </Card>
          </Col>
        </Row>



        <Row>
          <Col xs="12" sm="6" lg="8">
            <Card>
              <CardHeader>
              <span id="deathsRunningChart_title">Confirmed Deaths</span>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={deathsRunningChart} options={deathsRunningChartOpts} height={300} ref={child => {this._deathsRunningChartRef = child;}} />
                </div>
                <small className="text-muted">Day 1: First day with more than 10 confirmed deaths (cumulative)</small>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="4">
            <Card>
            <CardHeader>
              <span id="deathsPerMillionChart_title">Confirmed Deaths Per One Million Population</span>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                <HorizontalBar data={deathsPerMillionChart} options={deathsPerMillionChartOpts} height={300} ref={child => {this._deathsPerMillionChartRef = child;}} />
              </div>
              <small className="text-muted">Population as of 2018</small>
            </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
