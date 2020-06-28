import React, {
    useState,
    useEffect,
} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import moment from "moment";


export function NewsItem(s, i = false, navigation, isDetail = false) {
    return (
        <View key={i ? i : ''} style={[styles.item_wrapper]}>
            {/* image */}
            <Image source={{ uri: s.urlToImage }} style={[styles.item_image]} />
            {/* content wrapper */}
            <View style={[styles.content_wrapper]}>
                {/* title */}
                <Text style={[styles.item_title]}>
                    {s.title}
                </Text>
                {/* time label */}
                <Text style={[styles.item_source]}>
                    Sumber : {s.source.name}
                    {'\n'}
                    {moment(new Date(s.publishedAt)).format("dddd, DD MMMM YYYY hh.mm") + " WIB"}
                </Text>
                {/* desc content */}
                <Text style={[styles.item_desc]}>
                    {s.description}
                </Text>
                {/* more button */}
                {isDetail ?
                    <Text style={[styles.item_content]}>
                        {s.content}
                    </Text> :
                    <TouchableOpacity onPress={() => navigation.push('Detail', { detail: s })}>
                        <Text style={[styles.item_more]}>
                            Baca Selengkapnya...
                        </Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item_wrapper: {
        paddingVertical: wp('4.53'),
        paddingHorizontal: wp('4.53'),
        backgroundColor: 'white'
    },
    item_image: {
        backgroundColor: 'grey',
        height: wp('40.53'),
        marginBottom: wp('3.73'),
        borderRadius: wp('2.4')
    },
    content_wrapper: {
        paddingHorizontal: wp('4.26')
    },
    item_title: {
        fontSize: wp('4.8'),
        marginBottom: wp('2.93'),
        color: '#5a5a5a',
        fontWeight: 'bold'
    },
    item_source: {
        fontSize: wp('2.66'),
        color: '#aaaaaa',
        marginBottom: wp('2.93')
    },
    item_desc: {
        fontSize: wp('2.66'),
        color: '#5a5a5a',
        marginBottom: wp('2.4')
    },
    item_content: {
        fontSize: wp('2.66'),
        color: '#5a5a5a',
        marginBottom: wp('2.4')
    },
    item_more: {
        fontSize: wp('2.66'),
        color: '#5a5a5a',
        marginBottom: wp('2.4')
    }
})