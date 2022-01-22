import React from 'react';
import {Card, Text, Avatar} from '@ui-kitten/components';
import {View, StyleSheet, Chip} from 'react-native';

const ProfileCard = props => {
  return (
    <Card
      style={{
        margin: 10,
        borderRadius: 15,
      }}>
      <View style={styles.card}>
        <Avatar
          style={styles.profile}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKRizGW6Md-BUD5MchQ_UWgYZVKwNQxoPzQte9r0fwSQzBV6h',
          }}
        />
        <View style={styles.right}>
          <Text style={{fontSize: 30, marginBottom: 10}}>{props.name}</Text>
          <View style={styles.sports}>
            <Text style={styles.chip}>Soccer</Text>
            <Text style={styles.chip}>More</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
  },
  profile: {
    height: 120,
    width: 120,
  },
  right: {
    marginHorizontal: '5%',
    marginVertical: '5%',
  },
  chip: {
    borderRadius: 10,
    borderColor: ' black',
    borderWidth: 1,
    textAlign: 'center',
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  sports: {
    flexDirection: 'row',
  },
});

export default ProfileCard;
