import { React, useState } from "react";
import { View, Text, ScrollView, StyleSheet,Image } from "react-native";
import { Button, TextInput} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const SignUp = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [designation, setDesignation] = useState("");
  const [experience, setExperience] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [password, setPassword] = useState("p");
  const [confirmPassword, setConfirmPassword] = useState("p");
  const pickProfile = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quantity: 1,
    });

    if (!res.canceled) {
      setImage(res.assets[0].uri);
      console.log(res.assets[0].uri);
    }
  };

  const submit = () => {
    password === confirmPassword && password != "" && confirmPassword != ""
      ? navigation.replace("Login")
      : alert("password did not matched enter correctly");
  };


  return (
    <ScrollView vertical={true}>
      <View style={styles.form}>
        <TextInput
          placeholder="username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="PhoneNo"
          value={phoneNo}
          onChangeText={(text) => setPhoneNo(text)}
        />
        <TextInput
          placeholder="Enter your designation ex:Student"
          value={designation}
          onChangeText={(text) => setDesignation(designation)}
        />
        <TextInput
          multiline
          numberOfLines={4}
          placeholder="Any experience"
          value={experience}
          onChangeText={(text) => setExperience(text)}
        />
        <TextInput
          multiline
          numberOfLines={6}
          placeholder="About Your self"
          value={aboutMe}
          onChangeText={(text) => setAboutMe(text)}
        />
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          placeholder="Confirm password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <View style={styles.container}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{
                  width: 100,
                  height: 120,
                }}
              />
            ) : (
              <Image
                source={{
                  uri: "https://cdn5.vectorstock.com/i/1000x1000/72/64/profile-outline-icon-isolated-lined-vector-15437264.jpg",
                }}
                style={{ width: 100, height: 100 }}
              />
            )}
          </View>
          <Button
            style={styles.createAccBtn}
            mode="contained"
            onPress={pickProfile}
          >
            Pick Profile
          </Button>
          <Button mode="contained" onPress={submit} style={styles.createAccBtn}>
            Create Account
          </Button>
          <Button mode="Text" onPress={submit}>
            already have an account?
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  createAccBtn: {
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap:10
  },
  form:{
    flex:1,
  }
});

export default SignUp;
