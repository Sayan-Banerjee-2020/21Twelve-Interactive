import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, FlatList } from 'react-native';
import axios from "axios"

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

export default class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      AllComments: [],
    }
  }
  state = this.state;
  componentDidMount() {
    let MyCharId = this.props.route.params.PressedCharacter.id

    axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      params: {
        userId: MyCharId
      }
    })
      .then(response => {
        console.log("my user Details response", response);
        if (response.status == 200) {
          this.setState({
            AllComments: response.data
          })
        }

      })
      .catch(error => {
        console.error("my error", error.data)
      })
  }
  HandelTouch = (ID) => {
    let CommentId = ID
    this.props.navigation.navigate('commentDetails',
      {
        "PressedCommentID": CommentId
      })
  }
  render() {
    return (
      <>
        <View style={styles.Container}>
          {/* Header Section */}
          <View style={styles.HeaderMainCOntainer}>
            <Text style={styles.Headding}>All Comments</Text>
          </View>

          {/* Scroll Section */}
          <View style={styles.FlatlistContainer}>
            <FlatList
              data={this.state.AllComments}
              showsVerticalScrollIndicator={false}
              horizontal={false}
              // numColumns={2}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity style={styles.NameContainer} onPress={() => this.HandelTouch(item.id)}>
                    <Text style={styles.Name}>{item.title}</Text>
                    <Text style={styles.CharecterNickName} numberOfLines={2}>{item.body}</Text>
                  </TouchableOpacity>
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
    backgroundColor: "#070707",
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
  NameContainer: {
    width: Devicewidth / 1.05,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    backgroundColor: "#070707",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 11
  },
  Name: {
    fontSize: 16,
    color: "#2ed93c",
    textAlign: "left",
    fontWeight: "bold",
    fontFamily: 'Roboto-Light',
    paddingBottom: 5
  },
  CharecterNickName: {
    fontSize: 14,
    color: "#cccaca",
    textAlign: "left",
    fontFamily: 'Roboto-Thin'
  },
})