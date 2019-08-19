import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService){

    // 添加语言支持
    translate.addLangs(['en', 'zh']);

    // 设置默认语言，一般在无法匹配的时候使用
    translate.setDefaultLang('zh');

    // 获取当前浏览器环境的语言比如en、 zh
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|zh/) ? browserLang : 'zh');

    console.log('原始获取方法' + translate.instant('loginPage.XSJ'));
    
    var res;
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log('第二种国际化');
      res = translate.instant('loginPage.XSJ');
      console.log(res);
    });


    translate.get('loginPage.XSJ').subscribe((result: string) => {
      console.log("第三种国际化" + result);
  });

  }
  title = '拼多多';
  tabs = ['热门', '男装', '手机'];

  en = true;
  zh = false;

  XSJ = this.translate.instant('loginPage.XSJ');
    // 切换语言
    changeLang(lang) {
      this.translate.use(lang);
    }


}
