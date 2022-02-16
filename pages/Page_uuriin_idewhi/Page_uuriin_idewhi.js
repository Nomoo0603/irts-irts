import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_Rectangle_link} from './assets/imageLinks.js'
import {image_Rectangle_4_link} from './assets/imageLinks.js'
import {image_Rectangle_6_link} from './assets/imageLinks.js'
import {image_Rectangle_8_link} from './assets/imageLinks.js'
import {image_Rectangle_10_link} from './assets/imageLinks.js'
import {image_Rectangle_12_link} from './assets/imageLinks.js'
const Page_uuriin_idewhi  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_Group_23 = () => {
					navigation.navigate("Page_angiin_medeelel")
					navigation.navigate("Page_angiin_medeelel")
	}
	const onClick_Group_23_Copy_2 = () => {
					navigation.navigate("Page_angiin_medeelel")
	}
	const onClick_Group_23_Copy_4 = () => {
					navigation.navigate("Page_angiin_medeelel")
	}
	const onClick_Group_23_Copy = () => {
					navigation.navigate("Page_angiin_medeelel")
	}
	const onClick_Rectangle_Copy_6_5 = () => {
					navigation.navigate("Page_angiin_medeelel")
	}
	const onClick_Group_23_Copy_5 = () => {
					navigation.navigate("Page_angiin_medeelel")
	}
	const onClick_Group_6 = () => {
					navigation.navigate("Page_contact_details")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page9]}    >
			<View style = {noneModeStyles._folder}    >
				<Text style = {noneModeStyles._Folder}   >
					ИДЭВХИ
				</Text>
				<View style = {noneModeStyles.__}    >
				</View>
			</View>
			<View style = {noneModeStyles._data}    >
				<View style = {noneModeStyles._Group_23}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Group_23();}} onStartShouldSetResponderCapture = {() => true}>
					<View style = {noneModeStyles._Rectangle_Copy_6}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container}    >
						<View style = {noneModeStyles._Rectangle}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_link}}/>
						</View>
					</View>
					<Text style = {noneModeStyles._Grocery_Mobile_App}   >
						МОНГОЛ ХЭЛ
					</Text>
					<Text style = {noneModeStyles._more_vert___material_copy_2}   >
						
					</Text>
					<View style = {noneModeStyles._Group_22}    >
						<View style = {noneModeStyles._Rectangle_2}    >
						</View>
						<View style = {noneModeStyles._Rectangle_Copy_10}    >
						</View>
					</View>
					<Text style = {noneModeStyles._20_35}   >
						20/35
					</Text>
					<View style = {noneModeStyles._Group_20}    >
						<View style = {noneModeStyles._Rectangle_3}    >
						</View>
					</View>
					<Text style = {noneModeStyles._10_00}   >
						Тэмдэглэлүүд
					</Text>
				</View>
				<View style = {noneModeStyles._Group_23_Copy_2}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Group_23_Copy_2();}} onStartShouldSetResponderCapture = {() => true}>
					<View style = {noneModeStyles._Rectangle_Copy_6_2}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_2}    >
						<View style = {noneModeStyles._Rectangle_4}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_4_link}}/>
						</View>
					</View>
					<Text style = {noneModeStyles._Responden_data}   >
						ҮНДЭСНИЙ{'\n'}БИЧИГ
					</Text>
					<View style = {noneModeStyles.___2}    >
					</View>
					<View style = {noneModeStyles._Group_22_2}    >
						<View style = {noneModeStyles._Rectangle_5}    >
						</View>
						<View style = {noneModeStyles._Rectangle_Copy_10_2}    >
						</View>
					</View>
					<Text style = {noneModeStyles._20_35_2}   >
						20/35
					</Text>
				</View>
				<View style = {noneModeStyles._Group_23_Copy_4}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Group_23_Copy_4();}} onStartShouldSetResponderCapture = {() => true}>
					<View style = {noneModeStyles._Rectangle_Copy_6_3}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_3}    >
						<View style = {noneModeStyles._Rectangle_6}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_6_link}}/>
						</View>
					</View>
					<Text style = {noneModeStyles._Grocery_Mobile_App_2}   >
						ГАЗАР ЗҮЙ
					</Text>
					<View style = {noneModeStyles.___3}    >
					</View>
					<View style = {noneModeStyles._Group_22_3}    >
						<View style = {noneModeStyles._Rectangle_7}    >
						</View>
					</View>
					<Text style = {noneModeStyles._40_40}   >
						40/40
					</Text>
				</View>
				<View style = {noneModeStyles._Group_23_Copy}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Group_23_Copy();}} onStartShouldSetResponderCapture = {() => true}>
					<View style = {noneModeStyles._Rectangle_Copy_6_4}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_4}    >
						<View style = {noneModeStyles._Rectangle_8}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_8_link}}/>
						</View>
					</View>
					<Text style = {noneModeStyles._Landing_page_website}   >
						МАТЕМАТИК
					</Text>
					<View style = {noneModeStyles.___4}    >
					</View>
					<View style = {noneModeStyles._Group_22_4}    >
						<View style = {noneModeStyles._Rectangle_9}    >
						</View>
						<View style = {noneModeStyles._Rectangle_Copy_10_3}    >
						</View>
					</View>
					<Text style = {noneModeStyles._12_20}   >
						12/20
					</Text>
				</View>
				<View style = {noneModeStyles._Group_23_Copy_3}    >
					<View style = {noneModeStyles._Rectangle_Copy_6_5}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Rectangle_Copy_6_5();}} onStartShouldSetResponderCapture = {() => true}>
					</View>
					<View style = {noneModeStyles._Rectangle_container_5}    >
						<View style = {noneModeStyles._Rectangle_10}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_10_link}}/>
						</View>
					</View>
					<Text style = {noneModeStyles._Grocery_Work_Flow}   >
						УРАН{'\n'}ЗОХИОЛ
					</Text>
					<View style = {noneModeStyles.___5}    >
					</View>
					<View style = {noneModeStyles._Group_22_5}    >
						<View style = {noneModeStyles._Rectangle_11}    >
						</View>
						<View style = {noneModeStyles._Rectangle_Copy_10_4}    >
						</View>
					</View>
					<Text style = {noneModeStyles._18_20}   >
						18/20
					</Text>
				</View>
				<View style = {noneModeStyles._Group_23_Copy_5}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Group_23_Copy_5();}} onStartShouldSetResponderCapture = {() => true}>
					<View style = {noneModeStyles._Rectangle_Copy_6_6}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_6}    >
						<View style = {noneModeStyles._Rectangle_12}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_12_link}}/>
						</View>
					</View>
					<Text style = {noneModeStyles._Landing_page}   >
						ФИЗИК
					</Text>
					<View style = {noneModeStyles.___6}    >
					</View>
					<View style = {noneModeStyles._Group_22_6}    >
						<View style = {noneModeStyles._Rectangle_13}    >
						</View>
					</View>
					<Text style = {noneModeStyles._20_35_3}   >
						20/35
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._bottom_bar}    >
				<View style = {noneModeStyles._Bottom_bar}    >
					<View style = {noneModeStyles._Rectangle_Copy_16}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_11}    >
					<View style = {noneModeStyles._Group_7}    >
						<View style = {noneModeStyles._Navigation___House_01}    >
							<View style = {noneModeStyles._layer_2aa51c}    >
								<View style = {noneModeStyles._layer_033449}   >
									<Svg style={{height: 27, width: 26}} viewBox = "0 0 26 27">
										<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M24.4584 10.5622L13.9832 1.3964C13.419 0.90272 12.5765 0.902719 12.0123 1.3964L1.53717 10.5622C1.21242 10.8463 1.02614 11.2568 1.02614 11.6884V24.4774C1.02614 25.3039 1.69612 25.9738 2.52259 25.9738H8.5084C9.33487 25.9738 10.0049 25.3039 10.0049 24.4774V18.4916C10.0049 17.6651 10.6748 16.9951 11.5013 16.9951H14.4942C15.3207 16.9951 15.9907 17.6651 15.9907 18.4916V24.4774C15.9907 25.3039 16.6607 25.9738 17.4871 25.9738H23.4729C24.2994 25.9738 24.9694 25.3039 24.9694 24.4774V11.6884C24.9694 11.2568 24.7831 10.8463 24.4584 10.5622Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_4}    >
						<View style = {noneModeStyles._System___Camera}    >
							<View style = {noneModeStyles._layer_e132d9}    >
								<View style = {noneModeStyles._layer_c7f4d4}   >
									<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
										<Path fill = {"none"}   stroke = {"#F1A93D"} strokeWidth = {2} d = "M6 11C8.76142 11 11 8.76143 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76143 3.23858 11 6 11Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_c91521}    >
								<View style = {noneModeStyles._layer_606978}   >
									<Svg style={{height: 22, width: 32}} viewBox = "0 0 32 22">
										<Path fill = {"none"}   stroke = {"#F1A93D"} strokeWidth = {2} d = "M29.3333 1H2.66667C1.74619 1 1 1.74619 1 2.66667V19.3333C1 20.2538 1.74619 21 2.66667 21H29.3333C30.2538 21 31 20.2538 31 19.3333V2.66667C31 1.74619 30.2538 1 29.3333 1Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_2c4962}    >
								<View style = {noneModeStyles._layer_4d9c46}   >
									<Svg style={{height: 7, width: 15}} viewBox = "0 0 15 7">
										<Path fill = {"none"}   stroke = {"#F1A93D"} strokeWidth = {2} d = "M10.8217 1H3.22426C2.50688 1 1.86998 1.45905 1.64312 2.13962L1.08757 3.80629C0.727829 4.8855 1.53111 6 2.66871 6H11.3773C12.5149 6 13.3182 4.8855 12.9584 3.80629L12.4029 2.13962C12.176 1.45905 11.5391 1 10.8217 1Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_6}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Group_6();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._User___User_01}    >
							<View style = {noneModeStyles._layer_ce42f0}    >
								<View style = {noneModeStyles._layer_600820}   >
									<Svg style={{height: 11, width: 20}} viewBox = "0 0 20 11">
										<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M1.02326 9.97674C1.02326 5.03187 5.03187 1.02326 9.97674 1.02326C14.9216 1.02326 18.9302 5.03187 18.9302 9.97674"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_ef1511}    >
								<View style = {noneModeStyles._layer_064866}   >
									<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
										<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_9}    >
						<View style = {noneModeStyles._Menu___Menu_Alt_05}    >
							<View style = {noneModeStyles._layer_3a6816}    >
								<View style = {noneModeStyles._layer_2321ac}   >
									<Svg style={{height: 2, width: 14}} viewBox = "0 0 14 2">
										<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M1 1L12.6667 1"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_b5b02d}    >
								<View style = {noneModeStyles._layer_6b0c03}   >
									<Svg style={{height: 2, width: 23}} viewBox = "0 0 23 2">
										<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M1 1H21.4167"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_66c9f7}    >
								<View style = {noneModeStyles._layer_5a992d}   >
									<Svg style={{height: 2, width: 14}} viewBox = "0 0 14 2">
										<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M1 1L12.6667 1"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_8}    >
						<View style = {noneModeStyles._layer_c15362}    >
							<View style = {noneModeStyles._layer_0de04c}   >
								<Svg style={{height: 30, width: 30}} viewBox = "0 0 30 30">
									<Path fill = {"none"}   stroke = {"#7173F1"} strokeWidth = {2} d = "M11.8889 29H18.1111C18.9702 29 19.6667 28.3036 19.6667 27.4444V19.6667H27.4444C28.3036 19.6667 29 18.9702 29 18.1111V11.8889C29 11.0298 28.3036 10.3333 27.4444 10.3333L19.6667 10.3333V2.55556C19.6667 1.69645 18.9702 1 18.1111 1H11.8889C11.0298 1 10.3333 1.69645 10.3333 2.55556L10.3333 10.3333L2.55556 10.3333C1.69645 10.3333 1 11.0298 1 11.8889V18.1111C1 18.9702 1.69645 19.6667 2.55556 19.6667L10.3333 19.6667V27.4444C10.3333 28.3036 11.0298 29 11.8889 29Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_uuriin_idewhi

