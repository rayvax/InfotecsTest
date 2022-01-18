// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/user-table.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/table-sort.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/table-edit.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"mock_data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetchMockData;
var data = [{
  "id": "5c2286fb23e87be312d55d9a",
  "name": {
    "firstName": "Brooks",
    "lastName": "Stone"
  },
  "phone": "+7 (843) 431-2190",
  "about": "Qui aliquip esse occaecat voluptate cillum laborum do adipisicing ea. Lorem dolor pariatur exercitation et Lorem voluptate reprehenderit. Culpa nisi sunt laborum culpa eu et nulla aute aliqua commodo cupidatat culpa. Eu laboris dolor enim officia mollit labore proident proident tempor ex minim magna dolor. Ipsum cillum officia irure amet enim voluptate consequat deserunt laborum nulla excepteur pariatur voluptate incididunt. In excepteur adipisicing dolor ea occaecat elit. Irure dolor quis cillum minim voluptate.",
  "eyeColor": "blue"
}, {
  "id": "5c2286fb7f4c26c63eff1b66",
  "name": {
    "firstName": "Johnston",
    "lastName": "Tate"
  },
  "phone": "+7 (939) 409-2841",
  "about": "Eu ipsum est in exercitation voluptate occaecat fugiat fugiat ea elit ad veniam adipisicing ullamco. Laboris consectetur enim dolore amet exercitation sit non do reprehenderit non. Proident consequat anim non voluptate non culpa sit occaecat adipisicing. Reprehenderit dolor cillum laboris incididunt exercitation quis esse in ad ut voluptate commodo in. Exercitation veniam adipisicing irure ut qui nulla.",
  "eyeColor": "brown"
}, {
  "id": "5c2286fb25005bd0905c04e1",
  "name": {
    "firstName": "Susie",
    "lastName": "Newman"
  },
  "phone": "+7 (910) 551-3326",
  "about": "Non eiusmod minim ut anim qui non dolore veniam. Lorem veniam nostrud ullamco ad enim commodo incididunt amet ipsum irure. Minim sint tempor incididunt quis. Excepteur commodo mollit elit voluptate reprehenderit eiusmod ex nostrud dolor mollit. Culpa duis pariatur anim sunt in irure ex aliqua.",
  "eyeColor": "red"
}, {
  "id": "5c2286fb982c7590025be630",
  "name": {
    "firstName": "Kelly",
    "lastName": "Schwartz"
  },
  "phone": "+7 (977) 450-2369",
  "about": "Et commodo velit proident reprehenderit. In cillum adipisicing ut excepteur nostrud pariatur proident. Qui consectetur esse aliqua incididunt dolor esse ullamco cupidatat tempor mollit. Elit nulla eiusmod occaecat laborum laborum consequat eu nisi labore tempor aute. Dolor sunt anim reprehenderit non excepteur dolor consectetur eu.",
  "eyeColor": "green"
}, {
  "id": "5c2286fbc20c5d4618855c36",
  "name": {
    "firstName": "Chris",
    "lastName": "Dorsey"
  },
  "phone": "+7 (886) 425-2696",
  "about": "Aliquip velit ut ex nisi officia proident. Eu anim elit deserunt exercitation officia tempor proident eu non incididunt aliqua. Lorem consequat commodo laborum minim ad consectetur. Sunt et anim dolor mollit tempor irure. Non fugiat anim laborum fugiat duis et culpa ea enim excepteur. Amet sint enim aliquip est.",
  "eyeColor": "blue"
}, {
  "id": "5c2286fb0d7c75cda0c18b33",
  "name": {
    "firstName": "Jimmie",
    "lastName": "Gay"
  },
  "phone": "+7 (908) 513-3062",
  "about": "Nisi deserunt eu consectetur occaecat minim aliqua eu cupidatat ea. Esse consectetur deserunt nulla ullamco sit aute. Ad aliqua sint veniam enim exercitation in eiusmod ut aliqua consequat ipsum laborum. Aliqua excepteur non dolore adipisicing aliquip incididunt nostrud dolore consequat.",
  "eyeColor": "blue"
}, {
  "id": "5c2286fb49295e3d2caa2b19",
  "name": {
    "firstName": "Moon",
    "lastName": "Ortiz"
  },
  "phone": "+7 (905) 447-3306",
  "about": "Eiusmod amet commodo sit nulla velit eu eiusmod. Fugiat proident sunt fugiat nostrud occaecat velit qui. Ea aute culpa irure excepteur esse. Laborum esse in enim aliqua proident ea cupidatat enim ea enim exercitation ullamco. Aliquip culpa enim et tempor elit enim quis sint ea.",
  "eyeColor": "blue"
}, {
  "id": "5c2286fbb2ad79f1f40500d3",
  "name": {
    "firstName": "Beach",
    "lastName": "Lindsey"
  },
  "phone": "+7 (981) 438-3607",
  "about": "Laborum pariatur fugiat ut fugiat nulla ad nostrud minim nulla do do occaecat labore. Incididunt exercitation nulla ea sint quis excepteur reprehenderit. Amet ea tempor dolor incididunt aliqua reprehenderit laborum excepteur consectetur consequat minim ea. Velit labore ex non reprehenderit. Dolor laboris voluptate sit adipisicing ad officia tempor aliqua eu. Aliqua do cupidatat veniam nulla. Aliqua minim tempor non eu commodo quis ex.",
  "eyeColor": "blue"
}, {
  "id": "5c2286fb25a61a6ff446ab4f",
  "name": {
    "firstName": "Gilbert",
    "lastName": "Sanford"
  },
  "phone": "+7 (891) 579-2502",
  "about": "Cupidatat veniam occaecat deserunt ullamco do magna ex voluptate exercitation irure. Proident ea officia laboris nulla eu fugiat aliqua veniam duis exercitation aute anim velit. Minim nulla amet id mollit reprehenderit id. Duis ullamco occaecat mollit excepteur adipisicing nostrud velit exercitation quis veniam commodo aliquip veniam. Mollit sunt culpa nulla excepteur adipisicing do ut fugiat. Mollit elit pariatur esse ea officia mollit exercitation.",
  "eyeColor": "red"
}, {
  "id": "5c2286fbfb41f12cd0bc3fb2",
  "name": {
    "firstName": "Julie",
    "lastName": "Shepherd"
  },
  "phone": "+7 (944) 442-3173",
  "about": "Excepteur quis exercitation sint officia commodo commodo aliquip ex exercitation laborum quis qui. Reprehenderit aliqua dolore aliqua est veniam et. Cupidatat sint ea ex consectetur eu aliqua cillum velit nulla ipsum fugiat qui ad.",
  "eyeColor": "red"
}, {
  "id": "5c2286fbd9e655815bd489d2",
  "name": {
    "firstName": "Callie",
    "lastName": "Ford"
  },
  "phone": "+7 (998) 563-3808",
  "about": "Ea elit veniam laborum adipisicing. Lorem consequat magna ea et aliqua duis in mollit ea commodo officia amet et. Amet eu cupidatat proident commodo ex exercitation est voluptate mollit laborum et tempor duis nisi. Qui cupidatat adipisicing enim irure enim elit ullamco.",
  "eyeColor": "brown"
}, {
  "id": "5c2286fbbabce0ea304e7b70",
  "name": {
    "firstName": "Beatriz",
    "lastName": "Lancaster"
  },
  "phone": "+7 (812) 472-3455",
  "about": "Cillum quis incididunt aute laboris ad ad irure laborum fugiat nostrud. Ad aute sint duis excepteur ut officia. Qui consequat incididunt magna incididunt anim sunt cillum dolor incididunt veniam nulla elit id. Ullamco eu in tempor laborum sunt consectetur cupidatat ex amet Lorem reprehenderit in. Exercitation laborum labore minim ad. Occaecat culpa amet aute cupidatat nostrud excepteur.",
  "eyeColor": "red"
}, {
  "id": "5c2286fb639d7dbcc0cae9e6",
  "name": {
    "firstName": "Johnnie",
    "lastName": "Knowles"
  },
  "phone": "+7 (995) 488-2804",
  "about": "In esse exercitation tempor proident nulla est amet ut. Enim pariatur do laboris dolor Lorem amet ullamco eiusmod aliqua excepteur elit nisi. Adipisicing deserunt cupidatat in reprehenderit adipisicing proident deserunt. Elit adipisicing officia excepteur magna magna officia incididunt minim irure pariatur. Aliquip culpa do ullamco labore aliqua minim reprehenderit magna esse Lorem culpa. Consequat elit labore irure cupidatat id qui pariatur deserunt non consequat eiusmod et minim amet.",
  "eyeColor": "red"
}, {
  "id": "5c2286fb5d734a18b3163fc8",
  "name": {
    "firstName": "Finley",
    "lastName": "Watts"
  },
  "phone": "+7 (928) 472-2012",
  "about": "Occaecat in velit ullamco ad mollit ea nisi mollit sit esse consectetur exercitation reprehenderit. Labore cupidatat voluptate quis ipsum esse excepteur. Enim sunt officia culpa Lorem ipsum voluptate id aliquip. Aute nostrud consectetur consectetur quis aute quis exercitation aliqua elit magna.",
  "eyeColor": "blue"
}, {
  "id": "5c2286fb54624961f84b6607",
  "name": {
    "firstName": "Brady",
    "lastName": "Trevino"
  },
  "phone": "+7 (954) 435-2361",
  "about": "In sunt non reprehenderit Lorem sit exercitation anim eiusmod irure. Non anim Lorem nulla in culpa non pariatur nulla in Lorem enim sit. Sunt pariatur deserunt occaecat ut. Nostrud enim laborum pariatur Lorem voluptate reprehenderit do aute officia veniam. Duis laborum et ea laboris elit consectetur id enim enim nisi consequat. Tempor occaecat culpa qui ipsum nisi fugiat nisi sit esse ea. Culpa est nisi Lorem officia commodo minim ullamco cupidatat nisi irure.",
  "eyeColor": "brown"
}, {
  "id": "5c2286fb5c2ac3cd9312946c",
  "name": {
    "firstName": "Vanessa",
    "lastName": "Lowe"
  },
  "phone": "+7 (804) 563-2180",
  "about": "Reprehenderit magna esse tempor dolor deserunt veniam officia ullamco ipsum. Officia nostrud dolore fugiat amet reprehenderit sint velit est nisi exercitation in et. Aliqua quis nisi duis minim. Exercitation pariatur officia aliquip do anim nisi nisi dolor pariatur consectetur ea.",
  "eyeColor": "green"
}, {
  "id": "5c2286fbad86e5926e025b52",
  "name": {
    "firstName": "Maricela",
    "lastName": "Roberson"
  },
  "phone": "+7 (937) 471-3638",
  "about": "Duis cupidatat qui nulla ea elit enim est incididunt aute consequat fugiat minim non sint. Id ipsum exercitation minim minim aute. Minim magna aliquip adipisicing in fugiat aliquip duis proident.",
  "eyeColor": "brown"
}, {
  "id": "5c2286fbe9146dab0289ee25",
  "name": {
    "firstName": "Marva",
    "lastName": "Ray"
  },
  "phone": "+7 (930) 439-2652",
  "about": "Non aliqua cupidatat quis adipisicing non consequat. Nulla eiusmod sint minim aliqua sint nostrud occaecat nisi incididunt. Dolor exercitation enim elit nisi aute cillum proident duis fugiat do ex excepteur. Deserunt fugiat est laborum esse veniam. Magna ipsum ea incididunt proident.",
  "eyeColor": "blue"
}, {
  "id": "5c2286fb6ed4e8c39e8f549c",
  "name": {
    "firstName": "Mcclure",
    "lastName": "Melendez"
  },
  "phone": "+7 (946) 407-3558",
  "about": "Exercitation aliqua id cillum laborum amet officia et. Est ad nulla do incididunt consequat officia laborum magna laboris. Incididunt est voluptate voluptate non est ipsum commodo enim voluptate mollit sit ullamco aliquip ea. Eiusmod incididunt ea occaecat incididunt adipisicing eiusmod deserunt elit reprehenderit. Est nulla minim commodo quis id irure proident do magna aliqua culpa aute cillum reprehenderit. Incididunt nulla Lorem officia veniam sunt culpa. Proident sunt sint incididunt non voluptate consequat amet elit ea ut incididunt dolore.",
  "eyeColor": "brown"
}, {
  "id": "5c2286fb42cbbcf764de06c8",
  "name": {
    "firstName": "Vasquez",
    "lastName": "Manning"
  },
  "phone": "+7 (970) 405-2316",
  "about": "Sunt mollit anim nulla consequat. Commodo laborum Lorem labore sunt pariatur consequat velit ad. Pariatur aute Lorem dolor cillum dolore sit ut. Deserunt excepteur elit do qui ex anim pariatur pariatur dolor eu laborum cillum ipsum veniam. Nisi dolore ipsum irure magna do amet ex esse in laboris aliqua ullamco fugiat cupidatat. Consequat tempor velit consectetur consequat enim do Lorem adipisicing tempor laboris. Mollit officia cupidatat veniam duis minim cillum nostrud incididunt ullamco ad incididunt enim est.",
  "eyeColor": "blue"
}, {
  "id": "5c2286fb03b63d22fad39e10",
  "name": {
    "firstName": "Hawkins",
    "lastName": "Hopkins"
  },
  "phone": "+7 (837) 542-3177",
  "about": "Fugiat aliqua esse eu quis velit nulla fugiat id reprehenderit sint non irure ea enim. Elit laborum sunt esse occaecat aliqua veniam dolore nostrud dolore. Eiusmod et commodo dolor exercitation Lorem consectetur qui sint eu. Culpa magna ut consequat Lorem nisi proident nisi irure adipisicing laboris velit dolore Lorem.",
  "eyeColor": "blue"
}, {
  "id": "5c2286fb88b8cf12c9a35aca",
  "name": {
    "firstName": "Angelina",
    "lastName": "Gillespie"
  },
  "phone": "+7 (868) 520-3317",
  "about": "Est esse deserunt laborum sint sunt occaecat cupidatat enim. Duis aliqua officia cupidatat cupidatat. Eu enim elit eu magna proident est veniam. Pariatur proident elit in aliqua ad consectetur proident nostrud anim reprehenderit.",
  "eyeColor": "red"
}, {
  "id": "5c2286fb73c192df1d6cf949",
  "name": {
    "firstName": "Meghan",
    "lastName": "Robbins"
  },
  "phone": "+7 (967) 457-3538",
  "about": "Lorem nostrud aute incididunt proident non laboris esse non do excepteur. Sint mollit consequat enim minim quis laborum ad cupidatat aliquip minim duis. Sunt excepteur id esse voluptate.",
  "eyeColor": "brown"
}, {
  "id": "5c2286fb8ab95671e3765259",
  "name": {
    "firstName": "Malone",
    "lastName": "Mack"
  },
  "phone": "+7 (843) 581-2406",
  "about": "Esse nostrud voluptate commodo commodo ad consectetur aliquip tempor velit veniam ex. Culpa reprehenderit pariatur aliqua in occaecat cillum esse laboris enim exercitation ex minim. Labore non sint deserunt id. Et deserunt id anim magna amet. Non ipsum commodo commodo sint nostrud dolore et veniam elit ad. Est dolor non ad id enim ut laborum do consectetur id officia. Exercitation cillum occaecat eiusmod exercitation.",
  "eyeColor": "brown"
}, {
  "id": "5c2286fba5bd3d862ac4d7e0",
  "name": {
    "firstName": "Eula",
    "lastName": "Aguirre"
  },
  "phone": "+7 (886) 422-2720",
  "about": "Consectetur do cupidatat reprehenderit nulla anim dolore anim voluptate esse non ex ullamco eu ea. Deserunt do irure ad incididunt ut. Minim pariatur ipsum quis ipsum reprehenderit exercitation voluptate ut occaecat labore amet. Nisi sit ex dolor nulla reprehenderit nulla ullamco sint aliqua. Ullamco non aliquip elit est eiusmod.",
  "eyeColor": "red"
}, {
  "id": "5c2286fb4148f031437ee69c",
  "name": {
    "firstName": "Katy",
    "lastName": "Church"
  },
  "phone": "+7 (860) 475-2861",
  "about": "Pariatur irure dolore excepteur commodo do id commodo ex sit nulla tempor fugiat dolor. Ad ullamco labore eiusmod laboris quis excepteur velit minim exercitation elit non irure. Occaecat voluptate nostrud cillum ea laboris exercitation consectetur ex. Incididunt nisi magna occaecat reprehenderit laboris esse. Laborum nulla fugiat sint incididunt. Deserunt quis ipsum aute eiusmod anim dolore sunt.",
  "eyeColor": "red"
}, {
  "id": "5c2286fb49d38b81288fca71",
  "name": {
    "firstName": "Blanca",
    "lastName": "Bradshaw"
  },
  "phone": "+7 (806) 457-2264",
  "about": "Dolore quis ex laborum anim tempor adipisicing Lorem pariatur reprehenderit commodo sit fugiat. Cillum consectetur ea reprehenderit anim. Dolor voluptate proident pariatur veniam reprehenderit aliqua nostrud.",
  "eyeColor": "green"
}, {
  "id": "5c2286fb0afb209b3bec8073",
  "name": {
    "firstName": "Kay",
    "lastName": "William"
  },
  "phone": "+7 (914) 411-3009",
  "about": "Consequat eu fugiat id elit laborum do nulla Lorem nulla in laborum laborum. Sit officia nulla amet consequat commodo deserunt eu cupidatat labore nostrud nostrud. Cillum nulla cillum ad nostrud eiusmod elit esse tempor commodo proident nostrud occaecat reprehenderit. Excepteur in officia mollit in qui non aute in sunt sint Lorem eiusmod consequat.",
  "eyeColor": "green"
}, {
  "id": "5c2286fbbfc54c696f663211",
  "name": {
    "firstName": "Camacho",
    "lastName": "Wells"
  },
  "phone": "+7 (946) 492-2660",
  "about": "Occaecat deserunt consequat deserunt officia ipsum ex. Nostrud officia in voluptate tempor velit nisi dolor cupidatat irure quis. Deserunt excepteur deserunt veniam exercitation ea cillum nostrud occaecat excepteur in ut veniam. Anim voluptate pariatur sunt consequat pariatur occaecat laborum nisi esse labore cupidatat. Do proident cillum consectetur enim Lorem voluptate proident.",
  "eyeColor": "brown"
}, {
  "id": "5c2286fbb73f5c893d46dde2",
  "name": {
    "firstName": "Bradshaw",
    "lastName": "Hodges"
  },
  "phone": "+7 (807) 586-3870",
  "about": "Ea quis sint magna amet nulla ut nostrud. Ea sunt do aliquip cupidatat pariatur officia ex laboris proident quis minim ea. Officia anim minim aliquip labore ex anim irure qui anim magna labore aliqua occaecat. Velit consequat duis culpa esse dolor. Duis non qui fugiat ex laboris.",
  "eyeColor": "red"
}, {
  "id": "5c2286fb6072dd80f1d56c39",
  "name": {
    "firstName": "Rutledge",
    "lastName": "Acosta"
  },
  "phone": "+7 (800) 574-3803",
  "about": "Dolore minim anim sint eu culpa et eu adipisicing nisi laborum laborum id qui veniam. Anim reprehenderit est dolor proident velit nisi. Anim eu elit enim laborum minim duis. Consequat et ipsum ex esse cillum excepteur commodo commodo irure sit proident. In deserunt nulla qui fugiat.",
  "eyeColor": "green"
}, {
  "id": "5c2286fbc750d871ffb16329",
  "name": {
    "firstName": "Cline",
    "lastName": "Fitzpatrick"
  },
  "phone": "+7 (894) 563-2167",
  "about": "In incididunt reprehenderit quis do consequat duis et in. Ea mollit mollit nulla deserunt nulla commodo voluptate laboris cupidatat sit non. Sint eiusmod minim ut commodo sint. Quis in ea non consectetur do aliquip veniam aute.",
  "eyeColor": "green"
}, {
  "id": "5c2286fb79bf32d653202f75",
  "name": {
    "firstName": "Sloan",
    "lastName": "Dale"
  },
  "phone": "+7 (828) 575-3234",
  "about": "Laboris ut ullamco consequat nisi occaecat sint nisi. Commodo minim deserunt officia exercitation est aliquip pariatur et aliquip quis dolore deserunt esse. Eu consectetur elit do veniam sit.",
  "eyeColor": "red"
}, {
  "id": "5c2286fb81d27ce4dd8a84ae",
  "name": {
    "firstName": "Buckner",
    "lastName": "Fowler"
  },
  "phone": "+7 (801) 600-3763",
  "about": "Est anim labore ea qui officia ea sunt dolor. Elit aliquip dolore amet nostrud qui cillum anim aute ut voluptate non non. Consectetur cillum velit elit sit dolore occaecat amet sunt mollit quis aute labore enim commodo. Minim eu in nisi mollit veniam aliquip fugiat duis nostrud deserunt incididunt duis.",
  "eyeColor": "brown"
}, {
  "id": "5c2286fbf5a16ef438aaa5fa",
  "name": {
    "firstName": "Hays",
    "lastName": "Hurley"
  },
  "phone": "+7 (963) 481-2993",
  "about": "Consequat commodo anim est ex veniam dolor pariatur officia officia elit quis sint esse. Commodo consectetur esse enim mollit reprehenderit qui ad. Mollit magna ipsum et exercitation voluptate veniam adipisicing duis nisi dolore ad do quis tempor. Esse ea nisi cupidatat non elit velit anim nulla qui nisi commodo ullamco anim.",
  "eyeColor": "red"
}, {
  "id": "5c2286fbab253d31546ba1ac",
  "name": {
    "firstName": "Ryan",
    "lastName": "Case"
  },
  "phone": "+7 (847) 466-2653",
  "about": "Excepteur quis dolor qui laborum anim anim cupidatat culpa esse sunt excepteur. Incididunt elit nostrud excepteur anim nostrud sit veniam deserunt sunt id ipsum labore aute dolor. Est culpa in do ea Lorem fugiat cillum reprehenderit. Consectetur cupidatat irure adipisicing dolore voluptate sit ex. Exercitation in tempor duis ea irure nisi minim velit ipsum irure. Cillum ullamco cillum commodo fugiat mollit.",
  "eyeColor": "brown"
}, {
  "id": "5c2286fb63577dc573f8a927",
  "name": {
    "firstName": "Tameka",
    "lastName": "Walls"
  },
  "phone": "+7 (984) 523-3641",
  "about": "Aliqua tempor do tempor Lorem laborum ut consectetur commodo velit magna non deserunt quis. Eu et cupidatat pariatur amet laborum amet officia eu voluptate ad adipisicing. Occaecat nisi Lorem esse commodo dolore tempor dolore exercitation ea sint labore. Do proident id quis ex do consequat non eiusmod consequat pariatur nostrud. Ad id adipisicing reprehenderit sit amet fugiat in eiusmod sunt incididunt laboris.",
  "eyeColor": "brown"
}, {
  "id": "5c2286fb82222dbb58fb241c",
  "name": {
    "firstName": "Diane",
    "lastName": "Pruitt"
  },
  "phone": "+7 (959) 464-3535",
  "about": "Occaecat ad reprehenderit aute quis culpa anim tempor officia. Fugiat laboris et nostrud veniam aliquip. Ut nulla culpa quis anim sunt aliquip. Proident esse incididunt do commodo est non ea dolor nisi adipisicing quis id exercitation. Nisi eu do pariatur id officia nostrud culpa amet. Anim duis anim aute amet pariatur irure anim deserunt irure sit proident sunt exercitation. Culpa nisi excepteur id laborum occaecat esse occaecat laborum aliquip non non.",
  "eyeColor": "red"
}, {
  "id": "5c2286fb1802a0ecd0aa6873",
  "name": {
    "firstName": "Mccullough",
    "lastName": "Sullivan"
  },
  "phone": "+7 (953) 553-3215",
  "about": "Velit ipsum elit amet aute incididunt culpa occaecat dolore cillum esse quis magna veniam. Elit ipsum cupidatat irure Lorem minim nulla deserunt. Incididunt officia esse Lorem cillum sint qui amet esse est.",
  "eyeColor": "blue"
}, {
  "id": "5c2286fb02d305780e20521b",
  "name": {
    "firstName": "Fay",
    "lastName": "Burgess"
  },
  "phone": "+7 (935) 563-3787",
  "about": "Occaecat non nisi nisi qui minim eiusmod aute ullamco culpa aliquip ut irure. Culpa sit exercitation dolore ullamco velit proident incididunt. Amet aliqua adipisicing cillum sint cupidatat ullamco cillum aute eiusmod ex. Adipisicing reprehenderit proident nulla commodo mollit tempor eiusmod nulla eiusmod. Non commodo amet reprehenderit aute. Officia voluptate in adipisicing nostrud pariatur in. Labore commodo do commodo excepteur nostrud ea occaecat ullamco pariatur veniam excepteur aliquip fugiat amet.",
  "eyeColor": "green"
}, {
  "id": "5c2286fbe330f035ee90c0db",
  "name": {
    "firstName": "Kasey",
    "lastName": "Joyner"
  },
  "phone": "+7 (998) 497-2317",
  "about": "Dolor aliqua quis nulla fugiat enim cillum aute excepteur. Qui qui commodo ipsum deserunt velit fugiat ex ipsum Lorem velit. Veniam veniam aliquip commodo adipisicing officia sint ut dolor et. Fugiat consequat ad nulla nostrud aliqua Lorem. Sit tempor ut esse non nisi officia qui consectetur velit adipisicing sit excepteur cupidatat.",
  "eyeColor": "blue"
}, {
  "id": "5c2286fbf21aa796126a9505",
  "name": {
    "firstName": "Delia",
    "lastName": "Kline"
  },
  "phone": "+7 (901) 562-2975",
  "about": "Nulla esse sunt aute reprehenderit aliqua nisi eiusmod dolor. Excepteur consequat nisi ea ex velit et officia voluptate. Qui culpa mollit culpa ut enim non laborum in amet. Id aute cupidatat magna ipsum consequat magna officia velit.",
  "eyeColor": "green"
}, {
  "id": "5c2286fb771275c314fa32d2",
  "name": {
    "firstName": "Finch",
    "lastName": "Keller"
  },
  "phone": "+7 (845) 599-3611",
  "about": "Proident nostrud voluptate incididunt nostrud Lorem cillum voluptate cillum ipsum duis irure. Ut exercitation aliquip ullamco laboris sunt incididunt magna est ipsum cillum. Dolor exercitation ullamco dolor anim et mollit ex proident amet Lorem proident laboris enim. Tempor laboris dolore anim anim officia voluptate exercitation sint eiusmod. Pariatur ex laborum nulla adipisicing ex cupidatat ea officia duis aute. Do anim velit dolor ad quis occaecat id.",
  "eyeColor": "green"
}, {
  "id": "5c2286fb166f6243646aa197",
  "name": {
    "firstName": "Yang",
    "lastName": "Reeves"
  },
  "phone": "+7 (976) 457-2144",
  "about": "Fugiat deserunt veniam incididunt cillum irure nulla esse. Minim ut dolor in consequat anim incididunt. Consequat incididunt culpa enim laborum et ipsum.",
  "eyeColor": "red"
}, {
  "id": "5c2286fbec1ed6670a8e3fce",
  "name": {
    "firstName": "Mayer",
    "lastName": "Boyd"
  },
  "phone": "+7 (811) 462-2191",
  "about": "Dolor enim ad aliquip cupidatat ut voluptate voluptate Lorem proident dolore. Anim id ullamco consequat aliqua ut voluptate et ea minim officia. Dolor ex irure sint Lorem ad tempor duis. Sit ullamco ullamco eu esse cupidatat ut culpa ut. Reprehenderit ex proident do esse labore fugiat non Lorem exercitation excepteur ex et. Mollit in aliqua nostrud irure ipsum ad cupidatat eu aliqua ut officia. Est Lorem ut do et duis irure velit ipsum ullamco duis.",
  "eyeColor": "brown"
}, {
  "id": "5c2286fb8e5edeca325590ee",
  "name": {
    "firstName": "Molly",
    "lastName": "Gentry"
  },
  "phone": "+7 (987) 526-2754",
  "about": "Do aliquip occaecat labore excepteur officia. Tempor Lorem ipsum qui enim non et quis velit. Commodo ut commodo aliqua proident irure minim non adipisicing id dolore. Veniam voluptate esse nostrud ut anim ea. Do dolor id quis commodo eiusmod aliquip in ex duis fugiat proident amet ad. Excepteur fugiat occaecat ad Lorem esse est quis pariatur aliqua amet sunt consequat consectetur. Pariatur laboris mollit ut sunt commodo aute quis velit fugiat qui nostrud consectetur qui consectetur.",
  "eyeColor": "brown"
}, {
  "id": "5c2286fbe2e14f332b2ec00d",
  "name": {
    "firstName": "Misty",
    "lastName": "Fernandez"
  },
  "phone": "+7 (859) 510-3637",
  "about": "Velit est aliqua laboris ea commodo. Nisi adipisicing veniam deserunt excepteur do excepteur in sit ullamco do laborum minim ex. Qui dolor ullamco consectetur esse ut irure dolor cupidatat duis dolor eiusmod cupidatat.",
  "eyeColor": "brown"
}, {
  "id": "5c2286fbc0dd407398e1a2a1",
  "name": {
    "firstName": "George",
    "lastName": "Yang"
  },
  "phone": "+7 (909) 426-3260",
  "about": "Officia aliquip consequat reprehenderit do aute Lorem in proident reprehenderit ad ullamco eiusmod esse consectetur. Eu fugiat Lorem ullamco irure minim pariatur aliqua magna mollit non eu exercitation exercitation. Enim Lorem exercitation fugiat ad reprehenderit enim laborum qui. Id officia reprehenderit veniam nostrud officia laboris minim ad fugiat ex nulla dolor ut proident. Nulla consequat amet anim id eiusmod minim.",
  "eyeColor": "brown"
}, {
  "id": "5c2286fbaee7a091b9ead63f",
  "name": {
    "firstName": "Lucille",
    "lastName": "Clark"
  },
  "phone": "+7 (972) 469-3368",
  "about": "Irure ex exercitation et dolore. Quis duis dolor quis do deserunt voluptate. Aliquip commodo sunt consequat non consectetur anim qui voluptate commodo culpa. Laborum mollit tempor adipisicing ad do mollit dolor ex veniam in quis exercitation. Consectetur consectetur incididunt pariatur sunt dolore. Consequat ullamco consectetur sunt proident sunt excepteur pariatur dolor magna ut esse tempor.",
  "eyeColor": "red"
}, {
  "id": "5c2286fb7761161aac35caaa",
  "name": {
    "firstName": "Leblanc",
    "lastName": "Monroe"
  },
  "phone": "+7 (950) 498-3212",
  "about": "Nulla consectetur laboris nisi labore laboris reprehenderit. Deserunt aute pariatur nostrud tempor amet ad pariatur et ipsum cupidatat nostrud. Elit irure labore nostrud et reprehenderit enim. Deserunt sint magna sunt ex commodo nostrud adipisicing et laborum est amet.",
  "eyeColor": "brown"
}];

