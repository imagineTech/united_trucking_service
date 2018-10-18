import React from 'react';
import { Link } from 'react-router-dom';
import {Container,Menu,Grid,Header,Segment}  from 'semantic-ui-react';
import Logo from './Logo';

const HeaderMain = props => {
  return(
    <Segment padded="very" vertical>
    <Container>
      <Grid columns={2}>
        <Grid.Row>
        <Grid.Column>
          <Logo/>
        </Grid.Column>
        <Grid.Column>
          <Container>
            <Header as="h3" style={{textAlign:'right'}}>Call at +919595959595</Header>
          </Container>
          <Menu>
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/contact">Contact</Link>
            </Menu.Item>
          </Menu>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    </Segment>
  )
}

export default HeaderMain;
