import React from 'react'
import { StyleSheet , Text , View , ScrollView , TextInput , TouchableOpacity} from 'react-native'

export default class Main extends React.Component{
    render(){
      return (
          <View style={styles.container}>
             <View style={styles.header}>
                 <Text style={styles.txtHeader}>- My Note -</Text>
             </View>
             <ScrollView style={styles.scrollContainer}>

             </ScrollView>
             <View style={styles.footer}>
                <TextInput 
                style={styles.textInput}
                placeholder="Write note here" 
                placeholderTextColor="white"/>
             </View>
             <TouchableOpacity style={styles.addButton}>
                 <Text style={styles.addButtonText}> + </Text>
            </TouchableOpacity>
          </View>
      );
    }
}


const styles = StyleSheet.create({
    container: {
        flex : 1,
    },
    header:{
        backgroundColor:'#E91E63',
        alignItems : 'center',
        justifyContent : 'center',
        borderBottomWidth:2,
        borderBottomColor : '#ddd',
        padding : 8
    },
    txtHeader:{
        color : '#fff',
        fontSize : 14,
    },
    scrollContainer:{
        flex : 1,
        marginBottom : 100,
    },
    footer:{
        position : 'absolute',
        bottom : 0,
        left : 0,
        right : 0,
        zIndex : 10,
    },
    textInput:{
        alignSelf : 'stretch',
        color : '#fff',
        padding : 20,
        backgroundColor : '#252525',
        borderTopWidth: 2,
        borderTopColor : '#ededed'
    },
    addButton:{
        position : "absolute",
        marginBottom : 1 ,
        zIndex : 11 , 
        right:10,
        bottom:90,
        backgroundColor: '#E91E63',
        width : 50,
        height : 50 ,
        borderRadius : 50,
        alignItems : 'center',
        justifyContent : 'center'
    },
    addButtonText : {
        color : 'white' , 
        fontSize : 24,  
    }
    
})