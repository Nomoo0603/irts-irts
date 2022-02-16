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
import {image_Rectangle_Copy_link} from './assets/imageLinks.js'
import {image_Rectangle_Copy_2_link} from './assets/imageLinks.js'
import {image_Rectangle_5_link} from './assets/imageLinks.js'
import {image_Rectangle_6_link} from './assets/imageLinks.js'
import {image_Rectangle_7_link} from './assets/imageLinks.js'
import {image_Rectangle_8_link} from './assets/imageLinks.js'
import {image_Rectangle_9_link} from './assets/imageLinks.js'
const Page_Irts  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_layer_0354f8 = () => {
					navigation.navigate("Page_nuur")
	}
	const onClick_Group_9_2 = () => {
					navigation.navigate("Page_angiin_medeelel")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page5]}    >
			<View style = {noneModeStyles._activity}    >
				<Text style = {noneModeStyles._Activity}   >
					ИРЦ
				</Text>
				<View style = {noneModeStyles.__}    >
				</View>
			</View>
			<View style = {noneModeStyles._activity_2}    >
				<View style = {noneModeStyles._Group_2}    >
					<View style = {noneModeStyles._Group}    >
						<Text style = {noneModeStyles._Amarachi_Nkechi}   >
							А. Энхжин
						</Text>
						<Text style = {noneModeStyles._Updated_screen_on_Gr}   >
							Оруулсан хичээл : Байхгүй байна!
						</Text>
					</View>
					<Text style = {noneModeStyles._Just_now}   >
						Яг одоо
					</Text>
					<View style = {noneModeStyles._Group_17_Copy}    >
						<View style = {noneModeStyles._Rectangle}    >
							<View style = {noneModeStyles._Mask}    >
								<View style = {noneModeStyles._Mask_2}    >
								</View>
								<View style = {noneModeStyles._Mask_3}    >
								</View>
							</View>
							<View style = {noneModeStyles._Rectangle_container}    >
								<View style = {noneModeStyles._Rectangle_2}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_2_link}}/>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_2}    >
					<Text style = {noneModeStyles._Amarachi_Nkechi_2}   >
						Н. Намуун
					</Text>
					<Text style = {noneModeStyles._Updated_file_on_Resp}   >
						Оруулсан хичээл : Responden data
					</Text>
				</View>
				<Text style = {noneModeStyles._Sun__16_July_2021}   >
					2 сарын 8 , 2022
				</Text>
				<Text style = {noneModeStyles._Sun__16_July_2021_Copy_2}   >
					2 сарын 8 , 2022
				</Text>
				<View style = {noneModeStyles._Group_3}    >
					<Text style = {noneModeStyles._Amar_Nkechi}   >
						Б.Билгүдэй
					</Text>
					<Text style = {noneModeStyles._Add_photo_on_Grocery}   >
						Оруулсан хичээл :  Grocery Work Flow
					</Text>
				</View>
				<View style = {noneModeStyles._Group_Copy_2}    >
					<Text style = {noneModeStyles._Mario_Niketh}   >
						Э. Энхжин
					</Text>
					<Text style = {noneModeStyles._Attachment_Landing_p}   >
						Оруулсын хичээл  : 
					</Text>
				</View>
				<View style = {noneModeStyles._Group_Copy}    >
					<Text style = {noneModeStyles._Attachment_Grocery_W}   >
						Оруулсан хичээл : Grocery Work Flow
					</Text>
				</View>
				<Text style = {noneModeStyles._Shawni_Pelikan}   >
					Б. Болдбаяр
				</Text>
				<Text style = {noneModeStyles._Attachment_Grocery_W_2}   >
					Оруулсан хичээл : 
				</Text>
				<Text style = {noneModeStyles._13_05}   >
					13:05
				</Text>
				<Text style = {noneModeStyles._Sun__16_July_2021_2}   >
					2 сарын 7 , 2022
				</Text>
				<Text style = {noneModeStyles._Sun__16_July_2021_Copy}   >
					2 сарын 9 , 2022
				</Text>
				<View style = {noneModeStyles._Rectangle_3}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_5}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_9}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_3}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_4}    >
				</View>
				<View style = {noneModeStyles._Rectangle_container_2}    >
					<View style = {noneModeStyles._Rectangle_4}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_4_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_container}    >
					<View style = {noneModeStyles._Rectangle_Copy}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_Copy_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_2_container}    >
					<View style = {noneModeStyles._Rectangle_Copy_2}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_Copy_2_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_10}    >
					<View style = {noneModeStyles._Mask_4}    >
					</View>
					<View style = {noneModeStyles._Mask_5}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_3}    >
						<View style = {noneModeStyles._Rectangle_5}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_5_link}}/>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_11}    >
					<View style = {noneModeStyles._Mask_6}    >
					</View>
					<View style = {noneModeStyles._Mask_7}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_4}    >
						<View style = {noneModeStyles._Rectangle_6}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_6_link}}/>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_10_2}    >
					<View style = {noneModeStyles._Mask_8}    >
					</View>
					<View style = {noneModeStyles._Mask_9}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_5}    >
						<View style = {noneModeStyles._Rectangle_7}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_7_link}}/>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_12}    >
					<View style = {noneModeStyles._Mask_10}    >
					</View>
					<View style = {noneModeStyles._Mask_11}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_6}    >
						<View style = {noneModeStyles._Rectangle_8}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_8_link}}/>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_9}    >
					<View style = {noneModeStyles._vscode_icons_file_type_pdf}    >
						<View style = {noneModeStyles._ViewBox}    >
						</View>
						<View style = {noneModeStyles._layer_4c2921}    >
							<View style = {noneModeStyles._layer_09a399}   >
								<Svg style={{height: 32, width: 24}} viewBox = "0 0 24 32">
									<Path fill = {"url(#paint0_linear_0_602)"}     d = "M0 0H14.5576C18.2198 2.59374 21.413 5.79288 24 9.45993V31.851H0V0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_9dc9a5}    >
							<View style = {noneModeStyles._layer_1603bf}   >
								<Svg style={{height: 33, width: 25}} viewBox = "0 0 25 33">
									<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#C8C8C8"} strokeWidth = {0.5} d = "M0.256012 0.256012H15.1047C18.8402 2.90162 22.0973 6.16474 24.7359 9.90512V32.744H0.256012V0.256012Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_e7eada}    >
							<View style = {noneModeStyles._layer_918f5f}   >
								<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
									<Path fill = {"url(#paint0_linear_0_604)"}     d = "M0 0C3.86649 2.74841 7.24183 6.12914 9.98408 10C8.13861 8.10335 5.55015 7.11787 2.91059 7.30698C3.28883 4.52945 2.18439 1.75676 0 0L0 0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_cf4c7e}    >
							<View style = {noneModeStyles._layer_256892}   >
								<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
									<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#C8C8C8"} strokeWidth = {0.5} d = "M0.23217 0.20708C3.93462 2.83889 7.16677 6.07619 9.79267 9.78282C8.0255 7.96664 5.54685 7.02297 3.01927 7.20406C3.38147 4.54436 2.32388 1.88931 0.23217 0.20708L0.23217 0.20708Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_ca7b8a}    >
							<View style = {noneModeStyles._layer_02d07b}   >
								<Svg style={{height: 8, width: 22}} viewBox = "0 0 22 8">
									<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#C8C8C8"} strokeWidth = {4} d = "M2.03468 2.03468H19.9653V5.46821H2.03468V2.03468Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._Shape}    >
						</View>
						<View style = {noneModeStyles._layer_a7c3d7}    >
							<View style = {noneModeStyles._layer_459a87}   >
								<Svg style={{height: 8, width: 22}} viewBox = "0 0 22 8">
									<Path fill = {"url(#paint0_linear_0_610)"}     d = "M0 0H22V7.39492H0V0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._Shape_2}    >
						</View>
						<View style = {noneModeStyles._Shape_3}    >
						</View>
					</View>
					<View style = {noneModeStyles._Group_3}    >
						<Text style = {noneModeStyles._Presentation_pdf}   >
							Персентаци.pdf
						</Text>
						<Text style = {noneModeStyles._5_MB}   >
							5 MB
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_10_3}    >
					<View style = {noneModeStyles._Mask_12}    >
					</View>
					<View style = {noneModeStyles._Mask_13}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_7}    >
						<View style = {noneModeStyles._Rectangle_9}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_9_link}}/>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_11}    >
					<View style = {noneModeStyles._vscode_icons_file_type_photoshop2}    >
						<View style = {noneModeStyles._ViewBox_2}    >
						</View>
						<View style = {noneModeStyles._layer_1cff29}    >
							<View style = {noneModeStyles._layer_5d64ce}   >
								<Svg style={{height: 35, width: 27}} viewBox = "0 0 27 35">
									<Path fill = {"#070444"}     d = "M19.0775 0H0V35H26.1375V7.36L19.1637 0.09L19.0775 0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_bbd2a3}    >
							<View style = {noneModeStyles._layer_b4930a}   >
								<Svg style={{height: 10, width: 26}} viewBox = "0 0 26 10">
									<Path fill = {"#5BC3F6"}     d = "M0 0H25.8886V9.99999H0V0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_2729ed}    >
							<View style = {noneModeStyles._layer_4c2201}   >
								<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
									<Path fill = {"#5BC3F6"}     d = "M0 0V8H7.67391L0 0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._Shape_4}    >
						</View>
						<View style = {noneModeStyles._layer_e699cc}    >
							<View style = {noneModeStyles._layer_11eb16}   >
								<Svg style={{height: 7, width: 4}} viewBox = "0 0 4 7">
									<Path fill = {"#070444"}     d = "M0.245736 5.07882C0.638332 5.34157 1.09723 5.48795 1.56945 5.50105C2.03785 5.50105 2.26593 5.28926 2.26593 4.94848C2.26593 4.60771 2.03377 4.42986 1.46356 4.15833C0.605402 3.84869 0.0335894 3.03414 0.0339415 2.12184C-0.00806621 1.56235 0.18999 1.01141 0.578611 0.606728C0.967232 0.202044 1.5097 -0.0181521 2.07043 0.00117304C2.55574 -0.0125163 3.03526 0.109245 3.45524 0.352807L3.17421 1.80143C2.84017 1.59405 2.45545 1.48272 2.06228 1.47966C1.64684 1.47966 1.41875 1.6806 1.41875 1.982C1.41875 2.32413 1.69029 2.46397 2.33382 2.78573C3.16693 3.11071 3.7019 3.9287 3.66568 4.82222C3.70914 5.41059 3.49428 5.98873 3.0771 6.4059C2.65993 6.82307 2.08179 7.03794 1.49343 6.99448C0.966317 6.99334 0.449673 6.84727 0 6.57224L0.245736 5.07882Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._Shape_5}    >
						</View>
						<View style = {noneModeStyles._Shape_6}    >
						</View>
						<View style = {noneModeStyles._layer_2f25df}    >
							<View style = {noneModeStyles._layer_afdafe}   >
								<Svg style={{height: 10, width: 7}} viewBox = "0 0 7 10">
									<Path fill = {"#5BC3F6"}     d = "M3.24443 0.0208801C2.429 -0.0780854 1.61033 0.177805 0.996407 0.723537C0.382489 1.26927 0.0324195 2.05231 0.0351407 2.87372C0.0351407 4.30962 0.667139 5.07687 2.47213 5.90731C3.73612 6.47738 4.05086 6.77315 4.05086 7.2838C4.05086 7.71609 3.77025 8.1686 2.96382 8.1686C1.93173 8.10793 0.941919 7.73746 0.12362 7.10558C0.111359 7.09593 0.0962503 7.09059 0.0806445 7.09041C0.0389326 7.09041 0.00101274 7.13086 0.00101274 7.20417V9.01422C-0.00712221 9.09511 0.0342873 9.17294 0.105924 9.2114C0.918849 9.72386 1.86262 9.99031 2.82352 9.97865C3.6775 10.0823 4.53387 9.80523 5.16531 9.22101C5.79675 8.6368 6.13941 7.8045 6.10232 6.94505C6.10232 5.52811 5.33129 4.79626 3.52504 3.97466C2.21048 3.38438 1.9817 3.12905 1.9817 2.65631C1.9817 2.27711 2.20921 1.82966 3.06873 1.82966C3.93351 1.85465 4.77549 2.11275 5.50572 2.57668C5.52487 2.59065 5.54776 2.59858 5.57145 2.59943C5.6258 2.59943 5.66372 2.54508 5.66372 2.45787V0.847534C5.67451 0.750839 5.63489 0.655378 5.55881 0.594735C4.85745 0.188019 4.05445 -0.00976925 3.24443 0.0246721"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_3_Copy}    >
						<Text style = {noneModeStyles._Photo_card_psd}   >
							Мэдээлэлзүй.psd
						</Text>
						<Text style = {noneModeStyles._15_MB}   >
							15 MB
						</Text>
					</View>
				</View>
				<Text style = {noneModeStyles._Maria_Nkechi_Copy}   >
					А. Нэргүй
				</Text>
			</View>
			<View style = {noneModeStyles._bottom_bar}    >
				<View style = {noneModeStyles._Bottom_bar}    >
					<View style = {noneModeStyles._Rectangle_Copy_16}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_11_2}    >
					<View style = {noneModeStyles._Group_7}    >
						<View style = {noneModeStyles._Navigation___House_01}    >
							<View style = {noneModeStyles._layer_0354f8}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_layer_0354f8();}} onStartShouldSetResponderCapture = {() => true}>
								<View style = {noneModeStyles._layer_951398}   >
									<Svg style={{height: 27, width: 26}} viewBox = "0 0 26 27">
										<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M24.4584 10.5622L13.9832 1.3964C13.419 0.90272 12.5765 0.902719 12.0123 1.3964L1.53717 10.5622C1.21242 10.8463 1.02614 11.2568 1.02614 11.6884V24.4774C1.02614 25.3039 1.69612 25.9738 2.52259 25.9738H8.5084C9.33487 25.9738 10.0049 25.3039 10.0049 24.4774V18.4916C10.0049 17.6651 10.6748 16.9951 11.5013 16.9951H14.4942C15.3207 16.9951 15.9907 17.6651 15.9907 18.4916V24.4774C15.9907 25.3039 16.6607 25.9738 17.4871 25.9738H23.4729C24.2994 25.9738 24.9694 25.3039 24.9694 24.4774V11.6884C24.9694 11.2568 24.7831 10.8463 24.4584 10.5622Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_4}    >
						<View style = {noneModeStyles._System___Camera}    >
							<View style = {noneModeStyles._layer_625a0e}    >
								<View style = {noneModeStyles._layer_b821a5}   >
									<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
										<Path fill = {"none"}   stroke = {"#F1A93D"} strokeWidth = {2} d = "M6 11C8.76142 11 11 8.76143 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76143 3.23858 11 6 11Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_cebace}    >
								<View style = {noneModeStyles._layer_cfde28}   >
									<Svg style={{height: 22, width: 32}} viewBox = "0 0 32 22">
										<Path fill = {"none"}   stroke = {"#F1A93D"} strokeWidth = {2} d = "M29.3333 1H2.66667C1.74619 1 1 1.74619 1 2.66667V19.3333C1 20.2538 1.74619 21 2.66667 21H29.3333C30.2538 21 31 20.2538 31 19.3333V2.66667C31 1.74619 30.2538 1 29.3333 1Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_279f9b}    >
								<View style = {noneModeStyles._layer_a6ac4a}   >
									<Svg style={{height: 7, width: 15}} viewBox = "0 0 15 7">
										<Path fill = {"none"}   stroke = {"#F1A93D"} strokeWidth = {2} d = "M10.8218 1H3.22429C2.50691 1 1.87001 1.45905 1.64315 2.13962L1.0876 3.80629C0.72786 4.8855 1.53114 6 2.66874 6H11.3773C12.5149 6 13.3182 4.8855 12.9585 3.80629L12.4029 2.13962C12.176 1.45905 11.5391 1 10.8218 1Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_6}    >
						<View style = {noneModeStyles._User___User_01}    >
							<View style = {noneModeStyles._layer_6788ee}    >
								<View style = {noneModeStyles._layer_3617ae}   >
									<Svg style={{height: 11, width: 20}} viewBox = "0 0 20 11">
										<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M1.02326 9.97674C1.02326 5.03187 5.03187 1.02326 9.97674 1.02326C14.9216 1.02326 18.9302 5.03187 18.9302 9.97674"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_e36be8}    >
								<View style = {noneModeStyles._layer_584bc4}   >
									<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
										<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_9_2}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Group_9_2();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._Menu___Menu_Alt_05}    >
							<View style = {noneModeStyles._layer_818f14}    >
								<View style = {noneModeStyles._layer_f01e9e}   >
									<Svg style={{height: 2, width: 14}} viewBox = "0 0 14 2">
										<Path fill = {"none"}   stroke = {"#5C68FF"} strokeWidth = {2} d = "M1 1L12.6667 1"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_731c59}    >
								<View style = {noneModeStyles._layer_6be76c}   >
									<Svg style={{height: 2, width: 23}} viewBox = "0 0 23 2">
										<Path fill = {"none"}   stroke = {"#5C68FF"} strokeWidth = {2} d = "M1 1H21.4167"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_f6da51}    >
								<View style = {noneModeStyles._layer_1a3176}   >
									<Svg style={{height: 2, width: 14}} viewBox = "0 0 14 2">
										<Path fill = {"none"}   stroke = {"#5C68FF"} strokeWidth = {2} d = "M1 1L12.6667 1"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_8}    >
						<View style = {noneModeStyles._layer_9ce562}    >
							<View style = {noneModeStyles._layer_e623d2}   >
								<Svg style={{height: 30, width: 30}} viewBox = "0 0 30 30">
									<Path fill = {"none"}   stroke = {"#303030"} strokeWidth = {2} d = "M11.8889 29H18.1111C18.9702 29 19.6667 28.3036 19.6667 27.4444V19.6667H27.4444C28.3036 19.6667 29 18.9702 29 18.1111V11.8889C29 11.0298 28.3036 10.3333 27.4444 10.3333L19.6667 10.3333V2.55556C19.6667 1.69645 18.9702 1 18.1111 1H11.8889C11.0298 1 10.3333 1.69645 10.3333 2.55556L10.3333 10.3333L2.55556 10.3333C1.69645 10.3333 1 11.0298 1 11.8889V18.1111C1 18.9702 1.69645 19.6667 2.55556 19.6667L10.3333 19.6667V27.4444C10.3333 28.3036 11.0298 29 11.8889 29Z"/>
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
export default Page_Irts

