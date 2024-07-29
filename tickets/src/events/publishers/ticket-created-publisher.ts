import { Publisher, Subjects, TicketCreatedEvent } from '@samuelcasanovasoft/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
