import React from 'react'; 
import Head from 'next/head';


// Semantic
import { Segment, Container, Divider, Header, Button, Menu, Modal } from 'semantic-ui-react';
import Footer from '../../components/footer';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Segment inverted basic>
                    <Menu secondary inverted>
                        <Menu.Item
                            name='Home'
                            active={false}
                            onClick={this.handleItemClick}
                            href="/"
                        />
                        <Menu.Item
                            name='Item Lookup'
                            active={true}
                            onClick={this.handleItemClick}
                        />
                    </Menu>
                </Segment>
                <Container>
                    <Head>
                        <title>Bazcal</title>
                        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                    </Head>
                    <Divider hidden></Divider>
                    <Divider hidden></Divider>
                    <Segment raised>
                        <Header as="h1">Bazaar Item Lookup</Header>
                            <p style={{ fontSize: "1.5rem"}}>Lookup specific bazaar items</p> <br /><br />
                        <Button content='Go' href="/lookup/bazaar/lookup"/>
                    </Segment>
                    <Divider horizontal>OR</Divider>
                    <Segment raised>
                        <Header as="h1">Auction Lookup</Header>
                        <p style={{ fontSize: "1.5rem"}}>Lookup auction data for specific items, average prices and more. Ability to view active auctions is Coming Soon™</p>
                             <br /> <br /> 
                        <Button content='Go' href="/lookup/auctions/lookup"/>
                    </Segment>
                    <Divider horizontal>OR</Divider>
                    <Segment raised>
                        <Header as="h1">Return Home</Header>
                        <p style={{ fontSize: "1.5rem"}}>I didn't mean to come here help get me out aaaaa oh no I want to go back home helppppp</p>
                             <br /> <br /> 
                        <Button content='Go' href="/"/>
                    </Segment>
                    <Divider hidden></Divider>
                </Container>
                <Footer />
            </div>
        )
    }
}