function fetchMockData() {
  return new Promise(function (resolve) {
    return resolve(data);
  });
}

;
},{}],"templates/templates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.column = column;
exports.createElement = createElement;
exports.div = div;
exports.input = input;
exports.makeTable = makeTable;
exports.row = row;
exports.span = span;
exports.spanElement = spanElement;
exports.tableHead = tableHead;
exports.textArea = textArea;

/**
 * Returns HTMLElement matching tagName
 * @param {string} tagName
 * @param {HTMLElement[]} contents
 * @param {string} className
 * @returns {HTMLElement}
 */
function createElement(tagName, contents) {
  var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var result = document.createElement(tagName);
  contents.forEach(function (content) {
    return result.insertAdjacentElement("beforeend", content);
  });
  result.className = "";
  return result;
}
/**
 * tr wrapper
 * @param content
 * @returns {string}
 */


function row(content) {
  return "<tr>".concat(content, "</tr>");
}
/**
 * td wrapper
 * @param content
 * @param className
 * @returns {string}
 */


function column(content) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return "<td class=".concat(className, ">").concat(content, "</td>");
}
/**
 * div wrapper
 * @param content
 * @param className
 * @returns {string}
 */


function div(content) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return "<div class=".concat(className, ">").concat(content, "</div>");
}
/**
 * th wrapper
 * @param content
 * @param className
 * @returns {string}
 */


