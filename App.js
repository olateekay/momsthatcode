import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components'

export default function App() {
  return (
    <Container>
    <TitleBar>
    <Avatar source={require('./assets/teekay.jpg')}/>
      <Title>Welcome back</Title>
      <Name>Olatokunbo</Name>
      </TitleBar>
    </Container>
  );
}

 const Container = styled.View`
   flex: 1;
   background-color: #f0f3f5;
   `;

 const Title = styled.Text`
   font-size: 16px;
   color:#b8bece;
   font-weight:500;
 `;

 const Name = styled.Text`
   font-size: 20px;
   color: #3c4560;
   font-weight: bold;
 `;

 const TitleBar = styled.View`
   width:100%;
   margin-Top:50px;
   padding-left:20px;
 `;

 const Avatar = styled.Image`
   width: 44px;
   height:44px;
   background: black;
   border-radius: 22px;
   margin-left: 20px;
 `;