import PropTypes from 'prop-types'
import React, { Component } from 'react'
import data from '../../src/data/cache.json';
import fs from 'fs';
import path from 'path';
import { withRouter } from 'next/router'
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

import Footer from '../../components/footer';



// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */


/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' href="/">
                  Home
                </Menu.Item>
                <Menu.Item as='a' active>Personal</Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
                  <Segment
            inverted
            textAlign='center'
            style={{ padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' href="/">
                  Home
                </Menu.Item>
                <Menu.Item as='a' active>Personal</Menu.Item>
              </Container>
            </Menu>
          </Segment>
          {children}
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

function HomepageLayout ({ bazaarItems }) {

  return (
    <ResponsiveContainer>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>
            The big money we promised... 
          </Header>
          <Table celled>
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Quantity</Table.HeaderCell>
                      <Table.HeaderCell>Invested</Table.HeaderCell>
                      <Table.HeaderCell>Estimated Profit</Table.HeaderCell>
                      <Table.HeaderCell>Gradient</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
              <Table.Body>
                  {bazaarItems.map((item) => (
                      <Table.Row key={item.name}>
                          <Table.Cell>
                              <Label ribbon>{item.name}</Label>
                          </Table.Cell>
                          <Table.Cell>{item.evolume} </Table.Cell>
                          <Table.Cell>{item.invested}</Table.Cell>
                          <Table.Cell>{formatNumber(item.eprofit)} ( {item.pprofit}% ) </Table.Cell>
                          <Table.Cell>{item.gradient < 0 ? 'Product sell value decreasing' : 'Product sell value increasing'}</Table.Cell>
                      </Table.Row>
                  ))}
              </Table.Body>
          </Table>

          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Disclaimer</a>
          </Divider>

          <Header as='h3' style={{ fontSize: '2em' }}>
            Be Smart
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Be smart with your money, a computer program can't do everything and even if it's very cool and epic and pog it's not magic. If something looks like a bad investment dont do it!
          </p>
          <Button href="https://www.lifehack.org/800097/financial-success" as='a' size='large'>
            Learn more
          </Button>
        </Container>
      </Segment>

      <Footer />

    </ResponsiveContainer>
  )
}

// ------------------------- DOM ENDS HERE -----------------------------------

// ------------------------- SERVER CODE STARTS HERE -------------------------

function limit(val, min, max) {
  return val < min ? min : (val > max ? max : val)
}

const formatter = new Intl.NumberFormat()

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}

function formatNumber(number) {
  if (number >= 1000000) {
      return formatter.format(round(number / 1000000, 2)) + 'M'
  } else if (number >= 1000) {
      return formatter.format(round(number / 1000, 2)) + 'K'
  } else {
      return round(number, 2)
  }
}

function advise(balance, count = 6, time = 5, include_stablity = true, item_cache) {
  //console.log(advise);

  const unsorted = []

  for (const product_name in item_cache) {
      const product = item_cache[product_name]
      //console.log(product);
      const profit = (product.sell * 0.99) - product.buy

      const tvolume = (Math.min(product.volume, product.svolume) / 10080) * time
      const evolume = Math.floor(limit(tvolume, 0, balance / product.buy))

      const eprofit = (evolume * profit)

      unsorted.push({
          'name': product_name,
          'evolume': evolume,
          'invested': (product.buy * evolume).toFixed(2),
          'pinvested': (((product.buy * evolume) * 100) / balance).toFixed(1),
          'eprofit': eprofit.toFixed(2),
          'pprofit': ((profit / product.buy) * 100).toFixed(1),
          'gradient': product.sell - product.sell_ema
      })
  }

  const sorted = unsorted.sort((a, b) => {
      return b.eprofit - a.eprofit
  })

  //console.log(sorted);

  //console.log("Length " + sorted.length);

  if (include_stablity) return sorted.filter(item => (item_cache[item.name].buy > item_cache[item.name].buy_ema) && (item_cache[item.name].sell > item_cache[item.name].sell_ema)).slice(0, count)
  
  //console.log("Length " + sorted.length);

  //console.log(sorted.slice(0, 6));

  return sorted.slice(0, count);
}


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps({ query }) {
  console.log("start");
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const json = data;

  let currentTime = Date.now().toString();

  let jsonTime = parseInt(json['lastUpdated'].toString().substring(0,10)) + 5;
  console.log(`${currentTime.substring(0, 10)} > ${jsonTime}`)

  if(parseInt(currentTime.substring(0, 10)) > jsonTime) {
    try {
      console.log('Running job...');


      const api_res = await fetch(`https://api.hypixel.net/skyblock/bazaar?key=92e1a16e-382e-4840-b482-7966d24f2c1a`);
      const fp = path.resolve('C:/Users/rsale/Documents/bazcal-web/src/data/cache.json');

      fs.promises.writeFile(fp, JSON.stringify(await api_res.json()));

    } catch (error) {
        console.log(error);
    }
  }

  const prettyNames_res = await fetch(`https://api.slothpixel.me/api/constants/skyblock_items`);
  const nameJson = await prettyNames_res.json();

  let item_cache = {};
  

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time


  
  //console.log(json['products']['INK_SACK:3']['sell_summary'][0]['pricePerUnit']);

  // CLEAN THIS UP LATER, USE CUSTOM JSON 

  const items = Object.keys(json['products']).map(function (key) {
      if(key === 'ENCHANTED_CARROT_ON_A_STICK') return {
          'name': "broken",
          'buy': 1,
          'sell': 1,
          'volume': 1,
          'svolume': 1
      }
      if(key === 'CATALYST') return {
          'name': "Catalyst",
          'buy': json['products'][key]['sell_summary'][0]['pricePerUnit'],
          'sell': json['products'][key]['buy_summary'][0]['pricePerUnit'],
          'volume': json['products'][key]['quick_status']['buyMovingWeek'],
          'svolume': json['products'][key]['quick_status']['sellMovingWeek']
      }
      if(key === 'SUPER_EGG') return {
          'name': "Super Enchanted Egg",
          'buy': json['products'][key]['sell_summary'][0]['pricePerUnit'],
          'sell': json['products'][key]['buy_summary'][0]['pricePerUnit'],
          'volume': json['products'][key]['quick_status']['buyMovingWeek'],
          'svolume': json['products'][key]['quick_status']['sellMovingWeek']
      }
      if(key === 'STOCK_OF_STONKS') return {
          'name': "Stock of Stonks",
          'buy': json['products'][key]['sell_summary'][0]['pricePerUnit'],
          'sell': json['products'][key]['buy_summary'][0]['pricePerUnit'],
          'volume': json['products'][key]['quick_status']['buyMovingWeek'],
          'svolume': json['products'][key]['quick_status']['sellMovingWeek']
      }
      return {
          'name': nameJson[key]['name'],
          'buy': json['products'][key]['sell_summary'][0]['pricePerUnit'],
          'sell': json['products'][key]['buy_summary'][0]['pricePerUnit'],
          'volume': json['products'][key]['quick_status']['buyMovingWeek'],
          'svolume': json['products'][key]['quick_status']['sellMovingWeek']
      }
  });

  const buy_point = [];
  const sell_point = [];

  for (const item of items) {
      if (item.name === "ENCHANTED_CARROT_ON_A_STICK") continue;
      //console.log(item.buy);
      if (!item_cache[item.name]) {
          item_cache[item.name] = {
              buy: item.buy,
              sell: item.sell,
              volume: item.volume,
              svolume: item.svolume,
              buy_ema: item.buy,
              sell_ema: item.sell
          }
      } else {
          const pre_b_ema = item_cache[item.name].buy_ema;
          const pre_s_ema = item_cache[item.name].sell_ema;
          const pre_b = item_cache[item.name].buy;
          const pre_s = item_cache[item.name].sell;

          item_cache[item.name].buy = item.buy;
          item_cache[item.name].sell = item.sell;
          item_cache[item.name].volume = item.volume;
          item_cache[item.name].svolume = item.svolume;
          item_cache[item.name].buy_ema = item.buy * k + pre_b_ema * (1 - k);
          item_cache[item.name].sell_ema = item.sell * k + pre_s_ema * (1 - k);

          if ((pre_b <= pre_b_ema) && (item.buy > item_cache[item.name].buy_ema)) buy_point.push(item.name);
          if ((pre_s >= pre_s_ema) && (item.sell < item_cache[item.name].sell_ema)) sell_point.push(item.name);
      }
  }

  const time = 15

  const bazaarItems = advise(query.slug[0], 6, Number.isNaN(time) ? 15 : time, false, item_cache);

  return {
    props: {
      bazaarItems,
    },
  }
}


export default HomepageLayout