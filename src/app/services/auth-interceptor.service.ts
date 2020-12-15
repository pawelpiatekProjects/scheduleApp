import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor() { }

  isRefreshingToken = false;

  // constructor(private authService: AuthService, private router: Router, private alertController: AlertController) { }
  //
  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   let modifiedReq = req;
  //   const user = this.authService.user.value;
  //
  //   if (!req.url.includes(environment.oauthUrl) && user) {
  //     const currentDate = new Date().getTime();
  //     const testDate = currentDate + 1;
  //     modifiedReq = req.clone({
  //       headers: req.headers.set('Authorization', `Bearer ${user.token}`),
  //     });
  //   }
  //
  //   return next.handle(modifiedReq).pipe(
  //     map((event: HttpEvent<any>) => {
  //       if (event instanceof HttpResponse) {
  //         return event;
  //       }
  //     }),
  //     catchError(error => {
  //       if (error instanceof HttpErrorResponse) {
  //         // Obsługa sytuacji w której token traci ważność
  //         if (error.status === 401) {
  //           this.alertController.create({
  //             header: "Błąd",
  //             message: "Nastapiło wylogowanie",
  //             buttons: [
  //               {
  //                 text: 'Okay',
  //                 role: 'camcel'
  //               }
  //             ]
  //           }).then(alertEl => {
  //             alertEl.present();
  //             this.authService.logout();
  //           })
  //
  //         }
  //         else if (error.status === 400) {
  //           if(error.error.result === `Can't change state`){
  //             return next.handle(modifiedReq);
  //           }
  //           // this.authService.logout();
  //         } else if (error.status === 500) {
  //           this.authService.logout();
  //         }
  //       }
  //     }),
  //   )
  // }
}
