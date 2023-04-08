import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

type IconSizeProps = {
    iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
    size: IconSizeProps['iconSizes'];
    name: string;
    color: string;
}

export const IconSizes = {
    s: 18,
    m: 23,
    l: 27,
    xl: 45,
    xxl: 60
};

export const FontAwesomeIcon = ({size, name, color}: IconProps) => (
    <FontAwesome name={name} size={IconSizes[size]} color={color} />
)

export const SimpleLineIcon = ({size, name, color}: IconProps) => (
    <SimpleLineIcons name={name} size={IconSizes[size]} color={color} />
)

export const MaterialCommunityIcon = ({size, name, color}: IconProps) => (
    <MaterialCommunityIcons name={name} size={IconSizes[size]} color={color} />
)
