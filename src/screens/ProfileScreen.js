
import { ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Feather } from '@react-native-vector-icons/feather'

import {
    YStack,
    XStack,
    Text,
} from 'tamagui'

const details = [
    {
        icon: 'smartphone',
        title: 'Платформы',
        value: 'iOS и Android',
    },
    {
        icon: 'layers',
        title: 'Интерфейс',
        value: 'Tamagui',
    },
    {
        icon: 'code',
        title: 'Язык',
        value: 'JavaScript',
    },
    {
        icon: 'moon',
        title: 'Оформление',
        value: 'Dark Mode',
    },
]

export default function ProfileScreen() {
    const insets = useSafeAreaInsets()

    return (
        <YStack flex={1} backgroundColor="#0B0F17">

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 22,
                    paddingTop: insets.top + 18,
                    paddingBottom: 28,
                }}
            >
                <YStack gap="28px">

                    {/* Заголовок */}
                    <YStack gap="8px">
                        <Text
                            color="#8792A5"
                            fontSize={11}
                            fontWeight="700"
                            letterSpacing={1.5}
                        >
                            PERSONAL SPACE / 002
                        </Text>

                        <Text color="#FFFFFF" fontSize={34} fontWeight="800">
                            Профиль
                        </Text>

                        <Text color="#929BAD" fontSize={14}>
                            Информация о твоём приложении.
                        </Text>
                    </YStack>

                    {/* Карточка профиля */}
                    <YStack
                        backgroundColor="#19263D"
                        borderRadius="25px"
                        borderWidth={1}
                        borderColor="#2B405F"
                        padding="22px"
                        alignItems="center"
                        gap="13px"
                    >
                        <YStack
                            width="86px"
                            height="86px"
                            borderRadius="28px"
                            backgroundColor="#304A77"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Feather name="user" size={38} color="#FFFFFF" />
                        </YStack>

                        <YStack alignItems="center" gap="5px">
                            <Text color="#FFFFFF" fontSize={22} fontWeight="800">
                                Мой профиль
                            </Text>

                            <Text color="#A5B1C5" fontSize={13}>
                                Пространство настроено
                            </Text>
                        </YStack>

                        <XStack
                            backgroundColor="#203B35"
                            paddingHorizontal="12px"
                            paddingVertical="7px"
                            borderRadius="20px"
                            alignItems="center"
                            gap="7px"
                        >
                            <YStack
                                width="7px"
                                height="7px"
                                borderRadius="50%"
                                backgroundColor="#4ADE80"
                            />

                            <Text color="#86E6A4" fontSize={11} fontWeight="700">
                                ACTIVE PROJECT
                            </Text>
                        </XStack>
                    </YStack>

                    {/* Информация */}
                    <YStack gap="14px">

                        <Text
                            color="#8792A5"
                            fontSize={11}
                            fontWeight="700"
                            letterSpacing={1.4}
                        >
                            ИНФОРМАЦИЯ О ПРОЕКТЕ
                        </Text>

                        <YStack
                            backgroundColor="#151C29"
                            borderRadius="22px"
                            borderWidth={1}
                            borderColor="#252F40"
                            paddingHorizontal="17px"
                        >
                            {details.map((item, index) => (
                                <XStack
                                    key={item.title}
                                    alignItems="center"
                                    paddingVertical="17px"
                                    borderBottomWidth={index === details.length - 1 ? 0 : 1}
                                    borderBottomColor="#252F40"
                                    gap="13px"
                                >
                                    <YStack
                                        width="40px"
                                        height="40px"
                                        borderRadius="13px"
                                        backgroundColor="#202D43"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Feather
                                            name={item.icon}
                                            size={19}
                                            color="#AFC5FF"
                                        />
                                    </YStack>

                                    <YStack flex={1} gap="4px">
                                        <Text color="#FFFFFF" fontSize={14} fontWeight="600">
                                            {item.title}
                                        </Text>

                                        <Text color="#8792A5" fontSize={12}>
                                            {item.value}
                                        </Text>
                                    </YStack>

                                    <Feather
                                        name="check-circle"
                                        size={18}
                                        color="#4ADE80"
                                    />
                                </XStack>
                            ))}
                        </YStack>
                    </YStack>

                    {/* Нижняя карточка */}
                    <YStack
                        backgroundColor="#151C29"
                        borderRadius="19px"
                        padding="17px"
                        gap="7px"
                    >
                        <Text color="#AFC5FF" fontSize={12} fontWeight="700">
                            VADIM APP
                        </Text>

                        <Text color="#8792A5" fontSize={12}>
                            Первый проект на Expo, React Native
                            и Tamagui. Создан с использованием JavaScript.
                        </Text>
                    </YStack>

                </YStack>
            </ScrollView>
        </YStack>
    )
}
