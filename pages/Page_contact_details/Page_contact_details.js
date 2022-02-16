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
import {image_Rectangle_2_link} from './assets/imageLinks.js'
import {image_Rectangle_4_link} from './assets/imageLinks.js'
const Page_contact_details  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_layer_a25eaa = () => {
					navigation.navigate("Page_nuur")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page6]}    >
			<View style = {noneModeStyles._Rectangle}    >
			</View>
			<View style = {noneModeStyles._contact_details}    >
				<View style = {noneModeStyles._layer_4c52fa}    >
					<View style = {noneModeStyles._layer_83db23}   >
						<Svg style={{height: 17, width: 17}} viewBox = "0 0 17 17">
							<Path fill = {"#313233"}     d = "M8.49999 17L10.0015 15.4985L4.07185 9.54341H17V7.45658H4.07185L10.0015 1.5015L8.49999 0L0 8.49999L8.49999 17Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.__}    >
				</View>
				<Text style = {noneModeStyles._Contact_Details}   >
					БҮРТГЭЛ
				</Text>
			</View>
			<View style = {noneModeStyles._details_profile}    >
				<View style = {noneModeStyles._Rectangle_container}    >
					<View style = {noneModeStyles._Rectangle_2}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_2_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_3}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_13}    >
					<View style = {noneModeStyles._Mask}    >
					</View>
					<View style = {noneModeStyles._Mask_2}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_2}    >
						<View style = {noneModeStyles._Rectangle_4}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_4_link}}/>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Maria_Nkechi}   >
					М.Эрдэнэжаргал
				</Text>
				<Text style = {noneModeStyles._Project_Manager}   >
					11А ангийн сурагч
				</Text>
				<Text style = {noneModeStyles._Motivated__personabl}   >
					Математик болон Физикийн хичээлийг гүнзгийрүүлэн суралцдаг.
				</Text>
				<View style = {noneModeStyles._Group_5}    >
					<View style = {noneModeStyles._Group_2}    >
						<View style = {noneModeStyles._Rectangle_5}    >
						</View>
						<Text style = {noneModeStyles._Business}   >
							УСАН СЭЛЭЛТ
						</Text>
					</View>
					<View style = {noneModeStyles._Group_3}    >
						<View style = {noneModeStyles._Rectangle_Copy}    >
						</View>
						<View style = {noneModeStyles._Management_2}    >
							<Text style = {noneModeStyles._Management}   >
								ЖИҮ ЖИЦҮ
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Group_4}    >
						<View style = {noneModeStyles._Rectangle_Copy_2}    >
						</View>
						<Text style = {noneModeStyles._Product}   >
							ЖУДО
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Oval}    >
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
							<View style = {noneModeStyles._layer_a25eaa}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_layer_a25eaa();}} onStartShouldSetResponderCapture = {() => true}>
								<View style = {noneModeStyles._layer_6373f0}   >
									<Svg style={{height: 27, width: 26}} viewBox = "0 0 26 27">
										<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M24.4584 10.5622L13.9832 1.3964C13.419 0.90272 12.5765 0.902719 12.0123 1.3964L1.53717 10.5622C1.21242 10.8463 1.02614 11.2568 1.02614 11.6884V24.4774C1.02614 25.3039 1.69612 25.9738 2.52259 25.9738H8.5084C9.33487 25.9738 10.0049 25.3039 10.0049 24.4774V18.4916C10.0049 17.6651 10.6748 16.9951 11.5013 16.9951H14.4942C15.3207 16.9951 15.9907 17.6651 15.9907 18.4916V24.4774C15.9907 25.3039 16.6607 25.9738 17.4871 25.9738H23.4729C24.2994 25.9738 24.9694 25.3039 24.9694 24.4774V11.6884C24.9694 11.2568 24.7831 10.8463 24.4584 10.5622Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_4_2}    >
						<View style = {noneModeStyles._System___Camera}    >
							<View style = {noneModeStyles._layer_a3f824}    >
								<View style = {noneModeStyles._layer_c6deb6}   >
									<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
										<Path fill = {"none"}   stroke = {"#F1A93D"} strokeWidth = {2} d = "M6 11C8.76142 11 11 8.76143 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76143 3.23858 11 6 11Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_9ad334}    >
								<View style = {noneModeStyles._layer_8aee3d}   >
									<Svg style={{height: 22, width: 32}} viewBox = "0 0 32 22">
										<Path fill = {"none"}   stroke = {"#F1A93D"} strokeWidth = {2} d = "M29.3333 1H2.66667C1.74619 1 1 1.74619 1 2.66667V19.3333C1 20.2538 1.74619 21 2.66667 21H29.3333C30.2538 21 31 20.2538 31 19.3333V2.66667C31 1.74619 30.2538 1 29.3333 1Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_654c0b}    >
								<View style = {noneModeStyles._layer_c450e1}   >
									<Svg style={{height: 7, width: 15}} viewBox = "0 0 15 7">
										<Path fill = {"none"}   stroke = {"#F1A93D"} strokeWidth = {2} d = "M10.8217 1H3.22423C2.50685 1 1.86995 1.45905 1.64309 2.13962L1.08754 3.80629C0.727799 4.8855 1.53108 6 2.66868 6H11.3773C12.5149 6 13.3181 4.8855 12.9584 3.80629L12.4028 2.13962C12.176 1.45905 11.5391 1 10.8217 1Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_6}    >
						<View style = {noneModeStyles._User___User_01}    >
							<View style = {noneModeStyles._layer_ab1aa6}    >
								<View style = {noneModeStyles._layer_2ea315}   >
									<Svg style={{height: 11, width: 20}} viewBox = "0 0 20 11">
										<Path fill = {"none"}   stroke = {"#5C68FF"} strokeWidth = {2} d = "M1.02326 9.97674C1.02326 5.03187 5.03187 1.02326 9.97674 1.02326C14.9216 1.02326 18.9302 5.03187 18.9302 9.97674"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_83b94e}    >
								<View style = {noneModeStyles._layer_ca4501}   >
									<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
										<Path fill = {"none"}   stroke = {"#5C68FF"} strokeWidth = {2} d = "M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_9}    >
						<View style = {noneModeStyles._Menu___Menu_Alt_05}    >
							<View style = {noneModeStyles._layer_e2f4e5}    >
								<View style = {noneModeStyles._layer_3aedfa}   >
									<Svg style={{height: 2, width: 14}} viewBox = "0 0 14 2">
										<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M1 1L12.6667 1"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_22fd5d}    >
								<View style = {noneModeStyles._layer_73be45}   >
									<Svg style={{height: 2, width: 23}} viewBox = "0 0 23 2">
										<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M1 1H21.4167"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_c3d24b}    >
								<View style = {noneModeStyles._layer_edd150}   >
									<Svg style={{height: 2, width: 14}} viewBox = "0 0 14 2">
										<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M1 1L12.6667 1"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_8}    >
						<View style = {noneModeStyles._layer_51eadd}    >
							<View style = {noneModeStyles._layer_2ac292}   >
								<Svg style={{height: 30, width: 30}} viewBox = "0 0 30 30">
									<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M11.8889 29H18.1111C18.9702 29 19.6667 28.3036 19.6667 27.4444V19.6667H27.4444C28.3036 19.6667 29 18.9702 29 18.1111V11.8889C29 11.0298 28.3036 10.3333 27.4444 10.3333L19.6667 10.3333V2.55556C19.6667 1.69645 18.9702 1 18.1111 1H11.8889C11.0298 1 10.3333 1.69645 10.3333 2.55556L10.3333 10.3333L2.55556 10.3333C1.69645 10.3333 1 11.0298 1 11.8889V18.1111C1 18.9702 1.69645 19.6667 2.55556 19.6667L10.3333 19.6667V27.4444C10.3333 28.3036 11.0298 29 11.8889 29Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._10_00}   >
				Чөлөө авах хүсэлт илгээх
			</Text>
			<View style = {noneModeStyles._Rectangle_6}    >
			</View>
			<Text style = {noneModeStyles._10_00_2}   >
				Өвчтэй{'\n'}мэдэгдэл 
			</Text>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_contact_details

