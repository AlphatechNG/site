var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState } from "react";

console.log("8908982893893829\\n\n\n\n\n\n\nhjashjashhjas");

PROJECTS = [{
  name: "Alvice-X",
  title: "Home Screen",
  categories: ["mobileapp", "cryto"],
  picture: "assets/images/portfolio/po-0.png"
}, {
  name: "Alvice-X",
  title: "Receive Crypto",
  categories: ["mobileapp", "cryto"],
  picture: "assets/images/portfolio/po-1.png"
}, {
  name: "Alvice-X",
  title: "Deposit Money",
  categories: ["mobileapp", "cryto"],
  picture: "assets/images/portfolio/po-2.png"
}, {
  name: "Alvice-X",
  title: "Ethereum Detail Screen",
  categories: ["mobileapp", "cryto"],
  picture: "assets/images/portfolio/po-3.png"
}, {
  name: "UI / UX Design",
  title: "Cryptocurrency Exchange",
  categories: ["ui"],
  picture: "assets/images/portfolio/po-4.png"
}, {
  name: "Trade It",
  title: "Home Screen",
  categories: ["mobileapp"],
  picture: "assets/images/portfolio/po-5.png"
}, {
  name: "Trade It",
  title: "Home Screen II",
  categories: ["mobileapp"],
  picture: "assets/images/portfolio/po-6.png"
}, {
  name: "Trade It",
  title: "Item Detail",
  categories: ["mobileapp"],
  picture: "assets/images/portfolio/po-7.png"
}, {
  name: "Trade It",
  title: "Track Package on Map",
  categories: ["mobileapp"],
  picture: "assets/images/portfolio/po-8.png"
}, {
  name: "Trade It",
  title: "Message Item Owner",
  categories: ["mobileapp"],
  picture: "assets/images/portfolio/po-9.png"
}];

var Portfolio = function Portfolio() {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      activeItem = _useState2[0],
      setActiveItem = _useState2[1];

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { "class": "img-color-overlay" },
      React.createElement(
        "div",
        { "class": "container" },
        React.createElement(
          "div",
          { "class": "row section-separator" },
          React.createElement(
            "div",
            {
              "class": "section-title col-sm-12 wow fadeInUp",
              "data-wow-duration": "0.8s",
              "data-wow-delay": "0.1s"
            },
            React.createElement(
              "h3",
              null,
              "Recent Portfolio"
            )
          ),
          React.createElement(
            "div",
            { "class": "part col-sm-12" },
            React.createElement(
              "div",
              { "class": "portfolio-nav col-sm-12", id: "filter-button" },
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  {
                    "data-filter": "*",
                    "class": "current wow fadeInUp",
                    "data-wow-duration": "0.8s",
                    "data-wow-delay": "0.1s"
                  },
                  React.createElement(
                    "span",
                    null,
                    "All Categories"
                  )
                ),
                React.createElement(
                  "li",
                  {
                    "data-filter": ".ui",
                    "class": "wow fadeInUp",
                    "data-wow-duration": "0.8s",
                    "data-wow-delay": "0.5s"
                  },
                  React.createElement(
                    "span",
                    null,
                    "UX / UI"
                  )
                ),
                React.createElement(
                  "li",
                  {
                    "data-filter": ".mobileapp",
                    "class": "wow fadeInUp",
                    "data-wow-duration": "0.8s",
                    "data-wow-delay": "0.3s"
                  },
                  React.createElement(
                    "span",
                    null,
                    "Mobile Applications"
                  )
                ),
                React.createElement(
                  "li",
                  {
                    "data-filter": ".crypto",
                    "class": "wow fadeInUp",
                    "data-wow-duration": "0.8s",
                    "data-wow-delay": "0.4s"
                  },
                  React.createElement(
                    "span",
                    null,
                    "Cryptocurrencies"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              {
                "class": "mh-project-gallery col-sm-12 wow fadeInUp",
                id: "project-gallery",
                "data-wow-duration": "0.8s",
                "data-wow-delay": "0.5s"
              },
              React.createElement(
                "div",
                { "class": "portfolioContainer row" },
                PROJECTS.map(function (item, index) {
                  return React.createElement(
                    "div",
                    {
                      key: index,
                      "class": "grid-item col-md-4 col-sm-6 col-xs-12 " + item.categories.toString().replace(",", "")
                    },
                    React.createElement(
                      "figure",
                      null,
                      React.createElement("img", { src: item.picture, alt: "img04" }),
                      React.createElement(
                        "figcaption",
                        { "class": "fig-caption" },
                        React.createElement("i", { "class": "fa fa-search" }),
                        React.createElement(
                          "h5",
                          { "class": "title" },
                          item.title
                        ),
                        React.createElement(
                          "span",
                          { "class": "sub-title" },
                          item.name
                        ),
                        React.createElement("a", { "data-fancybox": true, "data-src": "#mh" })
                      )
                    )
                  );
                })
              )
            )
          )
        )
      )
    ),
    React.createElement(
      "div",
      { "class": "mh-portfolio-modal", id: "mh" },
      React.createElement(
        "div",
        { "class": "container" },
        React.createElement(
          "div",
          { "class": "row mh-portfolio-modal-inner" },
          React.createElement(
            "div",
            { "class": "col-sm-5" },
            React.createElement(
              "h2",
              null,
              "School Management - Educational"
            ),
            React.createElement(
              "p",
              null,
              "Well Crafted and specially designed to manage the day-to-day administrative tasks of schools. School management software allow schools to digitally monitor the daily activities along with managing all the resources and information on a single platform."
            ),
            React.createElement(
              "p",
              null,
              "It is a clean and elegant Multipurpose web software. It will fit perfectly for both private and public schools. It has 4 background styles with 6 homepage styles. 6 pre-defined color scheme. All variations are organized separately so users can use / customize the application very easily."
            ),
            React.createElement(
              "div",
              { "class": "mh-about-tag" },
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    null,
                    "Django"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    null,
                    "HTML"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    null,
                    "CSS"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    null,
                    "Python"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    null,
                    "JavaScript"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    null,
                    "React"
                  )
                )
              )
            ),
            React.createElement(
              "a",
              { href: "#", "class": "btn btn-fill" },
              "Live Demo"
            )
          ),
          React.createElement(
            "div",
            { "class": "col-sm-7" },
            React.createElement(
              "div",
              { "class": "mh-portfolio-modal-img" },
              React.createElement("img", {
                src: "assets/images/portfolio/po-0.png",
                alt: "",
                "class": "img-fluid"
              }),
              React.createElement(
                "p",
                null,
                "All variations are organized separately so you can use / customize the template very easily."
              ),
              React.createElement("img", {
                src: "assets/images/portfolio/po-1.png",
                alt: "",
                "class": "img-fluid"
              }),
              React.createElement(
                "p",
                null,
                "All variations are organized separately so you can use / customize the template very easily."
              )
            )
          )
        )
      )
    )
  );
};

ReactDOM.render(React.createElement(Portfolio, null), document.getElementById("mh-portfolio"));