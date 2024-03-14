import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';



const MyComponent = () => {
    const [showMatter, setShowMatter] = useState(false);

    const handleButtonClick = () => {
        setShowMatter(!showMatter);
    };

    return (


        <View style={styles.container}>
            <SafeAreaView Style={{ flex: 10 }}>
                <ScrollView contentContainerStyle={styles.scroll} >
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.rightImage}
                            source={{ uri: 'https://res.cloudinary.com/dfwchdncf/image/upload/v1706440736/logo_cunpzc-removebg-preview_cioulm.png' }}
                        />

                    </View>
                    <View style={styles.contentContainer}>
                        <Image style={styles.desImage}
                            source={{
                                uri: "https://res.cloudinary.com/dz9xo7n3k/image/upload/v1708850968/ebyobnmowt9wea0ykzeg.jpg "
                            }}
                        />

                        <Text style={styles.about}>About Us</Text>
                        <Text style={styles.any}>We are on a mission to enhance the air quality that we breathe...</Text>

                        <TouchableOpacity onPress={handleButtonClick}>
                            <Text style={styles.button}>Learn more </Text>
                        </TouchableOpacity>
                        {showMatter && (
                            <Text style={styles.additionalMatter}>
                                {'\t\t\t\t'} 'Welcome to GoEco, where innovation meets convenience.Our journey began with a simple idea: to transform the way students travel from their home to the college or the nearby destination.At GoEco, we strive to empower our users to prefer eco - friendly means of transport.We are crafting a seamless experience, so that the interaction with our app is amusing and easy.
                                {'\n'}{'\n'}
                                {'\t\t'}What sets us apart is our motive to reduce the pollution due the petrochemicals used in vehicles Our belief fuels our constant drive to exceed expectations.If you are looking to save our environment from pollution GoEco is designed with you in mind.Join us on this journey and continue to evolve and create a better way to reduce the future risks.Thank you for being a part of our community
                                {'\n\n'}
                                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 23 }}>Sincerely, GoEco Team</Text>
                            </Text>
                        )}
                        <Text style={styles.para}><Text style={{ fontWeight: 'bold', color: "blue", lineHeight: 35, fontSize: 28 }}>Our Purpose</Text>  {'\n'}Welcome to GoEco revolutionizing student travel with eco-friendly solutions. Our commitment to reducing vehicle pollution drives us to exceed expectations. Join us in crafting a greener, better future. Thank you for being part of the GoEco community!"</Text>
                        <Text style={styles.head}>We're here</Text>
                        <Text style={styles.caption} >to share your excitements with us </Text>
                        <Text><Image
                            style={styles.contact}
                            source={{ uri: 'https://res.cloudinary.com/dfwchdncf/image/upload/v1706867696/mail_utbmdn.jpg' }}
                        />{'\t\t\t'}yaminivenkata4@gmail.com  {'\n'}</Text>
                        <Text><Image
                            style={styles.contact}
                            source={{ uri: 'https://res.cloudinary.com/dfwchdncf/image/upload/v1706867657/downloadinsta_qx6xvh.jpg' }}
                        /> {'\t\t\t'}_4 {'\n\t\t'}</Text>
                        <Text><Image
                            style={styles.contact}
                            source={{ uri: 'https://res.cloudinary.com/dfwchdncf/image/upload/v1706867646/facebook_npxqwk.jpg' }}
                        />  {'\n'}</Text>
                        <Text><Image
                            style={styles.contact}
                            source={{ uri: 'https://res.cloudinary.com/dfwchdncf/image/upload/v1706872537/images_tfxoll.png' }}
                        />  {'\n'}</Text>



                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        borderColor: "gray",
    },
    head: {
        marginTop: 10,
        marginLeft: -230,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    scroll: {
        paddingVertical: 24,

    },
    caption: {
        fontSize: 12,
        left: -60,

    },
    logoContainer: {
        flex: 0.6,
        backgroundColor: '#f2f1ed',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
    },
    any: {
        fontSize: 14,
        top: -180,
        marginLeft: 10,
    },
    contact: {
        width: 30,
        height: 30,
        left: 100,


    },
    additionalMatter: {
        marginTop: 10,
        fontSize: 18,
        color: 'black',
        top: -100,
        margin: 7,
        // letterSpacing:2,

    },
    rightImage: {
        width: 55.9,
        height: 55.9,
        left: 300,

    },
    button: {

        borderRadius: 20,
        fontWeight: "bold",
        color: "black",
        paddingTop: 10,
        paddingLeft: 12,
        marginLeft: -170,
        marginRight: 70,
        paddingBottom: 10,
        paddingRight: 10,
        marginTop: -150,
        marginBottom: 30,
        backgroundColor: '#eda509',

    },
    para: {
        fontSize: 18,
        left: -110,
        lineHeight: 24,
        color: "black",
        borderColor: "gray",
        borderWidth: 2,
        padding: 20,
        left: 0,
        borderRadius: 30,
        marginTop: -80,
        margin: 8,


    },
    about: {
        fontWeight: "bold",
        left: -90,
        fontSize: 30,
        color: "blue",
        paddingLeft: 13,
        paddingRight: 13,
        top: -190,

    },
    desImage: {
        width: 400,
        height: 250,
        // left:30,
        top: -130,
        marginTop: 150,
        marginBottom: 140,

    },
    contentContainer: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
});

export default MyComponent;
