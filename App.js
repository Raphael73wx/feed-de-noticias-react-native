import React from 'react';
import styled from 'styled-components/native';
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import Avatar from './components/Avatar';
import Card from './components/Card';

const DATA = [
  {
    id: '1',
    userAvatar: require('./assets/user1.jpg'),
    userName: 'raphael.333',
    postText:
      'guts',
    postImage: require('./assets/guts.jpg')
  },
  {
    id: '2',
    userAvatar: require('./assets/user2.jpg'),
    userName: 'jv.neutron_012',
    postText:
      'griffith',
    postImage: require('./assets/griffith.jpg')
  },
  {
    id: '3',
    userAvatar: require('./assets/user3.jpg'),
    userName: 'rodri_17/04',
    postText:
      'thorfin',
    postImage: require('./assets/thorfin.jpg')
  },
  {
    id: '4',
    userAvatar: require('./assets/images/avatar4.png'),
    userName: 'will.3M',
    postText:
      'Musashi',
    postImage: require('./assets/Musashi.jpg')
  }
];

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const RowContainer = styled.View`
  width: 100%;
  padding-horizontal: 10px;
  flex-direction: row;
`;

export default function App() {
  return (
    <Container>
      <Header headerTitle='social' />
      <RowContainer>
        <Avatar imageSource={require('./assets/user4.jpg')} />
        <InputContainer />
      </RowContainer>
      <Card data={DATA} />
    </Container>
  );
}