function tableHead(content) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return "<th class=".concat(className, ">").concat(content, "</th>");
}

function input(type, name) {
  var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return "<input type=".concat(type, " name=").concat(name, " value=").concat(initialValue, " />");
}

function textArea(name) {
  var initialValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var rows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var cols = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
  return "<textarea name=".concat(name, " id=\"\" cols=").concat(cols, " rows=").concat(rows, ">").concat(initialValue, "</textarea>");
}

function span(content) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return "<span class=".concat(className, ">").concat(content, "</span>");
}

function spanElement(content) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var result = document.createElement("span");
  result.textContent = content;
  result.className = className;
  return result;
}
/**
 * return an HTML table
 * @param {Array} theads contains th contents
 * @param {Array} rows contains tr contents
 * @param {function} rowTempalate a wrapper for the tr's in the table
 * @param {string} className class name of the table
 * @returns {string}
 */


function makeTable(theads, rows) {
  var rowTempalate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : row;
  var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var tableHead = theads.join("");
  var tableBody = rows.reduce(function (result, content) {
    return result + rowTempalate(content);
  }, "");
  return "\n    <table class=".concat(className, ">\n        <thead>\n        ").concat(tableHead, "\n        </thead>\n        <tbody>\n        ").concat(tableBody, "\n        </tbody>\n    </table>\n    ");
}
},{}],"templates/user-table-templates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeUserInputRowElement = makeUserInputRowElement;
exports.makeUserRow = makeUserRow;

