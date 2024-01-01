import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Header from './src/components/header';
import {data} from './src/utils/api';
import {PostProps} from './src/interfaces';
import PostItem from './src/components/postItem';

export default function App(): React.JSX.Element {
  const [posts, setPosts] = useState<PostProps[]>(data);

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        data={posts}
        renderItem={({item}) => <PostItem data={item}/>}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})