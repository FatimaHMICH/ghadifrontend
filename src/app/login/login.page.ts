import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonContent,
  IonSlides,
  LoadingController,
  NavController,
} from '@ionic/angular';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { UtilService } from '../util.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  @ViewChild(IonSlides, { static: false }) ionSlides: IonSlides;
  @ViewChild('shippingFormRef', { static: false }) shippingFormRef: NgForm;

  public shippingForm: FormGroup;


  get shippingUserName(): AbstractControl {
    return this.shippingForm.get('userName');
  }

  get shippingPassword(): AbstractControl {
    return this.shippingForm.get('password');
  }

  
  public userName:any;

  public password:any;

  public client:any;

  i:any = 0;

  constructor(
    private util: UtilService,
    private navCtrl: NavController, 
    private loginService: LoginService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.setupForm();
  }


  setupForm() {
    this.shippingForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    
    if (localStorage.getItem('type') == 'client') {
      if (this.shippingForm.valid) {
        this.loginService.getClients(this.shippingForm.value.userName).subscribe(
          (response) => {
            this.client = response;  
            while(this.i<this.client.length) {    
              
            if(this.client[this.i].userName == this.shippingForm.value.userName && this.client[this.i].password == this.shippingForm.value.password){
              localStorage.setItem("idUser",this.client[this.i].id);
              this.navCtrl.navigateRoot('/home', {
                animated: true,
                animationDirection: 'forward',
              });
              
            }
            this.i++;
          }
                      
          },
          (error) => {
            console.log(error);
          }
        );
      }   
    }else{
      if (this.shippingForm.valid) {
        this.loginService.getDrivers(this.shippingForm.value.userName).subscribe(
          (response) => {
            this.client = response;
            
            while(this.i<this.client.length) {    
              
              if(this.client[this.i].userName == this.shippingForm.value.userName && this.client[this.i].password == this.shippingForm.value.password){
                localStorage.setItem("idUser",this.client[this.i].id);
                this.navCtrl.navigateRoot('/home', {
                  animated: true,
                  animationDirection: 'forward',
                });
                
              }
              this.i++;
            }

          },
          (error) => {
            console.log(error);
          }
        );
      }   
    }
  }
}
