import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import {
  faAngleRight,
  faAngleLeft,
  faPlay,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { TruncateTextDirective } from 'src/app/directives/truncate-text.directive';
import { FetchMovieDetailsService } from 'src/app/services/fetch-movie-details.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [TruncateTextDirective],
})
export class BannerComponent {
  right = faAngleRight;
  left = faAngleLeft;
  options = faBars;
  play = faPlay;

  @ViewChild('scrollport') scrollportRef: ElementRef | undefined;

  constructor(private service: FetchMovieDetailsService) {}

  bannerResult: any = [];
  activeIndex: number = 0;

  private timer: any;
  private intervalTime = 20000;

  ngOnInit(): void {
    this.bannerData();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.timer = setInterval(() => {
      this.scrollToNext();
    }, this.intervalTime);
  }

  stopAutoSlide(): void {
    clearInterval(this.timer);
  }

  resetAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  bannerData(): void {
    this.service.fetchBanner().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }

  scrollToPrevious(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.bannerResult.length - 1;
    }
    this.scrollToActiveCard();
    this.resetAutoSlide();
  }

  scrollToNext(): void {
    if (this.activeIndex < this.bannerResult.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
    this.scrollToActiveCard();
    this.resetAutoSlide();
  }

  private scrollToActiveCard(): void {
    if (this.scrollportRef) {
      const container = this.scrollportRef.nativeElement;
      const activeCard = container.children[this.activeIndex];
      if (activeCard) {
        const containerWidth = container.offsetWidth;
        const activeCardWidth = activeCard.offsetWidth;
        const activeCardOffsetLeft = activeCard.offsetLeft;
        const scrollOffset =
          activeCardOffsetLeft - (containerWidth - activeCardWidth) / 2;

        container.scrollTo({
          left: scrollOffset,
          behavior: 'smooth',
        });
      }
    }
  }

  @HostListener('click')
  @HostListener('scroll')
  onInteraction(): void {
    this.resetAutoSlide();
  }

  getTrailer(id: any) {
    this.service.fetchMovieTrailer(id).subscribe((result) => {
      result.results.forEach((element: any) => {
        if (element.type == 'Trailer') {
          window.location.href = `https://www.themoviedb.org/video/play?key=${element.key}`;
        }
      });
    });
  }
}
