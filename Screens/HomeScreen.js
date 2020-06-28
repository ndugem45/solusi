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
    TextInput,
    StatusBar
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {NewsItem} from '../Components/NewsItem';
import { SliderBox } from "react-native-image-slider-box";
import { AnimatedCircularProgress } from 'react-native-circular-progress';



export function HomeScreen({ navigation }) {
    var url = 'http://newsapi.org/v2/top-headlines?' +
        'country=id&' +
        'apiKey=3bae720e656d422d91457850c84044f8';
    const [news, setNews] = useState([])
    const images = [
        require('../Assets/home_banner_slider.png'),
        require('../Assets/home_banner_slider.png'),
        require('../Assets/home_banner_slider.png'),
      ];
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            var result = Object.keys(json.articles).map(function (key) {
                return [Number(key), json.articles[key]];
            });
            setNews(result)
        })
        .catch((error) => {
            console.error(error)
        });
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor="white" barStyle='dark-content'/>
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
                        <Image source={require('../Assets/home_profile_icon.png')} style={{ width: wp('4.56'), height: wp('4.56') }} resizeMode='contain' />
                    </View>
                </View>

                {/* search bar */}
                <TextInput style={{ color: '#5a5a5a', height: wp('10.4'), marginVertical: wp('4.26'), backgroundColor: '#F4F4F4', borderColor: '#E3E3E3', borderWidth: 1, borderRadius: wp('10.4') / 2, paddingHorizontal: wp('5.33') }} placeholder="Cari Klinik / Rumah Sakit" placeholderTextColor='#b7b7b7' />
            </View>

            <ScrollView>
                <View style={{ paddingHorizontal: wp('4.53'), backgroundColor: 'white', marginBottom: wp('6.13') }}>
                    {/* info graph */}
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#0E8BD7', '#C81E84']} style={{ height: wp('38.13'), marginBottom: wp('6.13'),borderRadius:wp('2.4') }}>
                        <Text style={{color:'white',paddingHorizontal:wp('6.13'),fontSize:wp('3.2'),height:wp('8.53'),textAlignVertical:'center',borderBottomColor:'white',borderBottomWidth:1,fontWeight:'bold'}}>
                            INFO ANTRIAN
                        </Text>
                        <View style={{flex:1,flexDirection:'row'}}>
                            {/* progress */}
                            <View style={{flex:3,flexDirection:'row',alignItems:'center',paddingHorizontal:wp('5.6')}}>
                                <View style={{alignItems:'center',marginRight:wp('3.2')}}>
                                    <AnimatedCircularProgress
                                        size={wp('18.66')}
                                        width={wp('1')}
                                        fill={90}
                                        tintColor="#FFF9AA"
                                        rotation={350}
                                        backgroundColor="traspanrent">
                                            {() => (
                                                <Text style={{fontSize:wp('6.66'),color:'white'}}>
                                                    21
                                                </Text>
                                            )}
                                    </AnimatedCircularProgress>
                                    <Text style={{fontSize:wp('2.4'),color:'white'}}>
                                        Nomor antrian
                                    </Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                <AnimatedCircularProgress
                                        size={wp('18.66')}
                                        width={wp('1')}
                                        fill={90}
                                        rotation={160}
                                        tintColor="#FFF9AA"
                                        backgroundColor="traspanrent">
                                            {() => (
                                                <Text style={{fontSize:wp('6.66'),color:'white'}}>
                                                    5
                                                </Text>
                                            )}
                                    </AnimatedCircularProgress>
                                    <Text style={{fontSize:wp('2.4'),color:'white'}}>
                                        Sisa antrian
                                    </Text>
                                </View>
                            </View>
                            {/* label */}
                            <View style={{flex:2,justifyContent:'center'}}>
                                <Text style={{fontSize:wp('2.4'),marginBottom:wp('4'),color:'#FFF9AA'}}>
                                    Dokter anda
                                    {'\n'}
                                    <Text style={{color:'white'}}>
                                        dr. Rina Agustina
                                    </Text>
                                </Text>
                                <Text style={{fontSize:wp('2.4'),color:'#FFF9AA'}}>
                                    Klinik / RS anda
                                    {'\n'}
                                    <Text style={{color:'white'}}>
                                        RS. National Hospital
                                    </Text>
                                </Text>
                            </View>
                        </View>
                    </LinearGradient>

                    {/* menu */}
                    <View style={{ height: wp('46.66'), marginBottom: wp('6.93'),flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap' }}>
                        <View style={{alignItems:'center',width:'33%',height:'50%'}}>
                            <TouchableOpacity>
                                <Image source={require('../Assets/home_menu_1.png')} style={{width:wp('14.93'),height:wp('14.93'),marginBottom:wp('2')}} resizeMode='contain'/>
                            </TouchableOpacity>
                            <Text style={{fontSize:wp('2.6'),color:'#5a5a5a',fontWeight:'bold'}}>
                                KLINIK TERDEKAT
                            </Text>
                        </View>
                        <View style={{alignItems:'center',width:'33%',height:'50%'}}>
                            <TouchableOpacity>
                                <Image source={require('../Assets/home_menu_2.png')} style={{width:wp('14.93'),height:wp('14.93'),marginBottom:wp('2')}} resizeMode='contain'/>
                            </TouchableOpacity>
                            <Text style={{fontSize:wp('2.6'),color:'#5a5a5a',fontWeight:'bold'}}>
                                RIWAYAT
                            </Text>
                        </View>
                        <View style={{alignItems:'center',width:'33%',height:'50%'}}>
                            <TouchableOpacity>
                                <Image source={require('../Assets/home_menu_3.png')} style={{width:wp('14.93'),height:wp('14.93'),marginBottom:wp('2')}} resizeMode='contain'/>
                            </TouchableOpacity>
                            <Text style={{fontSize:wp('2.6'),color:'#5a5a5a',fontWeight:'bold'}}>
                                DATA SCAN
                            </Text>
                        </View>
                        <View style={{alignItems:'center',width:'33%',height:'50%'}}>
                            <TouchableOpacity>
                                <Image source={require('../Assets/home_menu_4.png')} style={{width:wp('14.93'),height:wp('14.93'),marginBottom:wp('2')}} resizeMode='contain'/>
                            </TouchableOpacity>
                            <Text style={{fontSize:wp('2.6'),color:'#5a5a5a',fontWeight:'bold'}}>
                                NOTIFIKASI
                            </Text>
                        </View>
                        <View style={{alignItems:'center',width:'33%',height:'50%'}}>
                            <TouchableOpacity>
                                <Image source={require('../Assets/home_menu_5.png')} style={{width:wp('14.93'),height:wp('14.93'),marginBottom:wp('2')}} resizeMode='contain'/>
                            </TouchableOpacity>
                            <Text style={{fontSize:wp('2.6'),color:'#5a5a5a',fontWeight:'bold'}}>
                                BERI NILAI
                            </Text>
                        </View>
                        <View style={{alignItems:'center',width:'33%',height:'50%'}}>
                            <TouchableOpacity>
                                <Image source={require('../Assets/home_menu_6.png')} style={{width:wp('14.93'),height:wp('14.93'),marginBottom:wp('2')}} resizeMode='contain'/>
                            </TouchableOpacity>
                            <Text style={{fontSize:wp('2.6'),color:'#5a5a5a',fontWeight:'bold'}}>
                                PENGATURAN
                            </Text>
                        </View>
                    </View>
                </View>

                {/* slider banner wrapper*/}
                <View style={{ height:wp('38.13'),backgroundColor: 'white', paddingVertical: wp('3.46'), paddingHorizontal: wp('4.53'), marginBottom: wp('6.13') }}>
                    <SliderBox 
                        images={images} 
                        sliderBoxHeight={wp('27.46')} 
                        dotColor="#0093DD"
                        inactiveDotColor="#D6D6D6"
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
                        parentWidth={wp('91.2')}
                        ImageComponentStyle={{borderRadius: wp('2.4'), width: '100%'}}
                        paginationBoxStyle={{
                            position: "absolute",
                            bottom: -wp('4.53'),
                            padding: 0,
                            alignItems: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                            paddingVertical: 0
                          }}/>
                </View>

                {news.map((s,i) => NewsItem(s[1],i,navigation))}

            </ScrollView>

        </SafeAreaView>
    );
}
