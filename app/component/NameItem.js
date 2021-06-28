import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

function NameItem({image, name, subtext}) {
  return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={image} style={styles.icon} />
				<View style={styles.texts}>
					<Text>{name}</Text>
					<Text style={styles.grey}>{subtext}</Text>
				</View>
			</View>
			<View
				style={styles.line}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	header: {
		flexDirection: "row",
		margin: 8,
	},
	icon: {
		width: 50,
		height: 50,
		borderRadius: 30,
	},
	line: {
		width: "100%",
		height: 0.4,
		backgroundColor: "grey",
		marginVertical: 10,
	},
	grey: {
		color: "grey",
	},
	texts: {
		margin: 8,
	},
});

export default NameItem;