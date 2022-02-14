import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainCont: {
    // paddingTop: 20,
    backgroundColor: 'transparent',
    height: '100%',
    justifyContent: 'space-between',
    flex: 1,
  },
  authCont: {
    backgroundColor: '#324755',
  },
  authMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  txtOne: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '900',
    textTransform: 'capitalize',
    textAlign: 'left',
  },
  banner: {
    // height: '50%',
    width: '100%',
    justifyContent: 'center',
    flex: 1,
  },
  sectionOne: {
    backgroundColor: '#324755',
    height: '40%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallTxt: {
    fontSize: 20,
  },
  hr: {
    height: 1,
    width: 50,
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 5,
  },
  btnCont: {
    height: '10%',
    backgroundColor: '#D97D54',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnTxt: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    textTransform: 'uppercase',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    justifySelf: 'flex-end',
    marginLeft: 'auto',
    backgroundColor: '#C4714B',
    height: '100%',
  },
  btnTxtOne: {
    flex: 1,
    fontSize: 20,
  },
  tabBtn: {
    padding: 10,
    borderBottomWidth: 3,
  },
  tabBtnTxt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
  },
  authBtn: {
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '70%',
    marginBottom: 10,
  },
  authBtnTxt: {
    color: '#000',
    fontSize: 15,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  authBtnTwo: {
    backgroundColor: '#324755',
    borderWidth: 1,
    borderColor: '#fff',
  },
  authBtnTxtTwo: {
    color: '#fff',
  },
});