var _templates = require("./templates");

function makeUserRow(user) {
  var rowData = {
    firstName: user.name.firstName,
    lastName: user.name.lastName,
    about: user.about,
    eyeColor: user.eyeColor
  };
  var columns = [];

  for (var key in rowData) {
    var d = (0, _templates.div)(rowData[key], "second-line-overflow");
    columns.push((0, _templates.column)(d, key));
  }

  columns.push((0, _templates.column)("Edit", "edit"));
  return (0, _templates.row)(columns.join(""));
}

function makeUserInputRowElement() {
  var inputs = [(0, _templates.input)("text", "firstName"), (0, _templates.input)("text", "lastName"), (0, _templates.textArea)("about"), (0, _templates.input)("text", "eyeColor")];
  var columns = Array.from(inputs, function (input) {
    return (0, _templates.column)(input);
  });
  var result = document.createElement("tr");
  result.insertAdjacentHTML("beforeend", columns.join(""));
  return result;
}
},{"./templates":"templates/templates.js"}],"utils/table-utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSortable = makeSortable;
exports.sortTableByColumn = sortTableByColumn;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ascendingClassName = "sort-asc";
var descendingClassName = "sort-desc";
/**
 *
 * @param {HTMLTableElement} table
 * @param {number} colIndex The index of the column to sort
 * @param {boolean} ascending Whether to sort a table in ascending order
 */

