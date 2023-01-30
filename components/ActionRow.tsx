import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

type Props = {
    title: string;
    screen: any; //temporary
    color: string;
    requiresPro?: boolean;
    icon?: any;
    vertical?: boolean;
};

const ActionRow = ({ title, screen, color, requiresPro, icon, vertical }: Props) => {
  return (
    <TouchableOpacity className={`flex m-2 flex-1 justify-center items-center py-5 rounded-lg space-x-2 ${vertical ? "flex-col" : "flex-row"}`} style={{backgroundColor: color}}>
        <Ionicons name={icon} size={30} color="white"/>
        <Text className="text-white font-bold text-base">{title}</Text>
    </TouchableOpacity>
  )
}

export default ActionRow