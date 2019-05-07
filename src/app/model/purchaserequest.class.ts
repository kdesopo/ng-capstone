import { User } from "./user.class";

export class PurchaseRequest {
    id:number;
    user: User;
    description: string;
    justification:string;
    dateNeeded:Date;
    deliveryMode:string;
    status:string;
    total:number;
    submittedDate:Date;
    reasonForRejection:string;

    constructor(id:number=0, user:User=new User(), description:string='', 
        justification:string='', dateNeeded:Date=new Date(), deliveryMode:string='',
        status:string='', total:number=0, submittedDate:Date=new Date(), 
        reasonForRejection:string='') {
            this.id = id;
            this.user = user;
            this.description = description;
            this.justification = justification;
            this.dateNeeded = dateNeeded;
            this.deliveryMode = deliveryMode;
            this.status = status;
            this.total = total;
            this.submittedDate = submittedDate;
            this.reasonForRejection = reasonForRejection;
        }
    aboout():string {
        return "PurchaseRequest id=" + this.id + ", user=" + this.user
        + ", description=" + this.description + ", justification="
        + this.justification + ", dateNeeded=" + this.dateNeeded
        + ", deliveryMode=" + this.deliveryMode + ", status="
        + this.status + ", total=" + this.total + ", submittedDate="
        + this.submittedDate + ", reasonForRejection=" 
        + this.reasonForRejection;
    }
}