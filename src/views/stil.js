import { StyleSheet } from 'react-native';
import tlfnH from '../helper/tlfnH';
import temaH from '../helper/temaH';

//K  : container
//AK : subContainer
//B  : button
//BY : buttonText

const W = tlfnH.W;
const H = tlfnH.H;
const R = temaH.renkler;


export const anasayfaS = StyleSheet.create({
    K: {
        flex: 1,
        backgroundColor: 'white'
    },
    K2: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoK: {
        position: 'absolute',
        left: W(2),
        top: H(2)
    },

    ustAlanY: {
        fontWeight: 'bold',
        fontSize: 15,
        color: R.r2,
        textAlign: 'right'
    },

    ustAlanK: {
        minHeight: W(20) + H(4),
        backgroundColor: R.r1,
        paddingLeft: W(25),
        paddingRight: 15,
        justifyContent: 'center',

    },
    notlarK: {
		marginTop: H(3),
		flex: 1
	},
	notK: {
		backgroundColor: R.r1,
		marginTop: H(1.2),
		marginBottom: H(1.2),
		padding: W(2),
		paddingBottom: W(7),
	},
	notButonlarK: {
		flexDirection: 'row',
		position: 'absolute',
		bottom: -10,
		right: 10,
		backgroundColor: R.r1,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		paddingRight: 5,
		backgroundColor: R.r1,
		borderWidth: 1,
		borderColor: 'white'
	},
	butonlarAcKapaButon: {
		alignSelf: 'center',
		marginRight: 5
	},
	notButonK: {
		marginBottom: 5,
		marginRight: 3,
		marginLeft: 3
	}
});