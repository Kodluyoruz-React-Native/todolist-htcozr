import { observable, action, decorate } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

class strgH { //ASYNC-STORAGE
	kaydetOturumBilgileri = async (kullaniciGiris, sifre, oturumDurumu) => {
		await this.kaydet('kullaniciGiris', kullaniciGiris);
		await this.kaydet('sifre', sifre);
		await this.kaydet('oturumDurumu', oturumDurumu);
	}

	getirOturumBilgileri = async () => ({
		kullaniciGiris: await this.getir('kullaniciGiris'),
		sifre: await this.getir('sifre'),
		oturumDurumu: await this.getir('oturumDurumu')
	});


	kaydet = (k, v) => new Promise(resolve => {
		AsyncStorage.setItem(k, JSON.stringify(v))
			.then(d => resolve(d))
			.catch(hata => resolve(hata));
	});


	getir = k => new Promise(resolve => {
		AsyncStorage.getItem(k)
			.then(d => resolve(JSON.parse(d)))
			.catch(hata => resolve(hata));
	});
}


decorate(
	strgH,
	{
		kaydetOturumBilgileri: action,
		getirOturumBilgileri: action,
		kaydet: action,
		getir: action,
	}
);


export default new strgH();