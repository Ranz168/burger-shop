import { Component, Input } from '@angular/core';
import { Member } from '../../core/data/members';

@Component({
  selector: 'app-member-card',
  standalone: true,
  templateUrl: './member-card.html',
  styleUrls: ['./member-card.css']
})
export class MemberCardComponent {
  @Input() member!: Member;
}