const noneModeStyles = StyleSheet.create({
_page6: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(252, 251, 251)",
	},
_Rectangle: {
	width: 138,
	height: 52,
	backgroundColor: "rgb(242, 244, 252)",
	position: "absolute",
	transform: [
		{translateX: 26},
		{translateY: 489},
	],
	borderRadius: 4,
	},
_contact_details: {
	width: 339.016,
	height: 25,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 19.984,
	top: 64,
	},
_layer_4c52fa: {
	position: "absolute",
	transform: [
		{translateY: 3.58401},
	],
	},
_layer_83db23: {
	},
__: {
	width: 4.03198,
	height: 16.032,
	position: "absolute",
	transform: [
		{translateX: 325},
		{translateY: 3.58401},
	],
	},
_Contact_Details: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 133.016},
		{translateY: -11.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_details_profile: {
	width: 375,
	height: 343,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 109,
	},
_Rectangle_container: {
	width: 375,
	height: 208,
	position: "absolute",
	},
_Rectangle_2: {
	width: "100%",
	height: "100%",
	},
_Rectangle_3: {
	width: 343,
	height: 239,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 104},
	],
	borderRadius: 6,
	},
_Rectangle_Copy_13: {
	width: 80,
	height: 80,
	position: "absolute",
	left: 148,
	top: 67,
	},
