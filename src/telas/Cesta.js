import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo} >Detalhes da Cesta </Text>

        <View style= {estilos.cesta} > 
            <Text style={estilos.nome} >Cesta de Verduras</Text> 
            <View styles={estilos.fazenda} > 
            <Image source={logo} /> 
            <Text style={estilos.nomeFazenda} >Jenny Jack Farm</Text>
            </View>
            <Text style={estilos.descricao} >Uma cesta com produto selecionados 
                cuidadosamente da fazenda direto
                 para sua cozinha</Text>
            <Text style={estilos.preco} >R$40,00</Text>
        </View> 
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,

    },
    fazenda: {
    flexDirection: "row",
    paddingVertical: 12,

    },
    cesta: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16

    },
    nome: {
        color:"#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MontSerratBold"
    },
    nomeFazenda: {
        fontSize:16,
        lineHeight: 26,
        marginLeft:12,
        fontFamily: "MontSerratRegular"
    },
    descricao: {
        color: "#A3A3A3",
        fontSize:16,
        lineHeight:26,

    },
    preco: {
        color: "#2A9F85",
        fontWeight:"bold",
        fontSize: 26,
        lineHeight:42,
        marginTop:8
    }
});