function sortTableByColumn(table, colIndex) {
  var ascending = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var directionModifier = ascending ? 1 : -1;
  var tbody = table.tBodies[0];
  var rows = Array.from(tbody.querySelectorAll("tr")); //sort rows

  var sortedRows = rows.sort(function (a, b) {
    var aColText = a.querySelector("td:nth-child(".concat(colIndex + 1, ")")).textContent.trim();
    var bColText = b.querySelector("td:nth-child(".concat(colIndex + 1, ")")).textContent.trim();
    return aColText > bColText ? 1 * directionModifier : -1 * directionModifier;
  }); //remove previous rows

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  } //add sorted rows


  tbody.append.apply(tbody, _toConsumableArray(sortedRows)); //remove previous order classes

  table.querySelectorAll("th").forEach(function (th) {
    return th.classList.remove(ascendingClassName, descendingClassName);
  }); //mark as ordered

  var sortClass = ascending ? ascendingClassName : descendingClassName;
  table.querySelector("th:nth-child(".concat(colIndex + 1, ")")).classList.add(sortClass);
}
/**
 * adds all sorting functionality
 * @param {HTMLTableElement} table
 */


function makeSortable(table) {
  table.classList.add("table-sortable");
  var tableHeads = Array.prototype.slice.call(table.querySelectorAll("th"));
  tableHeads.forEach(function (th) {
    th.onclick = function () {
      var columnIndex = tableHeads.indexOf(th);
      var currentIsAscending = th.classList.contains("sort-asc");
      sortTableByColumn(table, columnIndex, !currentIsAscending);
    };
  });
}
},{}],"table_edit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startRowEdit = startRowEdit;

