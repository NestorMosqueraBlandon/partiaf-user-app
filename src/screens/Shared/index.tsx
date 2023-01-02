import {View, Text, TextInput, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image} from 'react-native'
import SwiperFlatList from 'react-native-swiper-flatlist';

const Shared = () => {

    const windowWidth = Dimensions.get('window').width; 
    const windowHeigth = Dimensions.get('window').height; 

    return(

        <View style={{width: windowWidth, height: windowHeigth, backgroundColor: 'black'}}>
            <View style={{position: 'absolute', top: 20, left: 20, right: 0}}><Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>Activity</Text></View>
     
            <View>
                <SwiperFlatList>

                </SwiperFlatList>
            </View>
        </View>
    )
}



export default Shared;