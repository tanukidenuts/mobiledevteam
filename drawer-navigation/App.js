import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SimpleLineIcons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import User from "./assets/user.png";
import Profile from "./screens/Profile";
//import SendMoney from "./screens/SendMoney";
import Home from "./screens/Home";
import RateApp from "./screens/RateApp";
import SignOut from "./screens/SignOut";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.drawerHeader}>
        <Image source={User} style={styles.profileImage} />
        <Text style={styles.userName}>Anthony De Quak</Text>
        <Text style={styles.userRole}>Taga Kain ng Saging</Text>
      </View>
      <DrawerItemList {...props} />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawerContent}
        drawerStyle={styles.drawerStyle}
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTintColor: "#fff",
          headerTitleStyle: styles.headerTitleStyle,
          drawerLabelStyle: styles.drawerLabelStyle,
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerLabel: "Home",
            drawerIcon: ({ color, size }) => <SimpleLineIcons name="home" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerLabel: "Profile",
            drawerIcon: ({ color, size }) => <MaterialCommunityIcons name="face-man-profile" size={size} color={color} />,
          }}
        />
      {/*  <Drawer.Screen name="SendMoney" component={SendMoney} options={{drawerLabel: "Send Money",drawerIcon: ({ color, size }) => <MaterialIcons name="send" size={size} color={color} />,}}/> */}
          
        <Drawer.Screen
          name="RateApp"
          component={RateApp}
          options={{
            drawerLabel: "Rate App",
            drawerIcon: ({ color, size }) => <MaterialIcons name="star-rate" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="SignOut"
          component={SignOut}
          options={{
            drawerLabel: "Sign Out",
            drawerIcon: ({ color, size }) => <MaterialIcons name="logout" size={size} color={color} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#f4f4f4",
    paddingVertical: 20,
    alignItems: "center",
  },
  profileImage: {
    height: 130,
    width: 130,
    borderRadius: 65,
    marginBottom: 10,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111",
  },
  userRole: {
    fontSize: 16,
    color: "#111",
  },
  drawerStyle: {
    width: 250,
  },
  headerStyle: {
    backgroundColor: "#f4511e",
    borderBottomWidth: 0, // Remove the bottom border in the header
    },
    headerTitleStyle: {
    fontWeight: "bold",
    },
    drawerLabelStyle: {
    color: "#111",
    fontSize: 16,
    marginLeft: -10, 
    },
    });
