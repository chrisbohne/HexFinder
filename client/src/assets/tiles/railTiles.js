const railTiles = {
  rail52SVG: {
    svg: <g><path className="rail-hex-top" d="M50 2.5L0 45.8013L50 89.1026H150L200 45.8013L150 2.5H50Z" fill="#2ECC71"/>
    <path className="rail-hex-side" d="M150 89.1026L200 45.8013V95.8L150 139.1H50L0 95.8V45.8013L50 89.1026H150Z" fill="#31BF61"/>
    <path className="rail-top" d="M112 87.1V0.5H103.25V87.1H112Z" fill="#C4C4C4"/>
    <path className="rail-top" d="M89 0.5V87.1H97.75V0.5H89Z" fill="#C4C4C4"/>
    <path className="rail-side" d="M112 89V87H103.25V89H112Z" fill="#414040"/>
    <path className="rail-side" d="M89 87V89H97.75V87H89Z" fill="#414040"/></g>,
    height: 140,
    category: 'rail',
    railConnections: [5,2]
  },
  rail41SVG: {
    svg: <g><path className="rail-hex-top" d="M150 0L200 43.3013L150 86.6026H50L0 43.3013L50 0H150Z" fill="#2ECC71"/>
    <path className="rail-hex-side" d="M50 86.6026L0 43.3013V93.3L50 136.6H150L200 93.3V43.3013L150 86.6026H50Z" fill="#31BF61"/>
    <path className="rail-side" d="M185.559 54V55.8013L179.309 61.214L29.3496 17.8778L29.2998 15.9208L35.5594 10.5L185.559 54Z" fill="#414040"/>
    <path className="rail-top" d="M185.56 53.8013L35.5596 10.5L29.3096 15.9127L179.31 59.214L185.56 53.8013Z" fill="#C4C4C4"/>
    <path className="rail-side" d="M169.5 69.714L19.5 26.4127V24.412L25.731 19.016L175.75 62.262V64.3013L169.5 69.714Z" fill="#414040"/>
    <path className="rail-top" d="M169.5 67.714L19.5 24.4127L25.75 19L175.75 62.3013L169.5 67.714Z" fill="#C4C4C4"/></g>,
    height: 137,
    category: 'rail',
    railConnections: [4,1]
  },
  rail30SVG: {
    svg: <g><path className="rail-hex-top" d="M50 0L0 43.3013L50 86.6026H150L200 43.3013L150 0H50Z" fill="#2ECC71"/>
    <path className="rail-hex-side" d="M150 86.6026L200 43.3013V93.3L150 136.6H50L0 93.3V43.3013L50 86.6026H150Z" fill="#31BF61"/>
    <path className="rail-side" d="M14.4406 54V55.8013L20.6906 61.214L170.65 17.8778L170.7 15.9208L164.441 10.5L14.4406 54Z" fill="#414040"/>
    <path className="rail-top" d="M14.4404 53.8013L164.44 10.5L170.69 15.9127L20.6904 59.214L14.4404 53.8013Z" fill="#C4C4C4"/>
    <path className="rail-side" d="M30.5 69.714L180.5 26.4127V24.412L174.269 19.016L24.25 62.262V64.3013L30.5 69.714Z" fill="#414040"/>
    <path className="rail-top" d="M30.5 67.714L180.5 24.4127L174.25 19L24.25 62.3013L30.5 67.714Z" fill="#C4C4C4"/></g>,
    height: 137,
    category: 'rail',
    railConnections: [3,0]
  },
  rail51SVG: {
    svg: <g><path className="rail-hex-top" d="M150 1.99706L200 45.2984L150 88.5997H50L0 45.2984L50 1.99706H150Z" fill="#2ECC71"/>
    <path className="rail-hex-side" d="M50 88.5997L0 45.2984V95.2971L50 138.597H150L200 95.2971V45.2984L150 88.5997H50Z" fill="#31BF61"/>
    <path className="rail-side" d="M96.7 1.99998H88C88.8956 29.4645 107.281 53.2677 133.629 61.0731L169.5 71.7L175.5 66.5L138.212 54.7249C114.856 47.3492 98.3893 26.4351 96.7 1.99998Z" fill="#414040"/>
    <path className="rail-side" d="M111 1.99998H102.25C104.227 23.8942 118.904 42.574 139.71 49.6734L179.35 63.2L185.5 58L143.926 43.3613C125.93 37.0247 113.14 20.9584 111 1.99998Z" fill="#414040"/>
    <path className="rail-top" d="M175.75 64.3L169.5 69.7L133.629 59.0731C107.281 51.2677 88.8956 27.4645 88 0H96.75C98.101 24.6184 114.699 45.7659 138.291 52.9281L175.75 64.3Z" fill="#C4C4C4"/>
    <path className="rail-top" d="M185.55 55.8L179.35 61.2L139.71 47.6734C118.904 40.574 104.227 21.8942 102.25 0H111C112.523 18.2712 124.58 33.9677 141.842 40.1487L185.55 55.8Z" fill="#C4C4C4"/></g>,
    height: 139,
    category: 'rail',
    railConnections: [5,1]
  },
  rail42SVG: {
    svg: <g><path className="rail-hex-top" d="M150 0L200 43.3013L150 86.6026H50L0 43.3013L50 0H150Z" fill="#2ECC71"/>
    <path className="rail-side" d="M88 86.6H96.7354V84.6C96.7354 67.5116 89.1304 51.8009 76.7116 41.2041C70.7697 36.134 63.7257 32.2346 55.8854 29.9151L25.75 21V19L19.5 24.5V26.4L51.993 36.1716C73.3674 42.5995 88 62.28 88 84.6V86.6Z" fill="#414040"/>
    <path className="rail-hex-side" d="M50 86.6026L0 43.3013V93.3L50 136.6H150L200 93.3V43.3013L150 86.6026H50Z" fill="#31BF61"/>
    <path className="rail-top" d="M96.7383 84.6H88C88.5916 61.766 73.9393 41.3193 52.1268 34.5401L19.5 24.4L25.75 19L58.503 29.8799C81.9407 37.6654 97.487 59.9144 96.7383 84.6Z" fill="#C4C4C4"/>
    <path className="rail-side" d="M111 86.6H102.25C103.272 57.643 83.988 31.8831 55.9161 24.7054L29.3 17.9L35.55 12.5L58.8142 18.6346C88.8596 26.5573 110.086 53.3379 110.94 84.3985L111 86.6Z" fill="#414040"/>
    <path className="rail-top" d="M111 84.6H102.25C103.276 56.4064 84.7982 31.2012 57.6024 23.6964L29.35 15.9L35.5 10.5L65.6685 20.0371C93.6112 28.8706 112.181 55.318 111 84.6Z" fill="#C4C4C4"/></g>,
    height: 137,
    category: 'rail',
    railConnections: [4,2]
  },
  rail53SVG: {
    svg: <g><path className="rail-hex-top" d="M50 1.99706L0 45.2984L50 88.5997H150L200 45.2984L150 1.99706H50Z" fill="#2ECC71"/>
    <path className="rail-hex-side" d="M150 88.5997L200 45.2984V95.2971L150 138.597H50L0 95.2971V45.2984L50 88.5997H150Z" fill="#31BF61"/>
    <path className="rail-side" d="M103.3 1.99998H112C111.104 29.4645 92.7186 53.2677 66.3713 61.0731L30.5 71.7L24.5 66.5L61.7877 54.7249C85.1443 47.3492 101.611 26.4351 103.3 1.99998Z" fill="#414040"/>
    <path className="rail-side" d="M89 1.99998H97.75C95.7734 23.8942 81.0957 42.574 60.2904 49.6734L20.6499 63.2L14.5 58L56.0739 43.3613C74.0698 37.0247 86.8595 20.9584 89 1.99998Z" fill="#414040"/>
    <path className="rail-top" d="M24.25 64.3L30.5 69.7L66.3713 59.0731C92.7186 51.2677 111.104 27.4645 112 0H103.25C101.899 24.6184 85.3012 45.7659 61.709 52.9281L24.25 64.3Z" fill="#C4C4C4"/>
    <path className="rail-top" d="M14.4502 55.8L20.65 61.2L60.2905 47.6734C81.0957 40.574 95.7734 21.8942 97.75 0H89C87.4774 18.2712 75.4195 33.9677 58.1583 40.1487L14.4502 55.8Z" fill="#C4C4C4"/></g>,
    height: 139,
    category: 'rail',
    railConnections: [5,3]
  },
  rail40SVG: {
    svg: <g><path className="rail-hex-top" d="M150 0L200 43.3013L150 86.6026H50L0 43.3013L50 0H150Z" fill="#2ECC71"/>
    <path className="rail-side" d="M180.5 26.4V24.4L100 39.5L19.5 24.4V26.4L81.0793 43.6881C93.4539 47.1622 106.546 47.1622 118.921 43.6881L180.5 26.4Z" fill="#414040"/>
    <path className="rail-side" d="M170.65 17.9081V15.9L99.9792 29L29.3086 15.9351V17.9081L81.0132 32.4616C93.4162 35.9527 106.542 35.9527 118.945 32.4616L170.65 17.9081Z" fill="#414040"/>
    <path className="rail-top" d="M164.443 10.5177L170.652 15.8954L118.691 30.3135C106.461 33.7072 93.5377 33.7116 81.3049 30.3263L29.3018 15.9349L35.4999 10.5671L80.9691 23.3877C93.4128 26.8964 106.585 26.8902 119.026 23.3698L164.443 10.5177Z" fill="#C4C4C4"/>
    <path className="rail-top" d="M174.237 19L180.5 24.4235L119.29 41.9704C106.684 45.584 93.3163 45.584 80.7104 41.9704L19.5 24.4235L25.7626 19L81.3675 34.3548C93.561 37.7219 106.439 37.7219 118.633 34.3548L174.237 19Z" fill="#C4C4C4"/>
    <path className="rail-hex-side" d="M50 86.6026L0 43.3013V93.3L50 136.6H150L200 93.3V43.3013L150 86.6026H50Z" fill="#31BF61"/></g>,
    height: 137,
    category: 'rail',
    railConnections: [4,0]
  },
  rail31SVG: {
    svg: <g><path className="rail-hex-top" d="M150 0L200 43.3013L150 86.6026H50L0 43.3013L50 0H150Z" fill="#2ECC71"/>
    <path className="rail-side" d="M185.55 53.8V55.8222L179.37 61.174L119.393 43.8889C106.723 40.2373 93.2783 40.2388 80.6086 43.8933L20.6467 61.1885L14.4502 55.8222V53.8L81.0925 35.1043C93.4589 31.6351 106.541 31.6351 118.908 35.1043L185.55 53.8Z" fill="#414040"/>
    <path className="rail-top" d="M20.668 59.2102L14.4209 53.8L83.4786 34.0298C94.2757 30.9387 105.724 30.9401 116.52 34.0338L185.559 53.8168L179.334 59.2079L116.981 40.8102C105.896 37.5398 94.1035 37.54 83.0194 40.8108L20.668 59.2102Z" fill="#C4C4C4"/>
    <path className="rail-side" d="M169.54 69.6869L119.715 55.0799C106.843 51.3062 93.1579 51.3105 80.2881 55.0921L30.5 69.7219L24.25 64.3093V62.3L81.7139 46.7487C93.6892 43.5078 106.311 43.5078 118.286 46.7487L175.75 62.3V64.3093L169.54 69.6869Z" fill="#414040"/>
    <path className="rail-top" d="M79.8193 52.8759L30.4999 67.7248L24.2358 62.3L80.0719 45.7181C93.0765 41.856 106.923 41.856 119.928 45.7181L175.764 62.3L169.5 67.7248L120.18 52.8759C107.019 48.9131 92.9813 48.9131 79.8193 52.8759Z" fill="#C4C4C4"/>
    <path className="rail-hex-side" d="M50 86.6026L0 43.3013V93.3L50 136.6H150L200 93.3V43.3013L150 86.6026H50Z" fill="#31BF61"/></g>,
    height: 137,
    category: 'rail',
    railConnections: [3,1]
  },
  rail20SVG: {
    svg: <g><path className="rail-hex-top" d="M50 0L0 43.3013L50 86.6026H150L200 43.3013L150 0H50Z" fill="#2ECC71"/>
    <path className="rail-side" d="M112 86.6H103.265V84.6C103.265 67.5116 110.87 51.8009 123.288 41.2041C129.23 36.134 136.274 32.2346 144.115 29.9151L174.25 21V19L180.5 24.5V26.4L148.007 36.1716C126.633 42.5995 112 62.28 112 84.6V86.6Z" fill="#414040"/>
    <path className="rail-hex-side" d="M150 86.6026L200 43.3013V93.3L150 136.6H50L0 93.3V43.3013L50 86.6026H150Z" fill="#31BF61"/>
    <path className="rail-top" d="M103.262 84.6H112C111.408 61.766 126.061 41.3193 147.873 34.5401L180.5 24.4L174.25 19L141.497 29.8799C118.059 37.6654 102.513 59.9144 103.262 84.6Z" fill="#C4C4C4"/>
    <path className="rail-side" d="M89 86.6H97.75C96.7283 57.643 116.012 31.8831 144.084 24.7054L170.7 17.9L164.45 12.5L141.186 18.6346C111.14 26.5573 89.9138 53.3379 89.0605 84.3985L89 86.6Z" fill="#414040"/>
    <path className="rail-top" d="M89 84.6H97.75C96.7242 56.4064 115.202 31.2012 142.398 23.6964L170.65 15.9L164.5 10.5L134.331 20.0371C106.389 28.8706 87.8193 55.318 89 84.6Z" fill="#C4C4C4"/></g>,
    height: 137,
    category: 'rail',
    railConnections: [2,0]
  }
  // rail52street30SVG: {
  //   svg: <g><path className="rail-hex-top" d="M50 2L0 45.3013L50 88.6026H150L200 45.3013L150 2H50Z" fill="#2ECC71"/>
  //   <path className="rail-hex-side" d="M150 88.6026L200 45.3013V95.3L150 138.6H50L0 95.3V45.3013L50 88.6026H150Z" fill="#31BF61"/>
  //   <path className="rail-top" d="M88 86.6V0H96.75V86.6H88Z" fill="#C4C4C4"/>
  //   <path className="rail-top" d="M111 0V86.6H102.25V0H111Z" fill="#C4C4C4"/>
  //   <path className="rail-side" d="M88 88.5V86.5H96.75V88.5H88Z" fill="#414040"/>
  //   <path className="rail-side" d="M111 86.5V88.5H102.25V86.5H111Z" fill="#414040"/>
  //   <path className="street-hex-side" fill-rule="evenodd" clip-rule="evenodd" d="M111 23.355L160.5 9L185.5 30.65V32.6507L111 54.157V23.355ZM102.25 56.6829V25.8925L96.75 27.4875V58.2706L102.25 56.6829ZM35.5 75.952L88 60.7965V30.025L10.5 52.5V54.3013L35.5 75.952Z" fill="#414040"/>
  //   <path className="street-top" fill-rule="evenodd" clip-rule="evenodd" d="M111 23.2894L160.5 9L185.5 30.6507L111 52.157V23.2894ZM102.25 54.6829V25.8153L96.75 27.4031V56.2706L102.25 54.6829ZM35.5 73.952L88 58.7965V29.929L10.5 52.3013L35.5 73.952Z" fill="#6C6C6C"/></g>,
  //   height: 139,
  //   category: 'rail',
  //   railConnections: [5,2],
  //   streetConnections: [3,0]
  // },
  // rail52street41SVG: {
  //   svg: <g><path className="rail-hex-top" d="M150 2L200 45.3013L150 88.6026H50L0 45.3013L50 2H150Z" fill="#2ECC71"/>
  //   <path className="rail-hex-side" d="M50 88.6026L0 45.3013V95.3L50 138.6H150L200 95.3V45.3013L150 88.6026H50Z" fill="#31BF61"/>
  //   <path className="rail-top" d="M112 86.6V0H103.25V86.6H112Z" fill="#C4C4C4"/>
  //   <path className="rail-top" d="M89 0V86.6H97.75V0H89Z" fill="#C4C4C4"/>
  //   <path className="rail-side" d="M112 88.5V86.5H103.25V88.5H112Z" fill="#414040"/>
  //   <path className="rail-side" d="M89 86.5V88.5H97.75V86.5H89Z" fill="#414040"/>
  //   <path className="street-hex-side" fill-rule="evenodd" clip-rule="evenodd" d="M89 23.355L39.5 9L14.5 30.65V32.6507L89 54.157V23.355ZM97.75 56.6829V25.8925L103.25 27.4875V58.2706L97.75 56.6829ZM164.5 75.952L112 60.7965V30.025L189.5 52.5V54.3013L164.5 75.952Z" fill="#414040"/>
  //   <path className="street-top" fill-rule="evenodd" clip-rule="evenodd" d="M89 23.2894L39.5 9L14.5 30.6507L89 52.157V23.2894ZM97.75 54.6829V25.8153L103.25 27.4031V56.2706L97.75 54.6829ZM164.5 73.952L112 58.7965V29.929L189.5 52.3013L164.5 73.952Z" fill="#6C6C6C"/></g>,
  //   height: 139,
  //   category: 'rail',
  //   railConnections: [5,2],
  //   streetConnections: [4,1]
  // },
  // rail41street30SVG: {
  //   svg: <g><path className="rail-hex-top" d="M50 0L0 43.3013L50 86.6026H150L200 43.3013L150 0H50Z" fill="#2ECC71"/>
  //   <path className="rail-hex-side" d="M150 86.6026L200 43.3013V93.3L150 136.6H50L0 93.3V43.3013L50 86.6026H150Z" fill="#31BF61"/>
  //   <path className="rail-side" d="M185.559 54V55.8013L179.309 61.214L29.3496 17.8778L29.2998 15.9208L35.5594 10.5L185.559 54Z" fill="#414040"/>
  //   <path className="rail-top" d="M185.56 53.8013L35.5596 10.5L29.3096 15.9127L179.31 59.214L185.56 53.8013Z" fill="#C4C4C4"/>
  //   <path className="rail-side" d="M169.5 69.714L19.5 26.4127V24.412L25.731 19.016L175.75 62.262V64.3013L169.5 69.714Z" fill="#414040"/>
  //   <path className="rail-top" d="M169.5 67.714L19.5 24.4127L25.75 19L175.75 62.3013L169.5 67.714Z" fill="#C4C4C4"/>
  //   <path className="street-hex-side" fill-rule="evenodd" clip-rule="evenodd" d="M125.805 47.8833L132.932 45.8258L79.6532 30.4456L72.5422 32.5078L125.805 47.8833ZM113.305 51.4917L35.5 73.952L10.5 52.3013V50.5L60.0708 36.1245L113.305 51.4917ZM92.1246 26.8289L145.432 42.2173L185.5 30.6507V28.65L160.5 7L92.1246 26.8289Z" fill="#414040"/>
  //   <path className="street-top" fill-rule="evenodd" clip-rule="evenodd" d="M122.34 46.8833L129.468 44.8258L79.4677 30.392L72.3404 32.4495L122.34 46.8833ZM109.84 50.4917L35.5 71.952L10.5 50.3013L59.8404 36.0579L109.84 50.4917ZM91.9677 26.7836L141.968 41.2173L185.5 28.6507L160.5 7L91.9677 26.7836Z" fill="#6C6C6C"/></g>,
  //   height: 137,
  //   category: 'rail',
  //   railConnections: [4,1],
  //   streetConnections: [3,0]
  // },
  // rail30street52SVG: {
  //   svg: <g><path className="rail-hex-top" d="M50 2L0 45.3013L50 88.6026H150L200 45.3013L150 2H50Z" fill="#2ECC71"/>
  //   <path className="rail-hex-side" d="M150 88.6026L200 45.3013V95.3L150 138.6H50L0 95.3V45.3013L50 88.6026H150Z" fill="#31BF61"/>
  //   <path className="rail-side" d="M14.4406 56V57.8013L20.6906 63.214L170.65 19.8778L170.7 17.9208L164.441 12.5L14.4406 56Z" fill="#414040"/>
  //   <path className="rail-top" d="M14.4404 55.8013L164.44 12.5L170.69 17.9127L20.6904 61.214L14.4404 55.8013Z" fill="#C4C4C4"/>
  //   <path className="rail-side" d="M30.5 71.714L180.5 28.4127V26.412L174.269 21.016L24.25 64.262V66.3013L30.5 71.714Z" fill="#414040"/>
  //   <path className="rail-top" d="M30.5 69.714L180.5 26.4127L174.25 21L24.25 64.3013L30.5 69.714Z" fill="#C4C4C4"/>
  //   <path className="street-hex-side" d="M83 86.5H118V88.5H83V86.5Z" fill="#414040"/>
  //   <path className="street-top" fill-rule="evenodd" clip-rule="evenodd" d="M83 0H118V25.9062L83 36.0099V0ZM83 43.2267V47.3416L118 37.238V33.1231L83 43.2267ZM83 54.5585L118 44.4549V86.6H83V54.5585Z" fill="#6C6C6C"/></g>,
  //   height: 139,
  //   category: 'rail',
  //   railConnections: [3,0],
  //   streetConnections: [5,2]
  // },
  // rail41street52SVG: {
  //   svg: <g><path className="rail-hex-top" d="M150 2L200 45.3013L150 88.6026H50L0 45.3013L50 2H150Z" fill="#2ECC71"/>
  //   <path className="rail-hex-side" d="M50 88.6026L0 45.3013V95.3L50 138.6H150L200 95.3V45.3013L150 88.6026H50Z" fill="#31BF61"/>
  //   <path className="rail-side" d="M185.559 56V57.8013L179.309 63.214L29.3496 19.8778L29.2998 17.9208L35.5594 12.5L185.559 56Z" fill="#414040"/>
  //   <path className="rail-top" d="M185.56 55.8013L35.5596 12.5L29.3096 17.9127L179.31 61.214L185.56 55.8013Z" fill="#C4C4C4"/>
  //   <path className="rail-side" d="M169.5 71.714L19.5 28.4127V26.412L25.731 21.016L175.75 64.262V66.3013L169.5 71.714Z" fill="#414040"/>
  //   <path className="rail-top" d="M169.5 69.714L19.5 26.4127L25.75 21L175.75 64.3013L169.5 69.714Z" fill="#C4C4C4"/>
  //   <path className="street-hex-side" d="M117 86.5H82V88.5H117V86.5Z" fill="#414040"/>
  //   <path className="street-top" fill-rule="evenodd" clip-rule="evenodd" d="M117 0H82V25.9062L117 36.0098V0ZM117 43.2267V47.3416L82 37.238V33.1231L117 43.2267ZM117 54.5585L82 44.4549V86.6H117V54.5585Z" fill="#6C6C6C"/></g>,
  //   height: 139,
  //   category: 'rail',
  //   railConnections: [4,1],
  //   streetConnections: [5,2]
  // },
  // rail30street42SVG: {
  //   svg: <g><path className="rail-hex-top" d="M150 0L200 43.3013L150 86.6026H50L0 43.3013L50 0H150Z" fill="#2ECC71"/>
  //   <path className="rail-hex-side" d="M50 86.6026L0 43.3013V93.3L50 136.6H150L200 93.3V43.3013L150 86.6026H50Z" fill="#31BF61"/>
  //   <path className="rail-side" d="M14.4406 54V55.8013L20.6906 61.214L170.65 17.8778L170.7 15.9208L164.441 10.5L14.4406 54Z" fill="#414040"/>
  //   <path className="rail-top" d="M14.4404 53.8013L164.44 10.5L170.69 15.9127L20.6904 59.214L14.4404 53.8013Z" fill="#C4C4C4"/>
  //   <path className="rail-side" d="M30.5 69.714L180.5 26.4127V24.412L174.269 19.016L24.25 62.262V64.3013L30.5 69.714Z" fill="#414040"/>
  //   <path className="rail-top" d="M30.5 67.714L180.5 24.4127L174.25 19L24.25 62.3013L30.5 67.714Z" fill="#C4C4C4"/>
  //   <path className="street-hex-side" fill-rule="evenodd" clip-rule="evenodd" d="M74.1955 47.8833L67.0682 45.8258L120.347 30.4456L127.458 32.5078L74.1955 47.8833ZM86.6955 51.4917L164.5 73.952L189.5 52.3013V50.5L139.929 36.1245L86.6955 51.4917ZM107.875 26.8289L54.5682 42.2173L14.5 30.6507V28.65L39.5 7L107.875 26.8289Z" fill="#414040"/>
  //   <path className="street-top" fill-rule="evenodd" clip-rule="evenodd" d="M77.6596 46.8833L70.5323 44.8258L120.532 30.392L127.66 32.4495L77.6596 46.8833ZM90.1596 50.4917L164.5 71.952L189.5 50.3013L140.16 36.0579L90.1596 50.4917ZM108.032 26.7836L58.0323 41.2173L14.5 28.6507L39.5 7L108.032 26.7836Z" fill="#6C6C6C"/></g>,
  //   height: 137,
  //   category: 'rail',
  //   railConnections: [3,0],
  //   streetConnections: [4,2]
  // },
}

export default railTiles