const noneModeStyles = StyleSheet.create({
_page5: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(252, 251, 251)",
	},
_activity: {
	width: 347,
	height: 28,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 16,
	top: 64,
	},
_Activity: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 4},
		{translateY: -14},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
__: {
	width: 4.03198,
	height: 16.032,
	position: "absolute",
	transform: [
		{translateX: 332.984},
		{translateY: 5.58401},
	],
	},
_activity_2: {
	width: 375,
	height: 599,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 116,
	},
_Group_2: {
	width: 343,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 16},
	],
	},
_Group: {
	width: 236,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 50},
	],
	},
_Amarachi_Nkechi: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -14.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Updated_screen_on_Gr: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: 3.5},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Just_now: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 298},
		{translateY: -20.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_17_Copy: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 0,
	top: 1,
	},
_Rectangle: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_2: {
	width: 40,
	height: 40,
	position: "absolute",
	},
_Mask_3: {
	width: 40,
	height: 40,
	position: "absolute",
	},
_Rectangle_container: {
	width: 46.6667,
	height: 46.6667,
	position: "absolute",
	transform: [
		{translateX: -4},
		{translateY: -1.33334},
	],
	},
_Rectangle_2: {
	width: "100%",
	height: "100%",
	borderRadius: 25,
	},
_Group_2: {
	width: 195,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 66},
		{translateY: 346},
	],
	},
