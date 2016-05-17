// JavaScript Document


window.onload=function(){
	
	card1('tab_title','smList');
	card2();
	card3();
	card4('drop','c_list_scroll');
	card5('day','day_tab');
	card6('comTitle_tabs1','tabs1');
	card6('comTitle_tabs2','tabs2');
	card6('comTitle_tabs3','tabs3');
	card6('comTitle_tabs4','tabs4');
	card6('comTitle_tabs5','tabs5');
	card6('comTitle_tabs6','tabs6');
	card6('comTitle_tabs7','tabs7');
	card6('comTitle_tabs8','tabs8');
	card7('contNav1','contNav_t1');
	card7('contNav2','contNav_t2');
	
};

function card1(cardH,cardB){
	var oCardH=document.getElementById(cardH);
	var aCardH=oCardH.getElementsByTagName('div');
	var oCardB=document.getElementById(cardB);
	var aCardB=oCardB.getElementsByTagName('ul');
	
	for(var i=0; i<aCardH.length; i++){
		aCardH[i].index=i;
		aCardH[i].onmouseover=function(){
			for(var i=0; i<aCardH.length; i++){
				aCardH[i].className='';
				aCardB[i].className='item';
			}
			this.className='active';
			aCardB[this.index].className='tabs_item show';
		};
	}
}

function card2(){
	var oCardH=document.getElementById('comTitle_tabs');
	var oCardB=document.getElementById('tab_news1');
	var aCardH=oCardH.getElementsByTagName('li');
	var aCardB=oCardB.getElementsByTagName('div');
	for(var i=0; i<aCardH.length; i++){
		aCardH[i].index=i;
		aCardH[i].onmouseover=function(){
			for(var i=0; i<aCardH.length; i++){
				aCardH[i].className='';
				aCardB[i].className='hide';
			}
			if(this.index==0){
				this.className='noBl active';
				aCardB[this.index].className='show';
			}
			else{
				this.className='active';
				aCardB[this.index].className='show';
			}
		};
	}
}
function card3(){
	var oCardH=document.getElementById('cai');
	var aCardH=oCardH.getElementsByTagName('li');
	var oCardB1=document.getElementById('xihuan');
	var oCardB2=document.getElementById('zhuan');
	for(var i=0; i<aCardH.length; i++){
		aCardH[i].index=i;
		aCardH[i].onmouseover=function(){
			
			for(var i=0; i<aCardH.length; i++){
				aCardH[i].className='';
				oCardB1.style.display='none';
				oCardB2.style.display='none';
			}
			if(this.index==0){
				this.className='noBl active';
				oCardB1.style.display='block';
			}
			else{
				this.className='active';
				oCardB2.style.display='block';
			}
		};
	}
}
function card4(cardH,cardB){
	var oCardH=document.getElementById(cardH);
	var aCardH=oCardH.getElementsByTagName('i');
	var oCardB=document.getElementById(cardB);
	var aCardB=oCardB.getElementsByTagName('ul');
	
	/*for(var i=0; i<aCardH.length; i++){
		aCardH[i].index=i;
		aCardH[i].onmouseover=function(){
			for(var i=0; i<aCardH.length; i++){
				aCardH[i].className='';
				aCardB[i].className='comList hide';
			}
			this.className='active';
			aCardB[this.index].className='comList';
		};
	}*/
	
	var timer=null;
	var count=0;
	timer=setInterval(function(){
			count++;
			for(var i=0; i<aCardH.length; i++){
				aCardH[i].className='';
				aCardB[i].className='comList hide';
			}
			aCardH[count%5].className='active';
			aCardB[count%5].className='comList';
			
	},1000);
}
function card5(cardH,cardB){
	var oCardH=document.getElementById(cardH);
	var aCardH=oCardH.getElementsByTagName('a');
	var oCardB=document.getElementById(cardB);
	var aCardB=oCardB.getElementsByTagName('div');
	
	for(var i=0; i<aCardH.length; i++){
		aCardH[i].index=i;
		aCardH[i].onclick=function(){
			for(var i=0; i<aCardH.length; i++){
				aCardH[i].className='';
				aCardB[i].className='tabs_item';
			}
			this.className='active';
			aCardB[this.index].className='tabs_item show';
		};
	}
}

/*function startCard(shClass,sbClass){
	var allEleh=document.getElementsByTagName('*');
	var allEleb=document.getElementsByTagName('*');
	var shClassArr=[];
	var sbClassArr=[];
	for(var i=0; i<allEleh.length; i++){
		if(allEleh[i].className==shClass){
			shClassArr.push(allEleh[i]);
		}
	}
	for(var j=0; j<allEleb.length; j++){
		if(allEleb[j].className==sbClass){
			sbClassArr.push(allEleb[j]);
		}
	}
//	alert(shClassArr.length);
//	alert(sbClassArr.length);
	for(var a=3; a<shClassArr.length; a++){
		//alert(shClassArr[a].className);
		card6(shClassArr[a],sbClassArr[a]);
	}
	

}

function card6(hCard,bCard){
	var aHcard=hCard.getElementsByTagName('li');
	var aBcard=bCard.getElementsByTagName('div');
	for(var i=0;i<aHcard.length;i++){
		aHcard[i].index=i;
		aHcard[i].onmouseover=function(){
			//干掉所有
			for(var i=0;i<aHcard.length;i++){
				aHcard[i].className='';
				aBcard[i].className='tabs_item';	
			}
			//点亮当前
			this.className='active';
			aBcard[this.index].className='tabs_item show';
		};	
		
	}
}*/

function card6(cardH,cardB){
	var oCardH=document.getElementById(cardH);
	var aCardH=oCardH.getElementsByTagName('li');
	var oCardB=document.getElementById(cardB);
	var aCardB=oCardB.getElementsByTagName('div');
	
	for(var i=0; i<aCardH.length; i++){
		aCardH[i].index=i;
		aCardH[i].onmouseover=function(){
			for(var i=0; i<aCardH.length; i++){
					aCardH[i].className='';
					aCardB[i].className='tabs_item';
			}
			if(this.index==0){
				this.className='noBl active';
				aCardB[this.index].className='tabs_item show';
			}
			else{
				this.className='active';
				aCardB[this.index].className='tabs_item show';
			}
		};
	}
}

function card7(cardH,cardB){
	var oCardH=document.getElementById(cardH);
	var aCardH=oCardH.getElementsByTagName('span');
	var oCardB=document.getElementById(cardB);
	var aCardB=oCardB.getElementsByTagName('div');
	
	for(var i=0; i<aCardH.length; i++){
		aCardH[i].index=i;
		aCardH[i].onmouseover=function(){
			for(var i=0; i<aCardH.length; i++){
				if(i==(aCardH.length-1)){
					aCardH[i].className='contNav_item last';
				}
				else{
					aCardH[i].className='contNav_item';
				}
				aCardB[i+1].className='tabs_item';
			}
			if(this.index==(aCardH.length-1)){
				this.className='contNav_item last active';
			}
			else{
				this.className='contNav_item active';
			}
			aCardB[this.index+1].className='tabs_item show';
		};
	}
}