const noneModeStyles = StyleSheet.create({
_page9: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(252, 251, 251)",
	},
_folder: {
	width: 375,
	height: 87,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 64,
	},
_Folder: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -39.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
__: {
	width: 4.03201,
	height: 15.8498,
	position: "absolute",
	transform: [
		{translateX: 344.984},
		{translateY: 3.54327},
	],
	},
_data: {
	width: 343,
	height: 540,
	position: "absolute",
	left: 16,
	top: 137,
	},
_Group_23: {
	width: 163,
	height: 168,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_Copy_6: {
	width: 163,
	height: 168,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 12,
	},
_Rectangle_container: {
	width: 45,
	height: 47,
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16},
	],
	},
_Rectangle: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_Grocery_Mobile_App: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -11},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_more_vert___material_copy_2: {
	width: 24,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 123},
		{translateY: 16},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 24,
	fontWeight: "400",
	lineHeight: 28.125,
	fontFamily: "material",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_22: {
	width: 131,
	height: 6,
	position: "absolute",
	left: 16,
	top: 146,
	},
_Rectangle_2: {
	width: 131,
	height: 6,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	borderRadius: 3,
	},
_Rectangle_Copy_10: {
	width: 87,
	height: 6,
	backgroundColor: "rgb(60, 135, 251)",
	position: "absolute",
	},