var _userTableTemplates = require("./templates/user-table-templates");

var _templates = require("./templates/templates");

var userInputRow = {
  htmlRow: undefined,
  changeInputValues: function changeInputValues(name, value) {
    var input = document.querySelector("[name=".concat(name, "]"));
    if (input) input.value = value;
  },
  initHtmlRow: function initHtmlRow() {
    this.htmlRow = (0, _userTableTemplates.makeUserInputRowElement)();
    var lastColumn = createInputActionsColumn();
    this.htmlRow.insertAdjacentElement("beforeend", lastColumn);
    this.isHtmlHidden(true);
    document.body.insertAdjacentElement("beforeend", this.htmlRow);
  },
  isHtmlHidden: function isHtmlHidden(hidden) {
    this.htmlRow.style.display = hidden ? "none" : null;
  },
  getValues: function getValues() {
    var result = {};
    var inputs = this.htmlRow.querySelectorAll("[name]");
    inputs.forEach(function (input) {
      result[input.name] = input.value;
    });
    return result;
  }
};
userInputRow.initHtmlRow();
var editRow;

function startRowEdit(targetRow) {
  if (editRow) {
    editRow.style.display = null;
  }

  editRow = targetRow;
  targetRow.style.display = "none";
  var columns = targetRow.querySelectorAll("td:not(:last-child)");
  columns.forEach(function (td) {
    userInputRow.changeInputValues(td.className, td.textContent);
  });
  userInputRow.isHtmlHidden(false);
  targetRow.insertAdjacentElement("afterend", userInputRow.htmlRow);
}

