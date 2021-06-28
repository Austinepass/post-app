import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import MyButton from "./MyButton";

function InputField(props) {
	return (
		<View style={styles.container}>
			<TextInput style={styles.input} placeholder='Add comment...' />
			<MyButton title='Comment' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 200,
	},
	input: {
		backgroundColor: "white",
        height: 70,
        margin: 8,
	},
});

export default InputField;