_Mask: {
	width: 80,
	height: 80,
	position: "absolute",
	},
_Mask_2: {
	width: 80,
	height: 80,
	position: "absolute",
	},
_Rectangle_container_2: {
	width: 93.4736,
	height: 93.4737,
	position: "absolute",
	transform: [
		{translateX: -8.42102},
		{translateY: -2.52632},
	],
	},
_Rectangle_4: {
	width: "100%",
	height: "100%",
	},
_Maria_Nkechi: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 123},
		{translateY: -10.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Project_Manager: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 132},
		{translateY: 11.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Motivated__personabl: {
	width: 311,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 32},
		{translateY: 219},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "center",
	},
_Group_5: {
	width: 289,
	height: 24,
	position: "absolute",
	left: 43,
	top: 303,
	},
_Group_2: {
	width: 76,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	},
_Rectangle_5: {
	width: 76,
	height: 24,
	backgroundColor: "rgb(196, 219, 253)",
	position: "absolute",
	borderRadius: 2,
	},
_Business: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 7.5},
		{translateY: -5},
	],
	color: "rgb(60, 135, 251)",
	fontSize: 8,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "center",
	},
_Group_3: {
	width: 101,
	height: 24,
	position: "absolute",
	left: 96,
	top: 0,
	},
_Rectangle_Copy: {
	width: 101,
	height: 24,
	backgroundColor: "rgb(196, 219, 253)",
	position: "absolute",
	borderRadius: 2,
	},
_Management_2: {
	width: 69,
	height: 15,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 4},
	],
	},
_Management: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 9},
		{translateY: -4.5},
	],
	color: "rgb(60, 135, 251)",
	fontSize: 8,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "center",
	},
_Group_4: {
	width: 72,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 217},
	],
	},
_Rectangle_Copy_2: {
	width: 72,
	height: 24,
	backgroundColor: "rgb(196, 219, 253)",
	position: "absolute",
	borderRadius: 2,
	},
_Product: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 22},
		{translateY: -5},
	],
	color: "rgb(60, 135, 251)",
	fontSize: 8,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "center",
	},
_Oval: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 208},
		{translateY: 133},
	],
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
_layer_a25eaa: {
	position: "absolute",
	transform: [
		{translateX: 5.83337},
		{translateY: 4.85446},
	],
	},
_layer_6373f0: {
	},
_Group_4_2: {
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
_layer_a3f824: {
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16.6667},
	],
	},
_layer_c6deb6: {
	},
_layer_9ad334: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 11.6667},
	],
	},
_layer_8aee3d: {
	},
_layer_654c0b: {
	position: "absolute",
	transform: [
		{translateX: 13.9778},
		{translateY: 6.66666},
	],
	},
_layer_c450e1: {
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
_layer_ab1aa6: {
	position: "absolute",
	transform: [
		{translateX: 6.25},
		{translateY: 17.5},
	],
	},
_layer_2ea315: {
	},
_layer_83b94e: {
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 3.75},
	],
	},
_layer_ca4501: {
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
_layer_e2f4e5: {
	position: "absolute",
	transform: [
		{translateX: 7.29163},
		{translateY: 24.7917},
	],
	},
_layer_3aedfa: {
	},
_layer_22fd5d: {
	position: "absolute",
	transform: [
		{translateX: 7.29163},
		{translateY: 17.5},
	],
	},
_layer_73be45: {
	},
_layer_c3d24b: {
	position: "absolute",
	transform: [
		{translateX: 16.0416},
		{translateY: 10.2083},
	],
	},
_layer_edd150: {
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
_layer_51eadd: {
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 11},
	],
	},
_layer_2ac292: {
	},
_10_00: {
	width: 128,
	height: 25,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 31},
		{translateY: 91},
	],
	color: "rgb(60, 135, 251)",
	fontSize: 14,
	fontWeight: "600",
	lineHeight: 16.4062,
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "center",
	},
_Rectangle_6: {
	width: 147,
	height: 47,
	backgroundColor: "rgb(242, 244, 252)",
	position: "absolute",
	transform: [
		{translateX: 200},
		{translateY: 489},
	],
	borderRadius: 4,
	},
_10_00_2: {
	width: 140,
	height: 34,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 203},
		{translateY: 88},
	],
	color: "rgb(60, 135, 251)",
	fontSize: 14,
	fontWeight: "600",
	lineHeight: 16.4062,
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "center",
	},
})

