import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Store from '../../components/Store';
import { useEffect, useState } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native'

export interface IStore {
    _id?: string;
    name: string;
    type: string;
    photos: string[];
}

const Stores = () => {
    const [stores, setStores] = useState([]);

    const fetchStores = async() => {
        fetch('https://partiaf-api.xyz/api/v2/stores')
        .then((response) => response.json())
        .then((data) => setStores(data));
    }

    console.log({stores})

    useEffect(() => {
        fetchStores();
    }, [])

    const navigation = useNavigation()

    return(
        <View style={{backgroundColor: "#fff"}}>
            <StatusBar animated={true} />
            <View style={styles.header}>
                <Ionicons name='ios-options-outline' style={{ fontWeight: '100', fontSize: 26}} />
                <Image source={{uri: 'https://i.postimg.cc/DZL8VnL4/partiaf-single.png'}} style={{marginLeft: 23, marginTop: 4, width:120, height: 20, resizeMode: 'contain'}} />
                <View style={styles.header_left}>
                <Ionicons name={'ios-wallet-outline'} style={{ fontWeight: '100', fontSize: 23, marginRight: 10}} />
                <TouchableOpacity >
                    <Ionicons name={'ios-qr-code-outline'} style={{ fontWeight: '100', fontSize: 23}} />
                </TouchableOpacity>

                </View>
            </View>

            <ScrollView>
                {stores.map((store:IStore) => {
                        return (
                            <View key={store._id}>
                                <Store photos={store.photos} name={store.name} type={store.type} />
                            </View>
                        );
                    }
                )}
            </ScrollView>

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


export default Stores;