import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "../app/store"
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth"

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
	return (
		<SessionProvider session={pageProps.session}>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</SessionProvider>
	)
}

export default MyApp
