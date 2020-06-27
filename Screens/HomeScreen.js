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
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';





export function HomeScreen({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingTop: wp('5.33'), paddingHorizontal: wp('4.53'), backgroundColor: 'white' }}>
                {/* top wrapper */}
                <View style={{ height: wp('6.13'), flexDirection: 'row' }}>
                    {/* logo */}
                    <Image source={require('../Assets/home_logo.png')} style={{ width: wp('36.26'), height: wp('6.4') }} />
                    {/* profile */}
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ marginRight: wp('3.46'), fontSize: wp('3.2'), fontWeight: 'bold', color: '#5a5a5a' }}>
                            Hi, Bagus
                        </Text>
                        <Image source={require('../Assets/home_profile_icon.png')} style={{width:wp('4.56'),height:wp('4.56')}} resizeMode='contain' />
                    </View>
                </View>

                {/* search bar */}
                <TextInput style={{ color: '#5a5a5a', height: wp('10.4'), marginVertical: wp('4.26'), backgroundColor: '#F4F4F4', borderColor: '#E3E3E3', borderWidth: 1, borderRadius: wp('10.4') / 2, paddingHorizontal: wp('5.33') }} placeholder="Cari Klinik / Rumah Sakit" placeholderTextColor='#b7b7b7' />
            </View>

            <ScrollView>
                <View style={{ paddingHorizontal: wp('4.53'), backgroundColor: 'white', marginBottom: wp('6.13') }}>
                    {/* info graph */}
                    <View style={{ backgroundColor: 'blue', height: wp('38.13'), marginBottom: wp('6.13'),borderRadius:wp('2.4') }}></View>
                    {/* menu */}
                    <View style={{ backgroundColor: 'red', height: wp('46.66'), marginBottom: wp('6.93') }}></View>
                </View>

                {/* slider banner wrapper*/}
                <View style={{ backgroundColor: 'white', paddingVertical: wp('3.46'), paddingHorizontal: wp('4.53'), marginBottom: wp('6.13') }}>
                    {/* <View style={{backgroundColor:'green',height:wp('27.46'),marginBottom:wp('2.66')}}></View> */}
                    <Image source={require('../Assets/home_banner_slider.png')} style={{ height: wp('27.46'), width: '100%', marginBottom: wp('2.66'),borderRadius:wp('2.4')}} resizeMode='cover' />

                    <View style={{ backgroundColor: 'blue', height: wp('1.86') }}></View>
                </View>


                {/* item news wrapper*/}
                <View style={{ paddingVertical: wp('4.53'), paddingHorizontal: wp('4.53'), backgroundColor: 'white' }}>

                    {/* image */}
                    <View style={{ backgroundColor: 'yellow', height: wp('40.53'), marginBottom: wp('3.73') }}></View>
                    {/* content wrapper */}
                    <View style={{ paddingHorizontal: wp('4.26') }}>
                        {/* title */}
                        <Text style={{ fontSize: wp('4.8'), marginBottom: wp('2.93'), color: '#5a5a5a', fontWeight: 'bold' }}>
                            6 Waktu yang Tepat untuk Minum Air Putih Agar Tetap Bugar
                        </Text>
                        {/* time label */}
                        <Text style={{ fontSize: wp('2.66'), color: '#aaaaaa', marginBottom: wp('2.93') }}>
                            Sumber : detikHealth
                            {'\n'}
                            Rabu, 07 Agu 2019 09:20 WIB
                        </Text>
                        {/* desc content */}
                        <Text style={{ fontSize: wp('2.66'), color: '#5a5a5a', marginBottom: wp('2.4') }}>
                            Jakarta - Air putih sangat bermanfaat untuk menjaga sistem yang ada di dalam tubuh. Seperti yang kita ketahui, 60 persen tubuh berisi cairan yang menjadikan tubuh harus selalu terhidrasi.
                        </Text>
                        {/* more button */}
                        <TouchableOpacity>
                            <Text style={{ fontSize: wp('2.66'), color: '#0093dd' }}>
                                Baca Selengkapnya...
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* item news wrapper*/}
                <View style={{ paddingVertical: wp('4.53'), paddingHorizontal: wp('4.53'), backgroundColor: 'white' }}>

                    {/* image */}
                    <View style={{ backgroundColor: 'yellow', height: wp('40.53'), marginBottom: wp('3.73') }}></View>
                    {/* content wrapper */}
                    <View style={{ paddingHorizontal: wp('4.26') }}>
                        {/* title */}
                        <Text style={{ fontSize: wp('4.8'), marginBottom: wp('2.93'), color: '#5a5a5a', fontWeight: 'bold' }}>
                            6 Waktu yang Tepat untuk Minum Air Putih Agar Tetap Bugar
                        </Text>
                        {/* time label */}
                        <Text style={{ fontSize: wp('2.66'), color: '#aaaaaa', marginBottom: wp('2.93') }}>
                            Sumber : detikHealth
                            {'\n'}
                            Rabu, 07 Agu 2019 09:20 WIB
                        </Text>
                        {/* desc content */}
                        <Text style={{ fontSize: wp('2.66'), color: '#5a5a5a', marginBottom: wp('2.4') }}>
                            Jakarta - Air putih sangat bermanfaat untuk menjaga sistem yang ada di dalam tubuh. Seperti yang kita ketahui, 60 persen tubuh berisi cairan yang menjadikan tubuh harus selalu terhidrasi.
                        </Text>
                        {/* more button */}
                        <TouchableOpacity>
                            <Text style={{ fontSize: wp('2.66'), color: '#0093dd' }}>
                                Baca Selengkapnya...
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}