_20_35: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 117},
		{translateY: 43},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_20: {
	width: 72,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 112},
	],
	},
_Rectangle_3: {
	width: 72,
	height: 22,
	backgroundColor: "rgb(242, 244, 252)",
	position: "absolute",
	borderRadius: 4,
	},
_10_00: {
	width: 55,
	height: 10,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 23},
		{translateY: 34},
	],
	color: "rgb(60, 135, 251)",
	fontSize: 7.5,
	fontWeight: "600",
	lineHeight: 8.78906,
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "left",
	},
_Group_23_Copy_2: {
	width: 163,
	height: 168,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 188,
	},
_Rectangle_Copy_6_2: {
	width: 163,
	height: 168,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 12,
	},
_Rectangle_container_2: {
	width: 45,
	height: 47,
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16},
	],
	},
_Rectangle_4: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_Responden_data: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -11},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___2: {
	width: 4.032,
	height: 16.032,
	position: "absolute",
	transform: [
		{translateX: 132.984},
		{translateY: 19.584},
	],
	},
_Group_22_2: {
	width: 131,
	height: 6,
	position: "absolute",
	left: 16,
	top: 146,
	},
_Rectangle_5: {
	width: 131,
	height: 6,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	borderRadius: 3,
	},
_Rectangle_Copy_10_2: {
	width: 87,
	height: 6,
	backgroundColor: "rgb(60, 135, 251)",
	position: "absolute",
	},
