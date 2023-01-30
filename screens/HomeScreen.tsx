import { Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import ActionRow from '../components/ActionRow';

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-200 relative">
      <ScrollView>
        <TouchableOpacity className="absolute z-50 top-4 right-8 items-center">
          <Ionicons name="person-circle" size={30} color="#E5962D" />
          <Text className="text-center text-[#E5962D]">UPGRADE</Text>
        </TouchableOpacity>
        <Image 
          source={{ uri: "https://i.imgur.com/e14NE49.png"}}
          className="w-full h-64"
        />
        <ActionRow
          title="Track Workout"
          screen="Demo"
          color="#E5962D"
          icon="fitness"
          vertical 
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen