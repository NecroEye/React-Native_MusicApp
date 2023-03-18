import React, {useState} from "react";
import { StyleSheet, SafeAreaView, View, FlatList, Text } from "react-native";
import musicData from "./music-data.json";
import SongCard from "./Components/SongCard/SongCard";
import SearchBar from "./Components/SearchBar";


const App = () => {

  const [list, setList] = useState(musicData);

  const renderSong = (data: any) => <SongCard song={data.item} />;
  const handleSearch = (text:any) => {
    const filteredList =  musicData.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return  currentTitle.indexOf(searchedText) > -1;


    });

    setList(filteredList);
  };


  return (

    <SafeAreaView style={style.outer_container}>
      <View>
         <SearchBar onSearch={handleSearch} />
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong} />

      </View>
    </SafeAreaView>


  );


};

const style = StyleSheet.create({

  outer_container: { flex: 1, backgroundColor: "gainsboro" }

});

export default App;
