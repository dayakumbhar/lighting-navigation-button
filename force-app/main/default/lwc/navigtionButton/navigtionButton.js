import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class NavigtionButton extends NavigationMixin(LightningElement)  {
  @api objRecordId;  
  @api objApiName;
  
  connectedCallback() {
    this.caseRecordPageRef= {
      type: 'standard__recordPage',
      attributes: {
        recordId: this.objRecordId,
        objectApiName: this.objApiName,
        actionName: 'view'
      }
    };
    
  }

  navigateToRec(event){
    console.log(this.objRecordId);
    this[NavigationMixin.GenerateUrl](this.caseRecordPageRef).then(url => this.url = url);
    this[NavigationMixin.Navigate](this.caseRecordPageRef);
  }
}