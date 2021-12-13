import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, StatusBar, FlatList } from 'react-native';
import CharecterList from '../Component/character';
import axios from "axios"
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      AllCharacters: [],
    }
  }
  state = this.state;

  componentDidMount() {

    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        console.log("my user Details response", response);
        if (response.status == 200) {
          this.setState({
            AllCharacters: response.data
          })
        }

      })
      .catch(error => {
        console.error("my error",error.data)
      })
  }

  GoToDeatails = (CharacterID) => {
    let res = this.state.AllCharacters.find(obj => { return obj.id === CharacterID })
    this.props.navigation.navigate('details', { "PressedCharacter": res })
  }
  
  render() {
    return (
      <>
        <View style={styles.Container}>
          <StatusBar backgroundColor="#070707" barStyle="light-content" />
          {/* Header Section */}
          <View style={styles.HeaderMainCOntainer}>
            <Text style={styles.Headding}>Home</Text>
          </View>

          {/* Scroll Section */}
          <View style={styles.FlatlistContainer}>
            <FlatList
              data={this.state.AllCharacters}
              showsVerticalScrollIndicator={false}
              horizontal={false}
              numColumns={2}
              renderItem={({ item }) => (
                <View>
                  <CharecterList
                    CharecterID={item.id}
                    CahrecterWebsite={item.website}
                    CharecterNickName={item.username}
                    CharacterEmail={item.email}
                    CahrecterName={item.name}
                    CharacterCompanyName={item.company.name}
                    CharacterCompanyBs={item.company.bs}
                    navigation={this.props.navigation}
                    ScreenName={"home"}
                    HandelCharacterTouch={(id) => this.GoToDeatails(id)}
                  />
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  HeaderMainCOntainer: {
    height: Deviceheight / 15,
    width: Devicewidth,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    backgroundColor: "#070707",
    flexDirection: "row",
    paddingHorizontal: 20
  },
  Headding: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: '600',
    textAlign: "left",
    fontFamily: "Roboto-Bold"
  },
  FlatlistContainer: {
    padding: 5,
    width: Devicewidth,
    height: Deviceheight / 1.07,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#070707'
  },
})