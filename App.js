import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import axios from 'axios';
import ListItem from './components/ListItem';

export default function App() {
  const [listing, setListing] = useState(['']);

  //getting data from API
  const getData = async () => {
    await axios
      .get('https://data.cityofnewyork.us/resource/23z9-6uk9.json')
      .then(res => {
        console.log(JSON.stringify(res.data));
        setListing(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      {listing && <ListItem data={listing} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
