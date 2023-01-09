import { View,StyleSheet } from "react-native";

import Constants from 'expo-constants';


const styles=StyleSheet.create({
    container:{
        paddingTop:Constants.statusBarHeight,
        backgroundColor:'#24292e',
        color:'white',
        fontWeight:'bold',
        padding:10
    }
})

const AppBar=()=>{
    return <View style={styles.container}>Repositories</View>
}

export default AppBar;