_Amarachi_Nkechi_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Updated_file_on_Resp: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: 3.5},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Sun__16_July_2021: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 280},
		{translateY: 46.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Sun__16_July_2021_Copy_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 280},
		{translateY: 128.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_3: {
	width: 196,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 67},
		{translateY: 82},
	],
	},
_Amar_Nkechi: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Add_photo_on_Grocery: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: 3.5},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_2: {
	width: 208,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 67},
		{translateY: 428},
	],
	},
_Mario_Niketh: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Attachment_Landing_p: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: 3.5},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy: {
	width: 186,
	height: 17,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 67},
		{translateY: 240},
	],
	},
_Attachment_Grocery_W: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -8.5},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Shawni_Pelikan: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 67},
		{translateY: 258.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Attachment_Grocery_W_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 67},
		{translateY: 282.5},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_13_05: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 335},
		{translateY: -217.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Sun__16_July_2021_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 280},
		{translateY: -83.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Sun__16_July_2021_Copy: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 280},
		{translateY: 258.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Rectangle_3: {
	width: 375,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 61},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Rectangle_Copy_5: {
	width: 375,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 407},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Rectangle_Copy_9: {
	width: 375,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 537},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Rectangle_Copy_3: {
	width: 375,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 195},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Rectangle_Copy_4: {
	width: 375,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 325},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Rectangle_container_2: {
	width: 59,
	height: 44,
	position: "absolute",
	transform: [
		{translateX: 67},
		{translateY: 131},
	],
	},
_Rectangle_4: {
	width: "100%",
	height: "100%",
	borderRadius: 2,
	},
_Rectangle_Copy_container: {
	width: 59,
	height: 44,
	position: "absolute",
	transform: [
		{translateX: 134},
		{translateY: 131},
	],
	},
_Rectangle_Copy: {
	width: "100%",
	height: "100%",
	borderRadius: 2,
	},
_Rectangle_Copy_2_container: {
	width: 59,
	height: 44,
	position: "absolute",
	transform: [
		{translateX: 201},
		{translateY: 131},
	],
	},
_Rectangle_Copy_2: {
	width: "100%",
	height: "100%",
	borderRadius: 2,
	},
_Rectangle_Copy_10: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 16,
	top: 82,
	},
