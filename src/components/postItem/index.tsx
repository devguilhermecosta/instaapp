import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {PostProps} from '../../interfaces';
import likedImg from '../../utils/images/likeada.png';
import notLikedImg from '../../utils/images/like.png';
import commentImg from '../../utils/images/comment.png';
import sendImg from '../../utils/images/send.png';

export interface PostDataProps {
  data: PostProps;
}

export default function PostItem(props: PostDataProps): React.JSX.Element {
  function getLikes(likers: number) {
    if (likers <= 0) return;

    return (
      <Text style={styles.likesIndicator}>
        {
          likers == 1 
          ? likers + ' ' + 'curtida'
          : likers + ' ' + 'curtidas'
        }
      </Text>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerProfile}>
        <Image
          source={{ uri: props.data.imgProfile }}
          style={styles.imageProfile}
        />
        <Text style={styles.nameProfile}>
          {props.data.name}
        </Text>
      </View>

      <Image
        source={{ uri: props.data.imgPost }}
        style={styles.imagePost}
      />

      <View style={styles.postIndicator}>
        <TouchableOpacity>
          <Image
            style={styles.like}
            source={props.data.liked ? likedImg : notLikedImg}
          />
        </TouchableOpacity>


        <TouchableOpacity>
          <Image
            style={styles.like}
            source={commentImg}
          />
        </TouchableOpacity>


        <TouchableOpacity>
          <Image
            style={styles.like}
            source={sendImg}
          />
        </TouchableOpacity>
      </View>

      {getLikes(props.data.likers)}

      <View style={styles.commentsContainer}>
        <Text style={styles.commentsName}>
          {props.data.name}
        </Text>
        <Text style={styles.commentsDescription}>
          {props.data.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  spaceElement: {

  },
  container: {
    paddingTop: 10,
  },
  headerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameProfile: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  imagePost: {
    height: 400,
    objectFit: 'cover',
  },
  like: {
    width: 30,
    height: 30,
  },
  postIndicator: {
    flexDirection: 'row',
    columnGap: 8,
    marginTop: 10,
    marginLeft: 10,
  },
  likesIndicator: {
    marginLeft: 10,
    fontWeight: '700',
    color: '#000',
  },
  commentsContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  commentsName: {
    fontWeight: '700',
    color: '#000',
  },
  commentsDescription: {
    color: '#000',
  }
})
