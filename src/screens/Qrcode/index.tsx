import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import BottomTabView from '../../components/Profile/BottomTabView';

const Qrcode = () => {

    return(

        <View>
            <StatusBar animated={true} />
            <View style={styles.header}>
                <Text style={{fontWeight: '600', fontSize: 23}}>yunsde</Text>
                <View style={styles.header_left}>
                <Ionicons name={'ios-qr-code-outline'} style={{ fontWeight: '100', fontSize: 23, marginRight: 7}} />
             
                </View>
            </View>


            <View style={{display: 'flex', paddingTop: 10, alignItems: 'center', justifyContent:'center'}}>
                <Text style={{fontWeight: '700', color: '#111111', fontSize: 20, marginBottom: 5}}>Nestor Mosquera</Text>
                <Text>QR CODE</Text>
            </View>

       
        
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


export default Qrcode;