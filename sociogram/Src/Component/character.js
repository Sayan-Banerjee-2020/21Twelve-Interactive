import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;



const CharectersList = (props) => {

    const HandelTouch = () => {
        let id = props.CharecterID
        props.HandelCharacterTouch(id)
    }

    return (
        <>
            <TouchableOpacity style={styles.Container}onPress={() => HandelTouch()}>
                <View style={styles.SecondContainerMainView}>
                    <View style={styles.NameContainer}>
                        <Text style={styles.Name}>{props.CahrecterName}</Text>
                        <Text style={styles.CharecterNickName}>{props.CharecterNickName}</Text>
                    </View>
                </View>
                <View style={styles.DetailsContainer}>
                    <Text style={styles.CharecterName}>{props.CharacterEmail}</Text>
                    <Text style={styles.CharecterNickName}>{props.CahrecterWebsite}</Text>
                </View> 
                <View style={styles.DetailsContainer}>
                    <Text style={styles.CharecterEmail}>{props.CharacterCompanyName}</Text>
                    <Text style={styles.CharecterNickName}>{props.CharacterCompanyBs}</Text>
                </View>
            </TouchableOpacity>
        </>
    )

}

export default CharectersList;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#070707",
        height: Deviceheight / 4,
        width: Devicewidth / 2.15,
        marginBottom: 10,
        marginRight: 5
    },
    SecondContainerMainView: {
        height: Deviceheight / 14,
        width: Devicewidth / 2.2,
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'flex-start',
        backgroundColor: "#070707",
        flexDirection: "row"
    },
    NameContainer: {
        height: Deviceheight / 14,
        width: Devicewidth / 2.2,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        backgroundColor: "#070707",
        paddingTop: 10,
        paddingLeft: 11
    },
    DetailsContainer: {
        // height: Deviceheight / 14,
        width: Devicewidth / 2.2,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        // backgroundColor: "pink",
        paddingTop:10,
        paddingLeft: 11
    },
    Name: {
        fontSize: 20,
        color: "#2ed93c",
        textAlign: "left",
        fontWeight: "bold",
        fontFamily: 'Roboto-Light'
    },
    CharecterEmail: {
        fontSize: 16,
        color: "#cccaca",
        textAlign: "left",
        fontWeight: "bold",
        fontFamily: 'Roboto-Light'
    },
    CharecterName: {
        fontSize: 16,
        color: "#cccaca",
        textAlign: "left",
        fontWeight: "bold",
        fontFamily: 'Roboto-Light'
    },
    CharecterNickName: {
        fontSize: 15,
        color: "#6b6a6a",
        textAlign: "left",
        fontFamily: 'Roboto-Thin'
    },
})