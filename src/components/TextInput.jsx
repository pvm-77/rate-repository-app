import {TextInput as NativeTextInput,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    textInput: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    textInputError: {
        height: 40, 
        borderColor: '#d73a4a', 
        borderWidth: 1,
        padding: 10,
        margin: 10
    }
});

const TextInput=({error,...props})=>{


    const textInputStyle=error?styles.textInputError:styles.textInput
    return <NativeTextInput style={textInputStyle} {...props}/>
}

export default TextInput;