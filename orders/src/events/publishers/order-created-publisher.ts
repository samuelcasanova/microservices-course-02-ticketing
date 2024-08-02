import { Publisher, OrderCreatedEvent, Subjects } from '@samuelcasanovasoft/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
