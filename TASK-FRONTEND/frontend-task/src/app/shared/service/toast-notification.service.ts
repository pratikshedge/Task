import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageHandlerService {

  constructor( private messageService: MessageService) {

  }

  public showSuccessMsg(summary:string)
  {
   this.showMessage('success', summary);
  }

  public showErrorMsg(summary:string)
  {
    this.showMessage('error', summary);
  }
  public showWarningMsg(summary:string)
  {
    this.showMessage('warn', summary);
  }

  private showMessage(type:string, summary:string)
  {
    this.messageService.add({severity:type, summary:summary});
  }

}
