import Enlang from './entries/en-US';
import Eslang from './entries/es_ES';
import { addLocaleData } from 'react-intl';

const AppLocale = {
  en: Enlang,
  es: Eslang
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.es.data);

export default AppLocale;
