import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App () {
	
	return (
		<section className='dpF fdC g0_5rem'>
			<TwitterFollowCard isFollowing userName="midudev">
				Miguel Ángel Durán
			</TwitterFollowCard>

			<TwitterFollowCard isFollowing={false} userName="pheralb" >
				Pablo Hernandez
			</TwitterFollowCard>
		</section>
	)
}

export { App }