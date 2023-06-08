import {StyleSheet, 
        Text, 
        View, 
        Image,
        Platform,
        StatusBar,
        SafeAreaView, 
        TouchableOpacity,
       } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style = {{
      backgroundColor: '#fff',
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }}>
      {/*Blue Box View*/}
      <View style = {{backgroundColor: 'dodgerblue', flex: .30,}}>
      
        {/*Logo and Text*/}
        <View style = {{flexDirection: 'row', paddingTop: 10, justifyContent: "center"}}>
          <Image source={require('./assets/GCASH-Logo.png')}
             style={{width: 40, height: 40}}
        />
          <Text style = {styles.gcash}>GCash</Text>
        </View>

        {/*User*/}
        <View style = {{flexDirection: 'row', paddingTop: 40, justifyContent: 'center', left: 150, bottom: 85}}>
          <TouchableOpacity>
            <Image source ={require("./assets/user.png")}/>
          </TouchableOpacity>
        </View>

        {/*Menu*/}
        <View style = {{flexDirection: 'row', paddingTop: 40, justifyContent: 'center', right: 150, bottom: 165}}>
          <TouchableOpacity>
            <Image source ={require("./assets/menu.png")}/>
          </TouchableOpacity>
        </View>

        {/*Icons*/}
        <View style = {{flexDirection: 'row', paddingTop: 40, justifyContent: 'center', right: 150, bottom: 10}}>
          <TouchableOpacity>
            <Image source ={require("./assets/Send.png")}/>
          </TouchableOpacity>
        </View>

      <Text style = {styles.balance}>Balance</Text>
      <Text style = {styles.balanceNumber}>₱ 200,000.69</Text>

      </View>
    </SafeAreaView>
    
  );
  
}




const styles = StyleSheet.create({
  logo: {
    width: '50%',
    height: '5%',
  },
  gcash: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    marginLeft: 10
  },
  balance: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: '42%',
    bottom: 220,
  },
  balanceNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    marginLeft: -110,
    left: 160,
    bottom: 185,
  },
 
});
