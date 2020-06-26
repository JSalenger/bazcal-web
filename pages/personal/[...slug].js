import PropTypes from 'prop-types'
import React, { Component } from 'react'
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
/*
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content=''
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}
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

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a'>
            Home
          </Menu.Item>
          <Menu.Item as='a' active>Personal</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
          </Segment>

          {children}
        </Sidebar.Pusher>
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
      <Head>
          <title>poggers</title>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </Head>

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
                      <Table.Row>
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
  
  const api_res = await fetch(`https://api.hypixel.net/skyblock/bazaar?key=`);
  const json = await api_res.json();

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
/*
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible.
              Let us delight your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
*/

export default HomepageLayout