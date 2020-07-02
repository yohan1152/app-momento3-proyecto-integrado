import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Switch } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import CardComponent from './card-component'
import color from '../styles/colors';

function ListProperties({ navigation }) {
    
    const isFocused = useIsFocused();
    const [properties, setProperties] = useState([]);
     //constantes del switch
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
 

    const fetchAppointments = async () => {
        let response = await fetch('http://localhost:3000/api/listproperties');
        let jsonResponse = await response.json();
        setProperties(jsonResponse.res.data);
        console.log('json response: ',jsonResponse.res.data);
        
    }
    useEffect(() => {
        fetchAppointments();
    }, [isFocused]);

    return (
        <View style={styles.container}>    
            <View style={styles.containerButtom}>
                <TouchableHighlight style={styles.buttom} onPress={() =>
                    navigation.navigate('Login')}>
                    <Text style={styles.buttomText}>LOGIN</Text>
                </TouchableHighlight>
                <Text style={styles.buttomText}>Order by price:</Text>
                <Switch
                    // buttonContent={this.state.active? "Order by Price" : "Desorderly"} 
                    // activeText={"Price"}
                    // inActiveText={"Disorderly"}
                    backgroundActive={color.AquaMarine}
                    backgroundInactive={color.Gray}
                    circleActiveColor={color.Black}
                    circleInActiveColor={color.Wthite}
                    onValueChange={toggleSwitch}
                value={isEnabled}
            />
            </View>

            <FlatList
                data={properties}
                renderItem={({ item }) => <CardComponent properties={item} />}
                keyExtractor={item => item._id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: color.Black,
        color: color.White,
        alignItems: 'center',
        paddingBottom: 20,
    },
    image: {
        width: 160,
        height: 160,
        borderWidth: 1,
    },
    createAppointmentButton: {
        backgroundColor: color.AquaMarine,
        padding: 20,
        margin: 10,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: color.Black,
        borderWidth: 2,
        height: 40,
        justifyContent:'center',
        alignItems: 'center',
    },
    createAppointmentButtonText: {
        color: color.White,
        fontWeight: 'bold',
        fontSize: 17,
        textShadowColor: color.Black,
        textShadowRadius: 1.5,
    },
    containerButtom: {
        width: Dimensions.get('screen').width * 0.8,
        paddingTop: 12,
        paddingBottom: 12,
        flex: 1,
        flexDirection: "row",   
        // backgroundColor: 'yellow',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    buttom: {
        backgroundColor: color.AquaMarine,
        padding: 1,
        margin: 1,
        height: 30,
        width: Dimensions.get('screen').width * 0.18,
        marginLeft: 8,
        borderRadius: 10,
        borderColor: color.Black,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttomText: {
        color: color.White,
        textShadowColor: color.Black,
        textShadowRadius: 2,
    },
});


export default ListProperties;
