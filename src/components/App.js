import React from 'react'

//import SimpleComponent from './SimpleComponent';
const SimpleComponent = React.lazy(() => import('./SimpleComponent'));

const loading = (
	<div className="pt-3 text-center">
	  <div className="sk-spinner sk-spinner-pulse"></div>
	</div>
  )  

const App = () => {
	return (
		<div className='app'>
			<React.Suspense fallback={loading}>
				<SimpleComponent/>
			</React.Suspense>
		</div>
	)
}

export default App
