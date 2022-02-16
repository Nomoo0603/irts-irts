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
import {image_Rectangle_8_link} from './assets/imageLinks.js'
import {image_Rectangle_10_link} from './assets/imageLinks.js'
import {image_Rectangle_12_link} from './assets/imageLinks.js'
import {image_Rectangle_14_link} from './assets/imageLinks.js'
import {image_Rectangle_16_link} from './assets/imageLinks.js'
const Page_nuur  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_User___User_01 = () => {
					navigation.navigate("Page_contact_details")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page10]}    >
			<View style = {noneModeStyles._viewport}    >
				<View style = {noneModeStyles._greeetings}    >
					<View style = {noneModeStyles._Group}    >
						<Text style = {noneModeStyles._Tavtai_moril}   >
							Тавтай морил
						</Text>
						<Text style = {noneModeStyles._Maria_Tram}   >
							М. Батболд
						</Text>
					</View>
					<View style = {noneModeStyles._Rectangle}    >
						<View style = {noneModeStyles._Mask}    >
						</View>
						<View style = {noneModeStyles._Mask_2}    >
						</View>
						<View style = {noneModeStyles._Rectangle_container}    >
							<View style = {noneModeStyles._Rectangle_2}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_2_link}}/>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._notification}    >
					<View style = {noneModeStyles.__}    >
					</View>
					<View style = {noneModeStyles.___2}    >
					</View>
				</View>
				<View style = {noneModeStyles._Date}    >
					<Text style = {noneModeStyles._Today}   >
						ӨНӨӨДӨР
					</Text>
					<View style = {noneModeStyles._Group_2}    >
						<Text style = {noneModeStyles._MON}   >
							ДАВ
						</Text>
						<Text style = {noneModeStyles._06}   >
							06
						</Text>
					</View>
					<View style = {noneModeStyles._Group_Copy_2}    >
						<Text style = {noneModeStyles._TUE}   >
							МЯГ
						</Text>
						<Text style = {noneModeStyles._07}   >
							07
						</Text>
					</View>
					<Text style = {noneModeStyles._WED}   >
						ЛХА
					</Text>
					<Text style = {noneModeStyles._08}   >
						08
					</Text>
					<View style = {noneModeStyles._Group_Copy_4}    >
						<Text style = {noneModeStyles._THU}   >
							ПҮР
						</Text>
						<Text style = {noneModeStyles._09}   >
							09
						</Text>
					</View>
					<View style = {noneModeStyles._Group_Copy_5}    >
						<Text style = {noneModeStyles._FRI}   >
							БА
						</Text>
						<Text style = {noneModeStyles._10}   >
							10
						</Text>
					</View>
					<View style = {noneModeStyles._Group_Copy_6}    >
						<Text style = {noneModeStyles._SAT}   >
							ХАГ
						</Text>
						<Text style = {noneModeStyles._11}   >
							11
						</Text>
					</View>
					<View style = {noneModeStyles._Group_Copy_7}    >
						<Text style = {noneModeStyles._SUN}   >
							БҮТ
						</Text>
						<Text style = {noneModeStyles._12}   >
							12
						</Text>
					</View>
					<View style = {noneModeStyles._Oval}    >
					</View>
				</View>
				<View style = {noneModeStyles._details_meeting}    >
					<View style = {noneModeStyles._Rectangle_3}    >
					</View>
					<View style = {noneModeStyles._Interface___Radio_Fill}    >
						<View style = {noneModeStyles._layer_ae5925}    >
							<View style = {noneModeStyles._layer_55186f}   >
								<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
									<Path fill = {"none"}   stroke = {"#5C68FF"} strokeWidth = {2} d = "M1 9C1 13.4183 4.58172 17 9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_09a1aa}    >
							<View style = {noneModeStyles._layer_44a22d}   >
								<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
									<Path fill = {"none"}   stroke = {"#5C68FF"} strokeWidth = {2} d = "M1 4C1 5.65685 2.34315 7 4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_20_Copy}    >
						<View style = {noneModeStyles._Rectangle_4}    >
						</View>
						<Text style = {noneModeStyles._Grocery_Mobile_App}   >
							Математик
						</Text>
						<Text style = {noneModeStyles._Mobile_App_that_the}   >
							Тригонометрийн урвуу функц, тригонометр тэгшитгэлийн шийд 
						</Text>
						<View style = {noneModeStyles._Rectangle_5}    >
						</View>
						<View style = {noneModeStyles._Group_15}    >
							<View style = {noneModeStyles._Rectangle_6}    >
							</View>
							<Text style = {noneModeStyles._10_00}   >
								БҮРТГЭГДСЭН
							</Text>
						</View>
						<View style = {noneModeStyles._Group_18}    >
							<View style = {noneModeStyles._Rectangle_7}    >
								<View style = {noneModeStyles._Mask_3}    >
								</View>
								<View style = {noneModeStyles._Mask_4}    >
								</View>
								<View style = {noneModeStyles._Rectangle_container_2}    >
									<View style = {noneModeStyles._Rectangle_8}   >
										<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_8_link}}/>
									</View>
								</View>
							</View>
							<View style = {noneModeStyles._Rectangle_9}    >
								<View style = {noneModeStyles._Mask_5}    >
								</View>
								<View style = {noneModeStyles._Mask_6}    >
								</View>
								<View style = {noneModeStyles._Rectangle_container_3}    >
									<View style = {noneModeStyles._Rectangle_10}   >
										<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_10_link}}/>
									</View>
								</View>
							</View>
							<View style = {noneModeStyles._Rectangle_11}    >
								<View style = {noneModeStyles._Mask_7}    >
								</View>
								<View style = {noneModeStyles._Mask_8}    >
								</View>
								<View style = {noneModeStyles._Rectangle_container_4}    >
									<View style = {noneModeStyles._Rectangle_12}   >
										<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_12_link}}/>
									</View>
								</View>
							</View>
							<View style = {noneModeStyles._Group_17}    >
								<View style = {noneModeStyles._Rectangle_13}    >
									<View style = {noneModeStyles._Mask_9}    >
										<View style = {noneModeStyles._Mask_10}    >
										</View>
										<View style = {noneModeStyles._Mask_11}    >
										</View>
									</View>
									<View style = {noneModeStyles._Rectangle_container_5}    >
										<View style = {noneModeStyles._Rectangle_14}   >
											<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_14_link}}/>
										</View>
									</View>
								</View>
								<View style = {noneModeStyles._Group_16}    >
									<View style = {noneModeStyles._Rectangle_Copy_5}    >
										<View style = {noneModeStyles._Mask_12}    >
											<View style = {noneModeStyles._Mask_13}    >
											</View>
											<View style = {noneModeStyles._Mask_14}    >
											</View>
											<View style = {noneModeStyles._Rectangle_15}    >
											</View>
										</View>
										<View style = {noneModeStyles._Rectangle_container_6}    >
											<View style = {noneModeStyles._Rectangle_16}   >
												<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_16_link}}/>
											</View>
										</View>
									</View>
									<Text style = {noneModeStyles._3_}   >
										3+
									</Text>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Group_19}    >
							<View style = {noneModeStyles.___3}    >
							</View>
							<Text style = {noneModeStyles._Create_by_Maria_Lim}   >
								БАГШ : ОЧИРОО
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_17}    >
					</View>
					<View style = {noneModeStyles._Rectangle_Copy}    >
					</View>
					<View style = {noneModeStyles._Rectangle_Copy_2}    >
					</View>
					<View style = {noneModeStyles._Group_2}    >
						<View style = {noneModeStyles._Rectangle_18}    >
						</View>
						<Text style = {noneModeStyles._Grocery_Mobile_App_Copy}   >
							Газар зүй
						</Text>
						<View style = {noneModeStyles._Group_15_Copy}    >
							<View style = {noneModeStyles._Rectangle_19}    >
							</View>
							<Text style = {noneModeStyles._10_00_2}   >
								БҮРТГЭГДЭЭГҮЙ
							</Text>
						</View>
						<Text style = {noneModeStyles._Mobile_App_that_the_Copy}   >
							Газар зүйн мэдээллийн систем ашиглах нь 
						</Text>
						<View style = {noneModeStyles._Group_19_Copy}    >
							<View style = {noneModeStyles.___4}    >
							</View>
							<Text style = {noneModeStyles._Create_by_Maria_Lim_2}   >
								БАГШ : ЗОРИГ
							</Text>
						</View>
						<View style = {noneModeStyles.___5}    >
						</View>
					</View>
					<View style = {noneModeStyles._Group_2_Copy}    >
						<View style = {noneModeStyles._Rectangle_20}    >
						</View>
						<Text style = {noneModeStyles._Grocery_Mobile_App_Copy_2}   >
							Үндэсний бичиг
						</Text>
						<Text style = {noneModeStyles._Mobile_App_that_the_Copy_2}   >
							Идэвхтэй хэрэглээ бүхий үгийн үндэс залгаврыг зөв бичих 
						</Text>
						<View style = {noneModeStyles._Group_19_Copy_2}    >
							<View style = {noneModeStyles.___6}    >
							</View>
							<Text style = {noneModeStyles._Create_by_Maria_Lim_3}   >
								БАГШ : АМАР
							</Text>
						</View>
						<View style = {noneModeStyles.___7}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Interface___Radio_Fill_2}    >
					<View style = {noneModeStyles._layer_449b1b}    >
						<View style = {noneModeStyles._layer_ad1c81}   >
							<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
								<Path fill = {"none"}   stroke = {"#D8D8D8"} strokeWidth = {2} d = "M1 9C1 13.4183 4.58172 17 9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_744e57}    >
						<View style = {noneModeStyles._layer_f165c9}   >
							<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
								<Path fill = {"none"}   stroke = {"#D8D8D8"} strokeWidth = {2} d = "M1 4C1 5.65685 2.34315 7 4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4Z"/>
							</Svg>
						</View>
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
								<View style = {noneModeStyles._layer_ba2d08}    >
									<View style = {noneModeStyles._layer_c7aca0}   >
										<Svg style={{height: 27, width: 26}} viewBox = "0 0 26 27">
											<Path fill = {"none"}   stroke = {"#5D5FEF"} strokeWidth = {2} d = "M24.4584 10.5622L13.9832 1.3964C13.419 0.90272 12.5765 0.902719 12.0123 1.3964L1.53717 10.5622C1.21242 10.8463 1.02614 11.2568 1.02614 11.6884V24.4774C1.02614 25.3039 1.69612 25.9738 2.52259 25.9738H8.5084C9.33487 25.9738 10.0049 25.3039 10.0049 24.4774V18.4916C10.0049 17.6651 10.6748 16.9951 11.5013 16.9951H14.4942C15.3207 16.9951 15.9907 17.6651 15.9907 18.4916V24.4774C15.9907 25.3039 16.6607 25.9738 17.4871 25.9738H23.4729C24.2994 25.9738 24.9694 25.3039 24.9694 24.4774V11.6884C24.9694 11.2568 24.7831 10.8463 24.4584 10.5622Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Group_4}    >
							<View style = {noneModeStyles._System___Camera}    >
								<View style = {noneModeStyles._layer_ab1c7a}    >
									<View style = {noneModeStyles._layer_653689}   >
										<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
											<Path fill = {"none"}   stroke = {"#F1A93D"} strokeWidth = {2} d = "M6 11C8.76142 11 11 8.76143 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76143 3.23858 11 6 11Z"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles._layer_186d9a}    >
									<View style = {noneModeStyles._layer_0c86db}   >
										<Svg style={{height: 22, width: 32}} viewBox = "0 0 32 22">
											<Path fill = {"none"}   stroke = {"#F1A93D"} strokeWidth = {2} d = "M29.3333 1H2.66667C1.74619 1 1 1.74619 1 2.66667V19.3333C1 20.2538 1.74619 21 2.66667 21H29.3333C30.2538 21 31 20.2538 31 19.3333V2.66667C31 1.74619 30.2538 1 29.3333 1Z"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles._layer_b82eb4}    >
									<View style = {noneModeStyles._layer_118179}   >
										<Svg style={{height: 7, width: 15}} viewBox = "0 0 15 7">
											<Path fill = {"none"}   stroke = {"#F1A93D"} strokeWidth = {2} d = "M10.8217 1H3.22426C2.50688 1 1.86998 1.45905 1.64312 2.13962L1.08757 3.80629C0.727829 4.8855 1.53111 6 2.66871 6H11.3773C12.5149 6 13.3182 4.8855 12.9584 3.80629L12.4029 2.13962C12.176 1.45905 11.5391 1 10.8217 1Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Group_6}    >
							<View style = {noneModeStyles._User___User_01}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_User___User_01();}} onStartShouldSetResponderCapture = {() => true}>
								<View style = {noneModeStyles._layer_d57039}    >
									<View style = {noneModeStyles._layer_b50211}   >
										<Svg style={{height: 11, width: 20}} viewBox = "0 0 20 11">
											<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M1.02326 9.97674C1.02326 5.03187 5.03187 1.02326 9.97674 1.02326C14.9216 1.02326 18.9302 5.03187 18.9302 9.97674"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles._layer_a9e27f}    >
									<View style = {noneModeStyles._layer_d7af39}   >
										<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
											<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Group_9}    >
							<View style = {noneModeStyles._Menu___Menu_Alt_05}    >
								<View style = {noneModeStyles._layer_d3a79b}    >
									<View style = {noneModeStyles._layer_9cec05}   >
										<Svg style={{height: 2, width: 14}} viewBox = "0 0 14 2">
											<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M1 1L12.6667 1"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles._layer_2543b8}    >
									<View style = {noneModeStyles._layer_21eaea}   >
										<Svg style={{height: 2, width: 23}} viewBox = "0 0 23 2">
											<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M1 1H21.4167"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles._layer_fef80f}    >
									<View style = {noneModeStyles._layer_90e805}   >
										<Svg style={{height: 2, width: 14}} viewBox = "0 0 14 2">
											<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M1 1L12.6667 1"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Group_8}    >
							<View style = {noneModeStyles._layer_7c3c40}    >
								<View style = {noneModeStyles._layer_6b0a20}   >
									<Svg style={{height: 30, width: 30}} viewBox = "0 0 30 30">
										<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M11.8889 29H18.1111C18.9702 29 19.6667 28.3036 19.6667 27.4444V19.6667H27.4444C28.3036 19.6667 29 18.9702 29 18.1111V11.8889C29 11.0298 28.3036 10.3333 27.4444 10.3333L19.6667 10.3333V2.55556C19.6667 1.69645 18.9702 1 18.1111 1H11.8889C11.0298 1 10.3333 1.69645 10.3333 2.55556L10.3333 10.3333L2.55556 10.3333C1.69645 10.3333 1 11.0298 1 11.8889V18.1111C1 18.9702 1.69645 19.6667 2.55556 19.6667L10.3333 19.6667V27.4444C10.3333 28.3036 11.0298 29 11.8889 29Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Interface___Radio_Fill_3}    >
					<View style = {noneModeStyles._layer_70afbd}    >
						<View style = {noneModeStyles._layer_0fde92}   >
							<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
								<Path fill = {"none"}   stroke = {"#D8D8D8"} strokeWidth = {2} d = "M1 9C1 13.4183 4.58172 17 9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_3295bb}    >
						<View style = {noneModeStyles._layer_4a3695}   >
							<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
								<Path fill = {"none"}   stroke = {"#D8D8D8"} strokeWidth = {2} d = "M1 4C1 5.65685 2.34315 7 4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_nuur

