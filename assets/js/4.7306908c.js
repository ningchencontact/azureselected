(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{171:function(t,e,r){},218:function(t,e,r){"use strict";var s=r(2),a=r(69),n=r(18),o=r(4),i=r(34),l=[],c=l.sort,u=o((function(){l.sort(void 0)})),f=o((function(){l.sort(null)})),p=i("sort");s({target:"Array",proto:!0,forced:u||!f||!p},{sort:function(t){return void 0===t?c.call(n(this)):c.call(n(this),a(t))}})},219:function(t,e,r){"use strict";var s=r(171);r.n(s).a},228:function(t,e,r){"use strict";r.r(e);r(20),r(218),r(122),r(106);var s={props:["path","limit"],computed:{posts:function(){var t=this,e=this.$site.pages.filter((function(e){return e.path.startsWith(t.path)&&!e.frontmatter.index_page})).sort((function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)}));return e}}},a=(r(219),r(19)),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-list"},t._l(t.posts,(function(e){return r("div",[r("h2",[r("router-link",{attrs:{to:e.path}},[t._v(t._s(e.frontmatter.title))])],1),t._v(" "),r("p",{staticClass:"meta"},[r("a",{attrs:{href:e.frontmatter.url}},[t._v(t._s(t.$site.locales[t.$localePath].uitext.list.origin)+" "+t._s(e.frontmatter.author)+" "+t._s(t.$site.locales[t.$localePath].uitext.list.published)+" "+t._s(new Date(e.frontmatter.date).toLocaleDateString()))])]),t._v(" "),r("p",[t._v(t._s(e.frontmatter.description))]),t._v(" "),r("p",{staticClass:"meta"},[r("router-link",{attrs:{to:e.path}},[t._v(t._s(t.$site.locales[t.$localePath].uitext.list.continue)+" →")])],1)])})),0)}),[],!1,null,null,null);e.default=n.exports}}]);