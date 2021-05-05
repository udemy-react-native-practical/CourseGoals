import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listView}>
            <Text>{props.title}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    listView: {
        margin: 10,
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalItem;