const noneModeStyles = StyleSheet.create({
_page10: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(252, 251, 251)",
	},
_viewport: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(252, 251, 251)",
	},
_greeetings: {
	width: 179,
	height: 50,
	position: "absolute",
	left: 16,
	top: 108,
	},
_Group: {
	width: 117,
	height: 50,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 62,
	top: 0,
	},
_Tavtai_moril: {
	width: 150,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Maria_Tram: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	color: "rgb(49, 50, 51)",
	fontSize: 18,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Rectangle: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_2: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_container: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_2: {
	width: "100%",
	height: "100%",
	},
_notification: {
	width: 336.016,
	height: 19.512,
	position: "absolute",
	left: 19,
	top: 66.072,
	},
__: {
	width: 18,
	height: 12,
	position: "absolute",
	left: 0,
	top: 3.52802,
	},
___2: {
	width: 16.032,
	height: 19.512,
	position: "absolute",
	left: 319.984,
	top: 0,
	},
_Date: {
	width: 340,
	height: 119,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 12,
	top: 158,
	},
_Today: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 1},
		{translateY: -32.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_2: {
	width: 33,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 65},
	],
	},
_MON: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 5},
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_06: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_2: {
	width: 33,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 58},
		{translateY: 65},
	],
	},
_TUE: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_07: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 4},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_WED: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 109},
		{translateY: 5.5},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_08: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 115},
		{translateY: 29.5},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_4: {
	width: 27,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 164},
		{translateY: 65},
	],
	},