_Mask_4: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Mask_5: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Rectangle_container_3: {
	width: 47.8333,
	height: 47.8333,
	position: "absolute",
	transform: [
		{translateX: -4.09998},
		{translateY: -2.73334},
	],
	},
_Rectangle_5: {
	width: "100%",
	height: "100%",
	},
_Rectangle_Copy_11: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 16,
	top: 428,
	},
_Mask_6: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Mask_7: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Rectangle_container_4: {
	width: 47.8333,
	height: 47.8333,
	position: "absolute",
	transform: [
		{translateX: -4.09998},
		{translateY: -2.73334},
	],
	},
_Rectangle_6: {
	width: "100%",
	height: "100%",
	},
_Rectangle_Copy_10_2: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 16,
	top: 216,
	},
_Mask_8: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Mask_9: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Rectangle_container_5: {
	width: 47.8333,
	height: 47.8333,
	position: "absolute",
	transform: [
		{translateX: -4.09998},
		{translateY: -1.36666},
	],
	},
_Rectangle_7: {
	width: "100%",
	height: "100%",
	},
_Rectangle_Copy_12: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 16,
	top: 558,
	},
_Mask_10: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Mask_11: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Rectangle_container_6: {
	width: 47.8333,
	height: 47.8333,
	position: "absolute",
	transform: [
		{translateX: -4.09998},
		{translateY: -1.36667},
	],
	},
