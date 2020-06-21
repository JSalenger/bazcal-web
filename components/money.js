import React from 'react'; 
import { useState } from 'react'

import {
    Button,
    Container,
    Form,
    Input,
    Modal,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'
  
  import Head from 'next/head';
  import Router from 'next/router'


function Money () {

    const [newId, setNewId] = useState("")



    return (
      <Modal trigger={<Button>Show Modal</Button>}>
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
              <Button type='submit' onClick={() => Router.push('/personal/' + newId)}>Gimme Money</Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
}

export default Money;