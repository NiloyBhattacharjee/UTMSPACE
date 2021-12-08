import { Alert, Image ,Button, TextInput, View,  StyleSheet, } from 'react-native';
import React, { Component } from 'react';
import { StatusBar } from "expo-status-bar";

export default class App extends 
    Component {
      constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
        };
      }
      
      onLogin() {
        const { username, password } = this.state;
    
        Alert.alert('Credentials', `${username} + ${password}`);
      }
    
      render() {
        return (
        
           
        <View style={styles.container}>
            <Image
             fadeDuration={500}
             style={styles.image}
             source={require('./assets/logo.png')}
               />
           
             <StatusBar style="auto" />
            <TextInput
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
              placeholder={'Username'}
              style={styles.input_email}
            />
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input_password}
            />
         
             <Button
              title={'Login'}
              style={styles.input_button}
              color={"#A2D2FF"}
              
              onPress={this.onLogin.bind(this)}
            /> 
          </View>
          
        );
      }
    }
    
    const styles = StyleSheet.create({
      image: {
        flex: 20,
        width: 300,
        height: 100,
        resizeMode: 'contain'
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#577BC1',
      },
      input_email: {
        flex : 1,
        width: 300,
        height: 20,
        padding: 10,
        borderWidth: 5,
        borderColor: 'black',
        marginBottom : 10,
        backgroundColor: '#FEF9EF'
  
        
      },
      input_password: {
        flex :1,
        width: 300,
        height: 20,
        padding: 10,
        borderWidth: 5,
        borderColor: 'black',
        marginBottom : 200,
        backgroundColor: '#FEF9EF'
      },
    input_button: {
    position: 'absolute',
    bottom:0,
    left:0,
      },
    });
    