_20_35_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 117},
		{translateY: 43},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_23_Copy_4: {
	width: 163,
	height: 168,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 372,
	},
_Rectangle_Copy_6_3: {
	width: 163,
	height: 168,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 12,
	},
_Rectangle_container_3: {
	width: 45,
	height: 47,
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16},
	],
	},
_Rectangle_6: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_Grocery_Mobile_App_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -11},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___3: {
	width: 4.032,
	height: 16.032,
	position: "absolute",
	transform: [
		{translateX: 132.984},
		{translateY: 19.584},
	],
	},
_Group_22_3: {
	width: 131,
	height: 6,
	position: "absolute",
	left: 16,
	top: 146,
	},
_Rectangle_7: {
	width: 131,
	height: 6,
	backgroundColor: "rgb(104, 206, 140)",
	position: "absolute",
	borderRadius: 3,
	},
_40_40: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 117},
		{translateY: 43},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_23_Copy: {
	width: 163,
	height: 168,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 180,
	top: 0,
	},
_Rectangle_Copy_6_4: {
	width: 163,
	height: 168,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 12,
	},
_Rectangle_container_4: {
	width: 45,
	height: 47,
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16},
	],
	},
_Rectangle_8: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_Landing_page_website: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -11},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___4: {
	width: 4.03201,
	height: 16.032,
	position: "absolute",
	transform: [
		{translateX: 132.984},
		{translateY: 19.584},
	],
	},
_Group_22_4: {
	width: 131,
	height: 6,
	position: "absolute",
	left: 16,
	top: 146,
	},
_Rectangle_9: {
	width: 131,
	height: 6,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	borderRadius: 3,
	},
_Rectangle_Copy_10_3: {
	width: 87,
	height: 6,
	backgroundColor: "rgb(60, 135, 251)",
	position: "absolute",
	},
_12_20: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 117},
		{translateY: 43},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_23_Copy_3: {
	width: 163,
	height: 168,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 180,
	top: 188,
	},
_Rectangle_Copy_6_5: {
	width: 163,
	height: 168,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 12,
	},
_Rectangle_container_5: {
	width: 45,
	height: 47,
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16},
	],
	},
_Rectangle_10: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_Grocery_Work_Flow: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -11},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___5: {
	width: 4.03201,
	height: 16.032,
	position: "absolute",
	transform: [
		{translateX: 132.984},
		{translateY: 19.584},
	],
	},
