import React from "react";
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Stylee from "../FaceItem/styles";
import { useState } from "react";
import Sound from "react-native-sound";
export const FaceItem = () => {
  const [play, stop] = useState(true);
  const Clickclock = () => {
    if (play) {
      stop(false);
    } else {
      stop(true);
    }
  };
  const [music, SetMuisc] = useState(true);
  const playy = () => {
    let misic = new Sound("misic.mp3", Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log("hata", err);
        return;
      }
      misic.playy((success) => {
        console.log("end", success);
      });
    });
    console.log("misic", misic);
    SetMuisc(misic);
  };
  const [white, gren] = useState(true);
  const Clickone = () => {
    if (white) {
      gren(false);
    } else {
      gren(true);
    }
  };
  const [repeat, norepeat] = useState(true);
  const Clickoff = () => {
    if (repeat) {
      norepeat(false);
    } else {
      norepeat(true);
    }
  };
  return (
    <View style={Stylee.One}>
      <ImageBackground
        source={require("../../imagee/image.png")}
        style={Stylee.imagee}
      />
      <View style={Stylee.kalbim}>
        <Image
          source={require("../../imagee/image2.jpg")}
          style={Stylee.dert}
        />
      </View>
      <View>
        <Text style={Stylee.Play}>PLAYING FROM SEARCHE</Text>
      </View>
      <Text style={Stylee.mip}>"search"in Songs</Text>
      <View style={Stylee.icon}>
        <TouchableOpacity>
          <Icon name="angle-down" size={40} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={Stylee.shape}>
        <TouchableOpacity>
          <Icon name="ellipsis-v" size={30} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={Stylee.span}></View>
      <View style={Stylee.fi}>
        <Text style={Stylee.fa}>Kalbim</Text>
      </View>
      <View style={Stylee.sero}>
        <Text style={Stylee.bet}>Sero Production Beats</Text>
      </View>
      <View style={Stylee.heart}>
        <TouchableOpacity onPress={playy}>
          <Icon
            name={white ? "heart-o" : "heart"}
            size={25}
            color={white ? "white" : "#4BF02B"}
          />
        </TouchableOpacity>
      </View>
      <View style={Stylee.font}>
        <TouchableOpacity>
          <Icon name="step-backward" size={30} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={Stylee.back}>
        <TouchableOpacity>
          <Icon name="step-forward" size={30} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={Stylee.play}>
        <TouchableOpacity onPress={Clickclock}>
          <Feather
            name={play ? "play-circle" : "pause-circle"}
            size={70}
            color={"white"}
          />
        </TouchableOpacity>
      </View>
      <View style={Stylee.repeat}>
        <TouchableOpacity onPress={Clickoff}>
          <MaterialIcons
            name={repeat ? "repeat" : "repeat-one"}
            size={35}
            color={repeat ? "white" : "#4BF02B"}
          />
        </TouchableOpacity>
      </View>
      <View style={Stylee.arrow}>
        <TouchableOpacity>
          <MaterialIcons name="compare-arrows" size={35} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default FaceItem;
