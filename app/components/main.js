import React from 'react'
import { StyleSheet , Text , View , ScrollView , TextInput , TouchableOpacity} from 'react-native'

export default class Main extends React.Component{
    render(){
      return (
          <View style={styles.container}>
             <View style={styles.header}>
                 <Text styles={styles.txtHeader}>- My Note -</Text>
             </View>
             <ScrollView>

             </ScrollView>
             <View style={styles.footer}>
                <TextInput placeholder="Write note here" placeholderTextColor="white"/>
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
})