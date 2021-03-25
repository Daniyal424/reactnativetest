/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
 } from 'react-native';
 
 import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugInstructions,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import{
   WebView
 } from 'react-native-webview';
 
 import MapboxGL from "@react-native-mapbox-gl/maps";
 
 //import html_script from 'html_script'

 //import html_script from './html_script.html'

 class  App extends React.Component {
   render(){
     return (
       <>
        
         <StatusBar barStyle="dark-content" />
         <SafeAreaView style = {styles.Container}>
           <WebView source={{uri:'file:///android_asset/html_script.html'}} />
           <View style = {styles.ButtonArea}></View>
          
         </SafeAreaView>
       </>
     );
   }
   
   
 };
 
 const styles = StyleSheet.create({
   scrollView: {
     backgroundColor: Colors.lighter,
   },
   engine: {
     position: 'absolute',
     right: 0,
   },
   body: {
     backgroundColor: Colors.white,
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
     color: Colors.black,
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     color: Colors.dark,
   },
   highlight: {
     fontWeight: '700',
   },
   footer: {
     color: Colors.dark,
     fontSize: 12,
     fontWeight: '600',
     padding: 4,
     paddingRight: 12,
     textAlign: 'right',
   },
   Container:{
     flex:1,
     padding:10,
      backgroundColor: 'black',
   },
   WebView:{
     flex:2,
   },
   ButtonArea:{
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center',
 
 
   },
 });
 
 export default App;
 