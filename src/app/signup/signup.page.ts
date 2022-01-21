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
import { SignUpService } from '../service/sign-up.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  @ViewChild(IonSlides, { static: false }) ionSlides: IonSlides;
  @ViewChild('shippingFormRef', { static: false }) shippingFormRef: NgForm;

  public shippingForm: FormGroup;


  get shippingUserName(): AbstractControl {
    return this.shippingForm.get('userName');
  }

  get shippingEmail(): AbstractControl {
    return this.shippingForm.get('email');
  }

  get shippingCin(): AbstractControl {
    return this.shippingForm.get('cin');
  }

  get shippingPassword(): AbstractControl {
    return this.shippingForm.get('password');
  }

  get shippingAddress(): AbstractControl {
    return this.shippingForm.get('address');
  }

  get shippingCity(): AbstractControl {
    return this.shippingForm.get('city');
  }

  get shippingPostalCode(): AbstractControl {
    return this.shippingForm.get('postalCode');
  }
  


  constructor(
    private navCtrl: NavController,
    private signUpService: SignUpService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.setupForm();
  }


  setupForm() {
    this.shippingForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      cin: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required)
    });
  }


  async signUp() {

    if(localStorage.getItem('type')=='client'){

      if (this.shippingForm.valid) {
        const loading = await this.loadingCtrl.create({
          message: 'Loading...',
        });
        loading.present();
        this.signUpService
          .addClient(this.shippingForm.value)
          .subscribe((client) => {
            console.log(client);
            loading.dismiss();
          });
        this.navCtrl.navigateRoot('/login', {
          animated: true,
          animationDirection: 'forward',
        });
      }

    }else{

      if (this.shippingForm.valid) {
        const loading = await this.loadingCtrl.create({
          message: 'Loading...',
        });
        loading.present();
        console.log(this.shippingForm.value);
        this.signUpService
          .addDriver(this.shippingForm.value)
          .subscribe((driver) => {
            console.log(driver);
            loading.dismiss();
          });
        this.navCtrl.navigateRoot('/login', {
          animated: true,
          animationDirection: 'forward',
        });
      }
    }

  }

}
