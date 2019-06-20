import { Injectable,ErrorHandler,Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import * as uuid from 'uuid';
import {Http, Response} from '@angular/http';
import * as $ from 'jquery';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import * as FileSaver from 'file-saver';
import { FileSaverService } from 'ngx-filesaver';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lo:number
categorys:[]
data=[]
final=[]
finalre=[]
link:any
sku:any
dk=[]
count=0;
filedata=[]
storedetails:any
city:any
state:any
zip:any
discount=0
country:any
address:any
vendor:any
na:any
name:any
price:any
webkitURL: any;
itemid:any
dom:any
id=[]
previousweek:any
time:any
totalamount=0
da=0
dd:any
fd="";
dow:any
  constructor(private ngFlashMessageService: NgFlashMessageService,private http:Http,private modalService: NgbModal,private _FileSaverService: FileSaverService) { }


shift=function()
{
  var s=(<HTMLInputElement>document.getElementById("fname")).value
  console.log(s)
  if(s==""){
  console.log("ss")
  var x = document.getElementById("valid");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
  }
  else{

















  var hostname=(<HTMLInputElement>document.getElementById("hostname")).value;
console.log(hostname)
var user=(<HTMLInputElement>document.getElementById("user")).value;
var password=(<HTMLInputElement>document.getElementById("password")).value;

  var url='https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/ftpconnect'
  var body={
"ftphostname":hostname,
"user":user,
"password":password,
"data": this.ftpdata
}
 console.log(body)
    this.http.post(url,body).subscribe(
      (res:Response) =>{
  console.log(JSON.stringify(res.json()))
  var s=JSON.stringify(res.json())


  if (res.json()=="successfully uploaded..")
  {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  else if (s=="null"){
    console.log("sderf")
    var x = document.getElementById("snackbars");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);  }
})
}
}










catid=function(id)
{

  (<HTMLInputElement>document.getElementById("load")).hidden = false;
  (<HTMLInputElement>document.getElementById("p")).hidden = false;

  var count=0
  var todayurl='  https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/category'
var body={
  "catid":id
}

  this.http.post(todayurl,body).subscribe(
    (res:Response) =>{
console.log(res.json())
this.category=res.json().elements
console.log(this.category)
for(var i in this.category){


  console.log(this.category[i].name)
  this.name=this.category[i].name
  this.id=this.category[i].id
  this.price=this.category[i].price
  this.code=this.category[i].code
  this.sku=this.category[i].sku
  var d={
    "name":this.name
  }
  console.log(d)

  var vendor='https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/clovervendordetails'

  this.http.post(vendor,d).subscribe(
    (res:Response) =>{

  console.log(res.json())
  var kk=res.json()
  this.vendor=kk[0].vendors
  console.log(this.vendor)
})
console.log(this.id)
var firstDay = new Date();
this.previousweek= new Date(firstDay.getTime() - 7 * 24 * 60 * 60 * 1000);
console.log(this.previousweek*1)
var ti=this.previousweek*1
this.time=ti.toString()
var ddd={
  "time": this.time,
  "item": this.id
}
console.log(ddd)

var vendor='https://fsv6qsiyg1.execute-api.us-west-2.amazonaws.com/PROD/discountsget'

this.http.post(vendor,ddd).subscribe(
  (res:Response) =>{
var dis=""
console.log(res.json())
for (var k in res.json()){
  var amount;

  var it=res.json()[k].clientCreatedTime
  var jk=new Date(it)
  console.log(jk)
  amount=res.json()[k].amount
  this.totalamount+=res.json()[k].itemscount
  this.da+=this.price
  if(res.json()[k].amount==0)
  {
    dis="N"
    amount=""
}
  else{
  dis="Y"
  }
this.dow=new Date()*1
console.log(this.dow)
var dp=new Date(this.dow)
var ss=dp.toString()
console.log(ss)
var oll=ss.replace("GMT+0530 (India Standard Time)","")
console.log(oll)
var skso=oll.split(" ")
console.log(skso[2])
console.log(skso[3])
console.log(skso[4])
var times=skso[4]
console.log(times)
var days=skso[2]
var years=skso[3]

var months=new Date().getMonth()+1;












var dd=new Date(jk)
console.log(dd)
var s=dd.toString()
console.log(s)
var ol=s.replace("GMT+0530 (India Standard Time)","")
console.log(ol)
var sks=ol.split(" ")
console.log(sks[2])
console.log(sks[3])
console.log(sks[4])
var time=sks[4]
console.log(time)
var day=sks[2]
var year=sks[3]
var fd={
"orderClientCreatedTime":ol,
"name":this.category[i].name,
"price":this.category[i].price,
"orderid":res.json()[k].orderid,
"discoint":dis,
"noofitems":res.json()[k].itemscount,
"vendor":this.vendor


}
var month=new Date(ti).getMonth()+1;

// this.accountnumber=(<HTMLInputElement>document.getElementById("firstname")).value ;

var data = "798965|" +
     + years + "0"+months + days + "|" +
     + year + "0"+month + day + "|"+time +"|"+
     res.json()[k].orderid + "|" +

      "95682"+"|"+
      this.na + "|" +
     this.address+"|"+
      this.city + "|" +
      this.state + "|" +

      this.zip + "|" +
      "cigarette"+ "|" +
      this.vendor + "|" +
            this.code+"|"+this.sku+"|"+this.name+"|"+"|"+"|"+res.json()[k].itemscount+
            "|"+dis+"|"+"|"+
            amount+"|"+
            "|"+"|"+"|"+
             "|"+"|"+"|"+"|"+"|"+
             this.price + "|" +

     "|" +
      "|" +
      "|" +

    "|" + "|"














console.log(fd)
this.data.push(fd)
this.filedata.push(data)
this.ftpdata=data


console.log(this.filedata)

if(this.filedata.length!=0)
{
  (<HTMLInputElement>document.getElementById("load")).hidden = true;
  (<HTMLInputElement>document.getElementById("p")).hidden = true;

}
}
})

/*
if(name==name)
{
  count++;
}
var firstDay = new Date();
this.previousweek= new Date(firstDay.getTime() - 7 * 24 * 60 * 60 * 1000);
console.log(this.previousweek*1)
this.time=this.previousweek*1
var todayurls=' https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/ooapi'
var d={
  "time":this.time
}
var ddd={
  "name":this.name
}
console.log(d)

var vendor='https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/clovervendordetails'

this.http.post(vendor,ddd).subscribe(
  (res:Response) =>{

console.log(res.json())
var kk=res.json()
this.vendor=kk[0].vendors
console.log(this.vendor)
this.http.post(todayurls,d).subscribe(
  (res:Response) =>{
this.links=res.json()
this.dk=res.json().elements
console.log(this.dk)
for(var i in this.dk)
{var dis="";
var dis="";
 this.totalamount+=parseInt(this.price)

var count=0;
var dd=this.dk[i].id
console.log(dd)

for(var j in this.dk[i].lineItems.elements)
{
if(this.dk[i].lineItems.elements[j].item.id==this.id)
count++;
}
console.log(count)
var todayurlsss='https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/discount'
var d={
  "orderid":dd
}
  var dis="";
console.log(d)
this.http.post(todayurlsss,d).subscribe(
  (res:Response) =>{


console.log(res.json())


console.log(new Date(this.dk[i].clientCreatedTime))

this.link=res.json()
console.log(this.link)
console.log( this.link.href.split("/"))
var oid=this.link.href.split("/");
var ooid=oid[7]
console.log(ooid)
if(this.link.elements.length==0)
{
  console.log("sss")
  dis="N"
  this.discount=0
}


else{
  dis="Y"
  var price =parseInt(this.price)
  var amount=parseInt(this.link.elements[0].percentage)/100;
  this.discount=price*amount
  console.log(this.discount)
  this.da+=this.discount
}

var dd=new Date(this.dk[i].clientCreatedTime)
console.log(dd)
var s=dd.toString()
console.log(s)
var ol=s.replace("GMT+0530 (India Standard Time)","")
console.log(ol)
var sks=ol.split(" ")
console.log(sks[2])
console.log(sks[3])
console.log(sks[4])
var time=sks[4]
console.log(time)
var day=sks[2]
var year=sks[3]
var fd={
"orderClientCreatedTime":ol,
"name":this.dk[i].name,
"price":this.dk[i].price,
"orderid":this.dk[i].id,
"discoint":dis,
"noofitems":count,
"vendor":this.vendor


}
var month=new Date(this.dk[i].clientCreatedTime).getMonth()+1;

// this.accountnumber=(<HTMLInputElement>document.getElementById("firstname")).value ;

var data = "798965|" +
     + year + "0"+month + day + "|" +
     + year + "0"+month + day + "|"+time +"|"+
     this.dk[i].id + "|" +

      "95682"+"|"+
      this.name + "|" +
     this.address+"|"+
      this.city + "|" +
      this.state + "|" +

      this.zip + "|" +"|"+
      "cigarette"+ "|" +
      this.vendor + "|" +
            this.code+"|"+this.sku+"|"+this.name+"|"+"|"+"|"+count+
            "|"+dis+"|"+"|"+
            this.discount+"|"+
            "|"+"|"+"|"+
             "|"+"|"+"|"+"|"+
             this.price + "|" +

     "|" +
      "|" +
      "|" +

    "|" + "|"














console.log(fd)
this.data.push(fd)
this.filedata.push(data)
this.ftpdata=data


console.log(this.filedata)

if(this.filedata.length!=0)
{
  (<HTMLInputElement>document.getElementById("load")).hidden = true;
  (<HTMLInputElement>document.getElementById("p")).hidden = true;

}
})


}
//================================================================================================================
/*for(var i in this.dk)
{
  var dis="";
   this.totalamount+=parseInt(this.price)

  var count=0;
  var dd=this.dk[i].id
  console.log(dd)

for(var j in this.dk[i].lineItems.elements)
{
  if(this.dk[i].lineItems.elements[j].item.id==this.id)
count++;
}
console.log(count)
  var todayurlsss='https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/discount'
  var d={
    "orderid":dd
  }
    var dis="";
  console.log(d)
  this.http.post(todayurlsss,d).subscribe(
    (res:Response) =>{


  console.log(res.json())

this.link=res.json()

var oid=this.link.href.split("/");
var ooid=oid[7]
console.log(ooid)

if(this.link.elements.length==0)
 {       dis="N";

   console.log("sss")
   this.discount=0
   console.log(dis)
   this.fd=dis
 }


 else{
   console.log("ssselse")
   dis="Y";
   console.log(dis)
this.fd=dis
var price =parseInt(this.price)
var amount=parseInt(this.link.elements[0].percentage)/100;
this.discount=price*amount
console.log(this.discount)
this.da+=this.discount
 for (var i in this.link.elements)
   {
     console.log(this.link.elements[i].lineItemRef.id)
     if(this.link.elements[i].lineItemRef.id==this.id)
     {

       var price =parseInt(this.price)
       var amount=parseInt(this.link.elements[i].percentage)/100;
       this.discount=price*amount
       console.log(this.discount)
       this.da+=this.discount
     }
   }

 }



})

console.log(this.fd)
this.dd=new Date(this.dk[i].clientCreatedTime)
console.log(this.dd)
var s=this.dd.toString()
console.log(s)
var ol=s.replace("GMT+0530 (India Standard Time)","")
console.log(ol)
var sks=ol.split(" ")
console.log(sks[2])
console.log(sks[3])
console.log(sks[4])
var time=sks[4]
console.log(time)
var day=sks[2]
var year=sks[3]
var fd={
"orderClientCreatedTime":ol,
"name":this.name,
"price":this.price,
"orderid":this.id,
"discoint":this.fd,
"noofitems":count,
"vendor":this.vendor


}
console.log(fd)
var month=new Date(this.dk[i].clientCreatedTime).getMonth()+1;

// this.accountnumber=(<HTMLInputElement>document.getElementById("firstname")).value ;


var data = "798965|" +
     + year + "0"+month + day + "|" +
     + year + "0"+month + day + "|"+time +"|"+
     this.dk[i].id + "|" +

      "95682"+"|"+
      this.name + "|" +
     this.address+"|"+
      this.city + "|" +
      this.state + "|" +

      this.zip + "|" +"|"+
      "cigarette"+ "|" +
      this.vendor + "|" +
            this.code+"|"+this.sku+"|"+this.name+"|"+"|"+"|"+count+
            "|"+this.fd+"|"+"|"+
            this.discount+"|"+
            "|"+"|"+"|"+
             "|"+"|"+"|"+"|"+
             this.price + "|" +

     "|" +
      "|" +
      "|" +

    "|" + "|"

















console.log(fd)
this.data.push(fd)
this.filedata.push(data)
this.ftpdata=data


console.log(this.filedata)

if(this.filedata.length!=0)
{
  (<HTMLInputElement>document.getElementById("load")).hidden = true;
  (<HTMLInputElement>document.getElementById("p")).hidden = true;

}






}

})
})


*/

}//forloop








})







}

filedatas=function()
{

  var s=(<HTMLInputElement>document.getElementById("fname")).value
  console.log(s)
if(s==""){
  console.log("ss")
  var x = document.getElementById("valid");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}
else{

  var dd=new Date()
  console.log(dd)
  var s=dd.toString()
  console.log(s)
  var ol=s.replace("GMT+0530 (India Standard Time)","")
  console.log(ol)
  var sks=ol.split(" ")
  console.log(sks[2])
  console.log(sks[3])
  console.log(sks[4])
  var time=sks[4]
  console.log(time)
  var day=sks[2]
  var year=sks[3]
  var month=new Date().getMonth()+1;













  //(<HTMLInputElement>document.getElementById("d")).hidden = true;
  console.log(this.filedata.join('\n'));
  var link=this.filedata.join('\n')
var count=100
var p=5.26

  var textFileAsBlob = new Blob([""+this.filedata.length+"|"+this.totalamount+"|"+this.da,'\n',link], { type: 'text/plain' });
  var fileNameToSaveAs = ""+ this.na + "_568953_" + year + month+day+".txt";

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (webkitURL != null)
	{

		downloadLink.href = webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{

		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
	//	downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}
	downloadLink.click();
}}
catalog =function()
{
  var todayurl='https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/category'

  this.http.get(todayurl).subscribe(
    (res:Response) =>{
console.log(res.json())
this.categorys=res.json().elements
console.log(this.categorys)
})
}

storedetailsof=function()
{
  var storeurl='https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/storedetails'
  this.http.get(storeurl).subscribe(
    (res:Response) =>{
console.log(res.json())
this.storedetails=res.json();
console.log(this.storedetails)
this.state=this.storedetails.body.state;
this.zip=this.storedetails.body.zip;
this.country=this.storedetails.body.country;
this.address=this.storedetails.body.address1;
this.na=this.storedetails.storename;
this.city=this.storedetails.body.city;
console.log(this.na)
})
}
valid()
{
  var s=(<HTMLInputElement>document.getElementById("fname")).value
  console.log(s)
if(s==""){
  console.log("ss")
  var x = document.getElementById("valid");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}
else{
  (<HTMLInputElement>document.getElementById('id01')).style.display='block'



}
}
  ngOnInit() {

    (<HTMLInputElement>document.getElementById("p")).hidden = true;

    (<HTMLInputElement>document.getElementById("alerts")).hidden = true;
    (<HTMLInputElement>document.getElementById("alertss")).hidden = true;
    (<HTMLInputElement>document.getElementById("load")).hidden = true;
    var a = [1, 2, 3, 4, 5, 6];
    console.log(a.join('\n'));
this.storedetailsof()
this.catalog()


var query = window.location.search.substring(1);
console.log(query)











  }


  }
