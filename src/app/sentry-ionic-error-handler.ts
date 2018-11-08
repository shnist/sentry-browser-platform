import * as Sentry from 'sentry-cordova';
import { ErrorHandler } from '@angular/core';

export class SentryIonicErrorHandler extends ErrorHandler {
  handleError(error) {
    super.handleError(error);
    try {
      Sentry.captureException(error.originalError || error);
    } catch (e) {
      console.error(e);
    }
  }
}
