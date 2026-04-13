import React, {Component} from "react";
import {View, Text, Image, StyleSheet, TextInput} from "react-native";
import { Button } from "react-native-web";

class Aula03 extends Component {
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
                    />

                    <Button 
                        style={ styles.botao }
                        title="Entrar"
                        color="green"
                    />

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
        borderColor: 'red',
        borderWidth: 1,
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
        borderRadius: 5
    }

})