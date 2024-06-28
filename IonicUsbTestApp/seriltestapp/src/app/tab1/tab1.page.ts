import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NeurodyneUsbSerial } from '../plugins/neurodyne_serial';
// import { SerialService } from '../serivces/serial.service';
//declare let NeurodyneUsbSerial: any;


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  platformReady = false;

  constructor(
    // public serialService: SerialService
    private platform: Platform
    ) {
     
      console.log('contructor');
      debugger;
      this.platform.ready().then(() => {
        console.log('Plaform Ready', true);
        this.platformReady = true;
      })
    }

    echo = 'nope';

  readSerial() {
    //usbSerialPort.requestPermission(() => {
      //         console.log('get permission success.');
      //         usbSerialPort.getDevice((data: { name: string; }) => {
      //             this.title = data.name;
      //         });
      // usbSerial.echo((x:string) => {
      // console.log('here');
      // console.log(x);
      // this.echo = x;

   // });

  }

  async getPermission() {
    try {
      console.log('getPermissions');
      debugger;
      const { value } = await NeurodyneUsbSerial.echo({value:'What up'});
      this.echo = value;
    } catch (error) {
      console.error(error);
    }
  }
    // this.serialService.openSerialPort();
  
}
