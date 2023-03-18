import React from "react";
import { TextInput, View, Alert } from "react-native";
import searchBarStyle from "./SearchBar.Style";

const SearchBar = (props:any) => {

  return (

    <View style={searchBarStyle.container}>

      <TextInput placeholder="Ara ki bulasın..." maxLength={35} onChangeText={props.onSearch} />

    </View>


  );


};

export default SearchBar;