_Group_22_5: {
	width: 131,
	height: 6,
	position: "absolute",
	left: 16,
	top: 146,
	},
_Rectangle_11: {
	width: 131,
	height: 6,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	borderRadius: 3,
	},
_Rectangle_Copy_10_4: {
	width: 116,
	height: 6,
	backgroundColor: "rgb(60, 135, 251)",
	position: "absolute",
	},
_18_20: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 117},
		{translateY: 43},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_23_Copy_5: {
	width: 163,
	height: 168,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 180,
	top: 372,
	},
_Rectangle_Copy_6_6: {
	width: 163,
	height: 168,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 12,
	},
_Rectangle_container_6: {
	width: 45,
	height: 47,
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16},
	],
	},
_Rectangle_12: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_Landing_page: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -11},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___6: {
	width: 4.03201,
	height: 16.032,
	position: "absolute",
	transform: [
		{translateX: 132.984},
		{translateY: 19.584},
	],
	},
_Group_22_6: {
	width: 131,
	height: 6,
	position: "absolute",
	left: 16,
	top: 146,
	},
_Rectangle_13: {
	width: 131,
	height: 6,
	backgroundColor: "rgb(255, 63, 78)",
	position: "absolute",
	borderRadius: 3,
	},
_20_35_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 117},
		{translateY: 43},
	],
	color: "rgba(49, 50, 51, 0.698)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_bottom_bar: {
	width: 375,
	height: 94,
	position: "absolute",
	left: 0,
	top: 718,
	},
_Bottom_bar: {
	width: 375,
	height: 94,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_Copy_16: {
	width: 375,
	height: 94,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderTopWidth: 0.5,
	borderRightWidth: 0.5,
	borderBottomWidth: 0.5,
	borderLeftWidth: 0.5,
	borderStyle: "solid",
	borderColor: "rgb(49, 50, 51)",
	},
_Group_11: {
	width: 344,
	height: 50,
	position: "absolute",
	left: 16,
	top: 18,
	},
_Group_7: {
	width: 36,
	height: 45,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 4,
	},
_Navigation___House_01: {
	width: 35,
	height: 35,
	overflow: "hidden",
	position: "absolute",
	left: 1,
	top: 5,
	},
_layer_2aa51c: {
	position: "absolute",
	transform: [
		{translateX: 5.83333},
		{translateY: 4.85446},
	],
	},
_layer_033449: {
	},
_Group_4: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 152,
	top: 6,
	},
_System___Camera: {
	width: 40,
	height: 40,
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_layer_e132d9: {
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16.6667},
	],
	},
_layer_c7f4d4: {
	},
_layer_c91521: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 11.6667},
	],
	},
_layer_606978: {
	},
_layer_2c4962: {
	position: "absolute",
	transform: [
		{translateX: 13.9778},
		{translateY: 6.66666},
	],
	},
_layer_4d9c46: {
	},
_Group_6: {
	width: 37,
	height: 47,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 307,
	top: 3,
	},
_User___User_01: {
	width: 30,
	height: 30,
	overflow: "hidden",
	position: "absolute",
	left: 3,
	top: 9,
	},
_layer_ce42f0: {
	position: "absolute",
	transform: [
		{translateX: 6.25},
		{translateY: 17.5},
	],
	},
_layer_600820: {
	},
_layer_ef1511: {
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 3.75},
	],
	},
_layer_064866: {
	},
_Group_9: {
	width: 44,
	height: 47,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 228,
	top: 3,
	},
_Menu___Menu_Alt_05: {
	width: 35,
	height: 35,
	overflow: "hidden",
	position: "absolute",
	left: 5,
	top: 6,
	},
_layer_3a6816: {
	position: "absolute",
	transform: [
		{translateX: 7.29167},
		{translateY: 24.7917},
	],
	},
_layer_2321ac: {
	},
_layer_b5b02d: {
	position: "absolute",
	transform: [
		{translateX: 7.29167},
		{translateY: 17.5},
	],
	},
_layer_6b0c03: {
	},
_layer_66c9f7: {
	position: "absolute",
	transform: [
		{translateX: 16.0417},
		{translateY: 10.2083},
	],
	},
_layer_5a992d: {
	},
_Group_8: {
	width: 45,
	height: 50,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 71,
	top: 0,
	},
_layer_c15362: {
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 11},
	],
	},
_layer_0de04c: {
	},
})

