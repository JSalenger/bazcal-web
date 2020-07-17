// Import react and next
import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import Router from 'next/router';


// Semantic
import { Menu, Segment, Container, Grid, Divider, Label, Transition, List, Tab, Icon, Header, Button, Modal, Form, Input } from 'semantic-ui-react';

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

    constructor(props) {
        super(props);
        
        this.state = { activeItem: 'home', visible: false };
    }

    
    //componentDidMount() {
        /*
         * You may call setState() immediately in componentDidMount(). 
         * It will trigger an extra rendering, but it will happen before the browser updates the screen. 
         * This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state. 
         * Use this pattern with caution because it often causes performance issues. 
         * In most cases, you should be able to assign the initial state in the constructor() instead. 
         * It can, however, be necessary for cases like modals and tooltips when you need to measure a DOM node before rendering something that depends on its size or position
         * ~  React Docs
         */
        
         // I got rid of the animation because it was causing FCP to take too long I think ( still have to test this )

        /* 
         this.setState((state) => {
            return {activeItem: state.activeItem, visible: true}
         });
         */
    //}
    

    render() {
        let coins = 0;
        return (
            <>
                <Head>
                    <title>Bazcal</title>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                </Head>
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
                                <Modal 
                                    trigger={          
                                        <Menu.Item
                                            name='Personal Advice'
                                            active={this.state.activeItem === 'messages'}
                                            onClick={this.handleItemClick}
                                        />
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
                                            onChange={(e) => coins = e.target.value} 
                                            />
                                        </Form.Field>
                                        </Form>
                                    </Modal.Description>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button type='submit' onClick={() => Router.push('/personal/' + coins)}>Gimme Money</Button>
                                    </Modal.Actions>
                                </Modal>
                                <Menu.Item
                                    name='Item Lookup'
                                    active={this.state.activeItem === 'friends'}
                                    onClick={this.handleItemClick}
                                    href="/lookup/home"
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

                            
                        <Icon name="arrow down" size="massive" className="center-icon" />
                        
                        <Divider hidden style={{paddingBottom: `${height/4}px`}} />
                        

                    </Segment>
                    )}
                />

                <Divider hidden /><Divider hidden />

                <Container>
                    <Segment raised>
                        <p style={{fontSize: "2rem", color: "#8a202a"}}>
                            <strong>New</strong>
                        </p>
                        <p style={{fontSize: "2rem"}}>
                            1.8.9 Bazcal Mod
                        </p>
                        <Divider></Divider>
                        <p style={{fontSize: "2.5rem"}}>
                            Highlighted Feature: In-game notifications
                        </p>

                        <p style={{fontSize: "1.5rem"}}>
                            Recieve <strong>In-game</strong> notifications on when you should sell your items for maximum profit, similar to the "!bz notif" command
                            available on the discord
                        </p>
                    </Segment> 

                    <Divider hidden></Divider>
                    <Divider hidden></Divider>
                    <Divider hidden></Divider>

                    <p style={{fontSize: "2.5rem"}}>
                        Bazaar Flipping / Auction Flipping
                    </p>

                    <p style={{fontSize: "1.5rem"}}>
                        Using <a href="https://github.com/Wykerd/bazcal">Bazcal</a> an open source bazaar profit calculator (among other things) written by
                        Wykerd and Vent we're able to suggest 6 flips to make the most money. Using the same open source bazaar profit calculator we can help you
                        make more money quicker by showing you the top auction flips.
                    </p>
                    

                    
                    <Divider horizontal></Divider>

                    <p style={{fontSize: "2.5rem"}}>
                        Item Lookup
                    </p>

                    <p style={{fontSize: "1.5rem"}}>
                        Pretty simple, get item prices online ( hopefully in-game aswell at a later date ).
                    </p>
                </Container>

                    <Divider hidden/>
                    <Divider />
                    <Divider hidden/>
                <Container>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column floated="left" width={1}>
                                <Button size='huge' href=" https://discord.com/api/oauth2/authorize?client_id=715462011256832090&permissions=76880&scope=bot">Invite The Bot</Button>

                            </Grid.Column>
                            <Grid.Column width={13}>
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
                                    Use many of the bot's features online such as the <Link href="#"><a>bazaar flipper</a></Link>, <Link href="#"><a>auction flipper</a></Link>, and <Link href="#"><a>item lookup</a></Link>. 
                                    The web version may be a few versions behind and lack some features, but its great for getting your feet in the water!
                                </p>
                            </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column textAlign='center'>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Container>

                <Divider hidden />

                <Footer />

                

            </>
        )
    }
}

export default Home;