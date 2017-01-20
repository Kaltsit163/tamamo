;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-top" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0.48512C229.4976 0.48512 0.48512 229.4976 0.48512 512c0 282.50112 229.01248 511.51488 511.51488 511.51488 282.50112 0 511.51488-229.01376 511.51488-511.51488C1023.51488 229.4976 794.50112 0.48512 512 0.48512zM784.73472 671.30496c-25.33632 25.33632-66.41536 25.33632-91.75168 0L512 490.32192 331.01696 671.30496c-25.33632 25.33632-66.41536 25.33632-91.75168 0-25.33632-25.33632-25.33632-66.41536 0-91.75168l226.85952-226.85952c25.33632-25.33632 66.41536-25.33632 91.75168 0l226.85952 226.85952C810.07232 604.8896 810.07232 645.96864 784.73472 671.30496z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubichongzhi-bian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0c281.852898 0 511.733792 229.880894 511.733792 511.733792S793.852898 1023.467584 512 1023.467584 0.266208 793.58669 0.266208 511.733792 230.147102 0 512 0z" fill="#595757" ></path>' +
    '' +
    '<path d="M512 45.480622c-256.788385 0-466.273647 209.464784-466.273647 466.273647S255.211615 978.027917 512 978.027917c256.808863 0 466.273647-209.464784 466.273647-466.273648S768.808863 45.480622 512 45.480622z" fill="#FFDB00" ></path>' +
    '' +
    '<path d="M375.230492 524.327481l-99.930408-151.451906h0.08191c-42.408991-64.176619-42.613766-118.360197-22.177179-155.813622a104.374035 104.374035 0 0 1 47.425989-44.477223 112.50362 112.50362 0 0 1 63.275607-9.542535c41.671799 5.795145 82.155901 34.791345 99.602768 92.271807l-0.348118-0.880534 48.777506 140.291645 48.879895-140.291645-0.348118 0.880534c17.467344-57.480462 57.930968-86.456185 99.602767-92.271807a112.50362 112.50362 0 0 1 63.275607 9.542535 104.25117 104.25117 0 0 1 47.425989 44.477223c20.457065 37.432948 20.25229 91.616526-22.156701 155.813622l-99.930409 151.390473 109.800584 167.75203-0.901011-1.146743c7.760989 10.320682 13.965684 21.071391 18.491221 32.149742 4.648402 11.283126 7.597168 22.934848 8.784865 34.893733l0.184298 3.112587c-1.228653 31.637803-12.061273 56.231332-32.41595 73.698676-19.3308 16.58681-46.422589 25.555973-81.193457 26.825581H352.541375c-34.75039-1.269608-61.842179-10.238771-81.193457-26.825581-20.354677-17.446866-31.187298-42.040395-32.41595-73.698676l0.184298-3.112587a124.298684 124.298684 0 0 1 8.784866-34.873255 145.759149 145.759149 0 0 1 18.061193-31.617326l-0.470984 0.614326 109.739151-167.711074z" fill="#595757" ></path>' +
    '' +
    '<path d="M421.448306 536.654961l-117.930168 180.202376-0.901012 1.146743a101.281926 101.281926 0 0 0-12.798464 22.238611c-2.682558 6.532336-4.505059 13.228493-5.385594 20.047514 0.901012 17.99976 6.388993 31.351118 16.402512 39.931208 11.242171 9.644923 29.037156 14.928129 53.303043 15.808663h315.702276c24.286366-0.880534 42.08135-6.184218 53.303044-15.808663 10.013518-8.58009 15.481022-21.890493 16.382034-39.869775a78.572331 78.572331 0 0 0-5.365116-20.129425 101.630044 101.630044 0 0 0-12.798464-22.218133l-0.901012-1.146743-117.930169-180.202376c-3.74739-5.713234-3.66548-19.24889 0.102388-24.941647l108.16238-163.902251c31.555893-47.75363 33.33744-85.063712 20.211335-109.104348-6.143263-11.283126-15.767708-19.822261-27.009879-25.125945a67.00252 67.00252 0 0 0-37.699156-5.631324c-25.596928 3.563092-50.784306 22.504819-62.313162 60.490661l-0.348118 0.880535L533.337599 471.106347c-6.655201 19.08507-36.183818 19.08507-42.818541 0l-70.135584-201.785705-0.348118-0.880535c-11.528857-37.985842-36.736712-56.927569-62.313163-60.490661a67.16634 67.16634 0 0 0-37.699156 5.631324 59.139143 59.139143 0 0 0-27.009879 25.125945c-13.126105 24.061113-11.324081 61.350718 20.231813 109.104348h0.102387l108.141903 163.902251c3.726913 5.713234 3.706435 19.207935-0.040955 24.941647z" fill="#FFFFFF" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wenzhang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M751.738641 321.249585c-65.11195 0-118.062929-52.953026-118.062929-118.040417V67.267033H209.198068c-39.688931 0-71.855538 32.190143-71.855538 71.855538v745.757928c0 39.663348 32.168654 71.806419 71.855538 71.806419h603.64014c39.668465 0 71.836095-32.143071 71.836095-71.806419V321.249585H751.738641z m14.392802 475.473085H255.85776v-48.137347h510.273683v48.137347z m0-154.044422H255.85776v-48.137347h510.273683v48.137347z m0-154.044422H255.85776V440.495456h510.273683v48.13837z" fill="#FA6060" ></path>' +
    '' +
    '<path d="M679.880033 67.267033v135.943158c0 39.665395 32.172747 71.808466 71.858608 71.808466h132.934639L679.880033 67.267033z" fill="#FE7A7A" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shipin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M316.302222 187.733333l458.524445 265.102223c45.511111 26.168889 45.511111 92.16 0 118.328888L316.302222 836.266667c-45.511111 26.168889-102.4-6.826667-102.4-59.164445V246.897778c0-52.337778 56.888889-85.333333 102.4-59.164445z" fill="#F85959" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gerenzhongxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M274.703 324.979c0 0 0 0 0 0 0 131.055 106.241 237.297 237.297 237.297 131.055 0 237.297-106.241 237.297-237.297 0 0 0 0 0 0 0-131.055-106.241-237.297-237.297-237.297-131.055 0-237.297 106.241-237.297 237.297z" fill="#E73038" ></path>' +
    '' +
    '<path d="M147.012 935.903c-19.113-136.331 55.809-411.319 367.835-414.828 253.709-2.847 381.27 219.184 367.835 412.497z" fill="#E73038" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)