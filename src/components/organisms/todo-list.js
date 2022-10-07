import {View, SectionList} from 'react-native';
import React from 'react';
import Placeholder from '../molecules/placeholder';
import {GRAY_MEDIUM} from '../../styles/colors';
import VerticalSpace from '../../components/atoms/vertical-spacer';
import TodoCard from '../../components/molecules/todo-card';
import DateHeader from '../../components/atoms/date-header';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {DeleteTodo} from '../../redux/actions/todoActions';

export default function TodoList({listData, toggleEditModal}) {
  const dispatch = useDispatch();

  return (
    <SectionList
      sections={listData}
      ListEmptyComponent={() => (
        <Placeholder
          iconName="list"
          iconSize={50}
          placeholderText="No Todos Found"
          iconColor={GRAY_MEDIUM}
          textSize={25}
          marginTop={130}
          textColor={GRAY_MEDIUM}
        />
      )}
      style={{width: '100%'}}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index, section}) => (
        <TodoCard
          title={item.toString()}
          onEditClicked={() =>
            toggleEditModal({content: item, index: index, date: section.title})
          }
          onDeleteClicked={() => dispatch(DeleteTodo(section.title, index))}
        />
      )}
      contentContainerStyle={{
        paddingBottom: 400,
      }}
      renderSectionHeader={({section: {title}}) => (
        <View>
          <VerticalSpace height={20} />
          <DateHeader text={moment(title).format('Do MMM YYYY')} />
        </View>
      )}
    />
  );
}
