import "@/web/styles.css"

const App = ({ Component, pageProps, ...otherProps }) => (
  <Component {...pageProps} {...otherProps} />
)

export default App