_Rectangle_8: {
	width: "100%",
	height: "100%",
	},
_Group_9: {
	width: 126,
	height: 40,
	position: "absolute",
	left: 67,
	top: 265,
	},
_vscode_icons_file_type_pdf: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 0,
	top: 0,
	},
_ViewBox: {
	width: 40,
	height: 40,
	position: "absolute",
	},
_layer_4c2921: {
	position: "absolute",
	transform: [
		{translateX: 11.33},
		{translateY: 3.9525},
	],
	},
_layer_09a399: {
	},
_layer_9dc9a5: {
	position: "absolute",
	transform: [
		{translateX: 11.33},
		{translateY: 3.9525},
	],
	},
_layer_1603bf: {
	},
_layer_e7eada: {
	position: "absolute",
	transform: [
		{translateX: 25.8275},
		{translateY: 3.9525},
	],
	},
_layer_918f5f: {
	},
_layer_cf4c7e: {
	position: "absolute",
	transform: [
		{translateX: 25.8275},
		{translateY: 3.9525},
	],
	},
_layer_256892: {
	},
_layer_ca7b8a: {
	position: "absolute",
	transform: [
		{translateX: 6.67377},
		{translateY: 8.12},
	],
	},
_layer_02d07b: {
	},
_Shape: {
	width: 19.1479,
	height: 18.711,
	position: "absolute",
	transform: [
		{translateX: 13.5671},
		{translateY: 13.8937},
	],
	},
