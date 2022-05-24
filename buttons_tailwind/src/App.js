import { BaseButtonBs } from './components/Button';

function App() {
	return (
		<div classNameNameName='App'>
			<main classNameNameName='main container'>
				<div className='container mx-auto'>
					<h1 className='font-bold underline my-8 text-[40px]'>Hello Buttons </h1>
				</div>

				<div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
					<div className='md:flex'>
						<div className='md:shrink-0 w-40 bg-brand-500 text-center text-white flex h-100 justify-center items-center'>img</div>
						<div className='p-8'>
							<div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>Case study</div>
							<a href='#' className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
								Finding customers for your new business
							</a>
							<p className='mt-2 text-slate-500'>Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
						</div>
					</div>
				</div>

				<div className='container mx-auto mt-10'>
					<BaseButtonBs variant='base' IconStart='bi-heart-fill' data-bs-toggle='tooltip' data-bs-placement='top' title='Tooltip on top'>
						default
					</BaseButtonBs>
					<BaseButtonBs variant='primary' IconEnd='bi-arrow-clockwise' disabled>
						default
					</BaseButtonBs>
					<BaseButtonBs variant='text' IconEnd='bi-trash'>
						text
					</BaseButtonBs>
				</div>
			</main>
		</div>
	);
}

export default App;
