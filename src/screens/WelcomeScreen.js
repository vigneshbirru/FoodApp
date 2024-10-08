import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from "../../assets/g10.png";

const WelcomeScreen = () => {
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.heading}>Waves Of Food</Text>
                <Text style={styles.subtitle}>Deliver Favorite Food</Text>

                {/* Buttons for Signup/Login */}
                <View style={styles.btnout}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Footer Section */}
            <View style={styles.footerContainer}>
                <Text style={styles.footer}>Terms of Service</Text>
                <Text style={styles.footer}>Privacy Policy</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 15,
        marginBottom: 50,
    },
    btnout:{
        flexDirection: 'row',
        justifyContent:'space-around',
        width: '80%',
    },
    button: {
        backgroundColor: '#6CCB7B',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,  
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    footer: {
        fontSize: 12,
        color: '#007bff',
        marginHorizontal: 10,
    },
});

export default WelcomeScreen;
