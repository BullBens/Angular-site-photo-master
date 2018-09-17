import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.css']
})
export class UserBlockComponent implements OnInit {

  name = 'Андрей';

  blockUsers = [
    {block: 'Ваши заявки'},
    {block: 'Подать заявку'},
    {block: 'Настройка аккаунта'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
