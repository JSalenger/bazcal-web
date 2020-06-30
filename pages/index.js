// Import react and next
import React from 'react';
import Head from 'next/head';

// Semantic
import { Menu, Segment, Container, Grid, Divider, Label, Transition, Tab } from 'semantic-ui-react';

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
        if(isMobile) {
            return (
                <div>
        
                    <WindowSize
                        render={({ width, height }) => (
                        <div style={{backgroundColor: "#007792"}}>
        
                            <Segment basic padded>
                              <Segment basic>
                                <Menu secondary>
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
                            </Segment>
                            
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
                            
                              
                            <span className="title">
                              <p>Bazcal</p>
                            </span>
                            <br></br>
                            <span className="subtitle">
                              <p>Blazing Fast Money</p>
                            </span>

                            <Transition
                                animation="bounce"
                                duration="2000"
                                visible={this.state.visible}
                            >
                                
                                <svg width="750" height="651" viewBox="0 0 750 651" fill="none" xmlns="http://www.w3.org/2000/svg" className="homeSvg">
                                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="750" height="651">
                                        <path d="M118.5 233C215.5 221.5 150.638 -45.2496 454 8.00002C642 41 835.092 233 709.5 523.5C675.994 601 248.5 718.814 66.5 601C-9.5 551.803 -49.5451 252.923 118.5 233Z" fill="#C4C4C4"/>
                                    </mask>
                                    <g mask="url(#mask0)">
                                        <rect x="-89" y="-33" width="885" height="714" fill="#01718a"/>
                                    </g>
                                </svg>
                            </Transition>
                        </div>
                        )}
                    />

                    <Divider hidden />
        
                    <Container>
                      <Tab menu={{ secondary: true, pointing: true }} panes={this.panes} />
                    </Container>

                    <Divider hidden />

                    <Footer />
        
                </div>
            )
        } else {
            return (

                <div>
        
                    <WindowSize
                        render={({ width, height }) => (
                        <div style={{backgroundColor: "#007792"}}>
        
                            <Segment basic padded>
                                        <Segment basic>
                                            <Menu secondary>
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
                                    </Segment>
        
                            <p style={{paddingTop: `${height/4}px`, paddingLeft:`${width/11}px`, fontSize: `${width/15}px`, paddingBottom: "0px"}}>Bazcal</p>
                            <p style={{paddingLeft: `${width/11}px`, fontSize: `${width/35}px`, paddingBottom: `${height/2}px`}}>Blazing Fast Money</p>
        
                            <Transition
                                animation="bounce"
                                duration="2000"
                                visible={this.state.visible}
                            >
                                
                                <svg width="750" height="651" viewBox="0 0 750 651" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: "absolute", width: `${width/2.5}px`, height: "649.89px", left: `${width/2}`, top: `${height/5}px`}}>
                                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="750" height="651">
                                        <path d="M118.5 233C215.5 221.5 150.638 -45.2496 454 8.00002C642 41 835.092 233 709.5 523.5C675.994 601 248.5 718.814 66.5 601C-9.5 551.803 -49.5451 252.923 118.5 233Z" fill="#C4C4C4"/>
                                    </mask>
                                    <g mask="url(#mask0)">
                                        <rect x="-89" y="-33" width="885" height="714" fill="#01718a"/>
                                    </g>
                                </svg>
                            </Transition>
        
        
        
                        </div>
                        )}
                    />
        
                    <Grid columns='equal'>
                        <Grid.Column width={8}>
                            <Segment basic padded size="huge" padded="very">
                                Using <a href="https://github.com/Wykerd/bazcal">Bazcal</a> an open source bazaar profit calculator ( among other things ) written by
                                Wykerd and Vent we're able to suggest 6 flips to make the most money.
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment basic></Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment basic padded size="massive" padded="very">
                                <strong>Bazaar Flipping</strong>
                            </Segment>
                        </Grid.Column>
                    </Grid>
        
                    <Segment basic padded="very">
                        <Divider horizontal>AND</Divider>
                    </Segment>
        
        
        
                    <Grid columns='equal'>
                        <Grid.Column>
                            <Segment basic padded size="massive" padded="very">
                                <Label as='a' color='red' ribbon>
                                    New
                                </Label>
                                <strong>Auction Flipping</strong>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment basic></Segment>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Segment basic padded size="huge" padded="very">
                              Again, using an <strong>upcoming</strong> <a href="https://github.com/Wykerd/bazcal">Bazcal</a> feature we can deliver some of the best AH and BIN Auction flips.
                            </Segment>
                        </Grid.Column>
                    </Grid>
        
                    <Divider hidden></Divider>
                    <Divider horizontal></Divider>
                    <Divider hidden></Divider>
        
                    <Footer />
        
                </div>
        
            )
        }


    }

 
}

export default Home;