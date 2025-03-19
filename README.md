# Pagination Indicator

A React Native showcase application demonstrating animation capabilities with React Native Reanimated. This project is designed as a learning tool and showcase for animation techniques, not as a library of reusable components.

## 📱 Demo

This application showcases an animated pagination indicator system commonly used in onboarding flows, featuring:

- Smooth animated transitions between pages
- Dynamic dot indicators that respond to page changes
- Animated buttons with entrance/exit animations
- Fluid layout transitions

## 🚀 Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **TypeScript** - Type safety
- **React Native Reanimated** - Advanced animations
- **NativeWind/Tailwind CSS** - Styling
- **Expo Vector Icons** - Icons

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/danieltgfischer/pagination-indicator.git
cd pagination-indicator

# Install dependencies
npm install
# or
yarn install
```

## 🏃‍♂️ Running the App

This project is built with Expo, so you can easily run it on your device using Expo Go:

```bash
# Start the Expo development server
npx expo start
# or
yarn expo start
```

Then:

1. Download the Expo Go app on your iOS or Android device
2. Scan the QR code shown in your terminal with your camera (iOS) or directly in the Expo Go app (Android)
3. The app will load on your device

## 🎨 Animation Techniques Demonstrated

### Pagination Indicator

- Interpolated color animations
- Spring-based dot transitions
- Dynamic sizing based on current page

### Onboarding Flow

- Fade in/out animations for button text
- PinwheelIn animation for completion icon
- Conditional rendering with animations

### Buttons

- Layout animations with spring physics
- Entrance and exit animations

## 🧩 Component Structure

- **PaginationIndicator**: Main component displaying animated dots
- **Dot**: Individual animated dots that change color based on the current page
- **Onboarding**: Example implementation of an onboarding flow using the pagination
- **Button**: Animated button component with entrance/exit effects

## 🛠️ Built With

- AnimatedStyle hooks for dynamic styling
- SharedValue for animation coordination
- Interpolated colors for smooth transitions
- Spring animations for natural movement

## 📝 Notes

This project is intended for learning purposes and demonstrates specific animation techniques with React Native Reanimated. The components are not designed for direct reuse in production applications but serve as examples of animation patterns you can adapt for your own projects.
