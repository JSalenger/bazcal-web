import React from 'react'
import Router from 'next/router';
import {
  Button,
  Container,
  Grid,
  Header,
  List,
  Modal,
  Form,
  Input,
  Segment,
} from 'semantic-ui-react'

export default class Footer extends React.Component {
  render() {
    let coins = 0;

    return (
      <Segment inverted vertical style={{ padding: '5em 0em'}}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Actual Links' />
              <List link inverted>
                <List.Item as='a'>Flip and Craft</List.Item>
                <List.Item as='a'>Market Crash</List.Item>
                <Modal 
                    trigger={          
                      <List.Item as='a'>Personal Advice</List.Item>
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
                <List.Item as='a' href="/">Home</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Credits
              </Header>
              <p>
                Website built with ❤️ by <a href="https://plancke.io/hypixel/player/stats/ForgingMetal">ForgingMetal</a><br />
                Using <a href="https://github.com/Wykerd/bazcal">Bazcal</a> by Vent and Wykerd
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container> 
    </Segment>
    );
  }
}
