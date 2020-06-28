import React, {
    useState,
    useEffect,
    useMemo
} from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar
} from 'react-native';
import {NewsItem} from '../Components/NewsItem';


export function DetailScreen({ route, navigation }) {
    let detail = route.params.detail
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor="#007AB7" barStyle='light-content'/>
            <ScrollView>
                {NewsItem(detail,false,false,true)}
            </ScrollView>
        </SafeAreaView>
    )
}