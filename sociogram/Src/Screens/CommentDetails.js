import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList } from 'react-native';
import axios from "axios"

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

export default class CommentDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Comments: [],
        }
    }
    state = this.state;
    componentDidMount() {
        let MyCommentId = this.props.route.params.PressedCommentID

        axios.get(`https://jsonplaceholder.typicode.com/comments`, {
            params: {
                postId: MyCommentId
            }
        })
            .then(response => {
                console.log("my user Commnet Details response", response);
                if (response.status == 200) {
                    this.setState({
                        Comments: response.data
                    })
                }
            })
            .catch(error => {
                console.error("my error", error.data)
            })
    }
    render() {
        return (
            <>
                <View style={styles.Container}>
                    {/* Header Section */}
                    <View style={styles.HeaderMainCOntainer}>
                        <Text style={styles.Headding}>Comments</Text>
                    </View>
                    {/* Scroll Section */}
                    <View style={styles.FlatlistContainer}>
                        <FlatList
                            data={this.state.Comments}
                            showsVerticalScrollIndicator={false}
                            horizontal={false}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.NameContainer}>
                                        <Text style={styles.Name}>{item.name}</Text>
                                        <Text style={styles.CharecterNickName}>{item.email}</Text>
                                        <Text style={styles.CharecterName}>{item.body}</Text>
                                    </View>
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
        paddingBottom:10,
        paddingLeft: 11
    },
    Name: {
        fontSize: 20,
        color: "#2ed93c",
        textAlign: "left",
        fontWeight: "bold",
        fontFamily: 'Roboto-Light',
        marginBottom:2
    },
    CharecterName: {
        fontSize: 16,
        color: "#cccaca",
        textAlign: "left",
        fontWeight: "bold",
        fontFamily: 'Roboto-Light',
    },
    CharecterNickName: {
        fontSize: 15,
        color: "#6b6a6a",
        textAlign: "left",
        fontFamily: 'Roboto-Thin',
        marginBottom:10
    },
})