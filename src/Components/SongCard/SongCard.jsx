import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import songCardStyle from "./songCard.Style";


const SongCard = ({song}) => {

  return (

    <View style={songCardStyle.container}>




      <View style={songCardStyle.inner_container}>

        <View>
          <Image style={songCardStyle.image} source={{ uri: song.imageUrl }} />
          <Text style={songCardStyle.artistFont}>{song.artist}</Text>
        </View>

        <View style={songCardStyle.info_container}>
          <Text style={songCardStyle.titleText}>{song.title}</Text>
          <Text style={songCardStyle.year}>{song.year}</Text>


          {song.isSoldOut && (<View style={songCardStyle.soldOut_container}>
            <Text style={songCardStyle.soldOut_title} >Tükendi</Text>
          </View>)}
        </View>


      </View>
    </View>

  );


};

export default SongCard;