_THU: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 2},
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_09: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 5},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_5: {
	width: 20,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 216},
		{translateY: 65},
	],
	},
_FRI: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_10: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 3},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_6: {
	width: 26,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 261},
		{translateY: 65},
	],
	},
_SAT: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_11: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_7: {
	width: 28,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 312},
		{translateY: 65},
	],
	},
_SUN: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_12: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Oval: {
	width: 6,
	height: 6,
	position: "absolute",
	transform: [
		{translateX: 121},
		{translateY: 113},
	],
	},
_details_meeting: {
	width: 375,
	height: 489,
	position: "absolute",
	left: -4,
	top: 245,
	},
_Rectangle_3: {
	width: 375,
	height: 468,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Interface___Radio_Fill: {
	width: 24,
	height: 24,
	overflow: "hidden",
	position: "absolute",
	left: 15,
	top: 29,
	},
_layer_ae5925: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4},
	],
	},
_layer_55186f: {
	},
_layer_09a1aa: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 9},
	],
	},
_layer_44a22d: {
	},
_Group_20_Copy: {
	width: 311,
	height: 145,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 48,
	top: 16,
	},
_Rectangle_4: {
	width: 311,
	height: 145,
	backgroundColor: "rgb(92, 104, 255)",
	position: "absolute",
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(212.161,210.079,210.079,0.5)",
	shadowRadius: 4,
	},
