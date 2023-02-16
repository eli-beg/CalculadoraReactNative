import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {BotonCalculadora} from '../components/BotonCalculadora';
import {useCalculadora} from '../hooks/useCalculadora';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const {
    limpiar,
    armarNumero,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnSumar,
    btnRestar,
    calcular,
    numero,
    numeroAnterior,
    displayNumero,
  } = useCalculadora();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {displayNumero ? displayNumero : numero}
        {/* {numero} || {displayNumero} */}
      </Text>
      <View style={styles.fila}>
        <BotonCalculadora texto="C" color="#9B9B9B" accion={limpiar} />
        <BotonCalculadora
          texto="+/-"
          color="#9B9B9B"
          accion={positivoNegativo}
        />
        <BotonCalculadora texto="del" color="#9B9B9B" accion={btnDelete} />
        <BotonCalculadora texto="/" color="#673AB7" accion={btnDividir} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto="7" accion={armarNumero} />
        <BotonCalculadora texto="8" accion={armarNumero} />
        <BotonCalculadora texto="9" accion={armarNumero} />
        <BotonCalculadora texto="x" color="#673AB7" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalculadora texto="4" accion={armarNumero} />
        <BotonCalculadora texto="5" accion={armarNumero} />
        <BotonCalculadora texto="6" accion={armarNumero} />
        <BotonCalculadora texto="-" color="#673AB7" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalculadora texto="1" accion={armarNumero} />
        <BotonCalculadora texto="2" accion={armarNumero} />
        <BotonCalculadora texto="3" accion={armarNumero} />
        <BotonCalculadora texto="+" color="#673AB7" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalculadora texto="0" accion={armarNumero} ancho />
        <BotonCalculadora texto="." accion={armarNumero} />
        <BotonCalculadora texto="=" color="#673AB7" accion={calcular} />
      </View>
    </View>
  );
};
