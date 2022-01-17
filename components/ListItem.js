import React, { useEffect,useState,useRef } from 'react';

//import all the components we are going to use
import { FlatList, View, Text, SafeAreaView, StyleSheet, Dimensions, Animated, Easing } from 'react-native';



const ListItem = ({data}) => {
  const [listItems, setListItems] = useState(data);
  const translateX = useRef(new Animated.Value(Dimensions.get("window").height)).current 
  useEffect(()=>{
    Animated.timing(translateX,{toValue:0,duration:2000,useNativeDriver: true}).start();
  })
 

  const ItemSeparatorView = () => {
    return (
      //Item Separator
      <View 
        style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
      />
    );
  };

  const getItem = (item) => {
    //Function for click on an item
    alert('Id : ' + item.dbn + ' Value : ' + item.school_name);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={data}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={({item})=>{
              return(
                <Animated.View style={{transform:[{translateY:translateX}]}} >
                <Text  key={item.dbn} style={styles.item} onPress={() => getItem(item)}>
                  {item.school_name}
                </Text>
              </Animated.View>
              )

          }}
          keyExtractor={(item) => item?.dbn}
        />
      </View>
       
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
    height:"80%"
    
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default ListItem;