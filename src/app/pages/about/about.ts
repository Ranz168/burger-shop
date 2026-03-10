import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MEMBERS } from '../../core/data/members';
import { MemberCardComponent } from '../../shared/member-card/member-card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  members = MEMBERS;
}