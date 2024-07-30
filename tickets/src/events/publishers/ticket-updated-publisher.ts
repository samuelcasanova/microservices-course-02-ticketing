import { Publisher, Subjects, TicketUpdatedEvent } from '@samuelcasanovasoft/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
