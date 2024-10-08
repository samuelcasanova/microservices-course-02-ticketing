import { Subjects, Publisher, PaymentCreatedEvent } from '@samuelcasanovasoft/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
