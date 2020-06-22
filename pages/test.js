import React, { Component, useState, useEffect} from 'react';
import { Menu, Segment, Container, Grid, Divider, Label, Responsive, Transition } from 'semantic-ui-react';
import { WindowSize, withWindowSize } from 'react-fns';
import Head from 'next/head';
import Footer from '../components/footer';


function test() {
    let state = { activeItem: 'home', visible: false }
    let handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    let activeItem = state.activeItem;

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(!visible);
    })

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
                                            active={activeItem === 'home'}
                                            onClick={handleItemClick}
                                        />
                                        <Menu.Item
                                            name='Personal Advice'
                                            active={activeItem === 'messages'}
                                            onClick={handleItemClick}
                                        />
                                        <Menu.Item
                                            name='Item Lookup'
                                            active={activeItem === 'friends'}
                                            onClick={handleItemClick}
                                        />
                                    </Menu>
                                </Segment>
                            </Segment>

                    <p style={{paddingTop: `${height/3}px`, paddingLeft:"250px", fontSize: "144px", paddingBottom: "0px"}}>Bazcal</p>
                    <p style={{paddingLeft:"250px", fontSize: "65px", paddingBottom: `${height/2}px`}}>Blazing Fast Money</p>


                    <Transition
                        animation="bounce"
                        duration="2000"
                        visible={visible}
                    >
                        
                        <svg width="750" height="651" viewBox="0 0 750 651" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: "absolute", width: "748.64px", height: "649.89px", left: "943.93px", top: "187.98px"}}>
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

            <Container>
                <Segment basic padded>
                    <Segment raised >
                        <Grid columns='equal'>
                            <Grid.Column>
                                <Segment basic size="huge">Bazaar Flipping</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment basic size="huge"></Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Segment basic size="big">
                                    Using <a href="https://github.com/Wykerd/bazcal">Bazcal</a> an open source bazaar profit calculator ( among other things ) written by
                                    Wykerd and Vent we're able to suggest 6 flips to make the most money.
                                </Segment>
                            </Grid.Column>
                        </Grid>
                        <Divider horizontal>
                            and
                        </Divider>
                        <Grid columns='equal'>
                            <Grid.Column>
                                <Segment basic size="huge">
                                    <Label as='a' color='red' ribbon>
                                        New
                                    </Label>
                                    Auction Flipping
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment basic size="huge"></Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Segment basic size="big">
                                    Again, using an upcoming <a href="https://github.com/Wykerd/bazcal">Bazcal</a> feature we can deliver some of the best AH and BIN Auction flips.
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Segment>
            </Container>



            <Footer />

        </div>

    )
}

export default test;