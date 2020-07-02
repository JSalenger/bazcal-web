// Import react and next
import React from 'react';
import Head from 'next/head';
import Link from 'next/link'

// Semantic
import { Menu, Segment, Container, Grid, Divider, Label, Transition, Tab, Icon, Header, Button } from 'semantic-ui-react';

// 3rd party
import { WindowSize } from 'react-fns';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

// components
import Footer from '../components/footer';

const Title = styled.p`

  paddingTop: 200px; 
  fontSize: "5rem"; 
  textAlign: "center";

`;

const Subtitle = styled.p`

  paddingTop: 200px; 
  fontSize: "1.5rem"; 
  textAlign: "center";

`;

class Home extends React.Component {
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    /*
    Here's the SVG that was on the homepage, I'll probably save this layout for a personal project, since the bazcal peeps didn't like it :)
                                    <svg width="750" height="651" viewBox="0 0 750 651" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: "absolute", width: `${width/2.5}px`, height: "649.89px", left: `${width/2}`, top: `${height/5}px`}}>
                                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="750" height="651">
                                        <path d="M118.5 233C215.5 221.5 150.638 -45.2496 454 8.00002C642 41 835.092 233 709.5 523.5C675.994 601 248.5 718.814 66.5 601C-9.5 551.803 -49.5451 252.923 118.5 233Z" fill="#C4C4C4"/>
                                    </mask>
                                    <g mask="url(#mask0)">
                                        <rect x="-89" y="-33" width="885" height="714" fill="#01718a"/>
                                    </g>
                                </svg>
    Also, yes i know storing code in comments is bad .-.
    */
    
    panes = [
      {
        menuItem: 'Bazaar Flipping',
        render: () => <Tab.Pane attached={false}>                                
            Using <a href="https://github.com/Wykerd/bazcal">Bazcal</a> an open source bazaar profit calculator ( among other things ) written by
            Wykerd and Vent we're able to suggest 6 flips to make the most money.
          </Tab.Pane>,
      },
      {
        menuItem: 'Auction Flipping',
        render: () => <Tab.Pane attached={false}>
          Again, using an <strong>upcoming</strong> <a href="https://github.com/Wykerd/bazcal">Bazcal</a> feature we can deliver some of the best AH and BIN Auction flips.
        </Tab.Pane>,
      },
    ]

    constructor(props) {
        super(props);
    
        this.state = { activeItem: 'home', visible: false };
    }

    componentDidMount() {
        /*
         * You may call setState() immediately in componentDidMount(). 
         * It will trigger an extra rendering, but it will happen before the browser updates the screen. 
         * This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state. 
         * Use this pattern with caution because it often causes performance issues. 
         * In most cases, you should be able to assign the initial state in the constructor() instead. 
         * It can, however, be necessary for cases like modals and tooltips when you need to measure a DOM node before rendering something that depends on its size or position
         * ~  React Docs
         */

         this.setState((state) => {
            return {activeItem: state.activeItem, visible: true}
         });
    }

    render() {
        return (
            <div>

            
                <WindowSize
                    render={({ width, height }) => (
                    <Segment basic inverted textAlign="center">
                        
                        <style jsx>{`
                        .title {
                            padding-top: ${height/4}px;
                            font-size: 5rem;
                            text-align: center;
                        }
                        .subtitle {
                            font-size: 1.5rem;
                            text-align: center;
                        }
                        .homeSvg {
                            top: ${height/5}px;
                            width: ${width/1.5}px;
                            display: block;
                            margin: auto;
                        }
                        `}</style>  

                        <Segment basic>
                            <Menu secondary inverted>
                                <Menu.Item
                                    name='Home'
                                    active={this.state.activeItem === 'home'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name='Personal Advice'
                                    active={this.state.activeItem === 'messages'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name='Item Lookup'
                                    active={this.state.activeItem === 'friends'}
                                    onClick={this.handleItemClick}
                                />
                            </Menu>
                        </Segment>
                        

                        
                        
                        <span className="title">
                        <p>Bazcal</p>
                        </span>
                        <br></br>
                        <span className="subtitle">
                        <p>Blazing Fast Money</p>
                        </span>
                        
                        <Divider hidden /><Divider hidden /><Divider hidden />

                        <Transition
                            animation="bounce"
                            duration="2000"
                            visible={this.state.visible}
                        >
                            
                            <Icon name="arrow down" size="massive" className="center-icon" />
                        </Transition>
                        
                        <Divider hidden style={{paddingBottom: `${height/4}px`}} />
                        

                    </Segment>
                    )}
                />

                <Divider hidden /><Divider hidden />

                <Container>

                    <p style={{fontSize: "3rem"}}>
                        Bazaar Flipping
                    </p>

                    <p style={{fontSize: "1.5rem"}}>
                        Using <a href="https://github.com/Wykerd/bazcal">Bazcal</a> an open source bazaar profit calculator (among other things) written by
                        Wykerd and Vent we're able to suggest 6 flips to make the most money.
                    </p>
                    
                    <Divider horizontal>AND</Divider>

                    <p style={{fontSize: "3rem"}}>
                        Auction Flipping
                    </p>

                    <p style={{fontSize: "1.5rem"}}>
                        Again, using an <strong>upcoming</strong> <a href="https://github.com/Wykerd/bazcal">Bazcal</a> feature we can deliver some of the best AH and BIN Auction flips.
                    </p>
                </Container>

                    <Divider hidden/>
                    <Divider />
                    <Divider hidden/>
                <Container>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '3rem' }}>
                                    Invite the bot to <strong>your</strong> server
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    Invite this bot to your discord server to get access to more features and the most recent version of the bot!
                                </p>
                                <Divider horizontal>OR</Divider>
                                <Header as='h3' style={{ fontSize: '3rem' }}>
                                    Use the bot online
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    Use many of the bot's features online such as the <Link href="#">bazaar flipper</Link>, <Link href="#">auction flipper</Link>, and <Link href="#">item lookup</Link>. 
                                    The web version may be a few versions behind and lack some features, but its great for getting your feet in the water!
                                </p>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                Bot Logo Here
                            </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column textAlign='center'>
                                <Button size='huge'>Invite The Bot</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Container>

                <Divider hidden />

                <Footer />

            </div>
        )
    }
}

export default Home;