import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import Timeline from '../../../components/uielements/timeline';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';
import IntlMessages from '../../../components/utility/intlMessages';

export default class extends Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <PageHeader>{<IntlMessages id="uiElements.timeline.timeline" />}</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title={<IntlMessages id="uiElements.timeline.basicExample" />}
              subtitle={<IntlMessages id="uiElements.timeline.basicTimeline" />}
            >
              <ContentHolder>
                <Timeline>
                  <Timeline.Item>
                    {<IntlMessages id="uiElements.timeline.createServiceSite" />}
                  </Timeline.Item>
                  <Timeline.Item>
                    {<IntlMessages id="uiElements.timeline.solveInitialNetwork" />}
                  </Timeline.Item>
                  <Timeline.Item>
                    {<IntlMessages id="uiElements.timeline.technicalTesting" />}
                  </Timeline.Item>
                  <Timeline.Item>
                    {<IntlMessages id="uiElements.timeline.networkProblemSolved" />}
                  </Timeline.Item>
                </Timeline>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title={<IntlMessages id="uiElements.timeline.colorExample" />}
              subtitle={<IntlMessages id="uiElements.timeline.colorExampleContent" />}
            >
              <ContentHolder>
                <Timeline>
                  <Timeline.Item color="green">
                    Create a services site 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item color="green">
                    Create a services site 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item color="red">
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                  </Timeline.Item>
                  <Timeline.Item>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                  </Timeline.Item>
                </Timeline>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title={<IntlMessages id="uiElements.timeline.custom" />}
              subtitle={<IntlMessages id="uiElements.timeline.customContent" />}
            >
              <ContentHolder>
                <Timeline>
                  <Timeline.Item>
                    Create a services site 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>
                    Solve initial network problems 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item
                    dot={
                      (
                        <Icon
                          type="clock-circle-o"
                          style={{ fontSize: '16px' }}
                        />
                      )
                    }
                    color="red"
                  >
                    Technical testing 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>
                    Network problems being solved 2015-09-01
                  </Timeline.Item>
                </Timeline>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title={<IntlMessages id="uiElements.timeline.lastNode" />}
              subtitle={<IntlMessages id="uiElements.timeline.lastNodeContent" />}
            >
              <ContentHolder>
                <Timeline pending={<a>{<IntlMessages id="uiElements.timeline.seeMore" />}</a>}>
                  <Timeline.Item>
                    Create a services site 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>
                    Solve initial network problems 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                </Timeline>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