_layer_a7c3d7: {
	position: "absolute",
	transform: [
		{translateX: 4.6875},
		{translateY: 6.21},
	],
	},
_layer_459a87: {
	},
_Shape_2: {
	width: 22.3825,
	height: 8.12375,
	position: "absolute",
	transform: [
		{translateX: 4.29626},
		{translateY: 5.775},
	],
	},
_Shape_3: {
	width: 10.4225,
	height: 4.86761,
	position: "absolute",
	transform: [
		{translateX: 10.3275},
		{translateY: 7.27094},
	],
	},
_Group_3: {
	width: 82,
	height: 28,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 44},
		{translateY: 6},
	],
	},
_Presentation_pdf: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -14},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_5_MB: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -1},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Rectangle_Copy_10_3: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 16,
	top: 346,
	},
_Mask_12: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Mask_13: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Rectangle_container_7: {
	width: 47.8333,
	height: 47.8333,
	position: "absolute",
	transform: [
		{translateX: -4.09998},
		{translateY: -2.73333},
	],
	},
_Rectangle_9: {
	width: "100%",
	height: "100%",
	},
_Group_11: {
	width: 134,
	height: 40,
	position: "absolute",
	left: 67,
	top: 477,
	},
_vscode_icons_file_type_photoshop2: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 0,
	top: 0,
	},
