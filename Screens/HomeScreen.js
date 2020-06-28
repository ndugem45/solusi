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
    StatusBar,
    StyleSheet,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { NewsItem } from '../Components/NewsItem';
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
            <StatusBar backgroundColor="white" barStyle='dark-content' />

            <View style={[styles.top_container]}>
                {/* top wrapper */}
                <View style={[styles.top_wrapper]}>
                    {/* logo */}
                    <Image source={require('../Assets/home_logo.png')} style={[styles.logo]} />
                    {/* profile */}
                    <View style={[styles.profile_wrapper]}>
                        <Text style={[styles.profile_name]}>
                            Hi, Bagus
                        </Text>
                        <Image source={require('../Assets/home_profile_icon.png')} style={[styles.profile_icon]} resizeMode='contain' />
                    </View>
                </View>

                {/* search bar */}
                <TextInput style={[styles.search_box]} placeholder="Cari Klinik / Rumah Sakit" placeholderTextColor='#b7b7b7' />
            </View>

            <ScrollView>
                <View style={[styles.top_menu_container]}>
                    {/* info graph */}
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0E8BD7', '#C81E84']} style={[styles.info_wrapper]}>
                        <Text style={[styles.info_title]}>
                            INFO ANTRIAN
                        </Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            {/* progress */}
                            <View style={[styles.info_progress_wrapper]}>
                                <View style={[styles.info_circular_wrapper, { marginRight: wp('3.2') }]}>
                                    <AnimatedCircularProgress
                                        size={wp('18.66')}
                                        width={wp('1')}
                                        fill={90}
                                        tintColor="#FFF9AA"
                                        rotation={350}
                                        backgroundColor="traspanrent">
                                        {() => (
                                            <Text style={[styles.circular_value]}>
                                                21
                                            </Text>
                                        )}
                                    </AnimatedCircularProgress>
                                    <Text style={[styles.circular_label]}>
                                        Nomor antrian
                                    </Text>
                                </View>
                                <View style={[styles.info_circular_wrapper]}>
                                    <AnimatedCircularProgress
                                        size={wp('18.66')}
                                        width={wp('1')}
                                        fill={90}
                                        rotation={160}
                                        tintColor="#FFF9AA"
                                        backgroundColor="traspanrent">
                                        {() => (
                                            <Text style={[styles.circular_value]}>
                                                5
                                            </Text>
                                        )}
                                    </AnimatedCircularProgress>
                                    <Text style={[styles.circular_label]}>
                                        Sisa antrian
                                    </Text>
                                </View>
                            </View>
                            {/* label */}
                            <View style={[styles.info_label_wrapper]}>
                                <Text style={[styles.info_label_title, { marginBottom: wp('4') }]}>
                                    Dokter anda
                                    {'\n'}
                                    <Text style={{ color: 'white' }}>
                                        dr. Rina Agustina
                                    </Text>
                                </Text>
                                <Text style={[styles.info_label_title]}>
                                    Klinik / RS anda
                                    {'\n'}
                                    <Text style={{ color: 'white' }}>
                                        RS. National Hospital
                                    </Text>
                                </Text>
                            </View>
                        </View>
                    </LinearGradient>

                    {/* menu */}
                    <View style={[styles.menu_wrapper]}>
                        <View style={[styles.menu_item_wrapper]}>
                            <TouchableOpacity>
                                <Image source={require('../Assets/home_menu_1.png')} style={[styles.menu_icon]} resizeMode='contain' />
                            </TouchableOpacity>
                            <Text style={[styles.menu_label]}>
                                KLINIK TERDEKAT
                            </Text>
                        </View>
                        <View style={[styles.menu_item_wrapper]}>
                            <TouchableOpacity>
                                <Image source={require('../Assets/home_menu_2.png')} style={[styles.menu_icon]} resizeMode='contain' />
                            </TouchableOpacity>
                            <Text style={[styles.menu_label]}>
                                RIWAYAT
                            </Text>
                        </View>
                        <View style={[styles.menu_item_wrapper]}>
                            <TouchableOpacity>
                                <Image source={require('../Assets/home_menu_3.png')} style={[styles.menu_icon]} resizeMode='contain' />
                            </TouchableOpacity>
                            <Text style={[styles.menu_label]}>
                                DATA SCAN
                            </Text>
                        </View>
                        <View style={[styles.menu_item_wrapper]}>
                            <TouchableOpacity>
                                <Image source={require('../Assets/home_menu_4.png')} style={[styles.menu_icon]} resizeMode='contain' />
                            </TouchableOpacity>
                            <Text style={[styles.menu_label]}>
                                NOTIFIKASI
                            </Text>
                        </View>
                        <View style={[styles.menu_item_wrapper]}>
                            <TouchableOpacity>
                                <Image source={require('../Assets/home_menu_5.png')} style={[styles.menu_icon]} resizeMode='contain' />
                            </TouchableOpacity>
                            <Text style={[styles.menu_label]}>
                                BERI NILAI
                            </Text>
                        </View>
                        <View style={[styles.menu_item_wrapper]}>
                            <TouchableOpacity>
                                <Image source={require('../Assets/home_menu_6.png')} style={[styles.menu_icon]} resizeMode='contain' />
                            </TouchableOpacity>
                            <Text style={[styles.menu_label]}>
                                PENGATURAN
                            </Text>
                        </View>
                    </View>
                </View>

                {/* slider banner wrapper*/}
                <View style={[styles.slider_wrapper]}>
                    <SliderBox
                        images={images}
                        sliderBoxHeight={wp('27.46')}
                        dotColor="#0093DD"
                        inactiveDotColor="#D6D6D6"
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
                        parentWidth={wp('91.2')}
                        ImageComponentStyle={{ borderRadius: wp('2.4'), width: '100%' }}
                        paginationBoxStyle={{
                            position: "absolute",
                            bottom: -wp('4.53'),
                            padding: 0,
                            alignItems: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                            paddingVertical: 0
                        }} />
                </View>

                {news.map((s, i) => NewsItem(s[1], i, navigation))}

            </ScrollView>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    top_container: {
        paddingTop: wp('5.33'),
        paddingHorizontal: wp('4.53'),
        backgroundColor: 'white'
    },
    top_wrapper: {
        height: wp('6.13'),
        flexDirection: 'row'
    },
    logo: {
        width: wp('36.26'),
        height: wp('6.4')
    },
    profile_wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    profile_name: {
        marginRight: wp('3.46'),
        fontSize: wp('3.2'),
        fontWeight: 'bold',
        color: '#5a5a5a'
    },
    profile_icon: {
        width: wp('4.56'),
        height: wp('4.56')
    },
    search_box: {
        color: '#5a5a5a',
        height: wp('10.4'),
        marginVertical: wp('4.26'),
        backgroundColor: '#F4F4F4',
        borderColor: '#E3E3E3',
        borderWidth: 1,
        borderRadius: wp('10.4') / 2,
        paddingHorizontal: wp('5.33')
    },
    top_menu_container: {
        paddingHorizontal: wp('4.53'),
        backgroundColor: 'white',
        marginBottom: wp('6.13')
    },
    info_wrapper: {
        height: wp('38.13'),
        marginBottom: wp('6.13'),
        borderRadius: wp('2.4')
    },
    info_title: {
        color: 'white',
        paddingHorizontal: wp('6.13'),
        fontSize: wp('3.2'),
        height: wp('8.53'),
        textAlignVertical: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        fontWeight: 'bold'
    },
    info_progress_wrapper: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp('5.6')
    },
    info_circular_wrapper: {
        alignItems: 'center'
    },
    circular_value: {
        fontSize: wp('6.66'),
        color: 'white'
    },
    circular_label: {
        fontSize: wp('2.4'),
        color: 'white',
        marginTop: wp('1')
    },
    info_label_wrapper: {
        flex: 2,
        justifyContent: 'center'
    },
    info_label_title: {
        fontSize: wp('2.4'),
        color: '#FFF9AA'
    },
    menu_wrapper: {
        height: wp('46.66'),
        marginBottom: wp('6.93'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    menu_item_wrapper: {
        alignItems: 'center',
        width: '33%',
        height: '50%'
    },
    menu_icon: {
        width: wp('14.93'),
        height: wp('14.93'),
        marginBottom: wp('2')
    },
    menu_label: {
        fontSize: wp('2.6'),
        color: '#5a5a5a',
        fontWeight: 'bold'
    },
    slider_wrapper: {
        height: wp('38.13'),
        backgroundColor: 'white',
        paddingVertical: wp('3.46'),
        paddingHorizontal: wp('4.53'),
        marginBottom: wp('6.13')
    },

});