_Grocery_Mobile_App: {
	width: 138,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -56.5},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.3,
	textAlign: "left",
	},
_Mobile_App_that_the: {
	width: 282,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -23.5},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 8,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.171429,
	textAlign: "left",
	},
_Rectangle_5: {
	width: 311,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 87},
	],
	borderTopWidth: 0.5,
	borderRightWidth: 0.5,
	borderBottomWidth: 0.5,
	borderLeftWidth: 0.5,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	},
_Group_15: {
	width: 72,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 224},
		{translateY: 15},
	],
	},
_Rectangle_6: {
	width: 72,
	height: 22,
	backgroundColor: "rgb(12, 249, 107)",
	position: "absolute",
	borderRadius: 4,
	},
_10_00: {
	width: 55,
	height: 10,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 9},
		{translateY: -5},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 7.5,
	fontWeight: "600",
	lineHeight: 8.78906,
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "center",
	},
_Group_18: {
	width: 80,
	height: 26,
	position: "absolute",
	left: 15,
	top: 100,
	},
_Rectangle_7: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_3: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_4: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_container_2: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -1.73333},
	],
	},
_Rectangle_8: {
	width: "100%",
	height: "100%",
	},
_Rectangle_9: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 18,
	top: 0,
	},
_Mask_5: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_6: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_container_3: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -0.866667},
	],
	},
