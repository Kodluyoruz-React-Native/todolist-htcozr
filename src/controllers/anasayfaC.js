import { observable, action, decorate} from 'mobx';
import { Dimensions, LayoutAnimation } from 'react-native';

class anasayfaC{

    cDMount = () => { //AÇILIŞTAN HEMEN SONRA
        setTimeout(() => this.splashAktif=false, 2000);
    }
    cDUpdate = () => { //UPDATE'DEN HEMEN SONRA
        LayoutAnimation.spring();
    }
    cWUnmount = () => { //KAPANIŞTAN HEMEN ÖNCE

    }

    splashAktif = true; //true: splash Göster dalse: Anasayfa Göster
}

decorate(
    anasayfaC,
    {
        splashAktif: observable,

        cDMount: action,
        cDUpdate: action,
        cWUnmount: action
    }
)

export default new anasayfaC();