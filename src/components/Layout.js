import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styles from "../styles/styles.module.scss"
import layoutStyles from "./Layout.module.scss"

const Layout = ({ children, home }) => {
  const [atTop, setAtTop] = useState(true);
  const scrollListener = () => setAtTop(window.scrollY === 0)

  const [smallHeader, setSmallHeader] = useState(home)
  const resizeListener = () => setSmallHeader(home || window.innerWidth <= 640) // small screen size according to tailwind allegedly

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
    window.addEventListener('resize', resizeListener)
    resizeListener()
    return () => {
      window.removeEventListener('scroll', scrollListener)
      window.removeEventListener('resize', resizeListener)
    }
  })

  return (
    <>
      <header className={`bg-white fixed w-full flex justify-center z-10 ${layoutStyles.header} ${(!atTop || smallHeader) && layoutStyles.small} ${atTop || layoutStyles.scroll}`}>
        <div className="flex items-center justify-between px-8 w-full max-w-screen-md">
          <Link to="/">
            <svg className={`h-8 ${layoutStyles.logo} ${styles.drawing}`} viewBox="0 5 231 61" overflow="visible">
              <path d="m 35.919521,49.652412 c 0,0 -5.535356,7.195965 -12.3992,7.195965 -6.863841,0 -8.85657,-7.970914 -8.85657,-7.970914 0,0 5.092527,-2.656972 7.970913,-4.6497 C 25.513048,42.235035 27.395072,31.607148 18.317087,33.932002 9.4408971,36.205175 4.0358671,56.73767 4.0358671,56.73767 c 0,0 -2.656971,-21.145063 3.210507,-41.29376 C 13.113851,-4.7047867 21.970421,2.8232982 19.645572,15.222496 17.320722,27.621695 4.1465741,36.478265 4.1465741,36.478265" />
              <path className={layoutStyles.w} d="m 147.95901,44.01825 c 0,0 -3.57705,1.326335 -7.89463,0.883507 -4.31757,-0.44283 -7.10486,-8.947669 -3.0087,-11.27252 4.09617,-2.324849 1.24219,6.644741 -2.52185,13.287169 -3.76404,6.642425 -9.85774,10.605963 -9.85774,10.605963 0,0 -0.67085,-5.877708 -1.22439,-9.420336 -0.55354,-3.542628 -1.09595,-14.442686 -1.09595,-14.442686 0,0 -1.70609,6.198105 -4.36306,12.397703 -2.65697,6.1996 -9.04448,11.542527 -9.04448,11.542527 0,0 -1.36465,-7.780893 -1.80748,-11.877056 -0.44283,-4.096165 -0.83525,-12.390787 -0.83525,-12.390787" />
              <g className={(!atTop || smallHeader) && "opacity-0"}>
                <path d="m 79.759539,33.378465 c 0,0 -1.43919,5.313942 -4.53899,11.513542 -3.0998,6.199598 -9.85293,12.620612 -9.85293,12.620612 0,0 -2.43556,-4.20687 -2.9891,-8.85657 -0.55353,-4.6497 -0.77494,-15.498998 -0.77494,-15.498998 l 0.66424,15.388291 c 0,0 -3.21051,3.653335 -10.738593,6.642428 -7.528087,2.989091 -15.498998,0.553535 -16.052533,-10.517177 -0.553538,-11.070714 13.39556,-16.163242 15.609705,-7.306672 2.214141,8.85657 -15.166877,12.288491 -15.166877,12.288491" />
                <path d="m 224.75533,59.84722 c 0,0 -10.67883,6.514449 -15.07603,14.190401 -1.06848,1.86518 -2.63711,7.286799 -0.75508,10.608019 1.88202,3.321211 7.8602,0.88565 11.51354,-7.41738 3.65333,-8.30304 7.8602,-41.625909 7.8602,-41.625909 l -2.76767,15.166877 c 0,0 -1.4392,1.549901 -2.87839,2.878387 -1.43919,1.328486 -11.91982,8.958514 -13.02689,-4.437073 -1.10707,-13.395564 14.65065,-16.316267 14.65065,-16.316267 0,0 -6.77465,1.895001 -10.60585,5.633072 -5.54493,5.410141 -4.91362,12.352588 -4.91362,12.352588 0,0 0.56367,-0.07719 -4.75028,3.576151 -5.31394,3.653332 -11.46635,4.726892 -7.48089,-12.322013 3.98546,-17.048893 -7.41433,-2.382677 -8.61529,0.07947 -1.77132,2.324851 -7.10512,14.976705 -7.10512,14.976705 0,0 -0.55354,-2.324851 -0.77495,-8.303035 -0.22142,-5.978186 2.10343,-15.277584 2.10343,-15.277584 0,0 -1.21778,3.431921 -1.66061,6.753135 -0.44282,3.321214 -0.33212,8.413742 -0.33212,8.413742 0,0 -2.10343,2.65697 -5.64606,5.978184 -3.54263,3.321208 -7.19596,2.989093 -8.96728,-2.435556 -1.77131,-5.424649 1.4392,-17.491726 1.4392,-17.491726 0,0 0,0.664242 -3.32122,12.177784 -3.32121,11.513537 -11.37271,12.397057 -14.58322,6.640277 -3.21051,-5.756772 -0.3541,-11.921464 2.43991,-15.229835 3.62108,-4.2877 11.20094,-5.55158 11.20094,-5.55158 0,0 -3.8902,0.152617 -8.62445,3.396149 -2.78216,1.906112 -6.11917,7.758047 -6.11917,7.758047" />
              </g>
            </svg>
          </Link>
          <div className="space-x-10 font-sans text-lg font-light tracking-wide">
            <Link to="/" className={`px-3 py-1 ${styles.highlight}`}>Home</Link>
            <Link to="/blog" className={`px-3 py-1 ${styles.highlight}`}>Blog</Link>
          </div>
        </div>
      </header>
      <main className={`box-border ${smallHeader ? "pt-16" : "pt-40"}`}>
        {children}
      </main>
      <footer className="flex items-center justify-center">
        <div className={`h-20 max-w-screen-md w-full px-12 md:px-6 flex ${styles.divider}`}>
          <div className="h-full w-full flex items-center justify-between text-gray-500 font-light">
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/kevinzwang/kevwang.dev" className={styles.highlight}>kevwang.dev</a>
            </div>
            <div>Built with Gatsby and Netlify</div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout