import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  public hidden = true;
  public hidecount = 3;
  public categoriescount = document.getElementsByClassName('search-category');
  public windowwsize = window.innerWidth;
  ngOnInit() {
    this.windowwsize = window.innerWidth;
  }
  ngOnChanges() {
    this.windowwsize = window.innerWidth;

    if (this.windowwsize < 500) {
      this.hidecount = 5;
    } else {
      this.hidecount = 3;
    }
    for (
      let i = this.categoriescount.length - this.hidecount;
      i < this.categoriescount.length;
      i++
    ) {
      // document.getElementsByClassName('search-category')[i].style.display =
      ('none');
    }
    // document.querySelector('.see-all-solid').addEventListener('click', () => {
    if (window.innerWidth < 500) {
      this.hidecount = 5;
    } else {
      this.hidecount = 3;
    }
    if (this.hidden) {
      for (
        let i = this.categoriescount.length - this.hidecount;
        i < this.categoriescount.length;
        i++
      ) {
        // document.getElementsByClassName('search-category')[i].style.display =
        ('block');
      }
      // document.getElementById('arrowicon').style =
      ('transform :rotate(180deg);');
      this.hidden = false;
      console.log(this.hidden);
    } else {
      for (
        let i = this.categoriescount.length - this.hidecount;
        i < this.categoriescount.length;
        i++
      ) {
        // document.getElementsByClassName('search-category')[i].style.display =
        ('none');
      }
      // document.getElementById('arrowicon').style = 'transform :rotate(0deg);';
      this.hidden = true;
      console.log(this.hidden);
    }
  }
  // );
}
// }
