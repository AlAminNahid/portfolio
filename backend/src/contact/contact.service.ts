import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ContactDto } from './dto/contact.dto';

@Injectable()
export class ContactService {
  constructor(private readonly mailService: MailerService) {}

  async sendEmail(data: ContactDto) {
    await this.mailService.sendMail({
      from: `"Portfolio Contact Form" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `New Contact: ${data.subject}`,
      html: `
    <h2>New Contact Message</h2>
    <p><b>Name:</b> ${data.name}</p>
    <p><b>Email:</b> ${data.email}</p>
    <p><b>Phone:</b> ${data.phone}</p>
    <p><b>Message:</b></p>
    <p>${data.messageBox}</p>
  `,
    });

    return {
      message: 'Email sent successfully',
    };
  }
}