function createInputActionsColumn() {
  var save = (0, _templates.spanElement)("Save");
  var cancel = (0, _templates.spanElement)("Cancel");
  save.onclick = saveEdit;
  cancel.onclick = stopEdit;
  return (0, _templates.createElement)("td", [save, cancel]);
}

function saveEdit() {
  var fields = userInputRow.getValues();

  for (var key in fields) {
    var htmlField = editRow.querySelector(".".concat(key, " div"));
    htmlField.textContent = fields[key];
  }

  stopEdit();
}

function stopEdit() {
  editRow.style.display = null;
  editRow = null;
  userInputRow.isHtmlHidden(true);
}
},{"./templates/user-table-templates":"templates/user-table-templates.js","./templates/templates":"templates/templates.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./styles/main.css");

require("./styles/user-table.css");

require("./styles/table-sort.css");

require("./styles/table-edit.css");

var _mock_data = _interopRequireDefault(require("./mock_data"));

var _userTableTemplates = require("./templates/user-table-templates");

var _tableUtils = require("./utils/table-utils");

var _templates = require("./templates/templates");

var _table_edit = require("./table_edit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableHeadNames = ["First Name", "Last Name", "About", "Eye Color", ""];
(0, _mock_data.default)().then(function (users) {
  var container = document.querySelector(".user-table-container");
  var tableHeads = Array.from(tableHeadNames, function (name) {
    return (0, _templates.tableHead)(name);
  });
  container.insertAdjacentHTML("beforeend", (0, _templates.makeTable)(tableHeads, users, _userTableTemplates.makeUserRow, "user-table"));
  var table = document.querySelector(".user-table"); //sorting functionality

  (0, _tableUtils.makeSortable)(table);
  var edits = table.querySelectorAll(".edit");
  edits.forEach(function (edit) {
    edit.onclick = function () {
      return (0, _table_edit.startRowEdit)(edit.parentElement);
    };
  });
});
},{"./styles/main.css":"styles/main.css","./styles/user-table.css":"styles/user-table.css","./styles/table-sort.css":"styles/table-sort.css","./styles/table-edit.css":"styles/table-edit.css","./mock_data":"mock_data.js","./templates/user-table-templates":"templates/user-table-templates.js","./utils/table-utils":"utils/table-utils.js","./templates/templates":"templates/templates.js","./table_edit":"table_edit.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60294" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map