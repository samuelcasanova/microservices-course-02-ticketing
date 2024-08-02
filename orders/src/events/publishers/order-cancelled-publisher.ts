import { Subjects, Publisher, OrderCancelledEvent } from '@samuelcasanovasoft/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
