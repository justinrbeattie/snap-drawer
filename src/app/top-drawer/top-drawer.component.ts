import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-top-drawer',
  templateUrl: './top-drawer.component.html',
  styleUrls: ['./top-drawer.component.scss']
})
export class TopDrawerComponent implements AfterViewInit {
  openPosition = 0;
  closePosition = 10000;

  observer: IntersectionObserver;
  collapsed = true;
  @HostBinding('class') classNames = 'collapsed';
  @HostBinding('style.--drawer-ratio') drawerRatio: number = 0;
  @ViewChild('drawer') drawer: ElementRef;
  @HostBinding('class.disabled') disabled: boolean = false;
  @HostBinding('class.hidden') hidden: boolean = false;

  constructor(public scrollContainer: ElementRef) {}

  ngAfterViewInit() {
    this.close();
    this.observeScroll();
  }

  observeScroll() {
    let callback = entries => {
      entries.forEach(entry => {
        this.drawerRatio =
          entry.intersectionRatio > 0.25 ? entry.intersectionRatio : 0;
        this.classNames =
          entry.intersectionRatio > 0.5
            ? 'expanded smooth'
            : 'collapsed smooth';

        this.collapsed = entry.intersectionRatio > 0.5 ? false : true;
      });
    };
    this.observer = new IntersectionObserver(callback, {
      threshold: [0, 0.1, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      root: this.scrollContainer.nativeElement
    });
    this.observer.observe(this.drawer.nativeElement);
  }

  open() {
    if (!this.disabled) {
      this.scrollContainer.nativeElement.scrollTo(0, this.openPosition);
    }
  }

  close() {
    if (!this.disabled) {
      this.scrollContainer.nativeElement.scrollTo(0, this.closePosition);
    }
  }

  toggle() {
    if (!this.disabled) {
      if (this.collapsed) {
        this.open();
      } else {
        this.close();
      }
    }
  }

  hide() {
    if (this.collapsed) {
      this.hidden = true;
    }
  }

  show() {
    this.close();
    this.hidden = false;
  }

  disable() {
    this.disabled = !this.disabled;
  }
}