_Rectangle_10: {
	width: "100%",
	height: "100%",
	},
_Rectangle_11: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 36,
	top: 0,
	},
_Mask_7: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_8: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_container_4: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -1.73333},
	],
	},
_Rectangle_12: {
	width: "100%",
	height: "100%",
	},
_Group_17: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 54,
	top: 0,
	},
_Rectangle_13: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_9: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_10: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_11: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_container_5: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -0.866667},
	],
	},
_Rectangle_14: {
	width: "100%",
	height: "100%",
	borderRadius: 25,
	},
_Group_16: {
	width: 26,
	height: 26,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	borderRadius: 25,
	},
_Rectangle_Copy_5: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_12: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_13: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_14: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_15: {
	width: 30.3333,
	height: 30.3333,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	transform: [
		{translateX: 39.8667},
		{translateY: -12.1333},
	],
	},
_Rectangle_container_6: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -0.866667},
	],
	},
_Rectangle_16: {
	width: "100%",
	height: "100%",
	},
_3_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 7},
		{translateY: -5},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 8,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: -0.171429,
	textAlign: "left",
	},
_Group_19: {
	width: 94.676,
	height: 13,
	position: "absolute",
	left: 200.324,
	top: 110,
	},
___3: {
	width: 9.35201,
	height: 9.352,
	position: "absolute",
	transform: [
		{translateY: 0.424},
	],
	},
