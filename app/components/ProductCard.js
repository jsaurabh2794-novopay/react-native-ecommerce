import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appColors} from '../utils/appColors';
import Label from './Label';

export default function ProductCard({navigation, item}) {
  console.log(item.variants);
  const {title, description, price, thumbnail, isNew} = item;
  return (
    <Pressable onPress={() => navigation.navigate('ProductDetails',{item})} style={{}}>
      <View
        style={{
           height: scale(140),
           width: scale(160),
           backgroundColor:appColors.lightGray,
        }}>
        <Image source={{uri:thumbnail}} style={{width: 200, height: 164}}/>
        {isNew && (
          <View
            style={{
              backgroundColor:appColors.red,
              position: 'absolute',
              top: scale(10),
              right: scale(20),
              padding: scale(3),
              borderRadius: scale(3),
              paddingHorizontal: scale(10),
            }}>
             
            <Label text="New" style={{fontSize:scale(10), color:appColors.white}} />
          </View>
        )}
      </View>
      <View style={{paddingVertical: scale(3)}}>
        <Label text={title} style={{fontSize: scale(18), fontWeight: '500'}} />
      </View>

      {/* {<View style={{paddingVertical: scale(1)}}>
        <Label
          text={description}
          style={{fontSize: scale(13), color: appColors.darkGray}}
        />
      </View>} */}

      <View style={{paddingVertical: scale(5)}}>
        <Label
          text={price}
          style={{
            fontSize: scale(18),
            color: appColors.primary,
            fontWeight: '500',
          }}
        />
      </View>
    </Pressable>
  );
}
