import React, {Component} from "react";
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert} from "react-native";
import { Button } from "react-native-web";

class Aula03 extends Component {

    handleLogin = () => {
        Alert.alert("Ação", "Botão Entrar pressionando!")
    }

    
    render() {
        return(
            <View style={ styles.container}>
                <View style={ styles.conteudo}>
                    <Image
                        style={ styles.logo }
                        source={require('../images/spam_cooking-i1pyKBJ9BRgjP1OS.gif')}
                    />

                    <Text style={styles.label}>Nome:</Text>
                    <TextInput 
                        style={ styles.input }
                    />
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput 
                        style={ styles.input }
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={styles.botao} onPress={this.handleLogin}>
                        <Text style={styles.botaoTexto}>Entrar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

export default Aula03;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },

    conteudo: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 130,
        height: 100,
    },

    label: {
        color: 'white'
    },

    input: {
        height: 40,
        margin: 20,
        width: 250,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5
    },

    botao: {
        backgroundColor: 'green',
        padding: 20,
        color: 'black',
        borderRadius: 5,
        marginTop: 15,
        alignItems:'center',
        width: 250
    },

    botaoTexto: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }

})