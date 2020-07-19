import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import Resim from '../components/Resim';
import tlfnH from '../helper/tlfnH';
import C from '../controllers/anasayfaC';
import{anasayfaS as S } from './stil';
import {View as ViewA} from 'react-native-animatable';
class Anasayfa extends React.Component {
   
    componentDidMount = C.cDMount;
    componentDidUpdate= C.cDUpdate;
    componentWillUnmount= C.cWUnmount;

    ustAlan(){
        const sa = C.splashAktif;
        return (
            <View style={[S.ustAlanK /*, { display: sa ? 'none' : 'flex' }*/]}>
                <Text style={S.ustAlanY}>lorem ipsum dolar sit amet</Text>
                <Text style={S.ustAlanY}>lorem ipsum dolar</Text>
                <Text style={S.ustAlanY}>lorem ipsum dolar sit</Text>
            </View>
        );
    }

    notlar(){
        return(
            <View style={S.notlarK}>
                {this.not()}
                {this.not()}
                {this.not()}
            </View>
        )
    }

    not(){
        return(
            <ViewA animation={'bounceIn'} delay={350} style={S.notK}>
                <Text>Do Lorem nostrud anim ipsum duis laborum nulla labore magna nostrud in est dolor. Proident fugiat exercitation ut reprehenderit. Est nulla mollit duis est sit. Anim amet irure non ad excepteur aliqua duis.</Text>
            </ViewA>
        )
    }

    render() {
        const sa = C.splashAktif;

        return (
            <View style={[S.K, sa && S.K2]}>
                {!sa && this.ustAlan()}


                {!sa && this.notlar()}


                <View style={!sa && S.logoK}>
                    <Resim 
                    source= {require('../../assets/logo.png')}
                    height={tlfnH.W(sa ? 60 : 20)}
                    />
                </View>
               
            </View>
        );
    }
}

export default observer(Anasayfa);