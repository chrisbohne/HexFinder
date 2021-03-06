const natureTiles = {
  waterSVG: {
    svg: <g><path className="water-hex-top" d="M150 0L200 43.3013L150 86.6026H50L0 43.3013L50 0H150Z" fill="#00B2FF"/>
    <path className="water-hex-side" d="M50 86.6026L0 43.3013V68.3L50 111.6H150L200 68.3V43.3013L150 86.6026H50Z" fill="#1F50FF"/></g>,
    height: 111,
    category: 'nature'
  },
  forestSVG: {
    svg: <g><path className="forest-hex-top" d="M150 44L200 87.3013L150 130.603H50L0 87.3013L50 44H150Z" fill="#38E754"/>
    <path className="forest-hex-side" d="M50 130.603L0 87.3013V137.3L50 180.6H150L200 137.3V87.3013L150 130.603H50Z" fill="#31BF61"/>
    <path className="forest-trunk-right" d="M85.7752 46.8232H90.2167V73.4193L85.7752 76.2217V46.8232Z" fill="#AA7751"/>
    <path className="forest-trunk-left" d="M85.7752 46.8232H81.3337V73.4193L85.7752 76.2217V46.8232Z" fill="#C59161"/>
    <path className="forest-tree-front" d="M85.7752 0.240448L99.5125 63.6903H72.0379L85.7752 0.240448Z" fill="#378633"/>
    <path className="forest-tree-left" d="M85.8281 0.0818329L72.1233 63.6903L66 51.9521L85.8281 0.0818329Z" fill="#2E9129"/>
    <path className="forest-tree-right" d="M85.7752 0L99.48 63.6085L105.603 51.8703L85.7752 0Z" fill="#267522"/>
    <path className="forest-trunk-right" d="M45.7752 59.8232H50.2167V86.4193L45.7752 89.2217V59.8232Z" fill="#AA7751"/>
    <path className="forest-trunk-left" d="M45.7752 59.8232H41.3337V86.4193L45.7752 89.2217V59.8232Z" fill="#C59161"/>
    <path className="forest-tree-front" d="M45.7752 13.2404L59.5125 76.6903H32.0379L45.7752 13.2404Z" fill="#378633"/>
    <path className="forest-tree-left" d="M45.8281 13.0818L32.1233 76.6903L26 64.9521L45.8281 13.0818Z" fill="#2E9129"/>
    <path className="forest-tree-right" d="M45.7752 13L59.48 76.6085L65.6033 64.8703L45.7752 13Z" fill="#267522"/>
    <path className="forest-trunk-right" d="M65.7752 82.8232H70.2167V109.419L65.7752 112.222V82.8232Z" fill="#AA7751"/>
    <path className="forest-trunk-left" d="M65.7752 82.8232H61.3337V109.419L65.7752 112.222V82.8232Z" fill="#C59161"/>
    <path className="forest-tree-front" d="M65.7752 36.2404L79.5125 99.6903H52.0379L65.7752 36.2404Z" fill="#378633"/>
    <path className="forest-tree-left" d="M65.8281 36.0818L52.1233 99.6903L46 87.9521L65.8281 36.0818Z" fill="#2E9129"/>
    <path className="forest-tree-right" d="M65.7752 36L79.48 99.6085L85.6033 87.8703L65.7752 36Z" fill="#267522"/>
    <path className="forest-trunk-right" d="M135.775 46.8232H140.217V73.4193L135.775 76.2217V46.8232Z" fill="#AA7751"/>
    <path className="forest-trunk-left" d="M135.775 46.8232H131.334V73.4193L135.775 76.2217V46.8232Z" fill="#C59161"/>
    <path className="forest-tree-front" d="M135.775 0.240448L149.512 63.6903H122.038L135.775 0.240448Z" fill="#378633"/>
    <path className="forest-tree-left" d="M135.828 0.0818329L122.123 63.6903L116 51.9521L135.828 0.0818329Z" fill="#2E9129"/>
    <path className="forest-tree-right" d="M135.775 0L149.48 63.6085L155.603 51.8703L135.775 0Z" fill="#267522"/>
    <path className="forest-trunk-right" d="M110.775 81.8232H115.217V108.419L110.775 111.222V81.8232Z" fill="#AA7751"/>
    <path className="forest-trunk-left" d="M110.775 81.8232H106.334V108.419L110.775 111.222V81.8232Z" fill="#C59161"/>
    <path className="forest-tree-front" d="M110.775 35.2404L124.512 98.6903H97.0379L110.775 35.2404Z" fill="#378633"/>
    <path className="forest-tree-left" d="M110.828 35.0818L97.1233 98.6903L91 86.9521L110.828 35.0818Z" fill="#2E9129"/>
    <path className="forest-tree-right" d="M110.775 35L124.48 98.6085L130.603 86.8703L110.775 35Z" fill="#267522"/>
    <path className="forest-trunk-right" d="M157.775 68.8232H162.217V95.4193L157.775 98.2217V68.8232Z" fill="#AA7751"/>
    <path className="forest-trunk-left" d="M157.775 68.8232H153.334V95.4193L157.775 98.2217V68.8232Z" fill="#C59161"/>
    <path className="forest-tree-front" d="M157.775 22.2404L171.512 85.6903H144.038L157.775 22.2404Z" fill="#378633"/>
    <path className="forest-tree-left" d="M157.828 22.0818L144.123 85.6903L138 73.9521L157.828 22.0818Z" fill="#2E9129"/>
    <path className="forest-tree-right" d="M157.775 22L171.48 85.6085L177.603 73.8703L157.775 22Z" fill="#267522"/></g>,
    height: 180,
    category: 'nature'
  },
  mountainSVG: {
    svg: <g><path className="mountain-right" d="M200 157.801L150 201.103L100 0L200 157.801Z" fill="#595247"/>
    <path className="mountain-ice-right" d="M100 0L112.059 48.5V28.5L122.18 35L100 0Z" fill="#9B968E"/>
    <path className="mountain-middle" d="M150 201.103H50L100 0L150 201.103Z" fill="#80766D"/>
    <path className="mountain-ice-middle" d="M100 0L88 48.2646L103 37.5L112 48.2646L100 0Z" fill="#BDB7B1"/>
    <path className="mountain-left" d="M50 201.103L0 157.801L100 0L50 201.103Z" fill="#A59E94"/>
    <path className="mountain-ice-left" d="M76.5527 37L99.9999 0L87.9414 48.5L86.4999 30L76.5527 37Z" fill="#FAF5EE"/>
    <path className="mountain-hex-side" d="M50 200.603L0 157.301V207.3L50 250.6H150L200 207.3V157.301L150 200.603H50Z" fill="#AA7751"/></g>,
    height: 250,
    category: 'nature'
  }
}

export default natureTiles