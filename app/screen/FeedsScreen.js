import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from '../component/ListItem';

const users = [
	{
		name: "Amanda Cruise",
		email: "amanda.cruise@gmail.com",
		picture: 'require("../../assets/girl.jpeg")',
		likes: 8,
		date: "May 22 2020 23:27:12",
		post: "Kimberly strikes again!",
	},
	{
		name: "John Craze",
		email: "john.craze@gmail.com",
		picture: 'require("../../assets/girl.jpeg")',
		likes: 89,
		date: "May 22 2020 23:27:12",
		post: "This is not the time for complacencies!",
	},

	{
		name: "Uwa Ebuka",
		email: "ebuka.uwa@gmail.com",
		picture: 'require("../../assets/girl.jpeg")',
		likes: 77,
		date: "May 22 2020 23:27:12",
		post: "Look! What i found in my garage!",
	},
];

function FeedsScreen(props) {
  return (
    <View style={styles.container}>
        <FlatList
        data={users}
        keyExtractor={user => user.email.toString()}
        renderItem={(user) =>
            <ListItem
            image={require('../../assets/')}
            name={user.name}
            email={user.email}
            likes={user.likes}
            post={user.post}
            date={user.date}
            />
        }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});

export default FeedsScreen;