import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    ImageBackground
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images, gStyle, theme} from '../constants';
import Touch from '../constants/Touch';
const uri = 'https://d11jve6usk2wa9.cloudfront.net/platform/31054/assets/body-first.jpg'
const uri2 = 'https://d11jve6usk2wa9.cloudfront.net/platform/31054/assets/img-visual03.jpg'

export default function Home({ navigation }) {
  const UDSMCommunity = {
        id: 1,
        bookName: "UDSM Community",
        bookCover: uri,
        rating: 4.5,
        language: "Eng",
        pageNo: 341,
        author: "Jasmine Warga",
        genre: [
            "Romance", "Adventure", "Drama"
        ],
        readed: "12k",
        description: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    const UniversityExams = {
        id: 2,
        bookName: "University Exams",
        bookCover: uri2,
        rating: 3.5,
        language: "Eng",
        pageNo: 110,
        author: "Ana C Bouvier",
        genre: [
            "Drama", "Adventure", "Romance"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const Announcements = {
        id: 3,
        bookName: "Announcements",
        bookCover: uri,
        rating: 3.5,
        language: "Eng",
        pageNo: 110,
        author: "Ana C Bouvier",
        genre: [
            "Drama", "Adventure", "Romance"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }
 const myBooksData = [
        {
            ...UDSMCommunity,
           ArticleName: "Udsm Community"

        },
        {
            ...UniversityExams,
            ArticleName: "University Exams"

        },
        {
            ...Announcements,
            ArticleName: "Announcements"

        },
    ]
 const [myBooks, setMyBooks] = React.useState(myBooksData);
      function news() {
        return (
              <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
              <ImageBackground
                        style={{ width: "100%",marginTop: 0, height: 200 }}
                        source={{ uri }}
                        resizeMode="cover"
                      >
                              <View
                                style={{
                                  marginTop: 30,
                                  marginLeft: 20,
                                  marginBottomleft:10
                                }}
                              >
                  <Text style={{ color: "black", fontSize: 25 }}>UDSM COMMUNITY</Text>
                                <Text style={{ color: "white" }}>
                                Join the UDSM Community to gain professional leads and connections through University of Dar es Salaam's global online community
                                </Text>
                                <TouchableOpacity
                                  style={{
                                    marginTop: 10,
                                    width: 150,
                                    padding: 0,
                                    alignItems: 'center'
                                  }}
                                  onPress={() => navigation.navigate('Articles')}
                                >
                                  <View
                                    style={{
                                      flexDirection: "row"
                                    }}
                                  >
                                  
                                    <Touch
                                    onPress={() => navigation.navigate('Articles')}
                                    text="JOIN"
                                  />
 
                                  </View>
                                </TouchableOpacity>
                              </View>
                      </ImageBackground>

<View style={gStyle.spacer16} />

              <ImageBackground
                        style={{ width: "100%",marginTop: 0, height: 200 }}
                        source={{ uri }}
                        resizeMode="cover"
                      >
                              <View
                                style={{
                                  marginTop: 30,
                                  marginLeft: 20,
                                  marginBottomleft:10
                                }}
                              >
                <Text style={{ color: "black", fontSize: 25 }}>Announcements</Text>
                                <Text style={{ color: "white" }}>
                                Invitation to apply for admission into the Certificate and diploma programmes for march, 2022/2023 intake
                                </Text>
                                <TouchableOpacity
                                  style={{
                                    marginTop: 10,
                                    width: 150,
                                    padding: 0,
                                    alignItems: 'center'
                                  }}
                                  onPress={() => navigation.navigate("Articles")}
                                >
                                  <View
                                    style={{
                                      flexDirection: "row"
                                    }}
                                  >
                                    <Touch
                                    onPress={() => navigation.navigate('Articles')}
                                    text="READ"
                                  />
 
                                  </View>
                                </TouchableOpacity>
                              </View>
                      </ImageBackground>

<View style={gStyle.spacer64} />
    </ScrollView>
        )
    }

      function renderButtonSection() {
        return (
            
              <View style={{ flex: 1, justifyContent: 'center', padding: SIZES.padding }}>                             
              <Image source={require("../assets/images/dummy_profile/aris3.png")}/>
                  <View style={{ flexDirection: 'row', height: 70, backgroundColor:"#00ABEE", borderRadius: SIZES.radius }}>
                    {/* Claim */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("Claim")}
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>  
                        
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>UDSM ARIS 3</Text>
                        </View>
                    </TouchableOpacity>
                </View>               
                </View>
      
        )
    }

        function renderMyBookSection(myBooks) {

        const renderItem = ({ item, index }) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        marginLeft: index == 0 ? SIZES.padding : 0,
                        marginRight: SIZES.radius
                    }}
                    onPress={() => navigation.navigate("Articles", {
                        book: item
                    })}
                >
                    {/* Book Cover */}
                    <Image
                        source={item.bookCover}
                        resizeMode="cover"
                        style={{
                            width: 180,
                            height: 250,
                            borderRadius: 20
                        }}
                    />

                    {/* Book Info */}
                    <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>


                        <Image
                            source={icons.page_icon}
                            style={{
                                marginLeft: SIZES.radius,
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.ArticleName}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {/* Header */}
                <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>News and Events</Text>

                    <TouchableOpacity
                        onPress={() => console.log("See More")}
                    >
                        <Text style={{ ...FONTS.body3, color: COLORS.lightGray, alignSelf: 'flex-start', textDecorationLine: 'underline' }}></Text>
                    </TouchableOpacity>
                </View>

                {/* Books */}
                <View style={{ flex: 1, marginTop: SIZES.padding }}>
                    <FlatList
                        data={myBooks}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:"#25282F" }}>
            <View style={{ height: 200 }}>
                {renderButtonSection()}
            </View>

                        {/* Body Section */}
            <ScrollView style={{ marginTop: SIZES.radius }}>
                {/* Books Section */}
                <View>
                    {renderMyBookSection(myBooks)}
                </View>
            </ScrollView>
        <View style={{alignItems: 'center', justifyContent: 'center' }}>
        </View>
      </SafeAreaView>  
    );


}