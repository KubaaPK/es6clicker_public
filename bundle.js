!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=t(5),u=o(r);new u["default"]},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),r=function(){function e(){t(this,e),null===this.loadFromLocalStorage("upgrades")&&this.saveToLocalStorage("upgrades",'[{"name":"doubleClickPower","cost":"300","own":"0"}]'),null===this.loadFromLocalStorage("coins")&&this.saveToLocalStorage("coins",0),null===this.loadFromLocalStorage("workers")&&this.saveToLocalStorage("workers",'[{"name":"salesman","amount":0,"production": 1,"cost":50},{"name":"lemonadestand","amount":0,"production": 3,"cost":250},{"name":"greengrocers","amount":0,"production": 10,"cost":1000},{"name":"shop","amount":0,"production": 50,"cost":5000},{"name":"supermarket","amount":0,"production": 100,"cost":25000},{"name":"corporation","amount":0,"production": 250,"cost":100000}]')}return o(e,[{key:"saveToLocalStorage",value:function(e,n){localStorage.setItem(e,n)}},{key:"loadFromLocalStorage",value:function(e){var n=localStorage.getItem(e);return n}}]),e}();n["default"]=r},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),a=t(1),i=o(a),s=new i["default"],l=function(){function e(){r(this,e)}return u(e,[{key:"getAllWorkers",value:function(){var e=JSON.parse(s.loadFromLocalStorage("workers"));return e}},{key:"getWorkersName",value:function(e){return this.getAllWorkers()[e].name}},{key:"getWorkersAmount",value:function(e){return this.getAllWorkers()[e].amount}},{key:"getWorkersProduction",value:function(e){return this.getAllWorkers()[e].production}},{key:"getWorkersCost",value:function(e){return this.getAllWorkers()[e].cost}},{key:"setWorkersAmount",value:function(e){var n=this.getAllWorkers();n[e].amount=n[e].amount+1;var t=JSON.stringify(n);s.saveToLocalStorage("workers",t)}},{key:"setWorkersCost",value:function(e){var n=this.getAllWorkers(),t=this.getWorkersCost(e),o=Math.round(t+.6*t);n[e].cost=o;var r=JSON.stringify(n);s.saveToLocalStorage("workers",r)}}]),e}();n["default"]=l},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),a=t(1),i=o(a),s=new i["default"],l=function(){function e(){r(this,e)}return u(e,[{key:"getAllUpgrades",value:function(){var e=JSON.parse(s.loadFromLocalStorage("upgrades"));return e}},{key:"getUpgradeCost",value:function(e){return this.getAllUpgrades()[e].cost}}]),e}();n["default"]=l},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),a=t(1),i=o(a),s=t(6),l=o(s),c=t(3),d=o(c),f=new i["default"],m=new l["default"],g=(new d["default"],function(){function e(){var n=this;r(this,e),this.init(),setInterval(function(){n.interval()},10),setInterval(function(){n.coinsPerSecond()},1e3)}return u(e,[{key:"init",value:function(){this.addCoin()}},{key:"interval",value:function(){this.displayCoinsFromLocalStorage(),this.getCoins()}},{key:"displayCoinsFromLocalStorage",value:function(){document.getElementById("coinsAmount").innerHTML="$"+f.loadFromLocalStorage("coins")}},{key:"coinsPerSecond",value:function(){var e=parseInt(this.getCoins())+m.getAllProduction(),n=document.getElementById("coinsPerSecond");n.innerHTML=2*m.displayProduction()+" $/s",this.setCoin(e)}},{key:"addCoin",value:function(){var e=this,n=1,t=document.getElementById("addCoinBtn");t.addEventListener("click",function(){e.setCoin(parseInt(e.getCoins())+n)})}},{key:"getCoins",value:function(){return f.loadFromLocalStorage("coins")}},{key:"setCoin",value:function(e){f.saveToLocalStorage("coins",e)}}]),e}());n["default"]=g},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var u=t(7),a=o(u),i=function s(){r(this,s);new a["default"]};n["default"]=i},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),a=t(2),i=o(a),s=new i["default"],l=function(){function e(){r(this,e)}return u(e,[{key:"getAllProduction",value:function(){for(var e=0,n=0;n<=5;n++)e+=s.getWorkersProduction(n)*s.getWorkersAmount(n);return e}},{key:"displayProduction",value:function(){var e=2*this.getAllProduction();return e}}]),e}();n["default"]=l},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),a=t(4),i=o(a),s=t(2),l=o(s),c=t(8),d=o(c),f=t(3),m=o(f),g=new i["default"],y=new l["default"],p=new d["default"],k=new m["default"],v=function(){function e(){r(this,e),p.displaydefaultCostAmount(),this.buyingShop(),this.buyingUpgrades()}return u(e,[{key:"buyWorker",value:function(e){if(g.getCoins()>=y.getWorkersCost(e)){y.setWorkersAmount(e);var n=g.getCoins()-y.getWorkersCost(e);y.setWorkersCost(e),g.setCoin(n)}else console.log("nie można kupić")}},{key:"buyUpgrade",value:function(e){if(g.getCoins()>=k.getUpgradeCost(e)){k.updateUpgradeStatus(e);var n=g.getCoins()-k.getUpgradeCost(e);g.setCoin(n);var t=document.getElementById("doubleCoinsUpgrade");0===e&&(t.disabled=!0)}else console.log("za malo piniondz")}},{key:"buyingShop",value:function(){var e=this,n=document.getElementById("buySalesmanBtn"),t=document.getElementById("buyLemonadeStandBtn"),o=document.getElementById("buyGreengrocersBtn"),r=document.getElementById("buyShopBtn"),u=document.getElementById("buySupermarketBtn"),a=document.getElementById("buyCorporationBtn");n.addEventListener("click",function(){e.buyWorker(0),p.displaySalesmanInfo()}),t.addEventListener("click",function(){e.buyWorker(1),p.displayLemonadestandInfo()}),o.addEventListener("click",function(){e.buyWorker(2),p.displayGreengrocersInfo()}),r.addEventListener("click",function(){e.buyWorker(3),p.displayShopInfo()}),u.addEventListener("click",function(){e.buyWorker(4),p.displaySupermarketInfo()}),a.addEventListener("click",function(){e.buyWorker(5),p.displayCorporationInfo()})}},{key:"buyingUpgrades",value:function(){var e=this,n=document.getElementById("doubleCoinsUpgrade");k.isOwn(0)&&(n.disabled=!0),n.addEventListener("click",function(){e.buyUpgrade(0)})}}]),e}();n["default"]=v},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),a=t(2),i=o(a),s=new i["default"],l=function(){function e(){r(this,e)}return u(e,[{key:"displaySalesmanInfo",value:function(){document.getElementById("salesmanCost").innerHTML=s.getWorkersCost(0),document.getElementById("amountSalesman").innerHTML=s.getWorkersAmount(0)}},{key:"displayLemonadestandInfo",value:function(){document.getElementById("lemonadestandCost").innerHTML=s.getWorkersCost(1),document.getElementById("amountLemonadeStand").innerHTML=s.getWorkersAmount(1)}},{key:"displayGreengrocersInfo",value:function(){document.getElementById("greengrocersCost").innerHTML=s.getWorkersCost(2),document.getElementById("amountGreengrocers").innerHTML=s.getWorkersAmount(2)}},{key:"displayShopInfo",value:function(){document.getElementById("shopCost").innerHTML=s.getWorkersCost(3),document.getElementById("amountShop").innerHTML=s.getWorkersAmount(3)}},{key:"displaySupermarketInfo",value:function(){document.getElementById("supermarketCost").innerHTML=s.getWorkersCost(4),document.getElementById("amountSupermarket").innerHTML=s.getWorkersAmount(4)}},{key:"displayCorporationInfo",value:function(){document.getElementById("corporationCost").innerHTML=s.getWorkersCost(5),document.getElementById("amountCorporation").innerHTML=s.getWorkersAmount(5)}},{key:"displaydefaultCostAmount",value:function(){document.getElementById("salesmanCost").innerHTML=s.getWorkersCost(0),document.getElementById("amountSalesman").innerHTML=s.getWorkersAmount(0),document.getElementById("lemonadestandCost").innerHTML=s.getWorkersCost(1),document.getElementById("amountLemonadeStand").innerHTML=s.getWorkersAmount(1),document.getElementById("greengrocersCost").innerHTML=s.getWorkersCost(2),document.getElementById("amountGreengrocers").innerHTML=s.getWorkersAmount(2),document.getElementById("shopCost").innerHTML=s.getWorkersCost(3),document.getElementById("amountShop").innerHTML=s.getWorkersAmount(3),document.getElementById("supermarketCost").innerHTML=s.getWorkersCost(4),document.getElementById("amountSupermarket").innerHTML=s.getWorkersAmount(4),document.getElementById("corporationCost").innerHTML=s.getWorkersCost(5),document.getElementById("amountCorporation").innerHTML=s.getWorkersAmount(5)}}]),e}();n["default"]=l}]);