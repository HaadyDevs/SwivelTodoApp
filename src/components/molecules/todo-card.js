import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TodoText from '../atoms/todo-text';
import {
  BORDER,
  GRAY_DARK,
  GRAY_MEDIUM,
  RED_TEXT,
  WHITE,
} from '../../styles/colors';
import IconButton from '../atoms/icon-button';

export default function TodoCard({
  title,
  onEditClicked,
  onDeleteClicked,
  todoIndex,
}) {
  return (
    <View style={styles.todoCard}>
      <View style={styles.textContent}>
        <TodoText text={title} />
      </View>
      <View style={styles.iconContent}>
        <IconButton
          iconColor={GRAY_DARK}
          iconName={'edit'}
          iconSize={23}
          onClick={onEditClicked}
        />
        <IconButton
          iconColor={RED_TEXT}
          iconName={'delete'}
          iconSize={23}
          onClick={onDeleteClicked}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '20%',
    //backgroundColor: 'pink',
  },
  textContent: {
    width: '80%',
    // backgroundColor: 'green',
  },
  todoCard: {
    backgroundColor: WHITE,
    flexDirection: 'row',
    borderColor: BORDER,
    borderWidth: 1,
    borderRadius: 6,
    padding: 18,
    width: '100%',
    marginVertical: 8,
    shadowColor: '#ba9595',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});
