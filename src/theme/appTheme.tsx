import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  resultadoPequeno: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
    marginHorizontal: 20,
  },
  resultado: {
    color: 'white',
    fontSize: 80,
    fontWeight: '300',
    textAlign: 'right',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  botonTexto: {
    textAlign: 'center',
    fontSize: 37,
    color: 'white',
    fontWeight: '400',
  },
});
