import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public uiBasicCollapsed = false;
  public samplePagesCollapsed = false;
  
  constructor() { }

  ngOnInit() {
    const body = document.querySelector('body');

    // add class 'hover-open' to sidenav navitem while hover in sidenav-icon-only menu
    document.querySelectorAll('.sidenav .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidenav-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidenav-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}
