// Import react and next
import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import Router from 'next/router';


// Semantic
import { Menu, Segment, Container, Grid, Divider, Label, Transition, List, Tab, Icon, Header, Button, Modal, Form, Input, Dropdown } from 'semantic-ui-react';

import Footer from '../../components/footer';

export default class Home extends React.Component {
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    handleInputDirty = () => console.log("dab");
    handleDropdownChange = () => console.log("click");

    options = [
        { key: 'S', text: 'Search', value: 'S'},
        { key: 'BZ', text: 'Bazaar', value: 'BZ' },
        { key: 'AH', text: 'AH', value: 'AH' },
    ]

    constructor(props) {
        super(props);
        
        this.state = { activeItem: 'home', visible: false };
    }

    render() {
        let coins = 0;
        return (
            <div>
                <Head>
                    <title>Bazcal</title>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                </Head>
                <Segment basic inverted textAlign="center">
                    <style jsx>{`
                        .title {
                            padding-top: 100px;
                            font-size: 5rem;
                            text-align: center;
                        }
                        .subtitle {
                            font-size: 1.5rem;
                            text-align: center;
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
                            />
                        </Menu>
                    </Segment>
                    

                    
                    
                    <span className="title">
                        <p>Search</p>
                    </span>
                    <br></br>
                    <span className="subtitle">
                        <p>Lookup Items</p>
                    </span>
                    
                    <Divider hidden /><Divider hidden /><Divider hidden />

                    <Container>
                    <Input
                        fluid
                        label={<Dropdown defaultValue='S' options={this.options} onChange={this.handleDropdownChange}/>}
                        labelPosition='right'
                        placeholder='Search'
                        onChange={this.handleInputDirty}
                    />
                    </Container>
                    
                    <Divider hidden style={{paddingBottom: `300px`}} />
                    

                </Segment>
                <Footer />
            </div>
        )
    }
}