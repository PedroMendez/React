import React, { Component } from 'react';
import Async from '../../../helpers/asyncComponent';
import { Row, Col } from 'antd';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';
import * as configs from './config';

const GoogleChart = (props) => <Async load={import(/* webpackChunkName: "googleChart" */ 'react-google-charts')} componentProps={props} componentArguement={'googleChart'} />;

export default class ReCharts extends Component {

  render() {
    const chartEvents = [
      {
        eventName: 'select',
        callback(Chart) {
          console.log('Selected ', Chart.chart.getSelection());
        },
      },
    ];
    const { rowStyle, colStyle, gutter } = basicStyle;
    return(<LayoutWrapper className="isoMapPage">
      <PageHeader>Reports</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box
            title={configs.BarChart.title}
          >
            <ContentHolder>
              <GoogleChart {...configs.BarChart} chartEvents={chartEvents} />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box
            title={configs.lineChart.title}
          >
            <ContentHolder>
              <GoogleChart {...configs.lineChart} />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box
            title={configs.ComboChart.title}
          >
            <ContentHolder>
              <GoogleChart {...configs.ComboChart} />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box
            title={configs.Gantt.title}
          >
            <ContentHolder>
              <GoogleChart {...configs.Gantt} />
            </ContentHolder>
          </Box>
        </Col>        
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box
            title={configs.TrendLines.title}
          >
            <ContentHolder>
              <GoogleChart {...configs.TrendLines} />
            </ContentHolder>
          </Box>
        </Col>      
        <Col md={12} xs={24} style={colStyle}>
          <Box
            title={configs.Timeline.title}
          >
            <ContentHolder>
              <GoogleChart {...configs.Timeline} />
            </ContentHolder>
          </Box>
        </Col>      
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box
            title={configs.DonutChart.title}
          >
            <ContentHolder>
              <GoogleChart {...configs.DonutChart} />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>);
  }
};
export { GoogleChart };
