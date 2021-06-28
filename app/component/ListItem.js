import React from "react";
import { View, StyleSheet, ImageBackground, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NameItem from "./NameItem";

function ListItem({image, name, subtext, post, likes, date, onPress}) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<NameItem image={image} name={name} subtext={subtext} />
				<Image style={styles.background} source={image} />

				<View>
					<Text style={styles.texts}>{post}</Text>
				</View>
				<View style={styles.like_header}>
					<View style={{ flexDirection: "row" }}>
						<MaterialCommunityIcons
							name='heart'
							size={22}
							color='tomato'
							style={styles.like_icon}
						/>
						<Text style={styles.texts}>{likes}</Text>
					</View>
					<View style={{ flexDirection: "row" }}>
						<MaterialCommunityIcons
							name='comment'
							size={22}
							color='grey'
							style={styles.like_icon}
						/>
						<Text style={styles.texts}>{likes * 7}</Text>
					</View>
					<Text style={[{ margin: 8 }, styles.grey]}>{date}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 8,
		backgroundColor: "white",
		borderRadius: 8,
		shadowOpacity: .6,
		shadowColor: "tomato",
		shadowRadius: 5,
	},
	background: {
		width: "100%",
		height: 250,
	},
	icon: {
		width: 50,
		height: 50,
		borderRadius: 30,
	},
	header: {
		flexDirection: "row",
		margin: 8,
	},
	like_header: {
		flexDirection: "row",
		margin: 8,
		justifyContent: "space-between",
	},
	texts: {
		margin: 8,
	},
	like_icon: {
		marginTop: 5,
	},
	grey: {
		color: "grey",
	},
});

export default ListItem;
