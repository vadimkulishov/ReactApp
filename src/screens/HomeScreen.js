
import { ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Feather } from '@react-native-vector-icons/feather'

import {
    YStack,
    XStack,
    Text,
    Button,
} from 'tamagui'

export default function HomeScreen({ navigation }) {
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

                    {/* Верхняя панель */}
                    <XStack alignItems="center" justifyContent="space-between">

                        <XStack alignItems="center" gap="12px">
                            <YStack
                                width="46px"
                                height="46px"
                                borderRadius="15px"
                                backgroundColor="#233452"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Feather name="layers" size={23} color="#AFC5FF" />
                            </YStack>

                            <YStack gap="3px">
                                <Text
                                    color="#FFFFFF"
                                    fontSize={15}
                                    fontWeight="700"
                                    letterSpacing={1}
                                >
                                    VADIM SPACE
                                </Text>

                                <Text color="#8792A5" fontSize={10}>
                                    PERSONAL DASHBOARD
                                </Text>
                            </YStack>
                        </XStack>

                        <YStack
                            width="42px"
                            height="42px"
                            borderRadius="14px"
                            backgroundColor="#171F2D"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Feather name="grid" size={19} color="#AFC5FF" />
                        </YStack>

                    </XStack>

                    {/* Приветствие */}
                    <YStack gap="10px">
                        <Text
                            color="#8396BA"
                            fontSize={12}
                            fontWeight="700"
                            letterSpacing={1.5}
                        >
                            РАБОЧЕЕ ПРОСТРАНСТВО
                        </Text>

                        <Text
                            color="#FFFFFF"
                            fontSize={34}
                            fontWeight="800"
                            lineHeight="40px"
                        >
                            Всё начинается с идеи.
                        </Text>

                        <Text
                            color="#929BAD"
                            fontSize={15}
                            lineHeight="24px"
                        >
                            Твоё пространство для новых возможностей,
                            идей и интересных проектов.
                        </Text>
                    </YStack>

                    {/* Главная карточка */}
                    <YStack
                        backgroundColor="#19263D"
                        borderRadius="26px"
                        borderWidth={1}
                        borderColor="#2B405F"
                        padding="22px"
                        gap="17px"
                    >
                        <XStack alignItems="center" justifyContent="space-between">

                            <Text
                                color="#AFC5FF"
                                fontSize={11}
                                fontWeight="700"
                                letterSpacing={1.2}
                            >
                                ТВОЙ ПРОЕКТ
                            </Text>

                            <XStack
                                backgroundColor="#203B35"
                                paddingHorizontal="10px"
                                paddingVertical="6px"
                                borderRadius="20px"
                                alignItems="center"
                                gap="6px"
                            >
                                <YStack
                                    width="6px"
                                    height="6px"
                                    borderRadius="50%"
                                    backgroundColor="#4ADE80"
                                />

                                <Text color="#86E6A4" fontSize={10} fontWeight="700">
                                    ACTIVE
                                </Text>
                            </XStack>
                        </XStack>

                        <YStack gap="8px">
                            <Text
                                color="#FFFFFF"
                                fontSize={24}
                                fontWeight="800"
                                lineHeight="30px"
                            >
                                Создавай без ограничений.
                            </Text>

                            <Text color="#A6B1C4" fontSize={14} lineHeight="22px">
                                Здесь будут собраны твои идеи,
                                задачи и новые возможности.
                            </Text>
                        </YStack>

                        <Button
                            backgroundColor="#5B80F5"
                            borderRadius="15px"
                            height="52px"
                            onPress={() => navigation.navigate('Profile')}
                        >
                            <XStack alignItems="center" gap="9px">
                                <Text color="#FFFFFF" fontSize={14} fontWeight="700">
                                    Мой профиль
                                </Text>

                                <Feather name="arrow-right" size={17} color="#FFFFFF" />
                            </XStack>
                        </Button>
                    </YStack>

                    {/* Быстрый обзор */}
                    <YStack gap="14px">

                        <Text
                            color="#8792A5"
                            fontSize={11}
                            fontWeight="700"
                            letterSpacing={1.4}
                        >
                            БЫСТРЫЙ ОБЗОР
                        </Text>

                        <XStack gap="12px">

                            <YStack
                                flex={1}
                                backgroundColor="#151C29"
                                borderRadius="20px"
                                borderWidth={1}
                                borderColor="#252F40"
                                padding="16px"
                                gap="13px"
                            >
                                <Feather name="smartphone" size={21} color="#8DAAFF" />

                                <YStack gap="4px">
                                    <Text color="#FFFFFF" fontSize={15} fontWeight="700">
                                        iOS + Android
                                    </Text>

                                    <Text color="#8792A5" fontSize={11}>
                                        Две платформы
                                    </Text>
                                </YStack>
                            </YStack>

                            <YStack
                                flex={1}
                                backgroundColor="#151C29"
                                borderRadius="20px"
                                borderWidth={1}
                                borderColor="#252F40"
                                padding="16px"
                                gap="13px"
                            >
                                <Feather name="code" size={21} color="#8DAAFF" />

                                <YStack gap="4px">
                                    <Text color="#FFFFFF" fontSize={15} fontWeight="700">
                                        JavaScript
                                    </Text>

                                    <Text color="#8792A5" fontSize={11}>
                                        Наш основной язык
                                    </Text>
                                </YStack>
                            </YStack>

                        </XStack>
                    </YStack>

                </YStack>
            </ScrollView>
        </YStack>
    )
}
