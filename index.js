import { useState } from "react";
import { TouchableHighlight, StyleSheet, View } from "react-native";

export default function CircleCheckBox({size = 20, onChangeValue, activateColor = "red", color = "red"}) {

    const [activate, setActivate] = useState(false)

    let circleSize = (size * 50) / 100;


    const _click = () => {
        if(onChangeValue) {
            setActivate(i => !i)
            onChangeValue(activate)
        }
    }

    return (
        <TouchableHighlight onPress={() => _click() } style={{width: size, height: size, borderRadius: size, borderColor: activate ? activateColor : color, borderWidth:3, justifyContent:'center', alignItems:'center'}}>
            {
                activate ?
                    <View style={{width: circleSize, height: circleSize, borderRadius: circleSize, backgroundColor: activateColor}}></View>
                :
                    <></>
            }
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    container: {
        
    }
})