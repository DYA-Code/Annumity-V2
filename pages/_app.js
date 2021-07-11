import '../styles/globals.css'

// Bootstrap@next
import 'bootstrap/dist/css/bootstrap.css'

// Font Awesome
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
