export interface ContactInterface
{
    id:number;
    number:string;
    externalId:string;
    typeId:number;
    firstName:string;
    lastName:string;
    fullName:string;
    gender:string;
    formOfAddress:string;
    newsletterAllowanceAt:string; // String|\Carbon
    classId:number;
    blocked:number;
    rating:number;
    bookAccount:string;
    lang:string;
    referrerId:number; // float
    userId:number;
    allowedMethodsOfPayment?:Array<Object>;
    birthdayAt:string; // String|\Carbon
    lastLoginAt:string; // String|\Carbon
    lastOrderAt:string; // String|\Carbon
    createdAt:string; // String|\Carbon
    updatedAt:string; // String|\Carbon
    plentyId:number;
    title?:string;
    // webstoreId:number;
    options:Array<Object>;
    addresses?:Array<Object>;
    orderSummary?:Object;
    primaryBillingAddress?:Array<Object>;
    singleAccess?:string;
    accounts?:Array<Object>;
    orders?:Array<Object>;
    timeForPaymentAllowedDays?:number;
    valuta?:number;
    discountDays?:number;
    discountPercent?:number;
    tagRelationships?:Array<any>;
    email?:string;
    salesRepresentativeRegions?:Array<Object>;
    salesRepresentativeContactId?:number;
}
