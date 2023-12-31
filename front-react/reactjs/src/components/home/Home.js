import React, { Component } from 'react'
import { Statistic, Icon, Grid, Container, Image, Segment, Dimmer, Loader } from 'semantic-ui-react'

import './Home.css';

class Home extends Component {
  state = {
    numberOfUsers: 0,
    numberOfOrders: 0,
    isLoading: false,
  }

  render() {
    return (
      <Container text>
        <Grid stackable columns={2}>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Segment color='violet'>
                <Statistic>
                  <Statistic.Value><Icon name='user' color='grey' />10000+</Statistic.Value>
                  <Statistic.Label>Users</Statistic.Label>
                </Statistic>
              </Segment>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Segment color='violet'>
                <Statistic>
                  <Statistic.Value><Icon name='utensils' color='grey' />500000+</Statistic.Value>
                  <Statistic.Label>Orders</Statistic.Label>
                </Statistic>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        
        </Grid>
      </Container>
    )
    
  }
}

export default Home