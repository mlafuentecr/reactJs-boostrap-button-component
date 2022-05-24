export const ButtonBaseBs = props => {
	//Destructuring props
	const { size = '', IconStart = '', children, className = '', IconEnd = '' } = props;

	//Icon component
	const Icon = ({ name }) => {
		if (name) return <span className={`bi ${name} mx-2`}></span>;
	};
	console.log(props);
	return (
		<button
			className={` ${className} rounded-md mx-1 px-3  rounded-md p-2 inline-flex items-center justify-center text-white hover:text-opacity-80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
		>
			<Icon name={`${IconStart}`} />
			{children}
			<Icon name={`${IconEnd}`} />
		</button>
	);
};
