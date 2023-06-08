import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import React ,{useState, useEffect} from 'react';
import { auth, firebase } from '../firebase';


const firestoresignup = () => {

    const [users, setUsers] = useState([]);
    const todoRef = firebase.firestore().collection('Users');


    useEffect( () => {

      todoRef
      .onSnapshot(  
        querySnapshot => {
          const users = []
          querySnapshot.forEach((doc) => {
            const {availableAmount, email} = doc.data()
              users.push({
                id: doc.id,
                availableAmount,
                email,
              }) 
          }) 
          setUsers(users)
        }
      )
    },[])

  return (
    <View style= {{ flex:1, marginTop:100}}>
      <FlatList
          style={{height:'100%' }}
          data={users}
          numColumns={1}
          renderItem={({item}) => (
            <Pressable
                style={styles.container}
            >
                <View style={styles.innerContainer}>
                  <Text style={styles.itemHeading}>{item.email}</Text>
                  <Text style={styles.itemText}>Available Money: {item.availableAmount}</Text>
                </View>
            </Pressable>
          )}
      />
    </View>
  )
}

export default firestoresignup

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#e5e5e5',
      padding:15,
      borderRadius:15,
      margin:5,
      marginHorizontal: 10,
    },
    innerContainer:{
      alignItems: 'center',
      flexDirection: 'column',

    },
    itemHeading:{
      fontWeight:'bold'
    },
    itemText:{
      fontWeight: '300'
    }
})