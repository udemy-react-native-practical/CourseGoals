import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
      setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };
        
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course Goal" 
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.btnView}>
                    <View style={styles.button}>
                        <Button title="cancel" color={"red"} onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                    {/*<Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />*/}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }, 
      textInput: {
        width: "80%",
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
      },
      btnView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '60%',
      },
      button: {
          width: '40%'
      }
});

export default GoalInput;
