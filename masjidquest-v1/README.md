# MasjidQuest V1

Application communautaire gratuite autour des mosquées : missions d'entraide, activités, dons, covoiturage, Khayr XP et profils communautaires.

## Stack
- Expo SDK 57 / React Native / Expo Router
- Supabase Auth + PostgreSQL + RLS
- Web exportable vers Vercel
- EAS Build pour iOS et Android

## Lancer
```bash
npm install
npx expo start
```

## Variables optionnelles
Le projet contient des valeurs de fallback pour le projet Supabase connecté. En production, définir :
- `EXPO_PUBLIC_SUPABASE_URL`
- `EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

## Builds stores
```bash
npx eas-cli@latest build --platform android --profile production
npx eas-cli@latest build --platform ios --profile production
npx eas-cli@latest submit --platform android
npx eas-cli@latest submit --platform ios
```

Bundle/package provisoire : `com.elamriz.masjidquest`.

## Backend
Les tables MasjidQuest sont préfixées `mq_` afin de ne pas toucher aux autres apps du projet Supabase. Les RPC `mq_join_post` et `mq_join_mosque` gèrent les participations côté serveur.
