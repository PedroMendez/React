import React, { Component } from 'react';
import { Menu, Popover, Button, Row, Col } from 'antd';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import Checkbox from '../../components/uielements/checkbox';
import basicStyle from '../../config/basicStyle';
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
import IntlMessages from '../../components/utility/intlMessages';
import Input from '../../components/uielements/input';

const Search = Input.Search;

class MenusCalendar extends Component {
  constructor(props) {
    super(props);
    this.handleCheckedChange = this.handleCheckedChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleCheckedChange(e) {
    if(e.target.value === 1 && e.target.checked === true) {
      this.setState({ 
        value1: 'Laundry', 
      })
    } else if(e.target.value === 1 && e.target.checked === false) {
      this.setState({ 
        value1: '', 
      })      
    }
    if(e.target.value === 2 && e.target.checked === true) {
      this.setState({ 
        value2: 'Med managment', 
      })
    } else if(e.target.value === 2 && e.target.checked === false) {
      this.setState({ 
        value2: '', 
      })      
    }       
    if(e.target.value === 3 && e.target.checked === true) {
      this.setState({ 
        value3: 'PRN', 
      }) 
    } else if(e.target.value === 3 && e.target.checked === false) {
      this.setState({ 
        value3: '', 
      })      
    }               
  }

  handleFilterChange(e) {
    e.preventDefault() 
    console.log(this.state) 
  }

  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    const demoStyle = {
      marginBottom: '8px',
      marginRight: '8px',
      width: '36%'
    };

    const menuClients = (
      <Menu>
        <Menu.Item>
          <Checkbox
            onChange={this.handleCheckedChange}
            value={1}
          >
            <IntlMessages id="calendar.dropdownContent.event1" />
          </Checkbox>
        </Menu.Item>
        <Menu.Item>
          <Checkbox
            onChange={this.handleCheckedChange}
            value={2}
          >
            <IntlMessages id="calendar.dropdownContent.event2" />
          </Checkbox>
        </Menu.Item>
        <Menu.Item>
          <Checkbox
            onChange={this.handleCheckedChange}
            value={3}
          >
            <IntlMessages id="calendar.dropdownContent.event3" />
          </Checkbox>
        </Menu.Item>       
      </Menu>
    );
    return (
      <LayoutWrapper className="calendar-filters">
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title={<IntlMessages id="calendar.dropdown.caregivers" />}>
              <ContentHolder>
                <Search placeholder="Search..." />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title={<IntlMessages id="calendar.dropdown.events" />}>
              <ContentHolder>
                <Popover content={menuClients} trigger="click">
                  <Button style={demoStyle}>
                    <IntlMessages id="calendar.dropdownBtn.events" />
                  </Button>
                </Popover>
                <Button
                  onClick={this.handleFilterChange}
                  type="primary"
                  style={{marginLeft: '15%'}}
                  >
                  <IntlMessages id="calendar.filterBtn.events" />
                </Button>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}    

export default MenusCalendar;
