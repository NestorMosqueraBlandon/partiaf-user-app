import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import BottomTabView from '../../components/Profile/BottomTabView';

const Profile = () => {

    const bottomSheetModalRef = useRef<any>(null);

    const snapPoints = ['50%'];

    const handlePresentModal = () => {
        bottomSheetModalRef.current?.present();
    }

    return(
        <BottomSheetModalProvider>

        <View>
            <StatusBar animated={true} />
            <View style={styles.header}>
                <Text style={{fontWeight: '600', fontSize: 23}}>yunsde</Text>
                <View style={styles.header_left}>
                <Ionicons name={'ios-qr-code-outline'} style={{ fontWeight: '100', fontSize: 23, marginRight: 7}} />
                <TouchableOpacity onPress={handlePresentModal}>
                    <Ionicons name={'ios-menu-outline'} style={{ fontWeight: '100', fontSize: 40, marginTop: -10}} />
                </TouchableOpacity>
                </View>
            </View>

            <View style={{display: 'flex', flexDirection: 'row', paddingVertical: 10, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{marginRight: 20, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Text style={{fontWeight:'700', fontSize: 20}} >40</Text>
                    <Text style={{fontSize: 15}}>Seguidores</Text>
                </View>
                <Image  source={{uri: 'https://i.postimg.cc/bN38PzZn/Captura-de-pantalla-2022-08-24-163058.png'}} style={{height: 110, width:110, borderRadius: 100, resizeMode: 'cover'}} />
                <View style={{marginLeft: 20, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Text style={{fontWeight:'700', fontSize: 20}}>10</Text>
                    <Text style={{fontSize: 15}}>Seguidos</Text>
                </View>
            </View>

            <View style={{display: 'flex', paddingTop: 10, alignItems: 'center', justifyContent:'center'}}>
                <Text style={{fontWeight: '700', color: '#111111', fontSize: 20, marginBottom: 5}}>Nestor Mosquera</Text>
                <Text>Click para anadir una biografia</Text>
            </View>

            <View style={{display: 'flex', flexDirection: 'row',justifyContent: 'center',  alignItems: 'center', marginTop: 30}}>
                <TouchableOpacity  style={{ marginRight: 10, backgroundColor: 'rgba(0,0,0,.005)', borderColor: 'rgba(0,0,0,.1)', borderWidth:1, width: 150, borderRadius: 5, height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: '500', fontSize:16}}>Editar perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'rgba(0,0,0,.005)', borderColor: 'rgba(0,0,0,.1)', borderWidth:1, width: 50, borderRadius: 5, height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                   <Image source={{uri: 'https://i.postimg.cc/Hn6R798t/instagram.png'}} style={{height: 25, width: 25, resizeMode: 'cover'}} />
                </TouchableOpacity>
            </View>
            {/* <GestureHandlerRootView style={{flex: 1}}> */}

             <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                backgroundStyle={{borderRadius: 20}}
            >
                <View>
                    <Text>Configuracion</Text>
                </View>
            </BottomSheetModal> 
            {/* <BottomSheet /> */}

            {/* </GestureHandlerRootView> */}

            <BottomTabView />
        
        </View>

        </BottomSheetModalProvider>

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


export default Profile;