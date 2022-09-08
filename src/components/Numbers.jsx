import Content from './Content';
import Number from './Number'

const Numbers = () => {
	return ( 
		<section className="w-screen md:h-[800px] p-4 md:p-16">
			<Number />
			<Content />
		</section>
	 );
}
 
export default Numbers;