import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
