import { Text, SafeAreaView, Image, TouchableOpacity, ScrollView, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

//external imports
import ActionRow from '../components/ActionRow';
import { RootStackParamList } from '../App';
import useRevenueCat from '../hooks/useRevenueCat';

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  const { currentOffering, customerInfo, isProMember } = useRevenueCat();


  return (
    <SafeAreaView className="flex-1 bg-gray-200 relative">
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("Paywall")} className="absolute z-50 top-4 right-8 items-center">
          <Ionicons name="person-circle" size={30} color="#E5962D" />
          <Text className="text-center text-[#E5962D]">{isProMember ? "PRO" : "UPRGADE"}</Text>
        </TouchableOpacity>
        <Image 
          source={{ uri: "https://i.imgur.com/e14NE49.png"}}
          className="w-full h-64"
        />
        <View className="mx-5">
          <View className="flex-row justify-between space-x-2">
            <ActionRow
              title="Track Workout"
              screen="Demo"
              color="#E5962D"
              icon="fitness"
              vertical 
            />
            <ActionRow
              title="Browse Workouts"
              screen="Demo"
              color="#1982C4"
              icon="library"
              vertical 
            />
          </View>
          <ActionRow
            title="Contact with Friends"
            screen="Demo"
            color="#F44174"
            icon="share-social" 
          />
          <ActionRow
            title="Add an Exercise"
            screen="Demo"
            color="#8AC926"
            icon="add-circle"
            requiresPro 
          />
          <ActionRow
            title="Create a Routine"
            screen="Demo"
            color="#C03221"
            icon="md-time"
            requiresPro 
          />
          <ActionRow
            title="Join Challenges"
            screen="Demo"
            color="#23967F"
            icon="trophy"
            requiresPro 
          />
        </View>  
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen