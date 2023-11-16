import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    formContext:{
        flex:1,
        backgroundColor:"#70979f",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:15,
    },

    form:{
        width:"100%",
    },

    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft: 20,
    },

    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor: "#f0f0f2",
        height:40,
        margin:12,
        paddingLeft:10,
        shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.9, 
  shadowRadius: 5, 
  elevation: 10, 

    },

    buttonCalulator:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent:"center",
        width:"80%",
        backgroundColor:"#12405e",
        paddingTop: 14,
        paddingBottom: 14,
        margin:30,
        height: 50
    },  

    textButtonCalcular:{
        fontSize:15,
        color:"#ffffff",
    },
    
    errorMessage:{
        fontSize: 12,
        color:"red",
        fontWeight:"bold",
        marginLeft: 20,
        marginBottom:5,
    },
    
    exibitionResultImc:{
        width:"100%",
        height:"50%",
        justifyContent:"center",
        alignItems: "center"
    }

})

export default styles