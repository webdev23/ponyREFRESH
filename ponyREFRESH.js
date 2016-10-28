let rEFRESH
,in_SECONDS=document.querySelectorAll('[data-seconds]')[0].dataset.seconds
	,pxTOP=document.querySelectorAll('[data-pxTOP]')[0].dataset.pxTOP
	,sCROLL=document.querySelectorAll('[data-scroll]')[0].dataset.scroll
	,aCTIVE=document.querySelectorAll('[data-active]')[0].dataset.active
function pwnIN(){window.clearTimeout(rEFRESH)}
function pwnOUT(){if(sCROLL==true){window.scrollTo(0,pxTOP)};
if(aCTIVE==true){rEFRESH=window.setTimeout(reload,(in_SECONDS)*1000)}}
function reload(){window.location.reload(true)}
document.body.setAttribute('onmouseleave',pwnOUT())
document.body.setAttribute('onmouseenter',pwnIN())
pwnOUT()
