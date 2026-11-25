import { createTamagui } from 'tamagui';
import { defaultConfig } from "@tamagui/config/v6";
import { createAnimations } from "@tamagui/animations-react-native";

// Создаем набор анимации для приложения
const animation = createAnimations({
    fast: {
        duration: 160,
        bounce: 0.25,
    },

    medium: {
        duration: 300,
        bounce: 0.15,
    },

    slow: {
        duration: 450,
        bounce: 0.1,
    },
});

// Создаем общую конфигурацию Tamagui
const config = createTamagui({
    ...defaultConfig,
    animation,
});

export default config;