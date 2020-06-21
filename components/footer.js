import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Table,
  Label,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import Head from 'next/head';

const Footer = () => (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Actual Links' />
            <List link inverted>
              <List.Item as='a'>Flip and Craft</List.Item>
              <List.Item as='a'>Market Crash</List.Item>
              <List.Item as='a'>Personal Investment</List.Item>
              <List.Item as='a' href="/">Home</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Services' />
            <List link inverted>
              <List.Item as='a'>Banana Pre-Order</List.Item>
              <List.Item as='a'>DNA FAQ</List.Item>
              <List.Item as='a'>How To Access</List.Item>
              <List.Item as='a'>Favorite X-Men</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as='h4' inverted>
              Footer Header
            </Header>
            <p>
              Website built with ❤️ by <a href="https://plancke.io/hypixel/player/stats/ForgingMetal">ForgingMetal</a><br />
              Using Bazcal by Vent and Wykerd
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;