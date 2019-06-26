import { Component ,Inject} from '@angular/core';
import { LOCAL_STORAGE , WINDOW} from '@ng-toolkit/universal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seo';
  constructor(@Inject(WINDOW) private window: Window ,@Inject(LOCAL_STORAGE) private localStorage: any) {}
  public ngOnInit(): void {
       console.log(this.window.URL);
       console.log(this.localStorage);

  }
}
