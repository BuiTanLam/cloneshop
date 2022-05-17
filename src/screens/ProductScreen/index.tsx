import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useRoute} from '@react-navigation/native';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);
  
  const route = useRoute();
  console.log(route.params); 

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      {/* Image carousel */}
      <ImageCarousel images={product.images} />

      {/* Title */}
      <Text style={styles.title}>{product.title}</Text>

      {/* Option selector */}
      <View style={styles.picker}>
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>
      </View>

      {/* Price */}
      <Text style={styles.price}>
      <Text>Giá bán: </Text>
        {product.price}đ
        {product.oldPrice && (
          <Text style={styles.oldprice}>{product.oldPrice}đ</Text>
        )}
      </Text>

      {/* Quantiti selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Button */}
      <Button
        text={'Thêm Giỏ Hàng'}
        onPress={() => {
          console.warn('Đã thêm vào giỏ hàng');
        }}
        containerStyles={{backgroundColor: '#F5B041'}}
      />
      <Button
        text={'Mua Ngay'}
        onPress={() => {
          console.warn('Buy now');
        }}
      />
      
      {/* Description */}
      <Text style={styles.titleDes}>Mô Tả:</Text>
      <Text style={styles.description}> {product.description}</Text>
    </ScrollView>
  );
};

export default ProductScreen;
