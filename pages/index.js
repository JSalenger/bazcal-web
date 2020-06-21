import PropTypes from 'prop-types'
import React, { Component, useState} from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Form,
  Input,
  Modal,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Transition
} from 'semantic-ui-react'

import Head from 'next/head';
import Router from 'next/router';
import Footer from '../components/footer';

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
const HomepageHeading = ({ mobile }) => {

  const [newId, setNewId] = useState("");


  return (
    <Container text>
      <Header
        as='h1'
        content='Money'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <Header
        as='h2'
        content='Make a lot ( so much ) of it.'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />


        
      <Modal 
        trigger={          
          <Button primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button>
        }
      >
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field>
                <label style={{ fontSize: '1.33em' }}>Coins</label>
                <Input 
                  type="number" 
                  placeholder="Enter Your Coins" 
                  onChange={(e) => setNewId(e.target.value)} 
                />
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button type='submit' onClick={() => Router.push('/personal/' + newId)}>Gimme Money</Button>
        </Modal.Actions>
      </Modal>
      
    </Container>
  )

  
}

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}
  newId = {sampleState: 'hello world'};


  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {

    const setNewId = sampleState => this.setState({ sampleState });



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
            style={{ minHeight: 700, padding: '1em 0em' }}
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
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                
                <Modal 
                  trigger={          
                    <Menu.Item as='a'>Adivsed Investment</Menu.Item>
                  }
                >
                  <Modal.Content>
                    <Modal.Description>
                      <Form>
                        <Form.Field>
                          <label style={{ fontSize: '1.33em' }}>Coins</label>
                          <Input 
                            type="number" 
                            placeholder="Enter Your Coins" 
                            onChange={(e) => setNewId(e.target.value)} 
                          />
                        </Form.Field>
                      </Form>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button type='submit' onClick={() => Router.push('/personal/' + newId)}>Gimme Money</Button>
                  </Modal.Actions>
                </Modal>
              </Container>
            </Menu>
            <br />
            <br />
            <Icon name='arrow down' size='massive' />
          </Segment>
        </Visibility>

        
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

  /*

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
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Personal</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >

            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>

  */

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    const { fixed } = this.state

    return (
      <div>
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 350, padding: '1em 0em' }}
          vertical
        >

          <HomepageHeading mobile/>
        </Segment>
        {children}
      </div>

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

const HomepageLayout = () => {

  const [newId, setNewId] = useState("");

  return (
    <ResponsiveContainer>
      <Head>
          <title>Bazcal</title>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </Head>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "best thing ever"
              </Header>
              <div style={{ fontSize: '1.33em' }}>
                  <b>Simon</b> | literally simon
              </div>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "very cool"
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <p style={{ fontSize: '1.33em' }}>literally everyone</p>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Bazaar Bots Make Big Money
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Got bored of IRL trading? Well, this doesn't make as much money, sorry, but its close! Very close indeed. 
          </p>
          <Modal 
            trigger={          
              <Button as='a' size='large'>
                Get My Personal Strategy
              </Button>
            }
          >
            <Modal.Content>
              <Modal.Description>
                <Form>
                  <Form.Field>
                    <label style={{ fontSize: '1.33em' }}>Coins</label>
                    <Input 
                      type="number" 
                      placeholder="Enter Your Coins" 
                      onChange={(e) => setNewId(e.target.value)} 
                    />
                  </Form.Field>
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button type='submit' onClick={() => Router.push('/personal/' + newId)}>Gimme Money</Button>
            </Modal.Actions>
          </Modal>


          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Case Studies</a>
          </Divider>

          <Header as='h3' style={{ fontSize: '2em' }}>
            Did I mention how much money you'll make?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            You will make so much money, so much, a lot. The amount of money you'll make is very big. I assure you that it will be very big. I'm definitely not writing this just to fill space.
          </p>

          <Modal 
            trigger={          
              <Button as='a' size='large'>
                I'm Interested, Go on...
              </Button>
            }
          >
            <Modal.Content>
              <Modal.Description>
                <Form>
                  <Form.Field>
                    <label style={{ fontSize: '1.33em' }}>Coins</label>
                    <Input 
                      type="number" 
                      placeholder="Enter Your Coins" 
                      onChange={(e) => setNewId(e.target.value)} 
                    />
                  </Form.Field>
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button type='submit' onClick={() => Router.push('/personal/' + newId)}>Gimme Money</Button>
            </Modal.Actions>
          </Modal>
        </Container>
      </Segment>

      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Actual Links' />
                <List link inverted>
                  <List.Item as='a'>Coming Soon ( Coming Soon )j</List.Item>
                  <List.Item as='a'>Market Crash ( Coming Soon )</List.Item>
                  <Modal 
                    trigger={          
                      <List.Item as='a'>Advised Investment</List.Item>
                    }
                  >
                    <Modal.Content>
                      <Modal.Description>
                        <Form>
                          <Form.Field>
                            <label style={{ fontSize: '1.33em' }}>Coins</label>
                            <Input 
                              type="number" 
                              placeholder="Enter Your Coins" 
                              onChange={(e) => setNewId(e.target.value)} 
                            />
                          </Form.Field>
                        </Form>
                      </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button type='submit' onClick={() => Router.push('/personal/' + newId)}>Gimme Money</Button>
                    </Modal.Actions>
                  </Modal>
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
                ❤️
                </Header>
                <p>
                  Website built with ❤️ by <a href="https://plancke.io/hypixel/player/stats/ForgingMetal">ForgingMetal</a><br />
                  Using <a href="https://github.com/Wykerd/bazcal">Bazcal</a> by Vent and Nert
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </ResponsiveContainer>
  )
}

/*

            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>

*/

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