import {Gesture, GestureDetector} from 'react-native-gesture-handler' 
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

const BottomSheet = () => {
    const gesture = Gesture.Pan().onUpdate((event) => {
        console.log(event)
    })
    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={styles.bottomSheetContainer}>
                <View style={styles.line}>
                </View>
            </Animated.View>

        </GestureDetector>
    )
}

const styles = StyleSheet.create({

    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        top: SCREEN_HEIGHT / 1.5,
        borderRadius: 25
    },
    line: {

    }
})

export default BottomSheet;