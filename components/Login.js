import React, { useContext } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


// import MyContext from './Context';

export default function Login() {
  const navigation = useNavigation();

  // const { setWeatherDatas } = useContext(MyContext);

  const data = [
    {
      username: "21eg105h21@anurag.edu.in",
      password: "yash@7640",
    },
  ];

  const [authMessage, setAuthMessage] = React.useState({
    authUser: "",
    authPass: "",
    color: "",
    userStatus: true,
    passStatus: true,
  });
  const [user, setuser] = React.useState("");
  const [pass, setPass] = React.useState("");
 

  // const navigation = useNavigation();
  // const [auth,setAuth] = React.useState([]);

  // function userName(text){
  //   setuse(text);
  // }

  // function passWord(text){
  //   setPass(text);
  // }

  // let usernameValidation=/^[\w\d]+@[\w\d]+\.[\w\d.]+$/i;
  // let passwordValidation=/^[\w\d]+[!@#$%^&*()_+=]/;

  // async function content(propsData){
  //   try{
  //   const studLogin = await fetch('http://192.168.0.110:3000/user/getUsers');
  //   const loginData = await studLogin.json();
  //   let res = false;
  //    const foundUser = loginData.find(item => item.userEmail == use && item.userPassword == pass)
  //    setStudentInfo(foundUser);
  //   if(foundUser){
  //   {usernameValidation.test(use) && passwordValidation.test(pass) ? (
  //     navigation.navigate('DrawNav',{ CustomData:studentInfo.userName})) :
  //     (
  //       alert('enter the details correctly!')
  //     )
  //   }
  // }
  // else{
  //   alert('enter the username and password');
  // }
  //   }
  //   catch(err){
  //     console.log(err)
  //   }

  // }

  // function ForgotPass(){
  //   navigation.navigate('ForgotPass');
  // }

  // function goSignUp(){
  //   navigation.navigate('SignUp');
  // }



  const authanticate = async () => {
   
    
   
    // await fetch("http://192.168.174.183:5000/weather/insertWeatherData", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: res,
    // });

    // (user && pass)?
    
    navigation.navigate("CampusConnect")
    // alert("enter the details correctly")
  };

  const changeUser = (use) => {
    setuser(use);
    data.map((item) => {
      if (item.username != user) {
        setAuthMessage({
          authUser: "*userNotFound",
          color: "red",
          userStatus: false,
        });
      } else {
        setAuthMessage({
          authUser: "*user Found",
          color: "green",
          userStatus: true,
        });
      }
    });
  };

  const changePassword = (password) => {
    setPass(password);
    data.map((item) => {
      if (item.password != pass) {
        setAuthMessage({
          authPass: "*password did not matched",
          color: "red",
          passStatus: false,
        });
      } else {
        setAuthMessage({
          authPass: "*Details matched",
          color: "green",
          passStatus: true,
        });
      }
    });
  };
  const move = () => {
    navigation.replace("Create Your Profile");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Campus Connect</Text>
        <TextInput
          style={styles.username}
          placeholder="userName"
          onChangeText={changeUser}
          borderColor="black"
          placeholderTextColor="blue"
          borderWidth={1}
        />
        <Text
          style={{
            color: authMessage.color,
          }}
        >
          {authMessage.authUser}
        </Text>
        <TextInput
          style={styles.username}
          placeholder="password"
          onChangeText={changePassword}
          borderColor="black"
          borderWidth={1}
          placeholderTextColor="blue"
        />
        <Text style={{ color: authMessage.color, textAlign: "left" }}>
          {authMessage.authPass}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          maxHeight: 150,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <View style={{ flex: 1, maxHeight: 50, gap: 10, flexDirection: "row" }}>
          <Button
            style={styles.loginButton}
            mode="contained"
            onPress={authanticate}
          >
            Login
          </Button>
          <Button style={styles.signUpButton} mode="outlined" onPress={move}>
            SignUp
          </Button>
        </View>
        <TouchableOpacity style={{ margin: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "blue",
              textDecorationLine: "underline",
            }}
          >
            Forgot Password ?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 40,
    color: "#191970",
    fontStyle: "normal",
    fontWeight: "bold",
  },
  username: {
    width: 300,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  loginButton: {
    width: 150,
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
  },
  signUpButton: {
    width: 150,
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
