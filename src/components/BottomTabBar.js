
import { Pressable } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import {
    House,
    UserRound,
} from 'lucide-react-native'

import {
    YStack,
    XStack,
    Text,
} from 'tamagui'

const tabs = {
    Home: {
        label: 'Главная',
        Icon: House,
    },
    Profile: {
        label: 'Профиль',
        Icon: UserRound,
    },
}

export default function BottomTabBar({ state, navigation }) {
    const insets = useSafeAreaInsets()

    return (
        <YStack
            backgroundColor="#0B0F17"
            paddingHorizontal={16}
            paddingTop={12}
            paddingBottom={Math.max(insets.bottom, 12)}
        >
            <XStack
                backgroundColor="#141B29"
                borderRadius={26}
                borderWidth={1}
                borderColor="#263B59"
                padding={7}
                gap={8}
                height={76}
            >
                {state.routes.map((route, index) => {
                    const isFocused = state.index === index
                    const tab = tabs[route.name]

                    if (!tab) return null

                    const Icon = tab.Icon

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        })

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name)
                        }
                    }

                    return (
                        <Pressable
                            key={route.key}
                            onPress={onPress}
                            accessibilityRole="tab"
                            accessibilityState={{
                                selected: isFocused,
                            }}
                            accessibilityLabel={tab.label}
                            style={({ pressed }) => ({
                                flex: 1,
                                opacity: pressed ? 0.8 : 1,
                                transform: [
                                    { scale: pressed ? 0.97 : 1 },
                                ],
                            })}
                        >
                            <YStack
                                flex={1}
                                borderRadius={20}
                                backgroundColor={
                                    isFocused
                                        ? '#263E62'
                                        : 'transparent'
                                }
                                alignItems="center"
                                justifyContent="center"
                                gap={5}
                            >
                                <Icon
                                    size={25}
                                    color={
                                        isFocused
                                            ? '#B9D1FF'
                                            : '#8494AD'
                                    }
                                    strokeWidth={2.2}
                                />

                                <Text
                                    color={
                                        isFocused
                                            ? '#FFFFFF'
                                            : '#8494AD'
                                    }
                                    fontSize={12}
                                    fontWeight={
                                        isFocused ? '700' : '500'
                                    }
                                >
                                    {tab.label}
                                </Text>
                            </YStack>
                        </Pressable>
                    )
                })}
            </XStack>
        </YStack>
    )
}
