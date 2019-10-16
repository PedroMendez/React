import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

const InjectMessage = props => <FormattedMessage {...props} />;
export default injectIntl(InjectMessage, {
  withRef: false
});