_Create_by_Maria_Lim: {
	width: 81.8165,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 12.8595},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 9,
	fontWeight: "600",
	lineHeight: 10.5469,
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Rectangle_17: {
	width: 4,
	height: 121,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	left: 25,
	top: 58,
	borderRadius: 2.5,
	},
_Rectangle_Copy: {
	width: 4,
	height: 121,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	left: 25,
	top: 213,
	borderRadius: 2.5,
	},
_Rectangle_Copy_2: {
	width: 4,
	height: 121,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	left: 25,
	top: 368,
	borderRadius: 2.5,
	},
_Group_2: {
	width: 311,
	height: 126,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 48,
	top: 177,
	},
_Rectangle_18: {
	width: 311,
	height: 126,
	backgroundColor: "rgb(242, 244, 252)",
	position: "absolute",
	borderRadius: 16,
	},
_Grocery_Mobile_App_Copy: {
	width: 138,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -47},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.3,
	textAlign: "left",
	},
_Group_15_Copy: {
	width: 72,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 224},
		{translateY: 15},
	],
	},
_Rectangle_19: {
	width: 72,
	height: 22,
	backgroundColor: "rgb(255, 2, 2)",
	position: "absolute",
	borderRadius: 4,
	},
_10_00_2: {
	width: 65,
	height: 10,
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 6},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 7.5,
	fontWeight: "600",
	lineHeight: 8.78906,
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "left",
	},
_Mobile_App_that_the_Copy: {
	width: 282,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -14},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 8,
	fontWeight: "500",
	fontFamily: "Montserrat",
	letterSpacing: -0.171429,
	textAlign: "left",
	},
_Group_19_Copy: {
	width: 95.676,
	height: 13,
	position: "absolute",
	left: 17.324,
	top: 94,
	},
