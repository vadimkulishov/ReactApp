
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

import {
  TamaguiProvider,
  YStack,
  XStack,
  Text,
  Button,
} from 'tamagui'

import config from './tamagui.config'

export default function App() {
  const [isStarted, setIsStarted] = useState(false)

  return (
      <TamaguiProvider config={config} defaultTheme="light">
        <StatusBar style="light" />

        <YStack
            flex={1}
            backgroundColor="background"
            padding="5"
            justifyContent="center"
            gap="6"
        >
          {/* Заголовок */}
          <YStack gap="3">
            <Text
                color="blue-500"
                fontSize="3"
                fontWeight="bold"
                letterSpacing={2}
            >
              VADIM APP / 001
            </Text>

            <Text
                color="color"
                fontSize="9"
                fontWeight="bold"
            >
              Привет, мир.
            </Text>

            <Text
                color="color-11"
                fontSize="4"
                lineHeight="5"
            >
              Здесь начинается разработка нашего первого
              приложения на React Native и Tamagui.
            </Text>
          </YStack>

          {/* Информационная карточка */}
          <YStack
              padding="4"
              borderRadius="6"
              backgroundColor="background-hover"
              borderWidth={1}
              borderColor="border-color"
              gap="4"
          >
            <XStack justifyContent="space-between">
              <Text color="color-10" fontSize="2">
                СТАТУС ПРОЕКТА
              </Text>

              <Text color="green-500" fontWeight="bold">
                ONLINE
              </Text>
            </XStack>

            <Text
                color="color"
                fontSize="6"
                fontWeight="bold"
            >
              Наша разработка началась 🚀
            </Text>

            <Text color="color-10" fontSize="3">
              Expo работает. Tamagui подключён.
              Впереди создание красивого интерфейса.
            </Text>
          </YStack>

          {/* Интерактивная кнопка */}
          <Button
              size="xl"
              backgroundColor="blue-600"
              color="#FFFFFF"
              borderRadius="xl"
              fontWeight="bold"
              onPress={() => setIsStarted(!isStarted)}
              scale="press:0.97"
              transition="fast"
          >
            {isStarted ? 'Мы начали! ✓' : 'Начать разработку'}
          </Button>

          {/* Появляется после нажатия */}
          {isStarted && (
              <Text color="green-500" textAlign="center">
                Отлично! Первая интерактивность работает.
              </Text>
          )}
        </YStack>
      </TamaguiProvider>
  )
}
