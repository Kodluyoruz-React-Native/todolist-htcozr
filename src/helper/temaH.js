import { observable, action, decorate} from 'mobx';
import { Dimensions, Platform } from 'react-native';

class temaH{
    renkler = {
        r1: '#e89d43ff',
        r2: '#0d1030ff',
        r3: '#454a6dff'
    }
}

decorate(
    temaH,{
       renkler: observable,
    }
)

export default new temaH();