___4: {
	width: 9.35199,
	height: 9.35201,
	position: "absolute",
	transform: [
		{translateY: 0.423996},
	],
	},
_Create_by_Maria_Lim_2: {
	width: 81.8165,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 13.8595},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 10,
	fontWeight: "600",
	lineHeight: 11.7188,
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___5: {
	width: 16.032,
	height: 4.032,
	position: "absolute",
	transform: [
		{translateX: 275.984},
		{translateY: 96.584},
	],
	},
_Group_2_Copy: {
	width: 311,
	height: 126,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 48,
	top: 319,
	},
_Rectangle_20: {
	width: 311,
	height: 126,
	backgroundColor: "rgb(242, 244, 252)",
	position: "absolute",
	borderRadius: 16,
	},
_Grocery_Mobile_App_Copy_2: {
	width: 138,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -47},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.3,
	textAlign: "left",
	},
_Mobile_App_that_the_Copy_2: {
	width: 282,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -14},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 8,
	fontWeight: "500",
	fontFamily: "Montserrat",
	letterSpacing: -0.171429,
	textAlign: "left",
	},
_Group_19_Copy_2: {
	width: 95.676,
	height: 13,
	position: "absolute",
	left: 17.324,
	top: 94,
	},
___6: {
	width: 9.35199,
	height: 9.35199,
	position: "absolute",
	transform: [
		{translateY: 0.424011},
	],
	},
_Create_by_Maria_Lim_3: {
	width: 81.8165,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 13.8595},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 10,
	fontWeight: "600",
	lineHeight: 11.7188,
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___7: {
	width: 16.032,
	height: 4.03201,
	position: "absolute",
	transform: [
		{translateX: 275.984},
		{translateY: 96.584},
	],
	},
_Interface___Radio_Fill_2: {
	width: 24,
	height: 24,
	overflow: "hidden",
	position: "absolute",
	left: 11,
	top: 429,
	},
_layer_449b1b: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4},
	],
	},
_layer_ad1c81: {
	},
_layer_744e57: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 9},
	],
	},
_layer_f165c9: {
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
_layer_ba2d08: {
	position: "absolute",
	transform: [
		{translateX: 5.83334},
		{translateY: 4.85446},
	],
	},
_layer_c7aca0: {
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
_layer_ab1c7a: {
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16.6667},
	],
	},
_layer_653689: {
	},
_layer_186d9a: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 11.6667},
	],
	},
_layer_0c86db: {
	},
_layer_b82eb4: {
	position: "absolute",
	transform: [
		{translateX: 13.9778},
		{translateY: 6.66666},
	],
	},
_layer_118179: {
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
_layer_d57039: {
	position: "absolute",
	transform: [
		{translateX: 6.25},
		{translateY: 17.5},
	],
	},
_layer_b50211: {
	},
_layer_a9e27f: {
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 3.75},
	],
	},
_layer_d7af39: {
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
_layer_d3a79b: {
	position: "absolute",
	transform: [
		{translateX: 7.29167},
		{translateY: 24.7917},
	],
	},
_layer_9cec05: {
	},
_layer_2543b8: {
	position: "absolute",
	transform: [
		{translateX: 7.29167},
		{translateY: 17.5},
	],
	},
_layer_21eaea: {
	},
_layer_fef80f: {
	position: "absolute",
	transform: [
		{translateX: 16.0417},
		{translateY: 10.2083},
	],
	},
_layer_90e805: {
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
_layer_7c3c40: {
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 11},
	],
	},
_layer_6b0a20: {
	},
_Interface___Radio_Fill_3: {
	width: 24,
	height: 24,
	overflow: "hidden",
	position: "absolute",
	left: 11,
	top: 585,
	},
_layer_70afbd: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4},
	],
	},
_layer_0fde92: {
	},
_layer_3295bb: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 9},
	],
	},
_layer_4a3695: {
	},
})

