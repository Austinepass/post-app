import React from "react";
import {
	View,
	StyleSheet,
	ImageBackground,
	Text,
	Image,
	TouchableOpacity,
} from "react-native";
import IconItem from "../component/IconItem";

function AccountScreen(props) {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.background}
				source={require("../../assets/drip.jpeg")}
				blurRadius={8}>
				<Image
					source={require("../../assets/drip.jpeg")}
					style={styles.image}
				/>
				<Text style={styles.text}>John Drip</Text>
				<View style={styles.card}>
					<IconItem
						icon='email'
						size={25}
						color='dodgerblue'
						text='joghdrip@gmail.com'
					/>

					<IconItem
						icon='phone'
						size={25}
						color='dodgerblue'
						text='+234706433843'
					/>

					<IconItem
						icon='web'
						size={25}
						color='dodgerblue'
						text='www.drippy.com'
					/>
					<TouchableOpacity>
						<View
							style={{
								backgroundColor: "dodgerblue",
								borderRadius: "50%",
								alignItems: "center",
							}}>
							<IconItem size={25} color='tomato' text='Message' />
						</View>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		width: "100%",
		height: 500,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20,
	},
	card: {
		width: "90%",
		height: 200,
		borderRadius: 10,
		paddingTop: 10,
		top: 80,
		paddingHorizontal: 40,
		backgroundColor: "white",
		shadowOpacity: 1,
		shadowColor: "dodgerblue",
		shadowRadius: 20,
		shadowOffset: { width: 10, height: 10 },
	},
	container: {
		flex: 1,
		alignItems: "center",
	},
	image: {
		width: 200,
		height: 200,
		borderRadius: 100,
	},
	image_wrap: {
		height: "100%",
		width: "100%",
	},
	line: {
		width: "100%",
		height: 1,
		backgroundColor: "red",
		margin: 10,
	},
	text: {
		fontSize: 25,
        fontWeight: 'bold',
		margin: 8,
	},
});

export default AccountScreen;
