"use strict";(self["webpackChunkredo_spa"]=self["webpackChunkredo_spa"]||[]).push([[576],{3576:(e,a,s)=>{s.r(a),s.d(a,{default:()=>K});var l=s(3673),i=s(2323);const t={class:"row justify-center q-py-xl"},r={class:"col-10"},n={class:"row justify-center q-gutter-y-lg q-gutter-x-md"};function o(e,a,s,o,m,d){const u=(0,l.up)("spa-filter-box"),p=(0,l.up)("spa-animal-card"),g=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(g,{style:{"padding-top":"65px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{searchAnimal:e.searchAnimal},null,8,["searchAnimal"]),(0,l._)("div",t,[(0,l._)("div",r,[(0,l._)("div",n,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.animalsFiltered,(a=>((0,l.wg)(),(0,l.iD)("div",{key:a.id,style:(0,i.j5)(e.$q.screen.lt.md?"max-width: 200px":"width: 250px")},[(0,l.Wm)(p,{animal:a},null,8,["animal"])],4)))),128))])])])])),_:1})}s(71);var m=s(1959);const d={class:"row justify-center text-dark",style:{"background-color":"rgb(99, 63, 50, 0.15)"}},u={class:"col-10 q-py-md"},p={class:"row justify-between items-end q-gutter-y-sm"},g={class:"col-5"},c=(0,l._)("div",{class:"text-bold"},"Espèces",-1),f={class:"col-6"},h=(0,l._)("div",{class:"text-bold"},"Sexe",-1),b={class:"col-5"},w=(0,l._)("div",{class:"text-bold"},"Age",-1),_={class:"text-subtitle2 text-center"},y={class:"col-6 row justify-end items-end"},v={class:"col-10"},x=(0,l._)("div",{class:"text-bold"},"Ville",-1);function k(e,a,s,t,r,n){const o=(0,l.up)("q-option-group"),m=(0,l.up)("q-range"),k=(0,l.up)("q-input"),j=(0,l.up)("q-checkbox");return(0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("div",u,[(0,l._)("div",p,[(0,l._)("div",g,[c,(0,l.Wm)(o,{modelValue:e.searchAnimal.species,"onUpdate:modelValue":a[0]||(a[0]=a=>e.searchAnimal.species=a),options:e.options.species,label:"Espece",inline:"",color:"dark"},null,8,["modelValue","options"])]),(0,l._)("div",f,[h,(0,l.Wm)(o,{modelValue:e.searchAnimal.gender,"onUpdate:modelValue":a[1]||(a[1]=a=>e.searchAnimal.gender=a),options:e.options.gender,label:"Sexe",color:"dark",inline:""},null,8,["modelValue","options"])]),(0,l._)("div",b,[w,(0,l.Wm)(m,{modelValue:e.searchAnimal.age,"onUpdate:modelValue":a[2]||(a[2]=a=>e.searchAnimal.age=a),min:0,max:5,color:"dark",markers:""},null,8,["modelValue"]),(0,l._)("div",_," Entre "+(0,i.zw)(e.ages[e.searchAnimal.age.min])+" et "+(0,i.zw)(e.ages[e.searchAnimal.age.max]),1)]),(0,l._)("div",y,[(0,l._)("div",v,[x,(0,l.Wm)(k,{modelValue:e.searchAnimal.localisation,"onUpdate:modelValue":a[3]||(a[3]=a=>e.searchAnimal.localisation=a),color:"dark",outlined:"",dense:""},null,8,["modelValue"])]),(0,l.Wm)(j,{class:"col-2",modelValue:e.searchAnimal.sos,"onUpdate:modelValue":a[4]||(a[4]=a=>e.searchAnimal.sos=a),label:"SOS",color:"dark"},null,8,["modelValue"])])])])])}const j=["2 mois","6 mois","1 an","3 ans","5 ans","10 ans et +"],C={species:[{label:"🐶 Chien",value:"chien"},{label:"🐱 Chat",value:"chat"}],gender:[{label:"Male",value:"male"},{label:"Femelle",value:"female"},{label:"Indiférrent",value:"indiferrent"}]},A=(0,l.aZ)({name:"Filter",props:["searchAnimal"],setup(){return{options:C,ages:j}}});var D=s(8870),q=s(9007),R=s(8908),V=s(5735),z=s(7518),E=s.n(z);A.render=k;const S=A;E()(A,"components",{QOptionGroup:D.Z,QRange:q.Z,QInput:R.Z,QCheckbox:V.Z});const F=["src"],W={class:"row q-gutter-x-xs items-center"},B={class:"col-12"},Q={class:"row items-center"},Z={class:"q-pl-xs"};function I(e,a,s,t,r,n){const o=(0,l.up)("q-btn"),m=(0,l.up)("q-item-label"),d=(0,l.up)("q-icon"),u=(0,l.up)("q-item-section"),p=(0,l.up)("q-item"),g=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(g,null,{default:(0,l.w5)((()=>[(0,l._)("img",{src:e.animal.image,style:(0,i.j5)(e.$q.screen.lt.md?"height: 140px":"height: 160px")},null,12,F),(0,l.Wm)(p,{clickable:"",class:"column"},{default:(0,l.w5)((()=>[e.animal.sos?((0,l.wg)(),(0,l.j4)(o,{key:0,color:"primary",label:"SOS",class:"absolute",style:{top:"0",right:"10px",transform:"translateY(-50%)"}})):(0,l.kq)("",!0),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l._)("div",W,[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.animal.name),1)])),_:1}),(0,l.Wm)(d,{name:e.animal.gender},null,8,["name"])])])),_:1}),(0,l.Wm)(m,{caption:"",class:"row q-pt-sm q-gutter-y-xs"},{default:(0,l.w5)((()=>[(0,l._)("div",B,(0,i.zw)(e.animal.refuge.name),1),(0,l._)("div",Q,[(0,l.Wm)(d,{name:"room"}),(0,l._)("div",Z,(0,i.zw)(e.animal.refuge.postalCode)+" "+(0,i.zw)(e.animal.refuge.region),1)])])),_:1})])),_:1})])),_:1})}const L=(0,l.aZ)({props:["animal"],setup(){}});var M=s(151),P=s(3414),Y=s(522),T=s(2035),U=s(2350),G=s(4554);L.render=I;const H=L;E()(L,"components",{QCard:M.Z,QItem:P.Z,QBtn:Y.Z,QItemSection:T.Z,QItemLabel:U.Z,QIcon:G.Z});const O={"03":{number:3,name:"Refuge de Brugheas",address:"9 bis, La Boucharde",postalCode:"03700",region:"Brugheas",mail:"brugheas@la-spa.fr",tel:"0470324342"},"08":{number:8,name:"Refuge de Cliron",address:"8 route de Renwez",postalCode:"08090",region:"Cliron",mail:"cliron@la-spa.fr",tel:"0324549040"},"09":{number:9,name:"Refuge Le Clergue",address:"Route de Villefranche",postalCode:"09500",region:"Mirepoix",mail:"mirepoix@la-spa.fr",tel:"0561688977"},14:{number:14,name:"Refuge Le Cabourg",address:"Avenue de l'hippodrome",postalCode:"14390",region:"Cabourg",mail:"cabourg@la-spa.fr",tel:"0231280971"},35:{number:35,name:"Refuge Le Bois Pinson",address:"Route des Eaux",postalCode:"35500",region:"Vitré",mail:"vitre@la-spa.fr",tel:"029752132"},37:{number:37,name:"Refuge de Luynes",address:"Malitourne",postalCode:"37230",region:"Luynes",mail:"luynes@la-spa.fr",tel:"0247421047"},57:{number:57,name:"Refuge Gerhard Cramer",address:"Ferme du voisinage - Route Nationale",postalCode:"57680",region:"Arry",mail:"arry@la-spa.fr",tel:"0387520899"},66:{number:66,name:"Refuge CAP de Perpignan",address:"...",postalCode:"66000",region:"Perpignan",mail:"perpignan@la-spa.fr",tel:"0468575253"},83:{number:83,name:'Refuge "La Ferme du Relais"',address:"125 route de Lorgues",postalCode:"83780",region:"Flayosc",mail:"flayosc@la-spa.fr",tel:"0494707066"},85:{number:85,name:"Refuge de La Roche sur Yon",address:"Impasse François Cevert - Route de Nantes",postalCode:"85000",region:"La Roche sur Yon",mail:"larochesuryon@la-spa.fr",tel:"0251054101"}},N={cats:[{id:1,name:"Sunday",gender:"male",breed:"Européen",birthDate:"01/08/2021",sos:!1,refuge:O[35],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517165.jpg?itok=Tae30y4T"},{id:2,name:"Otis",gender:"male",breed:"Européen",birthDate:"01/10/2017",sos:!1,refuge:O[85],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517168.jpeg?itok=rb54-TvH"},{id:3,name:"Nikita",gender:"female",breed:"Européen",birthDate:"01/01/2016",sos:!1,refuge:O["08"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517159.jpg?itok=WW9jnlmt"},{id:4,name:"Shoco",gender:"male",breed:"Européen",birthDate:"01/08/2021",sos:!1,refuge:O["08"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517163.jpg?itok=s8AcgY_d"},{id:5,name:"Sesame",gender:"male",breed:"Européen",birthDate:"01/08/2021",sos:!1,refuge:O["08"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517160.jpg?itok=EnB9MVGh"},{id:6,name:"Pop Corn",gender:"female",breed:"Croisé / Autre (Maincoon)",birthDate:"01/10/2014",sos:!1,refuge:O["09"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517156.jpg?itok=mcd1jvFR"},{id:7,name:"Aya",gender:"female",breed:"Européen",birthDate:"23/07/2021",sos:!1,refuge:O["08"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517139.jpg?itok=OlsI9_tL"},{id:8,name:"Tricote",gender:"female",breed:"Européen",birthDate:"01/07/2021",sos:!1,refuge:O["03"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517138.jpg?itok=OnJ4AxCP"},{id:9,name:"Croco",gender:"male",breed:"Européen",birthDate:"01/07/2021",sos:!1,refuge:O["03"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517136.jpg?itok=0qjIJGQS"},{id:10,name:"Houmous",gender:"male",breed:"Européen",birthDate:"01/01/2012",sos:!0,refuge:O["03"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/514420.jpg?itok=4kH9Q0-1"}],dogs:[{id:1,name:"Yoshi",gender:"male",breed:"Berger",size:"grand",birthDate:"17/04/2014",sos:!1,refuge:O[83],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/516883.jpg?itok=d8tS5Ljf"},{id:2,name:"Tania",gender:"female",breed:"Croisé / Autre (Berger)",size:"grand",birthDate:"01/01/2009",sos:!0,refuge:O["08"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/516736.jpg?itok=vStmuk-0"},{id:3,name:"Derek",gender:"male",breed:"Cane corso",size:"grand",birthDate:"11/09/2011",sos:!0,refuge:O["08"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/516735.jpg?itok=5VjnjBW4"},{id:4,name:"Filou",gender:"male",breed:"Fox terrier poil dur",size:"petit",birthDate:"03/10/2010",sos:!0,refuge:O[14],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/513841.jpg?itok=ZxR29rQA"},{id:5,name:"Alpy",gender:"male",breed:"Bouvier Bernois",size:"grand",birthDate:"18/03/2011",sos:!0,refuge:O[37],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517166.jpg?itok=btLu5AYI"},{id:6,name:"Mychka",gender:"female",breed:"Berger d'Asie Centrale",size:"grand",birthDate:"01/11/2020",sos:!1,refuge:O[57],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517164.jpg?itok=FwE-P0by"},{id:7,name:"Marley",gender:"male",breed:"Epagneul",size:"grand",birthDate:"25/04/2016",sos:!0,refuge:O["08"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517157.jpg?itok=_Ta4gE5_"},{id:8,name:"Django",gender:"male",breed:"Berger de Beauce",size:"grand",birthDate:"14/08/2014",sos:!0,refuge:O[57],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/490149.jpg?itok=pvp2IDbG"},{id:9,name:"Mia",gender:"female",breed:"Chow chow",size:"grand",birthDate:"01/01/2016",sos:!1,refuge:O[66],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517149.jpg?itok=0mnsaQjG"},{id:10,name:"Marvel",gender:"male",breed:"Croisé / Autre (StaffordShire bull terrier)",size:"moyen",birthDate:"01/01/2019",sos:!1,refuge:O[66],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/513459.jpg?itok=FcyCF56l"}]},J=(0,l.aZ)({name:"PageIndex",props:["selected"],components:{SpaFilterBox:S,SpaAnimalCard:H},setup(e){const a=(0,m.iH)({species:e.selected?e.selected:null,localisation:null,refuge:null,gender:"indiferrent",age:{min:0,max:5},sos:!1});let s=(0,m.iH)([]);return(0,l.YP)((()=>a),(()=>{a.value.species?"chat"===a.value.species?s.value=[...N.cats]:s.value=[...N.dogs]:s.value=[...N.cats,...N.dogs],"indiferrent"!==a.value.gender&&(s.value=s.value.filter((e=>e.gender===a.value.gender))),a.value.sos&&(s.value=s.value.filter((e=>e.sos)));const e=[{year:0,month:2},{year:0,month:6},{year:1},{year:3},{year:5},{year:99}];s.value=s.value.filter((s=>{const l=new Date;let i=l.getUTCFullYear()-parseInt(s.birthDate.split("/")[2]),t=l.getUTCMonth()+1-parseInt(s.birthDate.split("/")[1]);t<0&&(i--,t=12-Math.abs(t));let r=!0;return e[a.value.age.min].month&&0===i&&r&&(r=e[a.value.age.min].month<=t),r&&(r=e[a.value.age.min].year<=i),e[a.value.age.min].max&&0===i&&r&&(r=e[a.value.age.min].month>=t),r&&(r=e[a.value.age.max].year>=i),r}))}),{deep:!0,immediate:!0}),{searchAnimal:a,animalsFiltered:s}}});var $=s(4379);J.render=o;const K=J;E()(J,"components",{QPage:$.Z})}}]);