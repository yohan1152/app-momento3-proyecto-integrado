import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import CardComponentUser from './card-component-user'
import color from '../styles/colors';

// function CardComponentUser() {
//     // const {author} = props.user;
//     // console.log('author card',author);
    
//     const navigation = useNavigation();
//     // const { _id, title, type, address, rooms, price, area, image } = props.properties;

//     return (
        
//         <View style={styles.container}>

//             <Image style={styles.image} source={require('../assets/'+image)} />
//             <Text style={styles.appointmentText}>{title}</Text>
//             <Text style={styles.text}>Type: {type}</Text>
//             <Text style={styles.text}>Address: {address}</Text>
//             <Text style={styles.text}>Rooms: {rooms}</Text>
//             <Text style={styles.text}>Price: {price}</Text>
//             <Text style={styles.text}>Area: {area}</Text>
        
//             <View style={styles.containerButtons}>
//                 <TouchableHighlight style={styles.buttom} onPress={() =>
//                     navigation.navigate('UpdateProperties', {
//                         id: _id,
//                         title: title,
//                         type: type,
//                         address: address,
//                         price: price,
//                         rooms: rooms,
//                         area: area,
//                         image: image,
//                         author: author
                        
//                     })}>
//                     <Text style={styles.buttonText}>Update</Text>
//                 </TouchableHighlight>
//                 <TouchableHighlight style={styles.buttom} onPress={() => {
//                     navigation.navigate('DeleteProperties', {
//                         id: _id,
//                         title: title,
//                         type: type,
//                         address: address,
//                         rooms: rooms,
//                         area: area,
//                         image: image,
//                         author: author
                        
//                     })
//                 }}>
//                      <Text style={styles.buttonText}>Delete</Text> 
//                  </TouchableHighlight> 
//             </View>
//         </View>
//     );
// };


function ListPropertiesUser({ route,navigation }) {
    const { author,name } = route.params; //Id de inicio de sesion 
    console.log('List properties user',author);
    
    const isFocused = useIsFocused();
    const [properties, setProperties] = useState([]);

    /* Data for the flatlist */
    const fetchAppointments = async () => {
        let response = await fetch('http://localhost:3000/api/getpropertiesuser?authorid='+author);
        let jsonResponse = await response.json();
        setProperties(jsonResponse.res.data);
        
    }
    useEffect(() => {
        fetchAppointments();
    }, [isFocused]);

    // const renderItem = ({item}) => {
    //     /*los tres puntos (...) se conocen como el operador propagador y
    //     sirven para pasar las propiedades del item, en este caso: nombre y key */
    
    //     return (
    //       <CardComponentUser
    //         {...item}
    //         user={author}
    //         properties={item}
    //       />
    //     );
    //   };

    return (
        <View style={styles.container}>
          <Text>{name}</Text>
            <TouchableHighlight style={styles.createPropertyButton} onPress={() =>
                navigation.navigate('CreateProperties', {
                    author: author
                })}>
                <Text style={styles.createPropertyButtonText}>Create Property</Text>
            </TouchableHighlight>
            
            {/* <CardComponentUser data={properties} user={author} */}
            
            <FlatList
                data={properties}
                renderItem={({ item }) => <CardComponentUser properties={item} />}
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
    },
    image: {
        width: 160,
        height: 160,
        borderWidth: 1,
    },
    createPropertyButton: {
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
    createPropertyButtonText: {
        color: color.White,
        fontWeight: 'bold',
        fontSize: 17,
        textShadowColor: color.Black,
        textShadowRadius: 1.5,
    },
});


export default ListPropertiesUser;
