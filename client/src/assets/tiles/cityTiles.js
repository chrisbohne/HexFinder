const cityTiles = {
  citySVG: {
    svg: <g><path className="city-hex-top" d="M150 68L200 111.301L150 154.603H50L0 111.301L50 68H150Z" fill="#919191"/>
    <path className="city-hex-side" d="M50 154.603L0 111.301V161.3L50 204.6H150L200 161.3V111.301L150 154.603H50Z" fill="#6A6A6A"/>
    <path className="city-side" d="M113.591 59.5989L147.828 39.832V129.342L113.591 149.109L113.591 59.5989Z" fill="#7424A6"/>
    <rect className="city-roof" width="79.8133" height="39.5337" transform="matrix(0.866025 0.5 -0.866025 0.5 78.6067 0)" fill="#464444"/>
    <rect className="city-box-top" width="14.7259" height="11.2584" transform="matrix(0.866025 0.5 -0.866025 0.5 114.923 29.1962)" fill="#C4C4C4"/>
    <path className="city-box-side" d="M117.901 42.1883L127.651 36.5591L127.651 40.7731L117.901 46.5616L105.148 39.6154L105.148 34.8254L117.901 42.1883Z" fill="#939393"/>
    <rect className="city-box-top" width="14.7259" height="11.2584" transform="matrix(0.866025 0.5 -0.866025 0.5 77.9233 8)" fill="#C4C4C4"/>
    <path className="city-box-side" d="M80.9011 20.9921L90.6512 15.3629L90.6512 19.577L80.9011 25.3655L68.1481 18.4193L68.1481 13.6292L80.9011 20.9921Z" fill="#939393"/>
    <path className="city-front" d="M44.5181 19.8414L113.638 59.7481L113.638 149.258L44.5178 108L44.5181 19.8414Z" fill="#863AB4"/>
    <path className="city-windows" d="M49.7593 31L55.7864 34.4798L55.7864 42.2849L49.7593 38.6872L49.7593 31Z" fill="#363636"/>
    <path className="city-windows" d="M49.7593 42L55.7864 45.4798L55.7864 53.2849L49.7593 49.6872L49.7593 42Z" fill="#363636"/>
    <path className="city-windows" d="M49.7593 53L55.7864 56.4798L55.7864 64.2849L49.7593 60.6872L49.7593 53Z" fill="#363636"/>
    <path className="city-windows" d="M49.7593 64L55.7864 67.4798L55.7864 75.2849L49.7593 71.6872L49.7593 64Z" fill="#363636"/>
    <path className="city-windows" d="M49.7593 75L55.7864 78.4798L55.7864 86.2849L49.7593 82.6872L49.7593 75Z" fill="#363636"/>
    <path className="city-windows" d="M49.7593 86L55.7864 89.4798L55.7864 97.2849L49.7593 93.6872L49.7593 86Z" fill="#363636"/>
    <path className="city-windows" d="M49.7593 97L55.7864 100.48L55.7864 108.285L49.7593 104.687L49.7593 97Z" fill="#363636"/>
    <path className="city-windows" d="M58.7593 36L64.7864 39.4798L64.7864 47.2849L58.7593 43.6872L58.7593 36Z" fill="#363636"/>
    <path className="city-windows" d="M58.7593 47L64.7864 50.4798L64.7864 58.2849L58.7593 54.6872L58.7593 47Z" fill="#363636"/>
    <path className="city-windows" d="M58.7593 58L64.7864 61.4798L64.7864 69.2849L58.7593 65.6872L58.7593 58Z" fill="#363636"/>
    <path className="city-windows" d="M58.7593 69L64.7864 72.4798L64.7864 80.2849L58.7593 76.6872L58.7593 69Z" fill="#363636"/>
    <path className="city-windows" d="M58.7593 80L64.7864 83.4798L64.7864 91.2849L58.7593 87.6872L58.7593 80Z" fill="#363636"/>
    <path className="city-windows" d="M58.7593 91L64.7864 94.4798L64.7864 102.285L58.7593 98.6872L58.7593 91Z" fill="#363636"/>
    <path className="city-windows" d="M58.7593 102L64.7864 105.48L64.7864 113.285L58.7593 109.687L58.7593 102Z" fill="#363636"/>
    <path className="city-windows" d="M67.7593 41L73.7864 44.4798L73.7864 52.2849L67.7593 48.6872L67.7593 41Z" fill="#363636"/>
    <path className="city-windows" d="M67.7593 52L73.7864 55.4798L73.7864 63.2849L67.7593 59.6872L67.7593 52Z" fill="#363636"/>
    <path className="city-windows" d="M67.7593 63L73.7864 66.4798L73.7864 74.2849L67.7593 70.6872L67.7593 63Z" fill="#363636"/>
    <path className="city-windows" d="M67.7593 74L73.7864 77.4798L73.7864 85.2849L67.7593 81.6872L67.7593 74Z" fill="#363636"/>
    <path className="city-windows" d="M67.7593 85L73.7864 88.4798L73.7864 96.2849L67.7593 92.6872L67.7593 85Z" fill="#363636"/>
    <path className="city-windows" d="M67.7593 96L73.7864 99.4798L73.7864 107.285L67.7593 103.687L67.7593 96Z" fill="#363636"/>
    <path className="city-windows" d="M67.7593 107L73.7864 110.48L73.7864 118.285L67.7593 114.687L67.7593 107Z" fill="#363636"/>
    <path className="city-windows" d="M76.7593 46L82.7864 49.4798L82.7864 57.2849L76.7593 53.6872L76.7593 46Z" fill="#363636"/>
    <path className="city-windows" d="M76.7593 57L82.7864 60.4798L82.7864 68.2849L76.7593 64.6872L76.7593 57Z" fill="#363636"/>
    <path className="city-windows" d="M76.7593 68L82.7864 71.4798L82.7864 79.2849L76.7593 75.6872L76.7593 68Z" fill="#363636"/>
    <path className="city-windows" d="M76.7593 79L82.7864 82.4798L82.7864 90.2849L76.7593 86.6872L76.7593 79Z" fill="#363636"/>
    <path className="city-windows" d="M76.7593 90L82.7864 93.4798L82.7864 101.285L76.7593 97.6872L76.7593 90Z" fill="#363636"/>
    <path className="city-windows" d="M76.7593 101L82.7864 104.48L82.7864 112.285L76.7593 108.687L76.7593 101Z" fill="#363636"/>
    <path className="city-windows" d="M76.7593 112L82.7864 115.48L82.7864 123.285L76.7593 119.687L76.7593 112Z" fill="#363636"/>
    <path className="city-windows" d="M85.7593 51L91.7864 54.4798L91.7864 62.2849L85.7593 58.6872L85.7593 51Z" fill="#363636"/>
    <path className="city-windows" d="M85.7593 62L91.7864 65.4798L91.7864 73.2849L85.7593 69.6872L85.7593 62Z" fill="#363636"/>
    <path className="city-windows" d="M85.7593 73L91.7864 76.4798L91.7864 84.2849L85.7593 80.6872L85.7593 73Z" fill="#363636"/>
    <path className="city-windows" d="M85.7593 84L91.7864 87.4798L91.7864 95.2849L85.7593 91.6872L85.7593 84Z" fill="#363636"/>
    <path className="city-windows" d="M85.7593 95L91.7864 98.4798L91.7864 106.285L85.7593 102.687L85.7593 95Z" fill="#363636"/>
    <path className="city-windows" d="M85.7593 106L91.7864 109.48L91.7864 117.285L85.7593 113.687L85.7593 106Z" fill="#363636"/>
    <path className="city-windows" d="M85.7593 117L91.7864 120.48L91.7864 128.285L85.7593 124.687L85.7593 117Z" fill="#363636"/>
    <path className="city-windows" d="M94.7593 56L100.786 59.4798L100.786 67.2849L94.7593 63.6872L94.7593 56Z" fill="#363636"/>
    <path className="city-windows" d="M94.7593 67L100.786 70.4798L100.786 78.2849L94.7593 74.6872L94.7593 67Z" fill="#363636"/>
    <path className="city-windows" d="M94.7593 78L100.786 81.4798L100.786 89.2849L94.7593 85.6872L94.7593 78Z" fill="#363636"/>
    <path className="city-windows" d="M94.7593 89L100.786 92.4798L100.786 100.285L94.7593 96.6872L94.7593 89Z" fill="#363636"/>
    <path className="city-windows" d="M94.7593 100L100.786 103.48L100.786 111.285L94.7593 107.687L94.7593 100Z" fill="#363636"/>
    <path className="city-windows" d="M94.7593 111L100.786 114.48L100.786 122.285L94.7593 118.687L94.7593 111Z" fill="#363636"/>
    <path className="city-windows" d="M94.7593 122L100.786 125.48L100.786 133.285L94.7593 129.687L94.7593 122Z" fill="#363636"/>
    <path className="city-windows" d="M103.759 61L109.786 64.4798L109.786 72.2849L103.759 68.6872L103.759 61Z" fill="#363636"/>
    <path className="city-windows" d="M103.759 72L109.786 75.4798L109.786 83.2849L103.759 79.6872L103.759 72Z" fill="#363636"/>
    <path className="city-windows" d="M103.759 83L109.786 86.4798L109.786 94.2849L103.759 90.6872L103.759 83Z" fill="#363636"/>
    <path className="city-windows" d="M103.759 94L109.786 97.4798L109.786 105.285L103.759 101.687L103.759 94Z" fill="#363636"/>
    <path className="city-windows" d="M103.759 105L109.786 108.48L109.786 116.285L103.759 112.687L103.759 105Z" fill="#363636"/>
    <path className="city-windows" d="M103.759 116L109.786 119.48L109.786 127.285L103.759 123.687L103.759 116Z" fill="#363636"/>
    <path className="city-windows" d="M103.759 127L109.786 130.48L109.786 138.285L103.759 134.687L103.759 127Z" fill="#363636"/>
    <path className="city-windows" d="M128.942 60L119.071 65.6994L119.071 78.4829L128.942 72.5905L128.942 60Z" fill="#363636"/>
    <path className="city-windows" d="M128.942 80L119.071 85.6994L119.071 98.4829L128.942 92.5905L128.942 80Z" fill="#363636"/>
    <path className="city-windows" d="M128.942 100L119.071 105.699L119.071 118.483L128.942 112.591L128.942 100Z" fill="#363636"/>
    <path className="city-windows" d="M128.942 120L119.071 125.699L119.071 138.483L128.942 132.591L128.942 120Z" fill="#363636"/>
    <path className="city-windows" d="M143.942 52L134.071 57.6994L134.071 70.4829L143.942 64.5905L143.942 52Z" fill="#363636"/>
    <path className="city-windows" d="M143.942 72L134.071 77.6994L134.071 90.4829L143.942 84.5905L143.942 72Z" fill="#363636"/>
    <path className="city-windows" d="M143.942 92L134.071 97.6994L134.071 110.483L143.942 104.591L143.942 92Z" fill="#363636"/>
    <path className="city-windows" d="M143.942 112L134.071 117.699L134.071 130.483L143.942 124.591L143.942 112Z" fill="#363636"/></g>,
    category: 'city',
    railConnections: [0,1,2,3,4,5],
    streetConnections: [0,1,2,3,4,5],
    airport: true,
    height: 204
  },
  townSVG: {
    svg: <g><path className="town-hex-top" d="M150 76L200 119.301L150 162.603H50L0 119.301L50 76H150Z" fill="#2ECC71"/>
    <path className="town-hex-side" d="M50 162.603L0 119.301V169.3L50 212.6H150L200 169.3V119.301L150 162.603H50Z" fill="#31BF61"/>
    <path className="town-front" d="M49.7554 123.228L99.7798 152.11L99.7797 78.3012L49.7554 49.4196L49.7554 123.228Z" fill="#ECF0F1"/>
    <path className="town-side" d="M99.7334 152.11L149.758 123.228L149.758 49.4196L99.7334 78.3012L99.7334 152.11Z" fill="#BDC3C7"/>
    <rect className="town-roof-top" width="64.1813" height="64.1813" transform="matrix(0.866025 0.5 -0.866025 0.5 99.8232 0)" fill="#FDE74C"/>
    <path className="town-roof-side" d="M155.393 46.2105L99.8108 78.3012L44.2282 46.2105L44.2282 32.0906L99.8108 64.1813L155.393 32.0906L155.393 46.2105Z" fill="#FFCE1F"/>
    <rect className="town-pillar" x="83.3909" y="113.601" width="5.77632" height="34.6579" rx="2.88816" fill="#C4C4C4"/>
    <rect className="town-pillar" x="67.3455" y="107.183" width="5.77632" height="34.6579" rx="2.88816" fill="#C4C4C4"/>
    <rect className="town-pillar" x="53.8674" y="98.8392" width="5.77632" height="34.6579" rx="2.88816" fill="#C4C4C4"/>
    <rect className="town-roof-top" width="44.725" height="14.0256" transform="matrix(0.866025 0.5 -0.866025 0.5 55.2679 84.0775)" fill="#FDE74C"/>
    <path className="roof-side" d="M81.8545 126.289L94.001 119.276L94.001 106.541L81.8545 113.408L43.1215 91.1374L43.1215 103.927L81.8545 126.289Z" fill="#FFCE1F"/>
    <path className="town-window" d="M55.1511 63.8842C55.1511 60.8581 57.2756 59.6315 59.8963 61.1446V61.1446C62.5169 62.6576 64.6414 66.3373 64.6414 69.3634L64.6414 82.2787L55.1511 76.7995L55.1511 63.8842Z" fill="#3498DB"/>
    <path className="town-window" d="M142.943 64.526C142.943 61.4999 140.818 60.2733 138.197 61.7864V61.7864C135.577 63.2994 133.452 66.9791 133.452 70.0052L133.452 82.9205L142.943 77.4413L142.943 64.526Z" fill="#3498DB"/>
    <path className="town-window" d="M142.943 90.1985C142.943 87.1724 140.818 85.9459 138.197 87.4589V87.4589C135.577 88.972 133.452 92.6516 133.452 95.6777L133.452 108.593L142.943 103.114L142.943 90.1985Z" fill="#3498DB"/>
    <path className="town-window" d="M68.6292 70.9441C68.6292 67.918 70.7536 66.6915 73.3743 68.2045V68.2045C75.995 69.7176 78.1194 73.3973 78.1194 76.4233L78.1194 89.3386L68.6291 83.8594L68.6292 70.9441Z" fill="#3498DB"/>
    <path className="town-window" d="M129.464 71.586C129.464 68.5599 127.34 67.3333 124.719 68.8464V68.8464C122.099 70.3594 119.974 74.0391 119.974 77.0652L119.974 89.9805L129.464 84.5013L129.464 71.586Z" fill="#3498DB"/>
    <path className="town-window" d="M129.464 97.2584C129.464 94.2324 127.34 93.0058 124.719 94.5188V94.5188C122.099 96.0319 119.974 99.7116 119.974 102.738L119.974 115.653L129.464 110.174L129.464 97.2584Z" fill="#3498DB"/>
    <path className="town-window" d="M82.1072 78.0041C82.1072 74.978 84.2317 73.7514 86.8523 75.2645V75.2645C89.473 76.7775 91.5975 80.4572 91.5975 83.4833L91.5975 96.3986L82.1072 90.9194L82.1072 78.0041Z" fill="#3498DB"/>
    <path className="town-window" d="M115.986 78.6458C115.986 75.6198 113.862 74.3932 111.241 75.9062V75.9062C108.621 77.4193 106.496 81.099 106.496 84.1251L106.496 97.0404L115.986 91.5611L115.986 78.6458Z" fill="#3498DB"/>
    <path className="town-window" d="M115.986 104.318C115.986 101.292 113.862 100.066 111.241 101.579V101.579C108.621 103.092 106.496 106.772 106.496 109.798L106.496 122.713L115.986 117.234L115.986 104.318Z" fill="#3498DB"/>
    <path className="town-window" d="M80.0835 57.7632C80.0835 63.2574 74.6709 66.6075 69.9128 63.8604C65.1547 61.1133 60.2856 53.9511 60.2856 48.4569C60.2856 42.9627 66.7101 40.094 71.4682 42.8411C76.2263 45.5882 80.0835 52.269 80.0835 57.7632Z" fill="#3498DB"/>
    <circle className="town-clock" r="9.9481" transform="matrix(0.866025 0.5 -2.20305e-08 1 68.901 54.0727)" fill="#6BC2FC"/>
    <line x1="68.3455" y1="46.2106" x2="68.3455" y2="53.9123" stroke="black" stroke-width="2"/>
    <line x1="68.0526" y1="53.2052" x2="71.6832" y2="56.8358" stroke="black" stroke-width="2"/></g>,
    category: 'city',
    railConnections: [0,1,2,3,4,5],
    streetConnections: [0,1,2,3,4,5],
    airport: false,
    height: 213
  },
  villageSVG: {
    svg: <g><path className="village-hex-top" d="M150 24L200 67.3013L150 110.603H50L0 67.3013L50 24H150Z" fill="#2ECC71"/>
    <path className="village-hex-side" d="M50 110.603L0 67.3013V117.3L50 160.6H150L200 117.3V67.3013L150 110.603H50Z" fill="#31BF61"/>
    <path className="village-front" d="M56.0745 64.6685L116.409 99.5028L116.409 66.9908L56.0745 32.1566L56.0745 64.6685Z" fill="#E9D49E"/>
    <path className="village-side" d="M116.406 66.9908L116.406 99.5028L148.584 80.9246L148.584 48.4126L116.406 66.9908Z" fill="#FFD568"/>
    <rect width="69.6685" height="37.1566" transform="matrix(0.866025 0.5 -0.866025 0.5 88.2976 13.5783)" fill="#C4C4C4"/>
    <path className="village-roof-front" d="M116.335 66.9908L56 32.1566L82 0.72197L132.424 29.8343L148.513 48.4126L132.424 57.7017L116.335 66.9908Z" fill="#FF8888"/>
    <path className="village-roof-side" d="M148.558 48.4126L132.469 57.7017L116.379 66.9908L132.469 29.8343L148.558 48.4126Z" fill="#FF6060"/>
    <rect className="village-door" width="13.4693" height="19.9716" transform="matrix(0.866025 0.5 -2.20305e-08 1 76.6862 56.587)" fill="#AA7751"/>
    <rect className="village-window" width="20.9006" height="15.3271" transform="matrix(0.866025 -0.5 2.20305e-08 1 124.525 71.4032)" fill="#3498DB"/>
    <rect className="village-window" width="11.6114" height="11.6114" transform="matrix(0.866025 0.5 -2.20305e-08 1 97.1223 65.5975)" fill="#3498DB"/>
    <rect className="village-window" width="11.6114" height="11.6114" transform="matrix(0.866025 0.5 -2.20305e-08 1 62.2881 45.1614)" fill="#3498DB"/></g>,
    category: 'city',
    streetConnections: [0,1,2,3,4,5],
    airport: false,
    height: 161
  },
  sightSVG: {
    svg: <g><path className="sight-hex-top" d="M150 42.278L200 85.5793L150 128.881H50L0 85.5793L50 42.278H150Z" fill="#95A5A6"/>
    <path className="sight-hex-side" d="M50 128.881L0 85.5793V135.578L50 178.878H150L200 135.578V85.5793L150 128.881H50Z" fill="#7F8C8D"/>
    <path className="sight-side" d="M127.113 54.957L127.113 120.739L142.101 105.622L142.101 39.9687L127.113 54.957Z" fill="#D35400"/>
    <path className="sight-side" d="M75.2781 24.9805L75.2781 90.7623L90.2664 75.6457L90.2664 42.8189L75.2781 24.9805Z" fill="#D35400"/>
    <path className="sight-front" d="M58 14.9883L58 80.7701L75.2781 90.7456L75.2781 57.8547C90.5469 54.6786 98.3105 57.8362 109.834 77.8058L109.834 110.697L127.113 120.672L127.113 54.8904L109.834 44.9149L92.5563 34.9393L75.2781 24.9638L58 14.9883Z" fill="#E67E22"/>
    <path className="sight-top" d="M142.101 39.9687L72.9883 0L58 14.9883L127.113 54.957L142.101 39.9687Z" fill="#F39C12"/></g>,
    category: 'city',
    streetConnections: [0,1,2,3,4,5],
    airport: false,
    height: 179
  }
}

export default cityTiles