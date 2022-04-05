import React, { Suspense } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";

const App = React.lazy(() => import("./App"));
const Login = React.lazy(() => import("./components/LoginForm"));

const ControlPanel = React.lazy(() =>
	import("./components/ControlPanel/Layout")
);

function PrivateRoute({ children, ...rest }) {
	const auth = useSelector((state) => state.firebase.auth);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isLoaded(auth) && !isEmpty(auth) ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

const Main = ({ auth }) => {
	console.log(auth);
	return (
		<HashRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route
						exact
						path="/login"
						name="Login"
						render={(props) => <Login {...props} />}
					/>
					<Route
						exact
						path="/"
						name="Wedding Praatfika & Ratna"
						render={(props) => <App {...props} />}
					/>
					<Route
						path="/cp/dashboard"
						name="Control Panel"
						render={(props) =>
							!auth.isEmpty ? <ControlPanel {...props} /> : <Login {...props} />
						}
					/>
				</Switch>
			</Suspense>
		</HashRouter>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
	};
};

export default connect(mapStateToProps)(Main);