_ViewBox_2: {
	width: 40,
	height: 40,
	position: "absolute",
	},
_layer_1cff29: {
	position: "absolute",
	transform: [
		{translateX: 11.0463},
		{translateY: 2.5},
	],
	},
_layer_5d64ce: {
	},
_layer_bbd2a3: {
	position: "absolute",
	transform: [
		{translateX: 2.81622},
		{translateY: 4.36626},
	],
	},
_layer_b4930a: {
	},
_layer_2729ed: {
	position: "absolute",
	transform: [
		{translateX: 30.1238},
		{translateY: 2.5},
	],
	},
_layer_4c2201: {
	},
_Shape_4: {
	width: 3.57556,
	height: 6.29277,
	position: "absolute",
	transform: [
		{translateX: 8.875},
		{translateY: 6.10098},
	],
	},
_layer_e699cc: {
	position: "absolute",
	transform: [
		{translateX: 13.6275},
		{translateY: 6.04642},
	],
	},
_layer_11eb16: {
	},
_Shape_5: {
	width: 4.10254,
	height: 6.34402,
	position: "absolute",
	transform: [
		{translateX: 18.045},
		{translateY: 6.04607},
	],
	},
_Shape_6: {
	width: 7.80377,
	height: 12.7238,
	position: "absolute",
	transform: [
		{translateX: 16.7938},
		{translateY: 18.275},
	],
	},
_layer_2f25df: {
	position: "absolute",
	transform: [
		{translateX: 25.6353},
		{translateY: 21.5018},
	],
	},
_layer_afdafe: {
	},
_Group_3_Copy: {
	width: 90,
	height: 28,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 44},
		{translateY: 6},
	],
	},
_Photo_card_psd: {
	width: 99.4737,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -14},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_15_MB: {
	width: 31.9737,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -1},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Maria_Nkechi_Copy: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 67},
		{translateY: -82.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
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
_Group_11_2: {
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
_layer_0354f8: {
	position: "absolute",
	transform: [
		{translateX: 5.83331},
		{translateY: 4.85446},
	],
	},
_layer_951398: {
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
_layer_625a0e: {
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16.6667},
	],
	},
_layer_b821a5: {
	},
_layer_cebace: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 11.6667},
	],
	},
_layer_cfde28: {
	},
_layer_279f9b: {
	position: "absolute",
	transform: [
		{translateX: 13.9778},
		{translateY: 6.66666},
	],
	},
_layer_a6ac4a: {
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
_layer_6788ee: {
	position: "absolute",
	transform: [
		{translateX: 6.25},
		{translateY: 17.5},
	],
	},
_layer_3617ae: {
	},
_layer_e36be8: {
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 3.75},
	],
	},
_layer_584bc4: {
	},
_Group_9_2: {
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
_layer_818f14: {
	position: "absolute",
	transform: [
		{translateX: 7.29163},
		{translateY: 24.7917},
	],
	},
_layer_f01e9e: {
	},
_layer_731c59: {
	position: "absolute",
	transform: [
		{translateX: 7.29163},
		{translateY: 17.5},
	],
	},
_layer_6be76c: {
	},
_layer_f6da51: {
	position: "absolute",
	transform: [
		{translateX: 16.0416},
		{translateY: 10.2083},
	],
	},
_layer_1a3176: {
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
_layer_9ce562: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 12},
	],
	},
_layer_e623d2: {
	},
})

