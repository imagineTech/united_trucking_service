import React, { Component } from 'react';
import {Image,Container,Grid,Header,Segment,Button,Icon} from 'semantic-ui-react';
import styled from 'styled-components';

const MainDiv = styled.div`
display:flex;
justify-content:center;
background-color:#b8000e;
height:3em;
align-items:center;
`

const MainDivChild = styled.a`
padding-right:3em;
color:white;
font-size:2em;
`

const MyMenu = () => {
    return (
        <MainDiv>
            <MainDivChild>Fast</MainDivChild>
            <MainDivChild>Efficient</MainDivChild>
            <MainDivChild>Economic</MainDivChild>
            <MainDivChild>Honest</MainDivChild>
        </MainDiv>
    )
}

class HomeContainer extends Component {
  render() {
    return(
        <div>
      <Container>
        <Image src="https://via.placeholder.com/1500x600" fluid/>
        
        <Grid>
              <Grid.Row>  
                    <Grid.Column width={4}>
                    <Image src="https://picsum.photos/300/300" floated="left"/>
                    </Grid.Column>
                    <Grid.Column width={12} >
                    <Header as="h1" style={{paddingTop:'2em',borderBottom:'1px solid gray'}}>Welcome to United Truck Service</Header>
                    <Header as="h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et molestie purus. Vivamus nec fermentum velit. Vivamus tincidunt tellus sed nulla luctus, et tempus magna mattis. Aenean posuere molestie tortor, in sodales mauris. Nunc non posuere risus. Donec sed nunc eu dui dignissim lobortis. Nulla consectetur ac ex vitae euismod. Curabitur consectetur lorem sed varius elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc sed neque sed eros suscipit malesuada sit amet quis nulla. Nam auctor nulla a posuere blandit.</Header>
                    <Button color="red" floated="right">Read More</Button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Icon link name="arrow circle left" size="huge" style={{paddingTop:'2em'}}/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    <Image src="https://via.placeholder.com/400x400" circular/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    <Image src="https://via.placeholder.com/400x400" circular/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    <Image src="https://via.placeholder.com/400x400" circular/>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Icon link name="arrow circle right" size="huge" style={{paddingTop:'2em'}}/>
                    </Grid.Column>
                </Grid.Row>
                
        </Grid>
      </Container>
      <Grid>
        <Grid.Row>
                    
                        <Grid.Column width={16}>
                            <MyMenu/>
                        </Grid.Column>
                    
        </Grid.Row>
        <Container>
        <Grid.Row color="gray">
            
            <Segment floated="left">
                <Image src="https://via.placeholder.com/200x200"/>
            
            </Segment>
                <Segment floated="right">
                    <div>
                    <Icon size="large" name="phone square"/>{" "}Towing: (908) 224-0060
                    </div>
                    <div>
                    <Icon size="large" name="phone square"/>{" "}Sales, Parts, Sandblasting: (908) 361-0376
                    </div>
                    <div>
                    <Icon size="large" name="rocket"/>{" "}Hillsborough, New Jersey, United States 008844
                    </div>
                    <div>
                    <Icon size="large" name="facebook official"/>{" "}Facebook
                    </div>
                </Segment>
            
        </Grid.Row>
        </Container>
      </Grid>
      </div>
    )
  }
}

export default HomeContainer;
