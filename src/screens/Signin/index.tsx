import { StatusBar } from 'expo-status-bar';
import {View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Ionicons } from '@expo/vector-icons';
import FonwAwesome from 'react-native-vector-icons/FontAwesome';
import Store from '../../components/Store';
import { useEffect, useState } from 'react';
import BottomTabView from '../../components/Profile/BottomTabView';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useRef } from 'react';

const Signin = () => {

    return(
        <View>
            <Image source={{uri: 'https://i.postimg.cc/DZL8VnL4/partiaf-single.png'}} />
            <Text>Inicia sesion para continuar explorando</Text>
            <TouchableOpacity>
                <Text>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Facebook</Text>
            </TouchableOpacity>

            <TextInput placeholder='Usuario' />
            <TextInput placeholder='Contrasena' />

            <TouchableOpacity>
                <Text>Iniciar Sesion</Text>
            </TouchableOpacity>

            <Text>Aun no tienes una cuenta? <Text>Registrate aqui</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        padding: 18,
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    header_left: {
        display: "flex",
        flexDirection: 'row',
    }
})


export default Signin;