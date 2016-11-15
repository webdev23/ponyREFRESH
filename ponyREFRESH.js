/* To be called like this:
* 
<script
data-seconds=5
data-px=800
data-scroll=1
data-active=1
src="https://raw.githubusercontent.com/webdev23/ponyREFRESH/master/ponyREFRESH.js">
</script>
* 
* ***
* nk | ponyhacks.com
***/

let rEFRESH
,in_SECONDS=document.querySelectorAll('[data-seconds]')[0].dataset.seconds
	,px=document.querySelectorAll('[data-px]')[0].dataset.px
	,sCROLL=document.querySelectorAll('[data-scroll]')[0].dataset.scroll
	,aCTIVE=document.querySelectorAll('[data-active]')[0].dataset.active
function pwnIN(){window.clearTimeout(rEFRESH)}
function pwnOUT(){if(sCROLL==true){window.scrollTo(0,px)};
if(aCTIVE==true){rEFRESH=window.setTimeout(reload,(in_SECONDS)*1000)}}
function reload(){window.location.reload(true)}
document.body.setAttribute('onmouseleave','pwnOUT()')
document.body.setAttribute('onmouseenter','pwnIN()')
pwnOUT()
