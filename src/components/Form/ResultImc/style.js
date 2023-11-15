import { StyleSheet } from 'react-native'

    const styles = StyleSheet.create({
    resultadoIMC:{
        flex:1,
        marginTop: 10,
        paddingTop: 60,
        borderRadius:50,
        alignItems: "center",  
    },

    numberImc:{
        fontSize:28,
        color:"#12405e",
        width:"100%",
        fontWeight:"bold",
    },

    information:{
        fontSize: 18,
        color:"#12405e",
        fontWeight:"bold",
    },

    boxShareButton:{
        width: "100%",
        alignItems: "center",
        marginBottom: 10,   
    },

    shared:{
        backgroundColor:"#1877f2",
        borderRadius:50,
        paddingBottom:5,
        paddingTop:5,
    },

    sharedText:{
        color:"#ffffff",
        fontWeight:"bold",
        paddingHorizontal: 30,
    }

});

export default styles