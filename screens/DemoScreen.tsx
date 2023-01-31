import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { RootStackParamList } from '../App';
import { Ionicons } from "@expo/vector-icons";

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Demo">;

const DemoScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="bg-[#E5962D] flex-1">
        <TouchableOpacity onPress={navigation.goBack} className="flex-row items-center p-5">
              <Ionicons name="arrow-back" size={50} color="white" />
              <Text className="text-white">Go Back</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DemoScreen