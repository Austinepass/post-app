import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import IconItem from '../component/IconItem'

function MyButton({title}) {
  return (
			<TouchableOpacity>
				<View
					style={{
						backgroundColor: "dodgerblue",
						borderRadius: "50%",
						alignItems: "center",
                        margin: 8,
                        marginHorizontal: 16,
                        width: '50%',
                        alignSelf: 'center'
					}}>
					<IconItem size={25} color='tomato' text={title} />
				</View>
			</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
  container: {}
});

export default MyButton;