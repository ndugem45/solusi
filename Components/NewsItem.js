import React, {
    useState,
    useEffect,
} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import moment from "moment";


export function NewsItem(s,i=false,navigation,isDetail=false){
    return(
        <View key={i ? i : ''} style={{ paddingVertical: wp('4.53'), paddingHorizontal: wp('4.53'), backgroundColor: 'white' }}>
            {/* image */}
            <Image source={{uri: s.urlToImage}} style={{ backgroundColor: 'grey', height: wp('40.53'), marginBottom: wp('3.73'),borderRadius: wp('2.4') }}/>
            {/* content wrapper */}
            <View style={{ paddingHorizontal: wp('4.26') }}>
                {/* title */}
                <Text style={{ fontSize: wp('4.8'), marginBottom: wp('2.93'), color: '#5a5a5a', fontWeight: 'bold' }}>
                    {s.title}
                </Text>
                {/* time label */}
                <Text style={{ fontSize: wp('2.66'), color: '#aaaaaa', marginBottom: wp('2.93') }}>
                    Sumber : {s.source.name}
                    {'\n'}
                    {moment(new Date(s.publishedAt)).format("dddd, DD MMMM YYYY hh.mm")+" WIB"}
                </Text>
                {/* desc content */}
                <Text style={{ fontSize: wp('2.66'), color: '#5a5a5a', marginBottom: wp('2.4') }}>
                    {s.description}
                </Text>
                {/* more button */}
                {isDetail ? 
                    <Text style={{ fontSize: wp('2.66'), color: '#5a5a5a', marginBottom: wp('2.4') }}>
                        {s.content}
                    </Text> : 
                    <TouchableOpacity onPress={()=> navigation.push('Detail',{detail:s})}>
                        <Text style={{ fontSize: wp('2.66'), color: '#0093dd' }}>
                            Baca Selengkapnya...
                        </Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}