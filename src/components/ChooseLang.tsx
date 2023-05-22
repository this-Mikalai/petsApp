import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { useTranslate } from '../hooks/useTranslateMain';
import { Picker } from '@react-native-picker/picker';

const langs = ['ru', 'en', 'pl'];

const ChooseLang = () => {
  const { t, chooseLang, currentLocale } = useTranslate();
  const [selectedLanguage, setSelectedLanguage] = useState<string | undefined>(undefined);

  return (
    <View>
      <Text>{t('hello')}</Text>
      <Picker
        selectedValue={selectedLanguage || currentLocale}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedLanguage(itemValue);
          chooseLang(itemValue);
        }}
      >
        {langs.map((lang, index) => (
          <Picker.Item label={lang} value={lang} key={index} />
        ))}
      </Picker>
    </View>
  );
};

export default ChooseLang;
